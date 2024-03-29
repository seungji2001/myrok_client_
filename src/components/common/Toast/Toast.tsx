/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import { useToast } from './useToast';
import Text from '~/components/common/Text/Text';
import {
  statusStyling,
  toastStyling,
} from '~/components/common/Toast/Toast.styles';

export interface ToastProps {
  id: string;
  status?: 'success' | 'error';
  message: string;
  isActive: boolean;
}

const Toast = (props: ToastProps) => {
  const { closeToast } = useToast();
  const { id, status = 'success', message, isActive } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive || ref.current === null) {
      return;
    }

    ref.current.getAnimations().forEach((animation) => {
      animation.onfinish = () => closeToast(id);
    });
  }, [isActive, closeToast, id]);

  return (
    <div
      id={id}
      ref={ref}
      css={[statusStyling({ status, isActive }), toastStyling]}
    >
      <Text>{message}</Text>
    </div>
  );
};

export default Toast;
