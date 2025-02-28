/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  /** The first name of the author */
  firstName: Scalars['String']['output'];
  /** The full name of the author */
  fullName: Scalars['String']['output'];
  /** The id of the author */
  id: Scalars['ID']['output'];
  /** The last name of the author */
  lastName: Scalars['String']['output'];
};

export type AuthorSearchInput = {
  /** Filter authors with associated books that somehow match this search term (fuzzy search). */
  bookSearchTerm?: InputMaybe<Scalars['String']['input']>;
  /** Filter authors with names that somehow match this search term (fuzzy search). */
  nameSearchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type Book = {
  __typename?: 'Book';
  /** The abstract of the book */
  abstract: Scalars['String']['output'];
  /** The author of the book */
  author: Array<Author>;
  /** The cover url of the book */
  cover: Scalars['String']['output'];
  /** The id of the book. This is the same as isbn. */
  id: Scalars['ID']['output'];
  /** The isbn of the book. This is the same as id */
  isbn: Scalars['String']['output'];
  /** The number of pages of a book */
  numPages: Scalars['Int']['output'];
  /** The price of the book */
  price: Scalars['String']['output'];
  /** The publisher of the book */
  publisher: Scalars['String']['output'];
  /** The subtitle of the book */
  subtitle: Scalars['String']['output'];
  /** The title of the book. */
  title: Scalars['String']['output'];
};

export type CreateBookInput = {
  /** The abstract of the book */
  abstract: Scalars['String']['input'];
  /** The authors of the book. This may be a comma seperated string of authors */
  author: Scalars['String']['input'];
  /** The cover url of the book */
  cover: Scalars['String']['input'];
  /** The isbn of the book. This is the same as id */
  isbn: Scalars['String']['input'];
  /** The number of pages of a book */
  numPages: Scalars['Int']['input'];
  /** The price of the book */
  price: Scalars['String']['input'];
  /** The publisher of the book */
  publisher: Scalars['String']['input'];
  /** The subtitle of the book */
  subtitle: Scalars['String']['input'];
  /** The title of the book. */
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  removeBook: Book;
  updateBook: Book;
};


export type MutationCreateBookArgs = {
  createBookInput: CreateBookInput;
};


export type MutationRemoveBookArgs = {
  isbn: Scalars['String']['input'];
};


export type MutationUpdateBookArgs = {
  isbn: Scalars['String']['input'];
  updateBookInput: UpdateBookInput;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Array<Author>;
  book: Book;
  books: Array<Book>;
};


export type QueryAuthorArgs = {
  id: Scalars['String']['input'];
};


export type QueryAuthorsArgs = {
  search?: InputMaybe<AuthorSearchInput>;
};


export type QueryBookArgs = {
  isbn: Scalars['String']['input'];
};


export type QueryBooksArgs = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookInput = {
  /** The abstract of the book */
  abstract?: InputMaybe<Scalars['String']['input']>;
  /** The authors of the book. This may be a comma seperated string of authors */
  author?: InputMaybe<Scalars['String']['input']>;
  /** The cover url of the book */
  cover?: InputMaybe<Scalars['String']['input']>;
  /** The isbn of the book. This is the same as id */
  isbn?: InputMaybe<Scalars['String']['input']>;
  /** The number of pages of a book */
  numPages?: InputMaybe<Scalars['Int']['input']>;
  /** The price of the book */
  price?: InputMaybe<Scalars['String']['input']>;
  /** The publisher of the book */
  publisher?: InputMaybe<Scalars['String']['input']>;
  /** The subtitle of the book */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** The title of the book. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type GetBookByIsbnQueryVariables = Exact<{
  isbn: Scalars['String']['input'];
}>;


export type GetBookByIsbnQuery = { __typename?: 'Query', book: { __typename?: 'Book', title: string } };

export type GetBooksBySearchTermQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetBooksBySearchTermQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', isbn: string, title: string, author: Array<{ __typename?: 'Author', fullName: string }> }> };


export const GetBookByIsbnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBookByIsbn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isbn"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"isbn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isbn"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetBookByIsbnQuery, GetBookByIsbnQueryVariables>;
export const GetBooksBySearchTermDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBooksBySearchTerm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]} as unknown as DocumentNode<GetBooksBySearchTermQuery, GetBooksBySearchTermQueryVariables>;