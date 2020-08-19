import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export class Tickets extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            totalPages: '',
            currentPage: 0,
            perPageLimit: 3,
            TicketsData: [
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    Assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    Assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    Assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    Assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    Assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Low',
                    Assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    Assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    Assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    agents: 'Jacob Jones',
                    groups: 'Billings'
                }
            ]
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
    componentDidMount() {
        this.calculateTotalPages(this.state.TicketsData);
    };

    calculateTotalPages = (displayData: any) => {
        const { perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    };

    _displayTableData() {
        const { TicketsData, perPageLimit, currentPage } = this.state;
        const retuData = [];
        const length = TicketsData.length;
        if (length > 0) {
            for (let i = 0; i < this.state.TicketsData.length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const Ticketdata = this.state.TicketsData[i];
                    retuData.push(
                        <tr>
                            <td>{Ticketdata.index}</td>
                            <td><span className="image"></span>{Ticketdata.requesterName}</td>
                            <td className="subjects">{Ticketdata.subject}</td>
                            <td><span className={Ticketdata.status == 'Open' ? "yellow-green" : Ticketdata.status == 'Closed' ? "red" : "orange"}>{Ticketdata.status}</span></td>
                            <td><span className="priority">{Ticketdata.priority}</span></td>
                            <td>{Ticketdata.Assignee}</td>
                            <td className="date">{Ticketdata.createDate}</td>
                            <td>{Ticketdata.agents}</td>
                            <td>{Ticketdata.groups}</td>
                        </tr>
                    );
                }
            }
        } else {
            retuData.push(<div className="d-block width-100 there-no-data">There is no data</div>);
        }
        return retuData;
    }

    peginationOfTable() {
        const { currentPage, totalPages } = this.state;
        let rows = [];
        for (let i = 0; i < totalPages; i++) {
            console.log(currentPage);
            rows.push(<li className="" key={i}><a className={currentPage === i ? 'active' : 'deactive'} href="#" onClick={(e) => this.navigatePage('btn-click', e, i)}>{i + 1}</a></li >);
        }
        return (
            <ul>
                <li className="previous">
                    <a className={currentPage === 0 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('pre', e, '')}>Previous</a>
                </li>
                {rows}
                <li className="next">
                    <a className={currentPage === this.state.totalPages - 1 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('next', e, '')}>Next</a>
                </li>
            </ul>
        );
    }

    navigatePage(target: any, e: any, i: any) {
        const { totalPages, currentPage } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                    });
                }
                break;
            case 'next':
                if (currentPage !== totalPages - 1) {
                    this.setState({
                        currentPage: currentPage + 1,
                    });
                }
                break;
            case 'btn-click':
                this.setState({
                    currentPage: i
                });
                break;
        }
    }

    render() {
        const { TicketsData, perPageLimit } = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>Quick Statistics</h1>
                                    <span>List of ticket opened by Customer</span>
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
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="rousourceGroup">
                                        Agents&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="rousourceGroup">
                                        <option value="" selected>Select Agent</option>
                                        <option value="JeremyGriffin">Jeremy Griffin</option>
                                        <option value="TimothyDean">Timothy Dean</option>
                                        <option value="AndreeaDaker">Andreea Daker</option>
                                        <option value="KevinReyes">Kevin Reyes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="resources">
                                        Groups&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="resources">
                                        <option value="" selected>Select Groups</option>
                                        <option value="Billings">Billings</option>
                                        <option value="Escalation">Escalation</option>
                                        <option value="ProductManagment">Product Managment</option>
                                        <option value="QA">QA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Created&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Created</option>
                                        <option value="AnyTime">Any Time</option>
                                        <option value="Whithin30">Whithin 30</option>
                                        <option value="Whithin1hour">Whithin 1 hour</option>
                                        <option value="Whithin6hour">Whithin 6 hour</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Due by&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Due by</option>
                                        <option value="overdue">Overdue</option>
                                        <option value="today">Today</option>
                                        <option value="tomorrow">Tomorrow</option>
                                        <option value="next8hours">Next 8 Hours</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Status&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Status</option>
                                        <option value="AllUnresolved">All Unresolved</option>
                                        <option value="Open">Open</option>
                                        <option value="Pendding">Pendding</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Priority&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Priority</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Type&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Type</option>
                                        <option value="None">None</option>
                                        <option value="Question">Question</option>
                                        <option value="Problem">Problem</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Source&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Source</option>
                                        <option value="Email">Email</option>
                                        <option value="Portal">Portal</option>
                                        <option value="Forum">Forum</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Tags&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Tags</option>
                                        <option value="CPU">CPU</option>
                                        <option value="Memory">Memory</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Companies&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Company</option>
                                        <option value="CompanyName1">Company Name 1</option>
                                        <option value="CompanyName2">Company Name 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeRange">
                                        Contacts&nbsp;&nbsp;&nbsp;
                                    </label>
                                    <select className="form-control" id="timeRange">
                                        <option value="" selected>Select Contacts</option>
                                        <option value="Any">Any</option>
                                        <option value="ListOfContacts">List of Contacts</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-sm-12">
                                <div className="form-group">
                                    <a href="#" className="blue-button m-t-1">
                                        Apply Filters
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="common-container border-bottom-0"> */}
                        <div className="d-block p-t-20 all-ticket-tabel">
                            <div className="d-block p-b-10 heading">
                                <h2 className="d-block m-b-0">All Support Tickets</h2>
                                <span className="d-block">List of ticket opened by Customer</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="showing">Latest Tickets (Showing {TicketsData.length} of {perPageLimit} Tickets)</div>
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
                                            <th>Agents</th>
                                            <th>Groups</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this._displayTableData()}
                                        {/* <tr>
                                            <td>#92</td>
                                            <td><span className="image"></span> Theodore Handle</td>
                                            <td className="subjects">Adding a payment methods</td>
                                            <td><span className="orange">Pending</span></td>
                                            <td><span className="priority">Low</span></td>
                                            <td>Jarvis Pepperspray</td>
                                            <td className="date">22 July 2020</td>
                                            <td>Jacob Jones</td>
                                            <td>Billings</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-block width-100 p-t-15 text-right pagination">
                                {this.peginationOfTable()}
                                {/* <ul>
                                    <li className="previous"><a className="desable" href="#">Previous</a></li>
                                    <li className=""><a className="active" href="#">1</a></li>
                                    <li className=""><a className="deactive" href="#">2</a></li>
                                    <li className=""><a className="deactive" href="#">3</a></li>
                                    <li className=""><a className="deactive" href="#">4</a></li>
                                    <li className=""><a className="deactive" href="#">5</a></li>
                                    <li className="next"><a className="enable" href="#">Next</a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }
};