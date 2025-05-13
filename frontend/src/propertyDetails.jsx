// src/PropertyDetails.jsx
import React from 'react';

const properties = [
  {
    id: 1,
    title: "Modern 3-Bedroom Apartment",
    location: "East Legon, Accra",
    price: "GHS 450,000",
    image: "https://via.placeholder.com/300x200?text=Apartment+1"
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    location: "Cantonments, Accra",
    price: "GHS 1,200,000",
    image: "https://via.placeholder.com/300x200?text=Villa+2"
  },
  {
    id: 3,
    title: "Affordable 2-Bedroom Home",
    location: "Kasoa, Central Region",
    price: "GHS 200,000",
    image: "https://via.placeholder.com/300x200?text=Home+3"
  }
];

export default function PropertyDetails() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Available Properties</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {properties.map((property) => (
          <div key={property.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            width: '300px'
          }}>
            <img src={property.image} alt={property.title} style={{ width: '100%', borderRadius: '6px' }} />
            <h3>{property.title}</h3>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Price:</strong> {property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
