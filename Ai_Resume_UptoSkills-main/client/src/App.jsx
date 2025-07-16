import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import LoginSignup from "./pages/auth/LoginSignup.jsx";
import TemplatePage from "./pages/TemplatePage.jsx";

// Templates
import ResumeTemplate1 from "./components/ai-resume-templates/resumeTemplate1/ResumeTemplate1.jsx";
import ResumeTemplate2 from "./components/ai-resume-templates/resumeTemplate2/ResumeTemplate2.jsx";
import ResumeTemplate3 from "./components/ai-resume-templates/resumeTemplate3/ResumeTemplate3.jsx";
import ResumeTemplate4 from "./components/ai-resume-templates/resumeTemplate4/ResumeTemplate4.jsx";
import ResumeTemplate5 from "./components/ai-resume-templates/resumeTemplate5/ResumeTemplate5.jsx";
import ResumeTemplate6 from "./components/ai-resume-templates/resumeTemplate6/ResumeTemplate6.jsx";
import ResumeTemplate7 from "./components/ai-resume-templates/resumeTemplate7/ResumeTemplate7.jsx";
import ResumeTemplate8 from "./components/ai-resume-templates/resumeTemplate8/ResumeTemplate8.jsx";
import ResumeTemplate9 from "./components/ai-resume-templates/resumeTemplate9/ResumeTemplate9.jsx";
import ResumeTemplate23 from "./components/ai-resume-templates/resumeTemplate23/ResumeTemplate23.jsx";

// Sidebar
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Sidebar1 from "./components/sidebar/Sidebar1.jsx";
import Sidebar2 from "./components/sidebar/Sidebar2.jsx";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templatepage" element={<TemplatePage />} />
          <Route path="/resume-template1" element={<ResumeTemplate1 />} />
          <Route path="/resume-template2" element={<ResumeTemplate2 />} />
          <Route path="/resume-template3" element={<ResumeTemplate3 />} />
          <Route path="/resume-template4" element={<ResumeTemplate4 />} />
          <Route path="/resume-template5" element={<ResumeTemplate5 />} />
          <Route path="/resume-template6" element={<ResumeTemplate6 />} />
          <Route path="/resume-template7" element={<ResumeTemplate7 />} />
          <Route path="/resume-template8" element={<ResumeTemplate8 />} />
          <Route path="/resume-template9" element={<ResumeTemplate9 />} />
          <Route path="/resume-template23" element={<ResumeTemplate23 />} />
          <Route path="/try" element={<ResumeTemplate23 />} />

          {/* Sidebar */}
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Sidebar1" element={<Sidebar1 />} />
          <Route path="/Sidebar2" element={<Sidebar2 />} />

          {/* Auth */}
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/Signup" element={<LoginSignup />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
