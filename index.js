import {celciusToReamur} from "./my_modules/temp_converter/celcius-to-reamur.js"
import {celciusToKelvin} from "./my_modules/temp_converter/celcius-to-kelvin.js"
import {celciusToFahrenheit} from "./my_modules/temp_converter/celcius-to-fahrenheit.js"

console.log("Masukan angka suhu dalam celcius :")
process.stdin.on("data",
    input => {
        try {
            let temp = parseInt(input.toString().trim())
            if (typeof temp === 'number') {     
                console.log(`Hasil konversi suhu ${temp}°Celcius ke "Reamur" adalah ${celciusToReamur(temp)}°Reamur`)
                console.log(`Hasil konversi suhu ${temp}°Celcius ke "Kelvin" adalah ${celciusToKelvin(temp)}°Kelvin`)
                console.log(`Hasil konversi suhu ${temp}°Celcius ke "Fahrenheit" adalah ${celciusToFahrenheit(temp)}°Fahrenheit`)
            }else{
                let error = new Error(`${typeof temp} ${temp} bukanlah sebuah angka`)
            }
        } catch (error) {
            console.log(error)
        }
    }
)