import {
  type PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from 'react';
import { DEFAULT_END_DATE, DEFAULT_START_DATE } from '~/constants/project';
import { useGetUserProjectInfo } from '~/hooks/@query/useGetUserProjectInfo';
import type { YYYYMMDD } from '~/types/project';

interface ProjectContextProps {
  projectId: number;
  projectName: string;
  startDate: YYYYMMDD | undefined;
  endDate: YYYYMMDD | undefined;
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
  const [startDate, setStartDate] = useState<YYYYMMDD>();
  const [endDate, setEndDate] = useState<YYYYMMDD>();

  useEffect(() => {
    if (!isFetched) return;

    if (projectInfo.projectId === 0) return;

    setProjectId(projectInfo.projectId);
    setProjectName(projectInfo.projectName);

    if (
      projectInfo.startDate !== DEFAULT_START_DATE &&
      projectInfo.endDate !== DEFAULT_END_DATE
    ) {
      setStartDate(projectInfo.startDate);
      setEndDate(projectInfo.endDate);
    }
  }, [isFetched, projectInfo]);

  const resetProject = () => {
    setProjectId(0);
    setProjectName('');
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const value = {
    projectId,
    projectName,
    startDate,
    endDate,
    resetProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
