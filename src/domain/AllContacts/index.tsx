import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';
import Table from './../../components/table';

export class AllContacts extends React.Component<any, any> {
    breadCrumbs: any;
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    tableValue: any;
    perPageLimit: any;
    checkboxValue: any;
    constructor(props: any) {
        super(props);
        this.tableValue = {
            columns: [
                {
                    label: 'Contact',
                    key: 'contact',
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
                    label: 'Company',
                    key: 'company'
                },
                {
                    label: 'Email Address',
                    key: 'emailAddress'
                },
                {
                    label: 'Work Phone',
                    key: 'workPhone'
                },
                {
                    label: 'Facebook',
                    key: 'facebook'
                },
                {
                    label: 'Twitter',
                    key: 'twitter'
                }
            ],
            data: [
                {
                    contact: 'Rodney Artichoke',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                    checkStatus: false,
                },
                {
                    contact: 'Jason Response',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                    checkStatus: false,
                },
                {
                    contact: 'Fig Nelson',
                    title: 'HR Manager',
                    company: 'RNKV Steels',
                    emailAddress: 'contact@rnvksteels.com',
                    workPhone: '(+3) 954 247 3126',
                    facebook: 'Nelson126',
                    twitter: 'nelson236',
                    checkStatus: false,
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                    checkStatus: false,
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                    checkStatus: false,
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                    checkStatus: false,
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                    checkStatus: false,
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                    checkStatus: false,
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                    checkStatus: false,
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                    checkStatus: false,
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                    checkStatus: false,
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                    checkStatus: false,
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                    checkStatus: false,
                },
                {
                    contact: 'Jason Response',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                    checkStatus: false,
                },
                {
                    contact: 'Fig Nelson',
                    title: 'HR Manager',
                    company: 'RNKV Steels',
                    emailAddress: 'contact@rnvksteels.com',
                    workPhone: '(+3) 954 247 3126',
                    facebook: 'Nelson126',
                    twitter: 'nelson236',
                    checkStatus: false,
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                    checkStatus: false,
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                    checkStatus: false,
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                    checkStatus: false,
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                    checkStatus: false,
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                    checkStatus: false,
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                    checkStatus: false,
                },
            ]
        }
        this.state = {
            openCreateMenu: false,
        };
        this.checkboxValue = false,
        this.perPageLimit = 6,
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
        const { openCreateMenu } = this.state;
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
                        <Table valueFromData={this.tableValue} perPageLimit={this.perPageLimit} visiblecheckboxStatus={this.checkboxValue} tableClasses={{ table: "contact-tabel", tableParent: "d-block p-t-5 contacts-tabel", parentClass: "d-block p-t-20 all-contacts-tabel" }} searchKey="contact" showingLine = "Showing %start% to %end% of %total% Contacts"/>
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