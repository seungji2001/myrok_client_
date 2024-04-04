import {
  type PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from 'react';
import { useGetUserProjectInfo } from '~/hooks/@query/useGetUserProjectInfo';

interface ProjectContextProps {
  projectId: number;
  projectName: string;
  resetProject: () => void;
}

export const ProjectContext = createContext<ProjectContextProps>(
  {} as ProjectContextProps,
);

export const ProjectProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { projectInfo, isFetched } = useGetUserProjectInfo();
  const [projectId, setProjectId] = useState(0);
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    if (!isFetched) return;

    if (projectInfo.projectId === 0) return;

    setProjectId(projectInfo.projectId);
    setProjectName(projectInfo.projectName);
  }, [isFetched, projectInfo]);

  const resetProject = () => {
    setProjectId(0);
    setProjectName('');
  };

  const value = {
    projectId,
    projectName,
    resetProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
