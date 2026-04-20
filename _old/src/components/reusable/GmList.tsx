import React from 'react';

export interface GmListProps {
  readonly children: React.ReactNode;
}

export function GmList({ children }: GmListProps): React.ReactElement {
  return <ul className={'list-disc list-inside'}>{children}</ul>;
}
