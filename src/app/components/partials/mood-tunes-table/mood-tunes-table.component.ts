import { Component, Input } from '@angular/core';
import { Track } from '../../../../models/track';

@Component({
  selector: 'app-mood-tunes-table',
  standalone: true,
  imports: [],
  templateUrl: './mood-tunes-table.component.html',
  styleUrl: './mood-tunes-table.component.css'
})
export class MoodTunesTableComponent {
  @Input() moodTracks: Track[] = [];
}
