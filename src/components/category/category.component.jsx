import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../product-card/product-card.component";

import '../category/category.styles.scss';

const Category = () => {
    // Get the category param from the URL
    const { category } = useParams();
    console.log('render/ re-dendering category component');
    const categoriesMap  = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect( () => {
        console.log('Category Effect fired SetProducts');
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map( (product) => (
                    <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>       
        </>
    )
}

export default Category;