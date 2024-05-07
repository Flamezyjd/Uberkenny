import React from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

const uiConfig={
    signInSuccessUrl:"/",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen(){
    return(
        <div
            style={{
                maxWidth:'320px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
            }}
        >
            <h1>
                uberkenny login
            </h1>
            <p>
                please sign-in:
            </p>

        </div>
    );
}

export default SignInScreen;
