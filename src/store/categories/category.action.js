import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./category.type";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

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

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());

    try{
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    }catch(error){
        dispatch(fetchCategoriesFailed(error));
    }
}
