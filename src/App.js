import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./layouts/Home";
import Test from "./layouts/Test";

function App() {
  return (
   <Routes>
    <Route path="/" index element = {<Home/>} />
    <Route path='/test' index element={<Test/>} />
   </Routes>
  );
}

export default App;
