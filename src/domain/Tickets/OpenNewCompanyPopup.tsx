import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextbox } from './../../components/CustomTextbox';

export class OpenNewCompanyPopup extends React.Component<any, any> {
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            companyName: '',
            description: '',
            notes: '',
            company: '',
            healthCare: '',
            accountTier: '',
            renewalDate: '',
            industry: '',
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
        if (errorData.companyName.isValid && errorData.description.isValid && errorData.notes.isValid && errorData.healthCare.isValid && errorData.company.isValid && errorData.accountTier.isValid && errorData.renewalDate.isValid && errorData.industry.isValid) {
            const { companyName, description, notes, company, healthCare, accountTier, renewalDate, industry } = this.state;
            const sendData = {
                companyName,
                description,
                notes,
                company,
                healthCare,
                accountTier,
                renewalDate,
                industry,
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
            companyName: validObj,
            description: validObj,
            notes: validObj,
            company: validObj,
            healthCare: validObj,
            accountTier: validObj,
            renewalDate: validObj,
            industry: validObj,
        };
        if (isSubmitted) {
            const { companyName, description, notes, company, healthCare, accountTier, renewalDate, industry } = this.state;
            if (!companyName) {
                retData.companyName = {
                    isValid: false,
                    message: "Company Name is required"
                };
            }
            if (!description) {
                retData.description = {
                    isValid: false,
                    message: "Description is required"
                };
            }
            if (!notes) {
                retData.notes = {
                    isValid: false,
                    message: "Notes is required"
                };
            }
            if (!company) {
                retData.company = {
                    isValid: false,
                    message: "Company is required"
                };
            }
            if (!healthCare) {
                retData.healthCare = {
                    isValid: false,
                    message: "Health Care is required"
                };
            }
            if (!accountTier) {
                retData.accountTier = {
                    isValid: false,
                    message: "Account Tier Name is required"
                };
            }
            if (!renewalDate) {
                retData.renewalDate = {
                    isValid: false,
                    message: "Renewal Date is required"
                };
            }
            if (!industry) {
                retData.industry = {
                    isValid: false,
                    message: "Industry Name is required"
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
        const { modal, companyName, description, notes, company, healthCare, accountTier, renewalDate, industry, isSubmitted } = this.state;
        const errorData = this.validate(isSubmitted);
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
                                    <label htmlFor="companyName">Company Name*</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="companyName" id="companyName" placeholder="" name="companyName" value={companyName} onChange={this.handleStateChange} isValid={errorData.companyName.isValid} message={errorData.companyName.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="description" id="description" placeholder="Write something that describe this company" name="description" value={description} onChange={this.handleStateChange} isValid={errorData.description.isValid} message={errorData.description.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="notes">Notes</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="notes" id="notes" placeholder="Add notes about this company - make something about a recent deal, etc." name="notes" value={notes} onChange={this.handleStateChange} isValid={errorData.notes.isValid} message={errorData.notes.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="company" id="company" placeholder="eg: My company1.com, mycompany2.com" name="company" value={company} onChange={this.handleStateChange} isValid={errorData.company.isValid} message={errorData.company.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="healthCare">Health Score</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="healthCare" id="healthCare" placeholder="Any" name="healthCare" value={healthCare} onChange={this.handleStateChange} isValid={errorData.healthCare.isValid} message={errorData.healthCare.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="accountTier">Account tier</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="accountTier" id="accountTier" placeholder="Any" name="accountTier" value={accountTier} onChange={this.handleStateChange} isValid={errorData.accountTier.isValid} message={errorData.accountTier.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="renewalDate">Renewal Date</label>
                                    <CustomTextbox containerClass="form-group-inner" type="date" inputClass="form-control" htmlFor="renewalDate" id="renewalDate" placeholder="Any" name="renewalDate" value={renewalDate} onChange={this.handleStateChange} isValid={errorData.renewalDate.isValid} message={errorData.renewalDate.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="industry">Industry</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="industry" id="industry" placeholder="Any" name="industry" value={industry} onChange={this.handleStateChange} isValid={errorData.industry.isValid} message={errorData.industry.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="d-block text-center p-t-20 contact-popup-buttons">
                                    <button className="cancel" onClick={this.handleClose}>Cancel</button>
                                    <button className="save" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        );
    }
}