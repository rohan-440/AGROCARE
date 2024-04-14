import React from 'react';
import { Link } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import i18next from "i18next";
// import LanguageDropdown from "./language";

function Header() {
    // const { t } = useTranslation();
    // const handleClick = (e) => {
    //     i18next.changeLanguage(e.target.value)
    // }
    return (
        // <Suspense fallback="loading">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: "20px" }}>
            <div className="container-fluid"> {/* Changed container to container-fluid */}
                <Link to="/" className="navbar-brand" style={{ fontSize: "24px" }}>AgroCare</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <a href="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012" className="nav-link">Schemes</a>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Experts
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/ExpertLogin" className="dropdown-item">Login</Link></li>
                                <li><Link to="/ExpertRegister" className="dropdown-item">Register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/ExpertDashboard" className="dropdown-item">Dashboard</Link></li>
                                <li><Link to="/ExpertLogin" className="dropdown-item">Log Out</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Farmer
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/user-login" className="dropdown-item">Login</Link></li>
                                <li><Link to="/user-register" className="dropdown-item">Register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/user-dashboard" className="dropdown-item">Dashboard</Link></li>
                                <li><Link to="/user-login" className="dropdown-item">Log Out</Link></li>
                            </ul>
                        </li>
                        {/* <li>
                            <LanguageDropdown onChange={(e) => handleClick(e)} />
                        </li> */}
                    </div>
                </div>
            </div>
        </nav>
        // </Suspense>
    );
}

export default Header;
