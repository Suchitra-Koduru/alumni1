import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import HeaderComponent from './components/HeaderComponent';
import PostsList from './components/PostsList';

import CreatePostComponent from './components/CreatePostComponent';
import UpdatePostComponent from './components/UpdatePostComponent';
import SearchComponent from './components/SearchComponent';

import AuthProvider from './providers/AuthProvider';
import SinglePostComponent from './components/SinglePostComponent';
import HomePage from './components/HomePage';
import ProfileComponent from './components/ProfileComponent'
import MyPostsComponent from './components/MyPostsComponent'
import LikedPosts from './components/LikedPosts';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<LoginComponent/>}></Route>
          <Route path="/signup" element={<SignUpComponent/>}></Route>
          <Route path="/getposts" element={<PostsList />}></Route> 
          <Route path="/posts/:id" element={<SinglePostComponent />}></Route>
          <Route path="/create" element={<CreatePostComponent />} />
          <Route path="/update/:id" element={<UpdatePostComponent />} />
          <Route path="/search" element={<SearchComponent/>}></Route>
          <Route path='/profile' element={<ProfileComponent></ProfileComponent>}></Route>
          <Route path='/myposts/:userId' element={<MyPostsComponent></MyPostsComponent>}></Route>
          <Route path='/mylikedposts/:userId' element={<LikedPosts></LikedPosts>}></Route>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
