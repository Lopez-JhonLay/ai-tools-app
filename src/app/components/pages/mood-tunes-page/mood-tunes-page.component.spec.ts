import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTunesPageComponent } from './mood-tunes-page.component';

describe('MoodTunesPageComponent', () => {
  let component: MoodTunesPageComponent;
  let fixture: ComponentFixture<MoodTunesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodTunesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoodTunesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
