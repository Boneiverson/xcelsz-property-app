import { useEffect, useState } from 'react';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((p) => (
        <div key={p.id} className="border rounded-lg p-4 shadow-md bg-white">
          <img src={p.image_url} alt={p.title} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mt-2">{p.title}</h2>
          <p className="text-gray-600">{p.location}</p>
          <p className="text-green-600 font-bold">${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
