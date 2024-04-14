import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

function Content() {
    return (
        <div className='mt-5'>
            <h1>Recent Schemes</h1>
            <Link to="https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2002012"> {/* Move Link outside of the carousel */}
                <div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="gfs1.jpg" className="d-block w-100" alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h5>
                                <p>PM-KISAN is a central sector scheme launched on 24th February 2019 to supplement financial needs of land holding farmers, subject to exclusions. Under the scheme, financial benefit of Rs. 6000/- per year is transferred in three equal four-monthly installments into the bank accounts of farmers’ families across the country, through Direct Benefit Transfer (DBT) mode. Till now, Rs. 2.81 lakh crores have been transferred through Direct Benefit Transfer (DBT) to more than 11 crores beneficiaries (Farmers) through various installments</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="gfs2.jpg" className="d-block w-100" alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)</h5>
                                <p>Pradhan Mantri Kisan Maandhan Yojna (PMKMY) is a central sector scheme launched on 12th September 2019 to provide security to the most vulnerable farmer families. PM-KMY is contributory scheme, small and marginal farmers (SMFs), subject to exclusion criteria, can opt to become member of the scheme by paying monthly subscription to the Pension Fund. Similar, amount will be contributed by the Central Government.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="gfs3.jpg" className="d-block w-100" alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h5>
                                <p>PMFBY was launched in 2016 in order to provide a simple and affordable crop insurance product to ensure comprehensive risk cover for crops to farmers against all non-preventable natural risks from pre-sowing to post-harvest and to provide adequate claim amount. The scheme is demand driven and available for all farmers A total of 5549.40 lakh farmer applications were insured under the scheme since 2016-17 and Rs 150589.10 crore has been paid as claim.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Content;
