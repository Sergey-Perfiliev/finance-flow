import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { ReactComponent as DollarSvg } from '../assets/icons/dollar-circle.svg'

type Props = {
	width?: number
	height?: number

	// TODO: refactor Props Icon to JSX.Element type or similar
	// Icon: JSX.Element
}

const CircleProgressBar = ({ width = 54, height = 54 }: Props) => {
	return (
		<CircularProgressbarWithChildren value={66}>
			<DollarSvg width={width} height={height} />
		</CircularProgressbarWithChildren>
	)
}

export default CircleProgressBar
