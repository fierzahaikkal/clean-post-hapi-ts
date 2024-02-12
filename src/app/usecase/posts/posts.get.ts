import { IPost } from "../../../domain/entities/posts.interface";
import { PostRepository } from "../../../domain/repository/posts.repository";

export class GetPosts {
  constructor(private postRepository: PostRepository) {}

  async execute(): Promise<IPost[]> {
    return await this.postRepository.findAll();
  }
}
