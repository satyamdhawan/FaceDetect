import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) =>{
	return(
		<div className="master">
			<div className='uk-align-center uk-container-small uk-margin-top image-con'>
				<img width = '360px' id="image" src={imgUrl} alt=''/>
				<div className="box" style={{top:box.top_row, right:box.right_col, left:box.left_col, bottom:box.bottom_row}}></div>
			</div>
			
		</div>
	)
}

export default FaceRecognition;