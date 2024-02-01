import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const storedCart = JSON.parse(localStorage.getItem('cart'));

  const [cartState, setCartState] = useState(storedCart || defaultCartState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  const addItemToCartHandler = (item) => {
    setCartState((prevCartState) => {
      const isItemInCart = prevCartState.items.some(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        return prevCartState;
      } else {
        return {
          items: [...prevCartState.items, item],
          totalAmount:
            prevCartState.totalAmount + item.saleInfo.listPrice.amount,
        };
      }
    });
  };

  const removeItemToCartHandler = (id) => {
    setCartState((prevCartState) => {
      const updatedItems = prevCartState.items.filter((item) => item.id !== id);

      const removedItem = prevCartState.items.find((item) => item.id === id);

      return {
        items: updatedItems,
        totalAmount:
          prevCartState.totalAmount - removedItem.saleInfo.listPrice.amount,
      };
    });
  };

  const clearCartHandler = () => {
    setCartState(defaultCartState);
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: Math.round(cartState.totalAmount),
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
