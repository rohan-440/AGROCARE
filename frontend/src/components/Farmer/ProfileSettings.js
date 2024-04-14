
import SideBar from "./SideBar";

function ProfileSettings() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Settings</h5>
                        <div className="card-body">
                            <div className="mb-3 row">
                                <label htmlFor="FullName" className="col-sm-2 col-form-label">Full Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Profile Photo</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="formFile" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label"> Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>

                            <hr />
                            <div className="mb-3 row">
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary mb-3">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProfileSettings;
