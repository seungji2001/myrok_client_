/** @jsxImportSource @emotion/react */
import * as S from '~/components/common/Modal/ModalBackdrop/ModalBackdrop.styles';
import { useModal } from '~/components/common/Modal/useModal';

const ModalBackdrop = () => {
  const { isModalOpen } = useModal();
  return isModalOpen && <div css={S.backdropStyling} />;
};

export default ModalBackdrop;
