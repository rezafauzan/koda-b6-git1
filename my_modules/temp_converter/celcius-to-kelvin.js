function celciusToKelvin(temp) {
	try {
		if (typeof temp === 'number') {
			return temp = temp + 273.15
		} else {
			const error = new Error(`${typeof temp} ${temp} bukan sebuah angka`)
			throw error
		}
	} catch (error) {
		console.log(error)
	}
}

export {
	celciusToKelvin
}