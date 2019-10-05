import React from 'react';
import { animated } from 'react-spring';
import Baya from './Baya';
import Flitrack from './Flitrack';
import FlitrackAdmin from './FlitrackAdmin';
import Magodo from './Magodo';
import OldPortfolio from './OldPortfolio';
import Pcsis from './Pcsis';

const AnimatedBaya = animated(Baya);
const AnimatedFlitrack = animated(Flitrack);
const AnimatedFlitrackAdmin = animated(FlitrackAdmin);
const AnimatedPcsis = animated(Pcsis);
const AnimatedMagodo = animated(Magodo);
const AnimatedOldPortfolio = animated(OldPortfolio);

export default [
  ({ ...rest }) => <AnimatedBaya {...rest} />,
  ({ ...rest }) => <AnimatedFlitrack {...rest} />,
  ({ ...rest }) => <AnimatedFlitrackAdmin {...rest} />,
  ({ ...rest }) => <AnimatedPcsis {...rest} />,
  ({ ...rest }) => <AnimatedMagodo {...rest} />,
  ({ ...rest }) => <AnimatedOldPortfolio {...rest} />
];
// export default [
//   ({ style }) => (
//     <animated.div style={style} className='project-image'>
//       <Baya />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={style} className='project-image'>
//       <Flitrack />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={style} className='project-image'>
//       <FlitrackAdmin />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={style} className='project-image'>
//       <Pcsis />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={style} className='project-image'>
//       <Magodo />
//     </animated.div>
//   ),
//   ({ style }) => (
//     <animated.div style={style} className='project-image'>
//       <OldPortfolio />
//     </animated.div>
//   )
// ];
