import React from 'react';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import Layout from '../components/layout';
import ProjectImages from '../components/views/projects/images';
import SEO from '../utils/seo';

const StyledProjectsPage = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template: 'image' 75vh 'description' auto / 100vw;
  position: relative;

  > * {
    padding: 0 5vmin;

    @media screen and (min-width: 829px) {
      padding: 0 10vmin;
    }
  }

  > .darker-section {
    grid-area: image;
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    position: relative;
    padding-top: 20vmin;

    @media screen and (min-width: 829px) {
      padding-top: 20vmin;
    }

    > .nav-buttons {
      position: absolute;
      left: 5vw;
      bottom: 190px;

      > .nav-button {
        background-color: ${({ theme }) => theme.bg.primary};
        color: ${({ theme }) => theme.text.primary};
        border: 1px solid ${({ theme }) => theme.text.primary};
        padding: 12px;

        :hover {
          background-color: ${({ theme }) => theme.text.primary};
          color: ${({ theme }) => theme.bg.primary};
        }

        :first-child {
          margin-right: 20px;
        }
      }
    }

    .project-number {
      position: absolute;
      right: 5vw;
      bottom: 140px;
      color: ${({ theme }) => theme.text.primary};
      font-size: 60px;
      font-weight: bold;
      -webkit-text-fill-color: ${({ theme }) => theme.bg.primary};
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${({ theme }) => theme.text.primary};
      z-index: 1;
      font-variant-numeric: tabular-nums;
    }
  }

  > .project {
    background-color: ${({ theme }) => theme.bg.projectDescription};
    color: ${({ theme }) => theme.text.primary};
    position: relative;

    .project-image {
      position: absolute !important;
      top: -170px;
      width: 90%;
    }

    .project-description {
      position: absolute !important;
      top: 120px;
      padding-bottom: 5vw;
    }
  }

  .project-name {
    font-size: 50px;
    margin-bottom: 40px;
    font-weight: normal;
    position: absolute;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-inline-box;

    @media screen and (max-height: 735px) {
      -webkit-line-clamp: 2;
    }

    @media screen and (max-height: 570px) {
      -webkit-line-clamp: 1;
    }
  }
`;

const projectNames = [
  ({ style }) => (
    <animated.h1 className='project-name' style={style}>
      Baya
    </animated.h1>
  ),
  ({ style }) => (
    <animated.h1 className='project-name' style={style}>
      Flitrack
    </animated.h1>
  ),
  ({ style }) => (
    <animated.h1 className='project-name' style={style}>
      Flitrack Admin
    </animated.h1>
  ),
  ({ style }) => (
    <animated.h1 className='project-name' style={style}>
      PCSIS
    </animated.h1>
  ),
  ({ style }) => (
    <animated.h1 className='project-name' style={style}>
      Magodo Cultural Day, Lorem ipsum dolor sit amet.
    </animated.h1>
  ),
  ({ style }) => (
    <animated.h1 className='project-name' style={style}>
      Old Portfolio
    </animated.h1>
  )
];

const projectDescriptions = [
  ({ style }) => (
    <animated.p className='project-description' style={style}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </animated.p>
  ),
  ({ style }) => (
    <animated.p className='project-description' style={style}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </animated.p>
  ),
  ({ style }) => (
    <animated.p className='project-description' style={style}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </animated.p>
  ),
  ({ style }) => (
    <animated.p className='project-description' style={style}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </animated.p>
  ),
  ({ style }) => (
    <animated.p className='project-description' style={style}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </animated.p>
  ),
  ({ style }) => (
    <animated.p className='project-description' style={style}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illo beatae
      quia ad aliquam dolorum, dolores maiores molestiae vel nulla voluptatibus,
      vitae, rerum commodi assumenda! Odio dolorum quod quisquam ad.
    </animated.p>
  )
];

const ProjectsPage = ({ location }) => {
  const [projectIndex, setProjectIndex] = React.useState(0);
  const [direction, setDirection] = React.useState('left');

  const transitions = useTransition(projectIndex, null, {
    from: {
      opacity: 0,
      transform: `translateX(${direction === 'left' ? '-' : ''}200vw) scale(${
        direction === 'left' ? '0.1' : '2'
      })`,
      textTransform: `translateX(${
        direction === 'right' ? '-' : ''
      }200vw) scale(0.5)`
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0) scale(1)',
      textTransform: 'translateX(0) scale(1)'
    },
    leave: {
      opacity: 0,
      transform: `translateX(${direction === 'left' ? '' : '-'}200vw) scale(${
        direction === 'left' ? '2' : '0.1'
      })`,
      textTransform: `translateX(${
        direction === 'right' ? '' : '-'
      }200vw) scale(0.5)`
    }
  });

  const previous = () => {
    setDirection('left');
    setProjectIndex(projectIndex - 1);
  };
  const next = () => {
    setDirection('right');
    setProjectIndex(projectIndex + 1);
  };

  return (
    <Layout location={location.pathname}>
      <SEO title='Projects' />
      <StyledProjectsPage>
        <div className='darker-section'>
          {transitions.map(({ item, key, props }) => {
            const Text = projectNames[item];
            return (
              <Text style={{ transform: props.textTransform }} key={key} />
            );
          })}
          <div className='nav-buttons'>
            <button
              className='nav-button'
              disabled={projectIndex === 0}
              onClick={previous}
            >
              Prev
            </button>
            <button
              className='nav-button'
              disabled={projectIndex === projectNames.length - 1}
              onClick={next}
            >
              Next
            </button>
          </div>
          <span className='project-number'>
            {(projectIndex + 1).toString().padStart(3, '0')}
          </span>
        </div>
        <div className='project'>
          {transitions.map(({ item, key, props }) => {
            const Image = ProjectImages[item];
            return <Image className='project-image' style={props} key={key} />;
          })}

          {transitions.map(({ item, key, props }) => {
            const Description = projectDescriptions[item];
            return (
              <Description style={{ opacity: props.opacity }} key={key}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                illo beatae quia ad aliquam dolorum, dolores maiores molestiae
                vel nulla voluptatibus, vitae, rerum commodi assumenda! Odio
                dolorum quod quisquam ad.
              </Description>
            );
          })}
        </div>
      </StyledProjectsPage>
    </Layout>
  );
};

export default ProjectsPage;
