import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { config } from '../../config';

export class Charts extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
        };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Monitor | Alerts",
                isCurrentPage: true
            }
        ];
    }

    render() {
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>Created Tickets</h1>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                                <Link to={`${config.basePath}/reporthelpdesh`} className="blue-button m-r-0 m-b-0 min-width-inherit width-auto create-btn">
                                    Back
                                </Link>                                
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-b-0">
                        <div className="charts-boxs">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-block width-100 chart-box"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-block width-100 chart-box"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-block width-100 chart-box"></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="d-block width-100 chart-box"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
