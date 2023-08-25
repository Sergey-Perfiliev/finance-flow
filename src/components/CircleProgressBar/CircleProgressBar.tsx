import { ReactElement } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type Props = {
	// width?: number
	// height?: number
	value: number
	icon: ReactElement<any, any>
}

const CircleProgressBar = ({
	// width = 54,
	// height = 54,
	value = 0,
	icon,
}: Props) => {
	return (
		<CircularProgressbarWithChildren value={value}>
			{icon}
		</CircularProgressbarWithChildren>
	)
}

export default CircleProgressBar
