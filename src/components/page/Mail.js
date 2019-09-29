import React from 'react';
import { reduxForm } from 'redux-form'
import Select from 'react-select';
import { Textarea, Textbox } from 'react-inputs-validation';
import { HEAR_LIST, HEAR_LIST_DK} from '../listsEng';
import { YES_NO, YES_NO_DK } from '../yesno';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import history from '../../history';
import LanguageContext from '../../contexts/LanguageContext';
import { labelHearDK,
            placeholderNameDK,
            labelNameDK,
            placeholderEmailDK,
            placeholderDescriptionDK,
            labelDescriptionDK,
            labelSizeDK,
            labelheadDK
        } from './MailTxtDK'
import { placeholderNameEng,
            labelNameEng,
            placeholderEmailEng,
            placeholderDescriptionEng,
            labelDescriptionEng,
            labelHearEng,
            labelSizeEng,
            labelheadEng
        } from './MailTxt';
 
class Mail extends React.Component {
    static contextType = LanguageContext;
    constructor(props){
        super(props);
        this.handleHearChange = this.handleHearChange.bind(this);
        this.state = {
                validate: false,
                id: '',
                name: '',
                label: '',
                selectedValue: 'Select...',
                DoYouWantMoreLanguagesThanOne: '',
                WhatLanguageDoYouWantYourWebPageToBeIn: '',
                WhatIsItFor: '',
                HowMuchThoughtHaveYouGivenToTheDesign: '',
                DomainPackageSize: '',
                choice: '',
                email: '',
                description: '',
                size: this.props.size,
                HEAR_LIST,
                YES_NO,
                selectedOption: ''
                
            }
            this.submitted = false;
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    handleHearChange = (selectedValue) =>{
        console.log(selectedValue.label);
        this.setState({
            selectedValue: selectedValue.label,
            
        }); 
    }
    
    
    handleOnChange(e) {
        
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmitSignIn = (event) => {
        event.preventDefault();
        const {
            hasNameError,
            hasDescriptionError,
            hasEmailError,
            hasSizeError,
          } = this.state;
          if (!hasNameError && !hasDescriptionError && !hasEmailError && !hasSizeError) {
            
            this.setState({ validate: true })
			fetch('https://nameless-ocean-57332.herokuapp.com/contact', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					DoYouWantMoreLanguagesThanOne: this.state.DoYouWantMoreLanguagesThanOne,
					WhatLanguageDoYouWantYourWebPageToBeIn: this.state.WhatLanguageDoYouWantYourWebPageToBeIn,
					WhatIsItFor: this.state.WhatIsItFor,
                    HowMuchThoughtHaveYouGivenToTheDesign: this.state.HowMuchThoughtHaveYouGivenToTheDesign,
                    DomainPackageSize: this.state.DomainPackageSize,
                    description: this.state.description,
                    size: this.state.size,
                    selectedValue: this.state.selectedValue                    	
				})
			})
            .then((response) => (response.json()))
            .catch(error => console.log(error))
            console.log('All validated!');
            history.push('/')
        }
    }
    
    validateForm(e) {
        e.preventDefault();
        
        const {
          hasNameError,
          hasDescriptionError,
          hasEmailError,
          hasSizeError,
        } = this.state;
        if (!hasNameError && !hasDescriptionError && !hasEmailError && !hasSizeError) {
          console.log('All validated!');
          this.setState({ validate: true })
          
        }
    }
    
    render(){
        const question = this.context === 'english' ? YES_NO : YES_NO_DK;
        const hearlist = this.context === 'english' ? HEAR_LIST : HEAR_LIST_DK;
        const contactNamelabel = this.context === 'english' ? labelNameEng : labelNameDK;
        const placeholderName = this.context === 'english' ? placeholderNameEng : placeholderNameDK;
        const placeholderEmail = this.context === 'english' ? placeholderEmailEng : placeholderEmailDK;
        const labelDescription = this.context === 'english' ? labelDescriptionEng : labelDescriptionDK;
        const placeholderDescription = this.context === 'english' ? placeholderDescriptionEng : placeholderDescriptionDK;
        const labelSize = this.context === 'english' ? labelSizeEng : labelSizeDK;
        const labelhead = this.context === 'english' ? labelheadEng : labelheadDK;
        const labelHear = this.context === 'english' ? labelHearEng : labelHearDK;
        return (
            <div className="ui container">
                <article className="ui container">
			<div className="">
				<header className="">
					<h1 className="ui container" style={{color: 'White', textAlign: 'center'}}>{labelhead}</h1>
					</header>
					<form className="form-type-material" onSubmit={this.onSubmitSignIn}>
						<div id="register-form" action="" className="">
							<div className="">
								<label htmlFor="" className="">{contactNamelabel}</label>
								<Textbox
                                    tabIndex="1" 
                                    id={'Name'} 
                                    name="Name"
                                    type="text"
                                    disabled={false}
                                    maxLength={50}
                                    placeholder={placeholderName}
                                    validationCallback={res =>
                                        this.setState({ hasNameError: res, validate: false })}
                                    onChange={(name, e) => {
                                        this.setState({ name });
                                    }}
                                    onBlur={(e) => {}} 
                                    onFocus={(e) => {}} 
                                    validationOption={{
                                        name: 'Name', 
                                        check: true, 
                                        required: true, 
                                        min: 5,
                                        max: 50
                                    }}
                                />
							</div>
                            <br/>
                            <div>
                                <div className="poll">                                        
                                    <div>                               
                                    {question.map((choice, id) => (
                                        <div key={id}>
                                        <label>{question[id].question}</label>
                                        {choice.choice.map((choices, i) =>(
                                            <label className="containerradio" key={i}>
                                                <input type='radio'
                                                    options={this.props.choices}
                                                    name={question[id].name}
                                                    value={choice.choice[i].text}
                                                    onChange={(e) => this.handleOnChange(e)}
                                                    selected={this.state.selectedOption}/>
                                                <span className="checkmark"></span>
                                                {choice.choice[i].text}
                                            </label>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                </div>
                            </div>
                            <br/> 
                            <div>
                                <label htmlFor="" className="">{labelHear}</label>
                                <Select
                                    options={hearlist} 
                                    value={this.state.selectedValue}
                                    name="select"
                                    onChange={(value) => this.handleHearChange(value)}
                                    placeholder={this.state.selectedValue}
                                />                           
                            </div>
                            <br/>
							<div className="">
								<label htmlFor="" className="">Email</label>
								<Textbox
                                    tabIndex="1" 
                                    id={'Email'}
                                    name="Email"
                                    type="text"
                                    disabled={false}
                                    placeholder={placeholderEmail}
                                    validationCallback={res =>
                                        this.setState({ hasEmailError: res, validate: false })}
                                    onChange={(email, e) => {
                                        this.setState({ email });
                                    }}
                                    onBlur={(e) => {}}
                                    onFocus={(e) => {}}
                                    validationOption={{
                                        min: 5,
                                        max: 50,
                                        name: 'Email',
                                        check: true,
                                        required: true,
                                        customFunc: email => {
                                          const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                          if (reg.test(String(email).toLowerCase())) {
                                            return true;
                                          } else {
                                            return 'is not a valid email address';
                                          }
                                        }
                                    }}
                                />
							</div>
                            <br/>
							<div className="">
								<label htmlFor="" className="">{labelDescription}</label>
								<Textarea
                                    id="description"
                                    name="description"
                                    placeholder={placeholderDescription}
                                    onChange={(description, e) => {
                                        this.setState({ description });
                                    }}
                                    onBlur={(e) => {}}
                                    validationOption={{
                                        name: 'Description',
                                        check: true,
                                        required: true,
                                    }}
                                />	
							</div>
                            <br/>
                            <div>
                                <label>{labelSize}</label>
                                <Textbox
                                    tabIndex="1" 
                                    id={'Size'}
                                    name="Size"
                                    type="text"
                                    readOnly
                                    autoComplete="off"
                                    value={this.state.size}
                                    disabled={true}
                                    validationCallback={res =>
                                        this.setState({ hasSizeError: res, validate: false })}
                                    onChange={(name, e) => {
                                        this.setState({ name });
                                    }}
                                    onBlur={(e) => {}}
                                    onFocus={(e) => {}}
                                    validationOption={{
                                        name: 'Name',
                                        check: true,
                                        required: true, 
                                        min: 5,
                                        max: 50
                                    }}
                                />
                                </div>
                                <br/>
							<div className="">
								
                                <button 
									type="submit" 
									value="Send" 
                                    //onClick={this.validate} 
                                    className="">Send</button>
							</div>
                            <br/>
						</div>
						</form>
					</div>
				</article>
            </div>
        );
    }
}

export default reduxForm({
    form: 'mail'
})(Mail);