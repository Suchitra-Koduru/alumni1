import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import SignUpComponent from "./components/SignUpComponent";
import HeaderComponent from './components/HeaderComponent';
import PostComponent from './components/PostComponent';
import AuthProvider from './providers/AuthProvider';

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
          <Route path="/getposts" element={<PostComponent />} />
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
