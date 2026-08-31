import { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 10);
    const hideTimer = setTimeout(() => setIsHiding(true), 2800);
    const unmountTimer = setTimeout(() => setIsHidden(true), 2800 + 500);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (isHidden) {
    return null;
  }

  return (
    <div
      className={`loader ${isMounted ? 'mounted' : ''} ${isHiding ? 'hiding' : ''}`}
      aria-hidden="true"
    >
      <div className="loader-fill" />
      <h1 className="loader-text">SAMADITYA.COM</h1>
    </div>
  );
};

export default Loader;
