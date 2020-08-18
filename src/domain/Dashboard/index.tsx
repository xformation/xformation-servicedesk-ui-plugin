import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import ticketIconImage1 from '../../img/ticket-icon-img1.png';
import ticketIconImage2 from '../../img/ticket-icon-img2.png';
import ticketIconImage3 from '../../img/ticket-icon-img3.png';
import ticketIconImage4 from '../../img/ticket-icon-img4.png';
import ticketIconImage5 from '../../img/ticket-icon-img5.png';

export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {};
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
        const state = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>Dashboard</h1>
                                    <span>Complete Overview of the Tickets</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                                <a href="#" className="blue-button m-r-0 min-width-inherit width-auto">
                                    Create
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block text-center ticketing-box">
                                    <div className="image"><img src={ticketIconImage1} alt="" /></div>
                                    <div className="number">560</div>
                                    <div className="name">Open Tickets</div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block text-center ticketing-box">
                                    <div className="d-block image">
                                        <img src={ticketIconImage2} alt="" />
                                    </div>
                                    <div className="d-block number">284</div>
                                    <div className="d-block name">Due Today</div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block text-center ticketing-box">
                                    <div className="d-block image"><img src={ticketIconImage3} alt="" /></div>
                                    <div className="d-block number">24</div>
                                    <div className="d-block name">Unassigned</div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block text-center ticketing-box">
                                    <div className="d-block image"><img src={ticketIconImage4} alt="" /></div>
                                    <div className="d-block number">50</div>
                                    <div className="d-block name">Unresolved</div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                                <div className="d-block text-center ticketing-box">
                                    <div className="d-block image"><img src={ticketIconImage5} alt="" /></div>
                                    <div className="d-block number">10</div>
                                    <div className="d-block name">Overdue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="ticket-trends"></div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <div className="performer-agents">
                                    <div className="heading">
                                        Top Performer Help Agents
                                    </div>
                                    <table className="performer-agents-table">
                                        <thead>
                                            <tr>
                                                <td>Agent Name</td>
                                                <td>Tickets</td>
                                                <td>Response Rate</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="image"></span> Spruce Springclean</td>
                                                <td>89 Tickets</td>
                                                <td>91 %</td>
                                            </tr>
                                            <tr>
                                                <td><span className="image"></span> Archibald Northbottom</td>
                                                <td>75 Tickets</td>
                                                <td>85 %</td>
                                            </tr>
                                            <tr>
                                                <td><span className="image"></span> Rodney Artichoke</td>
                                                <td>60 Tickets</td>
                                                <td>70 %</td>
                                            </tr>
                                            <tr>
                                                <td><span className="image"></span> Gustav Purpleson</td>
                                                <td>50 Tickets</td>
                                                <td>63 %</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};