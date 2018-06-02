import * as  React from 'react';
//import {CustomProps} from '../modules/Props'


class PaginationList extends React.Component<any,any>
{
    constructor(props:any)
    {
        super(props)
        
        this.state ={listofIndex:[],pageIndex:1}

        this.handlePaginationClick = this.handlePaginationClick.bind(this);
    }

    handlePaginationClick(event:any)
    {
        event.preventDefault();
        this.setState({pageIndex:Number(event.target.innerHTML)})
        this.props.actions.GetIndex(Number(event.target.innerHTML),this.props.Grid.pageSize,this.props.Grid.count);
    } 

    render ():JSX.Element{
        const numberOfpages = this.props.Grid.listofIndex.map((page:any)=><li key={page} className="page-link" onClick={this.handlePaginationClick}>{page}</li>)
        return <nav aria-label="Page navigation example">
                <ul className="pagination">           
                    {numberOfpages}       
                </ul>
                </nav>   
    }
}


export default PaginationList;