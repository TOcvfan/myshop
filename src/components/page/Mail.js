import React from 'react';
import { reduxForm } from 'redux-form'
import Select from 'react-select';
import { Textarea, Textbox } from 'react-inputs-validation';
import { HEAR_LIST } from '../lists';
import { YES_NO } from '../yesno';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import history from '../../history';
 
const PollOption = ({ onChange }) => {
    return (
        <div>
        {YES_NO.map((choice, id) => (
            <div key={id}>
            <label>{YES_NO[id].question}</label>
            {choice.choice.map((choices, i) =>(
                <label className="containerradio" key={i}>
                    <input type='radio'
                        name={YES_NO[id].name}
                        value={choice.choice[i].text}
                        onChange={onChange}/>
                    <span className="checkmark"></span>
                    {choice.choice[i].text}
                </label>
                ))}
            </div>
        ))}
      </div>
    );
};
/*const array = HEAR_LIST.map((heard, id) => (
                <div key={id}>
                    <option>{HEAR_LIST[id].label}</option>
                </div>
            ))

const Selecter = ({ onChange }) => {
    return (
        <div>
            <select onChange={onChange}>
            {array}
            </select>
        </div>
    )
}*/

class Mail extends React.Component {
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
        
        return (
            <div className="ui container">
                <article className="ui container">
			<div className="">
				<header className="">
					<h1 className="ui container">Fill out the form</h1>
					</header>
					<form className="form-type-material" onSubmit={this.onSubmitSignIn}>
						<div id="register-form" action="" className="">
							<div className="">
								<label htmlFor="" className="">Name of Contact person</label>
								<Textbox
                                    tabIndex="1" 
                                    id={'Name'} 
                                    name="Name"
                                    type="text"
                                    disabled={false}
                                    maxLength={50}
                                    placeholder="Place your name here"
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
                                    <PollOption
                                        options={this.props.choices}
                                        onChange={(e) => this.handleOnChange(e)}
                                        selected={this.state.selectedOption} />
                                </div>
                            </div>
                            <br/> 
                            <div>
                                <label htmlFor="" className="">Where did hear about this page</label>
                                <Select 
                                    options={HEAR_LIST} 
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
                                    placeholder="Place your email here"
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
								<label htmlFor="" className="">Description</label>
								<Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Place your description here"
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
                                <label>Size</label>
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