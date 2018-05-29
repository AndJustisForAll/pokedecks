import { Component, OnInit, Input } from '@angular/core';
import { IDeck } from '../../models/deck';
import { Store, select } from '@ngrx/store';
import * as Actions from './../../store/actions';
import { IAppState } from './../../store/store';
import { Action } from 'rxjs/scheduler/Action';

@Component({
  selector: 'deck-builder-list',
  templateUrl: './deck-builder-list.component.html',
  styleUrls: ['./deck-builder-list.component.css']
})
export class DeckBuilderListComponent implements OnInit {
  @Input() deckBuilder: IDeck;

  constructor(private store: Store<IAppState>) {}
  ngOnInit() {}

  removeCard(card: any) {
    this.store.dispatch({ type: Actions.REMOVE_CARD, payload: card });
  }

  addCard(card: any) {
    this.store.dispatch({ type: Actions.ADD_CARD, payload: card });
  }
}
