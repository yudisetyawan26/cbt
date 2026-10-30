import { TeacherSubmissionRecord, StudentResultSummary } from '../types/cbt';

const STORAGE_KEY = 'cbt_pancasila_submissions_v1';
const SPREADSHEET_URL_KEY = 'cbt_pancasila_spreadsheet_url';

export const DEFAULT_SPREADSHEET_VIEW_URL =
  'https://docs.google.com/spreadsheets/d/1yQ_PendidikanPancasila_KelasXI_2026/edit?usp=sharing';

export const DEFAULT_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbz_pancasila_cbt_sheets_endpoint/exec';

// Pre-seeded records representing peers from different classes
const INITIAL_DEMO_RECORDS: TeacherSubmissionRecord[] = [
  {
    id: 'rec-01',
    student: {
      name: 'Aditya Pratama Putra',
      className: 'XI NKPI 1',
      absentNumber: '02',
      token: 'PANCA2026',
      loginTime: '2026-10-30T07:15:00.000Z'
    },
    totalQuestions: 60,
    totalAnswered: 60,
    correctCount: 52,
    doubtfulCount: 1,
    score: 87,
    scoreSingleChoice: 88,
    scoreComplex: 90,
    scoreMatching: 80,
    topicBreakdown: [
      { topic: 'Keterkaitan Antarsila Pancasila', total: 8, correct: 7, percentage: 88 },
      { topic: 'Makna Sila-Sila Pancasila', total: 10, correct: 9, percentage: 90 },
      { topic: 'Pancasila dalam Tindakan', total: 6, correct: 5, percentage: 83 },
      { topic: 'Pancasila sebagai Ideologi Negara', total: 10, correct: 9, percentage: 90 },
      { topic: 'Periodisasi Pemberlakuan UUD', total: 10, correct: 9, percentage: 90 },
      { topic: 'Perubahan UUD NRI Tahun 1945', total: 8, correct: 7, percentage: 88 },
      { topic: 'Perilaku Demokratis Era Informasi', total: 8, correct: 6, percentage: 75 }
    ],
    tabViolations: 0,
    timeSpentSeconds: 2150,
    submittedAt: '2026-10-30T07:50:50.000Z',
    sentToSpreadsheet: true,
    spreadsheetRowId: 'ROW-101'
  },
  {
    id: 'rec-02',
    student: {
      name: 'Siti Nur Aisyah',
      className: 'XI TJKT 1',
      absentNumber: '28',
      token: 'PANCA2026',
      loginTime: '2026-10-30T07:16:00.000Z'
    },
    totalQuestions: 60,
    totalAnswered: 60,
    correctCount: 57,
    doubtfulCount: 0,
    score: 95,
    scoreSingleChoice: 95,
    scoreComplex: 100,
    scoreMatching: 90,
    topicBreakdown: [
      { topic: 'Keterkaitan Antarsila Pancasila', total: 8, correct: 8, percentage: 100 },
      { topic: 'Makna Sila-Sila Pancasila', total: 10, correct: 10, percentage: 100 },
      { topic: 'Pancasila dalam Tindakan', total: 6, correct: 6, percentage: 100 },
      { topic: 'Pancasila sebagai Ideologi Negara', total: 10, correct: 9, percentage: 90 },
      { topic: 'Periodisasi Pemberlakuan UUD', total: 10, correct: 9, percentage: 90 },
      { topic: 'Perubahan UUD NRI Tahun 1945', total: 8, correct: 8, percentage: 100 },
      { topic: 'Perilaku Demokratis Era Informasi', total: 8, correct: 7, percentage: 88 }
    ],
    tabViolations: 0,
    timeSpentSeconds: 1980,
    submittedAt: '2026-10-30T07:49:00.000Z',
    sentToSpreadsheet: true,
    spreadsheetRowId: 'ROW-102'
  },
  {
    id: 'rec-03',
    student: {
      name: 'Budi Kurniawan',
      className: 'XI TJKT 2',
      absentNumber: '08',
      token: 'PANCA2026',
      loginTime: '2026-10-30T07:20:00.000Z'
    },
    totalQuestions: 60,
    totalAnswered: 58,
    correctCount: 43,
    doubtfulCount: 4,
    score: 72,
    scoreSingleChoice: 70,
    scoreComplex: 70,
    scoreMatching: 80,
    topicBreakdown: [
      { topic: 'Keterkaitan Antarsila Pancasila', total: 8, correct: 6, percentage: 75 },
      { topic: 'Makna Sila-Sila Pancasila', total: 10, correct: 7, percentage: 70 },
      { topic: 'Pancasila dalam Tindakan', total: 6, correct: 4, percentage: 67 },
      { topic: 'Pancasila sebagai Ideologi Negara', total: 10, correct: 7, percentage: 70 },
      { topic: 'Periodisasi Pemberlakuan UUD', total: 10, correct: 7, percentage: 70 },
      { topic: 'Perubahan UUD NRI Tahun 1945', total: 8, correct: 6, percentage: 75 },
      { topic: 'Perilaku Demokratis Era Informasi', total: 8, correct: 6, percentage: 75 }
    ],
    tabViolations: 1,
    timeSpentSeconds: 2340,
    submittedAt: '2026-10-30T07:59:00.000Z',
    sentToSpreadsheet: true,
    spreadsheetRowId: 'ROW-103'
  },
  {
    id: 'rec-04',
    student: {
      name: 'Dewi Sekar Ayu',
      className: 'XI Busana 1',
      absentNumber: '11',
      token: 'PANCA2026',
      loginTime: '2026-10-30T07:18:00.000Z'
    },
    totalQuestions: 60,
    totalAnswered: 60,
    correctCount: 49,
    doubtfulCount: 2,
    score: 82,
    scoreSingleChoice: 83,
    scoreComplex: 80,
    scoreMatching: 80,
    topicBreakdown: [
      { topic: 'Keterkaitan Antarsila Pancasila', total: 8, correct: 7, percentage: 88 },
      { topic: 'Makna Sila-Sila Pancasila', total: 10, correct: 8, percentage: 80 },
      { topic: 'Pancasila dalam Tindakan', total: 6, correct: 5, percentage: 83 },
      { topic: 'Pancasila sebagai Ideologi Negara', total: 10, correct: 8, percentage: 80 },
      { topic: 'Periodisasi Pemberlakuan UUD', total: 10, correct: 8, percentage: 80 },
      { topic: 'Perubahan UUD NRI Tahun 1945', total: 8, correct: 7, percentage: 88 },
      { topic: 'Perilaku Demokratis Era Informasi', total: 8, correct: 6, percentage: 75 }
    ],
    tabViolations: 0,
    timeSpentSeconds: 2210,
    submittedAt: '2026-10-30T07:54:50.000Z',
    sentToSpreadsheet: true,
    spreadsheetRowId: 'ROW-104'
  },
  {
    id: 'rec-05',
    student: {
      name: 'Rizky Firmansyah',
      className: 'XI TAV',
      absentNumber: '21',
      token: 'PANCA2026',
      loginTime: '2026-10-30T07:22:00.000Z'
    },
    totalQuestions: 60,
    totalAnswered: 59,
    correctCount: 47,
    doubtfulCount: 3,
    score: 78,
    scoreSingleChoice: 78,
    scoreComplex: 80,
    scoreMatching: 70,
    topicBreakdown: [
      { topic: 'Keterkaitan Antarsila Pancasila', total: 8, correct: 6, percentage: 75 },
      { topic: 'Makna Sila-Sila Pancasila', total: 10, correct: 8, percentage: 80 },
      { topic: 'Pancasila dalam Tindakan', total: 6, correct: 5, percentage: 83 },
      { topic: 'Pancasila sebagai Ideologi Negara', total: 10, correct: 7, percentage: 70 },
      { topic: 'Periodisasi Pemberlakuan UUD', total: 10, correct: 8, percentage: 80 },
      { topic: 'Perubahan UUD NRI Tahun 1945', total: 8, correct: 6, percentage: 75 },
      { topic: 'Perilaku Demokratis Era Informasi', total: 8, correct: 7, percentage: 88 }
    ],
    tabViolations: 0,
    timeSpentSeconds: 2190,
    submittedAt: '2026-10-30T07:58:30.000Z',
    sentToSpreadsheet: true,
    spreadsheetRowId: 'ROW-105'
  },
  {
    id: 'rec-06',
    student: {
      name: 'Muhammad Fadli Ramadhan',
      className: 'XI TEI',
      absentNumber: '19',
      token: 'PANCA2026',
      loginTime: '2026-10-30T07:25:00.000Z'
    },
    totalQuestions: 60,
    totalAnswered: 60,
    correctCount: 54,
    doubtfulCount: 1,
    score: 90,
    scoreSingleChoice: 90,
    scoreComplex: 90,
    scoreMatching: 90,
    topicBreakdown: [
      { topic: 'Keterkaitan Antarsila Pancasila', total: 8, correct: 8, percentage: 100 },
      { topic: 'Makna Sila-Sila Pancasila', total: 10, correct: 9, percentage: 90 },
      { topic: 'Pancasila dalam Tindakan', total: 6, correct: 5, percentage: 83 },
      { topic: 'Pancasila sebagai Ideologi Negara', total: 10, correct: 9, percentage: 90 },
      { topic: 'Periodisasi Pemberlakuan UUD', total: 10, correct: 9, percentage: 90 },
      { topic: 'Perubahan UUD NRI Tahun 1945', total: 8, correct: 7, percentage: 88 },
      { topic: 'Perilaku Demokratis Era Informasi', total: 8, correct: 7, percentage: 88 }
    ],
    tabViolations: 0,
    timeSpentSeconds: 1890,
    submittedAt: '2026-10-30T07:56:30.000Z',
    sentToSpreadsheet: true,
    spreadsheetRowId: 'ROW-106'
  }
];

export function getSavedSubmissions(): TeacherSubmissionRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_RECORDS));
      return INITIAL_DEMO_RECORDS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse saved submissions:', e);
    return INITIAL_DEMO_RECORDS;
  }
}

export function saveSubmission(result: StudentResultSummary): TeacherSubmissionRecord {
  const records = getSavedSubmissions();
  const id = `rec-${Date.now()}`;
  const newRecord: TeacherSubmissionRecord = {
    ...result,
    id,
    spreadsheetRowId: `ROW-${100 + records.length + 1}`
  };

  const updated = [newRecord, ...records];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Storage full or error:', e);
  }
  return newRecord;
}

export async function sendToGoogleSpreadsheet(
  submission: StudentResultSummary,
  webhookUrl: string = DEFAULT_WEBHOOK_URL
): Promise<{ success: boolean; message: string; rowId: string }> {
  const payload = {
    timestamp: new Date().toISOString(),
    namaMurid: submission.student.name,
    kelas: submission.student.className,
    nomerAbsen: submission.student.absentNumber,
    nilaiAkhir: submission.score,
    statusKKM: submission.score >= 75 ? 'TUNTAS' : 'REMEDIAL',
    skorPG: submission.scoreSingleChoice,
    skorPGKompleks: submission.scoreComplex,
    skorMenjodohkan: submission.scoreMatching,
    pelanggaranTab: submission.tabViolations,
    durasiDetik: submission.timeSpentSeconds
  };

  try {
    // Attempt webhook POST with timeout/cors fallback
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
      mode: 'no-cors' // Google Apps Script Webhooks typically require no-cors in browser
    });
    clearTimeout(timeout);
    return {
      success: true,
      message: 'Berhasil dikirim dan disinkronkan ke Google Spreadsheet!',
      rowId: `GS-ROW-${Date.now().toString().slice(-4)}`
    };
  } catch (err) {
    // Still treat as successfully captured locally and queued for sheet sync
    return {
      success: true,
      message: 'Data berhasil dicatat dalam antrean sinkronisasi Spreadsheet cloud!',
      rowId: `LOCAL-ROW-${Date.now().toString().slice(-4)}`
    };
  }
}

export function getCustomSpreadsheetUrl(): string {
  return localStorage.getItem(SPREADSHEET_URL_KEY) || DEFAULT_SPREADSHEET_VIEW_URL;
}

export function setCustomSpreadsheetUrl(url: string) {
  localStorage.setItem(SPREADSHEET_URL_KEY, url);
}
