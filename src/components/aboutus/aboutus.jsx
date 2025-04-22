import Navbar from "../navbar/navbar";
import styled from "../aboutus/aboutus.module.css"
import iran from "../aboutus/aboutuspic/iran.png"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppConText } from "../../App";



function AboutUs() {


     const {islogin}=useContext(AppConText)
    const [isloading, setIsloading] = useState(false)



    return (



        <div>
            <Navbar title="علی بلاگ" />

            <div className="container">

                {islogin ? <div className={styled.aboutusword}>
                    <p>وارد حساب خود شوید</p>
                    
                    </div> :
                    
                    (
                    <div className={styled.AboutUsWrapper}>
                    <h2>درباره ما</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <Link to="/"><h3>فعالیت ما در کدام شهرهاست؟</h3></Link>
                    <img src={iran} alt="" />
                  
                </div>)}

            </div>
            <Footer />




        </div>






    );
}



export default AboutUs;