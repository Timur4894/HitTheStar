import * as React from "react"
import Svg, { SvgProps, Rect } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Rect fill={props.color} width={80} height={80} x={336} y={336} rx={8} ry={8} />
    <Rect fill={props.color} width={64} height={64} x={272} y={272} rx={8} ry={8} />
    <Rect fill={props.color} width={64} height={64} x={416} y={416} rx={8} ry={8} />
    <Rect fill={props.color} width={48} height={48} x={432} y={272} rx={8} ry={8} />
    <Rect fill={props.color} width={48} height={48} x={272} y={432} rx={8} ry={8} />
    <Rect fill={props.color} width={80} height={80} x={336} y={96} rx={8} ry={8} />
    <Rect
      fill={props.color}
      width={176}
      height={176}
      x={288}
      y={48}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={16}
      ry={16}
    />
    <Rect fill={props.color} width={80} height={80} x={96} y={96} rx={8} ry={8} />
    <Rect
      width={176}
      height={176}
      x={48}
      y={48}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={16}
      ry={16}
    />
    <Rect fill={props.color} width={80} height={80} x={96} y={336} rx={8} ry={8} />
    <Rect
      width={176}
      height={176}
      x={48}
      y={288}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={16}
      ry={16}
    />
  </Svg>
)
export default SvgComponent
