import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_BLOGPOST = gql`
  mutation addBlogPost($blogPostText: String!) {
    addBlogPost(blogPostText: $blogPostText) {
      _id
      blogTitle
      blogPostText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $blogPostId: ID!
    $commentAuthor: String!
    $commentText: String!
  ) {
    addComment(
      blogPostId: $blogPostId
      commentAuthor: $commentAuthor
      commentText: $commentText
    ) {
      _id
      blogPostText
      postAuthor
      createdAt
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_BLOGPOST = gql`
  mutation removeBlogPost($blogPostId: ID!) {
    removeBlogPost(blogPostId: $blogPostId) {
      _id
      blogTitle
      blogPostText
      postAuthor
      createdAt
      comments {
        _id
        commentAuthor
        commentText
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
`;
