
import { useParams } from 'react-router-dom';

const NumberOrWord = (props) => {

    const {input, textColor, bgColor} = useParams();

    const styling = {
        color: textColor,
        backgroundColor: bgColor,
    };

    return (
        <div>
            {isNaN(+input) ? <h1 style={styling}>The word is: {input}</h1> : <h1 style={styling}> The number is: {input}</h1>}
        </div>
    )
};

export default NumberOrWord;