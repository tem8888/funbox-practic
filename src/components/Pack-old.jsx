import React from 'react'

const Pack = (props) => {
	return (
		<div className="pack-container">
			<div className={props.disableClass ? 'pack disabled' : props.isActive ? 'pack picked' : 'pack '} onClick={props.onclick}>
				<div className='info-pack'>
					<p>Сказочное заморское явство</p>
					<h1>Нямушка</h1>
					<h2>{props.topping}</h2>
					<p><b>{props.portion}</b> порций<br/>{props.gift}</p>
				</div>
				<div className='weight'><span>{props.weight}</span><span className='kg'>кг</span></div>
			</div>
			<div className='descr'>{props.children}</div>
		</div>
		)
	}

export default Pack;