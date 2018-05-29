import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

const pipeTransform = function(deck: any, filterProp: string) {
  const cardCounter = _.countBy(deck, 'id');
  const compactDeck = _.chain(deck)
    .filter(card => card.supertype === filterProp)
    .uniqBy('id')
    .map(card => {
      card.count = cardCounter[card.id];
      return card;
    })
    .sortBy('id')
    .value();

  return compactDeck;
};

@Pipe({ name: 'pokemonCards' })
export class PokemonCardsPipe implements PipeTransform {
  transform(deck: any) {
    const filterProp = 'Pokémon';
    return pipeTransform(deck, filterProp);
  }
}

@Pipe({ name: 'trainerCards' })
export class TrainerCardsPipe implements PipeTransform {
  transform(deck: any) {
    const filterProp = 'Trainer';
    return pipeTransform(deck, filterProp);
  }
}

@Pipe({ name: 'energyCards' })
export class EnergyCardsPipe implements PipeTransform {
  transform(deck: any) {
    const filterProp = 'Energy';
    return pipeTransform(deck, filterProp);
  }
}
