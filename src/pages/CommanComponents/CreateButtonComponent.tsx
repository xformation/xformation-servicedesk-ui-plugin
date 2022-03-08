import * as React from 'react';
import { config } from '../../config';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';
import { OpenNewAgentPopup } from '../../components/OpenNewAgentPopup';
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
        this.state = {
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
                <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-createbtn">
                    <a href="#" onClick={this.onClickOpenSubLink} className="blue-button m-b-0 m-r-0 min-width-inherit width-auto create-btn">
                        Create
                    </a>
                </Rbac>
                {openCreateMenu == true && <div className="text-center open-create-menu">
                    <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-ticketbtn">
                        <a onClick={this.onClickOpenNewTicket}>
                            Ticket
                        </a>
                    </Rbac>
                    <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-emailbtn">
                        <a onClick={this.onClickOpenNewEmail}>
                            Email
                        </a>
                    </Rbac>
                    <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-contactbtn">
                        <a onClick={this.onClickOpenNewContact}>
                            Contact
                        </a>
                    </Rbac>
                    <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-companytbtn">
                        <a onClick={this.onClickOpenNewCompany}>
                            Company
                        </a>
                    </Rbac>
                    <Rbac parentName={config.PARENT_NAME} childName="commancomponent-createbuttoncomponent-agentbtn">
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