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
      blogPostText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($blogPostId: ID!, $commentText: String!) {
    addComment(blogPostId: $blogPostId, commentText: $commentText) {
      _id
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

export const REMOVE_MEAL = gql`
  mutation removeMeal($commentId: ID!) {
    removeMeal(commentId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;
