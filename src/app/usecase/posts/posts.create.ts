import { IPost } from "../../../domain/entities/posts.interface";
import { PostRepository } from "../../../domain/repository/posts.repository";
import { PostDTO } from "../../dto/posts.dto";

export class CreatePost {
  constructor(private postRepository: PostRepository) {}

  async execute(postDto: PostDTO): Promise<IPost> {
    const post: IPost = {
      id: "number1",
      title: postDto.title,
      content: postDto.content,
      author: postDto.author,
      created_at: new Date(),
      updated_at: new Date(),
    };
    return await this.postRepository.create(post);
  }
}
