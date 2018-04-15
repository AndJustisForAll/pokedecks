import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SearchCardService } from './../services/search-card.service';
import { DeckBuilderComponent } from './deck-builder.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        DeckBuilderComponent
    ],
    providers: [SearchCardService]
})
export class DeckBuilderModule {}
