import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextbox } from './CustomTextbox';
import { Customselectbox } from './Customselectbox';
import { CustomTextareabox } from './CustomTextareabox';
import { config } from "../config";
import axios from 'axios';
import { RestService } from '../domain/_service/RestService';
import AlertMessage from './AlertMessage';
class MySelectObj {
    id: any;
    name: any;
    constructor(id: any, name: any) {
        this.id = id;
        this.name = name;
    }
}

export class OpenNewTicketPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            isAlertOpen: false,
            message: null,
            severity: null,
            modal: false,
            requesterContact: '',
            subject: '',
            type: '',
            subjectText: '',
            priority: '',
            assign: '',
            priorityValue: '',
            assignValue: '',
            typeValue: '',
            description: '',
            tags: '',
            isSubmitted: false,
            contacts: [
                { index: '', value: '' }
            ],
            totalContact: 1,
            contactNameAndEmailList: [],
            allContacts: [],
            primaryEmailList: [],
            assignType: '',
            assignedContact: '',
            AgentNameList: [],
            allAgents: [],
            assignedAgent: '',
        };
    }

    async componentDidMount() {
        try {
            await RestService.getData(config.GET_ALL_CONTACT_URL, null, null).then(
                (response: any) => {

                    let ary = [];
                    let primaryEmailAry = [];
                    let obj = new MySelectObj("", "Select Contact");
                    let primaryEmailObj = new MySelectObj("", "Select Contact");
                    primaryEmailAry.push(primaryEmailObj);
                    ary.push(obj);
                    for (let i = 0; i < response.length; i++) {
                        obj = new MySelectObj(response[i].id, response[i].userName + " => " + response[i].primaryEmail);
                        primaryEmailObj = new MySelectObj(response[i].id, response[i].primaryEmail);
                        ary.push(obj);
                        primaryEmailAry.push(primaryEmailObj);
                    }
                    this.setState({
                        contactNameAndEmailList: ary,
                        allContacts: response,
                        primaryEmailList: primaryEmailAry,
                    });
                })
        } catch (err) {
            console.log("Loading company data failed. Error: ", err);
        }

        try {
            await RestService.getData(config.GET_ALL_AGENT_URL, null, null).then(
                (response: any) => {

                    let ary = [];
                    let obj = new MySelectObj("", "Select Agent");
                    ary.push(obj);
                    for (let i = 0; i < response.length; i++) {
                        obj = new MySelectObj(response[i].id, response[i].name);
                        ary.push(obj);
                    }
                    this.setState({
                        AgentNameList: ary,
                        allAgents: response,
                    });
                })
        } catch (err) {
            console.log("Loading company data failed. Error: ", err);
        }
    }

    fetchData = () => {
        RestService.getData(config.SERVICEDESK_API_URL + "/api/contacts", null, null).then(
            (response: any) => {
                console.log("contact list : ", response);
                let obj = null;
                // for(respone){
                //     obj = MyObj(re.id, re.compy);
                //     conatctFullNameList.push(obj);
                // }
                this.setState({
                    conatctFullNameList: obj,
                });
            }
        );
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
    handleSubmit = async (event: any) => {
        event.preventDefault();
        this.setState({
            isSubmitted: true
        });
        const errorData = this.validate(true);
        console.log(errorData);
        if (errorData.type.isValid && errorData.subjectText.isValid && errorData.priority.isValid && errorData.description.isValid && errorData.tags.isValid && errorData.requesterContact.isValid && errorData.assignType.isValid && (errorData.assignedAgent.isValid || errorData.assignedContact.isValid)) {
            const { contact, subject, subjectText, priorityValue, assignValue, typeValue, description, tags, requesterContact, assignedAgent, assignType, assignedContact } = this.state;
            let assignedToId;
            if (assignType == "contact") {
                assignedToId = assignedContact;
            } else if (assignType == "agent") {
                assignedToId=assignedAgent;
            }

            let data = {
                type: typeValue,
                subject: subjectText,
                priority: priorityValue,
                description: description,
                tag: tags,
                assignedToUserType: assignType,
                requesterUserType: "contact",
                requesterId: requesterContact,
                assignedToId: assignedToId,
            }
            console.log("Send Data : ", data);
            axios.post(config.ADD_TICKET_URL, data, {})
                .then((response: any) => {
                    if (response.data != null) {
                        this.setState({
                            severity: config.SEVERITY_SUCCESS,
                            message: config.ADD_TICKET_SUCCESS,
                            isAlertOpen: true,
                        });
                    } else {
                        this.setState({
                            severity: config.SEVERITY_ERROR,
                            message: config.ADD_TICKET_ERROR,
                            isAlertOpen: true,
                        });
                    }
                    console.log("response data", response.data);
                }).catch((err: any) => console.log(err));
        }


    };

    validate = (isSubmitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        const retData = {
            subject: validObj,
            type: validObj,
            subjectText: validObj,
            priority: validObj,
            assign: validObj,
            description: validObj,
            tags: validObj,
            requesterContact: validObj,
            assignType: validObj,
            assignedAgent: validObj,
            assignedContact: validObj,
        };
        if (isSubmitted) {
            const { subject, type, subjectText, priority, assign, description, tags, requesterContact, assignType, assignedAgent, assignedContact } = this.state;
            if (!requesterContact) {
                retData.requesterContact = {
                    isValid: false,
                    message: "Contact is required"
                };
            }
            if (assignType == "contact") {
                if (!assignedContact) {
                    retData.assignedContact = {
                        isValid: false,
                        message: "Contact is required"
                    };
                }
            } else if (assignType == "agent") {
                if (!assignedAgent) {
                    retData.assignedAgent = {
                        isValid: false,
                        message: "Agent is required"
                    };
                }
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
            if (!assignType) {
                retData.assignType = {
                    isValid: false,
                    message: "Please select contact or agent"
                }
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

    validateContacts = (isSubmitted: any) => {
        const retData = [];
        const { contacts } = this.state;
        const length = contacts.length;
        let isValid = true;
        for (let i = 0; i < length; i++) {
            retData.push({
                isValid: true,
                message: ""
            });
        }
        if (isSubmitted) {
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    if (contacts[i].value == '') {
                        retData[i] = {
                            isValid: false,
                            message: "Contact Name is required"
                        };
                    }
                }
            }
            isValid = false;
        }
        return {
            errorList: retData,
            isValid
        };
    };

    handleStateChange = (e: any) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });

    };

    addContact = () => {
        let optionArray = this.state.contacts;
        optionArray.push({ index: '', value: '' });
        this.setState({
            contacts: optionArray
        })
    }

    displayContact = () => {
        const { contact, isSubmitted, totalContact, contacts } = this.state;
        const contactValidation = this.validateContacts(isSubmitted);
        const errorList = contactValidation.errorList;
        let retData = [];
        for (let i = 0; i < contacts.length; i++) {
            const error = errorList[i];
            retData.push(
                <Customselectbox containerClass="form-group-inner p-b-10" inputClass="form-control" htmlFor="contact" id={i} name="contact" value={contacts[i].value} arrayData={{ 0: 'abc', 1: 'def', 2: 'ghi' }} onChange={this.handleStateChange} isValid={error.isValid} message={error.message} />
            );
        }
        return retData;
    }
    handleSelectBox = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        if (name == "type") {
            let type;
            if (value == 0) {
                type = "A";
            } else if (value == 1) {
                type = "B";
            } else if (value == 2) {
                type = "C";
            }
            this.setState({
                typeValue: type
            });
        }
        if (name == "priority") {
            let priority;
            if (value == 0) {
                priority = "Low";
            } else if (value == 1) {
                priority = "Medium";
            } else if (value == 2) {
                priority = "High";
            }
            this.setState({
                priorityValue: priority,
            });
        }
    }
    handleCloseAlert = (e: any) => {
        this.setState({
            isAlertOpen: false
        })
    }
    render() {
        const { contactNameAndEmailList, primaryEmailList, contactIndexsList, modal, requesterContact, type, subjectText, priority, description, tags, isSubmitted, assignType, assignedAgent, AgentNameList, assignedContact } = this.state;
        const errorData = this.validate(isSubmitted);
        const state = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle} className="modal-container">
                <AlertMessage handleCloseAlert={this.handleCloseAlert} open={state.isAlertOpen} severity={state.severity} msg={state.message}></AlertMessage>
                <button className="close-btn" onClick={this.handleClose}>X</button>
                <ModalBody style={{ height: 'calc(75vh - 50px)', overflowY: 'auto', overflowX: "hidden" }}>
                    <div className="d-block width-100 contact-popup-container new-ticket-container">
                        <div className="d-block width-100 p-b-20 heading">
                            <h4 className="d-block">New Ticket</h4>
                            <span className="d-block">The Contact will receive an Email about this Ticket</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="contact">Contact*(Requester)</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="requesterContact" id="requesterContact" name="requesterContact" value={requesterContact} arrayData={contactNameAndEmailList} onChange={this.handleStateChange} isValid={errorData.requesterContact.isValid} message={errorData.requesterContact.message} />
                                    <div className="d-block text-right p-t-5">
                                        <button className="add-conatct">Add a Conatct</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="subject" id="subject" name="subject" value={subject} arrayData={{ 0: 'abc', 1: 'def', 2: 'ghi' }} onChange={this.handleStateChange} isValid={errorData.subject.isValid} message={errorData.subject.message} />
                                </div>
                            </div>
                        </div> */}
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
                                    <label htmlFor="type">Type*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="type" id="type" name="type" value={type} arrayData={[{ id: 0, name: "A" }, { id: 1, name: "B" }, { id: 2, name: "C" }]} onChange={this.handleSelectBox} isValid={errorData.type.isValid} message={errorData.type.message} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="priority">Priority*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={[{ id: 0, name: "Low" }, { id: 1, name: "High" }, { id: 2, name: "Medium" }]} onChange={this.handleSelectBox} isValid={errorData.priority.isValid} message={errorData.priority.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-lg-12 col-md-12 col-sm-12">

                                <div className="form-group">
                                    <input type="radio" name="assignType" value="contact" className="contact_radio_button" onChange={this.handleStateChange} />Contact
                                <input type="radio" name="assignType" value="agent" className="contact_radio_button" onChange={this.handleStateChange} />Agent
                                <br></br><span style={{ color: "red" }}>{errorData.assignType.message}</span>
                                    {assignType == "contact" && <div>
                                        <label htmlFor="assign">Assign to Contacts*</label>
                                        <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="assignedContact" id="assignedContact" name="assignedContact" value={assignedContact} arrayData={contactNameAndEmailList} onChange={this.handleStateChange} isValid={errorData.assignedContact.isValid} message={errorData.assignedContact.message} />
                                    </div>}
                                    {assignType == "agent" && <div>
                                        <label htmlFor="assign">Assign to Agent*</label>
                                        <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="assignedAgent" id="assignedAgent" name="assignedAgent" value={assignedAgent} arrayData={AgentNameList} onChange={this.handleStateChange} isValid={errorData.assignedAgent.isValid} message={errorData.assignedAgent.message} />
                                    </div>}
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