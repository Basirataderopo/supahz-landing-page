'use client';

export default function ChatAssistant() {
  return (
    <iframe
      src="https://supahzchat-jv7x6ddx.manus.space"
      style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '420px',
        height: '600px',
        border: 'none',
        zIndex: 9999,
        background: 'transparent',
      }}
      allow="microphone"
    />
  );
}
