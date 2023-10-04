import './App.css';
import ProductsList from './components/ProductsList.jsx';
import ProductCart from './components/ProductCart.jsx';
import ProductInputsForm from './components/ProductInputsForm.jsx';
import ProductCollection from './components/ProductCollection.jsx';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const [changeLevel, setChangeLevel] = useState(100);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [collectionProducts, setCollectionProducts] = useState([]);
  const [products, updateProducts] = useState([
    { id: 1, name: 'Oreo', price: 2, quantity: 15, image: '/images/oreo.png' },
    { id: 2, name: 'Coke', price: 4, quantity: 20, image: '/images/coke.png' },
    {
      id: 3,
      name: 'Snickers',
      price: 7,
      quantity: 13,
      image: '/images/snickers.png',
    },
    {
      id: 4,
      name: 'Potato Chip',
      price: 8,
      quantity: 22,
      image: '/images/potato_chip.png',
    },
    {
      id: 5,
      name: 'Mount Franklin',
      price: 15,
      quantity: 11,
      image: '/images/mount_franklin.png',
    },
    {
      id: 6,
      name: 'Ice Tea',
      price: 22,
      quantity: 19,
      image: '/images/ice_tea.png',
    },
    {
      id: 7,
      name: 'Noddles',
      price: 40,
      quantity: 17,
      image: '/images/noddles.png',
    },
  ]);

  console.log('Change level: ', changeLevel);

  return (
    <>
      <h1>Vending machine</h1>
      <div className='container'>
        <section>
          <ProductsList products={products} />
          <ProductCart
            total={total}
            selectedProducts={selectedProducts}
            setTotal={setTotal}
            setSelectedProducts={setSelectedProducts}
            products={products}
            updateProducts={updateProducts}
            setCollectionProducts={setCollectionProducts}
          />
        </section>
        <section>
          <ProductInputsForm
            setTotal={setTotal}
            setSelectedProducts={setSelectedProducts}
            products={products}
            updateProducts={updateProducts}
          />
          <ProductCollection
            collectionProducts={collectionProducts}
            setCollectionProducts={setCollectionProducts}
            total={total}
            setChangeLevel={setChangeLevel}
          />
        </section>
      </div>
    </>
  );
}

export default App;

// const ⵀⴻⵍⵍⵔ = 'ⵀⴻⵍⵍⵔ ⵡⵓⵔⵍⴷ';
// console.log(ⵀⴻⵍⵍⵔ);
