import React from "react";
import {
  Activity,
  Heart,
  TrendingUp,
  TrendingDown,
  Network,
  Droplet,
  ShieldAlert,
  ChevronDown,
} from "lucide-react";

// Import komponen dan data yang sudah dipisah
import ContentImage from "@/components/shared/ContentImage";
import { preventionItems, penyakitItems } from "./constants";

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
    videoUrl: "https://www.youtube.com/embed/P8l2P5aG46M",
  },

  // MATERI JANTUNG
  {
    id: "jantung",
    title: "Jantung",
    subtitle: "Pompa Kehidupan",
    icon: <Heart className="w-6 h-6 text-rose-500" />,
    color: "from-rose-400 to-red-600",
    theme: "#f43f5e",
    content: (
      <div className="bg-white/5 flex flex-col gap-6 p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-rose-400 ">Jantung</h3>
        <p className="text-gray-400 text-sm md:text-base">
          Jantung adalah organ berotot yang berfungsi memompa darah ke seluruh
          tubuh. Melalui darah, oksigen dan zat makanan disalurkan ke seluruh
          sel tubuh, sementara sisa-sisa metabolisme dibawa untuk dikeluarkan
          dari tubuh. Jantung bekerja terus-menerus dan menjadi bagian dari
          sistem peredaran darah yang terdiri atas jantung, pembuluh darah, dan
          darah.
        </p>
        <ContentImage
          src="/jantung.jpeg"
          caption="Struktur anatomi jantung manusia"
        />
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-rose-400 mb-2">
            Struktur Jantung
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Empat Ruangan:</strong> Jantung terbagi menjadi dua
              serambi (Atrium) dan dua bilik (Ventrikel). Serambi kanan dan kiri
              memisahkan aliran darah ke bilik kanan dan kiri.
            </li>
            <li>
              <strong>Empat Katup:</strong> Katup trikuspid (antara serambi
              kanan dan bilik kanan), katup pulmonal (antara bilik kanan dan
              arteri pulmonalis), katup mitral (antara serambi kiri dan bilik
              kiri), dan katup aorta (antara bilik kiri dan aorta).
            </li>
            <li>
              <strong>Dinding Jantung:</strong> Terdiri dari tiga lapisan:
              endokardium (lapisan dalam), miokardium (otot jantung), dan
              epikardium (lapisan luar).
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-rose-400 mb-2">
            Fungsi Jantung
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Memompa Darah:</strong> Mengedarkan darah kaya oksigen
              dari paru-paru ke seluruh tubuh dan membawa darah yang mengandung
              karbon dioksida kembali ke paru-paru untuk pengeluaran.
            </li>
            <li>
              <strong>Siklus Jantung:</strong> Terdapat dua siklus utama: siklus
              sistolik (kontraksi) dan diastolik (relaksasi), yang memastikan
              aliran darah yang kontinu dan efisien.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-rose-400 mb-2">
            Gangguan Pada Jantung
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Serangan jantung (infark miokard):</strong> Terjadi saat
              aliran darah ke otot jantung tersumbat.
            </li>
            <li>
              <strong>Aritmia:</strong> Gangguan irama detak jantung (terlalu
              cepat, lambat, atau tidak teratur).
            </li>
            <li>
              <strong>Gagal jantung:</strong> Jantung tidak mampu memompa darah
              dengan efektif.
            </li>
            <li>
              <strong>Penyakit jantung koroner:</strong> Penyempitan pembuluh
              darah koroner akibat plak lemak.
            </li>
            <li>
              <strong>Katup jantung bocor:</strong> Katup tidak menutup sempurna
              sohingga darah mengalir balik.
            </li>
          </ul>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  // MATERI ARTERI
  {
    id: "arteri",
    title: "Arteri",
    subtitle: "Aliran Keluar",
    icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
    color: "from-orange-400 to-red-500",
    theme: "#fb923c",
    content: (
      <div className="flex flex-col gap-6 bg-white/5 p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-orange-400 ">Arteri</h3>
        <p className="text-gray-400 text-sm md:text-base">
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
          kokoh untuk menjaga kelancaran aliran darah ke seluruh jaringan tubuh.
        </p>
        <ContentImage
          src="https://st2.depositphotos.com/1067125/6855/v/950/depositphotos_68556233-stock-illustration-healthy-artery-and-heart-anatomy.jpg"
          caption="Struktur pembuluh arteri"
        />

        {/* List Item */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-orange-400 mb-2">
            Struktur Arteri
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Dinding Tebal:</strong> Memiliki lapisan otot dan elastin
              yang memungkinkan arteri untuk menahan tekanan darah tinggi yang
              dihasilkan dari kontraksi jantung.
            </li>
            <li>
              <strong>Dua Lapisan Utama:</strong> Tunika intima (lapisan dalam),
              tunika media (lapisan otot), dan tunika adventitia (lapisan luar).
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-orange-400 mb-2">
            Fungsi Utama
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Membawa Darah dari Jantung:</strong> Mengangkut darah kaya
              oksigen dari jantung ke berbagai bagian tubuh.
            </li>
            <li>
              <strong>Regulasi Tekanan Darah:</strong> Mengatur aliran darah dan
              tekanan melalui perubahan diameter arteri.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-orange-400 mb-2">
            Arteri Utama
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Aorta:</strong> Arteri terbesar, keluar dari jantung dan
              menyebar ke seluruh tubuh.
            </li>
            <li>
              <strong>Arteri koronaria:</strong> Mensuplai darah ke otot
              jantung.
            </li>
            <li>
              <strong>Arteri pulmonalis:</strong> Membawa darah dari jantung ke
              paru-paru (unik karena darahnya miskin oksigen).
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-orange-400 mb-2">
            Patologi & Gangguan
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong className="text-orange-300">Varises </strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> karena katup vena melemah, darah
              menumpuk (refluks). <strong>Dampaknya: </strong> Pembuluh menonjol
              berkelok, nyeri kaki.
            </li>
            <li>
              <strong className="text-orange-300">Tromboflebitis</strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Inflamasi akibat
              gumpalan darah (trombus). <strong>Dampaknya: </strong> Bengkak
              kemerahan, nyeri tekan lokal.
            </li>
            <li>
              <strong className="text-orange-300">Insufisiensi Vena</strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Kegagalan katup menutup
              sempurna (kronis). <strong>Dampaknya: </strong> Edema (bengkak),
              perubahan warna kulit.
            </li>
            <li>
              <strong className="text-orange-300">Emboli Paru</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Lepasnya gumpalan darah menuju
              paru-paru. <strong>Dampaknya: </strong> Sesak napas mendadak,
              mengancam nyawa
            </li>
          </ul>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  // MATERI VENA
  {
    id: "vena",
    title: "Vena",
    subtitle: "Aliran Kembali",
    icon: <TrendingDown className="w-6 h-6 text-indigo-400" />,
    color: "from-indigo-400 to-blue-600",
    theme: "#6366f1",
    content: (
      <div className="flex flex-col gap-6 bg-white/5 p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-indigo-400">Vena</h3>
        <p className="text-gray-400 text-sm md:text-base">
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
          seluruh sel tubuh.
        </p>
        <ContentImage
          src="https://www.pelajaran.co.id/wp-content/uploads/2016/03/Pembuluh-Darah-2.jpg"
          caption="Struktur pembuluh vena"
        />

        {/* list item */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-indigo-400 mb-2">
            Struktur Vena
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              Dinding lebih tipis dibanding arteri dengan lapisan otot sedikit.
            </li>
            <li>
              Memiliki <strong>katup satu arah</strong> untuk mencegah aliran
              balik (refluks).
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-indigo-400 mb-2">
            Fungsi Utama
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>Membawa darah miskin oksigen kembali ke jantung.</li>
            <li>
              Bertindak sebagai <strong>reservoir darah</strong> tubuh.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-indigo-400 mb-2">Vena Utama</h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Cava Superior:</strong> Membawa darah dari tubuh bagian
              atas ke atrium kanan.
            </li>
            <li>
              <strong>Cava Inferior:</strong> Membawa darah dari tubuh bagian
              bawah.
            </li>
            <li>
              <strong>Pulmonalis:</strong> Membawa darah kaya O₂ dari paru ke
              jantung.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-indigo-400 mb-2">
            Patologi & Gangguan
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong className="text-indigo-300">Aterosklerosis </strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Penumpukan lemak (plak)
              di dinding arteri <strong>Dampaknya: </strong> Penyempitan
              pembuluh darah, aliran darah terhambat
            </li>
            <li>
              <strong className="text-indigo-300">Arteriosklerosis</strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Kekakuan arteri akibat
              penuaan. <strong>Dampaknya: </strong> Menurunkan elastisitas
              pembuluh.
            </li>
            <li>
              <strong className="text-indigo-300">Aneurisma</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Pelebaran atau penonjolan dinding
              arteri. <strong>Dampaknya: </strong> Risiko pecahnya pembuluh
              darah.
            </li>
            <li>
              <strong className="text-indigo-300">
                Penyakit jantung koroner
              </strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Penyumbatan arteri
              koroner jantung. <strong>Dampaknya: </strong> Menghambat suplai
              oksigen ke otot jantung.
            </li>
          </ul>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  // MATERI KAPILER
  {
    id: "kapiler",
    title: "Kapiler",
    subtitle: "Jaringan Mikro",
    icon: <Network className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-400 to-green-600",
    theme: "#10b981",
    content: (
      <div className="flex flex-col gap-6 bg-white/5 p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-emerald-400">Kapiler</h3>
        <p className="text-gray-400 text-sm md:text-base">
          Pembuluh kapiler adalah pembuluh darah terkecil dan terhalus yang
          berfungsi sebagai "jembatan" penghubung antara pembuluh arteri kecil
          (arteriol) dan vena kecil (venula). Sesuai dengan gambarnya, kapiler
          memiliki dinding yang sangat tipis karena hanya terdiri dari satu
          lapis sel endotelium, sehingga memudahkan terjadinya pertukaran
          oksigen, nutrisi, dan sisa metabolisme secara langsung dengan sel-sel
          tubuh. Meskipun ukurannya mikro, kapiler membentuk jaring-jaring luas
          yang memastikan setiap sel di seluruh pelosok tubuh mendapatkan
          pasokan darah yang dibutuhkan.
        </p>
        <ContentImage
          src="https://thumb.viva.id/vivapurwasuka/1265x711/2025/10/01/68dc2aeb8584a-ilustrasi-pembuluh-darah_purwasuka.jpg"
          caption="Jaringan pembuluh kapiler"
        />

        {/* list item */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Struktur Kapiler
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Dinding Sangat Tipis:</strong> Terdiri dari satu lapisan
              sel endotelium, memungkinkan pertukaran zat dengan mudah.
            </li>
            <li>
              <strong>Jaringan Jala:</strong> Membentuk jaringan halus yang
              menghubungkan arteri dan vena.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Fungsi Utama
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Pertukaran Zat:</strong> Tempat di mana pertukaran gas
              (oksigen dan karbon dioksida), nutrisi, dan limbah terjadi antara
              darah dan sel-sel tubuh.
            </li>
            <li>
              <strong>Regulasi Aliran Darah:</strong> Menyesuaikan aliran darah
              berdasarkan kebutuhan jaringan.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Jenis-jenis Pembuluh Kapiler
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong className="text-emerald-300">Kapiler kontinu</strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Dindingnya utuh tanpa
              celah besar, hanya memungkinkan pertukaran molekul kecil.{" "}
              <strong>Dampak Klinis: </strong> Otot, kulit, otak.
            </li>
            <li>
              <strong className="text-emerald-300">Kapiler fenestrata</strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Memiliki pori-pori kecil
              (fenestra) untuk melewatkan zat berukuran sedang.{" "}
              <strong>Dampak Klinis: </strong> Ginjal, usus, kelenjar endokrin.
            </li>
            <li>
              <strong className="text-emerald-300">
                Kapiler sinusoid (disontinu)
              </strong>{" "}
              {" ==> "} <strong>Penyebababnya:</strong> Memiliki celah besar di
              antara sel-sel endotel untuk melewatkan sel darah dan molekul
              besar. <strong>Dampak Klinis: </strong> Hati, limpa, sumsum
              tulang.
            </li>
          </ul>
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/ZW6RoS7BPZ0",
  },

  // MATERI DARAH
  {
    id: "darah",
    title: "Darah",
    subtitle: "Cairan Kehidupan",
    icon: <Droplet className="w-6 h-6 text-red-500" />,
    color: "from-red-500 to-rose-700",
    theme: "#ef4444",
    content: (
      <div className="flex flex-col gap-6 bg-white/5 p-6 rounded-3xl border border-white/10">
        <h3 className="text-xl font-bold text-red-400">Darah</h3>
        <p className="text-gray-400 text-sm md:text-base">
          Darah adalah jaringan cair dalam tubuh yang berfungsi mengangkut
          berbagai zat. Darah membawa oksigen, zat makanan, hormon, dan antibodi
          ke seluruh tubuh, serta mengangkut sisa metabolisme seperti karbon
          dioksida dan urea untuk dikeluarkan. Disebut jaringan cair karena
          sebagian besar darah berupa plasma, sedangkan bentuk keping yang
          sering terlihat pada gambar merupakan sel-sel darah yang berada di
          dalam plasma.
        </p>

        {/* list item */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-red-400 mb-2">
            Struktur Darah
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Sel Darah Merah (Eritrosit):</strong> Berfungsi mengangkut
              oksigen dari paru-paru ke seluruh tubuh dan mengembalikan karbon
              dioksida ke paru-paru.
            </li>
            <li>
              <strong>Sel Darah Putih (Leukosit):</strong> Berperan dalam sistem
              kekebalan tubuh, melawan infeksi.
            </li>
            <li>
              <strong>Trombosit:</strong> Terlibat dalam pembekuan darah dan
              penyembuhan luka.
            </li>
            <li>
              <strong>Plasma:</strong> Cairan yang mengangkut sel darah,
              nutrisi, hormon, dan limbah.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-red-400 mb-2">Fungsi Utama</h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong>Transportasi:</strong> Mengangkut oksigen, nutrisi,
              hormon, dan limbah.
            </li>
            <li>
              <strong>Regulasi:</strong> Mengatur suhu tubuh dan keseimbangan
              pH.
            </li>
            <li>
              <strong>Pertahanan:</strong> Membantu melawan infeksi dan
              memperbaiki kerusakan jaringan melalui proses pembekuan darah.
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-red-400 mb-2">
            Gangguan Pada Darah
          </h3>
          <ul className="text-sm md:text-base text-slate-200 space-y-3 list-disc pl-6">
            <li>
              <strong className="text-red-300">Anemia</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Kekurangan eritrosit atau
              hemoglobin. <strong>Dampak: </strong> Tubuh lemas, mudah lelah.
            </li>
            <li>
              <strong className="text-red-300">Leukemia</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Produksi leukosit abnormal (kanker
              darah). <strong>Dampak: </strong> Imunitas menurun.
            </li>
            <li>
              <strong className="text-red-300">Hemofilia</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Kelainan genetik, kekurangan
              faktor pembekuan. <strong>Dampak: </strong> Darah sulit membeku.
            </li>
            <li>
              <strong className="text-red-300">Talasemia</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Kelainan genetik pada hemoglobin.{" "}
              <strong>Dampak: </strong> Eritrosit mudah rusak.
            </li>
            <li>
              <strong className="text-red-300">Polisitemia</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Produksi eritrosit berlebihan.{" "}
              <strong>Dampak: </strong> Darah menjadi kental.
            </li>
            <li>
              <strong className="text-red-300">Sepsis</strong> {" ==> "}{" "}
              <strong>Penyebababnya:</strong> Infeksi berat di aliran darah.{" "}
              <strong>Dampak: </strong> Gangguan fungsi organ.
            </li>
          </ul>
        </div>
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
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-red-400">
          Gangguan & Penyakit Sistem Peredaran Darah
        </h3>

        <p className="text-gray-400 text-sm md:text-base">
          Berikut adalah beberapa gangguan dan penyakit yang dapat terjadi
          apabila sistem peredaran darah tidak berfungsi secara optimal.
        </p>

        <div className="space-y-4">
          {penyakitItems.map((item, index) => (
            <details
              key={index}
              className="
              group rounded-2xl border border-slate-700 
              bg-gradient-to-br from-slate-900/80 to-slate-800/40
              p-5 transition-all duration-300
              open:border-red-500/50 open:shadow-lg
            "
            >
              <summary
                className="
                flex items-center justify-between cursor-pointer
                list-none
              "
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-sm font-bold">
                    {index + 1}
                  </span>

                  <h4 className="font-semibold text-white group-open:text-red-400 transition">
                    {item.title}
                  </h4>
                </div>

                <ChevronDown
                  className="
                  text-red-400 transition-transform duration-300
                  group-open:rotate-180
                "
                  size={20}
                />
              </summary>

              <div
                className="
                mt-4 space-y-4 text-gray-300 text-sm leading-relaxed
                animate-in fade-in slide-in-from-top-2 duration-300
              "
              >
                {item.content}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={item.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    inline-flex items-center gap-2
                    text-xs px-4 py-2 rounded-full
                    bg-red-500/20 text-red-400
                    hover:bg-red-500/30 transition
                  "
                  >
                    ▶️ Tonton Video
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    ),
    videoUrl: "https://www.youtube.com/embed/a3J4Jo2uTlU",
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
