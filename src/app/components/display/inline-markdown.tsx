import Markdown from 'markdown-to-jsx/react';
import { Fragment, type ReactNode } from 'react';

import { InlineLink } from '../controls/inline-link';

const INLINE_MARKDOWN_OPTIONS = {
  forceInline: true,
  wrapper: Fragment,
  disableParsingRawHTML: true,
  overrides: {
    a: InlineLink,
  },
} as const;

export interface InlineMarkdownProps {
  readonly text: string;
}

export function InlineMarkdown({ text }: InlineMarkdownProps): ReactNode {
  return <Markdown options={INLINE_MARKDOWN_OPTIONS}>{text}</Markdown>;
}
