import { ReactComponent as DollarSvg } from '../../assets/icons/dollar-circle.svg'
import { SectionPreviewData } from '../../data'
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar'
import './SectionPreview.scss'

const SectionPreview = (props: SectionPreviewData) => {
	const { title, subtitle, info } = props

	return (
		<div className='section-preview'>
			<div className='section-preview__heading-wrapper'>
				<div>
					<h2 className='heading-secondary'>{title}</h2>
					<h3 className='heading-subtitle'>{subtitle}</h3>
				</div>
				<div className='section-preview__button-wrapper'>
					<button className='section-preview__button'>См. все</button>
				</div>
			</div>
			<div className='section-preview__info'>
				<div className='section-preview__diagram'>
					<CircleProgressBar
						value={77}
						icon={
							<>
								<DollarSvg width={54} height={54} />
							</>
						}
					/>
				</div>
				<div className='section-preview__info-content component-inner'>
					<h3 className='heading-tertiary'>{info.title}</h3>
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
