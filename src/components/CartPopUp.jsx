import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../hooks/CartContext';
import { ThemeContext } from '../hooks/themeContext';

const CartPopUp = ({ isOpen, closeCart }) => {
  const { items, totalAmount, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItemToCart = (id) => {
    removeItem(id);
  };

  const cartStyle = {
    // todo: animation does not work
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.9s ease-in-out',
  };
  const { darkMode } = useContext(ThemeContext);

  const bgColorClass = darkMode ? 'bg-dark' : 'bg-light';
  const textColorClass = darkMode ? 'text-light' : 'text-dark';

  return (
    <div
      className={`position-fixed shadow end-0 ${bgColorClass}  ${
        isOpen ? '' : 'd-none'
      }`}
      style={{ width: '33rem', ...cartStyle, zIndex: 1050 }}
    >
      <div
        className='container my-4 p-4  mt-0bg-light border'
        style={{ width: '30rem', overflowY: 'auto' }}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className={`text-center mt-3 ${textColorClass}`}>
            {' '}
            My Book Cart
          </h5>
          <button className='btn btn-danger' onClick={clearCart}>
            Clear
          </button>
        </div>
        <hr />

        <ul className={`${textColorClass}`}>
          {items.map((item, index) => (
            <li
              key={index}
              className='d-flex justify-content-between align-items-center'
            >
              {item.volumeInfo.title} - {item.volumeInfo.authors}{' '}
              <button
                className='btn btn-warning m-1 py-1'
                onClick={() => {
                  handleRemoveItemToCart(item.id);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <div className={`${textColorClass}`}>Total: {totalAmount}</div>

        <div className='d-flex justify-content-between mt-3'>
          <Link to='/checkout' className='btn btn-success'>
            CHECKOUT
          </Link>

          <button className='btn btn-secondary' onClick={closeCart}>
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
