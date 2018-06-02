import * as React from 'react';
import * as User from '../modules/User'; 

class Form extends React.Component <any , User.UserState> {
    constructor(props:any) {
        super(props);
        this.state = { id: 0,name: '',birthday: '',email: '',
                        error: {id: 0,name: '',birthday: '',email: ''},IsValid: true};

        this.handleName = this.handleName.bind(this);
        this.handleBday = this.handleBday.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleName(event: any):void {
        this.setState({ name: event.target.value });
    }

    public handleBday(event:any):void {

        this.setState({ birthday: event.target.value });
    }

    public handleEmail(event:any):void {

        this.setState({ email: event.target.value });
    }

    public formValidation():boolean {
        let errors = {id:0,name:'',birthday:'',email:''};

        if (this.state.name.length == 0) {
            alert('Name is required'); this.setState({ IsValid: false });
            errors.name = 'Name is required !';
        }

        if (this.state.email.length == 0) {
            alert('E-mail is required'); this.setState({ IsValid: false });
            errors.email = 'Email is required !';
        }

        if (typeof this.state.email !== 'undefined') {
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 
                && this.state.email.indexOf('@@') == -1 
                && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                this.setState({ IsValid: false });
                errors.email = 'Email is not valid!';
            }
        }

        if (this.state.birthday.length == 0) {
            alert('Birthday is required');
            this.setState({ IsValid: false });
            errors.birthday = 'Birthday is required !';
        }

        this.setState({ error: errors });

        return this.state.IsValid;
    }

   public handleSubmit(event:any) {
        event.preventDefault();

        if (this.formValidation()) {
            let user = {id:0,name:'',birthday:'',email:''};
            user.name = this.state.name;
            user.birthday = this.state.birthday;
            user.email = this.state.email;
            user.id = 0;
            this.props.api.insertUser(user);

            this.setState({ id:0,name:'',birthday:'',email:'',error:{id:0,name:'',birthday:'',email:''},IsValid:true});
        }
    }

    public render():JSX.Element {
        
        return <form className="col-9" onSubmit={this.handleSubmit}>
            <div className="form-group">
                Name*  <input className="col-3 form-control" type="text" value={this.state.name} onChange={this.handleName} placeholder="Name" required />
                
                <span style={{ color: 'red' }}>{this.state.error.name}</span>
                <br />
            </div>
            <div className="form-group">
                Birthday*   
                <input className="col-3 form-control" type="date" value={this.state.birthday} onChange={this.handleBday} />
                <span style={{ color: 'red' }}>{this.state.error.birthday}</span>
                <br />
            </div>
            <div className="form-group">
                E-mail* <input className="col-3 form-control" type="email" value={this.state.email} onChange={this.handleEmail} placeholder="Example: magdy.dawood@its.ws" required />
                <span style={{ color: 'red' }}>{this.state.error.email}</span>
                <br />
            </div>
            <div className="form-group">
                <input type="submit" className="col-3 form-control btn btn-primary" required />
            </div>
        </form>;
    }
}
export default Form;

