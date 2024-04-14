import Home from './home';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
// import LanguageSelector from './LanguageSelector';


// Users Router
import Login from './Farmer/Login';
import Register from './Farmer/Register';
import Dashboard from './Farmer/DashBoard';
import SideBar from './Farmer/SideBar';
import ProfileSettings from './Farmer/ProfileSettings';
import ChangePassword from './Farmer/ChangePassword';
import Crop from './Farmer/crops';


// Experts Router 
import ExpertLogin from './Experts/expertLogin';
import ExpertSideBar from './Experts/expertSideBar';
import ExpertRegister from './Experts/expertRegister';
import ExpertProfileSettings from './Experts/expertProfileSettings';
import ExpertDashBoard from './Experts/expertDashBoard';
import Videocall from './Experts/videocall';
import FarmerVideoCall from './Farmer/farmervideocall';
import ExpertChangePassword from './Experts/expertChangePasword';

function Main() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/LanguageSelector" element={<LanguageSelector />} /> */}



                <Route path="/user-login" element={<Login />} />
                <Route path="/user-register" element={<Register />} />
                <Route path="/user-dashboard" element={<Dashboard />} />
                <Route path="/SideBar" element={<SideBar />} />
                <Route path="/ProfileSettings" element={<ProfileSettings />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/FarmerVideoCall" element={<FarmerVideoCall />} />


                <Route path="/ExpertLogin" element={<ExpertLogin />} />
                <Route path="/ExpertRegister" element={<ExpertRegister />} />
                <Route path="/ExpertProfileSettings" element={<ExpertProfileSettings />} />
                <Route path="/ExpertSideBar" element={<ExpertSideBar />} />
                <Route path="Videocall" element={<Videocall />} />
                <Route path="/Crops" element={<Crop />} />
                <Route path="/ExpertChangePassword" element={<ExpertChangePassword />} />
                <Route path="/ExpertDashboard" element={<ExpertDashBoard />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default Main;
