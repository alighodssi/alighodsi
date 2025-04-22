import Navbar from "../navbar/navbar";
import styled from "../home/home.module.css";
import Article from "../article/article";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Spinner from "../spinner/spinner";

import { Link } from "react-router-dom";
import { AppConText } from "../../App";




function Home() {

    const {islogin} = useContext(AppConText)

    const [article, setArticle] = useState([]);
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        setIsloading(true);

        axios.get("http://localhost:8001/articels").then((result) => {
            setArticle(result.data)
            setIsloading(false)
        })
            .catch((Error) => {

                console.log(Error);
                setIsloading(false)

            })

    }, [])


    return (
        <div>
            <Navbar title="علی بلاگ" />



            <div className="container">


                {islogin ?
                <div  className={styled.homeword}>
                        <p>برای دیدن مقالات باید وارد حساب کاربری خود شوید</p> 
                </div>
                    : (
                    <div className={styled.HomeWrapper}>



                        <h1>
                            مقالات جدید

                        </h1>



                        {
                            isloading ? <Spinner /> : (

                                <div className={styled.HomeArticle}>

                                    {article.map((result) => (


                                        <Link to={`/ArticlePage/${result.id}`}>
                                            <Article key={result.id} data={result} />
                                        </Link>

                                    ))}


                                </div>

                            )
                        }



                    </div>

                )}

            </div>
            <Footer />



        </div>



    )

}



export default Home;