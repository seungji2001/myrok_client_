import { keyframes } from '@emotion/react';

export const fadeInUp = keyframes`
  from {
      opacity: 0;
      transform: translate3D(0, 100%, 0);
  }
  to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
  }`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const skeletonAnimation = keyframes`
0% {
   background-position: 0% 50%;
 }
 50% {
   background-position: 100% 50%;
 }
 100% {
   background-position: 0% 50%;
 }
`;

export const slideLeft = keyframes`
from {
  transform: translateX(140%);
}
to {
  transform: translateX(0);
}  
`;

export const slideRight = keyframes`
from {
  transform: translateX(0);
}
to {
  transform: translateX(140%);
}  
`;
