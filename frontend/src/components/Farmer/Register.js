import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <h3 className='card-header'> Farmer Register</h3>
                        <div className='card-body'>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>




                                <div className="col-12 text-center">
                                    <Link to="/user-dashboard"> <button type="submit" className="btn btn-primary">Register</button></Link>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="mb-3 form-check">
                                        <div id="emailHelp" className="form-text ">Already have an account?</div>
                                        <Link to="/user-login">
                                            <label className="btn btn-outline-success mt-2" htmlFor="success-outlined">Click Here</label>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Register;
