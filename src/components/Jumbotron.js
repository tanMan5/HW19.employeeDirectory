import React from "react";

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container-fluid">
                    <h1 className="text-center text white"> Employee Directory</h1>
                    <p className="lead text-center text-white">Search for Employee or filter through by clicking first name</p>
                </div>
            </div> 
        )
    }
}

export default Jumbotron;