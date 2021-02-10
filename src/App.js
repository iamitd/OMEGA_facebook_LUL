import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {Route} from 'react-router-dom';
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/Login";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar state={props.state}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer />}/>
                    <Route path='/users'
                           render={ () => <UsersContainer/>}/>
                           <Route path='/login'
                           render={ () => <LoginPage/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={ () => <Friends state={props.state.friendsInfo.friends}/>}/>
                </div>
            </div>
    );
}

export default App;