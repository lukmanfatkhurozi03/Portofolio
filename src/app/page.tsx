"use client";

import React, { useState, useEffect, useRef } from "react";

type Language = "EN" | "ID";
type Theme = "light" | "dark";

interface Certification {
  title: string;
  issuer: string;
  year: { EN: string; ID: string };
  badge: { EN: string; ID: string };
  credentialId: string;
  image: string;
}

/* Scroll-Triggered Reveal Wrapper (UI/UX Pro Max: Subtle 14px Y-offset + Stagger Delay) */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3.5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* Vector SVG Icons (UI/UX Pro Max Standard: Clean SVG Icons) */
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
  ArrowRight: () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
  LinkedIn: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  GitHub: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Instagram: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Mail: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  AnalyticsMonitor: () => (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
      <path d="M7 13v-3" />
      <path d="M11 13V8" />
      <path d="M15 13v-5" />
    </svg>
  ),
  DashboardLayout: () => (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <path d="m13 15 2-2 3 3" />
    </svg>
  ),
  DatabaseServer: () => (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
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
  Check: () => (
    <svg className="h-4 w-4 shrink-0 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Menu: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
};

const DATA = {
  profile: {
    name: "Lukman Fatkhurozi",
    photo: "/lukman-photo.png",
    greeting: {
      EN: "Hello,",
      ID: "Halo,",
    },
    iamPrefix: {
      EN: "I Am",
      ID: "Saya",
    },
    rolesLine: {
      EN: "Data Analyst || Business Intelligence || Database Administrator",
      ID: "Analis Data || Business Intelligence || Administrator Basis Data",
    },
    experienceHighlight: {
      EN: {
        prefix: "GPA 3.95/4.00 & ",
        accent: "BNSP Certified Database Administrator",
      },
      ID: {
        prefix: "IPK 3.95/4.00 & ",
        accent: "Database Administrator Tersertifikasi BNSP",
      },
    },
    quote: {
      EN: '"Data is just raw numbers until structured analysis and clear visualization turn it into decisions."',
      ID: '"Data hanyalah kumpulan angka mentah sampai analisis terstruktur dan visualisasi mengubahnya menjadi keputusan."',
    },
    location: "Jakarta Selatan, DKI Jakarta",
    email: "lukmanfatkhurozi@gmail.com",
    linkedin: "https://linkedin.com/in/lukman-fatkhurozi",
    github: "https://github.com/lukmanfatkhurozi03",
    instagram: "https://instagram.com/lukman.ftr",
    instagramHandle: "@lukman.ftr",
    cvUrl: "/CV_Lukman_Fatkhurozi.pdf",
    portfolioPdfUrl: "/Portofolio_Lukman_Fatkhurozi.pdf",
  },
  skillBadges: [
    // Row 1: Core Square App-Tile Badges
    {
      code: "Py",
      name: { EN: "Python", ID: "Python" },
      sub: { EN: "Pandas & NumPy", ID: "Pandas & NumPy" },
      bg: "bg-[#1e293b] border-[#38bdf8]",
      text: "text-[#38bdf8]",
      shape: "square",
    },
    {
      code: "Xl",
      name: { EN: "Microsoft Excel", ID: "Microsoft Excel" },
      sub: { EN: "Pivot & Slicers", ID: "Pivot & Slicer" },
      bg: "bg-[#064e3b] border-[#34d399]",
      text: "text-[#34d399]",
      shape: "square",
    },
    {
      code: "BI",
      name: { EN: "Power BI", ID: "Power BI" },
      sub: { EN: "DAX & Power Query", ID: "DAX & Power Query" },
      bg: "bg-[#451a03] border-[#fbbf24]",
      text: "text-[#fbbf24]",
      shape: "square",
    },
    {
      code: "SQL",
      name: { EN: "SQL Query", ID: "Query SQL" },
      sub: { EN: "Relational DB", ID: "Basis Data Relasional" },
      bg: "bg-[#1e1b4b] border-[#818cf8]",
      text: "text-[#818cf8]",
      shape: "square",
    },
    {
      code: "BQ",
      name: { EN: "Google BigQuery", ID: "Google BigQuery" },
      sub: { EN: "Cloud Data Warehouse", ID: "Data Warehouse Cloud" },
      bg: "bg-[#172554] border-[#60a5fa]",
      text: "text-[#60a5fa]",
      shape: "square",
    },
    {
      code: "Pd",
      name: { EN: "Pandas", ID: "Pandas" },
      sub: { EN: "Data Cleaning", ID: "Pembersihan Data" },
      bg: "bg-[#2e1065] border-[#c084fc]",
      text: "text-[#c084fc]",
      shape: "square",
    },
    // Row 2: Secondary Circular/Pill Badges
    {
      code: "EDA",
      name: { EN: "Exploratory Data", ID: "Eksplorasi Data" },
      sub: { EN: "Pattern & Anomaly", ID: "Pola & Anomali" },
      bg: "bg-[#3f1d2e] border-[#f472b6]",
      text: "text-[#f472b6]",
      shape: "circle",
    },
    {
      code: "DBA",
      name: { EN: "Database Admin", ID: "Admin Basis Data" },
      sub: { EN: "BNSP Certified", ID: "Tersertifikasi BNSP" },
      bg: "bg-[#431407] border-[#fb923c]",
      text: "text-[#fb923c]",
      shape: "circle",
    },
    {
      code: "ETL",
      name: { EN: "Power Query ETL", ID: "Power Query ETL" },
      sub: { EN: "Data Modeling", ID: "Pemodelan Data" },
      bg: "bg-[#14532d] border-[#4ade80]",
      text: "text-[#4ade80]",
      shape: "circle",
    },
    {
      code: "KPI",
      name: { EN: "Data Visualization", ID: "Visualisasi Data" },
      sub: { EN: "Executive Metrics", ID: "Metrik & KPI" },
      bg: "bg-[#422006] border-[#facc15]",
      text: "text-[#facc15]",
      shape: "circle",
    },
    {
      code: "My",
      name: { EN: "MySQL", ID: "MySQL" },
      sub: { EN: "RDBMS Schema", ID: "Skema RDBMS" },
      bg: "bg-[#083344] border-[#22d3ee]",
      text: "text-[#22d3ee]",
      shape: "circle",
    },
    {
      code: "Git",
      name: { EN: "Git & GitHub", ID: "Git & GitHub" },
      sub: { EN: "Version Control", ID: "Kontrol Versi" },
      bg: "bg-[#27272a] border-[#e4e4e7]",
      text: "text-[#f4f4f5]",
      shape: "circle",
    },
  ],
  serviceCards: [
    {
      id: "data-analytics",
      featured: false,
      title: {
        EN: "Data\nAnalytics",
        ID: "Analisis\nData",
      },
      desc: {
        EN: "Collecting, cleaning, preprocessing, and exploring datasets using Python (Pandas, NumPy) and Microsoft Excel Pivot Tables.",
        ID: "Mengolah, membersihkan, dan mengeksplorasi dataset menggunakan Python (Pandas, NumPy) serta Microsoft Excel Pivot Table.",
      },
      icon: "monitor",
    },
    {
      id: "business-intelligence",
      featured: true,
      title: {
        EN: "Business\nIntelligence",
        ID: "Business\nIntelligence",
      },
      desc: {
        EN: "Designing interactive Power BI & Excel KPI dashboards with dynamic slicers, regional distribution, and trend visualizations.",
        ID: "Merancang dashboard KPI interaktif di Power BI & Excel dengan slicer dinamis, analisis tren, dan distribusi penjualan.",
      },
      icon: "dashboard",
    },
    {
      id: "database-admin",
      featured: false,
      title: {
        EN: "Database &\nBigQuery SQL",
        ID: "Basis Data &\nBigQuery SQL",
      },
      desc: {
        EN: "BNSP Certified Database Administrator skilled in writing SQL queries, multi-table JOINs, and aggregations in Google BigQuery & MySQL.",
        ID: "Database Administrator tersertifikasi BNSP yang mahir menulis query SQL, JOIN, dan agregasi di Google BigQuery & MySQL.",
      },
      icon: "database",
    },
  ],
  projects: [
    {
      id: "proyek-1-online-store-orders",
      number: { EN: "PROJECT 1", ID: "PROYEK 1" },
      category: {
        EN: "Data Analyst Project • E-Commerce Sales Dashboard",
        ID: "Proyek Analis Data • Dashboard Penjualan E-Commerce",
      },
      toolBadge: "Microsoft Excel",
      period: { EN: "Jun 2026", ID: "Juni 2026" },
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
      platformBadge: { EN: "Medium Article", ID: "Artikel Medium" },
      tags: {
        EN: [
          "Microsoft Excel",
          "Pivot Tables & Slicers",
          "Python (df.info / df.head)",
          "excelx.com (1,200 rows × 14 cols)",
          "KPI Dashboard",
        ],
        ID: [
          "Microsoft Excel",
          "Pivot Table & Slicer",
          "Python (df.info / df.head)",
          "excelx.com (1.200 baris × 14 kolom)",
          "Dashboard KPI",
        ],
      },
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
        { label: { EN: "Dataset Source", ID: "Sumber Dataset" }, value: "excelx.com" },
        {
          label: { EN: "Dataset Size", ID: "Ukuran Dataset" },
          value: { EN: "1,200 Rows × 14 Cols", ID: "1.200 Baris × 14 Kolom" },
        },
        { label: { EN: "Total Revenue", ID: "Total Pendapatan" }, value: "$1.264.762" },
      ],
      previewType: "excel",
    },
    {
      id: "proyek-2-video-game-powerbi",
      number: { EN: "PROJECT 2", ID: "PROYEK 2" },
      category: {
        EN: "Business Intelligence Project • Global Sales Analytics",
        ID: "Proyek Business Intelligence • Analisis Penjualan Global",
      },
      toolBadge: "Power BI",
      period: { EN: "Apr – May 2025", ID: "Apr – Mei 2025" },
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
      platformBadge: { EN: "Medium Article", ID: "Artikel Medium" },
      tags: {
        EN: [
          "Power BI",
          "Power Query Editor",
          "Kaggle Dataset",
          "Global Sales KPIs",
          "Regional & Genre Analysis",
        ],
        ID: [
          "Power BI",
          "Power Query Editor",
          "Dataset Kaggle",
          "KPI Penjualan Global",
          "Analisis Wilayah & Genre",
        ],
      },
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
        { label: { EN: "Dataset Source", ID: "Sumber Dataset" }, value: "Kaggle (vgsales)" },
        {
          label: { EN: "Data Scale", ID: "Skala Data" },
          value: { EN: "16.327K Games • 31 Platforms", ID: "16.327K Game • 31 Platform" },
        },
        {
          label: { EN: "Total Sales", ID: "Total Penjualan" },
          value: { EN: "797K • 577 Publishers", ID: "797K • 577 Publisher" },
        },
      ],
      previewType: "powerbi",
    },
    {
      id: "proyek-3-thelook-bigquery",
      number: { EN: "PROJECT 3", ID: "PROYEK 3" },
      category: {
        EN: "Data Analyst Project • Cloud SQL Data Warehouse",
        ID: "Proyek Analis Data • Analisis SQL Cloud Data Warehouse",
      },
      toolBadge: "Google BigQuery SQL",
      period: { EN: "Jul 2026", ID: "Juli 2026" },
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
      platformBadge: { EN: "GitHub Repository", ID: "Repositori GitHub" },
      tags: {
        EN: [
          "Google BigQuery",
          "SQL (INNER JOIN, GROUP BY)",
          "Scalar Subqueries",
          "thelook_ecommerce",
          "Revenue & Customer KPIs",
        ],
        ID: [
          "Google BigQuery",
          "SQL (INNER JOIN, GROUP BY)",
          "Subquery Terstruktur",
          "thelook_ecommerce",
          "KPI Pendapatan & Pelanggan",
        ],
      },
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
        { label: { EN: "Platform", ID: "Platform" }, value: "Google BigQuery" },
        { label: { EN: "Dataset", ID: "Dataset" }, value: "thelook_ecommerce" },
        {
          label: { EN: "Repository", ID: "Repositori" },
          value: { EN: "GitHub SQL Portfolio", ID: "Portofolio SQL GitHub" },
        },
      ],
      previewType: "sql",
    },
  ],
  experiences: [
    {
      role: {
        EN: "Data Management Intern",
        ID: "Magang Manajemen Data (Data Management Intern)",
      },
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
      role: {
        EN: "Data Analyst & Business Intelligence (DSF 52.0)",
        ID: "Analis Data & Business Intelligence (DSF 52.0)",
      },
      organization: "Digital Skill Fair (DSF) by Dibimbing",
      period: { EN: "17 – 19 Jun 2026", ID: "17 – 19 Juni 2026" },
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
    period: { EN: "2023 – Present", ID: "2023 – Sekarang" },
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
      year: { EN: "06 Mar 2026", ID: "06 Maret 2026" },
      badge: { EN: "BNSP National Competence", ID: "Sertifikasi Kompetensi BNSP" },
      credentialId: "No. Reg. DMS.1241.00955 2026",
      image: "/certifications/BNSP.jpg",
    },
    {
      title: "DSF 52.0 — Data Analyst & Business Intelligence",
      issuer: "Dibimbing.id",
      year: { EN: "17 – 19 Jun 2026", ID: "17 – 19 Juni 2026" },
      badge: { EN: "Business Intelligence", ID: "Business Intelligence" },
      credentialId: "Sertifikat Apresiasi",
      image: "/certifications/DSF.jpg",
    },
    {
      title: "Fundamental SQL Using SELECT Statement",
      issuer: "DQLab",
      year: { EN: "12 Jun 2026", ID: "12 Juni 2026" },
      badge: { EN: "SQL & Data Analytics", ID: "SQL & Analisis Data" },
      credentialId: "#DQLABSQLT1RUFLNG",
      image: "/certifications/DQLab.png",
    },
    {
      title: "Intro to Data Analytics (1-Week Certified Mini Course)",
      issuer: "RevoU",
      year: { EN: "12 Jun 2026", ID: "12 Juni 2026" },
      badge: { EN: "Data Analytics", ID: "Analisis Data" },
      credentialId: "DAMC-080626-01-1-00413",
      image: "/certifications/RevoU.jpg",
    },
    {
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding Indonesia",
      year: { EN: "07 Jun 2026", ID: "07 Juni 2026" },
      badge: { EN: "Python Programming", ID: "Pemrograman Python" },
      credentialId: "dicoding.com/certificates/53XE1GG7VZRN",
      image: "/certifications/Dicoding.png",
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding Indonesia",
      year: { EN: "04 Jun 2026", ID: "04 Juni 2026" },
      badge: { EN: "Relational Database", ID: "Basis Data Relasional" },
      credentialId: "dicoding.com/certificates/MRZMWJK1RPYQ",
      image: "/certifications/Dicoding2.png",
    },
    {
      title: "Belajar Dasar Data Science",
      issuer: "Dicoding Indonesia",
      year: { EN: "03 Jun 2026", ID: "03 Juni 2026" },
      badge: { EN: "Data Science", ID: "Sains Data" },
      credentialId: "dicoding.com/certificates/07Z67MN92PQR",
      image: "/certifications/dicoding3.png",
    },
  ] as Certification[],
};

export default function PortfolioPage() {
  const [lang, setLang] = useState<Language>("ID");
  const [theme, setTheme] = useState<Theme>("dark");
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#top");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [marqueePaused, setMarqueePaused] = useState<boolean>(false);
  const [showAllCertsGrid, setShowAllCertsGrid] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Scroll Progress Bar & Active Section Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setScrollProgress(pct);

      const sectionIds = ["contact", "certifications", "projects", "skills", "about"];
      let current = "#top";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
        setMobileMenuOpen(false);
      }
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

  const navLinks = [
    { href: "#top", label: lang === "EN" ? "HOME" : "BERANDA" },
    { href: "#about", label: lang === "EN" ? "ABOUT" : "TENTANG" },
    { href: "#skills", label: lang === "EN" ? "SKILLS" : "KEAHLIAN" },
    { href: "#projects", label: lang === "EN" ? "PORTFOLIO" : "PORTOFOLIO" },
    { href: "#certifications", label: lang === "EN" ? "CERTIFICATES" : "SERTIFIKASI" },
    { href: "#contact", label: lang === "EN" ? "CONTACT" : "KONTAK" },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-[#232631] dark:text-slate-100 transition-colors duration-200">
      {/* TOP NAVIGATION BAR (Responsive Desktop + Mobile Drawer + Scroll Progress) */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-[#343847] bg-white/95 dark:bg-[#232631]/95 backdrop-blur-md transition-colors duration-200">
        {/* Top Scroll Progress Indicator */}
        <div className="h-0.5 w-full bg-transparent overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
          {/* Mobile Brand Badge (Visible on Mobile/Tablet) */}
          <a
            href="#top"
            className="flex md:hidden items-center gap-2 text-sm font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500 font-mono text-xs font-black text-zinc-950">
              LF
            </span>
            <span>Lukman.F</span>
          </a>

          {/* Desktop Navigation with Animated Active Underline */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-bold uppercase tracking-wider"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 rounded ${
                    isActive
                      ? "text-amber-500"
                      : "text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-amber-500 transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Theme, Language & Mobile Hamburger Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
              }
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#3d4254] bg-slate-100 dark:bg-[#2c303d] px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-amber-500/60 hover:text-amber-500"
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

            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex rounded-lg border border-slate-200 dark:border-[#3d4254] bg-slate-100 dark:bg-[#2c303d] p-0.5 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => setLang("ID")}
                aria-pressed={lang === "ID"}
                className={`cursor-pointer rounded-md px-2 py-1 transition-all ${
                  lang === "ID"
                    ? "bg-amber-500 text-zinc-950 shadow-xs"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("EN")}
                aria-pressed={lang === "EN"}
                className={`cursor-pointer rounded-md px-2 py-1 transition-all ${
                  lang === "EN"
                    ? "bg-amber-500 text-zinc-950 shadow-xs"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger Toggle for Mobile (<768px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="cursor-pointer inline-flex md:hidden items-center justify-center rounded-lg border border-slate-200 dark:border-[#3d4254] bg-slate-100 dark:bg-[#2c303d] p-1.5 text-slate-700 dark:text-slate-200 hover:border-amber-500 hover:text-amber-500"
            >
              {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden border-t border-slate-200/80 dark:border-[#343847] bg-white dark:bg-[#232631] px-4 py-3 shadow-lg animate-modal-in"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-amber-500/15 text-amber-500"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#2c303d]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* =====================================================================
            HERO SECTION (Staggered Entrance Animation + Interactive Photo Ring)
           ===================================================================== */}
        <section className="relative overflow-hidden bg-white dark:bg-[#232631] pt-6 pb-14 sm:pt-10 sm:pb-16 md:py-20 transition-colors duration-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid items-center gap-8 sm:gap-12 md:grid-cols-12">
              {/* Left Column (Centered on Mobile, Left-aligned on Desktop) */}
              <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left">
                <p className="animate-hero-1 text-xl sm:text-3xl font-medium text-slate-700 dark:text-slate-200">
                  {DATA.profile.greeting[lang]}
                </p>
                <h1 className="animate-hero-1 mt-1 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {DATA.profile.iamPrefix[lang]} {DATA.profile.name}
                </h1>

                <p className="animate-hero-2 mt-3 text-xs sm:text-base font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                  {DATA.profile.rolesLine[lang]}
                </p>
                <p className="animate-hero-2 mt-1.5 text-xs sm:text-base text-slate-600 dark:text-slate-300">
                  {DATA.profile.experienceHighlight[lang].prefix}
                  <span className="font-bold text-amber-500">
                    {DATA.profile.experienceHighlight[lang].accent}
                  </span>
                </p>

                {/* Primary Orange Button & Secondary Action with Micro-Interactions */}
                <div className="animate-hero-3 mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3">
                  <a
                    href="#contact"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 active:scale-[0.98] px-6 py-3 text-sm font-bold text-zinc-950 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{lang === "EN" ? "Let's Talk" : "Hubungi Saya"}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      <Icons.ArrowRight />
                    </span>
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500 hover:text-amber-500 active:scale-[0.98]"
                  >
                    <span>{lang === "EN" ? "View Projects" : "Lihat Proyek"}</span>
                  </a>
                </div>

                {/* Social Icons Row + Download CV */}
                <div className="animate-hero-4 mt-8 sm:mt-12 space-y-3">
                  <div className="flex items-center justify-center md:justify-start gap-5 text-slate-600 dark:text-slate-200">
                    <a
                      href={DATA.profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:text-amber-500 hover:bg-amber-500/10"
                    >
                      <Icons.LinkedIn />
                    </a>
                    <a
                      href={DATA.profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:text-amber-500 hover:bg-amber-500/10"
                    >
                      <Icons.GitHub />
                    </a>
                    <a
                      href={DATA.profile.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:text-amber-500 hover:bg-amber-500/10"
                    >
                      <Icons.Instagram />
                    </a>
                    <a
                      href={`mailto:${DATA.profile.email}`}
                      aria-label="Email"
                      className="p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:text-amber-500 hover:bg-amber-500/10"
                    >
                      <Icons.Mail />
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-sm">
                    <a
                      href={DATA.profile.cvUrl}
                      download="CV_Lukman_Fatkhurozi.pdf"
                      className="inline-flex items-center gap-1.5 font-bold group"
                    >
                      <span className="text-amber-500 group-hover:underline">
                        {lang === "EN" ? "Download" : "Unduh"}
                      </span>
                      <span className="text-slate-800 dark:text-white group-hover:underline">
                        Curriculum Vitae (CV)
                      </span>
                    </a>
                    <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
                    <a
                      href={DATA.profile.portfolioPdfUrl}
                      download="Portofolio_Data_Analyst_Lukman_Fatkhurozi.pdf"
                      className="inline-flex items-center gap-1.5 font-semibold text-xs text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors"
                    >
                      <span>
                        {lang === "EN"
                          ? "Download Portfolio PDF"
                          : "Unduh Slide Portofolio (PDF)"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Circular Orange Backdrop + Lukman Cutout Photo */}
              <div className="animate-hero-5 md:col-span-5 order-1 md:order-2 flex justify-center pt-10 sm:pt-12">
                <div className="group relative flex items-center justify-center">
                  {/* Subtle outer decorative ring on hover */}
                  <div className="absolute -inset-3 rounded-full border border-amber-500/20 scale-95 opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  {/* Orange Circle Backdrop */}
                  <div className="h-52 w-52 sm:h-68 sm:w-68 md:h-76 md:w-76 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-400 shadow-2xl shadow-amber-500/25 transition-all duration-500 group-hover:shadow-amber-500/40" />
                  {/* Cutout Container with extra top headroom (-top-20 sm:-top-24) */}
                  <div className="pointer-events-none absolute inset-x-0 -top-20 sm:-top-24 bottom-0 flex items-end justify-center overflow-hidden rounded-b-full">
                    <img
                      src={DATA.profile.photo}
                      alt={DATA.profile.name}
                      className="h-[118%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_14px_24px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            ABOUT ME / TENTANG SAYA SECTION
           ===================================================================== */}
        <section
          id="about"
          className="scroll-mt-16 bg-slate-100/90 dark:bg-[#2c303d] py-16 md:py-20 border-y border-slate-200/80 dark:border-[#363b4b] transition-colors duration-200"
        >
          <Reveal className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {lang === "EN" ? "About Me" : "Tentang Saya"}
            </h2>
            <div className="mx-auto mt-2.5 h-1 w-14 rounded-full bg-amber-500" />

            <p className="mt-7 text-sm sm:text-base font-semibold italic text-amber-600 dark:text-amber-400">
              {DATA.profile.quote[lang]}
            </p>

            {lang === "ID" ? (
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-200">
                Saya mahasiswa Program Studi{" "}
                <strong className="font-bold text-slate-900 dark:text-white">
                  S1 Sistem Informasi di Universitas Bina Sarana Informatika (IPK 3.95/4.00)
                </strong>{" "}
                yang memiliki minat kuat di bidang{" "}
                <span className="underline decoration-amber-500 underline-offset-4">
                  Analisis Data, Business Intelligence, dan Visualisasi Data
                </span>
                . Berpengalaman mengumpulkan, membersihkan, menganalisis, serta memvisualisasikan
                data menggunakan{" "}
                <strong className="font-bold text-slate-900 dark:text-white">
                  SQL (MySQL &amp; Google BigQuery), Python (Pandas, NumPy), Microsoft Excel, dan
                  Power BI
                </strong>{" "}
                melalui proyek akademik, magang, dan pembelajaran mandiri. Saya juga telah
                tersertifikasi resmi{" "}
                <strong className="font-bold text-amber-600 dark:text-amber-400">
                  BNSP — Database Administrator
                </strong>{" "}
                dan siap berkontribusi secara kolaboratif untuk mendukung pengambilan keputusan
                berbasis data.
              </p>
            ) : (
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-200">
                I am an{" "}
                <strong className="font-bold text-slate-900 dark:text-white">
                  Information Systems undergraduate at Universitas Bina Sarana Informatika (GPA
                  3.95/4.00)
                </strong>{" "}
                with a strong passion for{" "}
                <span className="underline decoration-amber-500 underline-offset-4">
                  Data Analytics, Business Intelligence, and Data Visualization
                </span>
                . Experienced in collecting, cleaning, analyzing, and visualizing datasets using{" "}
                <strong className="font-bold text-slate-900 dark:text-white">
                  SQL (MySQL &amp; Google BigQuery), Python (Pandas, NumPy), Microsoft Excel, and
                  Power BI
                </strong>
                . I also hold a national{" "}
                <strong className="font-bold text-amber-600 dark:text-amber-400">
                  BNSP — Certified Database Administrator
                </strong>{" "}
                credential and thrive in collaborative, data-driven environments.
              </p>
            )}
          </Reveal>
        </section>

        {/* =====================================================================
            SKILL / KEAHLIAN SECTION
           ===================================================================== */}
        <section
          id="skills"
          className="scroll-mt-16 bg-white dark:bg-[#232631] py-16 md:py-20 transition-colors duration-200"
        >
          <div className="mx-auto max-w-4xl px-6">
            <Reveal className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {lang === "EN" ? "Skill" : "Keahlian Utama"}
              </h2>
              <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-amber-500" />
            </Reveal>

            {/* 2-Row Colorful Tool Badge Grid with Staggered Reveal */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-6 sm:gap-5">
              {DATA.skillBadges.map((badge, index) => (
                <Reveal key={badge.code} delay={index * 35}>
                  <div className="group flex flex-col items-center text-center">
                    <div
                      className={`flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center border-2 ${
                        badge.shape === "circle" ? "rounded-full" : "rounded-2xl"
                      } ${badge.bg} ${badge.text} font-mono text-lg sm:text-xl font-extrabold shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:shadow-lg`}
                    >
                      {badge.code}
                    </div>
                    <div className="mt-2 text-xs font-bold text-slate-800 dark:text-slate-100 transition-colors group-hover:text-amber-500">
                      {badge.name[lang]}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {badge.sub[lang]}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* 3 Vertical Service Pillar Cards with Staggered Reveal */}
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {DATA.serviceCards.map((card, index) => (
                <Reveal key={card.id} delay={index * 90}>
                  <div
                    className={`group h-full rounded-xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                      card.featured
                        ? "bg-amber-500 text-zinc-950 shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/35"
                        : "border border-slate-200 dark:border-[#3c4153] bg-slate-100 dark:bg-[#323645] text-slate-900 dark:text-white shadow-sm hover:border-amber-500/60 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`inline-block transition-transform duration-300 group-hover:scale-110 ${
                        card.featured
                          ? "text-zinc-950"
                          : "text-amber-500 dark:text-slate-100"
                      }`}
                    >
                      {card.icon === "monitor" && <Icons.AnalyticsMonitor />}
                      {card.icon === "dashboard" && <Icons.DashboardLayout />}
                      {card.icon === "database" && <Icons.DatabaseServer />}
                    </div>

                    <h3 className="mt-5 whitespace-pre-line text-xl font-extrabold leading-tight">
                      {card.title[lang]}
                    </h3>

                    <p
                      className={`mt-3 text-xs leading-relaxed ${
                        card.featured
                          ? "font-medium text-zinc-900"
                          : "text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {card.desc[lang]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            PORTOFOLIO / PROJECTS SECTION
           ===================================================================== */}
        <section
          id="projects"
          className="scroll-mt-16 bg-slate-100/90 dark:bg-[#2c303d] py-16 md:py-20 border-t border-slate-200/80 dark:border-[#363b4b] transition-colors duration-200"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {lang === "EN" ? "Portfolio Projects" : "Proyek Portofolio"}
              </h2>
              <div className="mx-auto mt-2.5 h-1 w-16 rounded-full bg-amber-500" />
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {lang === "EN"
                  ? "Case studies in Data Analysis, Business Intelligence Dashboards, and Cloud SQL."
                  : "Studi kasus analisis data, dashboard interaktif Power BI & Excel, serta Google BigQuery SQL."}
              </p>
            </div>

            {/* Tool Filter */}
            <div
              className="mt-7 flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="Filter projects by tool"
            >
              {["ALL", "Microsoft Excel", "Power BI", "Google BigQuery SQL"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                    activeFilter === filter
                      ? "bg-amber-500 text-zinc-950 shadow-sm"
                      : "border border-slate-300 dark:border-[#43485b] bg-white dark:bg-[#232631] text-slate-700 dark:text-slate-300 hover:border-amber-500"
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

            <div className="mt-10 space-y-8">
              {filteredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 100}>
                  <article className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/70 hover:shadow-xl sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-12">
                    {/* Left column */}
                    <div className="flex flex-col justify-between lg:col-span-7">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 text-xs">
                          <span className="rounded-md bg-amber-500 px-2.5 py-1 font-mono font-extrabold text-zinc-950">
                            {project.number[lang]}
                          </span>
                          <span className="rounded-md bg-slate-100 dark:bg-[#2c303d] px-2.5 py-1 font-mono font-semibold text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-[#3d4254]">
                            {project.toolBadge}
                          </span>
                          <span className="font-medium text-slate-500 dark:text-slate-400">
                            {project.category[lang]}
                          </span>
                        </div>

                        <h3 className="mt-3.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                          {project.title[lang]}
                        </h3>
                        <p className="mt-1.5 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                          {project.subtitle[lang]}
                        </p>

                        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {project.highlights[lang].map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 space-y-4 border-t border-slate-100 dark:border-[#343847] pt-5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5">
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                              {lang === "EN"
                                ? "Full Documentation Link"
                                : "Tautan Lengkap Pengerjaan"}
                            </div>
                            <a
                              href={project.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-0.5 block truncate font-mono text-xs text-slate-700 dark:text-slate-200 underline underline-offset-2 hover:text-amber-500"
                            >
                              {project.externalLink}
                            </a>
                          </div>
                          <a
                            href={project.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto justify-center shrink-0 items-center gap-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 px-3.5 py-2.5 sm:py-2 text-xs font-bold text-zinc-950 transition-colors"
                          >
                            <span>{project.externalLabel[lang]}</span>
                            <Icons.ExternalLink />
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tags[lang].map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-slate-200 dark:border-[#3d4254] bg-slate-50 dark:bg-[#2c303d] px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-[#3d4254] bg-slate-50 dark:bg-[#2c303d] p-5 lg:col-span-5">
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-[#3d4254] pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-300">
                          {project.number[lang]} • {project.platformBadge[lang]}
                        </span>
                      </div>

                      {/* PROYEK 1 PREVIEW */}
                      {project.previewType === "excel" && (
                        <div className="my-4 space-y-3">
                          <div className="rounded-lg bg-[#191b24] border border-[#3d4254] p-3 font-mono text-[11px] text-slate-200">
                            <div className="text-emerald-400">
                              {lang === "EN"
                                ? "# Check data types and missing values"
                                : "# Cek Tipe data dan missing value"}
                            </div>
                            <div className="mt-0.5 flex items-center justify-between">
                              <span>
                                df.<span className="text-amber-300">info</span>() &nbsp;|&nbsp; df.
                                <span className="text-amber-300">head</span>()
                              </span>
                              <span className="text-[10px] text-emerald-400">
                                {lang === "EN" ? "1200 rows × 14 cols" : "1200 baris × 14 kolom"}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Revenue" : "Total Pendapatan"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-amber-600 dark:text-amber-400">
                                $1.264.762
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Orders" : "Total Pesanan"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                1.200
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Customers" : "Total Pelanggan"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                1.189
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Items Sold" : "Total Barang Terjual"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                3.535
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-3 text-xs">
                            <div className="flex items-center justify-between font-semibold text-slate-800 dark:text-slate-200">
                              <span>
                                {lang === "EN"
                                  ? "Customer Sources & Top Products"
                                  : "Sumber Pelanggan & Produk Terlaris"}
                              </span>
                              <span className="font-mono text-[10px] text-amber-500">
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
                                  className="rounded bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-700 dark:text-amber-300"
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
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Games" : "Jumlah Game"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-amber-600 dark:text-amber-400">
                                16.327K
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Sales" : "Jumlah Penjualan"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                797K
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Publishers" : "Jumlah Publisher"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                577
                              </div>
                            </div>
                            <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-2.5">
                              <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                {lang === "EN" ? "Total Platforms" : "Jumlah Platform"}
                              </div>
                              <div className="mt-0.5 font-mono text-sm font-bold text-slate-900 dark:text-white">
                                31
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] p-3">
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200">
                              <span>
                                {lang === "EN" ? "Sales by Genre" : "Penjualan Berdasarkan Genre"}
                              </span>
                              <span className="font-mono text-[10px] text-amber-500">
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
                                  <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400">
                                    <span>{g.genre}</span>
                                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                                      {g.val}
                                    </span>
                                  </div>
                                  <div className="mt-0.5 h-1.5 w-full rounded-full bg-slate-100 dark:bg-[#2c303d]">
                                    <div
                                      className={`h-1.5 ${g.w} rounded-full bg-amber-500`}
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
                          <div className="overflow-x-auto rounded-lg bg-[#191b24] border border-[#3d4254] p-3.5 font-mono text-[10px] sm:text-[10.5px] leading-relaxed text-slate-200">
                            <div className="text-emerald-400">
                              -- Top 10 Kategori Berdasarkan revenue
                            </div>
                            <div>
                              <span className="text-amber-400">SELECT</span>
                            </div>
                            <div className="pl-3">p.category,</div>
                            <div className="pl-3">
                              <span className="text-sky-300">ROUND</span>(
                              <span className="text-sky-300">SUM</span>(oi.sale_price), 2){" "}
                              <span className="text-amber-400">AS</span> total_revenue
                            </div>
                            <div className="break-all sm:break-normal">
                              <span className="text-amber-400">FROM</span>{" "}
                              `bigquery-public-data.thelook_ecommerce.order_items`{" "}
                              <span className="text-amber-400">AS</span> oi
                            </div>
                            <div className="break-all sm:break-normal">
                              <span className="text-amber-400">INNER JOIN</span>{" "}
                              `bigquery-public-data.thelook_ecommerce.products`{" "}
                              <span className="text-amber-400">AS</span> p
                            </div>
                            <div className="pl-3">
                              <span className="text-amber-400">ON</span> oi.product_id = p.id
                            </div>
                            <div>
                              <span className="text-amber-400">WHERE</span> oi.status ={" "}
                              <span className="text-emerald-300">&apos;Complete&apos;</span>
                            </div>
                            <div>
                              <span className="text-amber-400">GROUP BY</span> p.category
                            </div>
                            <div>
                              <span className="text-amber-400">ORDER BY</span> total_revenue{" "}
                              <span className="text-amber-400">DESC</span>
                            </div>
                            <div>
                              <span className="text-amber-400">LIMIT</span> 10;
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-3 gap-2 border-t border-slate-200 dark:border-[#3d4254] pt-3">
                        {project.metrics.map((m, idx) => (
                          <div key={idx}>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">
                              {m.label[lang]}
                            </div>
                            <div className="font-mono text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                              {typeof m.value === "string" ? m.value : m.value[lang]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            EXPERIENCE & EDUCATION SECTION
           ===================================================================== */}
        <section
          id="experience"
          className="scroll-mt-16 bg-white dark:bg-[#232631] py-16 md:py-20 border-t border-slate-200/80 dark:border-[#363b4b] transition-colors duration-200"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Experience & Training Column */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {lang === "EN" ? "Experience & Training" : "Pengalaman & Pelatihan"}
                </h2>
                <div className="mt-2 h-1 w-14 rounded-full bg-amber-500" />

                <div className="mt-8 space-y-8 border-l-2 border-amber-500/50 pl-6">
                  {DATA.experiences.map((exp, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-white dark:bg-[#232631]"></span>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-md bg-slate-100 dark:bg-[#2c303d] px-2.5 py-0.5 font-mono font-medium text-slate-700 dark:text-slate-300">
                          {typeof exp.period === "string" ? exp.period : exp.period[lang]}
                        </span>
                        <span className="rounded-md bg-amber-500/15 px-2.5 py-0.5 font-bold text-amber-600 dark:text-amber-400">
                          {exp.type[lang]}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role[lang]}
                      </h3>
                      <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                        {exp.organization}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {exp.points[lang].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
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
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {lang === "EN" ? "Education" : "Pendidikan"}
                </h2>
                <div className="mt-2 h-1 w-14 rounded-full bg-amber-500" />

                <div className="mt-8 rounded-2xl border border-slate-200 dark:border-[#3d4254] bg-slate-50 dark:bg-[#2c303d] p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-white dark:bg-[#232631] px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:text-slate-300">
                      {DATA.education.period[lang]}
                    </span>
                    <span className="rounded-md bg-amber-500 px-2.5 py-1 font-mono text-xs font-extrabold text-zinc-950">
                      {lang === "EN" ? "GPA" : "IPK"} {DATA.education.gpa}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                    {DATA.education.institution}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
                    {DATA.education.degree[lang]}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-200 dark:border-[#3d4254] pt-4 text-sm text-slate-600 dark:text-slate-300">
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
          </div>
        </section>

        {/* =====================================================================
            CERTIFICATIONS GALLERY SECTION (Infinite Horizontal Marquee + Inspectable Cards)
           ===================================================================== */}
        <section
          id="certifications"
          className="scroll-mt-16 overflow-hidden bg-slate-100/90 dark:bg-[#2c303d] py-16 md:py-20 border-t border-slate-200/80 dark:border-[#363b4b] transition-colors duration-200"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {lang === "EN" ? "Verified Certifications" : "Sertifikasi Kompetensi"}
              </h2>
              <div className="mx-auto mt-2.5 h-1 w-14 rounded-full bg-amber-500" />
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {lang === "EN"
                  ? "Hover or tap to pause the stream • Click any certificate card to inspect it one by one in full screen."
                  : "Arahkan kursor atau sentuh untuk menjeda • Klik kartu mana saja untuk mengecek sertifikat satu per satu."}
              </p>

              {/* Marquee Interactive Controls + Quick Numbered Pills to Inspect 1-by-1 */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setMarqueePaused((p) => !p)}
                  aria-pressed={marqueePaused}
                  className={`cursor-pointer inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all ${
                    marqueePaused
                      ? "border-amber-500 bg-amber-500 text-zinc-950 shadow-sm"
                      : "border-slate-300 dark:border-[#43485b] bg-white dark:bg-[#232631] text-slate-700 dark:text-slate-200 hover:border-amber-500"
                  }`}
                >
                  <span>{marqueePaused ? "▶" : "⏸"}</span>
                  <span>
                    {marqueePaused
                      ? lang === "EN"
                        ? "Resume Stream"
                        : "Putar Lagi"
                      : lang === "EN"
                      ? "Pause Stream"
                      : "Jeda Animasi"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAllCertsGrid((g) => !g)}
                  aria-pressed={showAllCertsGrid}
                  className={`cursor-pointer inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all ${
                    showAllCertsGrid
                      ? "border-amber-500 bg-amber-500 text-zinc-950 shadow-sm"
                      : "border-slate-300 dark:border-[#43485b] bg-white dark:bg-[#232631] text-slate-700 dark:text-slate-200 hover:border-amber-500"
                  }`}
                >
                  <span>
                    {showAllCertsGrid
                      ? lang === "EN"
                        ? "Switch to Infinite Marquee"
                        : "Mode Marquee Berjalan"
                      : lang === "EN"
                      ? "View All in Grid (7)"
                      : "Lihat Semua Grid (7)"}
                  </span>
                </button>
              </div>

              {/* Quick Jump Chips to Check Each Certificate One by One */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-1.5">
                {DATA.certifications.map((cert, idx) => (
                  <button
                    key={cert.title}
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="cursor-pointer rounded-full border border-slate-300/80 dark:border-[#43485b] bg-white/80 dark:bg-[#232631]/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 transition-all hover:border-amber-500 hover:bg-amber-500 hover:text-zinc-950"
                  >
                    #{idx + 1} {cert.issuer.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {!showAllCertsGrid ? (
            /* INFINITE HORIZONTAL MARQUEE TRACK */
            <div className="relative mt-9 w-full">
              {/* Soft Left & Right Edge Gradient Fade Masks */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-20 bg-gradient-to-r from-slate-100 dark:from-[#2c303d] to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-20 bg-gradient-to-l from-slate-100 dark:from-[#2c303d] to-transparent"
              />

              <div className="overflow-hidden py-3">
                <div
                  className={`animate-cert-marquee gap-5 px-3 ${
                    marqueePaused || selectedCert !== null ? "is-paused" : ""
                  }`}
                >
                  {[...DATA.certifications, ...DATA.certifications].map((cert, idx) => {
                    const isClone = idx >= DATA.certifications.length;
                    const originalIndex = idx % DATA.certifications.length;
                    return (
                      <button
                        key={`${cert.title}-${idx}`}
                        type="button"
                        tabIndex={isClone ? -1 : 0}
                        aria-hidden={isClone ? true : undefined}
                        onClick={() => setSelectedCert(cert)}
                        className="group w-[285px] sm:w-[330px] shrink-0 cursor-pointer text-left overflow-hidden rounded-2xl border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                      >
                        <div className="w-full">
                          <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-100 dark:border-[#343847] bg-slate-100 dark:bg-[#1b1e26]">
                            <span className="absolute left-2.5 top-2.5 z-10 rounded-md bg-zinc-950/80 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-400 backdrop-blur-xs">
                              {originalIndex + 1} / {DATA.certifications.length}
                            </span>
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                              <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-zinc-950 shadow-sm">
                                <Icons.ZoomIn />
                                <span>
                                  {lang === "EN" ? "Inspect Certificate" : "Cek Sertifikat"}
                                </span>
                              </span>
                            </div>
                          </div>

                          <div className="p-4">
                            <div className="flex items-center justify-between gap-2">
                              <span className="rounded bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400">
                                {cert.badge[lang]}
                              </span>
                              <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                                {cert.year[lang]}
                              </span>
                            </div>
                            <h3 className="mt-2.5 line-clamp-2 text-sm font-bold leading-snug text-slate-900 dark:text-white group-hover:text-amber-500">
                              {cert.title}
                            </h3>
                            <p className="mt-1 truncate text-xs font-medium text-slate-600 dark:text-slate-400">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>

                        <div className="w-full border-t border-slate-100 dark:border-[#343847] bg-slate-50 dark:bg-[#1e212b] px-4 py-2.5 flex items-center justify-between">
                          <span className="truncate font-mono text-[10px] text-slate-500 dark:text-slate-400">
                            {cert.credentialId}
                          </span>
                          <span className="text-amber-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <Icons.ExternalLink />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* STATIC GRID FALLBACK WHEN USER CLICKS "LIHAT SEMUA GRID (7)" */
            <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DATA.certifications.map((cert, index) => (
                <button
                  key={cert.title}
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="group h-full w-full cursor-pointer text-left overflow-hidden rounded-2xl border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500 hover:shadow-xl flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  <div className="w-full">
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-slate-100 dark:border-[#343847] bg-slate-100 dark:bg-[#1b1e26]">
                      <span className="absolute left-2.5 top-2.5 z-10 rounded-md bg-zinc-950/80 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-400">
                        {index + 1} / {DATA.certifications.length}
                      </span>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-zinc-950 shadow-sm">
                          <Icons.ZoomIn />
                          <span>{lang === "EN" ? "View Certificate" : "Lihat Sertifikat"}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400">
                          {cert.badge[lang]}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                          {cert.year[lang]}
                        </span>
                      </div>
                      <h3 className="mt-2.5 text-sm font-bold leading-snug text-slate-900 dark:text-white group-hover:text-amber-500">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="w-full border-t border-slate-100 dark:border-[#343847] bg-slate-50 dark:bg-[#1e212b] px-4 py-2.5 flex items-center justify-between">
                    <span className="truncate font-mono text-[10px] text-slate-500 dark:text-slate-400">
                      {cert.credentialId}
                    </span>
                    <span className="text-amber-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <Icons.ExternalLink />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* =====================================================================
            CONTACT / KONTAK SECTION
           ===================================================================== */}
        <section
          id="contact"
          className="scroll-mt-16 bg-white dark:bg-[#232631] py-16 md:py-20 border-t border-slate-200/80 dark:border-[#363b4b] transition-colors duration-200"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {lang === "EN" ? "Contact" : "Kontak"}
            </h2>
            <div className="mx-auto mt-2.5 h-1 w-14 rounded-full bg-amber-500" />
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {lang === "EN"
                ? "Available for Data Analyst, Business Intelligence, and Database Administrator opportunities. Let’s connect and discuss!"
                : "Terbuka untuk peluang magang maupun kerja di bidang Analisis Data, Business Intelligence, dan Administrator Basis Data. Mari berdiskusi lebih lanjut!"}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-3.5">
              <a
                href={`mailto:${DATA.profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-[#3d4254] bg-slate-50 dark:bg-[#2c303d] px-4 sm:px-5 py-3.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 transition-all hover:border-amber-500 hover:text-amber-500"
              >
                <Icons.Mail />
                <span className="truncate">{DATA.profile.email}</span>
              </a>
              <a
                href={DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-[#3d4254] bg-slate-50 dark:bg-[#2c303d] px-4 sm:px-5 py-3.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 transition-all hover:border-amber-500 hover:text-amber-500"
              >
                <Icons.LinkedIn />
                <span className="truncate">linkedin.com/in/lukman-fatkhurozi</span>
              </a>
              <a
                href={DATA.profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-[#3d4254] bg-slate-50 dark:bg-[#2c303d] px-4 sm:px-5 py-3.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 transition-all hover:border-amber-500 hover:text-amber-500"
              >
                <Icons.Instagram />
                <span>{DATA.profile.instagramHandle}</span>
              </a>
              <a
                href={DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-[#3d4254] bg-slate-50 dark:bg-[#2c303d] px-4 sm:px-5 py-3.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 transition-all hover:border-amber-500 hover:text-amber-500"
              >
                <Icons.GitHub />
                <span>GitHub (lukmanfatkhurozi03)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Viewing Full-Resolution Certificate Image (with Prev/Next Navigation) */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-modal-in relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 dark:border-[#3d4254] bg-white dark:bg-[#232631] shadow-2xl flex flex-col"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-[#343847] px-5 py-3.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-500 px-2 py-0.5 font-mono text-[10px] font-extrabold text-zinc-950">
                    {DATA.certifications.findIndex((c) => c.title === selectedCert.title) + 1} /{" "}
                    {DATA.certifications.length}
                  </span>
                  <span className="rounded bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-500">
                    {selectedCert.badge[lang]}
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {selectedCert.year[lang]}
                  </span>
                </div>
                <h3
                  id="cert-modal-title"
                  className="mt-1 text-sm sm:text-base font-bold text-slate-900 dark:text-white"
                >
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedCert.issuer} • {selectedCert.credentialId}
                </p>
              </div>

              {/* Prev / Next / Close Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const idx = DATA.certifications.findIndex(
                      (c) => c.title === selectedCert.title
                    );
                    const prevIdx =
                      (idx - 1 + DATA.certifications.length) % DATA.certifications.length;
                    setSelectedCert(DATA.certifications[prevIdx]);
                  }}
                  className="cursor-pointer rounded-lg border border-slate-200 dark:border-[#3d4254] bg-slate-100 dark:bg-[#2c303d] px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-amber-500 hover:text-amber-500"
                >
                  ← {lang === "EN" ? "Prev" : "Sebelumnya"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const idx = DATA.certifications.findIndex(
                      (c) => c.title === selectedCert.title
                    );
                    const nextIdx = (idx + 1) % DATA.certifications.length;
                    setSelectedCert(DATA.certifications[nextIdx]);
                  }}
                  className="cursor-pointer rounded-lg border border-slate-200 dark:border-[#3d4254] bg-slate-100 dark:bg-[#2c303d] px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-amber-500 hover:text-amber-500"
                >
                  {lang === "EN" ? "Next" : "Selanjutnya"} →
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 px-3 py-1.5 text-xs font-bold text-zinc-950"
                >
                  <Icons.Close />
                  <span>{lang === "EN" ? "Close" : "Tutup"}</span>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto bg-slate-100 dark:bg-[#191b24] p-4 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[70vh] w-auto rounded-lg object-contain shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-[#343847] bg-slate-50 dark:bg-[#1c1f28] py-8 transition-colors">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-500 dark:text-slate-400 sm:flex-row">
          <div>
            © 2026{" "}
            <strong className="text-amber-600 dark:text-amber-400">
              Lukman Fatkhurozi
            </strong>
            .{" "}
            {lang === "EN"
              ? "Data Analyst & Business Intelligence Portfolio."
              : "Portofolio Analis Data & Business Intelligence."}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={DATA.profile.cvUrl}
              download="CV_Lukman_Fatkhurozi.pdf"
              className="font-bold text-amber-500 hover:underline"
            >
              {lang === "EN" ? "Download CV" : "Unduh CV"}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
