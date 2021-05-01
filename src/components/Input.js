import React from 'react';
import './Input.css';
import {FaFacebook} from 'react-icons/fa';
import {IoIosEyeOff} from 'react-icons/io';

function Input() {
    return (
        <div className="container">
          <input className="inputs1" type="text" placeholder="Phone number, email address or username"  /> <br></br><br/>
          <input className="inputs2" type="password" placeholder="Password"  /><IoIosEyeOff className="eye"/>  <br/>
        
          <button  className="login"> Log In</button><br></br>
          <h5 className="cap1">Forgotten your login deatils? <span style={{color:'   #1b4f72    '}}>Get help with logging in.</span></h5>
          <hr  style={{
                color: '#000000',
                backgroundColor: ' #808b96 ',
                height: .1,
                display:'inline-flex',
                width:'125px',
                borderColor : '#000000'
            }}/> <h6 style={{display:'inline-flex',fontSize:'12px',color:' #808b96 '}}>OR</h6> <hr  style={{
                        color: '#000000',
                        backgroundColor: ' #808b96 ',
                        height: .1,
                        display:'inline-flex',
                        width:'125px',
                        borderColor : '#000000'
            }}/>
                <br/>
                
                <div>
                <FaFacebook style={{color:'#3498db',fontSize:'17px',display:'inline'}}  />
                <p className="fbtext"><b> Login with Facebook</b></p><br></br>
        
         </div>
                <hr  style={{
                color: '#808b96',
                backgroundColor: '#808b96',
                height: .1,
                marginTop:'95px',
                
                borderColor : '#000000'
            }}/> 
            <p style={{marginTop:'1px',fontSize:'13px',color:'#808b96'}}>Don't have an account?<span style={{color:'#000'}}> Sign up.</span></p>


        </div>
    );
}

export default Input;