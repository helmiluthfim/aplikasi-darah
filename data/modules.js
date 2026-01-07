import React from "react";

import { Activity, Heart, Image as ImageIcon } from "lucide-react";

const ContentImage = ({ src, caption }) => (
  <div className="w-full my-8 md:my-10">
    {" "}
    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-lg group bg-black/20">
      <img
        src={src}
        alt={caption || "Ilustrasi"}
        className="w-full h-64 md:h-72 object-cover transition duration-500 group-hover:scale-105"
      />
      {/* Overlay Caption saat di-hover */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
        <div className="flex items-center gap-2 text-white/90 text-xs">
          <ImageIcon size={14} />
          <span>{caption || "Ilustrasi Materi"}</span>
        </div>
      </div>
    </div>
    {/* Caption text di luar gambar */}
    <p className="text-center text-[10px] text-slate-500 mt-3 italic">
      {caption}
    </p>
  </div>
);
// --------------------------------------------------

export const modules = [
  {
    id: "pengantar",
    title: "Pengantar Sistem Peredaran Darah",
    subtitle: "Logistik Tanpa Henti",
    icon: <Activity className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-600",
    theme: "#0ea5e9",
    // Properti imageUrl dan imageCaption dihapus dari sini
    content: (
      <div className="space-y-6">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-blue-400 mb-2">
            Sistem Peredaran Darah
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Tubuh manusia merupakan sistem yang kompleks dan teratur. Salah satu
            sistem penting yang menjamin kehidupan adalah sistem peredaran
            darah. Sistem ini berfungsi seperti jaringan transportasi, yang
            mengalirkan oksigen, zat makanan, hormon, dan zat penting lainnya ke
            seluruh sel tubuh. Selain itu, sistem peredaran darah juga bertugas
            mengambil sisa metabolisme, seperti karbon dioksida dan urea, untuk
            dibuang melalui paru-paru dan ginjal.
          </p>

          <ContentImage
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop"
            caption="Ilustrasi sel darah merah bergerak dalam pembuluh"
          />

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Jantung berperan sebagai pompa utama yang bekerja tanpa henti. Ia
            berdetak sekitar 70 kali per menit untuk menjaga aliran darah tetap
            stabil. Darah yang kaya oksigen dipompa dari jantung menuju seluruh
            tubuh, sedangkan darah yang telah membawa sisa metabolisme
            dikembalikan ke jantung untuk dibersihkan. Sementara itu, pembuluh
            darah berfungsi seperti pipa-pipa halus yang menjadi jalur
            perjalanan darah. Ada tiga jenis pembuluh darah, yaitu arteri, vena,
            dan kapiler, masing-masing memiliki fungsi yang berbeda namun saling
            berkaitan.
          </p>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Darah, sebagai cairan kehidupan, terdiri atas plasma darah dan
            sel-sel darah. Eritrosit (sel darah merah) bertugas membawa oksigen
            dengan bantuan hemoglobin, leukosit (sel darah putih) berperan
            melawan infeksi, dan trombosit (keping darah) membantu proses
            pembekuan saat luka. Keseimbangan ketiga komponen ini menjamin tubuh
            tetap sehat dan berfungsi optimal.
          </p>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/QLoqMruGbkc",
  },

  {
    id: "jantung",
    title: "Jantung",
    subtitle: "Pompa Paling Awet",
    icon: <Heart className="w-6 h-6" />,
    color: "from-red-400 to-rose-600",
    theme: "#f43f5e",
    // Properti imageUrl dan imageCaption dihapus dari sini
    content: (
      <div className="space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-black rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-rose-400">Jantung</h3>
              <div className="animate-pulse bg-rose-500/20 p-2 rounded-full">
                <Heart
                  size={24}
                  className="text-rose-500"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* === GAMBAR DISISIPKAN DI SINI (DI DALAM KOTAK HITAM) === */}
            <ContentImage
              src="https://cdn.hellosehat.com/wp-content/uploads/2018/03/anatomi-jantung-01-1024x977.png"
              caption="Model 3D struktur anatomi jantung manusia"
            />

            <p className="text-gray-400 text-sm md:text-base">
              Jantung adalah organ berotot yang berfungsi memompa darah ke
              seluruh tubuh. Melalui darah, oksigen dan zat makanan disalurkan
              ke seluruh sel tubuh, sementara sisa-sisa metabolisme dibawa untuk
              dikeluarkan dari tubuh. Jantung bekerja terus-menerus dan menjadi
              bagian dari sistem peredaran darah yang terdiri atas jantung,
              pembuluh darah, dan darah.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-4 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
              🏠
            </div>
            <div>
              <h4 className="font-bold text-blue-400">Atrium</h4>
              <p className="text-xs text-gray-400">
                Penerima tamu. Darah masuk lewat sini.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
            <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center shrink-0">
              🚀
            </div>
            <div>
              <h4 className="font-bold text-rose-400">Ventrikel</h4>
              <p className="text-xs text-gray-400">
                Mesin pendorong. Memompa darah ke seluruh badan.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0?si=ebA3KhPqw1n_YzTK",
  },
  {
    id: "arteri",
    title: "Arteri",
    icon: <Heart className="w-6 h-6" />,
    color: "from-red-400 to-rose-600",
    theme: "#f43f5e",
    // Properti imageUrl dan imageCaption dihapus dari sini
    content: (
      <div className="space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-black rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-rose-400">Arteri</h3>
              <div className="animate-pulse bg-rose-500/20 p-2 rounded-full">
                <Heart
                  size={24}
                  className="text-rose-500"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* === GAMBAR DISISIPKAN DI SINI (DI DALAM KOTAK HITAM) === */}
            <ContentImage
              src="https://st2.depositphotos.com/1067125/6855/v/950/depositphotos_68556233-stock-illustration-healthy-artery-and-heart-anatomy.jpg"
              caption="Model 3D struktur anatomi jantung manusia"
            />

            <p className="text-gray-400 text-sm md:text-base">
              Arteri adalah pembuluh darah yang bertugas mengalirkan darah
              keluar dari jantung ke seluruh tubuh. Karena fungsinya sebagai
              saluran pertama yang menerima darah setelah dipompa, arteri
              memiliki dinding yang sangat tebal, kuat, dan elastis agar tidak
              pecah saat menahan tekanan darah yang tinggi. Karakteristik ini
              juga yang membuat kita bisa merasakan denyut nadi di bagian tubuh
              tertentu. Umumnya, arteri membawa darah "bersih" yang kaya akan
              oksigen, kecuali pada arteri pulmonalis yang membawa darah "kotor"
              ke paru-paru. Intinya, meskipun membawa jenis darah yang berbeda,
              semua arteri memiliki prinsip yang sama: arah alirannya selalu
              menjauhi jantung dan strukturnya harus kokoh untuk menjaga
              kelancaran aliran darah ke seluruh jaringan tubuh.
            </p>
          </div>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0?si=ebA3KhPqw1n_YzTK",
  },

  {
    id: "vena",
    title: "Vena",
    icon: <Heart className="w-6 h-6" />,
    color: "from-red-400 to-rose-600",
    theme: "#f43f5e",
    // Properti imageUrl dan imageCaption dihapus dari sini
    content: (
      <div className="space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-black rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-rose-400">Vena</h3>
              <div className="animate-pulse bg-rose-500/20 p-2 rounded-full">
                <Heart
                  size={24}
                  className="text-rose-500"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* === GAMBAR DISISIPKAN DI SINI (DI DALAM KOTAK HITAM) === */}
            <ContentImage
              src="https://www.pelajaran.co.id/wp-content/uploads/2016/03/Pembuluh-Darah-2.jpg"
              caption="Model 3D struktur anatomi jantung manusia"
            />

            <p className="text-gray-400 text-sm md:text-base">
              Vena adalah pembuluh darah yang bertugas mengalirkan darah dari
              seluruh tubuh kembali menuju jantung. Berbeda dengan arteri yang
              tebal, dinding vena lebih tipis dan kurang elastis, namun memiliki
              rongga pembuluh (lumen) yang lebih lebar. Karena aliran darah di
              vena tidak sekuat di arteri, vena dilengkapi dengan katup-katup
              khusus yang berfungsi sebagai "pintu satu arah" agar darah tidak
              mengalir balik akibat gaya gravitasi. Umumnya, vena membawa darah
              "kotor" yang kaya akan karbon dioksida, kecuali vena pulmonalis
              yang membawa darah bersih dari paru-paru. Intinya, vena berfungsi
              sebagai jalur kepulangan darah ke jantung setelah selesai
              mengantarkan nutrisi ke seluruh sel tubuh.
            </p>
          </div>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0?si=ebA3KhPqw1n_YzTK",
  },
  {
    id: "kapiler",
    title: "Kapiler",
    icon: <Heart className="w-6 h-6" />,
    color: "from-red-400 to-rose-600",
    theme: "#f43f5e",
    // Properti imageUrl dan imageCaption dihapus dari sini
    content: (
      <div className="space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-black rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-rose-400">Kapiler</h3>
              <div className="animate-pulse bg-rose-500/20 p-2 rounded-full">
                <Heart
                  size={24}
                  className="text-rose-500"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* === GAMBAR DISISIPKAN DI SINI (DI DALAM KOTAK HITAM) === */}
            <ContentImage
              src="https://thumb.viva.id/vivapurwasuka/1265x711/2025/10/01/68dc2aeb8584a-ilustrasi-pembuluh-darah_purwasuka.jpg"
              caption="Model 3D struktur anatomi jantung manusia"
            />

            <p className="text-gray-400 text-sm md:text-base">
              Pembuluh kapiler adalah pembuluh darah terkecil dan terhalus yang
              berfungsi sebagai "jembatan" penghubung antara pembuluh arteri
              kecil (arteriol) dan vena kecil (venula). Sesuai dengan gambarnya,
              kapiler memiliki dinding yang sangat tipis karena hanya terdiri
              dari satu lapis sel endotelium, sehingga memudahkan terjadinya
              pertukaran oksigen, nutrisi, dan sisa metabolisme secara langsung
              dengan sel-sel tubuh. Meskipun ukurannya mikro, kapiler membentuk
              jaring-jaring luas yang memastikan setiap sel di seluruh pelosok
              tubuh mendapatkan pasokan darah yang dibutuhkan.
            </p>
          </div>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0?si=ebA3KhPqw1n_YzTK",
  },
  {
    id: "darah",
    title: "Darah",
    subtitle: "Pompa Paling Awet",
    icon: <Heart className="w-6 h-6" />,
    color: "from-red-400 to-rose-600",
    theme: "#f43f5e",
    // Properti imageUrl dan imageCaption dihapus dari sini
    content: (
      <div className="space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-black rounded-3xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-rose-400">Darah</h3>
              <div className="animate-pulse bg-rose-500/20 p-2 rounded-full">
                <Heart
                  size={24}
                  className="text-rose-500"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* === GAMBAR DISISIPKAN DI SINI (DI DALAM KOTAK HITAM) === */}

            <p className="text-gray-400 text-sm md:text-base">
              Darah adalah jaringan cair dalam tubuh yang berfungsi mengangkut
              berbagai zat. Darah membawa oksigen, zat makanan, hormon, dan
              antibodi ke seluruh tubuh, serta mengangkut sisa metabolisme
              seperti karbon dioksida dan urea untuk dikeluarkan. Disebut
              jaringan cair karena sebagian besar darah berupa plasma, sedangkan
              bentuk keping yang sering terlihat pada gambar merupakan sel-sel
              darah yang berada di dalam plasma.
            </p>
          </div>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/Eh1yMDi6wAo?si=Pw3H6tI77qLhUoqa",
  },
];
