function convert(){
    const conversionType=document.getElementById("conversionType").value;
    const inputValue=parseFloat(document.getElementById("inputValue").value);

    if(isNaN(inputValue)){
        alert("Please enter a valid number");
        return;
    }
    let result;

    switch(conversionType){
        case "length":
            result={
                Meters:inputValue,
                Feet:inputValue*3.28084,
                Inches:inputValue*39.3701
            };
            break;

            case "mass":
                result={
                    Kilograms:inputValue,
                    Pounds:inputValue*2.20462,
                    Ounces:inputValue*35.274
                };
                break;

                case "temperature":
                    result={
                        Celsius:inputValue,
                        Fahrenheit:(inputValue*9/5)+32,
                        Kelvin:inputValue+273
                    };
                    break;
                    
                    case "angle":
                        result={
                            Radians:inputValue,
                            Degrees:inputValue*(180/Math.PI)
                        };
                        break;

                        default:
                            alert("Invalid conversion type");
                            return;
    }
    displayResult(result);


}


    function displayResult(result){
        const resultP=document.getElementById("result");
        resultP.innerHTML="";

        for(const unit in result){
            resultP.innerHTML+=`${unit}:${result[unit].toFixed(2)} <br>`;
        }
    }