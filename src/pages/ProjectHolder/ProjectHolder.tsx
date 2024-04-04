/** @jsxImportSource @emotion/react */
import * as S from '~/pages/ProjectHolder/ProjectHoler.styles';
import { useNavigate } from 'react-router-dom';
import Title from '~/components/common/Title/Title';
import { useProject } from '~/hooks/useProject';
import { useEffect } from 'react';
import { ROUTES } from '~/constants/routes';

const ProjectHolder = () => {
  const navigate = useNavigate();
  const { projectId } = useProject();

  useEffect(() => {
    if (projectId !== 0) navigate(ROUTES.DASH_BOARD);
  }, [projectId]);

  return (
    <div css={S.startPageContainer}>
      <div css={S.titleWrapper}>
        <Title />
      </div>
    </div>
  );
};

export default ProjectHolder;
