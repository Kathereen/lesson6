import React from 'react';
import variables from './main.module.scss';

class TestScss extends React.Component{
    constructor(){
        super();
        this.state={
            btnChange: true,
            inputChange: true,
            loginText:'',
            passwordText:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    handleClick(e){
        e.preventDefault(); 
        this.setState({
            btnChange: !this.state.btnChange,
            loginText: '',
            passwordText:''
            
        })
    }
    handleChange(e){
        console.log(e.target.name);
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value,
                  
        })
    }
    render(){
        const CSS = {
            color: variables.blackcolor,
            fontSize: '20px'
          }
        const colorChange = {
            color: this.state.btnChange? variables.lightblackcolor: variables.mediumcolor,
            backgroundColor: variables.btncolor,
        }
        const loginInput = {
            backgroundColor: this.state.loginText? variables.mediumcolor:'white' 
        }
        const passInput = {
            backgroundColor: this.state.passwordText? variables.lightblackcolor:'white'
        } 
        return(
            <div>TASK 1
                <form style={CSS}>
                    <p>Enter login</p>
                    <input type='text' name='loginText' value={this.state.loginText} style={loginInput} onChange={this.handleChange}/>
                    <p>Enter password</p>
                    <input type='text' name='passwordText' value={this.state.passwordText} style={passInput} onChange={this.handleChange}/>
                    <p><button style={colorChange} onClick={this.handleClick}>Clean</button></p>
                </form>
            </div>    
        )
    }
};
export default TestScss;