import { Link } from 'react-router-dom'
function SideBar() {
    return (
        <div className="card">
            <div className='list-group list-group-flush'>
                <Link to="/user-dashboard" className='list-group-item list-group-item-action'> DashBoard </Link>
                <Link to="/FarmerVideoCall" className='list-group-item list-group-item-action'> Video Call </Link>
                <Link to="/Crops" className='list-group-item list-group-item-action'> Seasons of crops </Link>
                <Link to="/ProfileSettings" className="list-group-item list-group-item-action">Profile Settings </Link>
                <Link to="/ChangePassword" className="list-group-item list-group-item-action">Change Password </Link>
                <Link to="/user-login" className="list-group-item list-group-item-action text-danger">Log Out</Link>


            </div>
        </div>

    )
}
export default SideBar;
