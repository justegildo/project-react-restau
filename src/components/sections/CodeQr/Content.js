import React, { useState } from 'react';
//import Breadcrumb from './Breadcrumb';
import { QrReader } from "react-qr-reader";

const Content = () => {
    const [selected, setSelected] = useState("environment");
    const [startScan, setStartScan] = useState(false);
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState("");

    const handleScan = async (scanData) => {
        setLoadingScan(true);
        console.log(`loaded data data`, scanData);
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            setData(scanData);
            setStartScan(false);
            setLoadingScan(false);
            // setPrecScan(scanData);
        }
    };
    const handleError = (err) => {
        console.error(err);
    };



    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    {/* <Breadcrumb /> */}
                    <div className="ms-panel">
                        <div className="ms-panel-header">
                            <h6 style={{textAlign: 'center'}}>Code QR</h6>
                        </div>
                    </div>

                    <div className="App">
                        {/* <h1>Hello CodeSandbox</h1>
                        <h2>
                            Last Scan:
                            {selected}
                        </h2> */}

                        <h6 style={{textAlign: 'center'}}>Scannez le code QR sur votre table et passez vos commandes</h6>
                        <button className="btn btn-info btn-block" style={{textAlign: 'center'}}
                            onClick={() => {
                                setStartScan(!startScan);
                            }}
                        >
                            {startScan ? "Arrêtez le scannage du code QR" : "Scannez le code QR"}
                        </button>
                        {startScan && (
                            <>
                                <div className="form-group">
                                    <select onChange={(e) => setSelected(e.target.value)} className="" style={{textAlign: 'left', marginLeft: '20%'}}>
                                        <option value={"environment"}>Back Camera</option>
                                        <option value={"user"}>Front Camera</option>
                                    </select>
                                </div>

                                <QrReader
                                    facingMode={selected}
                                    delay={1000}
                                    onError={handleError}
                                    onScan={handleScan}
                                    // chooseDeviceId={()=>selected}
                                    style={{ width: "300px" }}
                                />
                            </>
                        )}
                        {loadingScan && <p className="">En cours</p>}
                        {data !== "" && <p className="">{data}</p>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Content;
