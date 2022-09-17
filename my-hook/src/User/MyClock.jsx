import useClock from "../components/useClock";

export default function MyClock() {
    const [time, ampm] = useClock()
    return (
        <div 
            className="myclock" 
            style={{
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '120px',
                padding: '10px',
                color: '#fff',
                fontWeight: 700,
                background: '#0f63b5',
                borderRadius: '10px',
                
            }}
        >
            <p>{time} <span>{ampm}</span></p>
        </div>
    )
}