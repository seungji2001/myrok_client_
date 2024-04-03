/** @jsxImportSource @emotion/react */
import { ErrorImg } from '~/assets/svg';
import { HTTP_STATUS_CODE, HTTP_ERROR_MESSAGE } from '~/constants/api';
import * as S from '~/components/common/Error/Error.styles';
import Text from '~/components/common/Text/Text';
import { hasKeyInObject } from '~/types/typeGuard';
import Button from '~/components/common/Button/Button';

export interface ErrorProps {
  statusCode?: number;
  errorCode?: number;
  resetError?: () => void;
}

const Error = ({
  statusCode = HTTP_STATUS_CODE.NOT_FOUND,
  errorCode,
  resetError,
}: ErrorProps) => {
  const currentStatusCode =
    statusCode === HTTP_STATUS_CODE.CONTENT_TOO_LARGE
      ? HTTP_STATUS_CODE.BAD_REQUEST
      : statusCode;
  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, currentStatusCode);

  if (!isHTTPError) return null;

  return (
    <div>
      <div css={S.errorContainerStyling}>
        <ErrorImg aria-label="에러 이미지" />
        <Text css={S.errorHeadingStyling} size="xxl" weight="bold">
          {HTTP_ERROR_MESSAGE[currentStatusCode].HEADING}
        </Text>
        <Text css={S.errorTextStyling}>
          {HTTP_ERROR_MESSAGE[currentStatusCode].BODY}
        </Text>
        <Button
          css={S.errorButtonStyling}
          variant="primary"
          onClick={resetError}
        >
          {HTTP_ERROR_MESSAGE[currentStatusCode].BUTTON}
        </Button>
      </div>
    </div>
  );
};

export default Error;
