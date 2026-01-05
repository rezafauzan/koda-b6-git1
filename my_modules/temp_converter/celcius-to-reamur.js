function celciusToReamur(temp) {
    try {
        if (typeof temp === 'number') {
            return temp = temp * 4 / 5
        } else {
            const error = new Error(`${typeof temp} ${temp} bukan sebuah angka`)
            throw error
        }
    } catch (error) {
        console.log(error+"\n")
        // celciusToReamur()
    }
}

export {
    celciusToReamur
}