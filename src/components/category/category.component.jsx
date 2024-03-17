import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectCategories } from "../../store/categories/category.selector";
import ProductCard from "../product-card/product-card.component";

import '../category/category.styles.scss';

const Category = () => {
    // Get the category param from the URL
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategories)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect( () => {
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