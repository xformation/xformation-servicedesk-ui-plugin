import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';

export class TicketsDetails extends React.Component<any, any> {
    breadCrumbs: any;
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    constructor(props: any) {
        super(props);
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
        this.state = {
            openCreateMenu: false,
        };
        this.openNewContactRef = React.createRef();
        this.openNewCompanyRef = React.createRef();
        this.openNewEmailRef = React.createRef();
        this.openNewTicketRef = React.createRef();
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
                                    <h1>Ticket Details</h1>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                                <a href="#" onClick={this.onClickOpenSubLink} className="blue-button m-r-0 m-b-0 min-width-inherit width-auto create-btn">
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
                    <div className="common-container border-bottom-0">
                        <div className="ticket-buttons">
                            <button className="white-button"><i className="fa fa-ellipsis-v"></i></button>
                            <div className="group-buttons">
                                <button className="white-button"><i className="fa fa-reply"></i> Reply</button>
                                <button className="white-button"><i className="fa fa-sticky-note"></i> Add Note</button>
                                <button className="white-button"><i className="fa fa-share"></i> Forward</button>
                                <button className="white-button"><i className="fa fa-times-circle"></i> Close</button>
                                <button className="white-button"><i className="fa fa-object-group"></i> Merge</button>
                                <button className="white-button"><i className="fa fa-trash"></i> Detele</button>
                            </div>
                            <button className="white-button"><i className="fa fa-ellipsis-v"></i></button>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0">
                        <div className="row">
                            <div className="col-lg-8 col-md-9 col-sm-12">
                                <div className="ticket-detail-box">
                                    <div className="ticket-detail-head">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-6 col-sm-12">
                                                <div className="head-image"></div>
                                                <div className="head-text">
                                                    <p><strong>Need to cange my shipping Address</strong></p>
                                                    <p><a href="#">Ingredia Nutrisha</a> reported in Issue</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 col-sm-12 text-right">
                                                <div className="head-time-text">a day ago ( Wed 08 2018 at 08:15AM )</div>
                                                <button className="white-button"><i className="fa fa-ellipsis-v"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ticket-detail-text-box">
                                        <strong>Hi,</strong>
                                        <p>I have to leave the city for a week and I’m afraid nobody will be there to collect my order (#248) when it arrives. Is there a way me I can change my shopping address?</p>
                                        <span>Thanks.</span>
                                    </div>
                                </div>
                                <div className="ticket-detail-box">
                                    <div className="ticket-detail-head">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-6 col-sm-12">
                                                <div className="head-image"></div>
                                                <div className="head-text">
                                                    <p><strong>Customer Service</strong></p>
                                                    <p>Replied to <a href="#">nutrisha.21@maxamis.com</a></p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 col-sm-12 text-right">
                                                <div className="head-time-text">a day ago ( Wed 08 2018 at 08:15AM )</div>
                                                <button className="white-button"><i className="fa fa-ellipsis-v"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ticket-detail-text-box">
                                        <strong>Hi Ingredia,</strong>
                                        <p>You can change your shipping address as long as your order has not been dispatched for delivary. 
                                            <br />
                                            Follow these steps to change the details of your order -
                                        </p>
                                        <ul>
                                            <li>01. Go to my Orders.</li>
                                            <li>02. Click on the edit details icon for order which you’d like update.</li>
                                            <li>03. Update the required and click save changes.</li>
                                            <li>04. Click done after you’ve finished.</li>
                                        </ul>
                                        <p>I hope this wes helpful. If you have further doubts, feel free to reach out to me.</p>
                                        <span>Nutrisha.</span>
                                    </div>
                                </div>
                                <div className="ticket-detail-box">
                                    <div className="ticket-detail-head">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-6 col-sm-12">
                                                <div className="head-image"></div>
                                                <div className="head-text">
                                                    <p><strong>Ingredia Nutrisha</strong> Replied to <a href="#">nutrisha.21@maxamis.com</a></p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 col-sm-12 text-right">
                                                <div className="head-time-text">a day ago ( Wed 08 2018 at 08:15AM )</div>
                                                <button className="white-button"><i className="fa fa-ellipsis-v"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ticket-detail-text-box">
                                        <strong>Hi Nutrisha,</strong>
                                        <p>Thank you so Much.</p>
                                        <span>Ingredia Nutrisha</span>
                                    </div>
                                </div>
                                <div className="ticket-detail-box">
                                    <div className="ticket-detail-head">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-6 col-sm-12">
                                                <div className="head-image"></div>
                                                <div className="head-text">
                                                    <p><strong>Ingredia Nutrisha</strong> Replied this Conversation</p>
                                                    <p>Survey response for Default survey to Anne Richard</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-6 col-sm-12 text-right">
                                                <div className="head-time-text">
                                                    a day ago ( Wed 08 2018 at 08:15AM )
                                                </div>
                                                <button className="white-button"><i className="fa fa-ellipsis-v"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ticket-detail-text-box">
                                        <p>How would you rate your overall satification for the resolution provided by the agent?</p>
                                        <span>Extremely Satisfied.</span>
                                    </div>
                                </div>
                                <div className="ticket-detail-box">
                                    <div className="ticket-detail-head">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="head-image"></div>
                                                <div className="head-text">
                                                    <p>From: <strong>RK Fabrication</strong> (support@rkfabrication1574.com)</p>
                                                    <p>To: <span>nutrisha.21@maxamis.com</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ticket-detail-text-box">
                                        <strong>Hi,</strong>
                                        <p>I have to leave the city for a week and I’m afraid nobody will be there to collect my order (#248) when it arrives. Is there a way me I can change my shopping address?</p>
                                        <span>Thanks.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3 col-sm-12">
                                <div className="properties-form">
                                    <h3>Properties</h3>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="type">Type</label>
                                            <select>
                                                <option>Question</option>
                                                <option>Question</option>
                                                <option>Question</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="status">Status*</label>
                                            <select>
                                                <option>Open</option>
                                                <option>Open</option>
                                                <option>Open</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="priority">Priority</label>
                                            <select>
                                                <option>Medium</option>
                                                <option>Medium</option>
                                                <option>Medium</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="assignto">Assign to</label>
                                            <select>
                                                <option>Escalations / --</option>
                                                <option>Escalations / --</option>
                                                <option>Escalations / --</option>
                                            </select>
                                        </div>
                                        <div className="form-group p-t-20 p-b-0 m-b-0 text-center">
                                            <button className="blue-button">Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
