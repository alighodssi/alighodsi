import { useContext, useState } from "react";
import Navbar from "../navbar/navbar";
import styled from "../creatarticle/CreatArticle.module.css"
import TextArea from "../textarea/textarea";
import Input from "../input/input";
import axios from "axios";
import { AppConText } from "../../App";





function CreatArticle() {

  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingtime: "",
    athor: "",
    message: "",
    imgUrl: "",
  });


  const HandelchangeArticle = (e) => {
    setArticle((pervstate) => ({
      ...pervstate,
      [e.target.name]: e.target.value

    }));

  }




  const HandelChangeTextAria = (e) => {

    setArticle((pervstate) => ({
      ...pervstate,

      message: e.target.value

    }));


  }


  const HandelCreatArticle = () => {
    axios.post("http://localhost:8001/articels/", {
      id: 10,
      img: article.imgUrl,
      title: article.title,
      readingtime: article.readingtime,
      date: article.date,
      athor: article.athor,
      content: article.message,


    });

  };

  const {islogin}=useContext(AppConText)

  return (
    <div>
      <Navbar title="علی بلاگ" />

      <div className="container">
        {islogin ? <div className={styled.CreatArticleWord}>
          <p>وارد حساب خود شوید</p>
          </div> : (<div className={styled.ArticleWrapper} >

          <Input label="عنوان" name="title" handelchang={HandelchangeArticle} placeholder="عنوان را بنویسید" />
          <Input label="تاریخ" name="date" handelchang={HandelchangeArticle} placeholder="14**/**/**" />
          <Input label="مدت زمان خواندن" name="readingtime" handelchang={HandelchangeArticle} placeholder="مدت زمان خواندن را بنویسید" />
          <Input label="نویسنده" name="athor" handelchang={HandelchangeArticle} placeholder="اسم نویسنده را بنویسید" />
          <Input label="ارسال عکس" name="imgUrl" handelchang={HandelchangeArticle} placeholder="ادرس عکس را بنویسید" />
          <TextArea label="پیام" name="massage" handeltextaria={HandelChangeTextAria} placeholder="نظرتان را بنویسید" />

          <div className={styled.buttonWrapper}>
            <button onClick={HandelCreatArticle}>ساخت مقاله</button>
          </div>
        </div>)}

        {false ? <div className={styled.CreatArticlecss}>
          <h2 style={{display:"none",}}>ساخت مقاله جدید </h2>
        </div> : <h2>ساخت مقاله جدید </h2>}
       


      </div>



    </div>
  );
}

export default CreatArticle;