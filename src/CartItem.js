import React from 'react';

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={ { fontSize: 25 } }>{title}</div>
        <div style={ { color: '#777' } }>Rs {price} </div>
        <div style={ { color: '#777' } }>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
            <img alt="icrease" 
            className='action-icons' 
            src = "https://cdn-icons-png.flaticon.com/128/992/992651.png" 
            onClick={() => onIncreaseQuantity(product)}
            />
            <img alt="decrease" 
            className='action-icons' 
            src = "https://cdn-icons-png.flaticon.com/128/992/992683.png" 
            onClick={() => onDecreaseQuantity(product)}
            />
            <img 
            alt="delete" 
            className='action-icons' 
            src = "https://cdn-icons-png.flaticon.com/128/484/484662.png" 
            onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
  // increaseQuantity = () => {
  //   // this.state.qty += 1;
  //   // console.log('this', this.state);
  //   // setState form 1
  //   // this.setState({
  //   //   qty: this.state.qty + 1
  //   // }, () => {});

  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1
  //     }
  //   });
  // }

  // decreaseQuantity = () => {
  //   const { qty } = this.state;

  //   if (qty === 0) {
  //     return;
  //   }
  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1
  //     }
  //   });
  // }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
  
}

export default CartItem;