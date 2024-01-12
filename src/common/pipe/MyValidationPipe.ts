import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class MyValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value.age > 20) {
      throw new BadRequestException('年龄不能大于20');
    } else {
      value.age = 20;
    }
    return value;
  }
}
