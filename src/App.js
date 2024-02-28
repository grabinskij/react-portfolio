import "./styles/style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import LegalNotice from "./components/legal-notice/LegalNotice";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";
import ScrollToTop from "./utils/scrollToTop"
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';



function App() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div className="App">
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/project/:id" element={<ProjectPage/>}/>
                    <Route path="/legal-notice" element={<LegalNotice/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;


// import "./styles/style.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
// import LegalNotice from "./components/legal-notice/LegalNotice";
// import HomePage from "./pages/HomePage";
// import ProjectPage from "./pages/ProjectPage";
// import ContactsPage from "./pages/ContactsPage";
// import ScrollToTop from "./utils/scrollToTop";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import MenuMobile from "./components/menu-mobile/MenuMobile";
//
// function App() {
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//
//     useEffect(() => {
//         AOS.init({});
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);
//
//     return (
//         <div className="App">
//             <Router>
//                 <ScrollToTop />
//                 {isMobile ? <MenuMobile /> : <Navbar />}
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/project/:id" element={<ProjectPage />} />
//                     <Route path="legal-notice" element={<LegalNotice />} />
//                     <Route path="privacy-policy" element={<PrivacyPolicy />} />
//                     <Route path="/contacts" element={<ContactsPage />} />
//                 </Routes>
//                 <Footer />
//             </Router>
//         </div>
//     );
// }
//
// export default App;
