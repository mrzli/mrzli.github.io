import React from 'react';

export interface TitleProps {
  readonly children: string;
}

export function Title(props: TitleProps): React.ReactElement {
  return (
    <h1 className={'text-lg font-bold uppercase text-slate-700 mt-6 mb-3'}>
      {props.children}
    </h1>
  );
}
