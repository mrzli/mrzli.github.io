import type { ReactNode } from 'react';

import { BackgroundPage } from '@/app/pages/background/background-page';
import { ExperiencePage } from '@/app/pages/experience/experience-page';
import { HomePage } from '@/app/pages/home/home-page';
import { ProjectsPage } from '@/app/pages/projects/projects-page';
import { SkillsPage } from '@/app/pages/skills/skills-page';

import { PAGE_PATHS } from './page-paths';

export function SwipePreview({ path }: { readonly path: string }): ReactNode {
  switch (path) {
    case PAGE_PATHS.home: {
      return <HomePage />;
    }
    case PAGE_PATHS.experience: {
      return <ExperiencePage />;
    }
    case PAGE_PATHS.skills: {
      return <SkillsPage />;
    }
    case PAGE_PATHS.projects: {
      return <ProjectsPage />;
    }
    case PAGE_PATHS.background: {
      return <BackgroundPage />;
    }
    default: {
      return null;
    }
  }
}
