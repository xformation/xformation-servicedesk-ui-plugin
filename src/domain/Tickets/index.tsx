import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export class Tickets extends React.Component<any, any> {
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
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>All Support Tickets</h1>
                                    <span>List of ticket opened by Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <span>Latest Tickets (Showing 01 to 12 of 144 Tickets)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};