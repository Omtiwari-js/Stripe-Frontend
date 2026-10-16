export default function Cancel() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Payment Cancelled</h1>
      <p className='text-gray-600 text-lg'>Your payment was not successful. Please try again.</p>
    </div>
  );
}