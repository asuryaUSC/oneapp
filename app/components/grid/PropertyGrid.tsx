// Import your properties data
import properties from '/properties.json'; // Correct the path to your actual file
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
