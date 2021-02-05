import * as React from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CreateButtonComponent } from "../CommanComponents/CreateButtonComponent";
import Table from './../../components/table';
import { RestService } from '../_service/RestService';
import { config } from '../../config';
import Rbac from '../Rbac/Rbac';

export class AllContacts extends React.Component<any, any> {
    breadCrumbs: any;
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
                    label: "Tickets | Dashboard",
                    route: `${config.basePath}/dashboard`
                },
                {
                    label: "All Contacts",
                    isCurrentPage: true
                }
            ];

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

    onClickOpenSubLink = () => {
        let menu = !this.state.openCreateMenu;
        this.setState({
            openCreateMenu: menu,
        });
    }

    render() {
        const { openCreateMenu, columns, contactData } = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container all-contacts-container">
                    <div className="common-container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>All Contacts</h1>
                                </div>
                            </div>
                            {/* create component */}
                            <CreateButtonComponent />
                            {/* create component */}
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-t-0">
                        <Table valueFromData={{ columns: columns, data: contactData }} perPageLimit={this.perPageLimit} visiblecheckboxStatus={this.checkboxValue} tableClasses={{ table: "contact-tabel", tableParent: "d-block p-t-5 contacts-tabel", parentClass: "d-block p-t-20 all-contacts-tabel" }} searchKey="contact" showingLine="Showing %start% to %end% of %total% Contacts" />
                    </div>
                </div>
            </div>
        );
    }
};