import { useNavigate } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'
import { ReactComponent as HistoryIcon } from '../../assets/icons/calendar-search.svg'
import { ReactComponent as AnalyticsIcon } from '../../assets/icons/chart-square.svg'
import { ReactComponent as SettingIcon } from '../../assets/icons/settings.svg'
import Button from '../../components/Button/Button'
import SectionPreview from '../../components/SectionPreview/SectionPreview'

import { sectionPreviewData } from '../../data'

import IconButton from '../../components/IconButton/IconButton'
import './Home.scss'

const Home = () => {
	const navigate = useNavigate()

	const addOperation = () => {
		navigate('/add-operation')
	}

	return (
		<div className='home-page'>
			<div className='page-inner'>
				<header className='home-page_header'>
					<h4 className='heading-subtitle home-page_subtitle'>Профиль: Счёт</h4>
					<div className='heading-wrapper'>
						<h1 className='heading-primary'>Финансы</h1>
						<IconButton icon={<SettingIcon />} />
					</div>
				</header>
				<main className='home-page_content'>
					<div className='diagram-content'>
						<ul className='diagram-content_text-wrapper'>
							<li className='diagram-content_text-wrapper_item'>
								<h2 className='heading-secondary heading-secondary_list-title'>
									54703 ₽
								</h2>
								<h4 className='heading-subtitle'>Доход в месяц</h4>
							</li>
							<li className='diagram-content_text-wrapper_item'>
								<h2 className='heading-secondary heading-secondary_list-title'>
									43256 ₽
								</h2>
								<h4 className='heading-subtitle'>Расход в месяц</h4>
							</li>
						</ul>
						<div className='diagram'>
							<progress id='file' max='100' value='70' />
						</div>
					</div>
					<div className='buttons-wrapper'>
						<Button icon={<AnalyticsIcon />} text='Аналитика' />
						<Button icon={<HistoryIcon />} text='История' />
					</div>
					<div className='section-preview_wrapper'>
						{sectionPreviewData.map((item) => (
							<SectionPreview key={item.title} {...item} />
						))}
					</div>
				</main>
				<footer className='home-page_footer'>
					<div>
						<h4 className='heading-subtitle'>Остаток</h4>
						<h2 className='heading-secondary'>1325 ₽</h2>
					</div>
					<div
						className='icon-wrapper icon-wrapper--primary'
						role='button'
						onClick={addOperation}>
						<AddIcon />
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Home
