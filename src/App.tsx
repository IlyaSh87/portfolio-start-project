import './App.css';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/workz/Works";
import React from "react";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./components/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";




function App() {
    return (
        <div className="App">

                <Header/>
                <Main/>
                <Skills/>
                <Works/>
                <Testimony/>
                <Contact/>
                <Slogan/>
                <Footer/>


        </div>
    );
}

export default App;

