import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import PollView from "./components/PollView";
import PollForm from "./components/PollForm";
import PollList from "./components/PollList";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<PollForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/pollList" element={<PollList />} />
            <Route path="/poll/*" element={<PollView />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
