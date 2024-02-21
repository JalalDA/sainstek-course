# Gunakan Node.js sebagai base image
FROM node:18

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json (jika ada) ke dalam container
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Menyalin semua file proyek ke dalam container
COPY . .

# Membangun aplikasi Next.js
RUN npm run build

# Menetapkan port yang akan digunakan aplikasi
EXPOSE 3000

# Menjalankan aplikasi ketika container dimulai
CMD ["npm", "start"]