export default function Card() {
    return (
        <div id="card">
            <div className="card__slider">
                <img src="https://i.pinimg.com/236x/41/d2/86/41d286c9d852acc05ebe5c1c148bad7f.jpg"
                 alt="card__slider" />
            </div>
            <div className="card__avatar">
                <img src="https://i.pinimg.com/236x/13/ec/24/13ec2447772614ac58813432f98d8a32.jpg" 
                alt="avatar" />
            </div>
            <div className="card__content">
                <p className="name">Hoàng Ba</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Veritatis officia quae
                    eos accusantium esse!
                </p>
                <button>FOLLOW</button>
            </div>
        </div>
    )
}