import { Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

const App = () => {
  const products = [
    {
      name: "React T-shirt",
      image: "https://triprindia.com/cdn/shop/files/TBGRNOS-D2111.jpg?v=1775568728",
      price: 20,
    },
    {
      name: "Node.js Hoodie",
      image: "https://images.meesho.com/images/products/1040080255/eny7p_512.webp?width=512",
      price: 40,
    },
    {
      name: "Fullstack mug",
      image: "https://images.meesho.com/images/products/783342915/hklpi_512.webp?width=512",
      price: 10,
    },
  ];

  return (
    <Routes>
      <Route path='/' element={
        <div className="min-h-screen bg-gray-200 flex flex-col items-center py-10">
          <h1 className='text-4xl font-bold text-gray-800 mb-10'>Stripe Store</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              products.map((product, index) =>(
                 <ProductCard key={index} product={product} />
              ))
            }
          </div>
        </div>
       } />  
       <Route path='/success' element={<Success />} />
       <Route path='/cancel' element={<Cancel /> } />
    </Routes>
  );
};

export default App;