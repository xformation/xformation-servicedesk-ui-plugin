import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';

export class OpenNewContactPopup extends React.Component<any, any> {
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
                            <h4 className="d-block"><i className="fa fa-user"></i> New Contact</h4>
                            <span className="d-block">When someone reaches out to you, they become a contact in your account. You can create companies and associate contacts with them. <a href="#">Learn more.</a></span>
                        </div>
                        <div className="d-block width-100 p-t-10 p-b-10 upload-photo">
                            <div className="d-inline-block upload-icon">
                                <i className="fa fa-user"></i>
                            </div>
                            <div className="d-inline-block v-a-top">
                                <strong className="d-block">Upload Photo</strong>
                                <p className="d-block">An image of the person, it's best if it has the same length and height</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Full Name*</label>
                                    <input type="text" className="input-group-text" placeholder="Enter the name of this person" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="input-group-text" placeholder="Enter a title" />
                                </div>
                            </div>
                        </div>
                        <div className="atleast-fields-box">
                            <h3>Atleast one of these fields is mandatory*</h3>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="input-group-text" placeholder="Enter a phone email address" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Alternate Email</label>
                                        <input type="text" className="input-group-text" placeholder="Enter a email address" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Work Phone</label>
                                        <input type="text" className="input-group-text" placeholder="Enter a phone number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Mobile Phone</label>
                                        <input type="text" className="input-group-text" placeholder="Enter a phone number" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Twitter</label>
                                        <input type="text" className="input-group-text" placeholder="Enter a Twitter ID" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label>Unique external Id</label>
                                        <input type="text" className="input-group-text" placeholder="Enter the contact’s unique ID" />
                                    </div>
                                </div>
                            </div>
                        </div>                       
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" className="input-group-text" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="input-group-text" rows={3} placeholder="Enter the address of this person" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Time Zone</label>
                                    <input type="date" className="input-group-text" placeholder="(GMT +05:30) Chennai" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Language</label>
                                    <input type="text" className="input-group-text" placeholder="English" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Tags</label>
                                    <input type="text" className="input-group-text" placeholder="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>About</label>
                                    <input type="text" className="input-group-text" placeholder="Enter some text" />
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