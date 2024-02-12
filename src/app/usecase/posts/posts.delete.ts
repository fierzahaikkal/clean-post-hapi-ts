import { PostRepository } from "../../../domain/repository/posts.repository";

export class DeletePost {
  constructor(private postRepository: PostRepository) {}

  async execute(id: string): Promise<boolean> {
    return await this.postRepository.delete(id);
  }
}
