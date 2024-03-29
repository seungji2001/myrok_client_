/** @jsxImportSource @emotion/react */
import { backdropStyling } from '~/components/common/Modal/ModalBackdrop/ModalBackdrop.styles';
import { useModal } from '~/components/common/Modal/useModal';

const ModalBackdrop = () => {
  const { isModalOpen } = useModal();
  return isModalOpen && <div css={backdropStyling} />;
};

export default ModalBackdrop;
