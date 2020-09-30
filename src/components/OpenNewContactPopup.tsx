import * as React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { CustomTextbox } from './CustomTextbox';
import { Customselectbox } from './Customselectbox';
import { config } from "../config";
import { RestService } from '../domain/_service/RestService';

class MySelectObj {
    id: any;
    name: any;
    constructor(id: any, name: any){
        this.id = id;
        this.name = name;
    }
}
export class OpenNewContactPopup extends React.Component<any, any> { 
    steps: any;
    constructor(props: any) {
        super(props);
        this.state = {
            modal: false,
            fullName: '',
            title: '',
            email: '',
            alternateEmail: '',
            workPhone: '',
            mobilePhone: '',
            twitter: '',
            uniqueId: '',
            company: null,
            address: '',
            timeZone: '',
            language: '',
            tag: '',
            about: '',
            isSubmitted: false,
            companyList: [],
            companyLogo: null,
            companyName: '',
            description: '',
            notes: '',
            company2: '',
            healthCare: '',
            accountTier: '',
            renewalDate: '',
            industry: '',
        };
    }
    async componentDidMount() {
        try {
            await RestService.getData(config.GET_ALL_COMPANIES_URL, null, null).then(
                (response: any) => {
                    let ary = [];
                    for (let i = 0; i < response.length; i++) {
                        let obj = new MySelectObj(response[i].id, response[i].companyName);
                        ary.push(obj);
                    }
                    
                    this.setState({
                        companyList: ary,
                    });
                })
        } catch (err) {
            console.log("Loading company data failed. Error: ", err);
        }
        console.log("companyNameList  : ", this.state.companyList);

        // await fetch(config.SERVICEDESK_API_URL + "/api/companies", {
        //     method: 'get',
        // }).then((response => response.json())


        //     let i;
        //     var companyNameJson={
        //        id: null,
        //        name: null 
        //     };
        //     let companyNameList=[];
        //     for (i in res) {
        //         let id=res[i].id;
        //         let name=res[i].companyName;
        //         // companyNameJson.id=name;
        //         companyNameList.push(name);
        //     }


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
        if (errorData.fullName.isValid && errorData.title.isValid && errorData.company.isValid && errorData.address.isValid && errorData.timeZone.isValid && errorData.language.isValid && errorData.tag.isValid && errorData.about.isValid && (errorData.email.isValid || errorData.alternateEmail.isValid ||
            errorData.workPhone.isValid || errorData.mobilePhone.isValid || errorData.twitter.isValid || errorData.uniqueId.isValid)) {

            const { fullName, title, email, alternateEmail, workPhone, mobilePhone, twitter, uniqueId,
                company, address, timeZone, language, tag, about } = this.state;
            const sendData = {
                fullName, title, email, alternateEmail, workPhone, mobilePhone, twitter, uniqueId, company, address, timeZone, language, tag, about,
            };
            console.log(sendData);

        }
    }

    validate = (isSubmitted: any) => {
        const validObj = {
            isValid: true,
            message: ""
        };
        const retData = {
            fullName: validObj,
            title: validObj,
            email: validObj,
            alternateEmail: validObj,
            workPhone: validObj,
            mobilePhone: validObj,
            twitter: validObj,
            uniqueId: validObj,
            company: validObj,
            address: validObj,
            timeZone: validObj,
            language: validObj,
            tag: validObj,
            about: validObj,
            companyName: validObj,
            description: validObj,
            notes: validObj,
            company2: validObj,
            healthCare: validObj,
            accountTier: validObj,
            renewalDate: validObj,
            industry: validObj,
        };
        if (isSubmitted) {
            const { fullName, title, email, alternateEmail, workPhone, mobilePhone, twitter, uniqueId, company, address, timeZone, language, tag, about,companyName, description, notes, company2, healthCare, accountTier, renewalDate, industry } = this.state;
            if (!fullName) {
                retData.fullName = {
                    isValid: false,
                    message: "full Name is required"
                };
            }
            if (!title) {
                retData.title = {
                    isValid: false,
                    message: "Title is required"
                };
            }
            if (!email) {
                retData.email = {
                    isValid: false,
                    message: "Atleast one of these fields is mandatory*"
                };
            }
            if (!alternateEmail) {
                retData.alternateEmail = {
                    isValid: false,
                    message: "Atleast one of these fields is mandatory*"
                };
            }
            if (!workPhone) {
                retData.workPhone = {
                    isValid: false,
                    message: "Atleast one of these fields is mandatory*"
                };
            }
            if (!mobilePhone) {
                retData.mobilePhone = {
                    isValid: false,
                    message: "Atleast one of these fields is mandatory*"
                };
            }
            if (!twitter) {
                retData.twitter = {
                    isValid: false,
                    message: "Atleast one of these fields is mandatory*"
                };
            }
            if (!uniqueId) {
                retData.uniqueId = {
                    isValid: false,
                    message: "Atleast one of these fields is mandatory*"
                };
            }
            if (!company) {
                retData.company = {
                    isValid: false,
                    message: "Company name is required"
                };
            }
            if (!address) {
                retData.address = {
                    isValid: false,
                    message: "Address is required"
                };
            }
            if (!timeZone) {
                retData.timeZone = {
                    isValid: false,
                    message: "Time Zone is required"
                };
            }
            if (!language) {
                retData.language = {
                    isValid: false,
                    message: "Language is required"
                };
            }
            if (!tag) {
                retData.tag = {
                    isValid: false,
                    message: "Tag is required"
                };
            }
            if (!about) {
                retData.about = {
                    isValid: false,
                    message: "About detail is required"
                };
            }
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
            if (!company2) {
                retData.company2 = {
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
    }

    handleStateChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSelectBox = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        console.log("company : ",this.state.company);
        this.setState({
            companyName:this.state.company.companyName,
            description: this.state.company.description,
            notes: this.state.company.notes,
            healthScore: this.state.company.healthScore,
            accountTier: this.state.company.accountTier,
            renewalDate: this.state.company.renewalDate,
            industry: this.state.company.industry,
        });
        console.log("Company Name=",this.state.companyName);
        console.log("Company description=",this.state.description);
        console.log("Company notes=",this.state.notes);
        console.log("Company healthScore=",this.state.healthScore);
        console.log("Company accountTier=",this.state.accountTier);
        console.log("Company renewalDate=",this.state.renewalDate);
        console.log("Company industry=",this.state.industry);
        
    }

    render() {
        const { modal, isSubmitted, companyList, fullName, title, email, alternateEmail, workPhone, mobilePhone, twitter, uniqueId, company, address, timeZone, language, tag, about,companyName, description, notes, company2, healthCare, accountTier, renewalDate, industry } = this.state;
        const errorData = this.validate(isSubmitted);
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
                                    <label htmlFor="fullName">Full Name*</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="fullName" id="fullName" placeholder="Enter the name of this person" name="fullName" value={fullName} onChange={this.handleStateChange} isValid={errorData.fullName.isValid} message={errorData.fullName.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="title" id="title" placeholder="Enter a title" name="title" value={title} onChange={this.handleStateChange} isValid={errorData.title.isValid} message={errorData.title.message} />
                                </div>
                            </div>
                        </div>
                        <div className="atleast-fields-box">
                            <h3>Atleast one of these fields is mandatory*</h3>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="email" id="email" placeholder="Enter a phone email address" name="email" value={email} onChange={this.handleStateChange} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="alternateEmail">Alternate Email</label>
                                        <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="alternateEmail" id="alternateEmail" placeholder="Enter a email address" name="alternateEmail" value={alternateEmail} onChange={this.handleStateChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="workPhone">Work Phone</label>
                                        <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="workPhone" id="workPhone" placeholder="Enter a phone number" name="workPhone" value={workPhone} onChange={this.handleStateChange} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="mobilePhone">Mobile Phone</label>
                                        <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="mobilePhone" id="mobilePhone" placeholder="Enter a phone number" name="mobilePhone" value={mobilePhone} onChange={this.handleStateChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="twitter">Twitter</label>
                                        <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="twitter" id="twitter" placeholder="Enter a Twitter ID" name="twitter" value={twitter} onChange={this.handleStateChange} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="uniqueId">Unique external Id</label>
                                        <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="uniqueId" id="uniqueId" placeholder="Enter the contact’s unique ID" name="uniqueId" value={uniqueId} onChange={this.handleStateChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <Customselectbox containerClass="form-group-inner" inputClass="form-control" htmlFor="company" id="company" name="company" value={company} arrayData={companyList} onChange={this.handleSelectBox} isValid={errorData.company.isValid} message={errorData.company.message} />
                                    <div className="d-block text-right p-t-5">
                                        <button className="add-conatct">Add a Company</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="address" id="address" rows={3} placeholder="Enter the address of this person" name="address" value={address} onChange={this.handleStateChange} isValid={errorData.address.isValid} message={errorData.address.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="timeZone">Time Zone</label>
                                    <CustomTextbox containerClass="form-group-inner" type="date" inputClass="form-control" htmlFor="timeZone" id="timeZone" placeholder="(GMT +05:30) Chennai" name="timeZone" value={timeZone} onChange={this.handleStateChange} isValid={errorData.timeZone.isValid} message={errorData.timeZone.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="language">Language</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="language" id="language" placeholder="English" name="language" value={language} onChange={this.handleStateChange} isValid={errorData.language.isValid} message={errorData.language.message} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="tag">Tags</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="tag" id="tag" placeholder="" name="tag" value={tag} onChange={this.handleStateChange} isValid={errorData.tag.isValid} message={errorData.tag.message} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="about">About</label>
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="about" id="about" placeholder="Enter some text" name="about" value={about} onChange={this.handleStateChange} isValid={errorData.about.isValid} message={errorData.about.message} />
                                </div>
                            </div>
                        </div> 
                         */}
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
                                    <CustomTextbox containerClass="form-group-inner" inputClass="form-control" htmlFor="company2" id="company2" placeholder="eg: My company1.com, mycompany2.com" name="company2" value={company2} onChange={this.handleStateChange} isValid={errorData.company2.isValid} message={errorData.company2.message} />
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