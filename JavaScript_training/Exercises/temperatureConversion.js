function temperatureConversion(temperature){
    let [degree,unity] = [temperature.slice(0,-1),temperature.slice(-1)];

    unity = unity.toUpperCase();
    let convertedTemp;
    
    switch (unity) {
        case 'C':
            convertedTemp = (Number(degree)*9/5 + 32).toFixed(2);
            return `ConvertedTemp = ${convertedTemp}F`;
            break;
    
        case 'F':
            convertedTemp = ((Number(degree) -32) *5/9).toFixed(2);
            return `ConvertedTemp = ${convertedTemp}C`;
            break;
        default:
            throw new Error('Unity not identified, please input fahrenheit or celsius')
    }
}
console.log(temperatureConversion('10G'))
