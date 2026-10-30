import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Award,
  FileSpreadsheet,
  Download,
  Share2,
  CheckCircle,
  ExternalLink,
  Table,
  BarChart2,
  RefreshCw,
  AlertCircle,
  ChevronRight,
  Sparkles,
  Link2,
  ShieldCheck,
  School
} from 'lucide-react';
import { StudentResultSummary, TeacherSubmissionRecord } from '../types/cbt';
import { HeaderBar } from './HeaderBar';
import { exportStudentResultToExcel } from '../utils/excelExport';
import {
  sendToGoogleSpreadsheet,
  getSavedSubmissions,
  saveSubmission,
  getCustomSpreadsheetUrl,
  setCustomSpreadsheetUrl
} from '../utils/spreadsheetSync';

interface ResultViewProps {
  result: StudentResultSummary;
  onOpenTeacher: () => void;
  onStartNewExam: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result: initialResult,
  onOpenTeacher,
  onStartNewExam
}) => {
  const [result, setResult] = useState<StudentResultSummary>(initialResult);
  const [isSendingToSheet, setIsSendingToSheet] = useState<boolean>(false);
  const [sheetSyncStatus, setSheetSyncStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [sheetSyncMsg, setSheetSyncMsg] = useState<string>('');
  const [spreadsheetUrl, setSpreadsheetUrl] = useState<string>(getCustomSpreadsheetUrl());
  const [isEditingUrl, setIsEditingUrl] = useState<boolean>(false);
  const [allSubmissions, setAllSubmissions] = useState<TeacherSubmissionRecord[]>([]);

  // Trigger celebration confetti if score >= 75 (KKM)
  useEffect(() => {
    if (result.score >= 75) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    // Save record to local store for teacher dashboard
    const savedRec = saveSubmission(result);
    setAllSubmissions(getSavedSubmissions());
  }, []);

  // Handle Send to Spreadsheet Button
  const handleSendToSpreadsheet = async () => {
    setIsSendingToSheet(true);
    setSheetSyncStatus('idle');

    const res = await sendToGoogleSpreadsheet(result);
    setIsSendingToSheet(false);

    if (res.success) {
      setSheetSyncStatus('success');
      setSheetSyncMsg(res.message);
      setResult((prev) => ({
        ...prev,
        sentToSpreadsheet: true,
        spreadsheetRowId: res.rowId
      }));
      setAllSubmissions(getSavedSubmissions());
    } else {
      setSheetSyncStatus('error');
      setSheetSyncMsg('Gagal menyinkronkan data ke spreadsheet.');
    }
  };

  const handleDownloadExcel = () => {
    exportStudentResultToExcel(result);
  };

  const handleSaveSpreadsheetUrl = () => {
    setCustomSpreadsheetUrl(spreadsheetUrl);
    setIsEditingUrl(false);
  };

  const isPassed = result.score >= 75;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <HeaderBar student={result.student} mode="result" onGoToTeacher={onOpenTeacher} onGoToLogin={onStartNewExam} />

      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Banner Kartu Nilai Siswa */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
          <div
            className={`p-6 sm:p-8 text-white relative ${
              isPassed
                ? 'bg-gradient-to-r from-blue-700 via-indigo-700 to-emerald-700'
                : 'bg-gradient-to-r from-slate-700 via-amber-800 to-rose-700'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="text-center md:text-left space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/20 mb-2">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>KARTU HASIL UJIAN CBT KELAS XI</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {result.student.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs text-blue-100">
                  <span className="bg-white/20 px-2.5 py-0.5 rounded-md font-semibold">
                    Kelas: {result.student.className}
                  </span>
                  <span>•</span>
                  <span>Nomor Absen: {result.student.absentNumber}</span>
                  <span>•</span>
                  <span>Token: {result.student.token}</span>
                </div>
              </div>

              {/* Skor Nilai Utama */}
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-5 text-center min-w-[200px] shadow-inner">
                <span className="text-xs uppercase tracking-wider font-semibold text-blue-100">
                  Nilai Akhir
                </span>
                <div className="text-5xl font-black tracking-tight text-white my-0.5">
                  {result.score}
                </div>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase mt-1 shadow-xs ${
                    isPassed
                      ? 'bg-emerald-400 text-emerald-950'
                      : 'bg-amber-400 text-amber-950'
                  }`}
                >
                  {isPassed ? 'TUNTAS KKM (>=75)' : 'BELUM TUNTAS / REMIDI'}
                </div>
              </div>
            </div>
          </div>

          {/* Baris Rincian Skor & Statistik */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 bg-slate-50 text-center text-xs">
            <div className="p-4">
              <span className="text-slate-500 font-medium">Pilihan Ganda (40)</span>
              <div className="text-lg font-bold text-slate-800 mt-1">
                {result.scoreSingleChoice}%
              </div>
            </div>
            <div className="p-4">
              <span className="text-slate-500 font-medium">PG Kompleks (10)</span>
              <div className="text-lg font-bold text-indigo-700 mt-1">
                {result.scoreComplex}%
              </div>
            </div>
            <div className="p-4">
              <span className="text-slate-500 font-medium">Menjodohkan (10)</span>
              <div className="text-lg font-bold text-teal-700 mt-1">
                {result.scoreMatching}%
              </div>
            </div>
            <div className="p-4">
              <span className="text-slate-500 font-medium">Catatan Pelanggaran Tab</span>
              <div
                className={`text-lg font-bold mt-1 ${
                  result.tabViolations > 0 ? 'text-rose-600' : 'text-emerald-600'
                }`}
              >
                {result.tabViolations} Kali
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel: Hubungkan ke Spreadsheet & Unduh Excel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Kirim ke Google Spreadsheet */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
                <span>Koneksi Google Spreadsheet</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kirim data Nama, Nomor, Kelas, dan Nilai secara langsung ke Google Spreadsheet utama guru pengampu.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <button
                onClick={handleSendToSpreadsheet}
                disabled={isSendingToSheet || result.sentToSpreadsheet}
                type="button"
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer ${
                  result.sentToSpreadsheet
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                }`}
              >
                {isSendingToSheet ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Mengirim data ke Spreadsheet...</span>
                  </>
                ) : result.sentToSpreadsheet ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Data Sudah Terhubung ke Spreadsheet ✓</span>
                  </>
                ) : (
                  <>
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Kirim Hasil ke Google Spreadsheet</span>
                  </>
                )}
              </button>

              {sheetSyncMsg && (
                <p className="text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded-lg text-center font-medium">
                  {sheetSyncMsg}
                </p>
              )}
            </div>
          </div>

          {/* Card 2: Unduh Hasil Format Excel untuk Siswa */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1">
                <Download className="w-5 h-5 text-blue-600" />
                <span>Unduh Hasil Ujian (Format Excel .xlsx)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unduh file Excel resmi berisi lembar biodata, rincian perolehan nilai, serta analisis penguasaan materi bab demi bab untuk arsip belajar Anda.
              </p>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={handleDownloadExcel}
                type="button"
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Hasil (.xlsx)</span>
              </button>

              <button
                onClick={onOpenTeacher}
                type="button"
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <BarChart2 className="w-4 h-4 text-blue-600" />
                <span>Dasbor Guru</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bilah Pratinjau Spreadsheet (Live Preview Bar) */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Table className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-slate-800 flex items-center gap-2">
                  Bilah Pratinjau Spreadsheet (Live Preview)
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </h3>
                <p className="text-xs text-slate-500">
                  Pratinjau data sinkronisasi Google Spreadsheet nilai kelas secara langsung
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={spreadsheetUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Google Sheet</span>
              </a>
              <button
                onClick={() => setIsEditingUrl(!isEditingUrl)}
                className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-lg transition-colors cursor-pointer"
              >
                {isEditingUrl ? 'Batal' : 'Ganti Tautan'}
              </button>
            </div>
          </div>

          {/* Kolom Edit Tautan Spreadsheet */}
          {isEditingUrl && (
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={spreadsheetUrl}
                onChange={(e) => setSpreadsheetUrl(e.target.value)}
                placeholder="Masukkan link Google Sheet..."
                className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 outline-none focus:border-emerald-600 bg-white"
              />
              <button
                onClick={handleSaveSpreadsheetUrl}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg cursor-pointer"
              >
                Simpan Tautan
              </button>
            </div>
          )}

          {/* Pratinjau Tabel Spreadsheet Mini */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-emerald-700 text-white px-3 py-1.5 text-xs font-semibold flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-300" />
                Lembar: Rekap_Nilai_Pendidikan_Pancasila_XI.xlsx
              </span>
              <span className="text-[10px] text-emerald-200">
                {allSubmissions.length} Data Tersinkron
              </span>
            </div>

            <div className="overflow-x-auto max-h-56">
              <table className="w-full text-left text-xs divide-y divide-slate-200">
                <thead className="bg-slate-100 font-bold text-slate-700 sticky top-0">
                  <tr>
                    <th className="px-3 py-2">Baris</th>
                    <th className="px-3 py-2">Nama Siswa</th>
                    <th className="px-3 py-2">Kelas</th>
                    <th className="px-3 py-2">Absen</th>
                    <th className="px-3 py-2">Nilai</th>
                    <th className="px-3 py-2">Status KKM</th>
                    <th className="px-3 py-2">Waktu Selesai</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {allSubmissions.map((rec, idx) => {
                    const isCurrentStudent = rec.student.name === result.student.name;
                    return (
                      <tr
                        key={rec.id}
                        className={isCurrentStudent ? 'bg-blue-50/70 font-semibold text-blue-900' : 'hover:bg-slate-50'}
                      >
                        <td className="px-3 py-2 text-slate-400 font-mono">#{idx + 1}</td>
                        <td className="px-3 py-2 flex items-center gap-1.5">
                          {rec.student.name}
                          {isCurrentStudent && (
                            <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-bold">
                              Anda
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-2">{rec.student.className}</td>
                        <td className="px-3 py-2 font-mono">{rec.student.absentNumber}</td>
                        <td className="px-3 py-2 font-bold">{rec.score}</td>
                        <td className="px-3 py-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              rec.score >= 75
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {rec.score >= 75 ? 'Tuntas' : 'Remedial'}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-slate-500">
                          {new Date(rec.submittedAt).toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Analisis Capaian Kompetensi / Topik Buku (Halaman 4-63) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold text-base text-slate-800 mb-1">
            Analisis Penguasaan Materi (Buku Teks Hal. 4–63)
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Evaluasi capaian pembelajaran berdasarkan tujuh kompetensi dasar kurikulum
          </p>

          <div className="space-y-3.5">
            {result.topicBreakdown.map((t) => (
              <div key={t.topic} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{t.topic}</span>
                  <span className="font-bold text-slate-800">
                    {t.correct} / {t.total} ({t.percentage}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      t.percentage >= 75 ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${t.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
