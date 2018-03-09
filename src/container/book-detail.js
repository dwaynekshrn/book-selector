import React, {Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <div><p>Select a book to get started</p></div>
        }
        return(
            <div>
              <h4>Details For:</h4>
              <p>Title: {this.props.book.title}</p>
              <p>Pages: {this.props.book.pages}</p>
            </div>
        )
    }
}

function mapStateToProps({activeBook}){
return { book: activeBook}
}

export default connect(mapStateToProps)(BookDetail);