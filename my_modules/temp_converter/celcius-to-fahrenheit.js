function celciusToFahrenheit(temp) {
	try {
		if (typeof temp === 'number') {
			return temp = temp * 9 / 5 + 32
		} else {
			const error = new Error(`${typeof temp} ${temp} bukan sebuah angka`)
			throw error
		}
	} catch (error) {
		console.log(error)
	}
}

export {
	celciusToFahrenheit
}