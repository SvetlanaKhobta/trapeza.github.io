
import Filter from "./filter";
import 'bootstrap/dist/css/bootstrap.min.css';


const AllCategories = () => {

    return(  
    // <div  className="d-grid gap-2 d-md-flex justify-content-md-center mt-3 pb-2">
       <div className="container">
         {['посмотреть все', 'паста', 'рыба', 'пицца', 'салат', 'мясо', 'десерты',  'курица',  'сэндвичи', 'американская кухня', 'итальянская кухня']
        .map((category) => <Filter  key={category} category = {category}/> )}
           
        
       </div>
       )
}
export default AllCategories;