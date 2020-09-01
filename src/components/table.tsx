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
            perPageLimit: this.props.perPageLimit,
            columns: this.props.valueFromData.columns,
            storeColumsData: this.props.valueFromData.columns,
            totalPages: '',
            currentPage: 0,
            start_index: 1,
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
        const retuData = [];
        const length = displayData.length;
        const cLength = columns.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                if (i >= currentPage * perPageLimit && i <= (currentPage * perPageLimit + (perPageLimit - 1))) {
                    const tdJSX = [];
                    const row = displayData[i];
                    console.log(row);
                    retuData.push(
                        <tr>
                            <td>{row.index}</td>
                            <td><span className="image"></span>{row.requesterName}</td>
                            <td className="subjects">{row.subject}</td>
                            <td><span className={row.status == 'Open' ? "yellow-green" : row.status == 'Closed' ? "red" : "orange"}>{row.status}</span></td>
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
                <li className="page-item">
                    <a className={currentPage === 0 ? 'page-link desable' : 'page-link enable'} href="#" onClick={(e) => this.navigatePage('pre', e, '')}>Previous</a>
                </li>
                {rows}
                <li className="page-item">
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
    render() {
        const { displayData, start_index, ending_index } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="showing">Latest Tickets (Showing {start_index} to {ending_index} of {displayData.length} Tickets)</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-right">
                        <div className="sortby">
                            <label className="d-inline-block">Sort By:</label>
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
                    </div>
                </div>
                <table className="ticket-tabel">
                    <thead>
                        <tr>
                            {this.tableHeader()}
                        </tr>
                    </thead>

                    <tbody>
                        {this.tableBodyData()}
                    </tbody>
                </table>
                <div className="d-block width-100 p-t-15 text-right pagination">
                    {this.peginationOfTable()}
                </div>
            </div>
        );
    }
}

export default Table;