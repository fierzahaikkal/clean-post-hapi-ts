import { IPost } from "../entities/posts.interface";

export interface PostRepository {
  create(post: IPost): Promise<IPost>;
  findById(id: string): Promise<IPost | null>;
  findAll(): Promise<IPost[]>;
  update(id: string, post: IPost): Promise<IPost | null>;
  delete(id: string): Promise<boolean>;
}
