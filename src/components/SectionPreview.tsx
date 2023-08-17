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
					<h3>{info.title}</h3>
					<h4 className='heading-subtitle'>
						Цель: <span>{info.goal}</span>
					</h4>
					<h4 className='heading-subtitle'>
						Накопили: <span>{info.target}</span>
					</h4>
				</div>
			</div>
		</div>
	)
}

export default SectionPreview
