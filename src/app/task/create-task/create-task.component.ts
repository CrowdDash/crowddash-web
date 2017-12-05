import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { CategoryService } from '../shared/category.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  private taskService: TaskService;
  private categoryService: CategoryService;

  private dialogRef: MatDialogRef<CreateTaskComponent>;
  private data: any;

  private task: Task;
  private platforms: any[] = [
    {
      value: "mturk",
      viewValue: "Amazon Mechanical Turk"
    }
  ];
  private categories: any[] = [];
  private categoriesControl: FormControl;

  constructor(
    dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    taskService: TaskService,
    categoryService: CategoryService
  ) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.taskService = taskService;
    this.categoryService = categoryService;

    this.task = new Task();
    // get url from input data
    this.task.url = this.data.url;
    this.categoriesControl = new FormControl();
  }

  ngOnInit() {
    console.log(this.task);
    this.categoryService.getCategories().subscribe((data: string[]) => {
      this.categories = data;
    });
  }

  onSubmit() {
    console.log(this.task);
    this.taskService.createTask(this.task).subscribe((data: any) => {
      this.dialogRef.close();
    });
  }

}
