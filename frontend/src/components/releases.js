import React from 'react';
import '../App.css';
import { app_config } from "../config";
import $ from 'jquery';

export class SoftwareReleases extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
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
        this.callAPI();
    }

    render() {
        var baseURL = "/software/" + this.id;
        var releases = this.state.releases.map(function (rel) {
            var link = baseURL + "/release/" + rel.id;
            return (
                <div className="p-3 my-3 rounded shadow-sm" key={rel.id} >
                    <div className="d-flex justify-content-between align-items-center w-100 border-bottom border-gray">
                        <h5 className="d-flex align-items-center" >
                            <p className="m-1"> Version: </p>
                            <a href={link} className="d-block text-secondary">{rel.version}</a>
                        </h5>
                        <div className="d-flex">
                            <a className="my-3 m-3 btn btn-primary btn-sm" href={rel.download}>Download</a>
                            <p className="my-3 text-secondary font-weight-light">Release date: {rel.date}</p>
                        </div>
                    </div>
                    <div>
                        <h6 className="my-3 text-dark font-weight-bold font-italic">NOTES</h6>
                        <p className="text-secondary font-italic">{rel.notes}</p>
                        <p className='text-dark '>Channel: {rel.channel}</p>
                    </div>
                </div>


            );
        });
        return (

            <main role="main" className="container" >
                <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-dark rounded shadow-sm">
                    <div className="lh-100">
                        <h5 className="mb-0 text-white lh-100">Releases</h5>
                    </div>
                </div>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All Releases</a>
                        <a class="nav-item nav-link" id="nav-stable-tab" data-toggle="tab" href="#nav-stable" role="tab" aria-controls="nav-stable" aria-selected="false">Stable</a>
                        <a class="nav-item nav-link" id="nav-beta-tab" data-toggle="tab" href="#nav-beta" role="tab" aria-controls="nav-beta" aria-selected="false">Beta</a>
                        <a class="nav-item nav-link" id="nav-nightly-tab" data-toggle="tab" href="#nav-nightly" role="tab" aria-controls="nav-nightly" aria-selected="false">Nightly</a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">{releases}</div>
                    <div class="tab-pane fade" id="nav-stable" role="tabpanel" aria-labelledby="nav-stable-tab">STABLE</div>
                    <div class="tab-pane fade" id="nav-beta" role="tabpanel" aria-labelledby="nav-beta-tab">BETA</div>
                    <div class="tab-pane fade" id="nav-nightly" role="tabpanel" aria-labelledby="nav-nightly-tab">NIGHTLY</div>
                </div>
            </main>
        );
    }
}

