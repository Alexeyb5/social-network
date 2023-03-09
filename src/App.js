import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import Friends from "./components/Friends/Friends";

debugger;
const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path= "/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path= "/profile" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path= "/News" element={<News/>}/>
                        <Route path= "/Music" element={<Music/>}/>
                        <Route path= "/Settings" element={<Settings/>}/>
                        <Route path= "/Friends" element={<Friends />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
