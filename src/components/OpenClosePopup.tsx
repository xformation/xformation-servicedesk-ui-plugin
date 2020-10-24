import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextareabox } from './CustomTextareabox';
import AlertMessage from './AlertMessage';

export class OpenClosePopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
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
        const { modal } = this.state;
        const state = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container ticket-details-popup-container">
                <button className="close-btn" onClick={this.handleClose}>X</button>
                <ModalBody style={{ height: 'calc(60vh - 20px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 p-b-20 heading">
                        <h4 className="d-block">Close ticket</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label htmlFor="description">Write comment for closing this ticket.</label>
                                <CustomTextareabox containerClass="form-group-inner" inputClass="form-control textarea" htmlFor="comment" id="comment" name="comment" value='' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="d-block text-center p-t-20">
                                <button className="blue-button">Confirm</button>
                                <button className="white-button cancel" onClick={this.handleClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}