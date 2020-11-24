import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import companyIcon from '../../img/company-icon.png';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';
import { OpenNewAgentPopup } from '../../components/OpenNewAgentPopup';
import Table from './../../components/table';
import { RestService } from '../_service/RestService';
import Rbac from '../Rbac/Rbac';

export class AllCompanies extends React.Component<any, any> {
    breadCrumbs: any;
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    openNewAgentRef: any;
    tableValue: any;
    constructor(props: any) {
        super(props);
        this.state = {
            openCreateMenu: false,
            columns: [
                {
                    label: 'Company',
                    key: 'company',
                    renderCallback: (value: any) => {
                        let strClass = "image";
                        return <td><span className={strClass}><img src={companyIcon} alt="" /></span>{value}</td>
                    }
                },
                {
                    label: 'Contacts',
                    key: 'contacts',
                    renderCallback: (value: any) => {
                        let strClass1 = "float-right";
                        let strClass2 = "fa fa-ellipsis-v";
                        return <td>{value} <a href="#" className={strClass1}><i className={strClass2}></i></a></td>

                    }
                },
            ],
            companyData: []
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
                label: "All Companies",
                isCurrentPage: true
            }
        ];
        this.openNewContactRef = React.createRef();
        this.openNewCompanyRef = React.createRef();
        this.openNewEmailRef = React.createRef();
        this.openNewTicketRef = React.createRef();
        this.openNewAgentRef = React.createRef();
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

    onClickOpenSubLink = () => {
        let menu = !this.state.openCreateMenu;
        this.setState({
            openCreateMenu: menu,
        });
    }

    async componentDidMount() {
        try {
            await RestService.getData(config.GET_COMPANIES_CONTACT_LIST_URL, null, null).then(
                (response: any) => {
                    this.setState({
                        companyData: response,
                    });
                    console.log("company Data : ", response)
                })
        } catch (err) {
            console.log("Loading company data failed. Error: ", err);
        }
        // console.log("companyNameList  : ", this.state.companyContactList);
    }

    render() {
        const { openCreateMenu, companyData, columns } = this.state;
        return (
            <div className="servicedesk-dashboard-container" >
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container all-contacts-container">
                    <div className="common-container p-b-0">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>All Companies</h1>
                                </div>
                            </div>
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
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-t-0">
                        <div className="d-block p-t-20 all-companies-tabel">
                            <Table valueFromData={{ columns: columns, data: companyData }} perPageLimit={10} visiblecheckboxStatus={true}
                                tableClasses={{ table: "companies-tabel", tableParent: "d-block  p-t-5 companies-main-tabel", parentClass: "d-block p-t-20 all-companies-tabel" }} searchKey="company" showingLine="Showing %start% to %end% of %total% Companies" />
                        </div>
                    </div>
                </div>
                <OpenNewContactPopup ref={this.openNewContactRef} />
                <OpenNewCompanyPopup ref={this.openNewCompanyRef} />
                <OpenNewEmailPopup ref={this.openNewEmailRef} />
                <OpenNewTicketPopup ref={this.openNewTicketRef} />
                <OpenNewAgentPopup ref={this.openNewAgentRef} />
            </div>
        );
    }
};