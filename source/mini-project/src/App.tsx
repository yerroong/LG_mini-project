import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormDataProvider } from "./contexts/FormDataContext";

import HomePage from "./pages/HomePage/HomePage";
import CasePage from "./pages/CasePage/CasePage";
import CaseDetailPage from "./pages/CasePage/CaseDetailPage";
import GuidePage from "./pages/Comp-GuidePage/Comp-GuidePage";
import ListPage from "./pages/LocationPage/ListPage";

import InfoPage from "./pages/InfoPage/InfoPage";
import InfoCompPage from "./pages/InfoPage/InfoCompPage/InfoCompPage";
import InfoProcessPage from "./pages/InfoPage/InfoProcessPage/InfoProcessPage";
import InfoSalaryPage from "./pages/InfoPage/InfoSalaryPage/InfoSalaryPage";
import InfoDictionPage from "./pages/InfoPage/InfoDictionPage/InfoDictionPage";
import EditPage from "./pages/MyPage/EditPage";

import MedicarePage from "./pages/Medi-carePage/MedicarePage";
import MedicareGuideFlow from "./pages/Medi-carePage/MedicareGuideFlow";
import MediGuidePage1 from "./pages/Medi-carePage/Medi-GuidePage-1";
import MediGuidePage2 from "./pages/Medi-carePage/Medi-GuidePage-2";
import MediGuidePage3 from "./pages/Medi-carePage/Medi-GuidePage-3";
import MediGuidePage4 from "./pages/Medi-carePage/Medi-GuidePage-4";
import MediGuidePage5 from "./pages/Medi-carePage/Medi-GuidePage-5";
import MediGuidePage6 from "./pages/Medi-carePage/Medi-GuidePage-6";
import MediAddress1 from "./pages/Medi-carePage/Medi-address-1";

import LangPage from "./pages/LangPage/LangPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <FormDataProvider>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/edit" element={<EditPage />} />
          <Route path="/lang" element={<LangPage />} />


          <Route path="/cases" element={<CasePage />} />
          <Route path="/cases/:id" element={<CaseDetailPage />} />

          <Route path="/guide" element={<GuidePage />} />
          <Route path="/list" element={<ListPage />} />

          <Route path="/info" element={<InfoPage />} />
          <Route path="/info/compensation" element={<InfoCompPage />} />
          <Route path="/info/process" element={<InfoProcessPage />} />
          <Route path="/info/salary" element={<InfoSalaryPage />} />
          <Route path="/info/dictionary" element={<InfoDictionPage />} />

          <Route path="/medicare" element={<MedicarePage />} />
          <Route path="/medicare-guide-flow" element={<MedicareGuideFlow />} />
          <Route path="/medi-guide-1" element={<MediGuidePage1 />} />
          <Route path="/medi-guide-2" element={<MediGuidePage2 />} />
          <Route path="/medi-guide-3" element={<MediGuidePage3 />} />
          <Route path="/medi-guide-4" element={<MediGuidePage4 />} />
          <Route path="/medi-guide-5" element={<MediGuidePage5 />} />
          <Route path="/medi-guide-6" element={<MediGuidePage6 />} />
          <Route path="/medi-address-1" element={<MediAddress1 />} />
        </Routes>
      </FormDataProvider>
    </Router>
  );
}

export default App;
