import { type ForwardedRef, forwardRef } from 'react';
import Button, { ButtonProps } from '~/components/common/Button/Button';
import { useModal } from '~/components/common/Modal/useModal';

interface ModalButtonProps extends ButtonProps {
  /**
   * 모달 열기, 닫기 행동 선택
   * @default close
   */
  act?: 'close' | 'open';
  /**
   * 버튼 클릭시 작동하게 하고 싶은 함수
   */
  handleClickCallback?: () => void;
}

const ModalButton = (
  props: ModalButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const { act = 'close', handleClickCallback, children, ...attributes } = props;
  const { closeModal, openModal } = useModal();

  const handleClickButton = () => {
    if (handleClickCallback) {
      handleClickCallback();
    }
    if (act === 'close') {
      closeModal();
    } else {
      openModal();
    }
  };

  return (
    <Button onClick={handleClickButton} ref={ref} {...attributes}>
      {children}
    </Button>
  );
};

export default forwardRef(ModalButton);
