import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import Table from './../../components/table';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';
import { RestService } from '../_service/RestService';
import { config } from '../../config';
class MySelectObj {
    id: any;
    name: any;
    constructor(id: any, name: any) {
        this.id = id;
        this.name = name;
    }
}
export class OpenTickets extends React.Component<any, any> {
    breadCrumbs: any;
    perPageLimit: any;
    tableValue: any;
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    checkboxValue: any;
    constructor(props: any) {
        super(props);
        this.perPageLimit = 6;
        this.checkboxValue = false,
            this.state = {
                allAgents: [],
                allContacts: [],
                allCompanies: [],
                agentNameList: [],
                contactNameList: [],
                companyNameList: [],
                agent: '',
                created: '',
                dueBy: '',
                status: '',
                priority: '',
                type: '',
                tags: '',
                company: '',
                contact: '',
                filterCheckbox: false,

                page_type: '',
                openCreateMenu: false,
                columns: [
                    {
                        label: 'ID',
                        key: 'id'
                    },
                    {
                        label: 'Requester Name',
                        key: 'requesterName'
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
                        key: 'assignedToName'
                    },
                    {
                        label: 'Type',
                        key: 'type'
                    },
                    {
                        label: 'Tags',
                        key: 'tags'
                    },
                    {
                        label: 'Requester Company',
                        key: 'requesterCompany'
                    },
                    {
                        label: 'Create Date',
                        key: 'createDate'
                    },
                    {
                        label: 'Expected Date Of Complection',
                        key: 'expectedDateOfCompletion'
                    },
                ],
                ticketDataList: [],
            };
        this.breadCrumbs = [
            {
                label: "Home",
                route: `/`
            },
            {
                label: "Tickets",
                route: `${config.basePath}/dashboard`
            },
            {
                label: "Open Tickets",
                isCurrentPage: true
            }
        ];
        this.openNewContactRef = React.createRef();
        this.openNewCompanyRef = React.createRef();
        this.openNewEmailRef = React.createRef();
        this.openNewTicketRef = React.createRef();
    }
    async componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const pageType = urlParams.get('type');
        this.setState({
            page_type: pageType,
        });
        try {
            await RestService.getData(config.GET_ALL_TICKET_FOR_TABLE_URL + "?pageType=" + pageType, null, null).then(
                (response: any) => {
                    this.setState({
                        ticketDataList: response,
                    });
                })
        } catch (err) {
            console.log("Loading ticket data failed. Error: ", err);
        }
        try {
            await RestService.getData(config.GET_ALL_AGENT_URL, null, null).then(
                (response: any) => {

                    let ary = [];
                    let obj = new MySelectObj("", "Select Agent");
                    ary.push(obj);
                    for (let i = 0; i < response.length; i++) {
                        obj = new MySelectObj(response[i].id, response[i].name);
                        ary.push(obj);
                    }
                    this.setState({
                        agentNameList: ary,
                        allAgents: response,
                    });
                })
        } catch (err) {
            console.log("Loading agent data failed. Error: ", err);
        }
        try {
            await RestService.getData(config.GET_ALL_CONTACT_URL, null, null).then(
                (response: any) => {

                    let contactNameAry = [];
                    let obj = new MySelectObj("", "Select Contact");
                    let contactNameObj = new MySelectObj("", "Select Contact");
                    for (let i = 0; i < response.length; i++) {
                        obj = new MySelectObj(response[i].id, response[i].userName + " => " + response[i].primaryEmail);
                        contactNameObj = new MySelectObj(response[i].id, response[i].userName);
                        contactNameAry.push(contactNameObj);
                    }
                    this.setState({
                        allContacts: response,
                        contactNameList: contactNameAry,
                    });
                })
        } catch (err) {
            console.log("Loading contact data failed. Error: ", err);
        }
        try {
            await RestService.getData(config.GET_ALL_COMPANIES_URL, null, null).then(
                (response: any) => {

                    let ary = [];
                    let obj = new MySelectObj("", "Select Company");
                    for (let i = 0; i < response.length; i++) {
                        obj = new MySelectObj(response[i].id, response[i].companyName);
                        ary.push(obj);
                    }
                    this.setState({
                        companyNameList: ary,
                        allCompanies: response
                    });
                })
        } catch (err) {
            console.log("Loading company data failed. Error: ", err);
        }
    };
    createSelectboxOptions = (data: any) => {
        let retData = [];
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let item = data[i];
                retData.push(
                    <option value={item.name} key={item.name}>
                        {item.name}
                    </option>
                );
            }
        }
        return retData;
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

    onClickOpenSubLink = () => {
        let menu = !this.state.openCreateMenu;
        this.setState({
            openCreateMenu: menu,
        });
    }
    handleStateChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            filterCheckbox: true
        });
    };
    applyFilters = () => {
        const { ticketDataList, agent, created, dueBy, status, priority, type, tags, company, contact } = this.state;
        const retData = [];
        if (ticketDataList && ticketDataList.length > 0) {
            const length = ticketDataList.length;
            for (let i = 0; i < length; i++) {
                const ticket = ticketDataList[i];
                const ticketKeys = Object.keys(ticket);
                const lowerCaseKeys = ticketKeys.map((key) => key.toLocaleLowerCase());
                let isMatched = true;
                if (agent) {
                    console.log("keys : ", lowerCaseKeys);
                    let index = lowerCaseKeys.indexOf("assignedtoname");
                    if (index !== -1) {
                        let key = ticketKeys[index];

                        let data = ticket[key];
                        console.log(" key : ", key);
                        console.log(" data : ", data)
                        if (data) {
                            isMatched = agent === data.toLowerCase();
                        } else {
                            isMatched = false;
                        }
                    } else {
                        isMatched = false;
                    }
                }
                if (isMatched && created) {

                }
                if (isMatched && dueBy) {
                }
                if (isMatched && status) {
                    let index = lowerCaseKeys.indexOf("status");
                    if (index !== -1) {
                        let key = ticketKeys[index];
                        let data = ticket[key];
                        if (data) {
                            isMatched = status.toLowerCase() === data.toLowerCase();
                        } else {
                            isMatched = false;
                        }
                    } else {
                        isMatched = false;
                    }
                }
                if (isMatched && priority) {
                    let index = lowerCaseKeys.indexOf("priority");
                    if (index !== -1) {
                        let key = ticketKeys[index];
                        let data = ticket[key];
                        if (data) {
                            isMatched = priority.toLowerCase() === data.toLowerCase();
                        } else {
                            isMatched = false;
                        }
                    } else {
                        isMatched = false;
                    }
                }
                if (isMatched && type) {
                    let index = lowerCaseKeys.indexOf("type");
                    if (index !== -1) {
                        let key = ticketKeys[index];
                        let data = ticket[key];
                        if (data) {
                            isMatched = type.toLowerCase() === data.toLowerCase();
                        } else {
                            isMatched = false;
                        }
                    } else {
                        isMatched = false;
                    }
                }
                if (isMatched && tags) {
                    let index = lowerCaseKeys.indexOf("tags");
                    if (index !== -1) {
                        let key = ticketKeys[index];
                        let data = ticket[key];
                        if (data) {
                            isMatched = tags.toLowerCase() === data.toLowerCase();
                        } else {
                            isMatched = false;
                        }
                    } else {
                        isMatched = false;
                    }
                }
                if (isMatched && company) {
                    let index = lowerCaseKeys.indexOf("requestercompany");
                    console.log("index",index);
                    if (index !== -1) {
                        let key = ticketKeys[index];
                        let data = ticket[key];
                        if (data) {
                            isMatched = company.toLowerCase() === data.toLowerCase();
                        } else {
                            isMatched = false;
                        }
                    } else {
                        isMatched = false;
                    }
                }
                if (isMatched && contact) {
                    let index = lowerCaseKeys.indexOf("requestername");
                    if (index !== -1) {
                        let key = ticketKeys[index];
                        let data = ticket[key];
                        if (data) {
                            isMatched = contact === data.toLowerCase();
                        } else {
                            isMatched = false;
                        }
                    } else {
                        isMatched = false;
                    }
                }
                if (isMatched) {
                    retData.push(
                        ticket
                    );
                }
            }
        }
        return retData;
    };
    clearAllFilters = () => {
        this.setState(
            {
                agent: '',
                created: '',
                dueBy: '',
                status: '',
                priority: '',
                type: '',
                tags: '',
                company: '',
                contact: '',
                filterCheckbox: false,
            }
        )
    }

    render() {
        const { page_type, openCreateMenu, columns, ticketDataList, agentNameList, companyNameList, contactNameList, agent, created, dueBy, status, priority, type, tags, company, contact, filterCheckbox } = this.state;
        const tableData = this.applyFilters();
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
                    <div className="common-container border-bottom-0 filter-container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Agents">
                                        Agents
                                    </label>
                                    <select className="form-control" name="agent" value={agent} id="agentName" onChange={this.handleStateChange}>
                                        <option value="" selected>Select Agent</option>
                                        {this.createSelectboxOptions(agentNameList)}
                                    </select>
                                </div>
                            </div>
                            {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
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
                            </div> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Created">
                                        Created
                                    </label>
                                    <select className="form-control" id="created" value={created} name="created" onChange={this.handleStateChange}>
                                        <option value="" selected>Select Created</option>
                                        <option value="AnyTime">Any Time</option>
                                        <option value="Whithin30">Whithin 30</option>
                                        <option value="Whithin1hour">Whithin 1 hour</option>
                                        <option value="Whithin6hour">Whithin 6 hour</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="dueby">
                                        Due by
                                    </label>
                                    <select className="form-control" id="dueby" name="dueBy" value={dueBy} onChange={this.handleStateChange}>
                                        <option value="" selected>Select Due by</option>
                                        <option value="overdue">Overdue</option>
                                        <option value="today">Today</option>
                                        <option value="tomorrow">Tomorrow</option>
                                        <option value="next8hours">Next 8 Hours</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Status">
                                        Status
                                    </label>
                                    <select className="form-control" id="Status" name="status" value={status} onChange={this.handleStateChange}>
                                        <option value="" selected>Select Status</option>
                                        <option value="AllUnresolved">All Unresolved</option>
                                        <option value="Open">Open</option>
                                        <option value="Pendding">Pendding</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Priority">
                                        Priority
                                    </label>
                                    <select className="form-control" id="Priority" name="priority" value={priority} onChange={this.handleStateChange}>
                                        <option value="" selected>Select Priority</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Type">
                                        Type
                                    </label>
                                    <select className="form-control" id="Type" name="type" value={type} onChange={this.handleStateChange}>
                                        <option value="" selected>Select Type</option>
                                        <option value="None">None</option>
                                        <option value="Question">Question</option>
                                        <option value="Problem">Problem</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
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
                            </div> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Tags">
                                        Tags
                                    </label>
                                    <select className="form-control" id="Tags" name="tags" value={tags} onChange={this.handleStateChange}>
                                        <option value="" selected>Select Tags</option>
                                        <option value="CPU">CPU</option>
                                        <option value="Memory">Memory</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Companies">
                                        Companies
                                    </label>
                                    <select className="form-control" id="Companies" name="company" value={company} onChange={this.handleStateChange}>
                                        <option value="" selected>Select Company</option>
                                        {this.createSelectboxOptions(companyNameList)}
                                    </select>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="form-group filter-control-group">
                                    <label htmlFor="Contacts">
                                        Contacts
                                    </label>
                                    <select className="form-control" id="Contacts" name="contact" value={contact} onChange={this.handleStateChange}>
                                        <option value="" selected>Select Contacts</option>
                                        {this.createSelectboxOptions(contactNameList)}
                                    </select>
                                </div>
                            </div>
                            {
                                filterCheckbox &&
                                <div className="form-check filter-control-group clear-filters">
                                    <br />
                                    <br />
                                    <input className="form-check-input clear-all-filter" value={filterCheckbox} type="checkbox" checked={filterCheckbox} name="clearAllFilter" onChange={this.clearAllFilters} />
                                    <label className="form-check-label" htmlFor="clearFilter">
                                        <span>Clear All Filters</span>
                                    </label>
                                </div>
                            }
                            {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                <div className="p-t-20 form-group">
                                    <a href="#" className="blue-button m-r-0 m-b-0 apply-filters-button">
                                        Apply Filters
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="d-block all-open-ticket-tabel">
                            <Table valueFromData={{ columns: columns, data: tableData }} perPageLimit={this.perPageLimit} visiblecheckboxStatus={this.checkboxValue}
                                tableClasses={{ table: "open-ticket-tabel", tableParent: "d-block p-t-5 open-tickets-tabel", parentClass: "all-open-ticket-tabel" }} searchKey="subject" showingLine="Showing %start% to %end% of %total% Tickets" />

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