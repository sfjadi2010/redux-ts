import { ActionType } from '../action-types';

export interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;


