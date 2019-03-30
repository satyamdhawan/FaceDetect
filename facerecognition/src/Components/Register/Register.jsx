import React from 'react';

const Register= ({onRouteChange}) =>{
	return(
		<div>
			<h3 className="uk-margin-center">Register</h3>
			<div className="uk-margin">
				<span className='uk-margin-right'>First Name</span>
		        <div className="uk-inline">
		            <span className="uk-form-icon"></span>
		            <input className="uk-input" type="text"/>
		        </div>
		    </div>
		    <div className="uk-margin">
		    	<span className='uk-margin-right'>Last Name</span>
		        <div className="uk-inline">
		            <span className="uk-form-icon"></span>
		            <input className="uk-input" type="text"/>
		        </div>
		    </div>
		    <div className="uk-margin">
		    	<span className='uk-margin-right'>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
		        <div className="uk-inline">
		            <span className="uk-form-icon" uk-icon="icon: user"></span>
		            <input className="uk-input" type="email"/>
		        </div>
		    </div>

		    <div className="uk-margin">
		    	<span className='uk-margin-right'>Password &nbsp;</span>
		        <div className="uk-inline">
		            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
		            <input className="uk-input" type="password"/>
		        </div>
		    </div>
		    <button onClick={()=>onRouteChange('signin')} className="uk-button uk-button-default">Register</button>
		</div>
	)
}


export default Register;