import { PokemonTCG} from 'pokemon-tcg-sdk-typescript';
import {ICard} from './ICard';

export interface IDeck {
    name: string;
    cards: any;
}
