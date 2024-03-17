import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;
// Avoids re-rendering data when it's already in cache
export const selectCategories = createSelector(
    [selectCategoryReducer], /*Input Selectors */
    (categoriesSlice) =>(categoriesSlice.categories) /* Output Selectors*/
)

// Memoized selector
export const selectCategoriesMap =  createSelector(
    [selectCategories], 
    (categories) =>
    categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)
