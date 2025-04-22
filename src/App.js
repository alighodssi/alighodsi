import Home from "./components/home/home"
import { Route, Routes, } from "react-router-dom"
import AboutUs from "./components/aboutus/aboutus"
import ArticlePage from "../src/components/articlepage/articlepage"
import CreatArticle from "./components/creatarticle/CreatArticle";
import NotFound from "./components/NOTFOUND/NotFound"
import Login from "./components/login/login";
import Homelogin from "./components/homelogin/homelogin";
import { createContext, useState } from "react";


export const AppConText = createContext(null);


function App() {
  const [islogin, setIslogin] = useState(false);
  return (

    <div className="App">



      <AppConText.Provider value={{islogin , setIslogin}}>
      
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homelogin" element={<Homelogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/CreatArticle" element={<CreatArticle />} />
          <Route path="/ArticlePage/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppConText.Provider>

    </div>

  );
}



export default App;
