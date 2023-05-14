import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DepositIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#161514"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m14 6 6.07 6.07L14 18.14M19 12.07H3"
    />
  </Svg>
);
export default DepositIcon;
