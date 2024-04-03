/** @jsxImportSource @emotion/react */
import {
  useRef,
  useEffect,
  type PropsWithChildren,
  type ComponentPropsWithoutRef,
} from 'react';
import { createPortal } from 'react-dom';
import * as S from '~/components/common/Modal/ModalLayout/ModalLayout.styles';
import { useModal } from '~/components/common/Modal/useModal';
import { useKeydownEffect } from '~/hooks/useKeydownEffect';

export interface ModalLayoutProps extends ComponentPropsWithoutRef<'dialog'> {
  /**
   * 백드롭을 통해 모달 닫기에 대한 여부
   * @default true
   */
  isBackdropClosable?: boolean;
}

const ModalLayout = (props: PropsWithChildren<ModalLayoutProps>) => {
  const { isBackdropClosable = true, children, ...attribute } = props;
  const ref = useRef<HTMLDialogElement>(null);
  const { closeModal, isModalOpen } = useModal();
  useKeydownEffect('Escape', closeModal);

  useEffect(() => {
    const closeWhenClickBackdrop = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node | null)) {
        closeModal();
      }
    };
    if (isBackdropClosable) {
      window.addEventListener('mousedown', closeWhenClickBackdrop);

      return () => {
        window.addEventListener('mousedown', closeWhenClickBackdrop);
      };
    }
  }, []);

  return (
    <>
      {isModalOpen &&
        createPortal(
          <dialog
            ref={ref}
            css={S.modalLayoutContainer}
            open={isModalOpen}
            {...attribute}
          >
            <form method="dialog" css={{ width: '100%' }}>
              {children}
            </form>
          </dialog>,
          document.body,
        )}
    </>
  );
};

export default ModalLayout;
