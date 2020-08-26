import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import ticketIconImage1 from '../../img/ticket-icon-img1.png';
import { Line } from 'react-chartjs-2';
import { Tickets } from './../Tickets';
// import Link, { LinkProps } from "@material-ui/core/Link";

export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            totalPages: '',
            currentPage: 0,
            perPageLimit: 6,
            start_index: 1,
            ending_index: 6,
            ticketsSetData: [
                {
                    id: '27',
                    requesterName: 'Rodney Artichoke',
                    subjects: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                },
                {
                    id: '39',
                    requesterName: 'Chaplain Mondover',
                    subjects: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                },
                {
                    id: '47',
                    requesterName: 'Rodney Artichoke',
                    subjects: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                },
                {
                    id: '52',
                    requesterName: 'Inverness McKenzie',
                    subjects: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                },
                {
                    id: '87',
                    requesterName: 'Douglas Lyphe',
                    subjects: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                },
                {
                    id: '92',
                    requesterName: 'Theodore Handle',
                    subjects: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                },
                {
                    id: '52',
                    requesterName: 'Inverness McKenzie',
                    subjects: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                },
                {
                    id: '87',
                    requesterName: 'Douglas Lyphe',
                    subjects: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                },
                {
                    id: '92',
                    requesterName: 'Theodore Handle',
                    subjects: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                },
                {
                    id: '39',
                    requesterName: 'Chaplain Mondover',
                    subjects: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                },
                {
                    id: '47',
                    requesterName: 'Rodney Artichoke',
                    subjects: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                },
                {
                    id: '52',
                    requesterName: 'Inverness McKenzie',
                    subjects: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                },
                {
                    id: '47',
                    requesterName: 'Rodney Artichoke',
                    subjects: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                },
                {
                    id: '52',
                    requesterName: 'Inverness McKenzie',
                    subjects: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                },
                {
                    id: '87',
                    requesterName: 'Douglas Lyphe',
                    subjects: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                },
                {
                    id: '92',
                    requesterName: 'Theodore Handle',
                    subjects: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                },
                {
                    id: '52',
                    requesterName: 'Inverness McKenzie',
                    subjects: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                },
                {
                    id: '87',
                    requesterName: 'Douglas Lyphe',
                    subjects: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                },
                {
                    id: '92',
                    requesterName: 'Theodore Handle',
                    subjects: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                },
                {
                    id: '39',
                    requesterName: 'Chaplain Mondover',
                    subjects: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                },
                {
                    id: '27',
                    requesterName: 'Rodney Artichoke',
                    subjects: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                },
                {
                    id: '39',
                    requesterName: 'Chaplain Mondover',
                    subjects: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                },
            ],
            ticketingData: [
                {
                    ticketingImage: '',
                    ticketingNumber: '560',
                    ticketingname: 'Open Tickets',
                },
                {
                    ticketingImage: '',
                    ticketingNumber: '284',
                    ticketingname: 'Due Today',
                },
                {
                    ticketingImage: '',
                    ticketingNumber: '24',
                    ticketingname: 'Unassigned',
                },
                {
                    ticketingImage: '',
                    ticketingNumber: '50',
                    ticketingname: 'Unresolved',
                },
                {
                    ticketingImage: '',
                    ticketingNumber: '10',
                    ticketingname: 'Overdue',
                },
            ],
            performerAgentsData: [
                {
                    agentName: 'Spruce Springclean',
                    ticket: '89',
                    responseRate: '91',
                },
                {
                    agentName: 'Archibald Northbottom',
                    ticket: '75',
                    responseRate: '85',
                },
                {
                    agentName: 'Rodney Artichoke',
                    ticket: '60',
                    responseRate: '70',
                },
                {
                    agentName: 'Gustav Purpleson',
                    ticket: '53',
                    responseRate: '63',
                },
            ],
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

    LineChartData = {
        responsive: true,
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
            {
                label: "Hours",
                lineTension: 0.4,
                fill: false,
                borderColor: "rgba(0, 170, 240, 1)",
                data: [10, 25, 15, 9, 30, 34, 35, 35, 15, 10, 25, 30, 40, 46, 49, 33, 40, 42, 33, 35, 48, 50]
            }
        ]
    };

    displayTicketingData() {
        const { ticketingData } = this.state;
        const retData = [];
        for (let i = 0; i < ticketingData.length; i++) {
            const data = ticketingData[i];
            retData.push(
                <div className="col-xl-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="d-block text-center ticketing-box">
                        <Link to={`${config.basePath}/opentickets?type=${data.ticketingname}`} target="blank">
                            <div className="image"><img src={ticketIconImage1} alt="" /></div>
                            <div className="number">{data.ticketingNumber}</div>
                            <div className="name">{data.ticketingname}</div>
                        </Link>
                    </div>
                </div >
            );
        }
        return retData;
    }

    performerAgentsData() {
        const { performerAgentsData } = this.state;
        const retData = [];
        for (let i = 0; i < performerAgentsData.length; i++) {
            const data = performerAgentsData[i];
            retData.push(
                <tr>
                    <td><span className="image"></span> {data.agentName}</td>
                    <td>{data.ticket} Tickets</td>
                    <td>{data.responseRate} %</td>
                </tr>
            );
        }
        return retData;
    }

    componentDidMount() {
        this.calculateTotalPages(this.state.ticketsSetData);
    };

    calculateTotalPages = (displayData: any) => {
        const { perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    };

    allTicketsSetData = () => {
        const { ticketsSetData, perPageLimit, currentPage } = this.state;
        const retData = [];
        const length = ticketsSetData.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const data = ticketsSetData[i];
                    retData.push(
                        <tr>
                            <td>#{data.id}</td>
                            <td><span className="image"></span> {data.requesterName}</td>
                            <td className="subjects">{data.subjects}</td>
                            <td>
                                {data.status == 'Open' &&
                                    <span className="yellow-green">Open</span>
                                }
                                {data.status == 'Closed' &&
                                    <span className="red">Closed</span>
                                }
                                {data.status == 'Pending' &&
                                    <span className="orange">Pending</span>
                                }
                            </td>
                            <td><span className="priority">{data.priority}</span></td>
                            <td>{data.assignee}</td>
                            <td className="date">{data.createDate}</td>
                        </tr>
                    );
                }
            }
        } else {
            retData.push(<tr><td className="text-center there-no-data" colSpan={7}>There is no data</td></tr>);
        }

        return retData;
    }

    peginationOfBox() {
        const { currentPage, totalPages, ticketsSetData } = this.state;
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
        const { totalPages, currentPage, start_index, perPageLimit, ending_index, ticketsSetData, } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                        start_index: start_index - perPageLimit,
                    });
                    if (ending_index != ticketsSetData.length) {
                        this.setState({
                            ending_index: ending_index - perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index - (ticketsSetData.length - start_index + 1),
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
                    if ((ending_index + perPageLimit) < ticketsSetData.length) {
                        this.setState({
                            ending_index: ending_index + perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index + (ticketsSetData.length - ending_index),
                        });
                    }
                }
                break;
            case 'btn-click':
                if ((i + 1) * perPageLimit < ticketsSetData.length) {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: ((i + 1) * perPageLimit),

                    });
                } else {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: (ending_index + (ticketsSetData.length - ending_index)),

                    });
                }
                break;
        }
    }


    render() {
        const state = this.state;
        const { ticketsSetData, start_index, ending_index } = this.state;
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
                            {this.displayTicketingData()}
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-t-0">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12 ticket-trends-main">
                                <div className="ticket-trends">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-12 col-sm-12">
                                            <div className="d-block heading">
                                                <h3 className="d-block mb-0">Today's Ticket Trends</h3>
                                                <span className="d-block mb-0">13 August 2020</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12 col-sm-12 text-right">
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
                                    <div className="d-block p-t-20 width-100 ticket-graphs">
                                        <div className="d-block width-100" style={{ height: "100%" }}>
                                            <Line
                                                data={this.LineChartData}
                                                options={{
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    scales: {
                                                        yAxes: [{
                                                            gridLines: {
                                                                color: "rgba(240, 243, 247, 1)",
                                                            },
                                                            ticks: {
                                                                stepSize: 10,
                                                                beginAtZero: true
                                                            }
                                                        }],
                                                        xAxes: [{
                                                            gridLines: {
                                                                color: "rgba(240, 243, 247, 1)",
                                                            },
                                                            ticks: {
                                                                stepSize: 10,
                                                                beginAtZero: true
                                                            }
                                                        }]
                                                    },
                                                    legend: {
                                                        display: false,
                                                        position: 'bottom'
                                                    }
                                                }}
                                            />
                                            <div className="d-block text-center p-t-5 hours-text">Hours</div>
                                        </div>
                                    </div>
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
                                            {this.performerAgentsData()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="d-block p-t-20 all-ticket-tabel">
                            <div className="d-block p-b-10 heading">
                                <h2 className="d-block m-b-0">
                                    <Link to={`${config.basePath}/tickets`}>
                                        All Tickets
                                    </Link>
                                </h2>
                                <span className="d-block">List of ticket opened by Customer</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="showing">
                                        Latest Tickets (Showing {start_index} to {ending_index} of {ticketsSetData.length} Tickets)
                                    </div>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.allTicketsSetData()}
                                    </tbody>
                                </table>
                            </div>

                            {ticketsSetData.length > 0 &&
                                <div className="d-block width-100 p-t-15 text-right pagination">
                                    {this.peginationOfBox()}
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};