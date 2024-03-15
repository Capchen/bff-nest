import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';
@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'qq.com',
      posts: [],
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: '163.com',
      posts: [],
    },
  ];

  findOneById(id: number): Author {
    return this.authors.find((author) => author.id === id);
  }
}
