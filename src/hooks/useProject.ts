import { useContext } from 'react';
import { ProjectContext } from '~/context/ProjectContext';

export const useProject = () => {
  const context = useContext(ProjectContext);

  if (context === undefined) {
    throw new Error('useTeamPlace must be used within a TeamPlaceContext');
  }

  return context;
};
