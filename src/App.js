import './App.css';
import Home from "./Screens/Home";
import {Route, Routes} from "react-router-dom";
import ItemPage from "./Screens/ItemPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/:id'} element={<ItemPage/>}/>
        </Routes>

    </div>
  );
}

export default App;
