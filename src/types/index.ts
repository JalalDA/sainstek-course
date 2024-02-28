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
  priceSale?: number;
  count?: number;
  size?: string;
  total?: number
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
  avatar_id?: string;
  last_name?: string;
  first_name?: string;
  phone_number?: number;
  photo?: string;
  pin?: string;
  status?: string;
  updatedAt?: string;
  username?: string;
  gender?: string;
  __v?: number;
  user_id?: string;
  point?: string;
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
  course_id?: string;
  name?: string;
  about?: string;
  trainer?: string;
  startDate?: Date;
  endDate?: Date;
  schedule?: string[]; // Jadwal kelas (misalnya: ["Senin 10:00 AM", "Rabu 2:00 PM"])
  price_top?: number;
  price_down?: number;
  total_member?: number;
  for_who?: string;
  requirement?: string;
  will_learn?: string;
  duration?: number;
  photo?: string;
  // enrolledStudents: number;
  // durationInMinutes: number;
  // videoURL: string; // URL video kelas online
  // thumbnailURL: string; // URL gambar miniatur untuk kelas
  // tags: string[]; // Tag atau kategori kelas (misalnya: ["Pemrograman", "Web Development"])
  // category : string
}

export interface UserCourse {
  address: string;
  avatar_id: string | null;
  category: string | null;
  course_id: string;
  createdAt: string;
  date_of_birth: string | null;
  deleted_at: string | null;
  duration: string;
  email: string;
  fcm_token: string;
  first_name: string;
  for_who: string;
  gender: string;
  is_active: boolean;
  is_admin: boolean;
  last_name: string;
  level: string | null;
  name: string;
  payment_status: string | null;
  phone_number: string;
  photo: string;
  point: string;
  price_down: string;
  price_top: string;
  progress: string | null;
  rating: string | null;
  requirement: string;
  total_member: string | null;
  trainer: string | null;
  updatedAt: string;
  user_id: string;
  username: string;
  will_learn: string;
}

export interface InvoicesType {
  transaction_id: string;
  status: string | null;
  name: string | null;
  price_down: string | null;
  order_id: string | null;
}

export interface ArticlesType {
  articles_id?:string
  category?:  string
  content?:string
  createdAt?:string
  likes?:number  
  shared?:number
  title?: string
  updatedAt?:string  
  user_id?:string
}