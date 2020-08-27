import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';

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
    handleClose = () => {
        this.setState({
            modal: false,
        }); 
    }

    render() {
        const { modal } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 contact-popup-container">
                        <div className="d-block width-100 p-b-20 heading">
                            <h4 className="d-block"><i className="fa fa-building"></i> New Company</h4>
                            <span className="d-block">When someone reaches out to you, they become a contact in your account. You can create companies and associate contacts with them. <a href="#">Learn more.</a></span>
                        </div>
                        <div className="d-block width-100 p-t-10 p-b-10 upload-photo">
                            <div className="d-inline-block upload-icon">
                                <i className="fa fa-building"></i>
                            </div>
                            <div className="d-inline-block v-a-top">
                                <strong className="d-block">Upload Logo</strong>
                                <p className="d-block">An image of the person, it's best if it has the same length and height</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Company Name*</label>
                                    <input type="text" className="input-group-text" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" className="input-group-text" placeholder="Write something that describe this company" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Notes</label>
                                    <input type="text" className="input-group-text" placeholder="Add notes about this company - make something about a recent deal, etc." />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" className="input-group-text" placeholder="eg: My company1.com, mycompany2.com" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Health Score</label>
                                    <input type="text" className="input-group-text" placeholder="Any" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Account tier</label>
                                    <input type="text" className="input-group-text" placeholder="Any" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Renewal Date</label>
                                    <input type="text" className="input-group-text" placeholder="Any" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Industry</label>
                                    <input type="text" className="input-group-text" placeholder="Any" />
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
            </Modal>
        );
    }
}