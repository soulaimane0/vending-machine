import PropsTypes from 'prop-types';

export default function ProductItem({ product }) {
  return (
    <div className='product-item'>
      <img src={product.image} className='product-img' />
      <h4>{product.name}</h4>
      <small>
        {' '}
        <em>{product.price} MAD</em>{' '}
      </small>
      <div className='product-qty'>
        <span>{product.id}</span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropsTypes.object.isRequired,
};
