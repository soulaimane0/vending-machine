import PropTypes from 'prop-types';
import SelectedProductItem from './SelectedProductItem.jsx';

function ProductCart({
  total,
  selectedProducts,
  setTotal,
  setSelectedProducts,
  products,
  updateProducts,
  setCollectionProducts,
}) {
  const cancelOperation = () => {
    setTotal(0);
    setSelectedProducts([]);
    updateProducts(products);
  };

  const selectProducts = () => {
    setCollectionProducts(selectedProducts);
    setTotal(0);
    setSelectedProducts([]);
  };

  return (
    <>
      <div className='cart-container'>
        <div className='cart-labels'>
          <span>Your Cart &darr;</span>
          <span className='total-price'> TOTAL: {total} MAD</span>
        </div>

        {selectedProducts.length ? (
          <div className='cart-products'>
            {selectedProducts.map((product, index) => (
              <SelectedProductItem
                key={index}
                product={product}
                type='selection'
                setSelectedProducts={setSelectedProducts}
                setTotal={setTotal}
              />
            ))}
          </div>
        ) : (
          ''
        )}
        <div className='cart-actions'>
          <button className='btn-danger' onClick={() => cancelOperation()}>
            Cancel
          </button>
          <button className='btn-success' onClick={() => selectProducts()}>
            Done
          </button>
        </div>
      </div>
    </>
  );
}

ProductCart.propTypes = {
  total: PropTypes.number.isRequired,
  selectedProducts: PropTypes.array.isRequired,
  setTotal: PropTypes.func.isRequired,
  setSelectedProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  updateProducts: PropTypes.func.isRequired,
  setCollectionProducts: PropTypes.func.isRequired,
};

export default ProductCart;
