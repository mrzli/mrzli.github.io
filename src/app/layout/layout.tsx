import type { FC, ReactNode } from 'react';

export interface Props {
  readonly children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='mx-auto w-full px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
      {children}
    </div>
  );
};
