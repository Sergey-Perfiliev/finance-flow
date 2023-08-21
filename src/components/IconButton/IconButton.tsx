import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

const IconButton = ({ icon, ...rest }: Props) => {
	return (
		<button role='button' className='icon-wrapper' {...rest}>
			{icon}
		</button>
	)
}

export default IconButton
