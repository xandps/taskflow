import { Pipe, PipeTransform } from '@angular/core';
import { Task, TaskStatus } from '../../app/core/models/tasks.model';

@Pipe({
  name: 'tasksByStatus',
  standalone: true,
})
export class TasksByStatusPipe implements PipeTransform {

  transform(tasks: Task[], status: TaskStatus): Task[] {
    return tasks.filter(task => task.status === status);
  }
}
