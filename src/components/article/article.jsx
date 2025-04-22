import styled from "../article/article.module.css"
import js from "../article/pic/js.jpg"
import ArticlePage from "../articlepage/articlepage";
import { Link } from "react-router-dom";







function Article(props) {



    return (


      <div className={styled.article}>

            <img src={js} alt="" />
            <h3>{props.data.title}</h3>
            <div className={styled.readingtime}>
                <p> خواندن {props.data.readingtime} دقیقه ای</p>
            </div>

        </div>






    );
}



export default Article;