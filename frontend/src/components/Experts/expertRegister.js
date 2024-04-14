import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/main/expert/';

function Register() {
    const [expertData, setExpertData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        skills: '',
        status: ''
    });

    // Change element value
    const handleChange = (event) => {
        setExpertData({
            ...expertData,
            [event.target.name]: event.target.value
        });
    };

    console.log(expertData);

    useEffect(() => {
        document.title = 'Expert Register';
    }, []);

    const submitForm = async () => {
        try {
            const response = await axios.post(baseUrl, expertData);
            setExpertData({
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                skills: '',
                status: 'success'
            })
        } catch (error) {
            console.log(error);
            setExpertData({ status: 'error' });
        }
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-6 offset-3">
                    {expertData.status === 'success' && <p className="text-success">Thanks for your Registrations</p>}
                    {expertData.status === 'error' && <p className="text-danger">Something wrong happened</p>}

                    <div className="card">
                        <h3 className="card-header">Expert Register</h3>
                        <div className="card-body">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                    <input value={expertData.first_name} onChange={handleChange} name="first_name" type="text" className="form-control" id="inputFirstName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                    <input value={expertData.last_name} onChange={handleChange} name="last_name" type="text" className="form-control" id="inputLastName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <input value={expertData.email} onChange={handleChange} name="email" type="email" className="form-control" id="inputEmail" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword" className="form-label">Password</label>
                                    <input value={expertData.password} onChange={handleChange} name="password" type="password" className="form-control" id="inputPassword" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputSkills" className="form-label">Skills</label>
                                    <textarea value={expertData.skills} onChange={handleChange} name="skills" className="form-control" id="inputSkills" rows="3"></textarea>
                                </div>
                                <div className="col-12 text-center"> {/* Centering container */}
                                    <Link to="/ExpertDashBoard"> <button onClick={submitForm} type="button" className="btn btn-primary">Register</button></Link>
                                </div>
                                <div className="col-12 text-center">
                                    <div className="mb-3 form-check">
                                        <div id="emailHelp" className="form-text">Already have an account?</div>
                                        <Link to="/ExpertLogin">
                                            <label className="btn btn-outline-success mt-2" htmlFor="success-outlined">Click Here</label>
                                        </Link>
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

export default Register;
