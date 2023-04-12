import React, {useContext, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blogs from "./Pages/Blogs.js";
import {Container} from "react-bootstrap";
import Blog from "./Pages/Blog";
import LanguageContext from './Components/LanguageContext';
import Cookies from 'js-cookie';


function App() {
    const [language, setLanguage] = useState(Cookies.get('language') || 'uk');

    return (
        <div className="App">
            <LanguageContext.Provider value={{ language, setLanguage }}>
            <Header/>
            <Container>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/blogs" element={<Blogs/>}/>
                        <Route path={"/blog/:link"} element={<Blog/>}/>
                    </Routes>
                </Router>
            </Container>
            </LanguageContext.Provider>
        </div>
    );
}

export default App;