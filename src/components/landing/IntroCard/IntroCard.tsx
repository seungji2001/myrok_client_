/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { introImg1, introImg2, introImg3 } from '~/assets/png';
import { Theme } from '~/styles/Theme';
import { cardUp } from '~/styles/animation';

const container = css`
  width: 700px;
  height: 500px;
`;

const cardStyling = (top: number, left: number) => css`
  position: relative;
  top: ${top}px;
  left: ${left}px;
  width: 640px;
  height: 380px;

  background-color: ${Theme.color.gray250};
  object-fit: cover;
  box-shadow: 0 12px 20px ${Theme.color.gray200};

  &:hover,
  &:focus {
    animation: ${cardUp} 0.4s ease-in-out both;
  }
`;

const IntroCard = () => {
  return (
    <div css={container}>
      <img css={cardStyling(0, 0)} src={introImg3} alt="인트로1" />
      <img css={cardStyling(-280, -50)} src={introImg2} alt="인트로2" />
      <img css={cardStyling(-560, -100)} src={introImg1} alt="인트로3" />
    </div>
  );
};

export default IntroCard;
