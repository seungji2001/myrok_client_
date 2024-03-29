import { type PropsWithChildren } from 'react';
import ModalBackdrop from '~/components/common/Modal/ModalBackdrop/ModalBackdrop';
import ModalLayout from '~/components/common/Modal/ModalLayout/ModalLayout';
import { ModalProvider } from '~/components/common/Modal/ModalContext';
import ModalButton from '~/components/common/Modal/ModalButton/ModalButton';

const Modal = (props: PropsWithChildren) => {
  const { children } = props;
  return <ModalProvider>{children}</ModalProvider>;
};

Modal.Backdrop = ModalBackdrop;
Modal.Layout = ModalLayout;
Modal.Button = ModalButton;

export default Modal;
