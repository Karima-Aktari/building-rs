import './App.css';
import Navigation from './Components/Shared/Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div className="">
      <Navigation />
      {/* <h1 className="bg-red-500 text-blue-500">Header</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
