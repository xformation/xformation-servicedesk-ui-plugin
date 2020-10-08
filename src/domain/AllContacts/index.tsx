import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';
import Table from './../../components/table';
import { RestService } from '../_service/RestService';
import { config } from '../../config';

export class AllContacts extends React.Component<any, any> {
    breadCrumbs: any;
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    perPageLimit: any;
    checkboxValue: any;
    constructor(props: any) {
        super(props);
        this.state = {
            openCreateMenu: false,
            columns: [
                {
                    label: 'Photo',
                    key: 'photo',
                    renderCallback: (value: any) => {
                        let strClass = "image";
                        return <td><span className={strClass}></span>{value}</td>
                    }
                },
                
                {
                    label: 'Title',
                    key: 'title'
                },
                {
                    label: 'Contact',
                    key: 'name'
                },
                {
                    label: 'Company',
                    key: 'company'
                },
                {
                    label: 'Email Address',
                    key: 'primaryEmail'
                },
                {
                    label: 'Work Phone',
                    key: 'workPhone'
                },
                {
                    label: 'External Unique Id',
                    key: 'uniqueExternalId'
                },
                {
                    label: 'Twitter',
                    key: 'twitterHandle'
                }
            ],
            contactData: [],
        };
        this.checkboxValue = false,
        this.perPageLimit = 6,
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
                label: "All Contacts",
                isCurrentPage: true
            }
        ];
        this.openNewContactRef = React.createRef();
        this.openNewCompanyRef = React.createRef();
        this.openNewEmailRef = React.createRef();
        this.openNewTicketRef = React.createRef();
    }
    async componentDidMount() {
        try {
            await RestService.getData(config.GET_CONTACT_WITH_COMPANY_NAME, null, null).then(
                (response: any) => {
                    this.setState({
                        contactData: response,
                    });
                    console.log("contact Data : ", response);
                })
        } catch (err) {
            console.log("Loading contact data failed. Error: ", err);
        }
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

    render() {
        const { openCreateMenu,columns,contactData } = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container all-contacts-container">
                    <div className="common-container p-b-0">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>All Contacts</h1>
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

                    <div className="common-container border-bottom-0 p-t-0">
                        <Table valueFromData={{ columns: columns, data: contactData }} perPageLimit={this.perPageLimit} visiblecheckboxStatus={this.checkboxValue} tableClasses={{ table: "contact-tabel", tableParent: "d-block p-t-5 contacts-tabel", parentClass: "d-block p-t-20 all-contacts-tabel" }} searchKey="contact" showingLine = "Showing %start% to %end% of %total% Contacts"/>
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