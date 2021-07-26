import './button.scss'
import React from 'react'

const Button = props => {
	const handleClick = props.onClick || null
	return (
		<button className='btn btn--default' onClick={handleClick}>
			{props.children}
		</button>
	)
}

export default Button
