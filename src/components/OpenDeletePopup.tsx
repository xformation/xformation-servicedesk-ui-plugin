import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextareabox } from './CustomTextareabox';

export class OpenDeletePopup extends React.Component<any, any> {
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
                <ModalBody style={{ height: 'calc(25vh - 20px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 p-b-20 heading">
                        <h4 className="d-block text-center">Are you sure you want to delete this ticket?</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="d-block text-center p-t-20">
                                <button className="blue-button">Yes</button>
                                <button className="blue-button cancel" onClick={this.handleClose}>No</button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}