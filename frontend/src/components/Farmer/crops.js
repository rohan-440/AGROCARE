import React from 'react';
import SideBar from './SideBar';

function Crop() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <SideBar />
                </aside>
                <section className="col-md-9">
                    <div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src="wheat.jpeg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Wheat</h5>
                                                        <p className="card-text">Wheat farming is a vital component of global agriculture, providing staple food for billions and supporting economic growth. Cultivated in diverse climates, wheat undergoes stages from planting to harvesting.</p>
                                                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src="rice.jpg" className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Rice</h5>
                                                        <p className="card-text">
                                                            Rice farming is a cornerstone of agriculture, particularly in Asian countries. It requires flooded or irrigated fields and warm temperatures for optimal growth. Cultivation involves planting rice seeds in prepared fields.</p>
                                                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src="jhute.jpg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Jute</h5>
                                                            <p className="card-text">Long, smooth, and lustrous, jute is a bast fibre that may be spun into strong, coarse threads. It is made from flowering plants of the genus Corchorus, which are from the Malvaceae family of mallows.</p>
                                                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src="ragi.jpg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Ragi</h5>
                                                            <p className="card-text">Ragi, also known as finger millet, is a cereal crop grown primarily in semi-arid tropical regions. It is a resilient crop that can tolerate drought and poor soil conditions, making it suitable for marginal lands. </p>
                                                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>




    );
}

export default Crop;
