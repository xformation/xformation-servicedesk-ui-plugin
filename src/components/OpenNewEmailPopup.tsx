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
    fromdata: any;
    todata: any;
    constructor(props: any) {
        super(props);
        this.fromdata = [];
        this.todata = [];
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
            fromData: [],
            toData: [],
            option: [
                { name: 'abc@a.com', id: 1, value: 'from' },
                { name: 'xyz@x.com', id: 2, value: 'from' },
                { name: 'abc@d.com', id: 3, value: 'from' },
                { name: 'xyz@y.com', id: 4, value: 'from' },
                { name: 'adc@a.com', id: 5, value: 'from' },
                { name: 'xpz@x.com', id: 6, value: 'from' },
            ],
            toOptions: [
                { name: 'dipti@gmail.com', id: 1, value: 'to' },
                { name: 'shatish@gmail.com', id: 2, value: 'to' },
                { name: 'jasmin@gmail.com', id: 3, value: 'to' },
                { name: 'sunil@gmail.com', id: 4, value: 'to' },
                { name: 'infotech@tech.com', id: 5, value: 'to' },
            ]
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

    onSelect() { }

    removeEmail = (item: any) => {
        let fromArray = this.state.fromData;
        let toArray = this.state.toData;
        if (item.value == 'from') {
            for (let i = 0; i < fromArray.length; i++) {
                let row = fromArray[i];
                if (row.id == item.id) {
                    fromArray.splice(i, 1);
                    console.log(fromArray);
                    break;
                }
            }
            // this.setState({
            //     fromData: fromArray
            // })
        } else if (item.value == 'to') {
            for (let i = 0; i < toArray.length; i++) {
                let torow = toArray[i];
                if (torow.id == item.id) {
                    toArray.splice(item.id, 1);
                }
            }
            // this.setState({
            //     toData: toArray,
            // })
        }

    }

    onChangeEmail = (e: any) => {
        let lastId = 0;
        let newEmail = this.state.option;
        if (e.target.value != '') {
            for (let i = 0; i < this.state.option.length; i++) {
                lastId = this.state.option[i].id;
            }
            newEmail.push({ 'name': e.target.value, id: lastId + 1 })
            this.setEmail({ name: e.target.value, id: lastId + 1, value: 'from' });

        }
        this.setState({
            option: newEmail
        })
    }

    onChangeToEmail = (e: any) => {
        let lastToId = 0;
        let newToEmail = this.state.toOptions;
        if (e.target.value != '') {
            for (let i = 0; i < this.state.toOptions.length; i++) {
                lastToId = this.state.toOptions[i].id;
            }
            newToEmail.push({ 'name': e.target.value, id: lastToId + 1 })
            this.setEmail({ name: e.target.value, id: lastToId + 1, value: 'to' });

        }
        this.setState({
            toOptions: newToEmail
        })
    }

    setEmail = (item: any) => {
        if (item.value == 'from') {
            this.fromdata.push(item);
        } else if (item.value == 'to') {
            this.todata.push(item);
        }
        this.setState({
            fromData: this.fromdata,
            toData: this.todata
        });
    }

    render() {
        const { modal, from, to, subject, description, priority, status, tags, isSubmitted, text } = this.state;
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
                                    {/* <input type="text" className="form-control" onChange={this.onTextChanges} value={text} placeholder="RK Fabrication Company (support@ramkaumr1578.maxamis.com)"/>
                                    <ul>
                                        {this.renderSuggestions()}
                                    </ul> */}
                                    <Multiselect
                                        placeholder="RK Fabrication Company (support@ramkaumr1578.maxamis.com)"
                                        options={this.state.option}
                                        selectedValues={this.state.selectedValue}
                                        onSelect={this.onSelect}
                                        onRemove={this.removeEmail}
                                        onKeyPress={this.onChangeEmail}
                                        onClick={this.setEmail}
                                        closeIcon="close"
                                        displayValue="name"
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
                                        selectedValues={this.state.selectedValue}
                                        onSelect={this.onSelect}
                                        onRemove={this.removeEmail}
                                        onKeyPress={this.onChangeToEmail}
                                        onClick={this.setEmail}
                                        closeIcon="close"
                                        displayValue="name"
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