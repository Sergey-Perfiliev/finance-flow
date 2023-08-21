import './Button.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icon?: JSX.Element
	text: string
	btnType?: 'primary' | 'primary-reverse' | 'secondary'
}

const Button = ({ icon, text, btnType, ...props }: Props) => {
	const buttonClass = `button${btnType ? ' button--' + btnType : ''}`

	return (
		<button className={buttonClass} {...props}>
			{icon && <span className='icon'>{icon}</span>}
			<h3 className='heading-tertiary text'>{text}</h3>
		</button>
	)
}

export default Button
