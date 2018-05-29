import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderListComponent } from './deck-builder-list.component';

describe('DeckBuilderListComponent', () => {
  let component: DeckBuilderListComponent;
  let fixture: ComponentFixture<DeckBuilderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBuilderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
