/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  image?: string | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  image?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  firstName?: ModelStringFilterInput | null;
  lastName?: ModelStringFilterInput | null;
  bio?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateUserMutation = {
  __typename: string;
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type UpdateUserMutation = {
  __typename: string;
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type DeleteUserMutation = {
  __typename: string;
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type GetUserQuery = {
  __typename: string;
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type ListUsersQuery = {
  __typename: string;
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    image: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: string;
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: string;
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: string;
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstName
            lastName
            bio
            image
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;
}
