import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'
import { connect } from 'react-redux';

// @firebaseConnect([
//   'comments' // corresponds to 'comments' root on firebase
// ])

// @connect(
//   ({ firebase }) => ({
//     // todos prop set to firebase data in redux under '/todos'
//     comments: dataToJS(firebase, 'comments'),
//   })
// )

class Test extends Component{
	render(){
		console.dir(this.props.firebase);
		const { comments } = this.props;
		
	    const todosList = !isLoaded(comments)
	      ? 'Loading'
	      : isEmpty(comments)
	        ? 'Todo list is empty'
	        : Object.keys(comments).map(
	            (key) => (
	            	<div key = {comments[key].text}>
						<div> author: {comments[key].author} </div>
						<div> text: {comments[key].text} </div>
					</div>
	            )
	          )

		return(
			<div>
				{todosList}
			</div>
		);
	}
}

const wrappedTodos = firebaseConnect([
  '/comments'
])(Test)

export default connect(
  ({firebase}) => ({
    comments: dataToJS(firebase, 'comments'),
  })
)(wrappedTodos)