import { ApiTags } from '@nestjs/swagger';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config'; // 👈 Import ConfigType 
import config from './config'; // 👈 config file

ApiTags();
@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>, // 👈
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey; // 👈
    const name = this.configService.database.name; // 👈
    return `Hello World! ${apiKey} ${name}`;
  }
}