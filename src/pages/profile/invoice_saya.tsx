import LayoutProfile from '@/components/moleculs/profile/LayoutProfile'
import CustomAxios from '@/config/axios'
import { InvoicesType } from '@/types'
import React, { useEffect, useState } from 'react'

type Props = {}

const InvoiceSaya = (props: Props) => {
  const [invoices, setInvoices] = useState<InvoicesType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getInvoices = async () => {
    setIsLoading(true)
    try {
      const { data } = await CustomAxios.get(`/transaction/user`)
      setInvoices(data?.data)
    } catch (error) {
      console.log({ error });

    }
    setIsLoading(false)
  }

  useEffect(() => {
    getInvoices();
  }, [])
  return (
    <LayoutProfile>
      <div className="font-bold mb-4">Invoice Saya</div>
      <table className="min-w-full dark:bg-[#333] divide-y divide-gray-200 overflow-scroll">
        <thead className="bg-gray-50 dark:bg-[#333]">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              Nama
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nominal
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            
            invoices.map((invoice, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap dark:bg-[#333]">{invoice.name}</td>
                <td className="px-6 py-4 whitespace-nowrap dark:bg-[#333]">{invoice.order_id}</td>
                <td className="px-6 py-4 whitespace-nowrap dark:bg-[#333]">{invoice.price_down}</td>
                <td className="px-6 py-4 whitespace-nowrap dark:bg-[#333]">{invoice.status}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </LayoutProfile>
  )
}

export default InvoiceSaya