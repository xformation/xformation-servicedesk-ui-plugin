import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import ticketIconImage1 from '../../img/ticket-icon-img1.png';
import { Line } from 'react-chartjs-2';
import { Tickets } from '../Tickets';
import Table from '../../components/table';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';
import { OpenNewAgentPopup } from '../../components/OpenNewAgentPopup';
import { RestService } from '../_service/RestService';
import Rbac from '../Rbac/Rbac';

export class CreateButtonComponent extends React.Component<any, any> {
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    openNewAgentRef: any;
    checkboxValue: any;
    ticketData: any;
    constructor(props: any) {
        super(props);
        this.state={
            openCreateMenu: false,
        }
        this.openNewContactRef = React.createRef();
        this.openNewCompanyRef = React.createRef();
        this.openNewEmailRef = React.createRef();
        this.openNewTicketRef = React.createRef();
        this.openNewAgentRef = React.createRef();
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
    onClickOpenNewAgent = (e: any) => {
        this.openNewAgentRef.current.toggle();
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

            <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                <Rbac childName="CreateLink-TicketPlugin">
                    <a href="#" onClick={this.onClickOpenSubLink} className="blue-button m-r-0 min-width-inherit width-auto create-btn">
                        Create
                                    </a>
                </Rbac>
                {openCreateMenu == true && <div className="text-center open-create-menu">
                    <Rbac childName="CreateTicket-TicketPlugin">
                        <a onClick={this.onClickOpenNewTicket}>
                            Ticket
                                        </a>
                    </Rbac>
                    <Rbac childName="CreateEmail-TicketPlugin">
                        <a onClick={this.onClickOpenNewEmail}>
                            Email
                                        </a>
                    </Rbac>
                    <Rbac childName="CreateContact-TicketPlugin">
                        <a onClick={this.onClickOpenNewContact}>
                            Contact
                                        </a>
                    </Rbac>
                    <Rbac childName="CreateCompany-TicketPlugin">
                        <a onClick={this.onClickOpenNewCompany}>
                            Company
                                        </a>
                    </Rbac>
                    <Rbac childName="CreateAgent-TicketPlugin">
                        <a onClick={this.onClickOpenNewAgent}>
                            Agent
                                        </a>
                    </Rbac>
                </div>
                }
                <OpenNewContactPopup ref={this.openNewContactRef} />
                <OpenNewCompanyPopup ref={this.openNewCompanyRef} />
                <OpenNewEmailPopup ref={this.openNewEmailRef} />
                <OpenNewTicketPopup ref={this.openNewTicketRef} />
                <OpenNewAgentPopup ref={this.openNewAgentRef} />
            </div>
        );
    }
};