/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StudentProfile, StudentResultSummary } from './types/cbt';
import { LoginView } from './components/LoginView';
import { CbtExamView } from './components/CbtExamView';
import { ResultView } from './components/ResultView';
import { TeacherDashboard } from './components/TeacherDashboard';
import { HeaderBar } from './components/HeaderBar';

export default function App() {
  const [viewMode, setViewMode] = useState<'login' | 'exam' | 'result' | 'teacher'>('login');
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [examResult, setExamResult] = useState<StudentResultSummary | null>(null);

  const handleLogin = (profile: StudentProfile) => {
    setStudent(profile);
    setViewMode('exam');
  };

  const handleSubmitExam = (result: StudentResultSummary) => {
    setExamResult(result);
    setViewMode('result');
  };

  const handleOpenTeacher = () => {
    setViewMode('teacher');
  };

  const handleBackToStudent = () => {
    if (examResult) {
      setViewMode('result');
    } else {
      setViewMode('login');
    }
  };

  const handleStartNewExam = () => {
    setStudent(null);
    setExamResult(null);
    setViewMode('login');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {viewMode === 'login' && (
        <>
          <HeaderBar
            mode="login"
            onGoToTeacher={handleOpenTeacher}
          />
          <LoginView
            onLogin={handleLogin}
            onOpenTeacher={handleOpenTeacher}
          />
        </>
      )}

      {viewMode === 'exam' && student && (
        <CbtExamView
          student={student}
          onSubmitExam={handleSubmitExam}
          onExit={handleStartNewExam}
        />
      )}

      {viewMode === 'result' && examResult && (
        <ResultView
          result={examResult}
          onOpenTeacher={handleOpenTeacher}
          onStartNewExam={handleStartNewExam}
        />
      )}

      {viewMode === 'teacher' && (
        <TeacherDashboard
          onBackToStudent={handleBackToStudent}
        />
      )}
    </div>
  );
}
