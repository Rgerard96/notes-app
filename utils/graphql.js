import { gql } from '@apollo/client';

const GET_CATEGORIES = gql`
  {
    getCategories {
      id
      name
      updatedAt
    }
  }
`;

const GET_NOTES = gql`
  query getNotes($categoryId: ID!) {
    getNotes(categoryId: $categoryId) {
      id
      title
      body
      updatedAt
    }
  }
`;

export { GET_CATEGORIES, GET_NOTES };
