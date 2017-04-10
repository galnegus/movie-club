import React, {Component} from 'react';
import Comment from './comment.jsx';

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.callStoreCommentsDiv = this.callStoreCommentsDiv.bind(this);
  }

  // NOTE: If this is called inline (using fat arrow) there will be an infinite loop because react is stupid when it comes to refs.
  callStoreCommentsDiv(commentsDiv) {
    this.props.storeCommentsDiv(commentsDiv);
  }

  render() {
    const tempComments = [
      {
        author: 'AGoodBoy',
        date: '2013/05/12',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis porttitor ipsum. Pellentesque vel nulla ut nunc rhoncus accumsan. Nunc eleifend leo vitae nibh mattis, et porta elit consequat. Proin non arcu dui. Nulla a metus luctus, rhoncus odio in, commodo purus. Nulla consectetur venenatis pellentesque. Proin eu augue bibendum, dictum justo non, faucibus dui. Orci varius natoque penatibus et.',
        key: 0
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 1
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 2
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 3
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 4
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 5
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 6
      }
    ];

    return (
      <div className='comments' ref={this.callStoreCommentsDiv}>
        {tempComments.map((comment) => (<Comment commentData={comment} key={comment.key} />))}
      </div>
    );
  }
}
