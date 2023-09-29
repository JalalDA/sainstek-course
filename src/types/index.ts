export interface Product {
    category?: string;
    condition?: string;
    createdAt?: string;
    deletedAt?: null | string;
    description?: string;
    merchantId?: string;
    name?: string;
    photo?: string;
    stock?: number;
    supplier?: string;
    updatedAt?: string;
    __v?: number;
    _id?: string;
    priceSale? : number;
    count? : number;
    size? : string;
    total? : number
  }


export interface UserData {
  about?: string;
  address?: string;
  balance?: number;
  cardId?: string;
  createdAt?: string;
  deletedAt?: string | null;
  email?: string;
  membership?: string;
  merchantId?: string;
  phone?: string;
  photo?: string;
  pin?: string;
  status?: string;
  updatedAt?: string;
  username?: string;
  gender? : string;
  __v?: number;
  _id?: string;
}

export interface Transaction {
  _id: string;
  amount: number;
  createdAt: string;
  deletedAt: string | null;
  merchantId: string;
  order_id: string;
  productId: Product[]; // Ini adalah array dari tipe Product
  status: string;
  transaction_type: string;
  updatedAt: string;
  user_id: string;
}

export interface OnlineClass {
  _id: string;
  title: string;
  description: string;
  instructor: string;
  startDate: Date;
  endDate: Date;
  schedule: string[]; // Jadwal kelas (misalnya: ["Senin 10:00 AM", "Rabu 2:00 PM"])
  price: number;
  maxStudents: number;
  enrolledStudents: number;
  durationInMinutes: number;
  videoURL: string; // URL video kelas online
  thumbnailURL: string; // URL gambar miniatur untuk kelas
  tags: string[]; // Tag atau kategori kelas (misalnya: ["Pemrograman", "Web Development"])
  category : string
}