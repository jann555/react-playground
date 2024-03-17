export const selectCategories = (state) => {
    console.log('Category Selector fired');
    return state.categories.categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

}
