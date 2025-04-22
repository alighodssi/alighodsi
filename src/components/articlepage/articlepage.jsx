import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";
import styled from "../articlepage/articlepage.module.css"
import iran from "../aboutus/aboutuspic/iran.png"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/spinner";




function ArticlePage() {

    const [article, setArticle] = useState({});
    const [isloading, setIsloading] = useState(false);
    const params = useParams();

    console.log(params);



    useEffect(() => {
        setIsloading(true)
        axios.get(`http://localhost:8001/articels/${params.id}`).then((article) => {

            setArticle(article.data)
            setIsloading(false)
        })
            .catch((Error) => {
                console.log(Error);
                setIsloading(false)


            });
    }, []);




    return (
        <div>
            <Navbar title="علی بلاگ" />
            <div className="container">

                {
                    isloading ?<Spinner/> : (
                        <div>

                           
                            <h2 className={styled.h2ArticlePage}>{article.title}</h2>
                            <div className={styled.UnderNavbarArticlePage}>
                                <p> تاریخ:{article.date}</p>
                                <p>نویسنده:{article.athor} </p>
                                <p>مدت زمان خواندن {article.readingtime} دقیقه</p>
                                <div className={styled.ArticlePagePic}>
                                <img src={iran} />
                                <p>{article.content}</p>
                                </div>  
                                   
                                </div>
                                </div>
                
                    )}


                           

                        

            </div>


            <Footer />
        </div>
    );
}

export default ArticlePage;