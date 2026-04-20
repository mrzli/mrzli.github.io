import React from 'react';

export interface SimpleTextProps {
  readonly children: React.ReactNode;
}

export function SimpleText(props: SimpleTextProps): React.ReactElement {
  return <span className={'font-sm text-slate-600'}>{props.children}</span>;
}
