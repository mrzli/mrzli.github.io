import type { ReactNode } from 'react';

export interface MainContainerProps {
  readonly children: ReactNode;
}

export function MainContainer({ children }: MainContainerProps): ReactNode {
  return (
    <div className='min-h-screen text-slate-700 dark:text-slate-300'>
      <div className='mx-auto w-full px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl'>
        {children}
      </div>
    </div>
  );
}
