import * as React from 'react';
import { Fragment } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextbox } from './CustomTextbox';
import { Customselectbox } from './Customselectbox';
import { CustomTextareabox } from './CustomTextareabox';
import { Multiselect } from './Multiselect/multiselects/multiselect.component';
class MySelectObj {
    id: any;
    name: any;
    constructor(id: any, name: any) {
        this.id = id;
        this.name = name;
    }
}
export class OpenNewEmailPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            from: '',
            to: '',
            subject: '',
            description: '',
            priority: '',
            status: '',
            tags: '',
            isSubmitted: false,
            option: [
                { name: 'abc@a.com', value: 'abc@a.com' },
                { name: 'xyz@x.com', value: 'xyz@x.com' },
                { name: 'abc@d.com', value: 'abc@d.com' },
                { name: 'xyz@y.com', value: 'xyz@y.com' },
                { name: 'adc@a.com', value: 'adc@a.com' },
                { name: 'xpz@x.com', value: 'xpz@x.com' },
            ],
            toOptions: [
                { name: 'dipti@gmail.com', value: 'dipti@gmail.com' },
                { name: 'shatish@gmail.com', value: 'shatish@gmail.com' },
                { name: 'jasmin@gmail.com', value: 'jasmin@gmail.com' },
                { name: 'sunil@gmail.com', value: 'sunil@gmail.com' },
                { name: 'infotech@tech.com', value: 'infotech@tech.com' },
            ],
            toEmails: [],
            fromEmails: []
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

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        if (errorData.from.isValid && errorData.to.isValid && errorData.subject.isValid && errorData.description.isValid && errorData.priority.isValid && errorData.status.isValid && errorData.tags.isValid) {
            const { from, to, subject, description, priority, status, tags } = this.state;
            const sendData = {
                from,
                to,
                subject,
                description,
                priority,
                status,
                tags,
            };
            console.log(sendData);
        }
    };

    validate = (isSubmitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        const retData = {
            from: validObj,
            to: validObj,
            subject: validObj,
            description: validObj,
            priority: validObj,
            status: validObj,
            tags: validObj,
        };
        if (isSubmitted) {
            const { from, to, subject, description, priority, status, tags } = this.state;
            if (!from) {
                retData.from = {
                    isValid: false,
                    message: "Email Sender name is required"
                };
            }
            if (!to) {
                retData.to = {
                    isValid: false,
                    message: "Email Forworder name is required"
                };
            }
            if (!subject) {
                retData.subject = {
                    isValid: false,
                    message: "Subject is required"
                };
            }
            if (!description) {
                retData.description = {
                    isValid: false,
                    message: "Description is required"
                };
            }
            if (!priority) {
                retData.priority = {
                    isValid: false,
                    message: "Priority is required"
                };
            }
            if (!status) {
                retData.status = {
                    isValid: false,
                    message: "Status is required"
                };
            }
            if (!tags) {
                retData.tags = {
                    isValid: false,
                    message: "Tags is required"
                };
            }
        }
        return retData;
    };

    handleStateChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    onChangeEmail = (selectedValues: any, type: any) => {
        if (type === "from") {
            this.setState({
                fromEmails: selectedValues
            });
        } else if (type === "to") {
            this.setState({
                toEmails: selectedValues
            });
        }
    };

    getAdHocItem = (value: any) => {
        return { name: value, value: value };
    };

    render() {
        const { modal, from, to, subject, description, priority, status, tags, isSubmitted, toEmails, fromEmails } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 contact-popup-container new-ticket-container">
                        <div className="d-block width-100 p-b-20 heading">
                            <h4 className="d-block">Send an Email</h4>
                            <span className="d-block">When you hit send, the Contact will receive an email and a Ticket will be associated with Them</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="from">From*</label>
                                    <Multiselect
                                        placeholder="RK Fabrication Company (support@ramkaumr1578.maxamis.com)"
                                        options={this.state.option}
                                        onSelect={(selectedValues: any, item: any) => this.onChangeEmail(selectedValues, "from")}
                                        onRemove={(selectedValues: any, item: any) => this.onChangeEmail(selectedValues, "from")}
                                        closeIcon="close"
                                        displayValue="name"
                                        getAdHocItem={this.getAdHocItem}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">To*</label>
                                    <Multiselect
                                        options={this.state.toOptions}
                                        preselectedValues={toEmails}
                                        onSelect={(selectedValues: any, item: any) => this.onChangeEmail(selectedValues, "to")}
                                        onRemove={(selectedValues: any, item: any) => this.onChangeEmail(selectedValues, "to")}
                                        closeIcon="close"
                                        displayValue="name"
                                        getAdHocItem={this.getAdHocItem}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject*
                                        <span className="float-right">
                                            <button className="add-conatct">Recently used</button>
                                        </span>
                                    </label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="subject" id="subject" placeholder="" name="subject" value={subject} onChange={this.handleStateChange} isValid={errorData.subject.isValid} message={errorData.subject.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description*</label>
                                    <CustomTextareabox containerClass="form-group-inner" rows={5} inputClass="form-control textarea" htmlFor="description" id="description" name="description" value={description} onChange={this.handleStateChange} isValid={errorData.description.isValid} message={errorData.description.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="priority">Priority*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={[{ id: 0, name: "Low" }, { id: 1, name: "Medium" }, { id: 0, name: "High" }]} onChange={this.handleStateChange} isValid={errorData.priority.isValid} message={errorData.priority.message} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="status">Status*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="status" id="status" name="status" value={status} arrayData={[{ id: 0, name: "Closed" }, { id: 1, name: "open" }]} onChange={this.handleStateChange} isValid={errorData.status.isValid} message={errorData.status.message} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="tags">Tags</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="tags" id="tags" name="tags" value={tags} onChange={this.handleStateChange} isValid={errorData.tags.isValid} message={errorData.tags.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-right p-t-20 contact-popup-buttons">
                                    <div className="d-inline-block form-check create-author">
                                        <input type="checkbox" className="form-check-input" id="CreateAuthor" />
                                        <label className="form-check-label" htmlFor="CreateAuthor">Create Author</label>
                                    </div>
                                    <button className="cancel" onClick={this.handleClose}>Cancel</button>
                                    <button className="save create" onClick={this.handleSubmit}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal >
        );
    }
}