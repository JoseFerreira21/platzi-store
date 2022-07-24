import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './../../../entities/category.entity';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../../dtos/category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags()
@Injectable()
export class CategoryService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      description: 'Category 1',
    },
    {
      id: 1,
      description: 'Category 2',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(data: CreateCategoryDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, changes: UpdateCategoryDto) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
