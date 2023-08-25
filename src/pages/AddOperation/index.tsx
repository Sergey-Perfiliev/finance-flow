import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import Button from '../../components/Button/Button'
import IconButton from '../../components/IconButton/IconButton'
import Switch from '../../components/Switch/Switch'
import './AddOperation.scss'

import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { ReactComponent as CategoryItem } from '../../assets/icons/category.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

type FinType = 'income' | 'consumption'

const AddOperationForm = () => {
	const [amount, setAmount] = useState<string | null>(null)
	const [finType, setFinType] = useState<FinType>('consumption')
	// const [category, setCategory] = useState<string | null>(null)
	const [date, setDate] = useState<Date | null>(new Date())
	const [isNote, setIsNote] = useState<boolean>(false)

	const navigate = useNavigate()

	// amount handlers
	const setAmountHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(e.target.value.replace(/[^0-9]/, ''))
	}

	const clearAmountHandler = () => {
		setAmount(null)
	}

	const setCategoryHandler = () => {
		navigate('/category')
	}

	const handleSubmit = () => {
		console.log(amount, finType, date, isNote)
		navigate('/')
	}

	return (
		<form className='add-operation__form' role='form'>
			<section className='add-operation__form-section add-operation__form-section--main'>
				<div className='add-operation__form-item'>
					<h2 className='heading-secondary'>Сумма</h2>
					<div className='add-operation__amount'>
						<input
							value={amount ?? ''}
							onChange={setAmountHandler}
							type='number'
							placeholder={`${finType === 'consumption' ? '-' : '+'}1000` + '₽'}
							className='add-operation__amount-input'
						/>
						<button
							className='add-operation__amount-button'
							type='button'
							onClick={clearAmountHandler}>
							<CloseIcon color='transparent' />
						</button>
					</div>
					<div className='buttons-wrapper fin-balance'>
						<Button
							onClick={() => setFinType('income')}
							text='Доход'
							type='button'
							btnType={finType === 'income' ? 'primary-reverse' : 'secondary'}
						/>
						<Button
							onClick={() => setFinType('consumption')}
							text='Расход'
							type='button'
							btnType={
								finType === 'consumption' ? 'primary-reverse' : 'secondary'
							}
						/>
					</div>
				</div>
				<div className='add-operation__form-item'>
					<h2 className='heading-secondary'>Назначение</h2>
					<div
						className='category-button'
						role='button'
						onClick={setCategoryHandler}>
						<CategoryItem />
						<div className='category-button__content'>
							<h3>Категория</h3>
							<h4 className='heading-subtitle'>Выберите категорию</h4>
						</div>
					</div>
				</div>
			</section>
			<section className='add-operation__form-section add-operation__form-section--secondary'>
				<h4 className='heading-subtitle'>Дополнительно</h4>
				<div className='add-operation__additional-content'>
					<label className='item'>
						<h5 className='heading-subcategory'>Дата</h5>
						<DatePicker selected={date} onChange={(date) => setDate(date)} />
					</label>
					<label className='item'>
						<h5 className='heading-subcategory'>Заметка</h5>
						<Switch value={isNote} onChange={setIsNote} />
					</label>
					{isNote && <textarea />}
				</div>
			</section>
			<footer className='footer add-operation__footer'>
				<Button
					text='Добавить'
					type='button'
					onClick={handleSubmit}
					btnType='primary-reverse'
					icon={<div className='icon-wrapper_inner--small'>+</div>}
				/>
			</footer>
		</form>
	)
}

const AddOperation = () => {
	const navigate = useNavigate()

	return (
		<div className='add-operation-page'>
			<header className='add-operation__header'>
				<div>
					<IconButton onClick={() => navigate('/')} icon={<BackIcon />} />
				</div>
				<h3 className='heading-tertiary'>Добавить операцию</h3>
				<div></div>
			</header>
			<AddOperationForm />
		</div>
	)
}

export default AddOperation
