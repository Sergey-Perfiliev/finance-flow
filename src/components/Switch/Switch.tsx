import './Switch.scss'

type Props = {
	value: boolean
	onChange: React.Dispatch<React.SetStateAction<boolean>>
}

const Switch = ({ value, onChange }: Props) => {
	return (
		<label className='switch'>
			<input
				type='checkbox'
				checked={value}
				onChange={() => onChange((value) => !value)}
				className='switch-input'
			/>
			<span className='slider round'></span>
		</label>
	)
}

export default Switch
