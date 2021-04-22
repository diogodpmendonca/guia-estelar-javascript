let temperature = '50  °   f'

function convertTemperature(temperature){
    let value = valueTemperature(temperature) 
    let scale = temperature.slice(-1)
    
    if(scale == 'C' || scale == 'c'){
        let fahrenheit = value * 9/5 + 32
        console.log(fahrenheit.toFixed(1) + '°F')
    }else if(scale ==  'F' || scale == 'f'){
        let celsius = (value - 32) * 5/9
        console.log(celsius.toFixed(1) + '°C')
    }else{
        console.log('Formato de temperatura incorreto')
    }
}

function valueTemperature(temperature){
    let value
    if(temperature.search('°') > -1){
        value = temperature.slice(0,temperature.search('°'))
    }else{
        value =  temperature.slice(0,temperature.search(temperature.slice(-1)))
    }
    return value
}
convertTemperature(temperature)