import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HABITS } from '../data/habits';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-all-habits',
  templateUrl: './all-habits.component.html',
  styleUrls: ['./all-habits.component.scss'],
})
export class AllHabitsComponent implements OnInit {
  @Output() addEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter<Habit>();

  public habits: Habit[];

  constructor() {}

  ngOnInit(): void {
    this.habits = HABITS;
  }

  onAdd() {
    this.addEvent.emit();
  }

  onEdit(habit: Habit) {
    this.editEvent.emit(habit);
  }

  public onDelete(index: number) {
    this.habits.splice(index, 1);
  }
}
