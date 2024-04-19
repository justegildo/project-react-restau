import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';

// Liste menu
class Content extends Component {
    componentDidMount() {
        //initialize datatable
        //console.log("bonsoir");
        
    }
    render() {
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
                            <button className="btn btn-light btn-block" type='button'>ENTREES</button>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-light btn-block" type='button'>MENU DU JOUR</button>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-light btn-block" type='button'>BOISSONS</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;