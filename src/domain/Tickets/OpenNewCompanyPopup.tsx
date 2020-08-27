import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class OpenNewCompanyPopup extends React.Component<any, any> {
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

    render() {
        const { modal } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalHeader toggle={this.toggle}><h4>New Company</h4>
                    <span>When someone reaches out to you, they become a contact in your account. You can create companies and associate contacts with them. Learn more.</span></ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Company Name*</label>
                            <input type="text" className="input-group-text" placeholder="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Description</label>
                            <input type="text" className="input-group-text" placeholder="Write something that describe this company" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Notes</label>
                            <input type="text" className="input-group-text" placeholder="Add notes about this company - make something about a recent deal, etc." />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Company</label>
                            <input type="text" className="input-group-text" placeholder="eg: My company1.com, mycompany2.com" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Health Score</label>
                            <input type="text" className="input-group-text" placeholder="Any" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Account tier</label>
                            <input type="text" className="input-group-text" placeholder="Any" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Renewal Date</label>
                            <input type="text" className="input-group-text" placeholder="Any" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Industry</label>
                            <input type="text" className="input-group-text" placeholder="Any" />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="row">
                        <button>Cancel</button>
                        <button className="blue-button">Save</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}