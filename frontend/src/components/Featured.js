import { Link } from 'react-router-dom';

function Featured(params) {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card h-100 shadow">
                        <Link to="/ExpertLogin">
                            <img src="experthome.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/ExpertLogin">I'm an Industrial Expert</Link>
                            </h5>
                            <div>
                                <p>
                                    "Agriculture is not just about farming; it's about nurturing the very earth that sustains us and ensuring its vitality for generations to come."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow">
                        <Link to="user-login">
                            <img src="famerhome.jpg" className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="user-login">I'm a Farmer</Link>
                            </h5>
                            <div>
                                <p>
                                    "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;
