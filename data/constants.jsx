import React from "react";
import {
  Activity,
  Utensils,
  ShieldAlert,
  Brain,
  Moon,
  Stethoscope,
  ChevronDown,
} from "lucide-react";

export const preventionItems = [
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

export const penyakitItems = [
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
    video: "https://youtu.be/-RD0z-9XKAo?si=faBRAsqttBok_X4x",
  },
  {
    title: "Aterosklerosis",
    content: (
      <p>
        Aterosklerosis terjadi akibat penumpukan plak lemak pada dinding arteri
        yang menyebabkan penyempitan dan pengerasan pembuluh darah.
      </p>
    ),
    video: "https://youtu.be/njT428_JYzI?si=LfDSCb7a0EeTZppb",
  },
  {
    title: "Tekanan Darah Rendah",
    content: (
      <p>
        Tekanan darah rendah (hipotensi) adalah kondisi saat tekanan darah
        berada di bawah normal, yaitu di bawah 90/60 mmHg, yang dapat
        menyebabkan aliran darah tidak cukup ke organ vital, menimbulkan gejala
        pusing, lemas, pandangan kabur, mual, bahkan pingsan karena kurangnya
        oksigen dan nutrisi ke otak dan organ lain.
      </p>
    ),
    video: "https://youtu.be/E5A_MNtQqHw?si=AUKQPTHMkHHdaFRM",
  },
  {
    title: "Penyakit Jantung Koroner",
    content: (
      <p>
        Penyakit jantung koroner terjadi saat arteri koroner menyempit akibat
        plak, sehingga suplai oksigen ke jantung berkurang.
      </p>
    ),
    video: "https://youtu.be/SABIkN0-WPQ?si=be_DsxjRS5wH5D1-",
  },
  {
    title: "Anemia",
    content: (
      <p>
        Anemia adalah kondisi kekurangan sel darah merah atau hemoglobin
        sehingga pengangkutan oksigen terganggu.
      </p>
    ),
    video: "https://youtu.be/o3LHWkbbU6M?si=R5Jl4F9-YUchKZSR",
  },
  {
    title: "Leukemia",
    content: (
      <p>
        Leukemia merupakan kanker jaringan pembentuk darah yang ditandai
        produksi sel darah putih abnormal.
      </p>
    ),
    video: "https://youtu.be/6xdgRo97YZM?si=VdhzhENhZQYRkqei",
  },
  {
    title: "Hemofilia",
    content: (
      <p>
        Hemofilia adalah kelainan genetik yang menyebabkan darah sulit membeku
        akibat kekurangan faktor pembekuan.
      </p>
    ),
    video: "https://youtube.com/shorts/Glm1WR7VLAg?si=ihvz0ZjatKYqf3Zi",
  },
];
