import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile phone',
      qty: 1,
      img: ''

    }
  }

// testing () {
//   const promise = new Promise ((resolve, reject) => {
//     setTimeout(()=> resolve('done'),5000 );
//   } )
//   promise.then(() => {
//     this.state({qty: this.state.qty + 10});
//     this.state({qty: this.state.qty + 10});
//     this.state({qty: this.state.qty + 10});
//     console.log('state', this.state);
// })
// }

increaseQuantity = () => {
  //this.state.qty += 1;   (this method wont' work since it doesn't notifies react that change is made);
  //set state method 1 - Shallow Merging//
    // this.setState( {
    //   qty: this.state.qty + 1
    // })

    //setState form 2 -   //
    this.setState((prevState) =>{
      return {
        qty : prevState.qty+1 
      }
    })
}

// decreaseQuantity = () => {
//   this.setState( { qty: this.state.qty -1 } )
// }

decreaseQuantity = () => {
  this.setState((prevState) => {
    return {
      qty: prevState.qty -1
    }
  })
}

deleteItem = () => {
  this.setState({ qty: this.state.qty = 0 })
}

  render () {
    const {price, title, qty} = this.state;   //object destructuring - give me item from object here //
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{this.state.title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="icrease" 
            className='action-icons' 
            src = "https://cdn-icons-png.flaticon.com/128/992/992651.png" 
            onClick={this.increaseQuantity}
            />
            <img alt="decrease" 
            className='action-icons' 
            src = "https://cdn-icons-png.flaticon.com/128/992/992683.png" 
            onClick={this.decreaseQuantity}
            />
            <img 
            alt="delete" 
            className='action-icons' 
            src = "https://cdn-icons-png.flaticon.com/128/484/484662.png" 
            onClick={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;

