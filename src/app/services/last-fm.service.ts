import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LastFmService {
  private apiKey = environment.lastfmApiKey;
  private apiUrl = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private http: HttpClient) {}

  getTopTracksByMood(mood: string): Observable<any> {
    const url = `${this.apiUrl}?method=tag.gettoptracks&tag=${mood}&api_key=${this.apiKey}&format=json`;
    return this.http.get<any>(url);
  }
}
