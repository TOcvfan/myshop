import React from 'react';
import { reduxForm } from 'redux-form'
import { Textarea, Textbox, Select } from 'react-inputs-validation';
import { HEAR_LIST } from '../lists';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

class Mail extends React.Component {
    constructor(props){
        super(props);
        this.handleHearChange = this.handleHearChange.bind(this)
        this.state = {
                id: '',
                name: '',
                option: 'volvo',
                email: '',
                description: '',
                size: this.props.size,
                HEAR_LIST,
                
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

    handleHearChange(event){
        console.log(event);
        this.setState({
            id: event.target.value,
        });
        
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
                                    tabIndex="1" //Optional.[String or Number].Default: none.
                                    id={'Name'} //Optional.[String].Default: "".  Input ID.
                                    name="Name" //Optional.[String].Default: "". Input name.
                                    type="text" //Optional.[String].Default: "text". Input type [text, password, number].
                                    disabled={false} //Optional.[Bool].Default: false.
                                    maxLength={50} //Optional.[String].Default: "".
                                    placeholder="Place your name here" //Optional.[String].Default: "".
                                    validationCallback={res =>
                                        this.setState({ hasNameError: res, validate: false })}
                                    onChange={(name, e) => {
                                        this.setState({ name });
                                        console.log(e);
                                    }} //Required.[Func].Default: () => {}. Will return the value.
                                    onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                                    validationOption={{
                                        name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                        required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                        min: 5, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                                        max: 50, //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                                    }}
                                />
							</div>
                            <div>
                            {/*<Radiobox
                                tabIndex={2} //Optional.[String or Number].Default: none.
                                id="job" //Optional.[String].Default: "".  Input ID.
                                name="job" //Optional.[String].Default: "". Input name.
                                disabled={false} //Optional.[Bool].Default: false.
                                //value={job} //Optional.[String].Default: "".
                                //validate={validate} //Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at once, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                                validationCallback={res =>
                                    this.setState({ hasJobError: res, validate: false })} //Optional.[Func].Default: none. Return the validation result.
                                //optionList={JOB_OPTIONS_LIST}
                                classNameInput="" //Optional.[String].Default: "".
                                classNameWrapper="" //Optional.[String].Default: "".
                                classNameContainer="" //Optional.[String].Default: "".
                                classNameOptionListItem="" //Optional.[String].Default: "".
                                customStyleInput={{}} //Optional.[Object].Default: {}.
                                customStyleWrapper={{}} //Optional.[Object].Default: {}.
                                customStyleContainer={{
                                    display: 'flex',
                                    justifyContent: 'flex-start'
                                }} //Optional.[Object].Default: {}.
                                customStyleOptionListItem={{ marginRight: '20px' }} //Optional.[Object].Default: {}.
                                onChange={(job, e) =>{
                                    this.setState({ job });
                                    console.log(e);
                                }} //Required.[Func].Default: () => {}. Will return the value.
                                onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                                // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                                // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                                validationOption={{
                                    name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                                    check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                    required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                    // showMsg: true, //Optional.[Bool].Default: true. To determin display the error message or not.
                                    // locale: 'en-US', //Optional.[String].Default: "en-US". For error message display. Current options are ['zh-CN', 'en-US']; Default is 'en-US'. If your are looking for more options, you can take a look at 'window.REACT_INPUTS_VALIDATION' section, which provides the extensibility for your own locale.
                                    // msgOnError: "Your custom error message if you provide the validationOption['msgOnError']", //Optional.[String].Default: "". Show your custom error message no matter what when it has error if it is provied.
                                    // msgOnSuccess: "Your custom success message if you provide the validationOption['msgOnSuccess']. Otherwise, it will not show, not even green border." //Optional.[String].Default: "". Show your custom success message no matter what when it has error if it is provied.
                                }}
                                // asyncMsgObj={{
                                //   error: false, // Optional.[Bool].Default: false. (Server response) Backend validation result.
                                //   message: '', // Optional.[String].Default: "". (Server response) Your AJAX message. For instance, provide it when backend returns 'USERNAME ALREADY EXIST'
                                //   showOnError: true, // Optional.[Bool].Default: true. (Server response) Show AJAX error message or not.
                                //   showOnSuccess: false, // Optional.[Bool].Default: false. (Server response) Show AJAX success message or not.
                                // }}
                            />*/}
                            </div>
                            <div>
                            <label htmlFor="" className="">Where did hear about this page</label>
                            <select >
                                <option >Google search</option>
                                <option >Volvo</option>
                                <option >Fiat</option>
                            </select>
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
                                    tabIndex="1" //Optional.[String or Number].Default: none.
                                    id={'Size'} //Optional.[String].Default: "".  Input ID.
                                    name="Size" //Optional.[String].Default: "". Input name.
                                    type="text" //Optional.[String].Default: "text". Input type [text, password, number].
                                    readOnly
                                    autoComplete="off"
                                    value={this.state.size} //Optional.[String].Default: "".
                                    disabled={true} //Optional.[Bool].Default: false.
                                    validationCallback={res =>
                                        this.setState({ hasNameError: res, validate: false })}
                                    onChange={(name, e) => {
                                        this.setState({ name });
                                        console.log(e);
                                    }} //Required.[Func].Default: () => {}. Will return the value.
                                    onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                                    validationOption={{
                                        name: 'Name', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                                        required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                                        min: 5, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                                        max: 50, //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
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