// pages/properties.js or pages/properties.tsx
import PropertyGrid from '../components/grid/PropertyGrid';

const PropertiesPage = () => {
  return (
    <div className="container mx-auto">
      <div className="filters-bar">
        {/* Place your filters here */}
      </div>
      <div className="properties-grid">
        <PropertyGrid />
      </div>
    </div>
  );
};

export default PropertiesPage;
