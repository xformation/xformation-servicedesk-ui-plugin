import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    render() {
        const { modal } = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalHeader toggle={this.toggle}><h4>New Contact</h4>
                    <span>When someone reaches out to you, they become a contact in your account. You can create companies and associate contacts with them. Learn more.</span></ModalHeader>
                <ModalBody style={{ height: 'calc(75vh - 110px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Full Name*</label>
                            <input type="text" className="input-group-text" placeholder="Enter the name of this person" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Title</label>
                            <input type="text" className="input-group-text" placeholder="Enter a title" />
                        </div>
                    </div>
                    <div className="row">
                        <h3>Atleast one of these fields is mandatory*</h3>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Email</label>
                            <input type="text" className="input-group-text" placeholder="Enter a phone email address" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Alternate Email</label>
                            <input type="text" className="input-group-text" placeholder="Enter a email address" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Work Phone</label>
                            <input type="text" className="input-group-text" placeholder="Enter a phone number" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Mobile Phone</label>
                            <input type="text" className="input-group-text" placeholder="Enter a phone number" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Twitter</label>
                            <input type="text" className="input-group-text" placeholder="Enter a Twitter ID" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Unique external Id</label>
                            <input type="text" className="input-group-text" placeholder="Enter the contact’s unique ID" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label>Company</label>
                            <input type="text" className="input-group-text" placeholder="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label>Address</label>
                            <textarea className="input-group-text" placeholder="Enter the address of this person" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Time Zone</label>
                            <input type="date" className="input-group-text" placeholder="(GMT +05:30) Chennai" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Language</label>
                            <input type="text" className="input-group-text" placeholder="English" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>Tags</label>
                            <input type="text" className="input-group-text" placeholder="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label>About</label>
                            <input type="text" className="input-group-text" placeholder="Enter some text" />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="row">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}