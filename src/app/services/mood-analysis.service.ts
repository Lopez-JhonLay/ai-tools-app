import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HuggingFaceResponse } from '../../models/hugging-face-api-response';

@Injectable({
  providedIn: 'root',
})
export class MoodAnalysisService {
  private huggingFaceApiUrl =
    'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english';

  constructor(private http: HttpClient) {}

  analyzeMood(input: string): Observable<HuggingFaceResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.huggingFaceApiKey}`,
      'Content-Type': 'application/json',
    });

    const body = { inputs: input };

    return this.http.post<HuggingFaceResponse>(this.huggingFaceApiUrl, body, {
      headers,
    });
  }
}
