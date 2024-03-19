import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./category.type";


export const fetchCategoriesStart = (categoriesArray) => 
    createAction(
        CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START, 
        categoriesArray
    );


export const fetchCategoriesSuccess = (categoriesArray) => 
    createAction(
        CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, 
        categoriesArray
    );


export const fetchCategoriesFailed = (error) => 
    createAction(
        CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILED, 
        error
    );


