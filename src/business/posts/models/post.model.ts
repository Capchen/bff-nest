import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  authorId: number;

  @Field(() => Int, { nullable: true })
  votes?: number;
}
