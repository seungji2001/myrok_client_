/** @jsxImportSource @emotion/react */
import Text from '~/components/common/Text/Text';
import * as S from '~/pages/JoinPage/JoinPage.styles';
import Input from '~/components/common/Input/Input';
import BackButton from '~/components/common/BackButton/BackButton';
import Button from '~/components/common/Button/Button';
import { useRef, useEffect } from 'react';
import { ROUTES } from '~/constants/routes';
import { useNavigate } from 'react-router-dom';
import { useJoinPage } from '~/pages/JoinPage/useJoinPage';
import Title from '~/components/common/Title/Title';

const JoinPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const {
    inviteCode,
    isClicked,
    isRequired,
    warningText,

    handlers: {
      handleInviteCodeChange,
      handleProjectInviteCodeSubmit,
      handleCreatePageClicked,
    },
  } = useJoinPage(inputRef);

  useEffect(() => {
    if (!isClicked || ref.current === null) {
      return;
    }

    ref.current.getAnimations().forEach((animation) => {
      animation.onfinish = () => navigate(ROUTES.CREATE);
    });
  }, [isClicked, navigate]);

  return (
    <div css={S.joinPageContainer}>
      <main css={S.mainContainer}>
        <div css={S.innerContainer(isClicked)} ref={ref}>
          <Text weight="semiBold" css={S.titleText}>
            프로젝트 참가하기
          </Text>
          <form css={S.inviteCodeForm} onSubmit={handleProjectInviteCodeSubmit}>
            <div css={S.bodyContainer}>
              <div css={S.inputContainer}>
                <div css={S.inputWrapper}>
                  <Input
                    width="100%"
                    height="100%"
                    placeholder="8자리 초대코드 입력"
                    ref={inputRef}
                    value={inviteCode}
                    onChange={handleInviteCodeChange}
                    css={S.inputTitle}
                    required={isRequired}
                  />
                </div>
                <Text size="sm" weight="bold" css={S.warningText}>
                  {warningText}
                </Text>
              </div>
              <div>
                <Text weight="semiBold" css={S.explainText}>
                  초대코드가 없으신가요?
                </Text>
                <Button
                  variant="plain"
                  type="button"
                  css={S.createPageButton}
                  aria-label="팀 개설하기 페이지 이동"
                  onClick={handleCreatePageClicked}
                >
                  직접 프로젝트를 만들어보세요!
                </Button>
              </div>
            </div>
            <div css={S.confirmButtonsContainer}>
              <BackButton label="이전 단계로" />
              <Button
                variant="primary"
                css={S.submitButton}
                disabled={inviteCode.length < 8}
                aria-label="팀 참가"
              >
                팀 참가
              </Button>
            </div>
          </form>
        </div>
      </main>
      <div css={S.titleWrapper}>
        <Title />
      </div>
    </div>
  );
};

export default JoinPage;
