import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextareabox } from './CustomTextareabox';

export class OpenDeletePopup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            openSuccessfully: false,
            openSuccessfullyHide: true
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

    onClickOpenSuccessfully = () => {
        let successfully = !this.state.openSuccessfully;
        let successfullyHide = !this.state.openSuccessfullyHide;
        this.setState({
            openSuccessfully: successfully,
            openSuccessfullyHide: successfullyHide,
        });
    }

    render() {
        const { modal, openSuccessfully, openSuccessfullyHide } = this.state;
        const state = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container ticket-details-popup-container">
                <ModalBody style={{ height: 'calc(25vh - 20px)', overflowY: 'auto', overflowX: "hidden" }}>
                    
                    {openSuccessfullyHide == true &&
                    <div className="d-block width-100">
                        <div className="d-block p-b-20 heading">
                            <div className="d-inline-block width-75 v-a-top">
                                <h4 className="d-block">Are you sure you want to delete this ticket?</h4>
                            </div>
                            <div className="d-inline-block width-25 text-right v-a-top">
                                <button className="close-btn" onClick={this.handleClose}>X</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-center p-t-20">
                                    <button className="blue-button" onClick={this.onClickOpenSuccessfully}>Yes</button>
                                    <button className="blue-button cancel" onClick={this.handleClose}>No</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    }
                    
                    {openSuccessfully == true && 
                        <div className="d-block width-100 successfully-heading">
                            <strong className="d-block text-center">You have successfully deleted this ticket.</strong>
                        </div>
                    }

                </ModalBody>
            </Modal>
        );
    }
}