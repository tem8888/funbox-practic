import React, {useEffect} from 'react'

const Block = ({id, info, descrOffer, picked, disabled, status, setStatus}) => {
	
	// Функция подбора правильного склонения для названий товаров, подарков и тд в зависимости от их количества
	const decl = (n, fras) => {  
		return fras[n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
	}

	// Функция смены статуса товара по клику (выбран или не выбран)
	const pickedHandler = () => {
		setStatus(status.map( item => {    
			// проходим каждый элемент товара содержайшися в State
			// сравниваем ID каждого элемента в State с тем ID элемента, на который нажали.
			// Дополнительно проверяем, что товар должен быть доступен для выбора
			if (item.id === id && !disabled){   
				return {							 
					...item, picked: !item.picked   // как только нашли этот элемент, возвращаем в State его инвертированное значение
				}
			}
			return item    // в случае неуспеха, возвращаем исходное значение
		}))
	}

	return(
		<div className="pack-container">
			<div className={`pack ${disabled ? 'disabled' : picked ? 'picked' : ''}`} onClick={pickedHandler}>  
				<div className='info-pack'>
					<p>Сказочное заморское явство</p>
					<h1>Нямушка</h1>
					<h2>{info.topping}</h2>
					<p><b>{info.portion}</b> порций<br/><b>{info.gift}</b> {decl(parseInt(info.gift), ['мышь','мыши','мышей'])} в подарок</p>
				</div>
				<div className='weight'><span>{info.weight}</span><span className='kg'>кг</span></div>
			</div>
			{  // Блок описания под карточкой товара в зависимости от его состояния (недоступен, выбран или по дефолту)
				disabled ? <div className='descr'>{info.descrDisabled}</div> : 
				picked ? <div className='descr'>{info.descrPicked}</div> : 
				<div className='descr'>Чего сидишь? Порадуй котэ, <a href="#" onClick={pickedHandler}> купи.</a></div>
			}
		</div>
	)
}

export default Block