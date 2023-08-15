import { SectionPreviewData } from '../data'
import CircleProgressBar from './CircleProgressBar'
import './SectionPreview.scss'

const SectionPreview = (props: SectionPreviewData) => {
	const { title, subtitle, info } = props

	return (
		<div className='section-preview'>
			<div className='section-preview_heading-wrapper'>
				<div>
					<h2 className='heading-secondary'>{title}</h2>
					<h3 className='heading-subtitle'>{subtitle}</h3>
				</div>
				<div className='section-preview_button-wrapper'>
					<button className='section-preview_button'>См. все</button>
				</div>
			</div>
			<div className='section-preview_info'>
				<div className='section-preview_diagram'>
					<CircleProgressBar />
				</div>
				<div className='section-preview_info-content'>
					<h4>{info.title}</h4>
					<h3 className='heading-tertiary'>
						Цель: <span>{info.goal}</span>
					</h3>
					<h3 className='heading-tertiary'>
						Накопили: <span>{info.target}</span>
					</h3>
				</div>
			</div>
		</div>
	)
}

export default SectionPreview
