import { Link } from 'react-router-dom';

function ExpertsSideBar() {
    return (
        <div className="card">
            <div className='list-group list-group-flush'>
                <Link to="/ExpertDashBoard" className='list-group-item list-group-item-action'> Dashboard </Link>
                <Link to="/Videocall" className="list-group-item list-group-item-action">Video call </Link>
                <Link to="/ExpertProfileSettings" className="list-group-item list-group-item-action">Profile Settings </Link>
                <Link to="/ExpertChangePassword" className="list-group-item list-group-item-action">Change Password </Link>
                <Link to="/ExpertLogin" className="list-group-item list-group-item-action text-danger">Log Out</Link>
            </div>
        </div>
    );
}

export default ExpertsSideBar;
