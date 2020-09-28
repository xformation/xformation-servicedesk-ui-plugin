import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import ticketIconImage1 from '../../img/ticket-icon-img1.png';
import { Line } from 'react-chartjs-2';
import { Tickets } from './../Tickets';
import Table from './../../components/table';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';

export class Dashboard extends React.Component<any, any> {
    breadCrumbs: any;
    tableValue: any;
    perPageLimit: any;
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    checkboxValue: any;
    ticketData:any;
    constructor(props: any) {
        super(props);
        const res= async()=>{
            const res =await  fetch(config.SERVICEDESK_API_URL + "/api/tickets", {
                method: 'get',
            }) .then((response) => response.json());
            return res;
        }

        
           
            console.log("data in constructor",res())
        this.tableValue = {
            columns: [
                {
                    label: 'ID',
                    key: 'id'
                },
                {
                    label: 'Requester Name',
                    key: 'contact'
                },
                {
                    label: 'Subjects',
                    key: 'subject'
                },
                {
                    label: 'Status',
                    key: 'status',
                    renderCallback: (value: any) => {
                        let strClass = "";
                        if (value === "Open") {
                            strClass = "yellow-green";
                        } else if (value === "Closed") {
                            strClass = "red";
                        } else if (value === "Pending") {
                            strClass = "orange";
                        }
                        return <td><span className={strClass}>{value}</span></td>
                    }
                },
                {
                    label: 'Priority',
                    key: 'priority'
                },
                {
                    label: 'Assignee',
                    key: 'assignee'
                },
                {
                    label: 'Create Date',
                    key: 'createDate'
                },
            ],
            data: [
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    checkStatus: false
                },
                {
                    index: '#47',
                    requesterName: 'Rodney Artichoke',
                    subject: 'Mobile Campaign',
                    status: 'Pending',
                    priority: 'Low',
                    assignee: 'Inverness McKenzie',
                    createDate: '15 July 2020',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    checkStatus: false
                },
                {
                    index: '#52',
                    requesterName: 'Inverness McKenzie',
                    subject: 'Service related announcements',
                    status: 'Open',
                    priority: 'Hign',
                    assignee: 'Abraham Pigeon',
                    createDate: '16 July 2020',
                    checkStatus: false
                },
                {
                    index: '#87',
                    requesterName: 'Douglas Lyphe',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Closed',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '19 July 2020',
                    checkStatus: false
                },
                {
                    index: '#92',
                    requesterName: 'Theodore Handle',
                    subject: 'Adding a payment methods',
                    status: 'Pending',
                    priority: 'Medium',
                    assignee: 'Jarvis Pepperspray',
                    createDate: '22 July 2020',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    checkStatus: false
                },
                {
                    index: '#27',
                    requesterName: 'Rodney Artichoke',
                    subject: 'I need help with aading a New Contact....',
                    status: 'Open',
                    priority: 'Low',
                    assignee: 'Fergus Douchebag',
                    createDate: '10 July 2020',
                    checkStatus: false
                },
                {
                    index: '#39',
                    requesterName: 'Chaplain Mondover',
                    subject: 'I need help with aading a New Contact data to be pre...',
                    status: 'Closed',
                    priority: 'Medium',
                    assignee: 'Bodrum Salvador',
                    createDate: '12 July 2020',
                    checkStatus: false
                },
            ],
        };
        this.perPageLimit = 6,
        this.checkboxValue = false,
        this.state = {
            openCreateMenu: false,
            ticketData2:[],
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
        this.openNewContactRef = React.createRef();
        this.openNewCompanyRef = React.createRef();
        this.openNewEmailRef = React.createRef();
        this.openNewTicketRef = React.createRef();
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
                        <Link to={`${config.basePath}/opentickets?type=${data.ticketingname}`}>
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
        async componentDidMount() {
            const res = await fetch(config.SERVICEDESK_API_URL + "/api/tickets", {
                method: 'get',
            })
                .then((response) => response.json());
            this.ticketData=res;
            this.setState({
                ticketData2:eval(res),
            });
            console.log("tickte=",res);
            console.log("table data in state variable 2="+this.state.ticketData2);
    }
    onClickOpenSubLink = () => {
        let menu = !this.state.openCreateMenu;
        this.setState({
            openCreateMenu: menu,
        });
    }

    onClickOpenNewContact = (e: any) => {
        this.openNewContactRef.current.toggle();
    };

    onClickOpenNewCompany = (e: any) => {
        this.openNewCompanyRef.current.toggle();
    };

    onClickOpenNewEmail = (e: any) => {
        this.openNewEmailRef.current.toggle();
    };

    onClickOpenNewTicket = (e: any) => {
        this.openNewTicketRef.current.toggle();
    };

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
    render() {
        const { openCreateMenu } = this.state;
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
                                <a href="#" onClick={this.onClickOpenSubLink} className="blue-button m-r-0 min-width-inherit width-auto create-btn">
                                    Create
                                </a>
                                {openCreateMenu == true && <div className="text-center open-create-menu">
                                    <a onClick={this.onClickOpenNewTicket}>
                                        Ticket
                                    </a>
                                    <a onClick={this.onClickOpenNewEmail}>
                                        Email
                                    </a>
                                    <a onClick={this.onClickOpenNewContact}>
                                        Contact
                                    </a>
                                    <a onClick={this.onClickOpenNewCompany}>
                                        Company
                                    </a>
                                </div>
                                }
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
                        <div className="d-block p-t-20 dashboard-all-ticket-tabel">
                            <div className="d-block p-b-10 heading">
                                <h2 className="d-block m-b-0">
                                    <Link to={`${config.basePath}/tickets`}>
                                        All Tickets
                                    </Link>
                                </h2>
                                <span className="d-block">List of ticket opened by Customer</span>
                            </div>
                            <Table valueFromData={this.tableValue} perPageLimit={this.perPageLimit} visiblecheckboxStatus={this.checkboxValue}
                                tableClasses={{ table: "ticket-tabel", tableParent: "d-block p-t-5 tickets-tabel", parentClass: "all-support-ticket-tabel" }} searchKey="requesterName" showingLine = "Showing %start% to %end% of %total% Tickets"/>
                        </div>
                    </div>
                </div>
                <OpenNewContactPopup ref={this.openNewContactRef} />
                <OpenNewCompanyPopup ref={this.openNewCompanyRef} />
                <OpenNewEmailPopup ref={this.openNewEmailRef} />
                <OpenNewTicketPopup ref={this.openNewTicketRef} />
            </div>
        );
    }
};