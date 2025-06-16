import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

interface Dog {
  id: number;
  name: string;
  age: number;
}

@Controller('dogs')
export class DogsController {
  private dogs: Dog[] = [];
  private idCounter = 1;

  @Get()
  getAllDogs(): Dog[] {
    return this.dogs;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createDog(@Body() body: { name: string; age: number }): Dog {
    const newDog: Dog = {
      id: this.idCounter++,
      name: body.name,
      age: body.age,
    };
    this.dogs.push(newDog);
    return newDog;
  }

  @Get(':id')
  getDogById(@Param('id') id: string): Dog {
    const dog = this.dogs.find((d) => d.id === +id);
    if (!dog) {
      throw new NotFoundException(`Dog with id ${id} not found`);
    }
    return dog;
  }

  @Put(':id')
  updateDog(
    @Param('id') id: string,
    @Body() body: { name?: string; age?: number },
  ): Dog {
    const dogIndex = this.dogs.findIndex((d) => d.id === +id);
    if (dogIndex === -1) {
      throw new NotFoundException(`Dog with id ${id} not found`);
    }
    const dog = this.dogs[dogIndex];
    const updatedDog = {
      ...dog,
      ...body,
    };
    this.dogs[dogIndex] = updatedDog;
    return updatedDog;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteDog(@Param('id') id: string): void {
    const dogIndex = this.dogs.findIndex((d) => d.id === +id);
    if (dogIndex === -1) {
      throw new NotFoundException(`Dog with id ${id} not found`);
    }
    this.dogs.splice(dogIndex, 1);
  }
}
