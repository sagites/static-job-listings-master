/* eslint-disable react/prop-types */

const Slide = ({
    company,
    logo,
    position,
    postedAt,
    contract,
    level,
    role,
    location,
    languages,
    tools 
}) => {
    return ( 
        <div className="main">

            <div className="holder">

            <div className="companyLogo">
                <img className="image" src={logo} alt="" />
            </div>

            <div className="body">
                <h1>{company} </h1>
                <p>{position}</p>
                <ul>
                    <li>{postedAt}</li>
                    <li>{contract}</li>
                    <li>{location}</li>
                </ul>
            </div>


            <div className="buttonSection">
                <button className="buttons">{role}</button>
                <button className="buttons">{level}</button>
                {
                    languages.map((language, i)=>(
                        <button className="buttons" key={i}>{language}</button>
                    ))
                }
                {
                    tools.map((tool, i)=>(
                        <button className="buttons" key={i}>{tool}</button>
                    ))
                    }
            </div>
            </div>

        </div>
     );
}
 
export default Slide;