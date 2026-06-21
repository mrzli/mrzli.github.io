import { Card, TagList, Typography } from '@components';
import type { ReactNode } from 'react';

export interface ProjectCardProps {
  readonly title: string;
  readonly text: readonly string[];
  readonly tags: readonly string[];
  readonly roleText: readonly string[];
}

export function ProjectCard({
  title,
  text,
  tags,
  roleText,
}: ProjectCardProps): ReactNode {
  return (
    <Card padding='large'>
      <div className='flex flex-col gap-4'>
        <Typography variant='card-title-accent'>{title}</Typography>
        <Typography variant='body'>
          <div className='flex flex-col gap-2'>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Typography>
        <TagList tags={tags} />

        <Card variant='inner' padding='small'>
          <div className='flex flex-col gap-2'>
            <Typography variant='heading-4'>My role</Typography>
            <Typography variant='body'>
              <div className='flex flex-col gap-2'>
                {roleText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Typography>
          </div>
        </Card>
      </div>
    </Card>
  );
}
