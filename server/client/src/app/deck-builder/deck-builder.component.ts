import { Component, OnInit } from '@angular/core';
import { SearchCardService } from './../services/search-card.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as actions from './../store/actions';
import { IAppState } from './../store/store';
import { MOCK_GARCHOMP } from './../data/mockData';
import { IDeck } from '../models/deck';

@Component({
  selector: 'app-deck-builder',
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {
  searchText: string;
  results = MOCK_GARCHOMP;

  deckBuilder: IDeck;

  constructor(
    private searchCardService: SearchCardService,
    private store: Store<IAppState>
  ) {
    store.pipe(select('deckBuilder')).subscribe((dBuilder: IDeck) => {
      this.deckBuilder = dBuilder;
    });
  }

  ngOnInit() {}

  async findByName() {
    // this.results = await this.searchCardService.findByName(this.searchText);
    console.log(this.results);
  }

  addCard(card) {
    this.store.dispatch({ type: actions.ADD_CARD, payload: card });
  }

  removeCard(card) {
    this.store.dispatch({ type: actions.REMOVE_CARD, payload: card });
  }
}
