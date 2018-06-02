import * as React from 'react';

export const Grid = (props:any)=>{
        let pageSize = props.Grid.pageSize;
        let pageNumber = props.Grid.pageIndex;

        let startIndex = (pageNumber - 1) * pageSize;
        let endIndex = startIndex + pageSize;

        const dataPage =props.data.filter((a:any,index:number)=>index >= startIndex && [index] < endIndex);// props.data.filter((a) => a.userId > startIndex && a.userId <= endIndex);

        return <table className="table table-bordered">
            <GridHeader />
            <tbody>
                {dataPage.map((user:any) => <GridRow id={user.userId} key={user.userId} actions={props.actions} isEdit={false} api={props.api} {...user} />)}
            </tbody>
        </table>
}

export const GridHeader = ()=> {
        return <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Birthday</th>
                <th>E-mail</th>
                <th>Action</th>
            </tr>
        </thead>    
}


export class GridRow extends React.Component <any,any> {
    constructor(props:any) {
        super(props)

        this.state = { isEdit: false, editobj: 0,show:false,confirmed:false }
    }

    handleEditdata(obj:any, e:any) {
        this.setState({ isEdit: true });     
    }

    handleDeletedata(obj:any, e:any) {
        
        this.setState({ show: false,confirmed: true });
        //if (this.state.confirmed) {
            this.props.api.deleteUser(obj);            
        //}
    }

    render():JSX.Element {
        return this.state.isEdit === true ? <EditRowGrid obj={this.props} id={this.props.userId} api={this.props.api} isEdit={this.state.isEdit} actions={this.props.actions} />  : <tr id={this.props.userId} key={this.props.userId}>
            <td>{this.props.userId}</td>
            <td>{this.props.name}</td>
            <td>{this.props.birthday}</td>
            <td>{this.props.email}</td>
            <td>
                <button className='btn btn-info' id={this.props.userId} onClick={this.handleEditdata.bind(this, this.props)}>
                    <span className="glyphicon glyphicon-edit"></span> Edit
                                                                     </button>
                <button className='btn btn-danger'  onClick={this.handleDeletedata.bind(this,this.props.userId)}>
                    <span className='glyphicon glyphicon-remove'></span> Remove
                                                                    </button>
                    {/* <SweetAlert
                    show={this.state.show}
                    title="Remove"
                    text="Do you want to remove this user ?"
                    onConfirm={()=>{this.setState({ show: false,confirmed: true }); this.props.api.deleteUser(this.props.userId);}} 
                    
                    />*/}
            </td>
        </tr>
    }
}


export class EditRowGrid extends React.Component <any,any> {
    constructor(props:any) {
        super(props)

        this.state = { objEidt: this.props.obj, isUpdated: false,isEdit:this.props.isEdit }

        this.handleName = this.handleName.bind(this);
        this.handleBday = this.handleBday.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleName(event:any) {
        let state = { ...this.state.objEidt };
        state.name = event.target.value;
        this.setState({ objEidt: state });

    }

    handleBday(event:any) {
        let state = { ...this.state.objEidt };
        state.birthday = event.target.value;
        this.setState({ objEidt: state });
    }

    handleEmail(event:any) {
        let state = { ...this.state.objEidt };
        state.email = event.target.value;
        this.setState({ objEidt: state });
    }

    handleEditdata(obj:any,e:any) {
        this.props.api.updateUser(obj);

        this.setState({ isUpdated: true,isEdit:false });
    }

    handleCancle(obj:any,e:any){
        this.setState({ isUpdated: true,isEdit:false });
    }

    render() {
        return this.state.isUpdated === true ? <GridRow id={this.state.objEidt.userId} actions={this.props.api.actions} api={this.props.api.api} isEdit={this.state.isEdit} {...this.state.objEidt} /> : <tr id={this.state.objEidt.userId} key={this.state.objEidt.userId}>
            <td>{this.state.objEidt.id}</td>
            <td><input className="col-4 form-control" type='text' value={this.state.objEidt["name"]} onChange={this.handleName} placeholder="Name" required /></td>
            <td><input className="col-4 form-control" type='date' value={this.state.objEidt["birthday"]} onChange={this.handleBday} /></td>
            <td><input className="col-4 form-control" type='email' value={this.state.objEidt["email"]} onChange={this.handleEmail} placeholder="Example: magdy.dawood@its.ws" required /></td>
            <td>
                <button className='btn btn-info' id={this.state.objEidt.userId} onClick={this.handleEditdata.bind(this, this.state.objEidt)}>
                    <span className="glyphicon glyphicon-edit"></span> Update
                            </button>
                <button className='btn btn-danger' id={this.state.objEidt.userId} onClick={this.handleCancle.bind(this,this.state.objEidt)}>
                    <span className='glyphicon glyphicon-remove'></span> Cancel
                            </button>
            </td>
        </tr>
    }
}


export default Grid;