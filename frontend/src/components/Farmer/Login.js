import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <h3 className='card-header'> Farmer Login</h3>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div className="text-center"> {/* Centering container */}
                                    <Link to="/user-dashboard">  <button type="submit" className="btn btn-primary mb-3">Submit</button></Link>
                                    <div>
                                        <div className="mb-3 form-check">
                                            {/* <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" checked /> */}
                                            <div id="emailHelp" className="form-text">Already have an account?</div>
                                            <Link to="/user-register"> <label className="btn btn-outline-success mt-2" htmlFor="success-outlined">Click Here</label></Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
