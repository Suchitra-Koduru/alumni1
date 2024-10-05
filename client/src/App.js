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

function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* <Route path="/" element={<HeaderComponent></HeaderComponent>}></Route> */}
          <Route path="/login" element={<LoginComponent/>}></Route>
          <Route path="/signup" element={<SignUpComponent/>}></Route>
          <Route path="/getposts" element={<PostsList />}></Route> 
          <Route path="/posts/:id" element={<SinglePostComponent />}></Route>
          <Route path="/create" element={<CreatePostComponent />} />
          <Route path="/update/:id" element={<UpdatePostComponent />} />
          <Route path="/search" element={<SearchComponent/>}></Route>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
