import React from 'react';

const SignIn = ({onRouteChange}) =>{
	return(
		<div>
			<h3 className="uk-margin-center">Login Please</h3>
		    <div className="uk-margin">
		        <div className="uk-inline">
		            <span className="uk-form-icon" uk-icon="icon: user"></span>
		            <input className="uk-input" type="email"/>
		        </div>
		    </div>

		    <div className="uk-margin">
		        <div className="uk-inline">
		            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
		            <input className="uk-input" type="password"/>
		        </div>
		    </div>
		    <button onClick={()=>onRouteChange('home')} className="uk-button uk-button-default">Login In</button>
		    <button onClick={()=>onRouteChange('register')} className="uk-button uk-button-default">Sign Up</button>
		</div>
	)
}

export default SignIn;