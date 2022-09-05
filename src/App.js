import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Body from './Components/Body';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div >
    <Navbar />


    <Routes>
                 <Route exact path='/' element={< Signup />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/body' element={< Body />}></Route>
                 
          </Routes>

    </div>
  );
}

export default App;
