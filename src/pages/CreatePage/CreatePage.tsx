/** @jsxImportSource @emotion/react */
import Text from '~/components/common/Text/Text';
import * as S from '~/pages/CreatePage/CreatePage.styles';
import Input from '~/components/common/Input/Input';
import { useRef } from 'react';
import Button from '~/components/common/Button/Button';
import BackButton from '~/components/common/BackButton/BackButton';
import { useCreatePage } from '~/pages/CreatePage/useCreatePage';
import Title from '~/components/common/Title/Title';

const CreatePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    projectName,
    isClicked,
    period,

    handlers: {
      handleProjectNameChange,
      handleProjectCreateSubmit,
      handlePeriodShowClicked,
      handleScheduleChange,
      handleScheduleBlur,
    },
  } = useCreatePage(inputRef);

  return (
    <div css={S.createPageContainer}>
      <main css={S.mainContainer}>
        <div css={S.innerContainer}>
          <Text weight="semiBold" css={S.titleText}>
            프로젝트 생성하기
          </Text>
          <form css={S.teamNameForm} onSubmit={handleProjectCreateSubmit}>
            <div css={S.bodyContainer}>
              <Text weight="semiBold" css={S.explainText}>
                간단한 입력으로 쉽게 프로젝트를 만들어 보세요!
              </Text>
              <div css={S.inputWrapper}>
                <Input
                  width="100%"
                  height="90%"
                  placeholder="프로젝트 이름 입력"
                  ref={inputRef}
                  value={projectName}
                  onChange={handleProjectNameChange}
                  css={S.inputTitle}
                  required
                />
              </div>
              <div css={S.periodContainer}>
                <Button
                  variant="plain"
                  type="button"
                  css={S.periodButton}
                  onClick={handlePeriodShowClicked}
                  aria-label="프로젝트 기간 설정"
                >
                  프로젝트 기간을 설정하고 싶으신가요?
                </Button>
                {isClicked && (
                  <div>
                    <div css={S.periodLocalInputContainer}>
                      <Input
                        width="120px"
                        height="20px"
                        type="date"
                        css={S.periodLocalInput}
                        name="startDate"
                        value={period?.startDate}
                        onChange={handleScheduleChange}
                        onBlur={handleScheduleBlur}
                        aria-label={`프로젝트 시작 일자는 ${period?.startDate} 입니다`}
                        required
                      />
                      <Text>부터</Text>
                    </div>

                    <div css={S.periodLocalInputContainer}>
                      <Input
                        width="120px"
                        height="20px"
                        type="date"
                        css={S.periodLocalInput}
                        name="endDate"
                        value={period?.endDate}
                        onChange={handleScheduleChange}
                        onBlur={handleScheduleBlur}
                        aria-label={`프로젝트 마감 일자는 ${period?.endDate} 입니다`}
                        required
                      />
                      <Text>까지</Text>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div css={S.confirmButtonsContainer}>
              <BackButton label="이전 단계로" />
              <Button
                type="submit"
                variant="primary"
                css={S.submitButton}
                disabled={projectName.length < 1}
                aria-label="생성하기"
              >
                생성하기
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

export default CreatePage;
