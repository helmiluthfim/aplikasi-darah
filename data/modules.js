import React from "react";
import {
  Activity,
  Heart,
  Image as ImageIcon,
  TrendingUp,
  TrendingDown,
  Network,
  Droplet,
  Utensils,
  ShieldAlert,
  Brain,
  Moon,
  Scale,
  Stethoscope,
  ChevronDown,
} from "lucide-react";
import { color } from "framer-motion";

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

const preventionItems = [
  {
    title: "Pola Makan Sehat",
    icon: Utensils,
    color: "text-green-400",
    description:
      "Konsumsi sayur, buah, dan biji-bijian; kurangi lemak jenuh, gula, dan garam.",
    link: "https://keslan.kemkes.go.id/view_artikel/3467/pola-makan-yang-sehat",
  },
  {
    title: "Rutin Berolahraga",
    icon: Activity,
    color: "text-blue-400",
    description:
      "Aktivitas fisik minimal 30 menit per hari seperti jalan kaki atau bersepeda.",
    link: "https://www.kemkes.go.id/id/cegah-stroke-dengan-aktivitas-fisik",
  },
  {
    title: "Hindari Rokok & Alkohol",
    icon: ShieldAlert,
    color: "text-red-400",
    description:
      "Merokok merusak pembuluh darah dan alkohol berlebih meningkatkan risiko jantung.",
    link: "https://keslan.kemkes.go.id/view_artikel/3779/serangan-jantung-pada-usia-muda-memangnya-bisa",
  },
  {
    title: "Kelola Stres",
    icon: Brain,
    color: "text-purple-400",
    description: "Meditasi dan relaksasi membantu menurunkan tekanan darah.",
    link: "https://keslan.kemkes.go.id/view_artikel/2350/manfaat-meditasi-untuk-kesehatan-jantung",
  },
  {
    title: "Tidur & Berat Badan Ideal",
    icon: Moon,
    color: "text-indigo-400",
    description:
      "Tidur cukup dan menjaga berat badan menurunkan risiko penyakit jantung.",
    link: "https://keslan.kemkes.go.id/view_artikel/814/pentingnya-cegah-obesitas-dan-hipertensi-untuk-kinerja-optimal",
  },
  {
    title: "Cek Kesehatan Rutin",
    icon: Stethoscope,
    color: "text-teal-400",
    description:
      "Pantau tekanan darah, kolesterol, dan gula darah secara berkala.",
    link: "https://ayosehat.kemkes.go.id/jenis-pemeriksaan-kesehatan-berkala-untuk-cek-kondisi-tubuh-anda-",
  },
];

const penyakitItems = [
  {
    title: "Hipertensi (Tekanan Darah Tinggi)",
    content: (
      <p>
        Hipertensi adalah kondisi tekanan darah tinggi kronis yang sering
        disebut
        <strong className="text-red-500"> “pembunuh diam-diam” </strong>
        karena jarang bergejala namun meningkatkan risiko stroke, penyakit
        jantung, dan gagal ginjal.
      </p>
    ),
  },
  {
    title: "Aterosklerosis",
    content: (
      <>
        <p>
          Aterosklerosis terjadi akibat penumpukan plak lemak pada dinding
          arteri yang menyebabkan penyempitan dan pengerasan pembuluh darah.
        </p>
      </>
    ),
  },
  {
    title: "Penyakit Jantung Koroner",
    content: (
      <>
        <p>
          Penyakit jantung koroner terjadi saat arteri koroner menyempit akibat
          plak, sehingga suplai oksigen ke jantung berkurang.
        </p>
      </>
    ),
  },
  {
    title: "Anemia",
    content: (
      <>
        <p>
          Anemia adalah kondisi kekurangan sel darah merah atau hemoglobin
          sehingga pengangkutan oksigen terganggu.
        </p>
      </>
    ),
  },
  {
    title: "Leukemia",
    content: (
      <>
        <p>
          Leukemia merupakan kanker jaringan pembentuk darah yang ditandai
          produksi sel darah putih abnormal.
        </p>
      </>
    ),
  },
  {
    title: "Hemofilia",
    content: (
      <>
        <p>
          Hemofilia adalah kelainan genetik yang menyebabkan darah sulit membeku
          akibat kekurangan faktor pembekuan.
        </p>
      </>
    ),
  },
];

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
        <p className="text-gray-400 text-sm md:text-base">
          {" "}
          Jantung adalah organ berotot yang berfungsi memompa darah ke seluruh
          tubuh. Melalui darah, oksigen dan zat makanan disalurkan ke seluruh
          sel tubuh, sementara sisa-sisa metabolisme dibawa untuk dikeluarkan
          dari tubuh. Jantung bekerja terus-menerus dan menjadi bagian dari
          sistem peredaran darah yang terdiri atas jantung, pembuluh darah, dan
          darah.{" "}
        </p>
        <ContentImage
          src="/jantung.jpeg"
          caption="Struktur anatomi jantung manusia"
        />
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
        <ContentImage
          src="https://st2.depositphotos.com/1067125/6855/v/950/depositphotos_68556233-stock-illustration-healthy-artery-and-heart-anatomy.jpg"
          caption="Struktur pembuluh arteri"
        />
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
        <ContentImage
          src="https://www.pelajaran.co.id/wp-content/uploads/2016/03/Pembuluh-Darah-2.jpg"
          caption="Struktur pembuluh vena"
        />
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
        <ContentImage
          src="https://thumb.viva.id/vivapurwasuka/1265x711/2025/10/01/68dc2aeb8584a-ilustrasi-pembuluh-darah_purwasuka.jpg"
          caption="Jaringan pembuluh kapiler"
        />
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

  {
    id: "penyakit",
    title: "Gangguan & Penyakit",
    icon: <Droplet className="w-6 h-6 text-red-500" />,
    color: "from-red-500 to-rose-700",
    theme: "#ef4444",
    content: (
      <div className="space-y-5">
        <h3 className="text-xl font-bold text-red-400">
          Gangguan & Penyakit Sistem Peredaran Darah
        </h3>

        <p className="text-gray-400 text-sm md:text-base">
          Gangguan pada sistem peredaran darah dapat menyebabkan berbagai
          penyakit serius. Berikut adalah beberapa penyakit yang umum terjadi.
        </p>

        <div className="space-y-4">
          {penyakitItems.map((item, index) => (
            <details
              key={index}
              className="group bg-slate-900/60 border border-slate-700 rounded-xl p-4 transition"
            >
              <summary className="cursor-pointer font-semibold text-white flex justify-between items-center">
                {item.title}
                <ChevronDown className="text-red-400 group-open:rotate-180 transition" />
              </summary>

              <div className="mt-4 text-gray-300 text-sm leading-relaxed">
                {item.content}
              </div>
            </details>
          ))}
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/a3J4Jo2uTlU?si=JdnMLz3rg0c1yanB",
  },

  {
    id: "pencegahan",
    title: "Upaya & Pencegahan",
    subtitle: "Menjaga Sistem Peredaran Darah",
    icon: <ShieldAlert className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500 to-blue-700",
    theme: "#3b82f6",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-3">
            Upaya & Pencegahan
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Langkah-langkah berikut terbukti efektif dalam menjaga kesehatan
            sistem peredaran darah dan menurunkan risiko penyakit
            kardiovaskular.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preventionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-md p-5 rounded-xl border border-slate-700 hover:border-slate-500 transition shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={item.color} size={22} />
                  <h4 className="font-semibold text-white">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <span className="inline-block mt-3 text-xs text-blue-400 hover:underline">
                  Baca artikel →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/a3J4Jo2uTlU?si=JdnMLz3rg0c1yanB",
  },
];
