import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import companyIcon from '../../img/company-icon.png';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { OpenNewContactPopup } from '../../components/OpenNewContactPopup';
import { OpenNewCompanyPopup } from '../../components/OpenNewCompanyPopup';
import { OpenNewEmailPopup } from '../../components/OpenNewEmailPopup';
import { OpenNewTicketPopup } from '../../components/OpenNewTicketPopup';
import Table from './../../components/table';
import { RestService } from '../_service/RestService';

export class AllCompanies extends React.Component<any, any> {
    breadCrumbs: any;
    openNewContactRef: any;
    openNewCompanyRef: any;
    openNewEmailRef: any;
    openNewTicketRef: any;
    perPageLimit: any;
    checkboxValue: any;
    constructor(props: any) {
        super(props);
        this.perPageLimit = 10,
            this.checkboxValue = true,
            this.state = {
                searchKey: '',
                totalPages: '',
                currentPage: 0,
                perPageLimit: 10,
                openCreateMenu: false,
                selectAll: false,
                tableData:[],
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
    async componentDidMount() {
        try {
            await RestService.getData(config.SERVICEDESK_API_URL + "/api/companyConatctList2", null, null).then(
                (response: any) => {
                    this.setState({
                        tableData: response,
                    });
                    console.log("company Data : ",this.state.companyData)
                })
        } catch (err) {
            console.log("Loading company data failed. Error: ", err);
        }
        console.log("companyNameList  : ", this.state.companyList);
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
        const { openCreateMenu,columns,tableData } = this.state;
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
                        <div className="d-block p-t-20 all-companies-tabel">
                            <Table valueFromData={{ columns: columns, data: tableData }} perPageLimit={this.perPageLimit} visiblecheckboxStatus={this.checkboxValue}
                                tableClasses={{ table: "companies-tabel", tableParent: "d-block  p-t-5 companies-main-tabel", parentClass: "d-block p-t-20 all-companies-tabel" }} searchKey="company" showingLine="Showing %start% to %end% of %total% Companies" />
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