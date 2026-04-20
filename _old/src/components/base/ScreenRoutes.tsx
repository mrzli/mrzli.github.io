import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IntroScreen } from '../screens/IntroScreen';
import { WorkHistoryScreen } from '../screens/WorkHistoryScreen';
import { PersonalInfoScreen } from '../screens/PersonalInfoScreen';
import { EducationScreen } from '../screens/EducationScreen';
import { SkillsOverviewScreen } from '../screens/SkillsOverviewScreen';
import { PersonalProjectsScreen } from '../screens/PersonalProjectsScreen';

export function ScreenRoutes(): React.ReactElement {
  return (
    <Routes>
      <Route path={'/'} element={<IntroScreen />} />
      <Route path={'/work-history'} element={<WorkHistoryScreen />} />
      <Route path={'/education'} element={<EducationScreen />} />
      <Route path={'/skills-overview'} element={<SkillsOverviewScreen />} />
      <Route path={'/personal-projects'} element={<PersonalProjectsScreen />} />
      <Route path={'/personal-info'} element={<PersonalInfoScreen />} />
      <Route path={'*'} element={<IntroScreen />} />
    </Routes>
  );
}
