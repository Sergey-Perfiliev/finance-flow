const FlowInfo = () => {
	return (
		<div className='flow-info'>
			<ul className='flow-content'>
				<li className='flow-content__item'>
					<h2 className='heading-secondary'>54703 ₽</h2>
					<h4 className='heading-subtitle'>Доход в месяц</h4>
				</li>
				<li className='flow-content__item'>
					<h2 className='heading-secondary'>43256 ₽</h2>
					<h4 className='heading-subtitle'>Расход в месяц</h4>
				</li>
			</ul>
			<div className='diagram'>
				<progress id='file' max='100' value='70' />
			</div>
		</div>
	)
}

export default FlowInfo
