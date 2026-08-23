import React, { StrictMode, useState, useEffect, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const Events = lazy(() => import('./pages/Events.jsx'));
const Team = lazy(() => import('./pages/Team.jsx'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#030408] flex items-center justify-center text-[#38bdf8] font-mono text-sm">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#38bdf8]/20 border-t-[#38bdf8] animate-spin" />
        <span className="tracking-widest uppercase text-xs text-[#94a3b8]">Loading page...</span>
      </div>
    </div>
  );
}

function Root() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath.startsWith('/events')) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Events />
      </Suspense>
    );
  }

  if (currentPath.startsWith('/team')) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Team />
      </Suspense>
    );
  }

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)

