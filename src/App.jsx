import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Footer from "./Footer";
import AboutusPage from "./AboutusPage";
import ProfilePage from "./ProfilePage";
import ContactPage from "./ContactPage";
import Error from "./Error";
export default function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="about" element={<AboutusPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
        </>
    )
}