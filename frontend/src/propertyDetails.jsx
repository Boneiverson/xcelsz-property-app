import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/properties/${id}`)
      .then(res => res.json())
      .then(data => setProperty(data));
  }, [id]);

  if (!property) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img src={property.image_url} className="w-full h-64 object-cover rounded" alt={property.title} />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-bold text-xl">${property.price}</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}

export default PropertyDetails;
