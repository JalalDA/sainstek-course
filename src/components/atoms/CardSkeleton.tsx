import React from 'react'

type Props = {}

const CardSkeleton: React.FC = () => {
    return (
      <div className="border-b border-gray-200 py-4 flex">
        <div className="flex items-center justify-center h-16 w-16 bg-gray-200 rounded-full"></div>
        <div className="ml-4 flex-1">
          <div className="h-4 bg-gray-200 w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 w-2/4"></div>
        </div>
      </div>
    );
  };
  
export default CardSkeleton