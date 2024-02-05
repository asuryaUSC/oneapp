import { FaMapMarkerAlt } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full rounded-t-lg" src={`/mocks/mock${property.id}.jpeg`} alt="Property" style={{ aspectRatio: '1 / 1' }} />
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-sm rounded-md px-2 py-1">
          ${property.rent}/month
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-xl mb-1">{property.address}</div>
        <div className="text-gray-700">{property.leasingYear}</div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-500" />
            <span className="ml-1 text-sm text-gray-600">{property.distanceFromCampus.toFixed(2)} mi</span>
          </div>
          <div className="text-gray-900 text-sm font-semibold">{property.beds}B{property.baths}B</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
