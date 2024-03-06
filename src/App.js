import "./styles/style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import LegalNotice from "./components/legal-notice/LegalNotice";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";
import ScrollToTop from "./utils/scrollToTop"
import {useEffect, useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Overlay from "./components/overlay/overlay";
import CookiePopup from "./components/cookie-popup/cookie-popup";
import ChangeConsentBanner from "./components/cookie-change-consent/cookie-change-consent";



function App() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showChangeConsent, setShowChangeConsent] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div className="App">
            <Overlay show={showOverlay} />
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <CookiePopup setPopupVisible={setPopupVisible} popupVisible={popupVisible} setShow={setShowOverlay} setShowChangeConsent={setShowChangeConsent}/>
                <ChangeConsentBanner setShowPopup={setPopupVisible} showChangeConsent={showChangeConsent}/>
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

