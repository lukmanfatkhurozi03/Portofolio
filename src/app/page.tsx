"use client";

import React, { useState } from "react";

type Language = "EN" | "ID";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  badge: string;
  credentialId: string;
  image: string;
}

const DATA = {
  profile: {
    name: "Lukman Fatkhurozi",
    role: {
      EN: "Data Analyst & Business Intelligence Specialist",
      ID: "Data Analyst & Spesialis Business Intelligence",
    },
    tagline: {
      EN: "Information Systems student (GPA 3.95/4.00) & BNSP Certified Database Administrator transforming raw datasets into clear, actionable business insights.",
      ID: "Mahasiswa Sistem Informasi (IPK 3.95/4.00) & Database Administrator Tersertifikasi BNSP yang mengubah data mentah menjadi insight bisnis yang akurat dan siap dieksekusi.",
    },
    summary: {
      EN: "Information Systems student with a strong interest in Data Analytics, Business Intelligence, and Data Visualization. Experienced in collecting, cleaning, analyzing, and visualizing data using SQL, Python, Microsoft Excel, and Power BI through academic projects and self-directed learning. Capable of transforming raw data into meaningful insights to support data-driven decision-making. Highly motivated to continuously develop analytical skills and contribute effectively in a collaborative and innovative work environment.",
      ID: "Mahasiswa Program Studi Sistem Informasi yang memiliki minat di bidang data analisis. Berpengalaman mengolah, membersihkan, menganalisis, serta memvisualisasikan data menggunakan Microsoft Excel, SQL, Power BI, dan Python (Pandas) melalui berbagai proyek akademik dan portofolio. Mampu mengubah data mentah menjadi insight yang bermanfaat untuk mendukung pengambilan keputusan, serta memiliki semangat belajar yang tinggi dan siap berkontribusi dalam lingkungan kerja yang kolaboratif.",
    },
    location: "Jakarta Selatan, DKI Jakarta",
    email: "lukmanfatkhurozi@gmail.com",
    phone: "+6285776461158",
    whatsapp: "https://wa.me/6285776461158",
    linkedin: "https://linkedin.com/in/lukman-fatkhurozi",
    github: "https://github.com/lukmanfatkhurozi03",
    instagram: "https://instagram.com/lukman.ftr",
    instagramHandle: "@lukman.ftr",
    cvUrl: "/CV_Lukman_Fatkhurozi.pdf",
    portfolioPdfUrl: "/Portofolio_Lukman_Fatkhurozi.pdf",
  },
  stats: [
    {
      value: "3.95 / 4.00",
      label: { EN: "Cumulative GPA", ID: "IPK Kumulatif" },
      sub: { EN: "Information Systems, UBSI", ID: "Sistem Informasi, UBSI" },
    },
    {
      value: "BNSP",
      label: { EN: "Certified DBA", ID: "Sertifikasi DBA" },
      sub: { EN: "Database Administrator", ID: "Database Administrator" },
    },
    {
      value: "3",
      label: { EN: "Published Case Studies", ID: "Proyek Portofolio" },
      sub: { EN: "Medium & GitHub Repositories", ID: "Medium & Repositori GitHub" },
    },
    {
      value: "7",
      label: { EN: "Certifications", ID: "Sertifikasi Resmi" },
      sub: {
        EN: "BNSP, Dibimbing, RevoU, DQLab, Dicoding",
        ID: "BNSP, Dibimbing, RevoU, DQLab, Dicoding",
      },
    },
  ],
  projects: [
    {
      id: "proyek-1-online-store-orders",
      number: "PROYEK 1",
      category: {
        EN: "Data Analyst Project • E-Commerce Sales Dashboard",
        ID: "Proyek Data Analyst • Dashboard Penjualan E-Commerce",
      },
      toolBadge: "Microsoft Excel",
      period: "Jun 2026",
      title: {
        EN: 'Analyzing "Online Store Orders Dataset" (E-Commerce Sales Dashboard)',
        ID: 'Menganalisis Dataset "Online Store Orders Dataset"',
      },
      subtitle: {
        EN: "Source: excelx.com • 1,200 Rows • 14 Columns | Python (Pandas) Inspection & Excel Pivot Dashboard",
        ID: "Sumber: excelx.com • Jumlah Data: 1.200 • Jumlah Kolom: 14 | Python (Pandas) & Excel Pivot Table",
      },
      externalLink: "https://medium.com/p/3b4badf57ac4",
      externalLabel: {
        EN: "Read Full Case Study on Medium",
        ID: "Lihat Lengkap Pengerjaan di Medium",
      },
      platformBadge: "Medium Article",
      tags: [
        "Microsoft Excel",
        "Pivot Tables & Slicers",
        "Python (df.info / df.head)",
        "excelx.com (1,200 rows × 14 cols)",
        "KPI Dashboard",
      ],
      highlights: {
        EN: [
          "Inspected data types and missing values across 1,200 records and 14 columns from excelx.com using Python Pandas (`df.info()`, `df.head()`).",
          "Built an interactive Microsoft Excel dashboard equipped with year (2023–2026) and month (Jan–Dec) slicers to track Total Revenue ($1,264,762), Total Orders (1,200), Total Customers (1,189), and Total Items Sold (3,535).",
          "Analyzed monthly sales trends, top-selling products (Chair, Printer, Laptop, Desk, Tablet, Monitor, Phone), favorite payment methods (Online, Cash, Credit Card, Debit Card, Gift Card), and customer acquisition sources (Instagram 22%, Email 21%, Google 20%, Facebook 19%, Referral 18%).",
        ],
        ID: [
          "Melakukan pengecekan tipe data dan missing value pada 1.200 baris data dan 14 kolom (sumber: excelx.com) menggunakan Python Pandas (`df.info()`, `df.head()`).",
          "Mengembangkan dashboard interaktif menggunakan Microsoft Excel (Pivot Table, Pivot Chart, dan Slicer Tahun 2023–2026 & Bulan Jan–Des) dengan 4 KPI Utama: Total Pendapatan ($1.264.762), Total Pesanan (1.200), Total Pelanggan (1.189), dan Total Barang Terjual (3.535).",
          "Memvisualisasikan Tren Penjualan per Waktu (Bulan), Produk Terlaris (Chair, Printer, Laptop, Desk, Tablet, Monitor, Phone), Metode Pembayaran Favorit, serta Sumber Pelanggan (Instagram 22%, Email 21%, Google 20%, Facebook 19%, Referral 18%).",
        ],
      },
      metrics: [
        { label: "Sumber Dataset", value: "excelx.com" },
        { label: "Ukuran Dataset", value: "1.200 Baris × 14 Kolom" },
        { label: "Total Pendapatan", value: "$1.264.762" },
      ],
      previewType: "excel",
    },
    {
      id: "proyek-2-video-game-powerbi",
      number: "PROYEK 2",
      category: {
        EN: "Business Intelligence Project • Global Sales Analytics",
        ID: "Proyek Business Intelligence • Analisis Penjualan Global",
      },
      toolBadge: "Power BI",
      period: "Apr – May 2025",
      title: {
        EN: "Global Video Game Sales Analysis Dashboard Using Power BI",
        ID: "Dashboard Analisis Penjualan Video Game Global Menggunakan Power BI",
      },
      subtitle: {
        EN: "Source: Kaggle (vgsales) • Power Query Editor ETL & Interactive Power BI Dashboard",
        ID: "Sumber: Kaggle (vgsales) • Power Query Editor & Visualisasi Dashboard Power BI",
      },
      externalLink: "https://medium.com/p/997dab15c746",
      externalLabel: {
        EN: "Read Full Case Study on Medium",
        ID: "Lihat Lengkap Pengerjaan di Medium",
      },
      platformBadge: "Medium Article",
      tags: [
        "Power BI",
        "Power Query Editor",
        "Kaggle Dataset",
        "Global Sales KPIs",
        "Regional & Genre Analysis",
      ],
      highlights: {
        EN: [
          "Prepared and transformed the Kaggle video game sales dataset (`vgsales`) using Power Query Editor (`Table.TransformColumnTypes`, header promotion, and data cleaning).",
          "Designed an executive Power BI Dashboard tracking 4 core KPIs: 16.327K Total Games, 797K Total Sales, 577 Publishers, and 31 Gaming Platforms.",
          "Created interactive charts for Annual Sales Trends (1980–2020), Sales by Genre (led by Action 150K, Sports 114K, Shooter 96K, Role-Playing 80K), Regional Sales share (North America, Europe, Japan, Others), and Top 10 Best-Selling Games (led by Wii Sports at 8,274 & Super Mario Bros. at 4,024).",
        ],
        ID: [
          "Mengolah dan mentransformasi dataset penjualan video game dari Kaggle (`vgsales`) menggunakan Power Query Editor di Power BI.",
          "Merancang Dashboard Penjualan Game interaktif yang memuat 4 KPI utama: 16.327K Jumlah Game, 797K Jumlah Penjualan, 577 Jumlah Publisher, dan 31 Jumlah Platform.",
          "Memvisualisasikan Tren Penjualan per Tahun (1980–2020), Penjualan Berdasarkan Genre (Action 150K, Sports 114K, Shooter 96K, Role-Playing 80K, Platform 77K), Penjualan per Wilayah (North America, Eropa, Jepang, Lain-lain), serta Tabel 10 Game dengan Penjualan Tertinggi (Wii Sports, Super Mario Bros., Mario Kart Wii, dll).",
        ],
      },
      metrics: [
        { label: "Sumber Dataset", value: "Kaggle (vgsales)" },
        { label: "Skala Data", value: "16.327K Game • 31 Platform" },
        { label: "Total Penjualan", value: "797K • 577 Publisher" },
      ],
      previewType: "powerbi",
    },
    {
      id: "proyek-3-thelook-bigquery",
      number: "PROYEK 3",
      category: {
        EN: "Data Analyst Project • Cloud SQL Data Warehouse",
        ID: "Proyek Data Analyst • Analisis SQL Cloud Data Warehouse",
      },
      toolBadge: "Google BigQuery SQL",
      period: "Jul 2026",
      title: {
        EN: "TheLook E-Commerce Data Analysis Using Google BigQuery",
        ID: "Analisis Data TheLook Ecommerce Menggunakan BigQuery",
      },
      subtitle: {
        EN: "Dataset: bigquery-public-data.thelook_ecommerce • Multi-Table SQL Joins & Subqueries",
        ID: "Dataset: bigquery-public-data.thelook_ecommerce • Query SQL, INNER JOIN & Agregasi",
      },
      externalLink: "https://github.com/lukmanfatkhurozi03/TheLook-Ecommerce-Portfolio.git",
      externalLabel: {
        EN: "View SQL Repository on GitHub",
        ID: "Lihat Lengkap Pengerjaan di GitHub",
      },
      platformBadge: "GitHub Repository",
      tags: [
        "Google BigQuery",
        "SQL (INNER JOIN, GROUP BY)",
        "Scalar Subqueries",
        "thelook_ecommerce",
        "Revenue & Customer KPIs",
      ],
      highlights: {
        EN: [
          "Queried `bigquery-public-data.thelook_ecommerce` (`orders`, `order_items`, `products`) using Google BigQuery SQL to evaluate completed transactions (`status = 'Complete'`).",
          "Authored SQL queries using `INNER JOIN`, `GROUP BY`, `ORDER BY`, `ROUND(SUM(...), 2)`, and `LIMIT 10` to identify the Top 10 Product Categories by Total Revenue.",
          "Constructed multi-metric summary queries using scalar subqueries and `COUNT(DISTINCT user_id)` to compute overall completed `total_revenue` alongside `total_customers`.",
        ],
        ID: [
          "Menganalisis dataset publik `bigquery-public-data.thelook_ecommerce` menggunakan Google BigQuery dengan memfilter transaksi yang selesai (`WHERE status = 'Complete'`).",
          "Menulis query SQL dengan `INNER JOIN` antara tabel `order_items` dan `products`, `GROUP BY`, serta `ORDER BY total_revenue DESC LIMIT 10` untuk menemukan Top 10 Kategori Berdasarkan Revenue.",
          "Menggunakan subquery terstruktur dan fungsi agregasi `ROUND(SUM(sale_price), 2)` serta `COUNT(DISTINCT user_id)` untuk menghitung `total_revenue` dan `total_customers` secara akurat.",
        ],
      },
      metrics: [
        { label: "Platform", value: "Google BigQuery" },
        { label: "Dataset", value: "thelook_ecommerce" },
        { label: "Repositori", value: "GitHub SQL Portfolio" },
      ],
      previewType: "sql",
    },
  ],
  experiences: [
    {
      role: "Data Management Intern",
      organization: "Yayasan Perguruan Advent Salemba",
      period: "Sep – Nov 2026",
      type: { EN: "Internship", ID: "Magang" },
      points: {
        EN: [
          "Collected and recorded inventory data across multiple school departments with high accuracy.",
          "Organized, standardized, and managed institutional asset data using Microsoft Excel.",
          "Entered and synchronized inventory records into the school's web-based information system.",
          "Assisted in auditing and verifying asset information, including historical purchase dates and pricing.",
        ],
        ID: [
          "Mengumpulkan dan mencatat data inventaris dari berbagai departemen sekolah.",
          "Mengorganisir dan mengelola data aset menggunakan Microsoft Excel.",
          "Memasukkan informasi inventaris ke dalam sistem informasi berbasis web milik sekolah.",
          "Membantu memverifikasi informasi aset, termasuk tanggal pembelian dan harga.",
        ],
      },
    },
    {
      role: "Data Analyst & Business Intelligence (DSF 52.0)",
      organization: "Digital Skill Fair (DSF) by Dibimbing",
      period: "17 – 19 Jun 2026",
      type: { EN: "Intensive Training", ID: "Pelatihan Intensif" },
      points: {
        EN: [
          "Learned the fundamentals of SQL to query, process, and analyze data from relational databases.",
          "Performed data cleaning, data preprocessing, and exploratory data analysis (EDA) using Python (Pandas) to identify patterns, trends, and anomalies.",
          "Created data visualizations and developed informative insights to support data-driven decision-making.",
        ],
        ID: [
          "Mempelajari dasar-dasar SQL untuk melakukan query, memproses, dan menganalisis data dari database relasional.",
          "Melakukan data cleaning, data preprocessing, dan eksplorasi data menggunakan Python (Pandas) untuk mengidentifikasi pola, tren, dan anomali.",
          "Membuat visualisasi data dan menyusun insight informatif untuk mendukung pengambilan keputusan berbasis data.",
        ],
      },
    },
  ],
  education: {
    institution: "Universitas Bina Sarana Informatika (UBSI)",
    degree: {
      EN: "Bachelor’s Degree in Information Systems",
      ID: "S1 Sistem Informasi",
    },
    period: "2023 – Present",
    gpa: "3.95 / 4.00",
    highlights: {
      EN: [
        "Cumulative GPA: 3.95 / 4.00 (Portfolio Deck: 3.94)",
        "BNSP Certified — Database Administrator (No. Reg. DMS.1241.00955 2026)",
        "Focus on Information Systems, Database Management, and Business Intelligence",
      ],
      ID: [
        "IPK Kumulatif: 3.95 / 4.00 (Slide Portofolio: 3.94)",
        "Tersertifikasi BNSP — Database Administrator (No. Reg. DMS.1241.00955 2026)",
        "Fokus pada Sistem Informasi, Manajemen Basis Data, dan Business Intelligence",
      ],
    },
  },
  certifications: [
    {
      title: "Certified Database Administrator (Data Management)",
      issuer: "BNSP — LSP Universitas Bina Sarana Informatika",
      year: "06 Mar 2026",
      badge: "BNSP National Competence",
      credentialId: "No. Reg. DMS.1241.00955 2026",
      image: "/certifications/BNSP.jpg",
    },
    {
      title: "DSF 52.0 — Data Analyst & Business Intelligence",
      issuer: "Dibimbing.id",
      year: "17 – 19 Jun 2026",
      badge: "Business Intelligence",
      credentialId: "Certificate of Appreciation",
      image: "/certifications/DSF.jpg",
    },
    {
      title: "Fundamental SQL Using SELECT Statement",
      issuer: "DQLab",
      year: "12 Jun 2026",
      badge: "SQL & Data Analytics",
      credentialId: "#DQLABSQLT1RUFLNG",
      image: "/certifications/DQLab.png",
    },
    {
      title: "Intro to Data Analytics (1-Week Certified Mini Course)",
      issuer: "RevoU",
      year: "12 Jun 2026",
      badge: "Data Analytics",
      credentialId: "DAMC-080626-01-1-00413",
      image: "/certifications/RevoU.jpg",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding Indonesia",
      year: "07 Jun 2026",
      badge: "Python Programming",
      credentialId: "dicoding.com/certificates/53XE1GG7VZRN",
      image: "/certifications/Dicoding.png",
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      year: "04 Jun 2026",
      badge: "Relational Database",
      credentialId: "dicoding.com/certificates/MRZMWJK1RPYQ",
      image: "/certifications/Dicoding2.png",
    },
    {
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia",
      year: "03 Jun 2026",
      badge: "Data Science",
      credentialId: "dicoding.com/certificates/07Z67MN92PQR",
      image: "/certifications/dicoding3.png",
    },
  ] as Certification[],
  skills: {
    hardSkills: [
      {
        name: "Microsoft Excel",
        detail:
          "Pivot Tables, Pivot Charts, Interactive Slicers, Lookup Functions, KPI Sales Dashboards",
      },
      {
        name: "SQL (MySQL & Google BigQuery)",
        detail:
          "SELECT, WHERE, INNER JOIN, GROUP BY, ORDER BY, Scalar Subqueries, Aggregate Functions",
      },
      {
        name: "Power BI & Data Visualization",
        detail:
          "Power Query Editor (ETL), DAX KPI Cards, Multi-Region & Genre Sales Dashboards",
      },
      {
        name: "Python for Data Analysis",
        detail:
          "Pandas, NumPy, Data Type & Missing Value Inspection (df.info, df.head), Data Cleaning & EDA",
      },
      {
        name: "Exploratory Data Analysis (EDA) & Database Administration",
        detail:
          "BNSP Certified Database Administrator, Pattern & Trend Discovery, Inventory Data Management",
      },
    ],
    softSkills: {
      EN: [
        "Analytical & Structured Problem Solving",
        "Meticulous Attention to Detail in Data Processing",
        "Collaborative Teamwork & Communication",
        "Fast Adaptation to New Data Tools & Technologies",
      ],
      ID: [
        "Pemikiran Analitis & Pemecahan Masalah Terstruktur",
        "Ketelitian Tinggi dalam Pemrosesan Data",
        "Kolaborasi Tim & Komunikasi Efektif",
        "Adaptasi Cepat terhadap Teknologi & Tools Baru",
      ],
    },
    languages: [
      { name: "Bahasa Indonesia", level: { EN: "Native Speaker", ID: "Bahasa Ibu (Native)" } },
      {
        name: "English",
        level: { EN: "Basic Working Proficiency", ID: "Kemampuan Dasar Profesional" },
      },
    ],
  },
};

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("ID");
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filteredProjects =
    activeFilter === "ALL"
      ? DATA.projects
      : DATA.projects.filter((p) => p.toolBadge === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900">
      {/* Sticky Minimal Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 font-mono text-xs font-bold text-white">
              LF
            </span>
            <span>Lukman Fatkhurozi</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition-colors hover:text-slate-900">
              {lang === "EN" ? "About" : "Tentang"}
            </a>
            <a href="#projects" className="transition-colors hover:text-slate-900">
              {lang === "EN" ? "Projects" : "Proyek"}
            </a>
            <a href="#experience" className="transition-colors hover:text-slate-900">
              {lang === "EN" ? "Experience" : "Pengalaman"}
            </a>
            <a href="#skills" className="transition-colors hover:text-slate-900">
              {lang === "EN" ? "Skills & Certs" : "Sertifikasi"}
            </a>
            <a href="#contact" className="transition-colors hover:text-slate-900">
              {lang === "EN" ? "Contact" : "Kontak"}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100/80 p-0.5 text-xs font-medium">
              <button
                onClick={() => setLang("ID")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  lang === "ID"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang("EN")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  lang === "EN"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={DATA.profile.cvUrl}
              download="CV_Lukman_Fatkhurozi.pdf"
              className="hidden rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800 sm:inline-flex sm:items-center sm:gap-1.5"
            >
              <span>{lang === "EN" ? "Download CV" : "Unduh CV"}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-6 pt-12 pb-24">
        {/* HERO SECTION */}
        <section className="pb-16 pt-4 md:pb-24 md:pt-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3.5 py-1.5 text-xs font-medium text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <span>
              {lang === "EN"
                ? "Available for Data Analyst / BI / Database Opportunities"
                : "Terbuka untuk Peluang Data Analyst / BI / Database"}
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            {DATA.profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-blue-700 sm:text-xl">
            {DATA.profile.role[lang]}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {DATA.profile.tagline[lang]}
          </p>

          {/* Location & Direct Links */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-slate-400">📍</span> {DATA.profile.location}
            </span>
            <a
              href={`mailto:${DATA.profile.email}`}
              className="inline-flex items-center gap-1.5 hover:text-slate-900 underline-offset-4 hover:underline"
            >
              <span className="text-slate-400">✉️</span> {DATA.profile.email}
            </a>
            <a
              href={DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 underline-offset-4 hover:underline"
            >
              <span className="text-slate-400">in</span> linkedin.com/in/lukman-fatkhurozi
            </a>
            <a
              href={DATA.profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-900 underline-offset-4 hover:underline"
            >
              <span className="text-slate-400">📷</span> {DATA.profile.instagramHandle}
            </a>
          </div>

          {/* Primary Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-slate-800"
            >
              <span>{lang === "EN" ? "Explore Projects" : "Lihat Proyek Portofolio"}</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={DATA.profile.cvUrl}
              download="CV_Lukman_Fatkhurozi.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              <span>{lang === "EN" ? "Download CV (PDF)" : "Unduh CV (PDF)"}</span>
            </a>
            <a
              href={DATA.profile.portfolioPdfUrl}
              download="Portofolio_Data_Analyst_Lukman_Fatkhurozi.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              <span>
                {lang === "EN"
                  ? "Download Portfolio Deck (PDF)"
                  : "Unduh Slide Portofolio (PDF)"}
              </span>
            </a>
          </div>

          {/* Key Highlights Strip */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className="font-mono text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-800">
                  {stat.label[lang]}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">{stat.sub[lang]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT & METHODOLOGY SECTION */}
        <section id="about" className="scroll-mt-24 border-t border-slate-200 py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
                01 / {lang === "EN" ? "ABOUT ME" : "TENTANG SAYA"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                {lang === "EN" ? "Get to Know Me Closer" : "Mengenal Lebih Dekat dengan Saya"}
              </h2>
            </div>

            <div className="space-y-6 md:col-span-8">
              <p className="text-base leading-relaxed text-slate-600">
                {DATA.profile.summary[lang]}
              </p>

              {/* 6 Core Skills from Portfolio Slide 4 */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { icon: "🐍", title: "Python", sub: "Pandas, NumPy, Cleaning" },
                  { icon: "📊", title: "Power BI", sub: "Power Query, DAX, KPI" },
                  { icon: "📗", title: "Microsoft Excel", sub: "Pivot Table, Slicer, Lookup" },
                  { icon: "🗄️", title: "SQL", sub: "BigQuery & MySQL" },
                  { icon: "📈", title: "Data Visualization", sub: "Interactive Dashboards" },
                  {
                    icon: "🔍",
                    title: "Exploratory Data Analysis",
                    sub: "Pattern & Trend Discovery",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs"
                  >
                    <div className="text-lg">{item.icon}</div>
                    <div className="mt-1.5 text-sm font-bold text-slate-900">{item.title}</div>
                    <div className="mt-0.5 text-xs text-slate-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 border-t border-slate-200 py-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
                02 / {lang === "EN" ? "PORTFOLIO PROJECTS" : "PROYEK PORTOFOLIO"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {lang === "EN"
                  ? "Featured Data Analyst Projects"
                  : "Proyek Analisis Data & Dashboard"}
              </h2>
            </div>

            {/* Tool Filter */}
            <div className="flex flex-wrap gap-1.5">
              {["ALL", "Microsoft Excel", "Power BI", "Google BigQuery SQL"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {filter === "ALL"
                    ? lang === "EN"
                      ? "All Projects (3)"
                      : "Semua Proyek (3)"
                    : filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-md sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-12">
                  {/* Left column: details & link lengkap pengerjaan */}
                  <div className="flex flex-col justify-between lg:col-span-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs">
                        <span className="rounded-md bg-slate-900 px-2.5 py-1 font-mono font-bold text-white">
                          {project.number}
                        </span>
                        <span className="rounded-md bg-blue-50 px-2.5 py-1 font-mono font-semibold text-blue-700">
                          {project.toolBadge}
                        </span>
                        <span className="font-medium text-slate-500">
                          {project.category[lang]}
                        </span>
                      </div>

                      <h3 className="mt-3.5 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                        {project.title[lang]}
                      </h3>
                      <p className="mt-1.5 font-mono text-xs font-medium text-slate-500">
                        {project.subtitle[lang]}
                      </p>

                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
                        {project.highlights[lang].map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 space-y-4 border-t border-slate-100 pt-5">
                      {/* Link Lengkap Pengerjaan Call to Action */}
                      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-3.5">
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-800">
                            {lang === "EN"
                              ? "Full Documentation Link"
                              : "Link Lengkap Pengerjaan"}
                          </div>
                          <a
                            href={project.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-0.5 block truncate font-mono text-xs text-blue-700 underline underline-offset-2 hover:text-blue-900"
                          >
                            {project.externalLink}
                          </a>
                        </div>
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-800"
                        >
                          <span>{project.externalLabel[lang]}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column: Visual Replica of the Slides from Portfolio PDF */}
                  <div className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-5 lg:col-span-5">
                    <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-slate-500">
                        {project.number} • {project.platformBadge}
                      </span>
                    </div>

                    {/* PROYEK 1 PREVIEW */}
                    {project.previewType === "excel" && (
                      <div className="my-4 space-y-3">
                        <div className="rounded-lg bg-slate-900 p-3 font-mono text-[11px] text-slate-200">
                          <div className="text-emerald-400">
                            # Cek Tipe data dan missing value
                          </div>
                          <div className="mt-0.5 flex items-center justify-between">
                            <span>
                              df.<span className="text-amber-300">info</span>() &nbsp;|&nbsp; df.
                              <span className="text-amber-300">head</span>()
                            </span>
                            <span className="text-[10px] text-emerald-400">
                              ✓ 1200 rows × 14 cols
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Total Pendapatan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              $1.264.762
                            </div>
                          </div>
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Total Pesanan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              1.200
                            </div>
                          </div>
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Total Pelanggan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              1.189
                            </div>
                          </div>
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Total Barang Terjual
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              3.535
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs">
                          <div className="flex items-center justify-between font-semibold text-slate-800">
                            <span>Sumber Pelanggan & Produk Terlaris</span>
                            <span className="font-mono text-[10px] text-blue-700">2023–2026</span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {[
                              "Instagram 22%",
                              "Email 21%",
                              "Google 20%",
                              "Facebook 19%",
                              "Referral 18%",
                            ].map((src) => (
                              <span
                                key={src}
                                className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-medium text-blue-800"
                              >
                                {src}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PROYEK 2 PREVIEW */}
                    {project.previewType === "powerbi" && (
                      <div className="my-4 space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Jumlah Game
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              16.327K
                            </div>
                          </div>
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Jumlah Penjualan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              797K
                            </div>
                          </div>
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Jumlah Publisher
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              577
                            </div>
                          </div>
                          <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                            <div className="text-[10px] font-medium text-slate-400">
                              Jumlah Platform
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-slate-900">
                              31
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-white p-3">
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                            <span>Penjualan Berdasarkan Genre</span>
                            <span className="font-mono text-[10px] text-blue-700">Power BI</span>
                          </div>
                          <div className="mt-2.5 space-y-1.5">
                            {[
                              { genre: "Action", val: "150K", w: "w-full" },
                              { genre: "Sports", val: "114K", w: "w-[76%]" },
                              { genre: "Shooter", val: "96K", w: "w-[64%]" },
                              { genre: "Role-Playing", val: "80K", w: "w-[53%]" },
                            ].map((g) => (
                              <div key={g.genre}>
                                <div className="flex justify-between text-[11px] text-slate-600">
                                  <span>{g.genre}</span>
                                  <span className="font-mono font-semibold">{g.val}</span>
                                </div>
                                <div className="mt-0.5 h-1.5 w-full rounded-full bg-slate-100">
                                  <div className={`h-1.5 ${g.w} rounded-full bg-blue-600`}></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PROYEK 3 PREVIEW */}
                    {project.previewType === "sql" && (
                      <div className="my-4 space-y-2.5">
                        <div className="rounded-lg bg-slate-900 p-3.5 font-mono text-[10.5px] leading-relaxed text-slate-200">
                          <div className="text-emerald-400">
                            -- Top 10 Kategori Berdasarkan revenue
                          </div>
                          <div>
                            <span className="text-pink-400">SELECT</span>
                          </div>
                          <div className="pl-3">p.category,</div>
                          <div className="pl-3">
                            <span className="text-amber-300">ROUND</span>(
                            <span className="text-amber-300">SUM</span>(oi.sale_price), 2){" "}
                            <span className="text-pink-400">AS</span> total_revenue
                          </div>
                          <div>
                            <span className="text-pink-400">FROM</span>{" "}
                            `bigquery-public-data.thelook_ecommerce.order_items`{" "}
                            <span className="text-pink-400">AS</span> oi
                          </div>
                          <div>
                            <span className="text-pink-400">INNER JOIN</span>{" "}
                            `bigquery-public-data.thelook_ecommerce.products`{" "}
                            <span className="text-pink-400">AS</span> p
                          </div>
                          <div className="pl-3">
                            <span className="text-pink-400">ON</span> oi.product_id = p.id
                          </div>
                          <div>
                            <span className="text-pink-400">WHERE</span> oi.status ={" "}
                            <span className="text-amber-200">&apos;Complete&apos;</span>
                          </div>
                          <div>
                            <span className="text-pink-400">GROUP BY</span> p.category
                          </div>
                          <div>
                            <span className="text-pink-400">ORDER BY</span> total_revenue{" "}
                            <span className="text-pink-400">DESC</span>
                          </div>
                          <div>
                            <span className="text-pink-400">LIMIT</span> 10;
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-2 border-t border-slate-200/70 pt-3">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-[10px] text-slate-400">{m.label}</div>
                          <div className="font-mono text-[11px] font-semibold text-slate-800">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="scroll-mt-24 border-t border-slate-200 py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Experience & Training Column */}
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
                03 / {lang === "EN" ? "EXPERIENCE & TRAINING" : "PENGALAMAN & PELATIHAN"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                {lang === "EN" ? "Professional & Training Track" : "Pengalaman Kerja & Pelatihan"}
              </h2>

              <div className="mt-8 space-y-8 border-l-2 border-slate-200 pl-6">
                {DATA.experiences.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white"></span>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-md bg-slate-100 px-2.5 py-0.5 font-mono font-medium text-slate-700">
                        {exp.period}
                      </span>
                      <span className="rounded-md bg-blue-50 px-2.5 py-0.5 font-medium text-blue-700">
                        {exp.type[lang]}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-slate-950">{exp.role}</h3>
                    <p className="text-sm font-medium text-slate-600">{exp.organization}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                      {exp.points[lang].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
                04 / {lang === "EN" ? "ACADEMIC BACKGROUND" : "PENDIDIKAN"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                {lang === "EN" ? "Education" : "Pendidikan"}
              </h2>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs font-medium text-slate-700">
                    {DATA.education.period}
                  </span>
                  <span className="rounded-md bg-emerald-50 px-2.5 py-1 font-mono text-xs font-bold text-emerald-700">
                    GPA {DATA.education.gpa}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  {DATA.education.institution}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-700">
                  {DATA.education.degree[lang]}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-sm text-slate-600">
                  {DATA.education.highlights[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-blue-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & CERTIFICATIONS SECTION (WITH CERTIFICATE IMAGES) */}
        <section id="skills" className="scroll-mt-24 border-t border-slate-200 py-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
            05 / {lang === "EN" ? "CERTIFICATIONS & SKILLS" : "SERTIFIKASI & KEAHLIAN"}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {lang === "EN"
              ? "Verified Certifications & Technical Skills"
              : "Sertifikasi Kompetensi & Keahlian Teknis"}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {lang === "EN"
              ? "Click on any certificate card below to inspect the full-resolution certificate."
              : "Klik pada gambar sertifikat di bawah ini untuk melihat tampilan sertifikat ukuran penuh."}
          </p>

          {/* Certifications Gallery Grid with Images */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.certifications.map((cert) => (
              <div
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Certificate Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition-all group-hover:bg-slate-900/35 group-hover:opacity-100">
                      <span className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm">
                        🔍 {lang === "EN" ? "View Certificate" : "Lihat Sertifikat"}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Metadata */}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-700">
                        {cert.badge}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">{cert.year}</span>
                    </div>
                    <h3 className="mt-2.5 text-sm font-bold leading-snug text-slate-950 group-hover:text-blue-700">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-600">{cert.issuer}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-2.5 flex items-center justify-between">
                  <span className="truncate font-mono text-[10px] text-slate-500">
                    {cert.credentialId}
                  </span>
                  <span className="text-xs font-semibold text-blue-700">↗</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Stack & Soft Skills Below Certifications */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {lang === "EN" ? "Core Technical Stack (Hard Skills)" : "Keahlian Teknis Utama"}
              </h3>
              <div className="space-y-3">
                {DATA.skills.hardSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-300"
                  >
                    <div className="font-semibold text-slate-950">{skill.name}</div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-600">
                      {skill.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {lang === "EN" ? "Soft Skills & Languages" : "Soft Skills & Bahasa"}
              </h3>
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {lang === "EN" ? "Professional Soft Skills" : "Soft Skills"}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {DATA.skills.softSkills[lang].map((soft) => (
                    <span
                      key={soft}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {soft}
                    </span>
                  ))}
                </div>

                <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {lang === "EN" ? "Languages" : "Bahasa"}
                </h4>
                <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                  {DATA.skills.languages.map((l) => (
                    <div
                      key={l.name}
                      className="rounded-lg border border-slate-100 bg-slate-50 p-3"
                    >
                      <div className="text-xs font-semibold text-slate-900">{l.name}</div>
                      <div className="mt-0.5 text-[11px] text-slate-500">{l.level[lang]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 border-t border-slate-200 pt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xs sm:p-12">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-700">
                06 / {lang === "EN" ? "CONTACT" : "KONTAK"}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                {lang === "EN" ? "Let’s discuss further." : "Mari Berdiskusi Lebih Lanjut."}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {lang === "EN"
                  ? "I am actively looking for internship and entry-level opportunities in Data Analytics, Business Intelligence, and Database Administration in Jakarta or remote."
                  : "Saya terbuka untuk berdiskusi mengenai peluang magang maupun kerja di bidang Data Analytics, Business Intelligence, dan Database Administration."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${DATA.profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800"
                >
                  <span>✉️ {DATA.profile.email}</span>
                </a>
                <a
                  href={DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                >
                  <span>in linkedin.com/in/lukman-fatkhurozi</span>
                </a>
                <a
                  href={DATA.profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                >
                  <span>💬 +62857 7646 1158</span>
                </a>
                <a
                  href={DATA.profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                >
                  <span>📷 Instagram ({DATA.profile.instagramHandle})</span>
                </a>
                <a
                  href={DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                >
                  <span>💻 GitHub (lukmanfatkhurozi03)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Viewing Full-Resolution Certificate Image */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-700">
                    {selectedCert.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{selectedCert.year}</span>
                </div>
                <h3 className="mt-1 text-base font-bold text-slate-950">{selectedCert.title}</h3>
                <p className="text-xs text-slate-500">
                  {selectedCert.issuer} • {selectedCert.credentialId}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                ✕ {lang === "EN" ? "Close" : "Tutup"}
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-slate-100 p-4 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[72vh] w-auto rounded-lg object-contain shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 sm:flex-row">
          <div>
            © 2026 <strong className="text-slate-800">Lukman Fatkhurozi</strong>. Built with Next.js & Tailwind CSS — Ready for Vercel.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={DATA.profile.cvUrl}
              download="CV_Lukman_Fatkhurozi.pdf"
              className="font-medium text-slate-700 hover:text-slate-950"
            >
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
