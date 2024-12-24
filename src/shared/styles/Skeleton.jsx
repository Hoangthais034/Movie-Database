import styled from 'styled-components'

const Skeleton = styled.div`
  position: relative;
  display: block !important;
  width: 100%;

  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.1));
    background-size: 200% 100%;
    animation: loading 3s infinite;
  }
  &.skeleton-rating{
    width: 80px;
  }
  &.skeleton-text-1line{
    height: 15px;
  }
  &.skeleton-mutliline{
    height: 45px;
  }
  &.skeleton-image-posters{
    aspect-ratio: 3/4;

  }
  &.skeleton-image{
    aspect-ratio: 16/9;
  }
  &.skeleton-title{
    height: 55px;
  }
  &.skeleton-tag{
    height: 18px;
    width: 48px;
  }
`;

export default Skeleton;
