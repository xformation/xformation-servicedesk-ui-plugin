import * as React from 'react';

const sortEnum = {
    NONE: 0,
    ASCENDING: 1,
    DESCENDING: 2
};

export class Table extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            displayData: this.props.valueFromData.TicketsData,
            searchData: this.props.valueFromData.TicketsData,
            perPageLimit: this.props.perPageLimit,
            noOfRecordPerPage: this.props.perPageLimit,
            columns: this.props.valueFromData.columns,
            storeColumsData: this.props.valueFromData.columns,
            totalPages: '',
            currentPage: 0,
            start_index: 1,
            searchKey: '',
            ending_index: this.props.perPageLimit,
        }
    };

    componentDidMount() {
        this.calculateTotalPages(this.state.displayData);
    }

    calculateTotalPages(displayData: any) {
        const { perPageLimit } = this.state;
        let indexOfLastData = Math.ceil(displayData.length / perPageLimit);
        this.setState({
            totalPages: indexOfLastData,
        });
    }
    tableHeader() {
        const { columns } = this.state;
        const length = columns.length;
        const retData = [];
        for (let i = 0; i < length; i++) {
            const item = columns[i];
            retData.push(
                <th key={i}>{item.label}</th>
            );
        }
        return retData;
    }
    tableBodyData() {
        const { displayData, perPageLimit, currentPage, columns } = this.state;
        const { tableClasses } = this.props;
        const retuData = [];
        const length = displayData.length;
        const cLength = columns.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const row = displayData[i];
                    console.log(row);
                    retuData.push(
                        <tr>
                            <td>{row.index}</td>
                            <td><span className="image"></span>{row.requesterName}</td>
                            <td className="subjects">{row.subject}</td>
                            {(tableClasses.statusClassOpen != undefined && tableClasses.statusClassClose != undefined && tableClasses.statusClassPendding != undefined) && <td><span className={row.status == 'Open' ? tableClasses.statusClassOpen : row.status == 'Closed' ? tableClasses.statusClassClose : tableClasses.statusClassPendding}>{row.status}</span></td>}
                            {tableClasses.Classfafarrow != undefined && <td>{row.status} <i className="fa fa-chevron-down"></i></td>}
                            <td><span className="priority">{row.priority}</span></td>
                            <td>{row.Assignee}</td>
                            <td className="date">{row.createDate}</td>
                            <td>{row.agents}</td>
                            <td>{row.groups} <a href="#" className="float-right"><i className="fa fa-ellipsis-v"></i></a></td>
                        </tr>
                    );
                }
            }
        } else {
            retuData.push(<div className="d-block width-100 there-no-data">There is no data</div>);
        }
        return retuData;
    }
    peginationOfTable() {
        const { currentPage, totalPages } = this.state;
        let rows = [];
        for (let i = 0; i < totalPages; i++) {
            rows.push(<li className="page-item" key={i}><a className={currentPage === i ? 'page-link active' : 'page-link deactive'} href="#" onClick={(e) => this.navigatePage('btn-click', e, i)}>{i + 1}</a></li >);
        }
        return (
            <ul>
                <li className="page-item previous">
                    <a className={currentPage === 0 ? 'page-link desable' : 'page-link enable'} href="#" onClick={(e) => this.navigatePage('pre', e, '')}>Previous</a>
                </li>
                {rows}
                <li className="page-item next">
                    <a className={currentPage === this.state.totalPages - 1 ? 'page-link desable' : 'page-link enable'} href="#" onClick={(e) => this.navigatePage('next', e, '')}>Next</a>
                </li>
            </ul>
        );
    }

    navigatePage(target: any, e: any, i: any) {
        const { totalPages, currentPage, start_index, perPageLimit, ending_index, displayData } = this.state;
        e.preventDefault();
        switch (target) {
            case 'pre':
                if (currentPage !== 0) {
                    this.setState({
                        currentPage: currentPage - 1,
                        start_index: start_index - perPageLimit,
                    });
                    if (ending_index != displayData.length) {
                        this.setState({
                            ending_index: ending_index - perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index - (displayData.length - start_index + 1),
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
                    if ((ending_index + perPageLimit) < displayData.length) {
                        this.setState({
                            ending_index: ending_index + perPageLimit,
                        });
                    } else {
                        this.setState({
                            ending_index: ending_index + (displayData.length - ending_index),
                        });
                    }
                }
                break;
            case 'btn-click':
                if ((i + 1) * perPageLimit < displayData.length) {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: ((i + 1) * perPageLimit),

                    });
                } else {
                    this.setState({
                        currentPage: i,
                        start_index: (i * perPageLimit) + 1,
                        ending_index: (ending_index + (displayData.length - ending_index)),

                    });
                }
                break;
        }
    }

    handleChange = (e: any) => {
        const { displayData } = this.state;
        const totalData = displayData.length;
        if (e.target.value !== 'all') {
            let indexOfLastData = Math.ceil(totalData / e.target.value);
            this.setState({
                perPageLimit: e.target.value,
                totalPages: indexOfLastData,
                start_index: 1,
                ending_index: e.target.value,
            });
        } else {
            let indexOfLastData = Math.ceil(totalData / totalData);
            this.setState({
                perPageLimit: totalData,
                totalPages: indexOfLastData,
                start_index: 1,
                ending_index: totalData
            });
        }
    }

    onSearchChange = (e: any) => {
        const { value } = e.target;
        this.setState({
            searchKey: value,
        });
        const { searchData } = this.state;
        var searchResult = [];
        for (let i = 0; i < searchData.length; i++) {
            if (searchData[i].requesterName.indexOf(value) !== -1 || value === '') {
                searchResult.push(searchData[i]);
            } else if (searchData[i].requesterName.toLowerCase().indexOf(value) !== -1 || value === '') {
                searchResult.push(searchData[i]);
            }
        }
        this.calculateTotalPages(searchResult);
        this.setState({
            displayData: searchResult,
            currentPage: 0
        });
    }

    displayShowPageLimit() {
        const { noOfRecordPerPage, displayData } = this.state;
        let pageData = [];
        let i = noOfRecordPerPage;
        while (i <= displayData.length) {
            pageData.push(
                <option value={i}>{i}</option>
            )
            i = i + noOfRecordPerPage;
        }
        pageData.push(
            <option value="all">All</option>
        )
        return pageData;
    }

    render() {
        const { displayData, start_index, ending_index, perPageLimit } = this.state;
        console.log(start_index);
        console.log(ending_index);
        const { tableClasses } = this.props;
        return (
            <div className={tableClasses.allSupport}>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="d-inline-block showing">Latest Tickets (Showing {start_index} to {ending_index} of {displayData.length} Tickets)</div>
                        <div className="d-inline-block showby">
                            <label className="d-inline-block">Show</label>
                            <select onChange={this.handleChange} className="form-control">
                                {this.displayShowPageLimit()}
                            </select>
                            <span className="d-inline-block">entries per page</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-right">
                        <div className="d-inline-block form-group filter-search-control">
                            <form>
                                <input type="text" className="input-group-text" onChange={this.onSearchChange} value={this.state.searchKey} />
                                <button>
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    {/*    <label className="d-inline-block">Sort By:</label>
                            <select className="form-control">
                                <option>Created Date</option>
                                <option>Due by time</option>
                                <option>Last modified</option>
                                <option>Priority</option>
                                <option>Status</option>
                                <option>Ascending</option>
                                <option>Descending</option>
                            </select>
                        </div>
                    </div> */}
                </div>
                <div className={tableClasses.ticketsTable}>
                    <table className={tableClasses.ticketTable}>
                        <thead>
                            <tr>
                                {this.tableHeader()}
                            </tr>
                        </thead>

                        <tbody>
                            {this.tableBodyData()}
                        </tbody>
                    </table>
                </div>
                <div className="d-block width-100 p-t-15 text-right pagination">
                    {this.peginationOfTable()}
                </div>
            </div>
        );
    }
}

export default Table;