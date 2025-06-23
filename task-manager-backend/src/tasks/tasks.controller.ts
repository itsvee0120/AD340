// src/tasks/tasks.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Logger,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  private readonly logger = new Logger(TasksController.name);

  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    this.logger.log('Creating task:', createTaskDto);
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    this.logger.log('Fetching all tasks');
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`Fetching task with ID: ${id}`);
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    this.logger.log(`Updating task with ID: ${id}`, updateTaskDto);
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`Deleting task with ID: ${id}`);
    await this.tasksService.remove(id);
    this.logger.log(`Task ${id} deleted successfully`);
    return { message: `Task ${id} deleted successfully` };
  }
}
