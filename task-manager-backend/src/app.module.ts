// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'tasks.db',
      entities: [Task],
      synchronize: true, // Don't use in production
    }),
    TasksModule,
  ],
})
export class AppModule {}
