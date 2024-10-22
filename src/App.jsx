import { Routes, Route } from "react-router-dom";
import PenguinPage from "./PenguinPage";
import RoomsPage from "./RoomsPage";
import Homepage from "./Homepage";
import VillainsPage from "./VillainsPage";
import SignUpPage from "./SignupPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/penguins" element={<PenguinPage />}></Route>
      <Route path="/rooms" element={<RoomsPage />}></Route>
      <Route path="/villains" element={<VillainsPage />}></Route>
      <Route path="/signup" element={<SignUpPage />} ></Route> 
    </Routes>
      
    </>
  );
}

export { App };
