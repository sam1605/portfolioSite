import { useEffect, useState } from 'react';
// import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { siteConfig, type NavLink } from '../data';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useTheme } from '../hooks/useTheme';
import './Nav.css';

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timeout = setTimeout(
      () => setIsMounted(true),
      prefersReducedMotion ? 0 : 200,
    );
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', onScroll);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    document.body.classList.toggle('hidden', menuOpen);
    return () => document.body.classList.remove('hidden');
  }, [menuOpen]);

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(`#${id}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    zIndex: 11,
    padding: '0px 50px',
    width: '100%',
    height: isScrolled ? '70px' : '100px',
    backgroundColor: isScrolled ? 'var(--bg-scrolled)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled
      ? '0 10px 30px -10px var(--bg-shadow)'
      : 'none',
    transition: 'var(--transition)',
  };

  return (
    <header
      className="header"
      style={{
        ...headerStyle,
        opacity: isMounted ? 1 : 0,
        visibility: isMounted ? 'visible' : 'hidden',
      }}
    >
      <div className="header-brand-wrap">
        <a
          href="#home"
          className="logo-name"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Back to top"
        >
          SamAditya.com
        </a>
      </div>

      <nav className="nav-center">
        <ul className="nav-links">
          {siteConfig.nav.links.map((link: NavLink) => (
            <li key={link.id} className="nav-link">
              <a
                href={`#${link.id}`}
                onClick={(e) => handleMenuClick(e, link.id)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-right">
        <button
          type="button"
          className="resume-button"
          onClick={() => {
            window.open(siteConfig.nav.resumeUrl, '_blank');
          }}
        >
          Resume
        </button>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>

      <button
        className="hamburger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          //display: 'none',
          border: 0,
          backgroundColor: 'transparent',
        }}
      >
        <div className={menuOpen ? 'ham-box open' : 'ham-box'}>
          <div className="ham-box-inner" />
        </div>
      </button>

      <aside
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          width: 'min(75vw, 400px)',
          height: '100vh',
          padding: '50px 10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-800)',
          boxShadow: '10px 0px 30px -15px var(--bg-shadow)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'var(--transition)',
          zIndex: 11,
        }}
      >
        <nav style={{ width: '100%' }}>
          <ol
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: 20,
            }}
          >
            {siteConfig.nav.links.map((link: NavLink, i: number) => (
              <li
                key={link.id}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(var(--fz-sm), 4vw, var(--fz-lg))',
                }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleMenuClick(e, link.id)}
                  style={{ color: 'var(--text-heading)' }}
                >
                  <span style={{ color: 'var(--accent)', marginRight: 8 }}>
                    0{i + 1}.
                  </span>
                  {link.text}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 10 }}>
              <button
                type="button"
                className="resume-button"
                onClick={() => {
                  window.open(siteConfig.nav.resumeUrl, '_blank');
                }}
                style={{
                  color: 'var(--accent)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--accent)',
                  borderRadius: 'var(--border-radius)',
                  padding: '0.75rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fz-sm)',
                  lineHeight: 1,
                }}
              >
                Resume
              </button>
            </li>
            <li style={{ marginTop: 10 }}>
              <ThemeToggle theme={theme} onToggle={toggleTheme} inMenu />
            </li>
          </ol>
        </nav>
      </aside>
    </header>
  );
};

export default Nav;
