import { useProject } from '~/hooks/useProject';

const DashBoardPage = () => {
  const { projectId, projectName, startDate, endDate } = useProject();
  return (
    <>
      <div>아이디: {projectId}</div>
      <div>프로젝트 이름: {projectName}</div>
      <div>시작날짜: {startDate}</div>
      <div>끝나는 날짜:{endDate}</div>
    </>
  );
};

export default DashBoardPage;
