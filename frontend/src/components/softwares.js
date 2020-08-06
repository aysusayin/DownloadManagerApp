import React from 'react';
import '../App.css';
import { app_config } from "../config";

export class Softwares extends React.Component {
    constructor(props) {
        super(props);
        this.state = { softwares: [], isLoaded: false };
    }

    callAPI() {
        fetch(app_config.api_url + "software/")
            .then(response => response.json())
            .then((jsonData) => {
                this.setState({ softwares: jsonData.softwares, isLoaded: true })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        var softwares = this.state.softwares.map(function (software) {
            var link = "software/" + software.id;
            console.log('LINK: ', link)
            return (
                <div className="media text-muted pt-3" key={software.id}>
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" >
                        <a href={link} className="d-block text-gray-dark">{software.name}</a>
                    </p>
                </div>

            );
        });
        
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-dark rounded shadow-sm">
                    <div className="lh-100">
                        <h6 className="mb-0 text-white lh-100">Applications</h6>
                    </div>
                </div>
                <div className="p-3 bg-white rounded shadow-sm" >
                    {softwares}
                </div>
            </main>
        );
    }
}
