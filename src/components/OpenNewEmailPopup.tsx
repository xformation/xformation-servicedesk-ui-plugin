import * as React from 'react';
import { Fragment } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextbox } from './CustomTextbox';
import { Customselectbox } from './Customselectbox';
import { CustomTextareabox } from './CustomTextareabox';
import { Multiselect } from './Multiselect/multiselects/multiselect.component';
import { config } from "../config";
import { RestService } from '../domain/_service/RestService';
import AlertMessage from './AlertMessage';
import axios from 'axios'

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
            isAlertOpen: false,
            message: null,
            severity: null,
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
            fromEmails: [],
            ticketId: null,
            ticketListObj: [],
            orgTicketList: [],
        };
    }
    async componentDidMount() {
        try {
            await RestService.getData(config.GET_ALL_TICKET_URL, null, null).then(
                (response: any) => {

                    let ary = [];
                    let obj = new MySelectObj("", "Select Ticket");
                    ary.push(obj);
                    for (let i = 0; i < response.length; i++) {
                        obj = new MySelectObj(response[i].id, response[i].subject);
                        ary.push(obj);
                    }
                    this.setState({
                        ticketListObj: ary,
                        orgTicketList: response
                    });
                })
        } catch (err) {
            console.log("Loading company data failed. Error: ", err);
        }
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
        console.log("From emails length : ", this.state.fromEmails.length);
        console.log("From To emails length : ", this.state.toEmails.length);
        console.log("error : ", errorData);
        if (errorData.fromEmails.isValid && errorData.toEmails.isValid && errorData.subject.isValid && errorData.description.isValid && errorData.priority.isValid && errorData.status.isValid && errorData.tags.isValid) {
            const { fromEmails, toEmails, subject, description, priority, status, tags, ticketId } = this.state;
            console.log(fromEmails);
            console.log(toEmails);
            let from = [];
            let i;
            for (i in fromEmails) {
                from.push(fromEmails[i].value);
            }
            let to = [];
            let j;
            for (j in toEmails) {
                to.push(toEmails[j].value)
            }
            let priorityValue = "";
            if (priority == 0) {
                priorityValue = "Low";
            } else if (priority == 1) {
                priorityValue = "Medium";
            } else if (priority == 2) {
                priorityValue = "High";
            }
            let statusValue;
            if (status == 0) {
                statusValue = "Closed";
            } else {
                statusValue = "Open";
            }
            const data = {
                "from": from.toString(),
                "to": to.toString(),
                "subject": subject,
                "description": description,
                "priority": priorityValue,
                "status": statusValue,
                "tags": tags,
            }
            let formData = new FormData();
            formData.append("mailFrom", from.toString());
            formData.append("mailTo", to.toString());
            formData.append("subject", subject);
            formData.append("description", description);
            formData.append("priority", priorityValue);
            formData.append("status", statusValue);
            formData.append("tags", tags);
            formData.append("ticketId", ticketId);
            console.log(formData);
            axios.post(config.SEND_EMAIL_URL, formData, {
            }).then((response: any) => {
                if (response.data != null) {
                    this.setState({
                        severity: config.SEVERITY_SUCCESS,
                        message: config.SEND_EMAIL_SUCCESS,
                        isAlertOpen: true,
                    });
                } else {
                    this.setState({
                        severity: config.SEVERITY_ERROR,
                        message: config.SEND_EMAIL_ERROR,
                        isAlertOpen: true,
                    });
                }
                console.log("response data", response.data);
            }).catch((err: any) => console.log(err))

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
            ticketId: validObj,
            fromEmails: validObj,
            toEmails: validObj,
        };
        if (isSubmitted) {
            const { from, to, subject, description, priority, status, tags, ticketId, fromEmails, toEmails } = this.state;
            if (!ticketId) {
                retData.ticketId = {
                    isValid: false,
                    message: "Please select ticket"
                }
            }
            if (fromEmails.length == 0) {
                retData.fromEmails = {
                    isValid: false,
                    message: "Email Sender name is required"
                };
            }
            if (toEmails.length == 0) {
                retData.toEmails = {
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
    handleCloseAlert = (e: any) =>{
        this.setState({
          isAlertOpen: false
        })
    }

    render() {
        const { modal, from, to, subject, description, priority, status, tags, isSubmitted, toEmails, fromEmails, ticketId, ticketListObj } = this.state;
        const errorData = this.validate(isSubmitted);
        const state = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                 <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
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
                                    <span style={{ color: "red" }}>{errorData.fromEmails.message}</span>
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
                                    <span style={{ color: "red" }}>{errorData.toEmails.message}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="contact">Ticket *</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="ticketId" id="ticketId" name="ticketId" value={ticketId} arrayData={ticketListObj} onChange={this.handleStateChange} isValid={errorData.ticketId.isValid} message={errorData.ticketId.message} />
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
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={[{id: -1, name: "Select priority"},{ id: 0, name: "Low" }, { id: 1, name: "Medium" }, { id: 0, name: "High" }]} onChange={this.handleStateChange} isValid={errorData.priority.isValid} message={errorData.priority.message} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="status">Status*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="status" id="status" name="status" value={status} arrayData={[ { id: -1, name: "Select Status" },{ id: 0, name: "Closed" }, { id: 1, name: "open" }]} onChange={this.handleStateChange} isValid={errorData.status.isValid} message={errorData.status.message} />
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