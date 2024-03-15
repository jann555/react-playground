import Directory from "../../components/directory/directory.component";
import categories from "../../utils/constants/categories";

const Home = () =>{
      return (
        <Directory categories={categories} /> 
      );    
}

export default Home;