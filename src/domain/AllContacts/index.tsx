import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import ticketIconImage1 from '../../img/ticket-icon-img1.png';
import { Line } from 'react-chartjs-2';

export class AllContacts extends React.Component<any, any> {
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
                    <div className="common-container border-bottom-0 p-b-0">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>All Contacts</h1>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                                <a href="#" className="blue-button m-r-0 m-b-0 min-width-inherit width-auto create-button">
                                    Create
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="common-container border-bottom-0 p-t-0">
                        <div className="d-block p-t-20 all-ticket-tabel">
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