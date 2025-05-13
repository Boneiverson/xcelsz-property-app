import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);
  <Link to={`/property/${p.id}`} key={p.id}>
  <div className="border p-4 rounded shadow bg-white">
    <img src={p.image_url} className="w-full h-48 object-cover" />
    <h2 className="text-xl font-bold mt-2">{p.title}</h2>
    <p className="text-gray-600">{p.location}</p>
    <p className="text-green-600 font-bold">${p.price}</p>
  </div>
</Link>


  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.length === 0 ? (
        <p>No properties yet.</p>
      ) : (
        properties.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow bg-white">
            <img src={p.image_url} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-bold mt-2">{p.title}</h2>
            <p className="text-gray-600">{p.location}</p>
            <p className="text-green-600 font-bold">${p.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
