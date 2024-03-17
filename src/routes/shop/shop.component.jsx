import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../components/category/category.component';
import './shop.styles.scss';

import { setCategories } from '../../store/categories/category.action';

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";


const Shop = () =>{
    const dispatch = useDispatch();
    useEffect(() =>{
      const getCategoriesMap = async () =>{
          const categoryMap = await getCategoriesAndDocuments();
          dispatch(setCategories(categoryMap));
      }
      getCategoriesMap();
      
  }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>        
    )
}
export default Shop;