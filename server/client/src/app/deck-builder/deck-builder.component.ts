import { Component, OnInit } from '@angular/core';
import { SearchCardService } from './../services/search-card.service';
import { MOCK_GARCHOMP } from './../data/mockData';

@Component({
    selector: 'app-deck-builder',
    templateUrl: './deck-builder.component.html',
    styleUrls: ['./deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit {

    searchText: string;
    results = MOCK_GARCHOMP;

    constructor(private searchCardService: SearchCardService) {}

    ngOnInit() {}

    async findByName() {
        // this.results = await this.searchCardService.findByName(this.searchText);
        console.log(this.results);
    }

}
