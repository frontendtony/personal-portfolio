import React from 'react';
import { useTransition } from 'react-spring';
import styled from 'styled-components';
import Layout from '../components/layout';
import {
  projectDescriptions,
  projectNames
} from '../components/views/projects';
import ProjectImages from '../components/views/projects/images';
import NavigationButtons from '../components/views/projects/NavigationButtons';
import ProjectCount from '../components/views/projects/ProjectCount';
import SEO from '../utils/seo';

const StyledProjectsPage = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template: 'dark' 75vh 'light' auto / 100vw;
  position: relative;

  @media screen and (min-width: 1024px) {
    grid-template-rows: auto;
    grid-template-columns: 60vw 40vw;
    grid-template-areas: 'light dark';
  }

  > * {
    padding: 0 5vmin;

    @media screen and (min-width: 1024px) {
      padding: 0 10vmin;
    }
  }

  > .darker-section {
    grid-area: dark;
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    position: relative;
    padding-top: 20vmin;

    @media screen and (min-width: 1024px) {
      padding-top: 20vmin;

      .project-name {
        display: none;
      }
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

    .project-name {
      display: none;
    }

    @media screen and (min-width: 1024px) {
      padding-top: 25vmin;

      .project-name {
        display: -webkit-inline-box;
        position: relative;
        max-width: 30vw;
      }

      .project-image {
        right: -30vw;
        top: 25vmin;
        width: 80%;
      }
    }
  }
`;

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

  const Description = projectDescriptions[projectIndex];
  const Name = projectNames[projectIndex];

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
          {transitions.map(({ key, props }) => (
            <Name
              style={{ transform: props.textTransform }}
              key={key}
              className='project-name'
            />
          ))}
          <NavigationButtons
            next={next}
            previous={previous}
            currentIndex={projectIndex}
            total={projectNames.length - 1}
          />
          <ProjectCount
            current={projectIndex + 1}
            total={projectNames.length}
          />
        </div>
        <div className='project'>
          {transitions.map(({ item, key, props }) => {
            const Image = ProjectImages[item];
            return <Image className='project-image' style={props} key={key} />;
          })}
          <Name className='project-name' />
          <Description />
        </div>
      </StyledProjectsPage>
    </Layout>
  );
};

export default ProjectsPage;
