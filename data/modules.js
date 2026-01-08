import React from "react";
import {
  Activity,
  Heart,
  Image as ImageIcon,
  TrendingUp,
  TrendingDown,
  Network,
  Droplet,
} from "lucide-react";

/* ================= COMPONENT GAMBAR ================= */
const ContentImage = ({ src, caption }) => (
  <div className="w-full my-8 md:my-10">
    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-lg group bg-black/20">
      <img
        src={src}
        alt={caption || "Ilustrasi"}
        className="w-full h-64 md:h-72 object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
        <div className="flex items-center gap-2 text-white/90 text-xs">
          <ImageIcon size={14} />
          <span>{caption || "Ilustrasi Materi"}</span>
        </div>
      </div>
    </div>
    <p className="text-center text-[10px] text-slate-500 mt-3 italic">
      {caption}
    </p>
  </div>
);

/* ================= DATA MODULE ================= */
export const modules = [
  {
    id: "pengantar",
    title: "Pengantar Sistem Peredaran Darah",
    subtitle: "Logistik Tanpa Henti",
    icon: <Activity className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-400 to-blue-600",
    theme: "#0ea5e9",
    content: (
      <div className="space-y-6">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-cyan-400 mb-2">
            Sistem Peredaran Darah
          </h3>
          <p className="text-gray-300">
            Tubuh manusia merupakan sistem yang kompleks dan teratur. Salah satu
            sistem penting yang menjamin kehidupan adalah sistem peredaran
            darah. Sistem ini berfungsi seperti jaringan transportasi, yang
            mengalirkan oksigen, zat makanan, hormon, dan zat penting lainnya ke
            seluruh sel tubuh. Selain itu, sistem peredaran darah juga bertugas
            mengambil sisa metabolisme, seperti karbon dioksida dan urea, untuk
            dibuang melalui paru-paru dan ginjal.
          </p>
          <ContentImage
            src="https://media.quizizz.com/_mdserver/main/media/resource/gs/quizizz-media/quizzes/fad54e7d-61ff-4580-ae75-170410874030-v2"
            caption="Ilustrasi aliran sel darah dalam pembuluh"
          />
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {" "}
            Jantung berperan sebagai pompa utama yang bekerja tanpa henti. Ia
            berdetak sekitar 70 kali per menit untuk menjaga aliran darah tetap
            stabil. Darah yang kaya oksigen dipompa dari jantung menuju seluruh
            tubuh, sedangkan darah yang telah membawa sisa metabolisme
            dikembalikan ke jantung untuk dibersihkan. Sementara itu, pembuluh
            darah berfungsi seperti pipa-pipa halus yang menjadi jalur
            perjalanan darah. Ada tiga jenis pembuluh darah, yaitu arteri, vena,
            dan kapiler, masing-masing memiliki fungsi yang berbeda namun saling
            berkaitan.{" "}
          </p>{" "}
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {" "}
            Darah, sebagai cairan kehidupan, terdiri atas plasma darah dan
            sel-sel darah. Eritrosit (sel darah merah) bertugas membawa oksigen
            dengan bantuan hemoglobin, leukosit (sel darah putih) berperan
            melawan infeksi, dan trombosit (keping darah) membantu proses
            pembekuan saat luka. Keseimbangan ketiga komponen ini menjamin tubuh
            tetap sehat dan berfungsi optimal.{" "}
          </p>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/P8l2P5aG46M",
  },

  {
    id: "jantung",
    title: "Jantung",
    subtitle: "Pompa Kehidupan",
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    color: "from-rose-400 to-red-600",
    theme: "#f43f5e",
    content: (
      <div className="bg-black p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-rose-400 mb-4">Jantung</h3>
        <ContentImage
          src="https://cdn.hellosehat.com/wp-content/uploads/2018/03/anatomi-jantung-01-1024x977.png"
          caption="Struktur anatomi jantung manusia"
        />
        <p className="text-gray-400 text-sm md:text-base">
          {" "}
          Jantung adalah organ berotot yang berfungsi memompa darah ke seluruh
          tubuh. Melalui darah, oksigen dan zat makanan disalurkan ke seluruh
          sel tubuh, sementara sisa-sisa metabolisme dibawa untuk dikeluarkan
          dari tubuh. Jantung bekerja terus-menerus dan menjadi bagian dari
          sistem peredaran darah yang terdiri atas jantung, pembuluh darah, dan
          darah.{" "}
        </p>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  {
    id: "arteri",
    title: "Arteri",
    subtitle: "Aliran Keluar",
    icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
    color: "from-orange-400 to-red-500",
    theme: "#fb923c",
    content: (
      <div className="bg-black p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-orange-400 mb-4">Arteri</h3>
        <ContentImage
          src="https://st2.depositphotos.com/1067125/6855/v/950/depositphotos_68556233-stock-illustration-healthy-artery-and-heart-anatomy.jpg"
          caption="Struktur pembuluh arteri"
        />
        <p className="text-gray-400 text-sm md:text-base">
          {" "}
          Arteri adalah pembuluh darah yang bertugas mengalirkan darah keluar
          dari jantung ke seluruh tubuh. Karena fungsinya sebagai saluran
          pertama yang menerima darah setelah dipompa, arteri memiliki dinding
          yang sangat tebal, kuat, dan elastis agar tidak pecah saat menahan
          tekanan darah yang tinggi. Karakteristik ini juga yang membuat kita
          bisa merasakan denyut nadi di bagian tubuh tertentu. Umumnya, arteri
          membawa darah "bersih" yang kaya akan oksigen, kecuali pada arteri
          pulmonalis yang membawa darah "kotor" ke paru-paru. Intinya, meskipun
          membawa jenis darah yang berbeda, semua arteri memiliki prinsip yang
          sama: arah alirannya selalu menjauhi jantung dan strukturnya harus
          kokoh untuk menjaga kelancaran aliran darah ke seluruh jaringan
          tubuh.{" "}
        </p>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  {
    id: "vena",
    title: "Vena",
    subtitle: "Aliran Kembali",
    icon: <TrendingDown className="w-6 h-6 text-indigo-400" />,
    color: "from-indigo-400 to-blue-600",
    theme: "#6366f1",
    content: (
      <div className="bg-black p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-indigo-400 mb-4">Vena</h3>
        <ContentImage
          src="https://www.pelajaran.co.id/wp-content/uploads/2016/03/Pembuluh-Darah-2.jpg"
          caption="Struktur pembuluh vena"
        />
        <p className="text-gray-400 text-sm md:text-base">
          {" "}
          Vena adalah pembuluh darah yang bertugas mengalirkan darah dari
          seluruh tubuh kembali menuju jantung. Berbeda dengan arteri yang
          tebal, dinding vena lebih tipis dan kurang elastis, namun memiliki
          rongga pembuluh (lumen) yang lebih lebar. Karena aliran darah di vena
          tidak sekuat di arteri, vena dilengkapi dengan katup-katup khusus yang
          berfungsi sebagai "pintu satu arah" agar darah tidak mengalir balik
          akibat gaya gravitasi. Umumnya, vena membawa darah "kotor" yang kaya
          akan karbon dioksida, kecuali vena pulmonalis yang membawa darah
          bersih dari paru-paru. Intinya, vena berfungsi sebagai jalur
          kepulangan darah ke jantung setelah selesai mengantarkan nutrisi ke
          seluruh sel tubuh.{" "}
        </p>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  {
    id: "kapiler",
    title: "Kapiler",
    subtitle: "Jaringan Mikro",
    icon: <Network className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-400 to-green-600",
    theme: "#10b981",
    content: (
      <div className="bg-black p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">Kapiler</h3>
        <ContentImage
          src="https://thumb.viva.id/vivapurwasuka/1265x711/2025/10/01/68dc2aeb8584a-ilustrasi-pembuluh-darah_purwasuka.jpg"
          caption="Jaringan pembuluh kapiler"
        />
        <p className="text-gray-400 text-sm md:text-base">
          {" "}
          Pembuluh kapiler adalah pembuluh darah terkecil dan terhalus yang
          berfungsi sebagai "jembatan" penghubung antara pembuluh arteri kecil
          (arteriol) dan vena kecil (venula). Sesuai dengan gambarnya, kapiler
          memiliki dinding yang sangat tipis karena hanya terdiri dari satu
          lapis sel endotelium, sehingga memudahkan terjadinya pertukaran
          oksigen, nutrisi, dan sisa metabolisme secara langsung dengan sel-sel
          tubuh. Meskipun ukurannya mikro, kapiler membentuk jaring-jaring luas
          yang memastikan setiap sel di seluruh pelosok tubuh mendapatkan
          pasokan darah yang dibutuhkan.{" "}
        </p>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  {
    id: "darah",
    title: "Darah",
    subtitle: "Cairan Kehidupan",
    icon: <Droplet className="w-6 h-6 text-red-500" />,
    color: "from-red-500 to-rose-700",
    theme: "#ef4444",
    content: (
      <div className="bg-black p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-red-400 mb-4">Darah</h3>
        <p className="text-gray-400 text-sm md:text-base">
          {" "}
          Darah adalah jaringan cair dalam tubuh yang berfungsi mengangkut
          berbagai zat. Darah membawa oksigen, zat makanan, hormon, dan antibodi
          ke seluruh tubuh, serta mengangkut sisa metabolisme seperti karbon
          dioksida dan urea untuk dikeluarkan. Disebut jaringan cair karena
          sebagian besar darah berupa plasma, sedangkan bentuk keping yang
          sering terlihat pada gambar merupakan sel-sel darah yang berada di
          dalam plasma.{" "}
        </p>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/Eh1yMDi6wAo",
  },
];
