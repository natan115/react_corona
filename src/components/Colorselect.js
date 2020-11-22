export var min,max ;

export default function Tryfunc(props) {
    if(props.color === "green"){
        min = 0;
        max = 100;
        return min, max
    }
    if(props.color === "yellow"){
        min = 100;
        max = 1000;
        return min, max
       
    }

    if (props.color === "red")
    {   min = 1000;
        max = 1000000000000;
        return min, max}
}
