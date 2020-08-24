import React from "react";


class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container-fluid">
                    <h1 className="text text-center"> Employee Directory</h1>
                    <p className="text lead text-center">Search for Employee or filter through by clicking on heading</p>
                </div>
            </div> 
        )
    }
}

export default Jumbotron;