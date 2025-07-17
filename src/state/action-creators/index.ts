import axios from 'axios';
import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try {
            const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`);
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: data.objects.map((repo: any) => repo.package.name)
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            });

        }
    };
};