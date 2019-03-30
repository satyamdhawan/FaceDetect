import React from 'react';
import './SubmitUrlForm.css'

const SubmitUrlForm = ({onInputChange , onSubmit}) =>{
	return(
		<div className="container">
			<div className="uk-container uk-container-large">
				<h2 className='uk-heading-divider uk-heading-primary'>Please enter a url:</h2>
				<h4>It detects Faces:</h4>
					<input type="text" className="fillup uk-input" onChange={onInputChange} />
					<button type="submit" className="uk-button uk-button-primary" onClick={onSubmit}>Detect</button>
			</div>
		</div>
	)
}

export default SubmitUrlForm;