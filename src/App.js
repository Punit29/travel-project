import { Routes, Route } from "react-router-dom";
import Home from "./modules/Home";
import Listing from "./modules/Listing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="listing" element={<Listing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
