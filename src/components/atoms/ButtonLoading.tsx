import React from 'react';
import { Transition } from '@headlessui/react';

interface ButtonLoadingProps {
  isLoading: boolean;
  onClick: () => void;
  buttonText: string;
}

const ButtonLoading: React.FC<ButtonLoadingProps> = ({
  isLoading,
  onClick,
  buttonText,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${
        isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'
      } bg-indigo-500 text-white px-4 py-2 rounded-md transition-opacity`}
      disabled={isLoading}
    >
      <span className="flex items-center">
        <Transition
          show={isLoading}
          enter="transition ease-in-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <svg
            className="animate-spin h-5 w-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0117.373 6H12v11.373zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4z"
            ></path>
          </svg>
        </Transition>
        {isLoading ? 'Loading...' : buttonText}
      </span>
    </button>
  );
};

export default ButtonLoading;
