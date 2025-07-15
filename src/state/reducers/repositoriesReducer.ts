import { IRepositoriesState } from './IRepositoriesState';

const reducer = (state: IRepositoriesState, action: any) => {
    switch (action.type) {
        case "search_repositories":
        case "search_repositories_success":
        case "search_repositories_error":
        default:
            return state;
    }
};

export default reducer;
