// src/tasks/tasks.service.ts
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    const tasks = await this.tasksRepository.find({
      order: { createdAt: 'DESC' },
    });
    this.logger.log(`Found ${tasks.length} tasks`);
    return tasks;
  }

  async findOne(id: number): Promise<Task> {
    this.logger.log(`Looking for task with ID: ${id}`);
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      this.logger.error(`Task with ID ${id} not found`);
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    this.logger.log(`Found task: ${task.title}`);
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    this.logger.log('Creating new task:', createTaskDto);
    const task = this.tasksRepository.create(createTaskDto);
    const savedTask = await this.tasksRepository.save(task);
    this.logger.log(`Task created with ID: ${savedTask.id}`);
    return savedTask;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    this.logger.log(`Updating task ${id}:`, updateTaskDto);
    await this.findOne(id); // Check if task exists
    await this.tasksRepository.update(id, updateTaskDto);
    const updatedTask = await this.findOne(id);
    this.logger.log(`Task ${id} updated successfully`);
    return updatedTask;
  }

  async remove(id: number): Promise<void> {
    this.logger.log(`Attempting to delete task with ID: ${id}`);
    const task = await this.findOne(id);
    this.logger.log(`Found task to delete: ${task.title}`);
    await this.tasksRepository.remove(task);
    this.logger.log(`Task ${id} removed successfully`);
  }
}
