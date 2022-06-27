import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid'

interface PortalProps {
  children: React.ReactNode | any;
  id: string;
}

export default function Portal({ children, id }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return <>{mounted && typeof window !== 'undefined' && createPortal(children, document.querySelector(`#${id}`), nanoid())}</>;
}
