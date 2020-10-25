import React from 'react'
import './App.scss'
import dog from './assets/images/dog.jpg'
import dogAudio from './assets/audio/dog.mp3'


class App extends React.Component {

	componentDidMount() {
		this.showImage(600, this.hideImage, this.getRandomImageIndex, this.showPicture)
	}

	showImage = (time, visibleImage, randomizer, showPicture) => {
		window.setInterval(() => {
			visibleImage()
			let index = randomizer()
			showPicture(index)
		}, time)
	}

	getRandomImageIndex = () => Math.floor(Math.random() * 9)

	hideImage = () => {
		let images = this.state.images.map(item => item.className === 'photo show' ? { ...item, className: 'photo' } : { ...item })
		this.setState({
			images
		})
	}

	showPicture = (index) => {
		let images = this.state.images.map(item => item.id === index ? { ...item, className: 'photo show' } : { ...item })
		this.setState({
			images
		})
	}

	onImageClick = () => {
		let audio = document.querySelector('audio')
		audio.currentTime = 0
		audio.play()
		this.setState((prev) => ({
			...prev,
			counter: this.state.counter + 1
		}))
	}

	state = {
		images: [
			{ id: 0, className: 'photo' },
			{ id: 1, className: 'photo' },
			{ id: 2, className: 'photo' },
			{ id: 3, className: 'photo' },
			{ id: 4, className: 'photo' },
			{ id: 5, className: 'photo' },
			{ id: 6, className: 'photo' },
			{ id: 7, className: 'photo' },
			{ id: 8, className: 'photo' }
		],
		counter: 0
	}

	render() {
		return (
			<div className="App">
				<h1>Simple dog game on React</h1>
				<audio src={dogAudio}>
					<source/>
				</audio>
				<div className="wrapper">
					{this.state.images.map(item =>
						<div className="item" key={item.id}>
							<img src={dog}
									 alt="#"
									 id={item.id}
									 className={item.className}
									 onClick={this.onImageClick}
							/>
						</div>)
					}
				</div>
				<h2 className="counter">
					{this.state.counter}
				</h2>
			</div>
		)
	}
}

export default App
