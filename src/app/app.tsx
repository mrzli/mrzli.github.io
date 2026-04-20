import type { CSSProperties, FC } from 'react';

import viteLogo from '/vite.svg';

import reactLogo from '../assets/react.svg';

const imageContainerStyle: CSSProperties = {
  height: '4rem',
};

const imageStyle: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
};

export const App: FC = () => {
  return (
    <div>
      <h1>template-react</h1>
      <p>App is running.</p>
      <div style={imageContainerStyle}>
        <img alt='Vite logo' src={viteLogo} style={imageStyle} />
        <img alt='React logo' src={reactLogo} style={imageStyle} />
      </div>
    </div>
  );
};
