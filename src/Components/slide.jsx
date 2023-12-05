/* eslint-disable react/prop-types */

const Slide = ({
    company,
    logo,
    news,
    featured,
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

            <div>

                <img
                    src={logo}
                    alt={company}
                />

                <div>

                    <div>
                        <h1 className="companyName">{company}</h1>
                        <div>
                            { news == true ? <div className="new">NEW</div> : null }
                            { featured  == true ? <div className="featured">FEATURED</div> : null}
                        </div>
                    </div>

                    <div>{position}</div>

                    <ul>
                        <li>{postedAt}</li>
                        <li>{contract}</li>
                        <li>{location}</li>
                    </ul>
                </div>
            </div>

            <hr className="hidden"/>

            <div className="buttonHolder">
                <div onClick={() => handleFilterClick(role)} className="button">{role}</div>
                <div onClick={() => handleFilterClick(level)} className="button">{level}</div>
                {tools.map((tool, index) => (
                    <div key={index} className="button" onClick={() => handleFilterClick(role)}>{tool}</div>
                )) }
                {languages.map((language, index) => (
                    <div key={index} className="button" onClick={() => handleFilterClick(role)}>{language}</div>
                )) }
            </div>
        </div>
     );
}
 
export default Slide;