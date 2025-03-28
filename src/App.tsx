import React from 'react';
import { Home, MapPin, Bed, Bath, Square, Phone, Mail } from 'lucide-react';

// Featured properties data
const properties = [
  {
    id: 1,
    title: "Villa",
    location: "Saligramam",
    price: "3 Crores",
    beds: 5,
    baths: 6,
    sqft: "6,200",
    video: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    location: "Anna nagar",
    price: "2.9 Crores",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    video: "https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ecd2a5b8&profile_id=164&oauth2_token_id=57447761",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: 3,
    title: "Modern Downtown Penthouse",
    location: "Anna nagar",
    price: "2.9 Crores",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    video: "https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ecd2a5b8&profile_id=164&oauth2_token_id=57447761",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1600&q=80"
    ]
  },
  {
    id: 4,
    title: "Modern Downtown Penthouse",
    location: "Anna nagar",
    price: "2.9 Crores",
    beds: 3,
    baths: 3.5,
    sqft: "3,100",
    video: "https://vimeo.com/1070200472",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1600&q=80"
    ]
  }
];

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-[400px]">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          poster={property.images[0]}
        >
          <source src={property.video} type="video/mp4" />
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{property.title}</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <p className="text-3xl font-bold text-blue-600 mt-4">{property.price}</p>
        <div className="flex justify-between mt-4 text-gray-600">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 mr-2" />
            <span>{property.sqft} sq.ft</span>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-4">Photo Gallery</h4>
        <div className="grid grid-cols-3 gap-4">
          {property.images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Property ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Home className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Leblesy</h1>
            </div>
            <div className="flex space-x-6">
              <a href="#contact" className="flex items-center text-gray-600 hover:text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                <span>8825494280</span>
              </a>
              <a href="mailto:Leblesy@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Leblesy</h3>
              <p className="text-gray-400">
                Discover extraordinary properties in the most desirable locations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Chennai<br />
                Tamilnadu<br />
                8825494280<br />
                Leblesy@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
               
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Leblesy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;