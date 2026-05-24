import { DemoShell } from './components/layout/DemoShell';
import { CardOnlyPage } from './components/layout/CardOnlyPage';

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '');
  const view = new URLSearchParams(window.location.search).get('view');

  if (pathname === '/card' || view === 'card') {
    return <CardOnlyPage />;
  }

  return <DemoShell />;
}
