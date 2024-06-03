import "./Timer.css"
export default function Clock({color, time}){
    return(
        <h1
        className="timer"
        style={{ color: 'midnightblue'}}>
        {time}
        </h1>
    );
}