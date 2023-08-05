import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantiy = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
        products
    })
  }

    handleDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id);
      this.setState({
        products:items,
      })
    }
    getCartCount = () => {
      const {products} = this.state;
      let count = 0;
      products.forEach((product) => {
        count += product.qty;
      })
      return count;
    }
    getCartTotal = () => {
      const {products} = this.state;

      let cartTotal = 0;

      products.map((product) => {
        cartTotal = cartTotal + product.qty * product.price
      })
      return cartTotal;
    }

    render() {
      const {products} = this.state;
        return (
          <div className="App">
            <Navbar count={this.getCartCount()}/>
            <Cart 
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantiy}
            onDeleteProduct={this.handleDeleteProduct}
             />
             <div style={{fontSize:20, padding:10}}>TOTAL: {this.getCartTotal()}</div>
          </div>
        );
      }
  }
export default App; 