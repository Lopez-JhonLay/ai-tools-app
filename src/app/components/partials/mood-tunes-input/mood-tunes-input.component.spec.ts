import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTunesInputComponent } from './mood-tunes-input.component';

describe('MoodTunesInputComponent', () => {
  let component: MoodTunesInputComponent;
  let fixture: ComponentFixture<MoodTunesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodTunesInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoodTunesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
