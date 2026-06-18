import { Icon } from '@iconify/react';
import type { CSSProperties, ReactNode } from 'react';

import viteLogo from '/vite.svg';

import reactLogo from '../../assets/react.svg';

const imageStyle: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
};

export function ExamplePage(): ReactNode {
  return (
    <div>
      <h1>template-react</h1>
      <p className='bg-orange-200 text-2xl text-blue-500'>App is running.</p>
      <div>
        <img alt='Vite logo' src={viteLogo} style={imageStyle} />
        <img alt='React logo' src={reactLogo} style={imageStyle} />
      </div>
      <div>
        <Icon icon='cif:hr' width='500' height='300' />
        <Icon icon='mdi:linkedin' width='48' height='48' color='#0a66c2' />
        <Icon icon='mdi:github' width='48' height='48' color='#181717' />
        <Icon icon='mdi:stackoverflow' width='48' height='48' color='#f48024' />
        <Icon
          icon='mdi:file-pdf-box'
          width='48'
          height='48'
          color='#ef4444' // classic PDF red
        />
        <Icon icon='material-symbols:download' width='48' height='48' />
      </div>
    </div>
  );
}
