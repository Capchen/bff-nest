import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsModule } from './cats/cats.module';
// 导入apollo相关
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { upperDirectiveTransformer } from './common/directives/upper-case.directive';

import { AuthorsModule } from './business/authors/authors.module';

@Module({
  imports: [
    AuthorsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // code first 生成的schema文件
      sortSchema: true, // 排序,默认是按照module的顺序，开启后，按照字典顺序排序
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'), // 应用于整个schema
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
