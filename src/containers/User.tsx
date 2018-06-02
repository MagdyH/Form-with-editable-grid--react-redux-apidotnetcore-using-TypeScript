import * as  React from 'react';
import Form from '../components/Form';
import Grid from '../components/Grid';
import  PaginationList from '../components/PaginationList';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/formActions';
import * as API from '../API/UserAPI';



const User = (props:any):JSX.Element=>
{
    return <div className="container">
                    <Form data={props.User} actions={props.actions} api={props.API} /> { /*data={this.state.appdate} onDataChange={this.handleDataChange}*/ }
                    <Grid data={props.User} actions={props.actions} api={props.API} Grid={props.Grid}/>
                    <PaginationList data={props.User} actions={props.actions} api={props.API} Grid={props.Grid}/>
                </div>                
}


function mapStateToProps (state:any, ownProps:any){
  return{
      User : state.User,
      Grid: state.Grid

  };
}
  
function mapDispatcherToProps (dispatch:any){
  return{
      actions:bindActionCreators(userActions,dispatch),
      API:bindActionCreators(API,dispatch)

  };
}

export default connect(mapStateToProps,mapDispatcherToProps)(User);
