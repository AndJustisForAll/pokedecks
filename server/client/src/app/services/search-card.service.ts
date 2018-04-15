import { Injectable } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { STANDARD_LEGAL_SET_CODES, EXPANDED_LEGAL_SET_CODES } from './../models/sets';


@Injectable()
export class SearchCardService {
    constructor() {}

    async findByName(cardName: string) {
        const cardNameQuery: PokemonTCG.IQuery = { name: 'name', value: cardName };
        const results = await PokemonTCG.Card.where([cardNameQuery]);
        return results.map((card) => {
            return Object.assign({},
                card, {
                    expandedLegal: EXPANDED_LEGAL_SET_CODES.includes(card.setCode),
                    standardLegal: STANDARD_LEGAL_SET_CODES.includes(card.setCode)
                }
            );
        });
    }

}
