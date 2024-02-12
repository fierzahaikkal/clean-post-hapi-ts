import { PrismaClient, post as PrismaPost } from "@prisma/client";
import { PostRepository } from "../../../domain/repository/posts.repository";
import { IPost } from "../../../domain/entities/posts.interface";

export const prisma = new PrismaClient();

export class PostRepositoryPrisma implements PostRepository {
  async create(post: IPost): Promise<IPost> {
    const createdPost = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        author: post.author,
      },
    });
    return this.convertToDomainModel(createdPost);
  }

  async findById(id: string): Promise<IPost | null> {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) return null;
    return this.convertToDomainModel(post);
  }

  async findAll(): Promise<IPost[]> {
    const posts = await prisma.post.findMany();
    return posts.map(this.convertToDomainModel);
  }

  async update(id: string, post: IPost): Promise<IPost | null> {
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title: post.title,
        content: post.content,
        author: post.author,
        updated_at: post.updated_at,
      },
    });
    return this.convertToDomainModel(updatedPost);
  }

  async delete(id: string): Promise<boolean> {
    await prisma.post.delete({ where: { id } });
    return true;
  }

  private convertToDomainModel(prismaPost: PrismaPost): IPost {
    return {
      id: prismaPost.id,
      title: prismaPost.title,
      content: prismaPost.content,
      author: prismaPost.author,
      created_at: prismaPost.created_at,
      updated_at: prismaPost.updated_at,
    };
  }
}
