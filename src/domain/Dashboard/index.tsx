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
                                <a href="#" className="blue-button m-r-0 m-b-0 min-width-inherit width-auto create-button">
                                    Create
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-b-0">
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
                    <div className="common-container border-bottom-0 p-t-0">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12 ticket-trends-main">
                                <div className="ticket-trends">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                            <div className="d-block heading">
                                                <h3 className="d-block mb-0">Today's Ticket Trends</h3>
                                                <span className="d-block mb-0">13 August 2020</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-12 text-right">
                                            <div className="d-inline-block v-a-top days-box">
                                                <div className="d-inline-block form-check">
                                                    <input type="checkbox" className="form-check-input" id="Today" />
                                                    <label className="form-check-label" htmlFor="Today">Today</label>
                                                </div>
                                                <div className="d-inline-block form-check">
                                                    <input type="checkbox" className="form-check-input" id="Yesterday" />
                                                    <label className="form-check-label" htmlFor="Yesterday">Yesterday</label>
                                                </div>
                                            </div>
                                            <div className="d-inline-block v-a-top calendar-box">
                                                <i className="fa fa-chevron-left"></i>
                                                <i className="fa fa-calendar"></i>
                                                <span>July 2020</span>
                                                <i className="fa fa-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-block p-t-20 width-100 ticket-graphs"></div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 performer-agents-main">
                                <div className="performer-agents">
                                    <div className="heading">
                                        Top Performer Help Agents
                                    </div>
                                    <table className="performer-agents-table">
                                        <thead>
                                            <tr>
                                                <th>Agent Name</th>
                                                <th>Tickets</th>
                                                <th>Response Rate</th>
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
                    <div className="common-container border-bottom-0">
                        <div className="d-block p-t-20 all-ticket-tabel">
                            <div className="d-block p-b-10 heading">
                                <h2 className="d-block m-b-0">All Tickets</h2>
                                <span className="d-block">List of ticket opened by Customer</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="showing">Latest Tickets (Showing 06 to 10 of 48 Tickets)</div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 text-right">
                                    <div className="sortby">
                                        <label className="d-inline-block">Sort By:</label>
                                        <select className="form-control">
                                            <option>Created Date</option>
                                            <option>Created Date</option>
                                            <option>Created Date</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block p-t-5 tickets-tabel">
                                <table className="ticket-tabel">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Requester Name</th>
                                            <th>Subjects</th>
                                            <th>Status</th>
                                            <th>Priority</th>
                                            <th>Assignee</th>
                                            <th>Create Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#27</td>
                                            <td><span className="image"></span> Rodney Artichoke</td>
                                            <td className="subjects">I need help with aading a New Contact....</td>
                                            <td><span className="yellow-green">Open</span></td>
                                            <td><span className="priority">Low</span></td>
                                            <td>Fergus Douchebag</td>
                                            <td className="date">10 July 2020</td>
                                        </tr>
                                        <tr>
                                            <td>#39</td>
                                            <td><span className="image"></span> Chaplain Mondover</td>
                                            <td className="subjects">I need help with aading a New Contact data to be pre...</td>
                                            <td><span className="red">Closed</span></td>
                                            <td><span className="priority">Medium</span></td>
                                            <td>Bodrum Salvador</td>
                                            <td className="date">12 July 2020</td>
                                        </tr>
                                        <tr>
                                            <td>#47</td>
                                            <td><span className="image"></span> Rodney Artichoke</td>
                                            <td className="subjects">Mobile Campaign</td>
                                            <td><span className="orange">Pending</span></td>
                                            <td><span className="priority">Low</span></td>
                                            <td>Inverness McKenzie</td>
                                            <td className="date">15 July 2020</td>
                                        </tr>
                                        <tr>
                                            <td>#52</td>
                                            <td><span className="image"></span> Inverness McKenzie</td>
                                            <td className="subjects">Service related announcements</td>
                                            <td><span className="yellow-green">Open</span></td>
                                            <td><span className="priority">Hign</span></td>
                                            <td>Abraham Pigeon</td>
                                            <td className="date">16 July 2020</td>
                                        </tr>
                                        <tr>
                                            <td>#87</td>
                                            <td><span className="image"></span> Douglas Lyphe</td>
                                            <td className="subjects">I need help with aading a New Contact....</td>
                                            <td><span className="red">Closed</span></td>
                                            <td><span className="priority">Low</span></td>
                                            <td>Fergus Douchebag</td>
                                            <td className="date">19 July 2020</td>
                                        </tr>
                                        <tr>
                                            <td>#92</td>
                                            <td><span className="image"></span> Theodore Handle</td>
                                            <td className="subjects">Adding a payment methods</td>
                                            <td><span className="orange">Pending</span></td>
                                            <td><span className="priority">Low</span></td>
                                            <td>Jarvis Pepperspray</td>
                                            <td className="date">22 July 2020</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-block width-100 p-t-15 text-right pagination">
                                <ul>
                                    <li className="previous"><a className="desable" href="#">Previous</a></li>
                                    <li className=""><a className="active" href="#">1</a></li>
                                    <li className=""><a className="deactive" href="#">2</a></li>
                                    <li className=""><a className="deactive" href="#">3</a></li>
                                    <li className=""><a className="deactive" href="#">4</a></li>
                                    <li className=""><a className="deactive" href="#">5</a></li>
                                    <li className="next"><a className="enable" href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};