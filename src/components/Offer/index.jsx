import './index.css'
function Offer({ setActiveID, activeID, id, title, img, type, storage, users, price }) {
    return <div onClick={() => setActiveID(id)} className={`offer-card-container linear ${activeID === id ? 'active' : ""}`}>
        <div className="offer-card-title">
            <div className="offer-card-img-container">
                <img src={img} />
            </div>
            <div className="offer-txt">
                <p className="offer-title"> {title} </p>
                <p className="for"> {type}</p>
            </div>
        </div>
        <ul className='offer-features'>
            <li className="offer-price">{price}$/Month</li>
            <li className="storage">{storage}</li>
            <li className="updates">Daily Updates</li>
            <li className="users">{users}</li>
            <li>Realtime Protection</li>
        </ul>
        <button className="offer-subscribe-btn">Subscribe</button>
    </div>
}
export default Offer;