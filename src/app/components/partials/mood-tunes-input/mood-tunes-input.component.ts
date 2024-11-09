import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MoodAnalysisService } from '../../../services/mood-analysis.service';
import { Sentiment } from '../../../../models/sentiment';
import { MoodResult } from '../../../../models/mood-result';
import { HuggingFaceResponse } from '../../../../models/hugging-face-api-response';

@Component({
  selector: 'app-mood-tunes-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mood-tunes-input.component.html',
  styleUrl: './mood-tunes-input.component.css',
})
export class MoodTunesInputComponent {
  moodInput = new FormControl('');
  moodResult!: MoodResult;

  constructor(private moodAnalysisService: MoodAnalysisService) {}

  clearInput() {
    this.moodInput.reset();
  }

  onSubmit() {
    console.log(this.moodInput.value);
    this.moodAnalysisService.analyzeMood(this.moodInput.value!).subscribe({
      next: (response: HuggingFaceResponse) => {
        const sentimentArray = response[0];

        const primarySentiment = sentimentArray.reduce(
          (prev: Sentiment, current: Sentiment) =>
            prev.score > current.score ? prev : current
        );

        console.log('Primary sentiment:', primarySentiment.label);
      },
      error: (error) => {
        console.error(error);
        alert('Something went wrong, Please try again!')
      },
    });
    this.clearInput();
  }
}
