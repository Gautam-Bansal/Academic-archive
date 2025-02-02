import { memo, SVGProps } from 'react';

const RectangleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2547 938' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.5}
      d='M480.381 8.87117C1261.11 120.345 2228.81 8.87117 2228.81 8.87117C2228.81 8.87117 2865.05 1073.91 2228.81 918.119C1592.58 762.324 963.629 963.782 480.381 918.119C-2.86594 872.455 -300.342 -102.602 480.381 8.87117Z'
      fill='#E7ECFF'
    />
  </svg>
);
const Memo = memo(RectangleIcon);
export { Memo as RectangleIcon };
