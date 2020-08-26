import * as React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export class AllContacts extends React.Component<any, any> {
    breadCrumbs: any;
    constructor(props: any) {
        super(props);
        this.state = {
            searchKey: '',
            totalPages: '',
            currentPage: 0,
            perPageLimit: 6,
            start_index: 1,
            ending_index: 6,
            allContactsSetData: [
                {
                    contact: 'Rodney Artichoke',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                },
                {
                    contact: 'Jason Response',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                },
                {
                    contact: 'Fig Nelson',
                    title: 'HR Manager',
                    company: 'RNKV Steels',
                    emailAddress: 'contact@rnvksteels.com',
                    workPhone: '(+3) 954 247 3126',
                    facebook: 'Nelson126',
                    twitter: 'nelson236',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                },
                {
                    contact: 'Jason Response',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                },
                {
                    contact: 'Fig Nelson',
                    title: 'HR Manager',
                    company: 'RNKV Steels',
                    emailAddress: 'contact@rnvksteels.com',
                    workPhone: '(+3) 954 247 3126',
                    facebook: 'Nelson126',
                    twitter: 'nelson236',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                },
            ],
            duplicateAllContacts: [
                {
                    contact: 'Rodney Artichoke',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                },
                {
                    contact: 'Jason Response',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                },
                {
                    contact: 'Fig Nelson',
                    title: 'HR Manager',
                    company: 'RNKV Steels',
                    emailAddress: 'contact@rnvksteels.com',
                    workPhone: '(+3) 954 247 3126',
                    facebook: 'Nelson126',
                    twitter: 'nelson236',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                },
                {
                    contact: 'Jason Response',
                    title: 'HR Manager',
                    company: 'RGK Groups',
                    emailAddress: 'support@artichoke.com',
                    workPhone: '(+1) 224 547 8425',
                    facebook: 'Articho142',
                    twitter: 'Rodney124',
                },
                {
                    contact: 'Fig Nelson',
                    title: 'HR Manager',
                    company: 'RNKV Steels',
                    emailAddress: 'contact@rnvksteels.com',
                    workPhone: '(+3) 954 247 3126',
                    facebook: 'Nelson126',
                    twitter: 'nelson236',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
                },
                {
                    contact: 'Fergus Douchebag',
                    title: 'Graphic Designer',
                    company: 'AK+',
                    emailAddress: 'info@fergus.com',
                    workPhone: '(+1) 174 217 8425',
                    facebook: 'Fergus Douch',
                    twitter: 'Douchebag102',
                },
                {
                    contact: 'Dominic L. Ement',
                    title: 'Marketing Manager',
                    company: 'RT Groups',
                    emailAddress: 'd.ement@gmail.com',
                    workPhone: '(+1) 482 268 8410',
                    facebook: 'L.ement143',
                    twitter: 'Dominic148',
                },
                {
                    contact: 'Niles Peppertrout',
                    title: 'Art Director',
                    company: 'StudioGreen',
                    emailAddress: 'niles1547@gamil.com',
                    workPhone: '(+1) 247 147 2687',
                    facebook: 'Niles1124',
                    twitter: 'Peppertrout12',
                },
                {
                    contact: 'Pelican Steve',
                    title: 'Designer',
                    company: 'Digital Media',
                    emailAddress: 'info@digital.com',
                    workPhone: '(+1) 412 578 2548',
                    facebook: 'Steve154',
                    twitter: 'Pelican111',
                },
                {
                    contact: 'Inverness McKenzie',
                    title: 'Steel Worker',
                    company: 'Ram Fabrication',
                    emailAddress: 'ramsteel@gmail.com',
                    workPhone: '(+1) 387 267 5931',
                    facebook: 'McKenzie195',
                    twitter: 'Inverness198',
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
        this.calculateTotalPages(this.state.allContactsSetData);
    };

    calculateTotalPages = (displayData: any) => {
        const { perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    };

    allContactsSetData = () => {
        const { allContactsSetData, perPageLimit, currentPage } = this.state;
        const retData = [];
        const length = allContactsSetData.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const data = allContactsSetData[i];
                    retData.push(
                        <tr>
                            <td><input type="checkbox" className="checkbox" checked={allContactsSetData.checkValueStatus} onChange={(e) => { this.onClickChildCheckbox(e, i) }} /> <span className="image"></span> {data.contact}</td>
                            <td>{data.title}</td>
                            <td>{data.company}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.workPhone}</td>
                            <td>{data.facebook}</td>
                            <td>{data.twitter} <a href="#" className="float-right"><i className="fa fa-ellipsis-v"></i></a></td>
                        </tr>
                    );
                }
            }
        } else {
            retData.push(<tr><td className="text-center there-no-data" colSpan={7}>There is no data</td></tr>);
        }

        return retData;
    }

    peginationOfBox() {
        const { currentPage, totalPages, allContactsSetData } = this.state;
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
        const { totalPages, currentPage, start_index, perPageLimit, ending_index, allContactsSetData, } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                        start_index: start_index - perPageLimit,
                    });
                    if (ending_index != allContactsSetData.length) {
                        this.setState({
                            ending_index: ending_index - perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index - (allContactsSetData.length - start_index + 1),
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
                    if ((ending_index + perPageLimit) < allContactsSetData.length) {
                        this.setState({
                            ending_index: ending_index + perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index + (allContactsSetData.length - ending_index),
                        });
                    }
                }
                break;
            case 'btn-click':
                if ((i + 1) * perPageLimit < allContactsSetData.length) {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: ((i + 1) * perPageLimit),

                    });
                } else {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: (ending_index + (allContactsSetData.length - ending_index)),

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
        const { duplicateAllContacts } = this.state;
        var searchResult = [];
        for (let i = 0; i < duplicateAllContacts.length; i++) {
            if (duplicateAllContacts[i].title.indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateAllContacts[i]);
            } else if (duplicateAllContacts[i].title.toLowerCase().indexOf(value) !== -1 || value === '') {
                searchResult.push(duplicateAllContacts[i]);
            }
        }
        this.calculateTotalPages(searchResult);
        this.setState({
            allContactsSetData: searchResult,
            currentPage: 0
        });
    }

    onClickChildCheckbox = (parentIndex: any, childIndex: any) => {
        let countCheckedCheckbox = 0;
        const { allContactsSetData } = this.state;
        const parentCheckbox = allContactsSetData[parentIndex];
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
            allContactsSetData
        })
    }


    render() {
        const state = this.state;
        const { allContactsSetData } = this.state;
        return (
            <div className="servicedesk-dashboard-container">
                <Breadcrumbs breadcrumbs={this.breadCrumbs} pageTitle="TICKETING TOOL" />
                <div className="servicedesk-page-container all-contacts-container">
                    <div className="common-container border-bottom-0 p-b-0">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="page-heading">
                                    <h1>All Contacts</h1>
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
                        <div className="d-block p-t-20 all-contacts-tabel">
                            <div className="row">
                                <div className="col-lg-9 col-md-12 col-sm-12">
                                    <div className="d-inline-block select-all">
                                        <input type="checkbox" className="checkbox" checked={allContactsSetData.checkValueStatus} 
                                        onChange={(e) => { this.onClickChildCheckbox }}  />
                                        <label className="d-inline-block">Select All</label>
                                    </div>
                                    <div className="d-inline-block showby">
                                        <label className="d-inline-block">Show</label>
                                        <select className="form-control">
                                            <option>8</option>
                                            <option>16</option>
                                            <option>24</option>
                                            <option>32</option>
                                            <option>40</option>
                                            <option>All</option>
                                        </select>
                                        <span>entries per page</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 text-right">
                                    <div className="form-group contacts-control-group">
                                        <form>
                                            <input type="text" className="input-group-text" onChange={this.onSearchChange} value={this.state.searchKey}  />
                                            <button>
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block p-t-5 contacts-tabel">
                                <table className="contact-tabel">
                                    <thead>
                                        <tr>
                                            <th>Contact</th>
                                            <th>Title</th>
                                            <th>Company</th>
                                            <th>Email Address</th>
                                            <th>Work Phone</th>
                                            <th>Facebook</th>
                                            <th>Twitter</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.allContactsSetData()}
                                    </tbody>
                                </table>
                            </div>

                            {allContactsSetData.length > 0 &&
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