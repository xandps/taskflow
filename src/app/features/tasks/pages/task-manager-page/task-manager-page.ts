import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { TasksByStatusPipe } from '../../../../../shared/pipes/tasks-by-status.pipe';
import { Task } from '../../../../core/models/tasks.model';
import { TASK_PRIORITY_COLOR } from '../../../../core/models/priority.model';

@Component({
  selector: 'app-task-manager-page',
  imports: [Header, TasksByStatusPipe],
  templateUrl: './task-manager-page.html',
  styleUrl: './task-manager-page.scss',
})
export class TaskManagerPage {
  priorityColor = TASK_PRIORITY_COLOR;

  columns = [
    { key: 'BACKLOG', label: 'A FAZER' },
    { key: 'IN_PROGRESS', label: 'EM PROGRESSO' },
    { key: 'REVIEW', label: 'EM REVISÃO' },
    { key: 'DONE', label: 'CONCLUÍDO' },
  ] as const;

  tasks: Task[] = [
    { id: 1, title: 'Criar layout', status: 'BACKLOG', priority: 'Alto' },
    { id: 2, title: 'Implementar auth', status: 'IN_PROGRESS', priority: 'Medio' },
    { id: 3, title: 'Criar guard', status: 'DONE', priority: 'Baixo' },
    { id: 4, title: 'Finalizar projeto', status: 'DONE', priority: 'Alto' },
  ];

}
