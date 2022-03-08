import * as React from 'react';
import { config } from '../../config';
import companyIcon from '../../img/company-icon.png';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import Table from './../../components/table';
import { RestService } from '../_service/RestService';
import { CreateButtonComponent } from '../CommanComponents/CreateButtonComponent';

export class AllCompanies extends React.Component<any, any> {
  breadCrumbs: any;
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
            let strClass = 'image';
            return (
              <td>
                <span className={strClass}>
                  <img src={companyIcon} alt="" />
                </span>
                {value}
              </td>
            );
          },
        },
        {
          label: 'Contacts',
          key: 'contacts',
          renderCallback: (value: any) => {
            let strClass1 = 'float-right';
            let strClass2 = 'fa fa-ellipsis-v';
            return (
              <td>
                {value}{' '}
                <a href="#" className={strClass1}>
                  <i className={strClass2}></i>
                </a>
              </td>
            );
          },
        },
      ],
      companyData: [],
    };
    this.breadCrumbs = [
      {
        label: 'Home',
        route: `/`,
      },
      {
        label: 'Tickets | Dashboard',
        route: `${config.basePath}/dashboard`,
      },
      {
        label: 'All Companies',
        isCurrentPage: true,
      },
    ];
  }
  onClickOpenSubLink = () => {
    let menu = !this.state.openCreateMenu;
    this.setState({
      openCreateMenu: menu,
    });
  };

  async componentDidMount() {
    try {
      await RestService.getData(config.GET_COMPANIES_CONTACT_LIST_URL, null, null).then((response: any) => {
        this.setState({
          companyData: response,
        });
        console.log('company Data : ', response);
      });
    } catch (err) {
      console.log('Loading company data failed. Error: ', err);
    }
    // console.log("companyNameList  : ", this.state.companyContactList);
  }

  isLightTheme() {
    const w: any = window;
    if (w.grafanaBootData && w.grafanaBootData.user) {
      return w.grafanaBootData.user.lightTheme;
    }
    return false;
  }

  render() {
    const { companyData, columns } = this.state;
    return (
      <div className="servicedesk-dashboard-container">
        <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
        <div className="servicedesk-page-container all-contacts-container">
          <div className="common-container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="page-heading">
                  <h1>All Companies</h1>
                </div>
              </div>
              {/* create component */}
              <CreateButtonComponent />
              {/* create component */}
            </div>
          </div>
          <div className="common-container border-bottom-0 p-t-0">
            <div className="d-block p-t-20 all-companies-tabel">
              <Table
                valueFromData={{ columns: columns, data: companyData }}
                perPageLimit={10}
                visiblecheckboxStatus={true}
                tableClasses={{
                  table: 'companies-tabel',
                  tableParent: 'd-block  p-t-5 companies-main-tabel',
                  parentClass: 'd-block p-t-20 all-companies-tabel',
                }}
                searchKey="company"
                showingLine="Showing %start% to %end% of %total% Companies"
                dark={!this.isLightTheme()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
