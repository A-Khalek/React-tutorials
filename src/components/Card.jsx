import ProfileImage from '../asset/profile_img.png'


function Card(){
    return(
        <>
            <div className="card">
                <img className='card-image'  src={ProfileImage} alt="profile picture" />
                <h1 className='card-title'>Hello Bro</h1>
                <p className='card-text'>This is made by Bro</p>
            </div>
        </>
    );
}
export default Card;