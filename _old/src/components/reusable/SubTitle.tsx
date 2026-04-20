import React from 'react';

export interface SubTitleProps {
  readonly children: React.ReactNode;
}

export function SubTitle(props: SubTitleProps): React.ReactElement {
  return <h2 className={'font-bold text-pink-500 my-2'}>{props.children}</h2>;
}
