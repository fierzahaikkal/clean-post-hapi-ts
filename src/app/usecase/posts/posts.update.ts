import { IPost } from "../../../domain/entities/posts.interface";
import { PostRepository } from "../../../domain/repository/posts.repository";
import { PostDTO } from "../../dto/posts.dto";

export class UpdatePost {
  constructor(private postRepository: PostRepository) {}

  async execute(id: string, postDto: PostDTO): Promise<IPost | null> {
    const existingPost = await this.postRepository.findById(id);
    if (!existingPost) {
      return null;
    }
    const updatedPost: IPost = {
      ...existingPost,
      title: postDto.title,
      content: postDto.content,
      updated_at: new Date(),
    };

    return await this.postRepository.update(id, updatedPost);
  }
}
