import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextbox } from './CustomTextbox';
import { Customselectbox } from './Customselectbox';

export class OpenNewTicketPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            contact: '',
            subject: '',
            type: '',
            subjectText: '',
            priority: '',
            assign: '',
            description: '',
            tags: '',
            isSubmitted: false
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
        if (errorData.contact.isValid && errorData.subject.isValid && errorData.type.isValid && errorData.subjectText.isValid && errorData.priority.isValid && errorData.assign.isValid && errorData.description.isValid && errorData.tags.isValid) {
            const { contact, subject, type, subjectText, priority, assign, description, tags } = this.state;
            const sendData = {
                contact,
                subject,
                type,
                subjectText,
                priority,
                assign,
                description,
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
            contact: validObj,
            subject: validObj,
            type: validObj,
            subjectText: validObj,
            priority: validObj,
            assign: validObj,
            description: validObj,
            tags: validObj,
        };
        if (isSubmitted) {
            const { contact, subject, type, subjectText, priority, assign, description, tags } = this.state;
            if (!contact) {
                retData.contact = {
                    isValid: false,
                    message: "Contact Name is required"
                };
            }
            if (!subject) {
                retData.subject = {
                    isValid: false,
                    message: "Subject is required"
                };
            }
            if (!type) {
                retData.type = {
                    isValid: false,
                    message: "Type is required"
                };
            }
            if (!subjectText) {
                retData.subjectText = {
                    isValid: false,
                    message: "Subject Detail required"
                };
            }
            if (!priority) {
                retData.priority = {
                    isValid: false,
                    message: "Priority is required"
                };
            }
            if (!assign) {
                retData.assign = {
                    isValid: false,
                    message: "Group and Agent Name is required"
                };
            }
            if (!description) {
                retData.description = {
                    isValid: false,
                    message: "Description is required"
                };
            }
            if (!tags) {
                retData.tags = {
                    isValid: false,
                    message: "Tag is required"
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

    render() {
        const { modal, contact, subject, type, subjectText, priority, assign, description, tags, isSubmitted } = this.state;
        const errorData = this.validate(isSubmitted);
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 contact-popup-container new-ticket-container">
                        <div className="d-block width-100 p-b-20 heading">
                            <h4 className="d-block">New Ticket</h4>
                            <span className="d-block">The Contact will receive an Email about this Ticket</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="contact">Contact*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="contact" id="contact" name="contact" value={contact} arrayData={{ 0: 'abc', 1: 'def', 2: 'ghi' }} onChange={this.handleStateChange} isValid={errorData.contact.isValid} message={errorData.contact.message} />
                                    <div className="d-block text-right p-t-5">
                                        <button className="add-conatct">Add a Conatct</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="subject" id="subject" name="subject" value={subject} arrayData={{ 0: 'abc', 1: 'def', 2: 'ghi' }} onChange={this.handleStateChange} isValid={errorData.subject.isValid} message={errorData.subject.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="type">Type*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="type" id="type" name="type" value={type} arrayData={{ 0: 'abc', 1: 'def', 2: 'ghi' }} onChange={this.handleStateChange} isValid={errorData.type.isValid} message={errorData.type.message} />
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
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="subjectText" id="subjectText" placeholder="" name="subjectText" value={subjectText} onChange={this.handleStateChange} isValid={errorData.subjectText.isValid} message={errorData.subjectText.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="priority">Priority*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={{ 0: 'Low', 1: 'High', 2: 'Medium' }} onChange={this.handleStateChange} isValid={errorData.priority.isValid} message={errorData.priority.message}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="assign">Assign to*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="assign" id="assign" name="assign" value={assign} arrayData={{ 0: 'Group/Agent', 1: 'Group', 2: 'agent' }} onChange={this.handleStateChange} isValid={errorData.assign.isValid} message={errorData.assign.message}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description*</label>
                                    <CustomTextbox containerClass="form-group-inner" rows={5} inputClass="form-control" htmlFor="description" id="description" name="description" value={description} onChange={this.handleStateChange} isValid={errorData.description.isValid} message={errorData.description.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
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
                                    <button className="save create" onClick={this.handleSubmit}>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}