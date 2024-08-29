import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginComponent from "./components/LoginComponent"
import SignUpComponent from "./components/SignUpComponent"
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/header" element={<HeaderComponent></HeaderComponent>}></Route>
      <Route path="/login" element={<LoginComponent/>}></Route>
      <Route path="/signup" element={<SignUpComponent/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
