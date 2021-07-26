import './stopWatch.scss'
import React, { useEffect, useState } from 'react'
import Button from '../button/button'
import { interval } from 'rxjs'

const inc = value => ++value
const plusZero = num => (num < 10 ? '0' + num : num)
const getSeconds = second => Math.floor(second)
const getMinutes = second => Math.floor(second / 60)
const getHours = second => Math.floor(second / 3600)

const fromSecondsToTime = seconds => {
	const funcs = [getHours, getMinutes, getSeconds]
	return funcs.map(func => plusZero(func(seconds) % 60)).join(':')
}

const StopWatch = () => {
	const observable = interval(1000)
	const [time, setTime] = useState(0)
	const [timeState, setTimerState] = useState(false)
	const [click, setClick] = useState({
		prev: null,
		current: null,
	})

	const handleReapeat = () => {
		handleStop()
		handleStart()
	}

	const handleStop = () => {
		setTimerState(false)
		setTime(0)
	}

	const handleStart = () => {
		setTimerState(true)
	}

	const handleWait = () => {
		const delayOnWait = 300
		const prev = click.current
		const current = Date.now()
		setClick({
			prev,
			current,
		})
		if (current - prev < delayOnWait) {
			setTimerState(false)
		}
	}

	useEffect(() => {
		const timer = observable.subscribe(() => {
			timeState && setTime(inc)
		})
		return () => {
			timer.unsubscribe()
		}
	}, [observable, timeState])

	return (
		<div className='stop-watch'>
			<div className='stop-watch__time-wrapper'>
				<p className='stop-watch__time'>{fromSecondsToTime(time)}</p>
			</div>
			<div className='stop-watch__controllers'>
				<Button onClick={timeState ? handleStop : handleStart}>
					{timeState ? 'Stop' : 'Start'}
				</Button>
				<Button onClick={handleWait}>Wait</Button>
				<Button onClick={handleReapeat}>Repeat</Button>
			</div>
		</div>
	)
}

export default StopWatch
