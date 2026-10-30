import { useEffect, useState, useCallback } from 'react';

interface AntiCheatOptions {
  enabled: boolean;
  studentName?: string;
  onViolation?: (count: number) => void;
}

export function useAntiCheat({ enabled, studentName, onViolation }: AntiCheatOptions) {
  const [violationCount, setViolationCount] = useState<number>(0);
  const [showWarningModal, setShowWarningModal] = useState<boolean>(false);
  const [lastViolationTime, setLastViolationTime] = useState<string>('');
  const [isScreenProtected, setIsScreenProtected] = useState<boolean>(false);

  const handleViolation = useCallback(() => {
    if (!enabled) return;
    setViolationCount((prev) => {
      const next = prev + 1;
      setLastViolationTime(new Date().toLocaleTimeString('id-ID'));
      setShowWarningModal(true);
      if (onViolation) onViolation(next);
      return next;
    });
  }, [enabled, onViolation]);

  useEffect(() => {
    if (!enabled) return;

    // 1. Prevent Right Click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Prevent Copy, Cut, Paste
    const handleCopyCutPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // 3. Prevent Print / PrintScreen / DevTools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen key
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        setIsScreenProtected(true);
        setTimeout(() => setIsScreenProtected(false), 2000);
        handleViolation();
      }

      // Ctrl+C, Ctrl+V, Ctrl+U (view source), Ctrl+P (print), Ctrl+S, F12
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'v', 'x', 'u', 'p', 's', 'a'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        return false;
      }

      // F12 key
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
    };

    // 4. Tab switch & window blur detection
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation();
      }
    };

    const handleWindowBlur = () => {
      // Some browsers trigger blur when clicking browser chrome or switching tabs
      if (document.visibilityState === 'hidden') {
        handleViolation();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('copy', handleCopyCutPaste);
    window.addEventListener('cut', handleCopyCutPaste);
    window.addEventListener('paste', handleCopyCutPaste);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('copy', handleCopyCutPaste);
      window.removeEventListener('cut', handleCopyCutPaste);
      window.removeEventListener('paste', handleCopyCutPaste);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [enabled, handleViolation]);

  const dismissWarning = () => {
    setShowWarningModal(false);
  };

  return {
    violationCount,
    showWarningModal,
    dismissWarning,
    lastViolationTime,
    isScreenProtected
  };
}
