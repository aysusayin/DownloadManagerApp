import React from 'react';
import '../App.css';

export class NotFound extends React.Component {
    render() {
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 rounded shadow-sm" >
                    <div class="d-flex justify-content-between align-items-center w-100">
                        Opps this page does not exists
                    </div>
                </div>
            </main>
        );
    }
}