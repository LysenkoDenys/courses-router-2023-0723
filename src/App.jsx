import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Courses from "./components/Courses";
import NotFound from "./components/NotFound";
import MainLayuot from "./layouts/MainLayuot";
import SingleCourse from "./components/SingleCourse";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<MainLayuot />} path="/">
            {/* every path is relative to path in MainLayout */}
            <Route element={<Home />} index={true} />
            <Route element={<About />} path="about" />
            <Route element={<Contacts />} path="contacts" />
            <Route element={<Courses />} path="courses" />
            <Route element={<SingleCourse />} path="courses/:courseSlug" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
