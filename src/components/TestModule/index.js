import React from 'react';
import myStyle from './styles.module.css'

class TestModule extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login:'',
            pass:'',
            allow: 0,
            error: false,
            submit:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const log = this.state.login;
        const pass = this.state.pass;
        switch(e.target.name){
            case('login'):
            this.setState({ 
                login:e.target.value,
            });
            break;
            case('pass'):
            this.setState({
                pass:e.target.value
            });
            break;
        }
        if(log ==''|| pass =='')
            this.setState({
                allow: 0,
                error: true 
            })
        if(log.length<2 || pass.length<3)
            this.setState({
                allow: 0, 
                error: true,         
            })
        else this.setState({ 
            allow: 1,
            error: false,
            submit:"submit succes"   
        })
        return       
    }
    handleSubmit(e){
        console.log(this.state.submit)
        e.preventDefault(); 
        
    }
    render(){
        
        return(
            <div><h2>Task 2</h2>
                <label>Enter login</label>
                <input type='text' name='login' onChange={this.handleChange} className={this.state.error? myStyle.errors:myStyle.border}/>
                <br/>
                <label>Enter password</label>
                <input type='password' name='pass' onChange={this.handleChange} className={this.state.error? myStyle.errors:myStyle.border}/>
                <br/>
                {this.state.allow ==1?
                    <button type='button'value='Submit' className={myStyle.btn} onClick={this.handleSubmit}>Submit</button>:
                    <button type='button' disabled value='Submit'>Submit</button>
                }
            </div>
        )
    }
}
export default TestModule;