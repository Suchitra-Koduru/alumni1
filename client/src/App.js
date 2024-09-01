import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/PostComponent';

import CreatePostComponent from './components/CreatePostComponent';
import UpdatePostComponent from './components/UpdatePostComponent';
import DeletePostComponent from './components/DeletePostComponent';

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
          <Route path="/getposts" element={<PostComponent />}></Route> 
          <Route path="/posts/:id" element={<SinglePostComponent />}></Route>
          <Route path="/create" element={<CreatePostComponent />} />
          <Route path="/update/:id" element={<UpdatePostComponent />} />
          <Route path="/delete/:id" element={<DeletePostComponent />} />
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
