import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '646801324757-ovi2e403crr5bso0evvjlulobsp6de0h.apps.googleusercontent.com',
                scope: 'profile email',
                'onsuccess': this.onSignIn
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);                
            });
        });
        
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
            console.log(this.props.signIn(this.auth.currentUser.get().getBasicProfile().getName()));
            console.log(this.props.signIn(this.auth.currentUser.get().getBasicProfile().getEmail()));
        } else{
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () =>{
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null){
            return null;//spinner
        } else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign out
                </button>
            );
        }else{
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);