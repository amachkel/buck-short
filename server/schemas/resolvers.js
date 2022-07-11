const { AuthenticationError } = require("apollo-server-express");
const { User, BlogPost } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("blogPosts");
    },
    user: async (parent, { firstName, lastName }) => {
      return User.findOne({ firstName, lastName }).populate("blogPosts");
    },
    blogPosts: async (parent, { firstName, lastName }) => {
      const params = firstName && lastName ? { firstName, lastName } : {};
      return BlogPost.find(params).sort({ createdAt: -1 });
    },
    blogPost: async (parent, { blogPostId }) => {
      return BlogPost.findOne({ _id: blogPostId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("blogPosts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addBlogPost: async (parent, { blogPostText }, context) => {
      if (context.user) {
        const blogPost = await BlogPost.create({
          blogPostText,
          postAuthor: context.user.firstName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { blogPosts: blogPost._id } }
        );

        return blogPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { blogPostId, commentText }, context) => {
      if (context.user) {
        return BlogPost.findOneAndUpdate(
          { _id: blogPostId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.firstName },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeBlogPost: async (parent, { blogPostId }, context) => {
      if (context.user) {
        const blogPost = await BlogPost.findOneAndDelete({
          _id: blogPostId,
          postAuthor: context.user.firstName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { blogPosts: blogPost._id } }
        );

        return blogPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { blogPostId, commentId }, context) => {
      if (context.user) {
        return BlogPost.findOneAndUpdate(
          { _id: blogPostId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.firstName,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
