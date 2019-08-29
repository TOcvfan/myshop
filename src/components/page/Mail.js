import React from 'react';
import { reduxForm } from 'redux-form'
import { Textarea, Textbox, Select, Checkbox, Radiobox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

class Mail extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
                name: '',
                email: '',
                description: '',
                size: this.props.size
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
    
    render(){
        console.log(this.state.size)
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
							<div className="">
								<label htmlFor="" className="">Email</label>
								<Textbox
                                    tabIndex="1" //Optional.[String or Number].Default: none.
                                    id={'Email'} //Optional.[String].Default: "".  Input ID.
                                    name="Email" //Optional.[String].Default: "". Input name.
                                    type="text" //Optional.[String].Default: "text". Input type [text, password, number].
                                    disabled={false} //Optional.[Bool].Default: false.
                                    //maxLength={50} //Optional.[String].Default: "".
                                    placeholder="Place your email here" //Optional.[String].Default: "".
                                    validationCallback={res =>
                                        this.setState({ hasNameError: res, validate: false })}
                                    onChange={(email, e) => {
                                        this.setState({ email });
                                        console.log(e);
                                    }} //Required.[Func].Default: () => {}. Will return the value.
                                    onBlur={(e) => {console.log(e)}} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
                                    validationOption={{
                                        min: 5, //Optional.[Number].Default: 0. Validation of min length when validationOption['type'] is string, min amount when validationOption['type'] is number.
                                        max: 50, //Optional.[Number].Default: 0. Validation of max length when validationOption['type'] is string, max amount when validationOption['type'] is number.
                                        name: 'Email', //Optional.[String].Default: "". To display in the Error message. i.e Please enter your ${name}.
                                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.,
                                        required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
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
                                    onBlur={(e) => {console.log(e)}} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
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