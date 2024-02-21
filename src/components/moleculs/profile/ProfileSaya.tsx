import React, { useState } from 'react'

type Props = {}

const ProfileSaya = (props: Props) => {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        phoneNumber: '',
        occupation: '',
        gender: '',
        currentResidence: '',
        city: '',
        province: ''
      });

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
    
  return (
    <div className="max-w-lg mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-4">Profile Saya</h1>
    <div className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-2 w-full border-blue-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
        <input type="text" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Nomor HP</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Pekerjaan</label>
        <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
        <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="currentResidence" className="block text-sm font-medium text-gray-700">Domisili Saat Ini</label>
        <input type="text" id="currentResidence" name="currentResidence" value={formData.currentResidence} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">Kota / Kabupaten</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div>
        <label htmlFor="province" className="block text-sm font-medium text-gray-700">Provinsi</label>
        <input type="text" id="province" name="province" value={formData.province} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
    </div>
  </div>
  )
}

export default ProfileSaya