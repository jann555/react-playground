import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./category.type";

export const setCategories = (categoryMap) => createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP, categoryMap);