import { ActionType } from '../action-types';
import { Action } from '../actions';
import { RepositoriesState } from './RepositoriesState';

const repositoryReducer = (
    state: RepositoriesState,
    action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default repositoryReducer;