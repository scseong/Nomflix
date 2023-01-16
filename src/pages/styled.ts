import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
`;

export const Loader = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  font-size: 36px;
  width: 60%;
`;

export const Slider = styled.div`
  position: relative;
`;

export const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

export const Box = styled(motion.div)<{ bgPhoto: string }>`
  height: 200px;
  background-color: white;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;
