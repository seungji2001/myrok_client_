import Button from '~/components/common/Button/Button';
import Modal from '~/components/common/Modal/Modal';
import Text from '~/components/common/Text/Text';
import Input from '~/components/common/Input/Input';
import * as S from './TeamExitModal.styled';
import { useTeamExitModal } from '~/components/user/TeamExitModal/useTeamExitModal';
import { CloseBoldIcon, ExitIcon } from '~/assets/svg';

const TeamExitModal = () => {
  const {
    teamName,
    projectName,
    ref,

    handlers: { handleTeamNameChange, handleSubmit, handleResetInput },
  } = useTeamExitModal();

  return (
    <>
      <Modal>
        <Modal.Button variant="normal" act="open" css={S.exitLink}>
          <ExitIcon />
          <Text size="xxs">팀 나가기</Text>
        </Modal.Button>
        <Modal.Backdrop />
        <Modal.Layout css={S.modalContainer}>
          <div css={S.header}>
            <Modal.Button
              act="close"
              css={S.closeButton}
              ref={ref}
              handleClickCallback={handleResetInput}
            >
              <CloseBoldIcon />
            </Modal.Button>
          </div>
          <div css={S.body}>
            <label>
              <div css={S.explainText}>
                <Text size="lg">팀 탈퇴를 위해 </Text>
                <Text size="lg" weight="semiBold" css={S.strongContent}>
                  {projectName}
                </Text>
                <Text>을(를) 입력해 주세요.</Text>
              </div>
              <Input
                width="340px"
                height="40px"
                placeholder={projectName}
                css={S.teamNameInput}
                autoFocus
                required
                value={teamName}
                onChange={handleTeamNameChange}
              />
            </label>
            <div css={S.buttonContainer}>
              <Modal.Button
                type="button"
                variant="primary"
                act="close"
                handleClickCallback={handleResetInput}
              >
                취소
              </Modal.Button>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={teamName !== projectName}
              >
                확인
              </Button>
            </div>
          </div>
        </Modal.Layout>
      </Modal>
    </>
  );
};

export default TeamExitModal;
