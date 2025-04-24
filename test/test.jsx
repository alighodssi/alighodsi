import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Link } from "react-router-dom";


import { Route , Routes } from "react-router-dom";
import Article from "../src/components/article/article";





<BrowserRouter>
app
</BrowserRouter>



<Routes>
    <Route path="/" element={<home/>}/> 

</Routes>

function Ali() {

    const [articles, setArticles] = useState([])


    useEffect(() => {

        axios.get("http://localhost:8000/articels").then((result) => {

            setArticles(result.data.data)

        })
            .catch(() => {
                console.log(Error);
            })




    }, []);

}


        const [articel , setArticel]=useState([]);

        useEffect(()=>{


axios.get("http://localhost:8000/articels").then ((result) => {

   setArticel(result.data.data)
    
} )
    .catch(()=>{
        console.log(Error);
        
    })

        } , []);



{articel.map((result)=>{

     <Link to={`/ArticlePage/${result.id}`}>
        <Article key={article.id} result={result} />
    </Link>

})}












        {article.map((result) => (
    
            <Article key={result.id} data={result} />
        ))}




        <div className={styled.ArticelWrapper}>
        <img src={js} />
        <h3>
             {props.data.title}
        </h3>
        <div className={styled.readingtime}>
        <p>
         خواندن {props.data.readingtime} دقیقه ای
        </p>
 
        </div>
       
         </div>






.ArticelWrapper{

    width: 24%;
    height: 350px;
    box-shadow: 0px 3px 5px #ccc;
    margin-top: 10px;

}
.ArticelWrapper img {

    width: 100%;
    height: 250px;
    
}
.ArticelWrapper h3 {
    text-align: right;
    padding: 10px 8px;
}

.ArticelWrapper p{
    text-align: right;
    padding: 10px 8px;
    color: #777;

}