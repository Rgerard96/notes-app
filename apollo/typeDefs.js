import { gql } from '@apollo/client';

export const typeDefs = gql`
  type Category {
    id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Note {
    id: ID!
    title: String!
    body: String!
    category: Category!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getCategories: [Category]
    getNote(noteId: ID!): Note
    getNotes(categoryId: ID!): [Note]
  }

  type Mutation {
    createCategory(name: String!): Category!
    deleteCategory(categoryId: ID!): String!
    createNote(title: String!, body: String!, categoryId: ID!): Note!
    deleteNote(noteId: ID!): String!
  }
`;
