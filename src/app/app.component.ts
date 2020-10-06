import { Component, OnInit } from '@angular/core';
import { Habit } from './models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public formOpen = false;
  public editHabit: Habit;

  ngOnInit(): void {}

  onAdding() {
    this.formOpen = true;
  }

  closeForm() {
    this.formOpen = false;
    this.editHabit = null;
  }

  onEditing(habit: Habit) {
    this.editHabit = habit;
    this.formOpen = true;
  }
}
