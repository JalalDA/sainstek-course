import Footer from '@/components/moleculs/Footer'
import Navbar from '@/components/moleculs/Navbar'
import Head from 'next/head'
import React from 'react'

type Props = {}

const KebijakanPrivasi = (props: Props) => {
    return (
        <div className='bg-white dark:bg-white dark:text-black'>
            <Head><title>Kebijakan Privasi</title></Head>
            <Navbar />
            <div className="mt-8 font-bold text-lg px-2 md:px-8">Kebijakan Privasi</div>

            <div className="text-md px-2 md:px-8 mb-4">Terakhir diperbarui: 2 Maret 2024</div>

            <div className="md:w-2/3 px-2 md:px-8 mb-8">
                Selamat datang di situs web kami. Kami memahami bahwa privasi Anda adalah hal yang penting, oleh karena itu kami menghargai dan mengambil serius perlindungan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan situs web kami. <br /> <br />

                Mohon baca kebijakan privasi ini dengan seksama. Dengan menggunakan situs web kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini. Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini, jangan ragu untuk menghubungi kami. <br /><br />

                <b>
                    Informasi yang Kami Kumpulkan
                </b> <br /> <br />

                Kami dapat mengumpulkan dan memproses informasi pribadi Anda saat Anda menggunakan situs web kami. Informasi tersebut dapat mencakup, namun tidak terbatas pada: <br /> <br />

                <b>1. Informasi Pendaftaran</b>: Ketika Anda mendaftar atau mendaftarkan akun dengan kami, kami dapat mengumpulkan informasi seperti nama, alamat email, alamat fisik, nomor telepon, dan informasi lain yang diperlukan untuk menyediakan layanan kami. <br /> <br />

                <b>2. Informasi Pembayaran</b>: Jika Anda melakukan transaksi pembayaran di situs web kami, kami akan mengumpulkan informasi pembayaran Anda, seperti rincian kartu kredit atau informasi pembayaran lainnya yang Anda berikan. <br /> <br />

                <b>3. Informasi Penggunaan</b>: Kami dapat mengumpulkan informasi tentang bagaimana Anda menggunakan situs web kami, termasuk data penggunaan, data interaksi, dan data navigasi. <br /> <br />

                <b>4. Informasi Pengalaman</b>: Kami juga dapat mengumpulkan informasi tentang preferensi Anda dan pengalaman Anda menggunakan situs web kami, termasuk feedback, kritik, atau tanggapan lainnya yang Anda berikan kepada kami. <br /> <br />

                <b>Penggunaan Informasi</b> <br /> <br />

                Kami menggunakan informasi pribadi yang kami kumpulkan untuk berbagai tujuan, termasuk namun tidak terbatas pada: <br /> <br />

                <ol>
                    <li>
                        <p>
                            <strong>Menyediakan Layanan</strong>: Kami menggunakan informasi pribadi Anda untuk menyediakan layanan, mengelola akun Anda, memproses transaksi, dan memberikan dukungan pelanggan.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Peningkatan Layanan</strong>: Kami menggunakan informasi untuk memahami dan meningkatkan layanan kami, termasuk analisis penggunaan, personalisasi konten, dan pengembangan fitur baru.
                        </p>
                    </li>
                    <li><p><strong>Komunikasi</strong>: Kami dapat menggunakan informasi Anda untuk berkomunikasi dengan Anda tentang layanan kami, termasuk mengirim pemberitahuan, pembaruan, dan informasi terkait.</p></li><li><p><strong>Keamanan</strong>: Kami menggunakan informasi untuk melindungi keamanan dan integritas situs web kami, serta mencegah aktivitas yang melanggar hukum atau melanggar ketentuan penggunaan kami.</p></li></ol> <br /> <br />

                <b>Pengungkapan Informasi</b> <br /> <br />

                Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali seperti yang dijelaskan dalam kebijakan ini atau jika diperlukan oleh hukum. <br /> <br />

                Kami dapat mengungkap informasi pribadi Anda kepada penyedia layanan pihak ketiga yang membantu kami dalam menyediakan layanan kami, seperti pemrosesan pembayaran, pengiriman email, atau analisis data. Penyedia layanan ini dilarang menggunakan informasi Anda untuk tujuan lain selain menyediakan layanan kepada kami. <br /> <br />

                Kami juga dapat mengungkap informasi pribadi Anda jika diperlukan oleh hukum atau dalam rangka mematuhi perintah pengadilan, proses hukum, atau peraturan pemerintah lainnya. <br /> <br />

                <b>Keamanan Informasi</b> <br /> <br />

                Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, tidak ada metode transmisi atau penyimpanan data secara elektronik yang 100% aman, oleh karena itu kami tidak dapat menjamin keamanan absolut dari informasi pribadi Anda. <br /> <br />

                <b>Perubahan Kebijakan Privasi</b> <br /> <br />

                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan berlaku secara efektif segera setelah diterbitkan di situs web kami. Kami menyarankan Anda untuk secara teratur memeriksa kebijakan privasi ini untuk memahami perubahan apa pun. Dengan terus menggunakan situs web kami setelah perubahan tersebut, Anda menyetujui kebijakan privasi yang direvisi. <br /> <br />

                <b>Hubungi Kami </b> <br /> <br />
 
                Jika Anda memiliki pertanyaan, komentar, atau permintaan terkait kebijakan privasi ini, jangan ragu untuk menghubungi kami melalui informasi kontak yang tersedia di situs web kami. <br /> <br />

                Terima kasih atas kunjungan Anda dan kepercayaan Anda kepada kami. <br /> <br />

                PT. Sciencebox Solution Technology
            </div>

            <Footer />
        </div>
    )
}

export default KebijakanPrivasi