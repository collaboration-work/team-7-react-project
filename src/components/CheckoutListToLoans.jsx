import { useContext } from 'react';
import { LoanCartContext } from '../context/loanCartContext';

const CheckoutListToLoans = () => {
  const { loanedItems, removeLoanedItem, clearLoanCart } =
    useContext(LoanCartContext);

  return (
    <div className='mx-auto  p-2' style={{ maxWidth: '35rem' }}>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h3>To loan</h3>
        {loanedItems.length !== 0 && (
          <button className='btn btn-danger' onClick={clearLoanCart}>
            Clear Loan Cart
          </button>
        )}
      </div>
      {loanedItems.length === 0 && <div>No books to loan... ☹️ </div>}
      <ol className='list-group list-group-numbered mb-5'>
        {loanedItems.map((item) => (
          <li
            key={item.id}
            className='list-group-item d-flex justify-content-between align-items-center  pe-1'
          >
            <span className='w-100 ps-2 d-flex justify-content-between align-items-center'>
              <span>{item.volumeInfo.title}</span>

              <button
                className='btn btn-warning m-1 py-1'
                onClick={() => {
                  removeLoanedItem(item.id);
                }}
              >
                X
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default CheckoutListToLoans;
