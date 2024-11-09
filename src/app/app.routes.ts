import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { MoodTunesPageComponent } from './components/pages/mood-tunes-page/mood-tunes-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'mood-tunes', component: MoodTunesPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
