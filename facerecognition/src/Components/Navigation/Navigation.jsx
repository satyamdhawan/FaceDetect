import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './logo.css';

const Navigation = ({onRouteChange, isSignedIn}) =>{
	return(
		<div>
			<nav className="uk-navbar-container uk-navbar-transparent uk-margin uk-margin-top">
	            <div className="uk-navbar-left">
	            	<a onClick={()=>{onRouteChange('home')}} className="uk-navbar-item uk-logo">
	            		<Tilt className="Tilt" options={{ max : 70 }} style={{ height: 250, width: 250 }} >
	            			<div className="Tilt-inner uk-margin-top uk-margin-top">
	            				<img src={ logo } className="logo" alt="logo"/>
	            			</div>
	            		</Tilt>
	            	</a>
	            	{isSignedIn === true ?
			        (<ul className="uk-navbar-nav">
			            <li>
			                <a onClick={()=>{onRouteChange('signin')}} className="uk-link-heading" id="style-signout" type='submit'>
			                	Sign Out
			                </a>
			            </li>
			        </ul>)
			    	:
			        (<div>
				        
			        </div>)
			        }	
   				</div>
	        </nav>
		</div>
	)
}

export default Navigation;