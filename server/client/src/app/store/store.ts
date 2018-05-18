import * as actions from './actions';
import { deckBuilderReducer, IDeckBuilderState } from './deck_builder_store';

export interface IAction {
  type: string;
  payload?: any;
}

export interface IAppState {
  deckBuilder: IDeckBuilderState;
}

export const rootReducer = {
  deckBuilder: deckBuilderReducer
};
