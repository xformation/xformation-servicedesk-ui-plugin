import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import companyIcon from '../../img/company-icon.png';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export class AllCompanies extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            totalPages: '',
            currentPage: 0,
            perPageLimit: 10,
            allCompaniesSetData: [
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
            ],
            duplicateAllCompanies: [
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'Rodney Artichoke',
                    contacts: '02',
                },
                {
                    company: 'AK Founder & Co',
                    contacts: '01',
                },
                {
                    company: 'Ram Fabrication',
                    contacts: '08',
                },
                {
                    company: 'AK+',
                    contacts: '05',
                },
                {
                    company: 'Digital Media',
                    contacts: '07',
                },
                {
                    company: 'RT Groups',
                    contacts: '04',
                },
                {
                    company: 'RNKV Steels',
                    contacts: '12',
                },
                {
                    company: 'Studiogreen',
                    contacts: '09',
                },
                {
                    company: 'AK+',
                    contacts: '05',
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
    }

    componentDidMount() {
        this.calculateTotalPages(this.state.allCompaniesSetData);
    };

    calculateTotalPages = (displayData: any) => {
        const { perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    };

    allCompaniesSetData = () => {
        const { allCompaniesSetData, perPageLimit, currentPage } = this.state;
        const retData = [];
        const length = allCompaniesSetData.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const data = allCompaniesSetData[i];
                    retData.push(
                        <tr>
                            <td>
                                <input type="checkbox" className="checkbox" checked={allCompaniesSetData.checkValueStatus} onChange={(e) => { this.onClickChildCheckbox(e, i) }} /> 
                                <span className="image"><img src={companyIcon} alt="" /></span> 
                                {data.company}
                            </td>
                            <td>{data.contacts} <a href="#" className="float-right"><i className="fa fa-ellipsis-v"></i></a></td>
                        </tr>
                    );
                }
            }
        } else {
            retData.push(<tr><td className="text-center there-no-data" colSpan={2}>There is no data</td></tr>);
        }

        return retData;
    }

    peginationOfBox() {
        const { currentPage, totalPages, allCompaniesSetData } = this.state;
        let rows = [];
        for (let i = 0; i < totalPages; i++) {
            console.log(currentPage);
            rows.push(<li className="" key={i}><a className={currentPage === i ? 'active' : 'deactive'} href="#" onClick={(e) => this.navigatePage('btn-click', e, i)}>{i + 1}</a></li >);
        }
        return (
            <ul>
                <li className="previous">
                    <a className={currentPage === 0 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('pre', e, '')}>Previous</a>
                </li>
                {rows}
                <li className="next">
                    <a className={currentPage === this.state.totalPages - 1 ? 'desable' : 'enable'} href="#" onClick={(e) => this.navigatePage('next', e, '')}>Next</a>
                </li>
            </ul>
        );
    }

    navigatePage(target: any, e: any, i: any) {
        const { totalPages, currentPage, start_index, perPageLimit, ending_index, allCompaniesSetData, } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                        start_index: start_index - perPageLimit,
                    });
                    if (ending_index != allCompaniesSetData.length) {
                        this.setState({
                            ending_index: ending_index - perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index - (allCompaniesSetData.length - start_index + 1),
                        });
                    }
                }
                break;
            case 'next':
                if (currentPage !== totalPages - 1) {
                    this.setState({
                        currentPage: currentPage + 1,
                        start_index: start_index + perPageLimit,
                    });
                    if ((ending_index + perPageLimit) < allCompaniesSetData.length) {
                        this.setState({
                            ending_index: ending_index + perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index + (allCompaniesSetData.length - ending_index),
                        });
                    }
                }
                break;
            case 'btn-click':
                if ((i + 1) * perPageLimit < allCompaniesSetData.length) {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: ((i + 1) * perPageLimit),

                    });
                } else {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: (ending_index + (allCompaniesSetData.length - ending_index)),

                    });
                }
                break;
        }
    }

    onSearchChange = (e: any) => {
        const { value } = e.target;
        this.setState({
            searchKey: value,
        });
        const { duplicateAllCompanies } = this.state;
        var searchResult = [];
        for (let i = 0; i < duplicateAllCompanies.length; i++) {
            if (duplicateAllCompanies[i].company.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateAllCompanies[i]);
            } else if (duplicateAllCompanies[i].company.toLowerCase().indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateAllCompanies[i]);
            }
            if (duplicateAllCompanies[i].contacts.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateAllCompanies[i]);
            } else if (duplicateAllCompanies[i].contacts.toLowerCase().indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateAllCompanies[i]);
            }
        }
        this.calculateTotalPages(searchResult);
        this.setState({
            allCompaniesSetData: searchResult,
            currentPage: 0
        });
    }

    onClickChildCheckbox = (parentIndex: any, childIndex: any) => {
        let countCheckedCheckbox = 0;
        const { allCompaniesSetData } = this.state;
        const parentCheckbox = allCompaniesSetData[parentIndex];
        parentCheckbox.subData[childIndex].checkValue = !parentCheckbox.subData[childIndex].checkValue;
        for (let j = 0; j < parentCheckbox.subData.length; j++) {
            if (parentCheckbox.subData[j].checkValue == true) {
                countCheckedCheckbox++;
            } else {
                countCheckedCheckbox--;
            }
        }
        if (countCheckedCheckbox == parentCheckbox.subData.length) {
            parentCheckbox.checkValueStatus = true;
        } else {
            parentCheckbox.checkValueStatus = false;
        }
        this.setState({
            allCompaniesSetData
        })
    }

    render() {
        const state = this.state;
        const { allCompaniesSetData } = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container all-contacts-container">
                    <div className="common-container border-bottom-0 p-b-0">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>All Companies</h1>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                                <a href="#" className="blue-button m-r-0 m-b-0 min-width-inherit width-auto create-button">
                                    Create
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="common-container border-bottom-0 p-t-0">
                        <div className="d-block p-t-20 all-companies-tabel">
                            <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12">
                                    <div className="d-inline-block select-all">
                                        <input type="checkbox" className="checkbox" checked={allCompaniesSetData.checkValueStatus} 
                                        onChange={(e) => { this.onClickChildCheckbox }}  />
                                        <label className="d-inline-block">Select All</label>
                                    </div>
                                    <div className="d-inline-block showby">
                                        <label className="d-inline-block">Show</label>
                                        <select className="form-control">
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                            <option>All</option>
                                        </select>
                                        <span>entries per page</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 text-right">
                                    <div className="form-group companies-control-group">
                                        <form>
                                            <input type="text" className="input-group-text" onChange={this.onSearchChange} value={this.state.searchKey}  />
                                            <button>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block p-t-5 companies-main-tabel">
                                <table className="companies-tabel">
                                    <thead>
                                        <tr>
                                            <th>Company</th>
                                            <th>Contacts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.allCompaniesSetData()}
                                    </tbody>
                                </table>
                            </div>
                            {allCompaniesSetData.length > 0 &&
                                <div className="d-block width-100 p-t-15 text-right pagination">
                                    {this.peginationOfBox()}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};