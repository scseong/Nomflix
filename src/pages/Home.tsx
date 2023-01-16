import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../api';
import { IGetMovieResult } from '../db';
import {
  Wrapper,
  Loader,
  Banner,
  Overview,
  Title,
  Slider,
  Row,
  Box,
  Info,
} from './styled';
import { makeImagePath } from '../utils';
import { AnimatePresence } from 'framer-motion';

const rowVariants = {
  hidden: { x: window.outerWidth },
  visible: { x: 0 },
  exit: { x: -window.outerWidth },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    y: -40,
    scale: 1.3,
    transition: { delay: 0.4, duration: 0.2, type: 'tween' },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.2, type: 'tween' },
  },
};

const OFFSET = 6;

const Home = () => {
  const { data, isLoading } = useQuery<IGetMovieResult>(
    ['movies', 'nowPlaying'],
    getMovies,
  );
  const [leaving, setLeaving] = useState(false);
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length;
      const maxIndex = Math.floor(totalMovies / OFFSET) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading..</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || '')}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
              >
                {data?.results
                  .slice(1)
                  .slice(OFFSET * index, OFFSET * index + OFFSET)
                  .map((movie) => (
                    <Box
                      variants={boxVariants}
                      whileHover="hover"
                      initial="normal"
                      key={movie.id}
                      transition={{ type: 'tween' }}
                      bgPhoto={makeImagePath(movie.backdrop_path, 'w500')}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
