import Input from "./Input";
import Button from "./Button";
import { Toast } from "bootstrap";



function Caculator(props) {
    let number1 = '';
    let number2 = '';
    let calculation = '';

    function caculator (e,i) {
        let input = document.querySelector('.input');
        
        if(isNaN(i)){
            if(i === 'AC'){
                number1 = '';
                number2 = '';
                calculation = undefined;
                input.value = '';
                return;
            }else if(i === '='){
                const result = answer(number1,number2,calculation);
                input.value = result;
                number1 = result;
                number2 = '';
                calculation = undefined;
            }else if(i === '.'){
                if(calculation){
                    input.value = '';
                    number2 += i;
                    input.value = number2;
                }else{
                    number1 += i;
                    input.value = number1;
                }
            }
            else {
                calculation = i
            }
        }
        else {
            if(calculation){
                input.value = '';
                number2 += i;
                input.value = number2;
            }else{
                number1 += i;
                input.value = number1;
            }
        }

    }
    function answer(number1,number2,calculation) {
        number1 = Number(number1)
        number2 = Number(number2)
        if(!(number2 && calculation)){
            number2 = 0;
            calculation = '+'
        }
        switch (calculation) {
            case '+':{
                return number1 + number2;
            }
            case '-':{
                return number1 - number2;
            }
            case 'x':{
                return number1 * number2;
            }
            case '/':{
                return number1 / number2;
            }
            default:
                break;
        }
    }

    return (
        <div id="caculator">
            <Input className="input" />
            <div className="container__cacu">
                <div className="caculation">
                    <Button id="+" className="btn__caculation" value="+" onClick={(e) => (caculator(e,"+"))}/>
                    <Button id="7" className="btn__num" value="7" onClick={(e) => (caculator(e,7))} />
                    <Button id="4" className="btn__num" value="4" onClick={(e) => (caculator(e,4))} />
                    <Button id="1" className="btn__num" value="1" onClick={(e) => (caculator(e,1))} />
                    <Button id="0" className="zero btn__num" value="0" onClick={(e) => (caculator(e,0))} />
                </div>

                <div className="caculation">
                    <Button id="" className="btn__caculation" value="-" onClick={(e) => (caculator(e,"-"))} />
                    <Button id="8" className="btn__num" value="8" onClick={(e) => (caculator(e,8))} />
                    <Button id="5" className="btn__num" value="5" onClick={(e) => (caculator(e,5))} />
                    <Button id="2" className="btn__num" value="2" onClick={(e) => (caculator(e,2))} />
                    <Button id="." className="btn__num" value="." onClick={(e) => (caculator(e,"."))}/>
                </div>

                <div className="caculation">
                    <Button id="" className="btn__caculation" value="x" onClick={(e) => (caculator(e,'x'))} />
                    <Button id="9" className="btn__num" value="9" onClick={(e) => (caculator(e,9))} />
                    <Button id="6" className="btn__num" value="6" onClick={(e) => (caculator(e,6))} />
                    <Button id="3" className="btn__num" value="3" onClick={(e) => (caculator(e,3))} />
                    <Button id="del" className="btn__AC" value="AC" onClick={(e) => (caculator(e,'AC'))} />
                </div>

                <div className="caculation">
                    <Button id="" className="btn__caculation" value="/" onClick={(e) => (caculator(e,'/'))} />
                    <Button id="" className="btn__result" value="=" onClick={(e) => (caculator(e,'='))}/>
                </div>
            </div>
        </div>
    )
}
export default Caculator