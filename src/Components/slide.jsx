/* eslint-disable react/prop-types */

const Slide = ({
    company,
    logo,
    position,
    postedAt,
    contract,
    level,
    location,
    languages,
    tools 
}) => {
    return ( 
        <div className="main">
            <img className="image" src={logo} alt="" />
            <div className="body">
                <h1>{company} </h1>
                <p>{position}</p>
                <ul>
                    <li>{postedAt}</li>
                    <li>{contract}</li>
                    <li>{location}</li>
                </ul>
                <p>{languages} {tools} {level}</p>
                <p></p>
            </div>
        </div>
     );
}
 
export default Slide;