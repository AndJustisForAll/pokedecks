import { IDeck } from './../models/IDeck';
import { Action } from '@ngrx/store';
import * as actions from './actions';

export function rootReducer(state: IAppState = INITIAL_STATE, action: Action) {
    switch (action.type) {
        // TODO:AMUNOZ refactor to smaller parts of state
        case actions.ADD_CARD:
        const cardID = action.card.id;
        const tempCard = state.deckBuilder.cards[cardID];
        const newState = Object.assign({}, {...state});
        if (!tempCard) {
            newState.deckBuilder.cards[cardID] = {
                id: cardID,
                name: action.card.name,
                quantity: 1
            };
        } else {
            newState.deckBuilder.cards[cardID] = {
                id: cardID,
                name: action.card.name,
                quantity: newState.deckBuilder.cards[cardID].quantity + 1
            };
        }
        console.log(newState);
        return newState;
        case actions.REMOVE_CARD:
        console.log('remove');
        console.log(state, action);
            return state;
        default:
        console.log(state, action);
            return state;
    }
}

export interface IAppState {
    deckBuilder: IDeck;
}

export const INITIAL_STATE: IAppState = {
    deckBuilder: { name: '', cards: {} }
};

