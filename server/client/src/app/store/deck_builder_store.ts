import * as actions from './actions';
import { IAction } from './store';
import { createSelector } from '@ngrx/store';
import { ICard } from './../models/card';

const SAME_CARD_DECK_LIMIT = 4;

export function deckBuilderReducer(
  state: IDeckBuilderState = INITIAL_DECK_STATE,
  action: IAction
) {
  switch (action.type) {
    case actions.ADD_CARD:
      const id = action.payload.id;
      const deck = state.deck;
      const card: ICard = deck[id] ? { ...deck[id] } : { ...action.payload };
      card.count = card.count || 0;

      //TODO:AMUNOZ some cards might have have limit of 1
      if (card.count === SAME_CARD_DECK_LIMIT) {
        card.count = 1;
        return Object.assign({}, state, {
          deck: {
            ...deck,
            [id]: card
          }
        });
      }

      card.count++;
      return Object.assign({}, state, {
        deck: {
          ...deck,
          [id]: card
        }
      });

    case actions.REMOVE_CARD:
      const removeCardID = action.payload.id;

      if (!Object.keys(state.deck).includes(removeCardID)) {
        console.warn('card not found in deck');
        return state;
      }

      const deckCopy = { ...state.deck };
      delete deckCopy[removeCardID];

      return Object.assign({}, state, { deck: deckCopy });
    default:
      return state;
  }
}

export interface IDeckBuilderState {
  name: string;
  deck: any;
}

const INITIAL_DECK_STATE: IDeckBuilderState = {
  name: '',
  deck: {}
};
