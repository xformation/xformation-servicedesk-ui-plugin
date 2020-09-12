import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { config } from '../../config';

export class Reports extends React.Component<any, any> {
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
                <div className="servicedesk-page-container reports-page-container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="reports-left">
                                <div className="d-block p-b-15 heading">Reports</div>
                                <div className="d-block ask-question">Ask me a question about your Helpdesk</div>
                                <div className="d-block helpdesk-box">
                                    <div className="d-block helpdesk-heading">Helpdesk Analysic</div>
                                    <ul className="d-block">
                                        <li className="d-inline-block">
                                            <Link to={`${config.basePath}/reporthelpdesh`} className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-users"></i></span>
                                                <strong className="d-block">HELPDESK IN-DEPTH</strong>
                                            </Link>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-money"></i></span>
                                                <strong className="d-block">TICKET VOLUME TRENDS</strong>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-phone"></i></span>
                                                <strong className="d-block">PHONE SUMMARY</strong>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-comments-o"></i></span>
                                                <strong className="d-block">CHAT SUMMARY</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-block helpdesk-box productivity">
                                    <div className="d-block helpdesk-heading">Productivity</div>
                                    <ul className="d-block">
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-users"></i></span>
                                                <strong className="d-block">AGENT PERFORMANCE</strong>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-money"></i></span>
                                                <strong className="d-block">GROUP PERFORMANCE</strong>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-phone"></i></span>
                                                <strong className="d-block">PERFORMANCE DISTRIBUTION</strong>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-comments-o"></i></span>
                                                <strong className="d-block">TIME SHEET SUMMARY</strong>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-comments-o"></i></span>
                                                <strong className="d-block">TICKET LIFECYCLE</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-block helpdesk-box happiness">
                                    <div className="d-block helpdesk-heading">Customer Happiness</div>
                                    <ul className="d-block">
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-users"></i></span>
                                                <strong className="d-block">TOP CUSTOMER ANALYSIS</strong>
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <a href="#" className="d-block text-center">
                                                <span className="d-block"><i className="fa fa-money"></i></span>
                                                <strong className="d-block">SATISFACTION SURVEY</strong>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="d-block build-reports-text">
                                    <p className="d-block">Want to build custom reports?</p>
                                    <strong className="d-block">
                                        <a href="#">Schedule an export</a>
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="reports-right">
                                <div className="row">
                                    <div className="col-lg-8 col-md-6 col-sm-6">
                                        <div className="heading">
                                            <h3 className="d-block m-b-0">Today’s Insights</h3>
                                            <p className="d-block m-b-0">Last Updated 37 Minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="d-block text-right customize-link">
                                            <a href="#">Customize</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="d-block"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
