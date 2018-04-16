import { Component, OnInit } from '@angular/core';
import { SearchCardService } from './../services/search-card.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as actions from './../store/actions';
import { IAppState } from './../store/store';
import { IDeck } from './../models/IDeck';
import { MOCK_GARCHOMP } from './../data/mockData';

@Component({
    selector: 'app-deck-builder',
    templateUrl: './deck-builder.component.html',
    styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {

    searchText: string;
    results = MOCK_GARCHOMP;
    deck$: Observable < IDeck > ;

    constructor(private searchCardService: SearchCardService, private store: Store < IAppState > ) {
        this.deck$ = store.pipe(select('deckBuilder'));
    }

    ngOnInit() {}

    async findByName() {
        // this.results = await this.searchCardService.findByName(this.searchText);
        console.log(this.results);
    }

    addCard(card) {
        this.store.dispatch({ type: actions.ADD_CARD, card });
    }

    removeCard(card) {
        this.store.dispatch({ type: actions.REMOVE_CARD, card });
    }
}
