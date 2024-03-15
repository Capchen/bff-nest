import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => [Post], { nullable: 'items' })
  posts: Post[];
}
