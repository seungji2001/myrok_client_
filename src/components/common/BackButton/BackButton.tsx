/** @jsxImportSource @emotion/react */
import * as S from './BackButton.styles';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '~/assets/svg';
import Button from '~/components/common/Button/Button';
import Text from '~/components/common/Text/Text';
import type { ROUTES } from '~/constants/routes';

interface BackButtonProps {
  label: string;
  href?: (typeof ROUTES)[keyof typeof ROUTES];
}

const BackButton = (props: BackButtonProps) => {
  const { label, href } = props;
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      variant="plain"
      css={S.backButton}
      onClick={() => {
        href ? navigate(href) : navigate(-1);
      }}
    >
      <div css={S.arrowLeftIconWrapper}>
        <ArrowLeftIcon />
      </div>
      <Text weight="semiBold">{label}</Text>
    </Button>
  );
};

export default BackButton;
