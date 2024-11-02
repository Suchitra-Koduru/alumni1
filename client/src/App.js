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
import AboutUs from './components/AboutUs';
import GetAllPostForUsers from './components/GetAllPostForUsers';
import UserHome from './components/UserHome';
import UserProtectedRoute from './routes/UserProtectedRoute';
import AlumniProtectedRoute from './routes/AlumniProtectedRoute';
import NoUserPosts from './components/NoUserPosts';
import AdminProtectedRoute from './routes/AdminProtectedRoute';
import AdminHome from './components/AdminHome';
import GetAllAlumni from './components/GetAllAlumni';
import AddAlumniForm from './components/AddAlumniForm';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <AuthProvider>
        <HeaderComponent></HeaderComponent>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/getposts" element={<PostsList />} /> 
        <Route path="/posts/:id" element={<SinglePostComponent />} />
        <Route path="/create" element={<CreatePostComponent />} />
        <Route path="/update/:id" element={<UpdatePostComponent />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/myposts/:userId" element={<MyPostsComponent />} />
        <Route path="/mylikedposts/:userId" element={<LikedPosts />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/getpostsUsers" element={<GetAllPostForUsers />} />
        <Route path="/profileUser" element={<ProfileForUser/>}/>
        </Routes>
      </AuthProvider>
      </BrowserRouter> */}

      <BrowserRouter>
      <AuthProvider>
        <HeaderComponent></HeaderComponent>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/user" element={<UserHome />} />
        <Route path="/posts/:id" element={<SinglePostComponent />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/mylikedposts/:userId" element={<LikedPosts />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path='/admin' element={<AdminHome/>}/>

        <Route element={<UserProtectedRoute/>}>
        <Route path="/getpostsUsers" element={<GetAllPostForUsers />} />
        <Route path='/noUserPosts' element={<NoUserPosts/>}/>
        </Route>

        <Route element={<AlumniProtectedRoute/>}>
        <Route path="/getposts" element={<PostsList />} /> 
        <Route path="/create" element={<CreatePostComponent />} />
        <Route path="/update/:id" element={<UpdatePostComponent />} />
        <Route path="/myposts/:userId" element={<MyPostsComponent />} />
        </Route>

        <Route element={<AdminProtectedRoute/>}>
        <Route path='/getAllAlumni' element={<GetAllAlumni/>}/>
        <Route path='/add-alumni' element={<AddAlumniForm/>}/>
        </Route>

        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
