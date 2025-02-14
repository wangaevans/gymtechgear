import { 
  Heart 
} from 'lucide-react';

export default function NewArrivals(){
  const newArrivals = [
    { id: 1, name: 'Pro Performance Tee', price: 49.99, image: '/img/tee.jpg' },
    { id: 2, name: 'Elite Training Shorts', price: 59.99, image: '/img/short.jpg' },
    { id: 3, name: 'Power Compression Set', price: 89.99, image: '/img/compression.jpg' },
    { id: 4, name: 'Flex Running Jacket', price: 79.99, image: '/img/jacket.jpg' }
  ];

    return(
        <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}