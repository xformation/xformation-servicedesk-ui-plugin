import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export class OpenTickets extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            totalPages: '',
            currentPage: 0,
            perPageLimit: 3,
            start_index: 1,
            ending_index: 3,
            page_type: '',
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
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const pageType = urlParams.get('type');
        console.log(pageType);
        this.setState({
            page_type: pageType,
        });
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
                            <td>{Ticketdata.groups} <a href="#" className="float-right"><i className="fa fa-ellipsis-v"></i></a></td>
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
        console.log(e.target.value);
        const { totalPages, currentPage, start_index, perPageLimit, ending_index, TicketsData } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                        start_index: start_index - perPageLimit,
                    });
                    if (ending_index != TicketsData.length) {
                        this.setState({
                            ending_index: ending_index - perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index - (TicketsData.length - start_index + 1),
                        });
                    }
                }
                break;
            case 'next':
                if (currentPage !== totalPages - 1) {
                    this.setState({
                        currentPage: currentPage + 1,
                        start_index: start_index + perPageLimit,
                    });
                    if ((ending_index + perPageLimit) < TicketsData.length) {
                        this.setState({
                            ending_index: ending_index + perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index + (TicketsData.length - ending_index),
                        });
                    }
                }
                break;
            case 'btn-click':
                if ((i + 1) * perPageLimit < TicketsData.length) {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: ((i + 1) * perPageLimit),

                    });
                } else {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: (ending_index + (TicketsData.length - ending_index)),

                    });
                }
                break;
        }
    }

    render() {
        const { TicketsData, start_index, ending_index, page_type } = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>{page_type}</h1>
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
                    </div>
                    <div className="common-container border-bottom-0 filter-container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Agents">
                                        Agents
                                    </label>
                                    <select className="form-control" id="Agents">
                                        <option value="" selected>Select Agent</option>
                                        <option value="JeremyGriffin">Jeremy Griffin</option>
                                        <option value="TimothyDean">Timothy Dean</option>
                                        <option value="AndreeaDaker">Andreea Daker</option>
                                        <option value="KevinReyes">Kevin Reyes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Groups">
                                        Groups
                                    </label>
                                    <select className="form-control" id="Groups">
                                        <option value="" selected>Select Groups</option>
                                        <option value="Billings">Billings</option>
                                        <option value="Escalation">Escalation</option>
                                        <option value="ProductManagment">Product Managment</option>
                                        <option value="QA">QA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Created">
                                        Created
                                    </label>
                                    <select className="form-control" id="Created">
                                        <option value="" selected>Select Created</option>
                                        <option value="AnyTime">Any Time</option>
                                        <option value="Whithin30">Whithin 30</option>
                                        <option value="Whithin1hour">Whithin 1 hour</option>
                                        <option value="Whithin6hour">Whithin 6 hour</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="dueby">
                                        Due by
                                    </label>
                                    <select className="form-control" id="dueby">
                                        <option value="" selected>Select Due by</option>
                                        <option value="overdue">Overdue</option>
                                        <option value="today">Today</option>
                                        <option value="tomorrow">Tomorrow</option>
                                        <option value="next8hours">Next 8 Hours</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Status">
                                        Status
                                    </label>
                                    <select className="form-control" id="Status">
                                        <option value="" selected>Select Status</option>
                                        <option value="AllUnresolved">All Unresolved</option>
                                        <option value="Open">Open</option>
                                        <option value="Pendding">Pendding</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Priority">
                                        Priority
                                    </label>
                                    <select className="form-control" id="Priority">
                                        <option value="" selected>Select Priority</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Type">
                                        Type
                                    </label>
                                    <select className="form-control" id="Type">
                                        <option value="" selected>Select Type</option>
                                        <option value="None">None</option>
                                        <option value="Question">Question</option>
                                        <option value="Problem">Problem</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Source">
                                        Source
                                    </label>
                                    <select className="form-control" id="Source">
                                        <option value="" selected>Select Source</option>
                                        <option value="Email">Email</option>
                                        <option value="Portal">Portal</option>
                                        <option value="Forum">Forum</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Tags">
                                        Tags
                                    </label>
                                    <select className="form-control" id="Tags">
                                        <option value="" selected>Select Tags</option>
                                        <option value="CPU">CPU</option>
                                        <option value="Memory">Memory</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Companies">
                                        Companies
                                    </label>
                                    <select className="form-control" id="Companies">
                                        <option value="" selected>Select Company</option>
                                        <option value="CompanyName1">Company Name 1</option>
                                        <option value="CompanyName2">Company Name 2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Contacts">
                                        Contacts
                                    </label>
                                    <select className="form-control" id="Contacts">
                                        <option value="" selected>Select Contacts</option>
                                        <option value="Any">Any</option>
                                        <option value="ListOfContacts">List of Contacts</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-sm-12">
                                <div className="p-t-20 form-group">
                                    <a href="#" className="blue-button m-r-0 m-b-0 apply-filters-button">
                                        Apply Filters
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-t-0">
                        <div className="d-block all-support-ticket-tabel">
                            <div className="d-block p-b-10 heading">
                                <h2 className="d-block m-b-0">All Support Tickets</h2>
                                <span className="d-block">List of ticket opened by Customer</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="showing">Latest Tickets (Showing {start_index} to {ending_index} of {TicketsData.length} Tickets)</div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 text-right">
                                    <div className="sortby">
                                        <label className="d-inline-block">Sort By:</label>
                                        <select className="form-control">
                                            <option>Created Date</option>
                                            <option>Due by time</option>
                                            <option>Last modified</option>
                                            <option>Priority</option>
                                            <option>Status</option>
                                            <option>Ascending</option>
                                            <option>Descending</option>
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
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-block width-100 p-t-15 text-right pagination">
                                {this.peginationOfTable()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};