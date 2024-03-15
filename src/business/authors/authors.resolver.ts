import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Int,
} from '@nestjs/graphql';
import { Author } from './models/author.model';
import { AuthorsService } from './authors.service';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    // private postsService: PostsService,
  ) {}

  // @Query((returns) => [Author])
  // async authors(): Promise<Author[]> {
  //   return this.authorsService.findAll();
  // }

  @Query(() => Author, { name: 'author' })
  async getAuthor(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Author> {
    return this.authorsService.findOneById(id);
  }

  // @ResolveField('posts', (returns) => [Post])
  // async getPosts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ id });
  // }
}
