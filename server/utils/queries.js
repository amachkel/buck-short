import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      blogposts {
        _id
        blogPostText
        createdAt
      }
    }
  }
`;

export const QUERY_BLOGPOSTS = gql`
  query getBlogposts {
    blogposts {
      _id
      blogPostText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_BLOGPOST = gql`
  query getSinglePost($blogPostId: ID!) {
    blogPost(blogPostId: $blogPostId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      blogposts {
        _id
        blogPostText
        postAuthor
        createdAt
      }
    }
  }
`;
