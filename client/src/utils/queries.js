import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      blogPosts {
        _id
        blogTitle
        blogPostText
        createdAt
      }
    }
  }
`;

export const QUERY_BLOGPOSTS = gql`
  query getBlogPosts {
    blogPosts {
      _id
      blogTitle
      blogPostText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_BLOGPOST = gql`
  query getSingleBlogPost($blogPostId: ID!) {
    blogPost(blogPostId: $blogPostId) {
      _id
      blogTitle
      blogPostText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      blogPosts {
        _id
        blogTitle
        blogPostText
        createdAt
      }
    }
  }
`;
