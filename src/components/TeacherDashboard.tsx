import React, { useState, useEffect } from 'react';
import {
  Users,
  Award,
  TrendingUp,
  Download,
  Filter,
  Search,
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  RefreshCw,
  PlusCircle,
  GraduationCap,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import { CLASS_OPTIONS, ClassName, TeacherSubmissionRecord } from '../types/cbt';
import { HeaderBar } from './HeaderBar';
import { exportClassRecapToExcel, exportStudentResultToExcel } from '../utils/excelExport';
import {
  getSavedSubmissions,
  getCustomSpreadsheetUrl,
  setCustomSpreadsheetUrl
} from '../utils/spreadsheetSync';

interface TeacherDashboardProps {
  onBackToStudent: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onBackToStudent }) => {
  const [submissions, setSubmissions] = useState<TeacherSubmissionRecord[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('Semua Kelas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [spreadsheetUrl, setSpreadsheetUrl] = useState<string>(getCustomSpreadsheetUrl());
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    setSubmissions(getSavedSubmissions());
  }, []);

  const handleRefresh = () => {
    setSubmissions(getSavedSubmissions());
  };

  // Filtered submissions
  const filteredSubmissions = submissions.filter((rec) => {
    const matchClass = selectedClass === 'Semua Kelas' || rec.student.className === selectedClass;
    const matchSearch =
      rec.student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.student.absentNumber.includes(searchQuery);
    return matchClass && matchSearch;
  });

  // Calculate Real-Time Analytics
  const totalStudents = filteredSubmissions.length;
  const avgScore = totalStudents > 0
    ? Math.round(filteredSubmissions.reduce((acc, r) => acc + r.score, 0) / totalStudents)
    : 0;
  const maxScore = totalStudents > 0
    ? Math.max(...filteredSubmissions.map((r) => r.score))
    : 0;
  const minScore = totalStudents > 0
    ? Math.min(...filteredSubmissions.map((r) => r.score))
    : 0;
  const passedStudents = filteredSubmissions.filter((r) => r.score >= 75).length;
  const passRate = totalStudents > 0 ? Math.round((passedStudents / totalStudents) * 100) : 0;
  const totalViolations = filteredSubmissions.reduce((acc, r) => acc + r.tabViolations, 0);

  // Class performance comparison
  const classBreakdown = CLASS_OPTIONS.map((cls) => {
    const classRecords = submissions.filter((s) => s.student.className === cls);
    const count = classRecords.length;
    const avg = count > 0 ? Math.round(classRecords.reduce((a, b) => a + b.score, 0) / count) : 0;
    return { className: cls, count, avg };
  }).filter((c) => c.count > 0);

  // Score distribution groups
  const dist90100 = filteredSubmissions.filter((s) => s.score >= 90).length;
  const dist8089 = filteredSubmissions.filter((s) => s.score >= 80 && s.score < 90).length;
  const dist7579 = filteredSubmissions.filter((s) => s.score >= 75 && s.score < 80).length;
  const distBelow75 = filteredSubmissions.filter((s) => s.score < 75).length;

  // Single-Click Download All to Excel
  const handleDownloadAllExcel = () => {
    exportClassRecapToExcel(submissions, selectedClass);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(spreadsheetUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <HeaderBar mode="teacher" onGoToLogin={onBackToStudent} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Top Header & One-Click Download Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
              <span>DASBOR ANALITIK & PUSAT DATA GURU</span>
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">
              Rekapitulasi Nilai CBT Pendidikan Pancasila XI
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Pantau hasil ujian kelas, performa butir soal, dan ekspor data terintegrasi spreadsheet secara real-time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleRefresh}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 text-slate-500" />
              <span>Segarkan Data</span>
            </button>

            {/* Tombol Unduh Seluruh Data Excel dengan Sekali Klik */}
            <button
              onClick={handleDownloadAllExcel}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Seluruh Data Excel (.xlsx)</span>
            </button>
          </div>
        </div>

        {/* KPI Cards: Real-Time Analytics Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>Total Siswa</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-800">
              {totalStudents}
            </div>
            <span className="text-[11px] text-slate-400">Telah Mengumpulkan</span>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>Nilai Rata-Rata</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700">
              {avgScore}
            </div>
            <span className="text-[11px] text-slate-400">Skala 0 - 100</span>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>Tingkat Kelulusan</span>
              <Award className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-indigo-700">
              {passRate}%
            </div>
            <span className="text-[11px] text-slate-400">{passedStudents} dari {totalStudents} Tuntas KKM 75</span>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>Tertinggi / Terendah</span>
              <BarChart3 className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-800">
              {maxScore} <span className="text-xs text-slate-400 font-normal">/ {minScore}</span>
            </div>
            <span className="text-[11px] text-slate-400">Rentang Capaian</span>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>Integritas Tes</span>
              <ShieldCheck className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-800">
              {totalViolations} <span className="text-xs text-slate-500 font-medium">Insiden</span>
            </div>
            <span className="text-[11px] text-slate-400">Pelanggaran Tab Terekam</span>
          </div>
        </div>

        {/* Visual Charts: Rata-Rata Kelas & Distribusi Nilai */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card: Rata-Rata Nilai per Kelas */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-sm sm:text-base text-slate-800 flex items-center justify-between">
              <span>Rata-Rata Performa per Kelas</span>
              <span className="text-xs font-semibold text-slate-500">KKM: 75</span>
            </h3>

            <div className="space-y-3 pt-1">
              {classBreakdown.map((item) => (
                <div key={item.className} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">{item.className} ({item.count} siswa)</span>
                    <span className="font-bold text-slate-800">{item.avg} / 100</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.avg >= 85
                          ? 'bg-emerald-600'
                          : item.avg >= 75
                          ? 'bg-blue-600'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${item.avg}%` }}
                    />
                  </div>
                </div>
              ))}
              {classBreakdown.length === 0 && (
                <p className="text-xs text-slate-400 text-center py-4">Belum ada data masuk per kelas.</p>
              )}
            </div>
          </div>

          {/* Card: Distribusi Nilai Siswa */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-sm sm:text-base text-slate-800">
              Distribusi Kelompok Nilai Siswa
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center text-xs">
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                <span className="text-emerald-800 font-bold block">Sangat Baik (90-100)</span>
                <span className="text-2xl font-black text-emerald-700 block mt-1">{dist90100}</span>
                <span className="text-[10px] text-emerald-600">{totalStudents > 0 ? Math.round((dist90100 / totalStudents) * 100) : 0}%</span>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl">
                <span className="text-blue-800 font-bold block">Baik (80-89)</span>
                <span className="text-2xl font-black text-blue-700 block mt-1">{dist8089}</span>
                <span className="text-[10px] text-blue-600">{totalStudents > 0 ? Math.round((dist8089 / totalStudents) * 100) : 0}%</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl">
                <span className="text-amber-800 font-bold block">Cukup KKM (75-79)</span>
                <span className="text-2xl font-black text-amber-700 block mt-1">{dist7579}</span>
                <span className="text-[10px] text-amber-600">{totalStudents > 0 ? Math.round((dist7579 / totalStudents) * 100) : 0}%</span>
              </div>
              <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
                <span className="text-rose-800 font-bold block">Remedial (&lt;75)</span>
                <span className="text-2xl font-black text-rose-700 block mt-1">{distBelow75}</span>
                <span className="text-[10px] text-rose-600">{totalStudents > 0 ? Math.round((distBelow75 / totalStudents) * 100) : 0}%</span>
              </div>
            </div>

            {/* Bilah Pratinjau Tautan Google Spreadsheet Guru */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                  Tautan Integrasi Google Sheets Utama
                </span>
                <button
                  onClick={handleCopyLink}
                  className="text-blue-600 hover:text-blue-800 text-[11px] font-bold cursor-pointer"
                >
                  {copiedLink ? 'Tersalin! ✓' : 'Salin Tautan'}
                </button>
              </div>
              <div className="text-[11px] font-mono text-slate-600 truncate bg-white p-2 rounded border border-slate-200">
                {spreadsheetUrl}
              </div>
            </div>
          </div>
        </div>

        {/* Tabel Data Rekapitulasi Siswa */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Filter & Search Bar */}
          <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" />
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 outline-none focus:border-blue-600 cursor-pointer w-full sm:w-auto"
              >
                <option value="Semua Kelas">Semua Kelas ({submissions.length} siswa)</option>
                {CLASS_OPTIONS.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama / no. absen..."
                className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-slate-300 outline-none focus:border-blue-600 bg-white"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs divide-y divide-slate-200">
              <thead className="bg-slate-100 font-bold text-slate-700 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Nama Murid</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Absen</th>
                  <th className="px-4 py-3">Nilai</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">PG (40)</th>
                  <th className="px-4 py-3">PGK (10)</th>
                  <th className="px-4 py-3">Menjodohkan</th>
                  <th className="px-4 py-3">Pelanggaran Tab</th>
                  <th className="px-4 py-3">Waktu Selesai</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredSubmissions.map((rec, idx) => (
                  <tr key={rec.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-mono text-slate-400">{idx + 1}</td>
                    <td className="px-4 py-3 font-bold text-slate-800">{rec.student.name}</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded text-[11px] border border-blue-200">
                        {rec.student.className}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono font-bold">{rec.student.absentNumber}</td>
                    <td className="px-4 py-3 font-black text-sm text-slate-900">{rec.score}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                          rec.score >= 75
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-rose-100 text-rose-800 border border-rose-200'
                        }`}
                      >
                        {rec.score >= 75 ? 'Tuntas' : 'Remedi'}
                      </span>
                    </td>
                    <td className="px-4 py-3">{rec.scoreSingleChoice}%</td>
                    <td className="px-4 py-3">{rec.scoreComplex}%</td>
                    <td className="px-4 py-3">{rec.scoreMatching}%</td>
                    <td className="px-4 py-3">
                      <span
                        className={`font-semibold ${
                          rec.tabViolations > 0 ? 'text-rose-600' : 'text-slate-400'
                        }`}
                      >
                        {rec.tabViolations}x
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                      {new Date(rec.submittedAt).toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => exportStudentResultToExcel(rec)}
                        title="Unduh Lembar Siswa Ini (.xlsx)"
                        className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredSubmissions.length === 0 && (
                  <tr>
                    <td colSpan={12} className="text-center py-8 text-slate-400 text-xs">
                      Tidak ada data siswa yang cocok dengan filter atau kata kunci pencarian.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
