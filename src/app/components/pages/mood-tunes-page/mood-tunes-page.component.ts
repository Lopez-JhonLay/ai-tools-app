import { Component } from '@angular/core';
import { MoodTunesTableComponent } from '../../partials/mood-tunes-table/mood-tunes-table.component';
import { MoodTunesInputComponent } from '../../partials/mood-tunes-input/mood-tunes-input.component';

@Component({
  selector: 'app-mood-tunes-page',
  standalone: true,
  imports: [
    MoodTunesTableComponent,
    MoodTunesInputComponent
  ],
  templateUrl: './mood-tunes-page.component.html',
  styleUrl: './mood-tunes-page.component.css'
})
export class MoodTunesPageComponent {

}
