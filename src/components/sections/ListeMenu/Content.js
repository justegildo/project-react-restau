import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';

const Content = () => {
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);

    const toggleContent1 = () => {
        setShowContent1(!showContent1);
    };

    const toggleContent2 = () => {
        setShowContent2(!showContent2);
    };

    const toggleContent3 = () => {
        setShowContent3(!showContent3);
    };

    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb />
                    <div className="ms-panel">
                        <div className="ms-panel-header">
                            <h6>Carte Menu Chez JUSTE</h6>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-light btn-block" onClick={toggleContent1}>ENTREES <span className=""></span></button>
                        {showContent1 && (
                            <div className="" id="section9663">
                                <div className="ms-card-body">
                                    <h6>SNACK</h6>
                                    <p>Casse-croute destiné à être mangé en dehors du repas</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <button className="btn btn-light btn-block" onClick={toggleContent2}>MENU DU JOUR <span className=""></span></button>
                        {showContent2 && (
                            <div className="" id="section9663">
                                <div className="ms-card-body">
                                    <h6>Riz</h6>
                                    <p>Riz au gras avec du poulet</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <button className="btn btn-light btn-block" onClick={toggleContent3}>BOISSONS <span className=""></span></button>
                        {showContent3 && (
                            <div className="" id="section9663">
                                <div className="ms-card-body">
                                    <h6>BIERE</h6>
                                    <p>Sans alcool</p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Content;
