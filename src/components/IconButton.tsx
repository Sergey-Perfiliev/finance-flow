type Props = {
	icon: JSX.Element
	text: string
}

const IconButton = ({ icon, text }: Props) => {
	return (
		<button className='primary-button'>
			<span className='icon'>{icon}</span>
			<h3 className='heading-tertiary text'>{text}</h3>
		</button>
	)
}

export default IconButton
