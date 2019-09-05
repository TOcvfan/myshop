import React from 'react';
import { reduxForm } from 'redux-form'
import { Textarea, Textbox } from 'react-inputs-validation';
import Select from 'react-select';
import { HEAR_LIST } from '../lists';
import { YES_NO } from '../yesno';
import { Form, Radio } from 'semantic-ui-react'
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

class Mail extends React.Component {
    constructor(props){
        super(props);
        this.handleHearChange = this.handleHearChange.bind(this);
        this.handleYesNoChange = this.handleYesNoChange.bind(this);
        this.state = {
                id: '',
                name: '',
                label: '',
                choice: '',
                email: '',
                description: '',
                size: this.props.size,
                HEAR_LIST,
                YES_NO
                
            }
            this.submitted = false;
    }

    /*renderError({error, touched}) {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input 
                    {...input} 
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </div>
        );
    }*/

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    handleHearChange(value){
        console.log(value.label);
        this.setState({
            selectedValue: value.label
        });
        
    }
    handleYesNoChange(choise){
        console.log(choise.choice);
        this.setState({selectedanswer: choise.id});
    }
    
    render(){
        
        return (
            <div className="ui container">
                <article className="container">
			<div className="">
				<header className="">
					<h1 className="container">Fill out form</h1>
					</header>
					<form className="form-type-material">
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
                                        console.log(e);
                                    }}
                                    onBlur={(e) => {console.log(e)}} 
                                    onFocus={(e) => {console.log(e)}} 
                                    validationOption={{
                                        name: 'Name', 
                                        check: true, 
                                        required: true, 
                                        min: 5,
                                        max: 50
                                    }}
                                />
							</div>
                            <div>
                                <div>
                                    {YES_NO.map((answers, id) => {
                                        return (
                                            <Form.Field key={id}>
                                                <Radio
                                                    label={YES_NO[id].choice}
                                                    name='radioGroup'
                                                    value={YES_NO[id].choice}
                                                    checked={this.state.value === "yes"}
                                                    onChange={this.handleYesNoChange}
                                                    selectedanswer={this.props.choice}
                                                />
                                            </Form.Field> 
                                            );
                                    })}
                                        
                                </div>
                            </div>
                            <div>
                            <label htmlFor="" className="">Where did hear about this page</label>
                            <Select 
                                options={HEAR_LIST} 
                                selectedValue={this.state.selectedValue} 
                                onChange={this.handleHearChange} 
                            />                            
                            </div>
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
                                        this.setState({ hasNameError: res, validate: false })}
                                    onChange={(email, e) => {
                                        this.setState({ email });
                                        console.log(e);
                                    }}
                                    onBlur={(e) => {console.log(e)}}
                                    onFocus={(e) => {console.log(e)}}
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
							<div className="">
								<label htmlFor="" className="">Description</label>
								<Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Place your description here"
                                    onChange={(description, e) => {
                                        this.setState({ description });
                                        console.log(e);
                                    }}
                                    onBlur={(e) => {console.log(e)}}
                                    validationOption={{
                                        name: 'Description',
                                        check: true,
                                        required: true,
                                    }}
                                />	
							</div>
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
                                        this.setState({ hasNameError: res, validate: false })}
                                    onChange={(name, e) => {
                                        this.setState({ name });
                                        console.log(e);
                                    }}
                                    onBlur={(e) => {console.log(e)}}
                                    onFocus={(e) => {console.log(e)}}
                                    validationOption={{
                                        name: 'Name',
                                        check: true,
                                        required: true, 
                                        min: 5,
                                        max: 50
                                    }}
                                />
                                </div>
							<div className="">
								<button 
									type="submit" 
									value="Send" 
									onClick={this.onSubmitSignIn} 
									className="">Send</button>
							</div>
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