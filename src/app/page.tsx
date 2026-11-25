"use client";

import React, { useState, useEffect } from "react";

type Language = "EN" | "ID";
type Theme = "light" | "dark";

interface Certification {
  title: string;
  issuer: string;
  year: string;
  badge: string;
  credentialId: string;
  image: string;
}

/* Vector SVG Icons (UI/UX Pro Max Standard: No Emojis as Structural Icons) */
const Icons = {
  Sun: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  Moon: () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  MapPin: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Mail: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Phone: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  GitHub: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Instagram: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Download: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  ExternalLink: () => (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  ),
  Code: () => (
    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  BarChart: () => (
    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  ),
  Table: () => (
    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 9v12" />
    </svg>
  ),
  Database: () => (
    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  PieChart: () => (
    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  Search: () => (
    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Check: () => (
    <svg className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ZoomIn: () => (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  ),
  Close: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
};

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
  const [theme, setTheme] = useState<Theme>("light");
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Sync theme with localStorage and system preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Close certificate modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const filteredProjects =
    activeFilter === "ALL"
      ? DATA.projects
      : DATA.projects.filter((p) => p.toolBadge === activeFilter);

  const coreCompetencies = [
    { icon: <Icons.Code />, title: "Python", sub: "Pandas, NumPy, Cleaning" },
    { icon: <Icons.BarChart />, title: "Power BI", sub: "Power Query, DAX, KPI" },
    { icon: <Icons.Table />, title: "Microsoft Excel", sub: "Pivot Table, Slicer, Lookup" },
    { icon: <Icons.Database />, title: "SQL", sub: "BigQuery & MySQL" },
    { icon: <Icons.PieChart />, title: "Data Visualization", sub: "Interactive Dashboards" },
    {
      icon: <Icons.Search />,
      title: "Exploratory Data Analysis",
      sub: "Pattern & Trend Discovery",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200">
      {/* Sticky Minimal Navigation */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md transition-colors duration-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded-lg"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 dark:bg-blue-600 font-mono text-xs font-bold text-white shadow-xs">
              LF
            </span>
            <span>Lukman Fatkhurozi</span>
          </a>

          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex"
          >
            <a
              href="#about"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded"
            >
              {lang === "EN" ? "About" : "Tentang"}
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded"
            >
              {lang === "EN" ? "Projects" : "Proyek"}
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded"
            >
              {lang === "EN" ? "Experience" : "Pengalaman"}
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded"
            >
              {lang === "EN" ? "Certifications" : "Sertifikasi"}
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 rounded"
            >
              {lang === "EN" ? "Contact" : "Kontak"}
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Theme Toggle (Light / Dark) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"
              }
              title={
                theme === "light"
                  ? lang === "EN"
                    ? "Switch to Dark theme"
                    : "Ganti ke tema Gelap"
                  : lang === "EN"
                  ? "Switch to Light theme"
                  : "Ganti ke tema Terang"
              }
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {theme === "light" ? <Icons.Moon /> : <Icons.Sun />}
              <span className="hidden sm:inline">
                {theme === "light"
                  ? lang === "EN"
                    ? "Dark"
                    : "Gelap"
                  : lang === "EN"
                  ? "Light"
                  : "Terang"}
              </span>
            </button>

            {/* Language Toggle */}
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 p-0.5 text-xs font-medium"
            >
              <button
                type="button"
                onClick={() => setLang("ID")}
                aria-pressed={lang === "ID"}
                className={`cursor-pointer rounded-md px-2.5 py-1 transition-all ${
                  lang === "ID"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("EN")}
                aria-pressed={lang === "EN"}
                className={`cursor-pointer rounded-md px-2.5 py-1 transition-all ${
                  lang === "EN"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={DATA.profile.cvUrl}
              download="CV_Lukman_Fatkhurozi.pdf"
              className="hidden rounded-lg bg-zinc-900 dark:bg-blue-600 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:hover:bg-blue-500 sm:inline-flex sm:items-center sm:gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span>{lang === "EN" ? "Download CV" : "Unduh CV"}</span>
              <Icons.Download />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-6 pt-12 pb-24">
        {/* HERO SECTION */}
        <section className="pb-16 pt-4 md:pb-24 md:pt-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/70 bg-blue-50/80 dark:bg-blue-950/60 px-3.5 py-1.5 text-xs font-medium text-blue-800 dark:text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            <span>
              {lang === "EN"
                ? "Available for Data Analyst / BI / Database Opportunities"
                : "Terbuka untuk Peluang Data Analyst / BI / Database"}
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl md:text-6xl">
            {DATA.profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-blue-600 dark:text-blue-400 sm:text-xl">
            {DATA.profile.role[lang]}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
            {DATA.profile.tagline[lang]}
          </p>

          {/* Location & Direct Links */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <Icons.MapPin />
              <span>{DATA.profile.location}</span>
            </span>
            <a
              href={`mailto:${DATA.profile.email}`}
              className="inline-flex items-center gap-2 hover:text-zinc-950 dark:hover:text-white underline-offset-4 hover:underline"
            >
              <Icons.Mail />
              <span>{DATA.profile.email}</span>
            </a>
            <a
              href={DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-zinc-950 dark:hover:text-white underline-offset-4 hover:underline"
            >
              <Icons.LinkedIn />
              <span>linkedin.com/in/lukman-fatkhurozi</span>
            </a>
            <a
              href={DATA.profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-zinc-950 dark:hover:text-white underline-offset-4 hover:underline"
            >
              <Icons.Instagram />
              <span>{DATA.profile.instagramHandle}</span>
            </a>
          </div>

          {/* Primary Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <span>{lang === "EN" ? "Explore Projects" : "Lihat Proyek Portofolio"}</span>
              <Icons.ArrowRight />
            </a>
            <a
              href={DATA.profile.cvUrl}
              download="CV_Lukman_Fatkhurozi.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/80"
            >
              <Icons.Download />
              <span>{lang === "EN" ? "Download CV (PDF)" : "Unduh CV (PDF)"}</span>
            </a>
            <a
              href={DATA.profile.portfolioPdfUrl}
              download="Portofolio_Data_Analyst_Lukman_Fatkhurozi.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/80"
            >
              <Icons.Download />
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
                className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-5 shadow-2xs transition-colors"
              >
                <div className="font-mono text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {stat.label[lang]}
                </div>
                <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                  {stat.sub[lang]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT & METHODOLOGY SECTION */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800/90 py-16"
        >
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                01 / {lang === "EN" ? "ABOUT ME" : "TENTANG SAYA"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                {lang === "EN" ? "Get to Know Me Closer" : "Mengenal Lebih Dekat dengan Saya"}
              </h2>
            </div>

            <div className="space-y-6 md:col-span-8">
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                {DATA.profile.summary[lang]}
              </p>

              {/* 6 Core Skills from Portfolio Slide 4 with SVG Icons */}
              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
                {coreCompetencies.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 shadow-2xs transition-colors hover:border-blue-300 dark:hover:border-blue-800"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/70">
                      {item.icon}
                    </div>
                    <div className="mt-3 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800/90 py-16"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                02 / {lang === "EN" ? "PORTFOLIO PROJECTS" : "PROYEK PORTOFOLIO"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
                {lang === "EN"
                  ? "Featured Data Analyst Projects"
                  : "Proyek Analisis Data & Dashboard"}
              </h2>
            </div>

            {/* Tool Filter */}
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects by tool">
              {["ALL", "Microsoft Excel", "Power BI", "Google BigQuery SQL"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-zinc-900 dark:bg-blue-600 text-white shadow-xs"
                      : "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-100"
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
                className="group overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 p-6 shadow-2xs transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-12">
                  {/* Left column: details & link lengkap pengerjaan */}
                  <div className="flex flex-col justify-between lg:col-span-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs">
                        <span className="rounded-md bg-zinc-900 dark:bg-zinc-800 px-2.5 py-1 font-mono font-bold text-white dark:text-zinc-100">
                          {project.number}
                        </span>
                        <span className="rounded-md bg-blue-50 dark:bg-blue-950/80 px-2.5 py-1 font-mono font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                          {project.toolBadge}
                        </span>
                        <span className="font-medium text-zinc-500 dark:text-zinc-400">
                          {project.category[lang]}
                        </span>
                      </div>

                      <h3 className="mt-3.5 text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl">
                        {project.title[lang]}
                      </h3>
                      <p className="mt-1.5 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {project.subtitle[lang]}
                      </p>

                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {project.highlights[lang].map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                      {/* Link Lengkap Pengerjaan Call to Action */}
                      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 p-3.5">
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                            {lang === "EN"
                              ? "Full Documentation Link"
                              : "Link Lengkap Pengerjaan"}
                          </div>
                          <a
                            href={project.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-0.5 block truncate font-mono text-xs text-blue-700 dark:text-blue-400 underline underline-offset-2 hover:text-blue-900 dark:hover:text-blue-300"
                          >
                            {project.externalLink}
                          </a>
                        </div>
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 px-3.5 py-2 text-xs font-semibold text-white transition-colors"
                        >
                          <span>{project.externalLabel[lang]}</span>
                          <Icons.ExternalLink />
                        </a>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-2.5 py-1 font-mono text-[11px] font-medium text-zinc-600 dark:text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column: Visual Replica of the Slides from Portfolio PDF */}
                  <div className="flex flex-col justify-between rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 p-5 lg:col-span-5">
                    <div className="flex items-center justify-between border-b border-zinc-200/70 dark:border-zinc-800 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                        {project.number} • {project.platformBadge}
                      </span>
                    </div>

                    {/* PROYEK 1 PREVIEW */}
                    {project.previewType === "excel" && (
                      <div className="my-4 space-y-3">
                        <div className="rounded-lg bg-zinc-900 dark:bg-black border border-zinc-800 p-3 font-mono text-[11px] text-zinc-200">
                          <div className="text-emerald-400">
                            # Cek Tipe data dan missing value
                          </div>
                          <div className="mt-0.5 flex items-center justify-between">
                            <span>
                              df.<span className="text-amber-300">info</span>() &nbsp;|&nbsp; df.
                              <span className="text-amber-300">head</span>()
                            </span>
                            <span className="text-[10px] text-emerald-400">
                              1200 rows × 14 cols
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Total Pendapatan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              $1.264.762
                            </div>
                          </div>
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Total Pesanan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              1.200
                            </div>
                          </div>
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Total Pelanggan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              1.189
                            </div>
                          </div>
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Total Barang Terjual
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              3.535
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 text-xs">
                          <div className="flex items-center justify-between font-semibold text-zinc-800 dark:text-zinc-200">
                            <span>Sumber Pelanggan & Produk Terlaris</span>
                            <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400">
                              2023–2026
                            </span>
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
                                className="rounded bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 font-mono text-[10px] font-medium text-blue-800 dark:text-blue-300"
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
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Jumlah Game
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              16.327K
                            </div>
                          </div>
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Jumlah Penjualan
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              797K
                            </div>
                          </div>
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Jumlah Publisher
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              577
                            </div>
                          </div>
                          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2.5">
                            <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              Jumlah Platform
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                              31
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3">
                          <div className="flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                            <span>Penjualan Berdasarkan Genre</span>
                            <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400">
                              Power BI
                            </span>
                          </div>
                          <div className="mt-2.5 space-y-1.5">
                            {[
                              { genre: "Action", val: "150K", w: "w-full" },
                              { genre: "Sports", val: "114K", w: "w-[76%]" },
                              { genre: "Shooter", val: "96K", w: "w-[64%]" },
                              { genre: "Role-Playing", val: "80K", w: "w-[53%]" },
                            ].map((g) => (
                              <div key={g.genre}>
                                <div className="flex justify-between text-[11px] text-zinc-600 dark:text-zinc-400">
                                  <span>{g.genre}</span>
                                  <span className="font-mono font-semibold text-zinc-800 dark:text-zinc-200">
                                    {g.val}
                                  </span>
                                </div>
                                <div className="mt-0.5 h-1.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
                                  <div
                                    className={`h-1.5 ${g.w} rounded-full bg-blue-600 dark:bg-blue-500`}
                                  ></div>
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
                        <div className="rounded-lg bg-zinc-900 dark:bg-black border border-zinc-800 p-3.5 font-mono text-[10.5px] leading-relaxed text-zinc-200">
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

                    <div className="grid grid-cols-3 gap-2 border-t border-zinc-200/70 dark:border-zinc-800 pt-3">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                            {m.label}
                          </div>
                          <div className="font-mono text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">
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
        <section
          id="experience"
          className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800/90 py-16"
        >
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Experience & Training Column */}
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                03 / {lang === "EN" ? "EXPERIENCE & TRAINING" : "PENGALAMAN & PELATIHAN"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                {lang === "EN" ? "Professional & Training Track" : "Pengalaman Kerja & Pelatihan"}
              </h2>

              <div className="mt-8 space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 pl-6">
                {DATA.experiences.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-zinc-950"></span>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 font-mono font-medium text-zinc-700 dark:text-zinc-300">
                        {exp.period}
                      </span>
                      <span className="rounded-md bg-blue-50 dark:bg-blue-950/80 px-2.5 py-0.5 font-medium text-blue-700 dark:text-blue-300">
                        {exp.type[lang]}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-zinc-950 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {exp.organization}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {exp.points[lang].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500"></span>
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
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                04 / {lang === "EN" ? "ACADEMIC BACKGROUND" : "PENDIDIKAN"}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                {lang === "EN" ? "Education" : "Pendidikan"}
              </h2>

              <div className="mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 font-mono text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {DATA.education.period}
                  </span>
                  <span className="rounded-md bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-800/60 px-2.5 py-1 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    GPA {DATA.education.gpa}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-zinc-950 dark:text-zinc-100">
                  {DATA.education.institution}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {DATA.education.degree[lang]}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-zinc-100 dark:border-zinc-800 pt-4 text-sm text-zinc-600 dark:text-zinc-300">
                  {DATA.education.highlights[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5">
                        <Icons.Check />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & CERTIFICATIONS SECTION (WITH CERTIFICATE IMAGES) */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800/90 py-16"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            05 / {lang === "EN" ? "CERTIFICATIONS & SKILLS" : "SERTIFIKASI & KEAHLIAN"}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            {lang === "EN"
              ? "Verified Certifications & Technical Skills"
              : "Sertifikasi Kompetensi & Keahlian Teknis"}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {lang === "EN"
              ? "Click on any certificate card below to inspect the full-resolution certificate."
              : "Klik pada kartu sertifikat di bawah ini untuk melihat gambar sertifikat ukuran penuh."}
          </p>

          {/* Certifications Gallery Grid with Accessible Buttons */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.certifications.map((cert) => (
              <button
                key={cert.title}
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer text-left overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <div className="w-full">
                  {/* Certificate Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-zinc-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 transition-all group-hover:bg-zinc-950/45 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 shadow-sm">
                        <Icons.ZoomIn />
                        <span>{lang === "EN" ? "View Certificate" : "Lihat Sertifikat"}</span>
                      </span>
                    </div>
                  </div>

                  {/* Certificate Metadata */}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded bg-blue-50 dark:bg-blue-950/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-700 dark:text-blue-300">
                        {cert.badge}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                        {cert.year}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-sm font-bold leading-snug text-zinc-950 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/60 px-4 py-2.5 flex items-center justify-between">
                  <span className="truncate font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    {cert.credentialId}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400">
                    <Icons.ExternalLink />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Technical Stack & Soft Skills Below Certifications */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {lang === "EN" ? "Core Technical Stack (Hard Skills)" : "Keahlian Teknis Utama"}
              </h3>
              <div className="space-y-3">
                {DATA.skills.hardSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
                  >
                    <div className="font-semibold text-zinc-950 dark:text-zinc-100">
                      {skill.name}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {skill.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {lang === "EN" ? "Soft Skills & Languages" : "Soft Skills & Bahasa"}
              </h3>
              <div className="mt-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {lang === "EN" ? "Professional Soft Skills" : "Soft Skills"}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {DATA.skills.softSkills[lang].map((soft) => (
                    <span
                      key={soft}
                      className="rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {soft}
                    </span>
                  ))}
                </div>

                <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {lang === "EN" ? "Languages" : "Bahasa"}
                </h4>
                <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                  {DATA.skills.languages.map((l) => (
                    <div
                      key={l.name}
                      className="rounded-lg border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-3"
                    >
                      <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                        {l.name}
                      </div>
                      <div className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        {l.level[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-zinc-200 dark:border-zinc-800/90 pt-16"
        >
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-2xs sm:p-12">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                06 / {lang === "EN" ? "CONTACT" : "KONTAK"}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                {lang === "EN" ? "Let’s discuss further." : "Mari Berdiskusi Lebih Lanjut."}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                {lang === "EN"
                  ? "I am actively looking for internship and entry-level opportunities in Data Analytics, Business Intelligence, and Database Administration in Jakarta or remote."
                  : "Saya terbuka untuk berdiskusi mengenai peluang magang maupun kerja di bidang Data Analytics, Business Intelligence, dan Database Administration."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${DATA.profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 px-5 py-3 text-sm font-medium text-white transition-all"
                >
                  <Icons.Mail />
                  <span>{DATA.profile.email}</span>
                </a>
                <a
                  href={DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                >
                  <Icons.LinkedIn />
                  <span>linkedin.com/in/lukman-fatkhurozi</span>
                </a>
                <a
                  href={DATA.profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                >
                  <Icons.Phone />
                  <span>+62857 7646 1158</span>
                </a>
                <a
                  href={DATA.profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                >
                  <Icons.Instagram />
                  <span>Instagram ({DATA.profile.instagramHandle})</span>
                </a>
                <a
                  href={DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                >
                  <Icons.GitHub />
                  <span>GitHub (lukmanfatkhurozi03)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Viewing Full-Resolution Certificate Image */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 px-5 py-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-blue-50 dark:bg-blue-950 px-2 py-0.5 font-mono text-[10px] font-semibold text-blue-700 dark:text-blue-300">
                    {selectedCert.badge}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {selectedCert.year}
                  </span>
                </div>
                <h3
                  id="cert-modal-title"
                  className="mt-1 text-base font-bold text-zinc-950 dark:text-zinc-50"
                >
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {selectedCert.issuer} • {selectedCert.credentialId}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              >
                <Icons.Close />
                <span>{lang === "EN" ? "Close" : "Tutup"}</span>
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-zinc-100 dark:bg-zinc-950 p-4 flex items-center justify-center">
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
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-8 transition-colors">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <div>
            © 2026{" "}
            <strong className="text-zinc-800 dark:text-zinc-200">
              Lukman Fatkhurozi
            </strong>
            . Built with Next.js & Tailwind CSS — Ready for Vercel.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={DATA.profile.cvUrl}
              download="CV_Lukman_Fatkhurozi.pdf"
              className="font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
