import PropsTypes from 'prop-types';

export default function ProductItem({
  product,
  type,
  setSelectedProducts,
  setTotal,
}) {
  const unSelectProduct = (id) => {
    setSelectedProducts((prev) => [
      ...prev.filter((product) => product.id !== id),
    ]);
    setTotal((prev) => prev - product.price);
  };

  return (
    <div className='selected-product-item'>
      <img src={product.image} className='product-img' />
      <div className='middle-div'>
        <h4>{product.name}</h4>
        <div className='selected-product-qty-price'>
          <div className='product-qty'>
            <span>QTY: {product.quantity}</span>
          </div>
          <div className='product-price'>
            <span>{product.price} MAD</span>
          </div>
        </div>
      </div>
      {type === 'selection' && (
        <button
          className='unselect-product'
          onClick={() => unSelectProduct(product.id)}
        >
          X
        </button>
      )}
    </div>
  );
}

ProductItem.propTypes = {
  product: PropsTypes.object.isRequired,
  type: PropsTypes.string.isRequired,
  setSelectedProducts: PropsTypes.func.isRequired,
  setTotal: PropsTypes.func.isRequired,
};
