import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import OTPVerification from "./Components/OtpVerification/otpverification";
import Message from "./Components/Password/Message";
import Successful from "./Components/Password/Successful";
import OtpSucessfulModal from "./Components/Password/OtpSucessfulModal";
import CheckMailModal from "./Components/Password/CheckMailModal";
import ResetPasswordPage from "./Pages/ResetPasswordPage/ResetPasswordPage";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage/ForgetPasswordPage";
import LandinPage from "./Pages/LandingPage/LandingPage";
import DataProvider from "./context/authContext";
import Register from "./Pages/RegisterPage/Register";
import {ToastContainer} from 'react-toastify'
import SavingsPage from "./Pages/SavingsPage/SavingsPage";
import BudgetPage from "./Pages/BudgetPage/BudgetPage";
import Settings from "./Components/Settings/Settings";
import Notifications from "./Components/Notifications/Notifications";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/ProfilePage/Profile";
import History from "./Pages/HistoryPage/History";
import IncomePage from "./Pages/IncomePage/IncomePage";
import ExpensePage from "./Pages/ExpensePage/ExpensePage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


//add the path and components to the element, you may remove the fragment

const App: React.FC = () => {
  return (
    <div>
      <DataProvider>
        <ToastContainer 
        autoClose={1000}
        hideProgressBar/>
        <Router>
          <Routes>
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/verify-otp" element={<OTPVerification />} />
            <Route path="/form-modal" element={<Message />} />
            <Route path="/successful-modal" element={<Successful />} />
            <Route
              path="/otp_successfu_modal"
              element={<OtpSucessfulModal />}
            />
            <Route path="/check-mail" element={<CheckMailModal />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/savings" element={<SavingsPage />} />
            <Route path="/" element={<LandinPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/income" element={<IncomePage/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expenses" element={<ExpensePage />} />
            <Route path="/income" element={<IncomePage/>} />
            <Route path="/dashboard" element={<Dashboard />}  />
          </Routes>
        </Router>

      </DataProvider>
    </div>
  );
};

export default App;
