import { Card, TagList, Typography } from '@components';
import type { ReactNode } from 'react';

export interface ProjectCardProps {
  readonly title: string;
  readonly text: readonly string[];
  readonly tags: readonly string[];
  readonly roleText: readonly string[];
}

export function ProjectCard({ title, text, tags, roleText }: ProjectCardProps): ReactNode {
  return (
    <Card padding='large'>
      <div className='flex flex-col gap-4'>
        <Typography variant='heading-3' className='text-amber-700 dark:text-amber-300'>
          {title}
        </Typography>
        <Typography variant='prose' as='div'>
          <div className='flex flex-col gap-4'>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Typography>
        <TagList tags={tags} />

        <Card variant='inner' padding='small'>
          <Typography variant='prose' as='div'>
            <div className='flex flex-col gap-4'>
              {roleText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Typography>
        </Card>
      </div>
    </Card>
  );
}
