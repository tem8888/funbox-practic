import React from 'react'
import {render} from 'react-dom'
import Pack from './components/Pack.jsx'

class Content extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			data: [
				{ topping: 'с фуа-гра', portion: '10', gift: '1 мышь в подарок', weight: '0,2'},
				{ topping: 'с рыбой', portion: '40', gift: '2 мыши в подарок',  descr: 'Головы щучьи с чесноком, да свежайшая сёмгушка.', weight: '2'},
				{ topping: 'с курой', portion: '100', gift: '5 мышей в подарок',  descr: 'Печалька, с курой закончился.', weight: '5'}
			],
			isActiveToggle1: false,
			isActiveToggle2: false,
			isActiveToggle3: false,
			currentTime: (new Date()).toLocaleString(),
		}
		this.addClassName = this.addClassName.bind(this)
	}

	addClassName = (status) => { 
		let currentState = this.state[status]
		this.setState({ [status]: !currentState})
	}

	render () {
		return (
			<div className='container'>
				<div className='header'>
					<span class='head-text'>Ты сегодня покормил кота?</span>
				</div>

				<Pack topping={this.state.data[0].topping} portion={this.state.data[0].portion} gift={this.state.data[0].gift} weight={this.state.data[0].weight}
						index={0} isActive={this.state['isActiveToggle1']} onclick={() => this.addClassName('isActiveToggle1')} toggler='#isActiveToggle1'>
					Чего сидишь? Порадуй котэ, <a href='#' onClick={() => this.addClassName('isActiveToggle1')}>купи</a>.
				</Pack>

				<Pack topping={this.state.data[1].topping} portion={this.state.data[1].portion} gift={this.state.data[1].gift} weight={this.state.data[1].weight}
						index={1} isActive={this.state['isActiveToggle2']} onclick={() => this.addClassName('isActiveToggle2')} toggler='#isActiveToggle2'>
						<span>Головы щучьи с чесноком, да свежайшая сёмгушка.</span>
				</Pack>

				<Pack topping={this.state.data[2].topping} portion={this.state.data[2].portion} gift={this.state.data[2].gift} weight={this.state.data[2].weight} 
						disableClass='true'	index={2} isActive={this.state.isActive == 2} onclick={() => this.addClassName('isActiveToggle3')} toggler='#isActiveToggle2'>
					<span>Печалька, с курой закончился.</span>
				</Pack>
			</div>
		)
	}
}

export default Content