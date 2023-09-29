import Button from '@/components/atoms/Button';
import React from 'react';

interface CoolTableProps {
  headers: string[];
  data?: any[];
  onClick:(e:string )=>void;
}

const CoolTable: React.FC<CoolTableProps> = ({ headers, data, onClick }) => {
  return (
    <div className="overflow-x-auto w-full mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="py-3 px-6 text-left text-sm font-extrabold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className='py-4 px-6 text-sm'>
                {rowIndex + 1}
              </td>
              <td className='py-4 px-6 text-sm'>
                {row?.username}
              </td>
              <td className='py-4 px-6 text-sm'>
                {row?.address}
              </td>
              <td className='py-4 px-6 text-sm'>
                {row?.phoneNumber}
              </td>
              <td className='py-4 px-6 text-sm'>
                {row?.status}
              </td>
              <td className='py-4 px-6 text-sm'>
                {row?.membership}
              </td>
              <td className='py-4 px-6 text-sm'>
                <Button onClick={()=>{
                  // @ts-ignore
                  onClick(row?._id)
                }} title={"EDIT"}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoolTable;