import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import { useProperties } from "../../context/PropertyContext.client";
// Assuming you're using Next.js's Link for navigation
import Link from "next/link";

const PropertyCard = ({ property }: any) => {
  const { setSelectedProperty } = useProperties();

  return (
    <Link href="/detailed-property" passHref>
      <div
        className="max-w-sm rounded-lg overflow-hidden bg-white"
        onClick={() => setSelectedProperty(property)}
      >
        <div className="max-w-sm rounded-lg overflow-hidden  bg-white">
          <div className="relative">
            <img
              className="w-full rounded-2xl"
              src={`/mocks/mock${property.id}.jpeg`}
              alt="Property"
              style={{ aspectRatio: "1 / 1" }}
            />
            <div className="absolute top-2 left-2 bg-[#1A202C] text-white text-sm rounded-md px-2 py-1">
              ${property.rent}/month
            </div>
          </div>
          <div className="p-1 grid grid-flow-col">
            <div className="font-semibold text-lg mb-1">{property.address}</div>

            <div className="flex flex-col justify-between items-center mt-2">
              <div className="text-gray-700">{property.leasingYear}</div>
              <div className="flex gap-1 items-center">
                <FaMapMarkerAlt className="text-gray-500" />
                <span className="ml-1 text-sm text-gray-600">
                  {property.distanceFromCampus.toFixed(2)} mi
                </span>
                <div className="text-gray-900 text-sm font-semibold">
                  {property.beds}B{property.baths}B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
