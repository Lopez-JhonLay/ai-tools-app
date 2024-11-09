import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mood-tunes-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './mood-tunes-input.component.html',
  styleUrl: './mood-tunes-input.component.css'
})
export class MoodTunesInputComponent {
  moodInput = new FormControl('');

  clearInput() {
    this.moodInput.reset();
  }

  onSubmit() {
    console.log(this.moodInput.value);
    this.clearInput();
  }
}
