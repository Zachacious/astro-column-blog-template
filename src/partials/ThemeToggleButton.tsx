import '../css/ThemeToggleButton.scss';

// import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

const themes = ['light', 'dark'];

const icons = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>,
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('theme-dark');
      document.documentElement.classList.remove('dark');
    } else {
      root.classList.add('theme-dark');
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('storage', (event) => {
      if (event.key === 'theme') {
        setTheme(event.newValue);
      }
    });

    return () => {
      window.removeEventListener('storage', () => {});
    };
  }, [theme]);

  return (
    <div className="theme-toggle flex items-center">
      {themes.map((t, i) => {
        const icon = icons[i];
        const isChecked = t === theme;
        return (
          <label key={t} className={isChecked ? 'checked ' : 'cursor-pointer'}>
            {icon}
            <input
              type="radio"
              name="theme-toggle"
              checked={isChecked}
              value={t}
              title={`Use ${t} theme`}
              aria-label={`Use ${t} theme`}
              onChange={() => {
                localStorage.setItem('theme', t);
                setTheme(t);
                window.dispatchEvent(
                  new StorageEvent('storage', {
                    key: 'theme',
                    newValue: t,
                  })
                );
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
