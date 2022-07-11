const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    blogPosts: [BlogPost]!
  }

  type BlogPost {
    _id: ID
    blogTitle: String
    blogPostText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(firstName: String!): User
    blogPosts(firstName: String): [BlogPost]
    blogPost(blogPostId: ID!): BlogPost
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addBlogPost(blogPostText: String!): BlogPost
    addComment(blogPostId: ID!, commentText: String!): BlogPost
    removeBlogPost(blogPostId: ID!): BlogPost
    removeComment(blogPostId: ID!, commentId: ID!): BlogPost
  }
`;

module.exports = typeDefs;
