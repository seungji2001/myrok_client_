import { css } from '@emotion/react';
import { ToastProps } from '~/components/common/Toast/Toast';
import { fadeInUp, fadeOut } from '~/styles/animation';
import { Theme } from '~/styles/Theme';

export const toastStyling = css`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 50px;
  padding: 16px 16px;

  border-radius: 4px;
  white-space: pre-line;
  line-height: 1.5;

  color: ${Theme.color.white};
`;

export const statusStyling = ({
  status,
  isActive,
}: Pick<ToastProps, 'status' | 'isActive'>) => {
  if (status === 'success')
    return css({
      animation: isActive
        ? `${fadeInUp} 0.4s ease-in-out both`
        : `${fadeOut} 0.4s ease-in-out both`,
      backgroundColor: `${Theme.color.gray900}`,
    });

  if (status === 'error')
    return css({
      animation: isActive
        ? `${fadeInUp} 0.4s ease-in-out both`
        : `${fadeOut} 0.4s ease-in-out both`,
      backgroundColor: `${Theme.color.red}`,
    });
};
