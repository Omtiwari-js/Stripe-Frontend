
import axios from 'axios';

const ProductCard = ({ product }) => {
    const handleBuyNow = async () => {
        try {
            const response = await axios.post(' https://stripe-backend-3qm2.onrender.com/create-checkout-session', {
                product,
            });
            
            if (response.data.url) {
                window.location.href = response.data.url;
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-80 transition hover:scale-105">
            <img src={product.image} alt={product.name} className='w-64 h-64 object-cover rounded-xl mx-auto' />
            <h2 className='text-xl font-semibold mt-4 text-center'>{product.name}</h2>
            <p className='text-gray-600 mt-2 text-center'>${product.price}</p>

            <button 
                onClick={handleBuyNow} 
                className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-800 transition w-full'
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;