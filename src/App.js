import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blogs from "./Pages/Blogs.js";
import {Container} from "react-bootstrap";
import Blog from "./Pages/Blog";


function App() {
    return (
        <div className="App">
            <Header/>
            <Container>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/blog" element={<Blogs/>}/>
                        <Route path={"/blog/:link"} element={<Blog/>}/>
                    </Routes>
                </Router>
            </Container>
        </div>
    );
}

export default App;