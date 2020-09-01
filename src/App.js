import React, { useState, useEffect } from 'react'
import Block from './components/Block'
// загружаем данные о товарах, так будет удобнее добавлять новые
// файл также передает информацию, доступен ли товар для выбора
import Data from './data.json'    

function App() {
	
    // Создаем хук состояния с дефолтными значениями
    const [status, setStatus] = useState([
    		{ id: 0, picked: false},
            { id: 1, picked: false},
            { id: 2, picked: false}])

    return (
        <div className='container'>
			<div className='header'>
				<span className='head-text'>Ты сегодня покормил кота?</span>
			</div>
			{status.map( item => (
				<Block 
					key={item.id}
					id={item.id}
					picked={item.picked}
					disabled={Boolean(Number(Data[item.id].isDisabled))}
					info={Data[item.id]}
					status={status} 
					setStatus={setStatus}
				/>
			))}
		</div>
    )
}

export default App