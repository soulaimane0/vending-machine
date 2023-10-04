import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductInputsForm = ({
  setTotal,
  setSelectedProducts,
  products,
  updateProducts,
}) => {
  const [inputValues, setInputValues] = useState({
    money: '',
    reference: '',
    quantity: '1',
  });
  const [validationMsg, setValidationMsg] = useState('');

  const selectProduct = (e) => {
    const {
      target: { name, value },
    } = e;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const clearInputs = () => {
    setInputValues({
      money: '',
      reference: '',
      quantity: '1',
    });
    setValidationMsg();
  };

  const validateProduct = () => {
    const { money, reference, quantity } = inputValues;
    const selectedProduct = products.find(
      (product) => product.id === Number(reference)
    );

    const totalPrice = selectedProduct.price * Number(quantity);
    if (Number(money) < totalPrice) {
      setValidationMsg('Not enough money');
      console.log(validationMsg);
      console.log(validationMsg !== '');
      return false;
    } else if (selectedProduct.quantity < Number(quantity)) {
      setValidationMsg('Not enough quantity');
      return false;
    }

    setValidationMsg('');
    const availableQuantity = selectedProduct.quantity - Number(quantity);

    setSelectedProducts((prev) => [
      ...prev,
      { ...selectedProduct, quantity: Number(quantity), price: totalPrice },
    ]);

    updateProducts((prev) => [
      ...prev.map((product) => {
        if (product.id === Number(reference)) {
          return { ...product, quantity: availableQuantity };
        }
        return product;
      }),
    ]);
    setTotal((prev) => prev + totalPrice);
    clearInputs();

    if (Number(money) > totalPrice) {
      const rest = Number(money) - totalPrice;
      setInputValues((prev) => ({ ...prev, money: rest }));
    }
  };

  const allValuesNotEmpty = Object.values(inputValues).every(
    (value) => value !== ''
  );

  return (
    <div className='product-form'>
      <div className='input-group'>
        <label htmlFor='money'>Insert your money: </label>
        <input
          type='number'
          id='money'
          min='1'
          value={inputValues.money}
          name='money'
          onChange={(e) => selectProduct(e)}
        />
      </div>
      <div className='ref-qty'>
        <div className='input-group'>
          <label htmlFor='ref'>Reference: </label>
          <input
            type='number'
            id='ref'
            value={inputValues.reference}
            name='reference'
            onChange={(e) => selectProduct(e)}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='quantity'>Quantity: </label>
          <input
            type='number'
            id='quantity'
            min='1'
            value={inputValues.quantity}
            name='quantity'
            onChange={(e) => selectProduct(e)}
          />
        </div>
      </div>
      {allValuesNotEmpty && (
        <div className='form-action'>
          <button className='btn-danger' onClick={() => clearInputs()}>
            Cancel
          </button>
          <button className='btn-success' onClick={() => validateProduct()}>
            Validate
          </button>
        </div>
      )}
      {validationMsg && <span className='validation-msg'>{validationMsg}</span>}
    </div>
  );
};

ProductInputsForm.propTypes = {
  setTotal: PropTypes.func.isRequired,
  setSelectedProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  updateProducts: PropTypes.func.isRequired,
};

export default ProductInputsForm;
