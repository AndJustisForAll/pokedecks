import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchCardService } from './../services/search-card.service';
import { DeckBuilderComponent } from './deck-builder.component';
import { DeckBuilderListComponent } from './list/deck-builder-list.component';
import {
  PokemonCardsPipe,
  TrainerCardsPipe,
  EnergyCardsPipe
} from './list/card-type-pipes';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [
    DeckBuilderComponent,
    DeckBuilderListComponent,
    PokemonCardsPipe,
    TrainerCardsPipe,
    EnergyCardsPipe
  ],
  providers: [SearchCardService]
})
export class DeckBuilderModule {}
