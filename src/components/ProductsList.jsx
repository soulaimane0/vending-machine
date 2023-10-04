import PropTypes from 'prop-types';
import ProductItem from './ProductItem.jsx';

function ProductsList({ products }) {
  return (
    <>
      <div className='products-container'>
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsList;
