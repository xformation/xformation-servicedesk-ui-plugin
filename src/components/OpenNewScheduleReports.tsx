import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { Customselectbox } from './Customselectbox';
import { CustomTextbox } from './CustomTextbox';
export class OpenNewScheduleReports extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            priority: '',
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    }
    handleClose = () => {
        this.setState({
            modal: false,
        });
    }

    render() {
        const { modal, priority } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 contact-popup-container new-ticket-container">
                        <div className="d-block width-100 p-b-20 heading">
                            <h4 className="d-block">Schedule Reports</h4>
                            <span className="d-block">Helpdesk In-Depth</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="GenerateReport">Generate Report</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={{ 0: 'Daily', 1: 'Weekly', 2: 'Month' }} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="On">On</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={{ 0: '1st', 1: '2nd', 2: '3rd', 3: '4th', 4: '5th', 5: '6th', 6: 'Last day'}} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="from">At</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={{ 0: '01:00', 1: '02:00', 2: '03:00', 3: '04:00', 4: '05:00', 5: '06:00'}} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="Email" id="email" placeholder="Write Email Id." name="email" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="Subject">Subject</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="Subject" id="Subject" placeholder="Write subject of the report." name="Subject" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="Description">Description</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="Description" id="description" placeholder="Write something that describe the reports." name="Description" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-center p-t-20 contact-popup-buttons">
                                    <button className="cancel" onClick={this.handleClose}>Cancel</button>
                                    <button className="save">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal >
        );
    }
}