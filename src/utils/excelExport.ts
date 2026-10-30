import * as XLSX from 'xlsx';
import { StudentResultSummary, TeacherSubmissionRecord } from '../types/cbt';

/**
 * Downloads single student's exam report as an Excel file
 */
export function exportStudentResultToExcel(result: StudentResultSummary) {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Biodata & Nilai Siswa
  const studentInfo = [
    ['LEMBAR HASIL UJIAN CBT PENDIDIKAN PANCASILA KELAS XI'],
    ['SMK / SMA - TAHUN AJARAN 2026/2027'],
    [''],
    ['Nama Murid', result.student.name],
    ['Kelas', result.student.className],
    ['Nomor Absen', result.student.absentNumber],
    ['Token Ujian', result.student.token],
    ['Waktu Mulai', new Date(result.student.loginTime).toLocaleString('id-ID')],
    ['Waktu Selesai', new Date(result.submittedAt).toLocaleString('id-ID')],
    ['Durasi Pengerjaan', `${Math.floor(result.timeSpentSeconds / 60)} menit ${result.timeSpentSeconds % 60} detik`],
    ['Catatan Pelanggaran Tab', `${result.tabViolations} kali peringatan`],
    [''],
    ['--- RINGKASAN SKOR ---', ''],
    ['NILAI AKHIR (SKOR 0-100)', result.score],
    ['STATUS KKM (KKM 75)', result.score >= 75 ? 'TUNTAS' : 'BELUM TUNTAS / REMEDIAL'],
    ['Total Soal', result.totalQuestions],
    ['Jumlah Terjawab', result.totalAnswered],
    ['Jawaban Benar Penuh', result.correctCount],
    ['Soal Ragu-Ragu Terakhir', result.doubtfulCount],
    ['Persentase PG Tunggal (40 Soal)', `${result.scoreSingleChoice}%`],
    ['Persentase PG Kompleks (10 Soal)', `${result.scoreComplex}%`],
    ['Persentase Menjodohkan (10 Soal)', `${result.scoreMatching}%`]
  ];

  const ws1 = XLSX.utils.aoa_to_sheet(studentInfo);

  // Set column widths
  ws1['!cols'] = [{ wch: 32 }, { wch: 45 }];

  XLSX.utils.book_append_sheet(wb, ws1, 'Hasil Ujian');

  // Sheet 2: Analisis Topik / Capaian Pembelajaran
  const topicData = result.topicBreakdown.map((t, idx) => ({
    'No': idx + 1,
    'Materi Pokok (Hal. 4-63)': t.topic,
    'Jumlah Soal': t.total,
    'Benar': t.correct,
    'Tingkat Penguasaan (%)': `${t.percentage}%`,
    'Status Ketercapaian': t.percentage >= 75 ? 'Mencapai CP' : 'Perlu Bimbingan'
  }));

  const ws2 = XLSX.utils.json_to_sheet(topicData);
  ws2['!cols'] = [{ wch: 6 }, { wch: 35 }, { wch: 14 }, { wch: 10 }, { wch: 22 }, { wch: 20 }];
  XLSX.utils.book_append_sheet(wb, ws2, 'Analisis Materi');

  const filename = `CBT_Pancasila_XI_${result.student.className.replace(/\s+/g, '_')}_Absen${result.student.absentNumber}_${result.student.name.replace(/[^a-zA-Z0-9]/g, '_')}.xlsx`;
  XLSX.writeFile(wb, filename);
}

/**
 * Downloads master recap of all students for the teacher with 1-click
 */
export function exportClassRecapToExcel(
  records: TeacherSubmissionRecord[],
  classNameFilter?: string
) {
  const filtered = classNameFilter && classNameFilter !== 'Semua Kelas'
    ? records.filter((r) => r.student.className === classNameFilter)
    : records;

  const wb = XLSX.utils.book_new();

  const titleRows = [
    ['REKAPITULASI HASIL NILAI UJIAN CBT PENDIDIKAN PANCASILA KELAS XI'],
    [`Filter: ${classNameFilter || 'Semua Kelas'} | Total Siswa: ${filtered.length}`],
    [`Diunduh pada: ${new Date().toLocaleString('id-ID')}`],
    ['']
  ];

  const tableData = filtered.map((rec, idx) => ({
    'No': idx + 1,
    'Nama Siswa': rec.student.name,
    'Kelas': rec.student.className,
    'No Absen': rec.student.absentNumber,
    'Nilai Akhir': rec.score,
    'Status KKM': rec.score >= 75 ? 'TUNTAS' : 'REMEDIAL',
    'Skor PG (40)': `${rec.scoreSingleChoice}%`,
    'Skor PGK (10)': `${rec.scoreComplex}%`,
    'Skor Menjodohkan (10)': `${rec.scoreMatching}%`,
    'Soal Terjawab': `${rec.totalAnswered}/${rec.totalQuestions}`,
    'Pelanggaran Tab': rec.tabViolations,
    'Waktu Selesai': new Date(rec.submittedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    'Status Spreadsheet': rec.sentToSpreadsheet ? 'Terkirim' : 'Tersimpan Lokal'
  }));

  const ws = XLSX.utils.aoa_to_sheet(titleRows);
  XLSX.utils.sheet_add_json(ws, tableData, { origin: 'A5' });

  ws['!cols'] = [
    { wch: 6 },
    { wch: 28 },
    { wch: 14 },
    { wch: 10 },
    { wch: 12 },
    { wch: 14 },
    { wch: 14 },
    { wch: 14 },
    { wch: 22 },
    { wch: 14 },
    { wch: 16 },
    { wch: 14 },
    { wch: 18 }
  ];

  XLSX.utils.book_append_sheet(wb, ws, 'Rekap Nilai Siswa');

  const filterSuffix = classNameFilter && classNameFilter !== 'Semua Kelas' ? `_${classNameFilter.replace(/\s+/g, '_')}` : '_Semua_Kelas';
  const filename = `REKAP_NILAI_CBT_PANCASILA_XI${filterSuffix}_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, filename);
}
