/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'
import ProductCard from '../product-card/product-card.component'

import Spinner from '../spinner/spinner.component'

import '../category/category.styles.scss'

const Category = () => {
  // Get the category param from the URL
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {
                isLoading
                  ? <Spinner/>
                  : <div className="category-container">
                    {products &&
                        products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                        ))
                    }
                </div>
            }

        </>
  )
}

export default Category
