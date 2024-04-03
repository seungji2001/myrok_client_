/** @jsxImportSource @emotion/react */
import Text from '~/components/common/Text/Text';
import * as S from './StartPage.styles';
import Button from '~/components/common/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import Title from '~/components/common/Title/Title';

type StartType = 'create' | 'join';

const StartPage = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [clickedButton, setClickedButton] = useState<StartType>();

  const handleButtonClick = (value: StartType) => {
    setClickedButton(() => value);
  };

  useEffect(() => {
    if (!clickedButton || ref.current === null) {
      return;
    }

    ref.current.getAnimations().forEach((animation) => {
      animation.onfinish = () =>
        clickedButton === 'create'
          ? navigate(ROUTES.CREATE)
          : navigate(ROUTES.JOIN);
    });
  }, [clickedButton, navigate]);

  return (
    <div css={S.startPageContainer}>
      <main css={S.mainContainer}>
        <div css={S.innerContainer(clickedButton)} ref={ref}>
          <div css={S.buttonContainer}>
            <Text weight="semiBold" css={S.explainText}>
              우리 팀만의 공간이 필요하신가요?
            </Text>
            <Button
              variant="primary"
              css={S.startTeamButton()}
              onClick={() => handleButtonClick('create')}
              aria-label="팀 개설하기"
            >
              팀 개설하기
            </Button>
          </div>
          <div css={S.buttonContainer}>
            <Text weight="semiBold" css={S.explainText}>
              초대코드가 있으신가요?
            </Text>
            <Button
              variant="normal"
              css={S.startTeamButton()}
              onClick={() => handleButtonClick('join')}
              aria-label="팀 참가하기"
            >
              팀 참가하기
            </Button>
          </div>
        </div>
      </main>
      <div css={S.titleWrapper}>
        <Title />
      </div>
    </div>
  );
};

export default StartPage;
