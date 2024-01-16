import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** Mongo Object ID scalar type */
  ObjectId: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  hashedPassword?: Maybe<Scalars['String']['output']>;
  hashedRefreshToken?: Maybe<Scalars['String']['output']>;
  role: Roles;
  status: AccountStatuses;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export enum AccountStatuses {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Invited = 'INVITED'
}

export type CategoriesPayload = {
  __typename?: 'CategoriesPayload';
  collection: Array<Category>;
  totalCount: Scalars['Float']['output'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String']['output'];
  categoryName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parentCategoryId?: Maybe<Scalars['ObjectId']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type ChangeProductStatusInput = {
  productId: Scalars['ObjectId']['input'];
  status: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentCategoryId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type CreateProductInput = {
  categoryId?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  role: Roles;
};

export type GetCategoryFilterInput = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type GetProductsFilterInput = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetUsersFilterInput = {
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeProductStatus: Product;
  createCategory: Category;
  createProduct: Product;
  createUser: User;
  deleteCategoryById: Scalars['Boolean']['output'];
  deleteProductById: Scalars['Boolean']['output'];
  login: TokensModel;
  refreshTokens: TokensModel;
  updateCategory: Category;
  updateProduct: Product;
};


export type MutationChangeProductStatusArgs = {
  input: ChangeProductStatusInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCategoryByIdArgs = {
  categoryId: Scalars['ObjectId']['input'];
};


export type MutationDeleteProductByIdArgs = {
  productId: Scalars['ObjectId']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};

export type PaginationInput = {
  limit?: Scalars['Float']['input'];
  skip?: Scalars['Float']['input'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String']['output'];
  categoryId?: Maybe<Scalars['ObjectId']['output']>;
  categoryName: Scalars['String']['output'];
  code: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  status: ProductStatuses;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export enum ProductStatuses {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type ProductsOutput = {
  __typename?: 'ProductsOutput';
  collection: Array<Product>;
  totalCount: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCategories: CategoriesPayload;
  getCurrentUser: User;
  getProducts: ProductsOutput;
  getUsers: UsersOutput;
};


export type QueryGetCategoriesArgs = {
  filter?: InputMaybe<GetCategoryFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetProductsArgs = {
  filter?: InputMaybe<GetProductsFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetUsersArgs = {
  filter?: InputMaybe<GetUsersFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};

export enum Roles {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SortInput = {
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
};

export type TokensModel = {
  __typename?: 'TokensModel';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  refreshTokenExpiry?: Maybe<Scalars['String']['output']>;
};

export type UpdateCategoryInput = {
  categoryId: Scalars['ObjectId']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentCategoryId?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type UpdateProductInput = {
  categoryId?: InputMaybe<Scalars['ObjectId']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['ObjectId']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  account: Account;
  accountId: Scalars['ObjectId']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UsersOutput = {
  __typename?: 'UsersOutput';
  collection: Array<User>;
  totalCount: Scalars['Float']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  AccountStatuses: AccountStatuses;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CategoriesPayload: ResolverTypeWrapper<CategoriesPayload>;
  Category: ResolverTypeWrapper<Category>;
  ChangeProductStatusInput: ChangeProductStatusInput;
  CreateCategoryInput: CreateCategoryInput;
  CreateProductInput: CreateProductInput;
  CreateUserInput: CreateUserInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GetCategoryFilterInput: GetCategoryFilterInput;
  GetProductsFilterInput: GetProductsFilterInput;
  GetUsersFilterInput: GetUsersFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']['output']>;
  PaginationInput: PaginationInput;
  Product: ResolverTypeWrapper<Product>;
  ProductStatuses: ProductStatuses;
  ProductsOutput: ResolverTypeWrapper<ProductsOutput>;
  Query: ResolverTypeWrapper<{}>;
  Roles: Roles;
  SortInput: SortInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TokensModel: ResolverTypeWrapper<TokensModel>;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateProductInput: UpdateProductInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UsersOutput: ResolverTypeWrapper<UsersOutput>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Boolean: Scalars['Boolean']['output'];
  CategoriesPayload: CategoriesPayload;
  Category: Category;
  ChangeProductStatusInput: ChangeProductStatusInput;
  CreateCategoryInput: CreateCategoryInput;
  CreateProductInput: CreateProductInput;
  CreateUserInput: CreateUserInput;
  DateTime: Scalars['DateTime']['output'];
  Float: Scalars['Float']['output'];
  GetCategoryFilterInput: GetCategoryFilterInput;
  GetProductsFilterInput: GetProductsFilterInput;
  GetUsersFilterInput: GetUsersFilterInput;
  Mutation: {};
  ObjectId: Scalars['ObjectId']['output'];
  PaginationInput: PaginationInput;
  Product: Product;
  ProductsOutput: ProductsOutput;
  Query: {};
  SortInput: SortInput;
  String: Scalars['String']['output'];
  TokensModel: TokensModel;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateProductInput: UpdateProductInput;
  Upload: Scalars['Upload']['output'];
  User: User;
  UsersOutput: UsersOutput;
}>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashedPassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hashedRefreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Roles'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AccountStatuses'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoriesPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoriesPayload'] = ResolversParentTypes['CategoriesPayload']> = ResolversObject<{
  collection?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentCategoryId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  changeProductStatus?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationChangeProductStatusArgs, 'input'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteCategoryById?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCategoryByIdArgs, 'categoryId'>>;
  deleteProductById?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteProductByIdArgs, 'productId'>>;
  login?: Resolver<ResolversTypes['TokensModel'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  refreshTokens?: Resolver<ResolversTypes['TokensModel'], ParentType, ContextType>;
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'input'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'input'>>;
}>;

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  categoryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProductStatuses'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsOutput'] = ResolversParentTypes['ProductsOutput']> = ResolversObject<{
  collection?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCategories?: Resolver<ResolversTypes['CategoriesPayload'], ParentType, ContextType, Partial<QueryGetCategoriesArgs>>;
  getCurrentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  getProducts?: Resolver<ResolversTypes['ProductsOutput'], ParentType, ContextType, Partial<QueryGetProductsArgs>>;
  getUsers?: Resolver<ResolversTypes['UsersOutput'], ParentType, ContextType, Partial<QueryGetUsersArgs>>;
}>;

export type TokensModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokensModel'] = ResolversParentTypes['TokensModel']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshTokenExpiry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersOutput'] = ResolversParentTypes['UsersOutput']> = ResolversObject<{
  collection?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  CategoriesPayload?: CategoriesPayloadResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  ObjectId?: GraphQLScalarType;
  Product?: ProductResolvers<ContextType>;
  ProductsOutput?: ProductsOutputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TokensModel?: TokensModelResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UsersOutput?: UsersOutputResolvers<ContextType>;
}>;


export type AccountFragment = { __typename?: 'Account', _id: string, email: string, role: Roles, status: AccountStatuses };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'TokensModel', accessToken: string, refreshToken: string, refreshTokenExpiry?: string | null } };

export type CategoryFragment = { __typename?: 'Category', _id: string, name: string, parentCategoryId?: any | null, createdAt: any, updatedAt: any, categoryName: string, description?: string | null };

export type CreateCategoryMutationVariables = Exact<{
  input: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', _id: string, name: string, parentCategoryId?: any | null, createdAt: any, updatedAt: any, categoryName: string, description?: string | null } };

export type UpdateCategoryMutationVariables = Exact<{
  input: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Category', _id: string, name: string, parentCategoryId?: any | null, createdAt: any, updatedAt: any, categoryName: string, description?: string | null } };

export type DeleteCategoryByIdMutationVariables = Exact<{
  categoryId: Scalars['ObjectId']['input'];
}>;


export type DeleteCategoryByIdMutation = { __typename?: 'Mutation', deleteCategoryById: boolean };

export type GetCategoriesQueryVariables = Exact<{
  sort?: InputMaybe<SortInput>;
  pagination?: InputMaybe<PaginationInput>;
  filter?: InputMaybe<GetCategoryFilterInput>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: { __typename?: 'CategoriesPayload', totalCount: number, collection: Array<{ __typename?: 'Category', _id: string, name: string, parentCategoryId?: any | null, createdAt: any, updatedAt: any, categoryName: string, description?: string | null }> } };

export type ProductFragment = { __typename?: 'Product', _id: string, name: string, description?: string | null, createdAt: any, price: number, code: number, categoryId?: any | null, categoryName: string, status: ProductStatuses };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', _id: string, name: string, description?: string | null, createdAt: any, price: number, code: number, categoryId?: any | null, categoryName: string, status: ProductStatuses } };

export type ChangeProductStatusMutationVariables = Exact<{
  input: ChangeProductStatusInput;
}>;


export type ChangeProductStatusMutation = { __typename?: 'Mutation', changeProductStatus: { __typename?: 'Product', _id: string, name: string, description?: string | null, createdAt: any, price: number, code: number, categoryId?: any | null, categoryName: string, status: ProductStatuses } };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'Product', _id: string, name: string, description?: string | null, createdAt: any, price: number, code: number, categoryId?: any | null, categoryName: string, status: ProductStatuses } };

export type DeleteProductByIdMutationVariables = Exact<{
  productId: Scalars['ObjectId']['input'];
}>;


export type DeleteProductByIdMutation = { __typename?: 'Mutation', deleteProductById: boolean };

export type GetProductsQueryVariables = Exact<{
  filter?: InputMaybe<GetProductsFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
}>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: { __typename?: 'ProductsOutput', totalCount: number, collection: Array<{ __typename?: 'Product', _id: string, name: string, description?: string | null, createdAt: any, price: number, code: number, categoryId?: any | null, categoryName: string, status: ProductStatuses }> } };

export type UserFragmentFragment = { __typename?: 'User', _id: string, firstName: string, lastName: string, createdAt: any, account: { __typename?: 'Account', _id: string, email: string, role: Roles, status: AccountStatuses } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, firstName: string, lastName: string, createdAt: any, account: { __typename?: 'Account', _id: string, email: string, role: Roles, status: AccountStatuses } } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'User', _id: string, firstName: string, lastName: string, createdAt: any, account: { __typename?: 'Account', _id: string, email: string, role: Roles, status: AccountStatuses } } };

export type GetUsersQueryVariables = Exact<{
  filter?: InputMaybe<GetUsersFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: { __typename?: 'UsersOutput', totalCount: number, collection: Array<{ __typename?: 'User', _id: string, firstName: string, lastName: string, createdAt: any, account: { __typename?: 'Account', _id: string, email: string, role: Roles, status: AccountStatuses } }> } };

export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  _id
  name
  parentCategoryId
  createdAt
  updatedAt
  categoryName
  description
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  _id
  name
  description
  createdAt
  price
  code
  categoryId
  categoryName
  status
}
    `;
export const AccountFragmentDoc = gql`
    fragment Account on Account {
  _id
  email
  role
  status
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  _id
  firstName
  lastName
  createdAt
  account {
    ...Account
  }
}
    ${AccountFragmentDoc}`;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    refreshToken
    refreshTokenExpiry
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation createCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation updateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryByIdDocument = gql`
    mutation deleteCategoryById($categoryId: ObjectId!) {
  deleteCategoryById(categoryId: $categoryId)
}
    `;
export type DeleteCategoryByIdMutationFn = Apollo.MutationFunction<DeleteCategoryByIdMutation, DeleteCategoryByIdMutationVariables>;

/**
 * __useDeleteCategoryByIdMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryByIdMutation, { data, loading, error }] = useDeleteCategoryByIdMutation({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useDeleteCategoryByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryByIdMutation, DeleteCategoryByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryByIdMutation, DeleteCategoryByIdMutationVariables>(DeleteCategoryByIdDocument, options);
      }
export type DeleteCategoryByIdMutationHookResult = ReturnType<typeof useDeleteCategoryByIdMutation>;
export type DeleteCategoryByIdMutationResult = Apollo.MutationResult<DeleteCategoryByIdMutation>;
export type DeleteCategoryByIdMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryByIdMutation, DeleteCategoryByIdMutationVariables>;
export const GetCategoriesDocument = gql`
    query getCategories($sort: SortInput, $pagination: PaginationInput, $filter: GetCategoryFilterInput) {
  getCategories(sort: $sort, pagination: $pagination, filter: $filter) {
    collection {
      ...Category
    }
    totalCount
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const ChangeProductStatusDocument = gql`
    mutation changeProductStatus($input: ChangeProductStatusInput!) {
  changeProductStatus(input: $input) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export type ChangeProductStatusMutationFn = Apollo.MutationFunction<ChangeProductStatusMutation, ChangeProductStatusMutationVariables>;

/**
 * __useChangeProductStatusMutation__
 *
 * To run a mutation, you first call `useChangeProductStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProductStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProductStatusMutation, { data, loading, error }] = useChangeProductStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeProductStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProductStatusMutation, ChangeProductStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeProductStatusMutation, ChangeProductStatusMutationVariables>(ChangeProductStatusDocument, options);
      }
export type ChangeProductStatusMutationHookResult = ReturnType<typeof useChangeProductStatusMutation>;
export type ChangeProductStatusMutationResult = Apollo.MutationResult<ChangeProductStatusMutation>;
export type ChangeProductStatusMutationOptions = Apollo.BaseMutationOptions<ChangeProductStatusMutation, ChangeProductStatusMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductByIdDocument = gql`
    mutation deleteProductById($productId: ObjectId!) {
  deleteProductById(productId: $productId)
}
    `;
export type DeleteProductByIdMutationFn = Apollo.MutationFunction<DeleteProductByIdMutation, DeleteProductByIdMutationVariables>;

/**
 * __useDeleteProductByIdMutation__
 *
 * To run a mutation, you first call `useDeleteProductByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductByIdMutation, { data, loading, error }] = useDeleteProductByIdMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useDeleteProductByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductByIdMutation, DeleteProductByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductByIdMutation, DeleteProductByIdMutationVariables>(DeleteProductByIdDocument, options);
      }
export type DeleteProductByIdMutationHookResult = ReturnType<typeof useDeleteProductByIdMutation>;
export type DeleteProductByIdMutationResult = Apollo.MutationResult<DeleteProductByIdMutation>;
export type DeleteProductByIdMutationOptions = Apollo.BaseMutationOptions<DeleteProductByIdMutation, DeleteProductByIdMutationVariables>;
export const GetProductsDocument = gql`
    query getProducts($filter: GetProductsFilterInput, $pagination: PaginationInput, $sort: SortInput) {
  getProducts(filter: $filter, pagination: $pagination, sort: $sort) {
    collection {
      ...Product
    }
    totalCount
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export function useGetProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsSuspenseQueryHookResult = ReturnType<typeof useGetProductsSuspenseQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  getCurrentUser {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export function useGetCurrentUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserSuspenseQueryHookResult = ReturnType<typeof useGetCurrentUserSuspenseQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($filter: GetUsersFilterInput, $pagination: PaginationInput, $sort: SortInput) {
  getUsers(filter: $filter, pagination: $pagination, sort: $sort) {
    collection {
      ...UserFragment
    }
    totalCount
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;