import * as React from 'react';
import { Fragment } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextbox } from './CustomTextbox';
import { Customselectbox } from './Customselectbox';
import { CustomTextareabox } from './CustomTextareabox';
// import SelectSearch from 'react-select-search';
// import Select from 'react-select';
// import Select from 'react-dropdown-select';
import {Multiselect} from 'multiselect-react-dropdown';

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
            selectedOption: null,
            suggestions: [],
            text: '',
            option: [
                { name: 'abc@a.com', id: 1 },
                { name: 'xyz@x.com', id: 2 },
                { name: 'abc@d.com', id: 3 },
                { name: 'xyz@y.com', id: 4 },
                { name: 'adc@a.com', id: 5 },
                { name: 'xpz@x.com', id: 6 },
            ],
            // options: [
            //     { value: 'abc@a.com' },
            //     { value: 'xyz@x.com' },
            //     { value: 'abc@d.com' },
            //     { value: 'xyz@y.com' },
            //     { value: 'adc@a.com' },
            //     { value: 'xpz@x.com' },
            // ],
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

    onTextChanges = (e: any) => {
        // const { options } = this.state;
        // const value = e.target.value;
        // let suggestion = [];
        // for (let i = 0; i < options.length; i++) {
        //     if (options[i].value.indexOf(value) !== -1 || value === '') {
        //         suggestion.push(options[i]);
        //     } else if (options[i].value.toLowerCase().indexOf(value) !== -1 || value === '') {
        //         suggestion.push(options[i]);
        //     }
        // }
        // this.setState({
        //     suggestions: suggestion
        // })
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        const retuData = [];
        if (suggestions.length > 0) {
            for (let i = 0; i < suggestions.length; i++) {
                const row = suggestions[i];
                retuData.push(<li onClick={() => this.suggestionSelected(row.value)}>{row.value}</li>)
            }
        } else {
            retuData.push(<li></li>);
        }
        return retuData;
    }

    suggestionSelected(value: any) {
        this.setState({
            text: value,
            suggestions: [],
        })
    }

    onSelect() {
        console.log("fghfghf");
    }

    onRemove() {
        console.log("remove");
    }

    render() {
        const { modal, from, to, subject, description, priority, status, tags, isSubmitted, options, text } = this.state;
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
                                    {/* <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="email" id="to" placeholder="" name="to" value={to} onChange={this.handleStateChange} isValid={errorData.to.isValid} message={errorData.to.message} /> */}
                                    {/* <input type="text" className="form-control" onChange={this.onTextChanges} value={text} placeholder="RK Fabrication Company (support@ramkaumr1578.maxamis.com)"/>
                                    <ul>
                                        {this.renderSuggestions()}
                                    </ul> */}
                                    <Multiselect
                                        options={this.state.option}
                                        selectedValues={this.state.selectedValue}
                                        onSelect={this.onSelect}
                                        onRemove={this.onRemove}
                                        displayValue="name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">To*</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="to" id="to" placeholder="" name="to" value={to} onChange={this.handleStateChange} isValid={errorData.to.isValid} message={errorData.to.message} />
                                    {/* <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="to" id="to" name="to" value={to} arrayData={{ 0: 'abc@a.com', 1: 'def@b.com', 2: 'ghi@a.com' }} onChange={this.handleStateChange} isValid={errorData.to.isValid} message={errorData.to.message} /> */}
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
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="priority" id="priority" name="priority" value={priority} arrayData={{ 0: 'Low', 1: 'High', 2: 'Medium' }} onChange={this.handleStateChange} isValid={errorData.priority.isValid} message={errorData.priority.message} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="status">Status*</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="status" id="status" name="status" value={status} arrayData={{ 0: 'Closed', 1: 'Open' }} onChange={this.handleStateChange} isValid={errorData.status.isValid} message={errorData.status.message} />
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
                                    <button className="save create" onClick={this.handleSubmit}>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal >
        );
    }
}