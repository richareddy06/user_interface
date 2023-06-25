import Navbar from './components/pages/Navbar';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RegisterForm from './components/pages/Register';
import LoginForm from './components/pages/Login';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar><br></br>
      <br></br>
      <br></br>
      
      <RegisterForm></RegisterForm>
      <br></br><br></br>
      <br></br>
      
      <LoginForm></LoginForm>
    </div>
    </BrowserRouter>
  );
}

export default App;