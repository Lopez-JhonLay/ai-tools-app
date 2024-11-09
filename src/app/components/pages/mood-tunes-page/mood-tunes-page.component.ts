import { Component } from '@angular/core';
import { MoodTunesTableComponent } from '../../partials/mood-tunes-table/mood-tunes-table.component';
import { MoodTunesInputComponent } from '../../partials/mood-tunes-input/mood-tunes-input.component';
import { LastFmService } from '../../../services/last-fm.service';
import { MoodResult } from '../../../../models/mood-result';
import { Track } from '../../../../models/track';

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
  moodTracks: Track[] = [];
  moodResult!: MoodResult | string;
  randomTracks: Track[] = [];

  constructor(private lastfmService: LastFmService) {}

  getMoodResult(mood: MoodResult | string) {
    console.log(`From child ${mood}`);
    this.moodResult = mood;
    this.getMoodRecommendation();
  }

  getMoodRecommendation() {
    const moodTag = this.mapMoodToTag(this.moodResult);
    
    this.lastfmService.getTopTracksByMood(moodTag).subscribe({
      next: (data) => {
        this.moodTracks = data.tracks.track.map((track: any) => ({
          name: track.name,
          artist: track.artist,
          url: track.url
        }));
        console.log('Recommended Tracks:', this.moodTracks);
        this.shuffleTracks();
        console.log('Shuffle Tracks:', this.randomTracks);
      },
      error: (error) => {
        console.error('Error fetching tracks:', error);
      },
    });
  }

  private mapMoodToTag(mood: MoodResult | string): string {
    switch (mood) {
      case 'positive':
        return 'happy';
      case 'negative':
        return 'sad';
      case 'neutral':
        return 'calm';
      default:
        return 'happy';
    }
  }

  shuffleTracks() {
    const shuffled = [...this.moodTracks];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    this.randomTracks = shuffled.slice(0, 5);
  }

  onShuffle() {
    this.shuffleTracks();
  }
}
