import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CSSProperties, FC } from 'react';
import { fn } from 'storybook/test';

interface ExampleButtonProps {
  readonly label: string;
  readonly onClick?: () => void;
}

const buttonStyle: CSSProperties = {
  cursor: 'pointer',
  border: 'none',
  borderRadius: '0.25rem',
  backgroundColor: '#3b82f6',
  padding: '0.5rem 1rem',
  color: '#ffffff',
};

const ExampleButton: FC<ExampleButtonProps> = ({ label, onClick }) => {
  return (
    <button type='button' style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

const meta = {
  component: ExampleButton,
} satisfies Meta<typeof ExampleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Click Me',
    onClick: fn(),
  },
};
