import './index.css'
function Card({ img, number, desc }) {
    return <div className="card">
        <div className="card-logo">
            <img src={img} />
        </div>
        <div className="count">
            <p className='number'>+ {number}</p>
            <p className='count-description'>{desc}</p>
        </div>
    </div>
}
export default Card;