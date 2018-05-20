import * as actions from './actions';
import { IAction } from './store';
import { createSelector } from '@ngrx/store';

const SAME_CARD_DECK_LIMIT = 4;

export function deckBuilderReducer(
  state: IDeckBuilderState = INITIAL_DECK_STATE,
  action: IAction
) {
  switch (action.type) {
    case actions.ADD_CARD:
      const newCardID = action.payload.id;
      const deck = state.deck || [];
      const hasSameCardLimit =
        deck.filter(card => card.id === newCardID).length >=
        SAME_CARD_DECK_LIMIT;

      if (hasSameCardLimit) {
        console.warn('you have reached card limit');
        return state;
      }

      return Object.assign({}, state, {
        deck: [...state.deck, action.payload]
      });
    case actions.REMOVE_CARD:
      const removeCardID = action.payload.id;
      const indexToRemove = state.deck.findIndex(
        card => card.id === removeCardID
      );

      if (indexToRemove < 0) {
        console.log('card not found in deck');
        return state;
      }

      const deckAfterRemove = [
        ...state.deck.slice(0, indexToRemove),
        ...state.deck.slice(indexToRemove + 1, state.deck.length)
      ];

      return Object.assign({}, state, { deck: deckAfterRemove });
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
  deck: []
};
