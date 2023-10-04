import ProductItem from './SelectedProductItem.jsx';
import PropTypes from 'prop-types';

const ProductCollection = ({
  collectionProducts,
  setCollectionProducts,
  setChangeLevel,
  total,
}) => {
  const collectProducts = () => {
    setCollectionProducts([]);
    setChangeLevel((prev) => prev + total);
    alert('Thank you for using our vending machine! enjoy your meal!');
  };

  if (collectionProducts.length) {
    return (
      <>
        <h4 className='collect-header'>Please collect your products: </h4>

        <div className='selected-products'>
          {collectionProducts.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>

        <div className='collect-btn'>
          <button className='btn-success' onClick={() => collectProducts()}>
            Collect
          </button>
        </div>
      </>
    );
  }
};

ProductCollection.propTypes = {
  collectionProducts: PropTypes.array.isRequired,
  setCollectionProducts: PropTypes.func.isRequired,
  setChangeLevel: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
export default ProductCollection;
