import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogs.controller';
import { NotFoundException } from '@nestjs/common';

describe('DogsController', () => {
  let controller: DogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
    }).compile();

    controller = module.get<DogsController>(DogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should start with empty dogs list', () => {
    expect(controller.getAllDogs()).toEqual([]);
  });

  it('should create a dog', () => {
    const dog = controller.createDog({ name: 'Buddy', age: 3 });
    expect(dog).toMatchObject({ id: 1, name: 'Buddy', age: 3 });
    expect(controller.getAllDogs()).toHaveLength(1);
  });

  it('should get dog by id', () => {
    controller.createDog({ name: 'Buddy', age: 3 });
    const dog = controller.getDogById('1');
    expect(dog).toBeDefined();
    expect(dog.name).toBe('Buddy');
  });

  it('should throw NotFoundException if dog not found', () => {
    expect(() => controller.getDogById('999')).toThrow(NotFoundException);
  });

  it('should update a dog', () => {
    controller.createDog({ name: 'Buddy', age: 3 });
    const updatedDog = controller.updateDog('1', { age: 4 });
    expect(updatedDog.age).toBe(4);
    expect(updatedDog.name).toBe('Buddy');
  });

  it('should throw NotFoundException when updating non-existing dog', () => {
    expect(() => controller.updateDog('999', { age: 4 })).toThrow(
      NotFoundException,
    );
  });

  it('should delete a dog', () => {
    controller.createDog({ name: 'Buddy', age: 3 });
    controller.deleteDog('1');
    expect(controller.getAllDogs()).toHaveLength(0);
  });

  it('should throw NotFoundException when deleting non-existing dog', () => {
    expect(() => controller.deleteDog('999')).toThrow(NotFoundException);
  });
});
