/* eslint-disable */

export const protobufPackage = "deta.v1.post";

export interface CreatePostRequest {
  title: string;
  content: string;
}

export interface CreatePostResponse {
}

export interface PostService {
  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse>;
}
