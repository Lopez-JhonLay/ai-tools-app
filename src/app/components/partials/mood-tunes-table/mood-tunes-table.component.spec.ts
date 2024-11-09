import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTunesTableComponent } from './mood-tunes-table.component';

describe('MoodTunesTableComponent', () => {
  let component: MoodTunesTableComponent;
  let fixture: ComponentFixture<MoodTunesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodTunesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoodTunesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
