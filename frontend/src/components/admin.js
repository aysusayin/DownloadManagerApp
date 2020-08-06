import React from 'react';
import '../App.css';
import { app_config } from "../config";

export class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", releases: [] };
    }

    callAPI() {
        fetch(app_config.api_url + "software/" + this.id)
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({ name: jsonData.name, releases: jsonData.releases });
            })
            .catch((error) => {
                console.error(error)
            });
    }

    componentDidMount() {
        //this.callAPI();
    }

    render() {
        return (
            <main role="main" className="container" >
                <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-dark rounded shadow-sm">
                    <div className="lh-100">
                        <h5 className="mb-0 text-white lh-100">Admin login</h5>
                    </div>
                </div>
            </main>
        );
    }
}

