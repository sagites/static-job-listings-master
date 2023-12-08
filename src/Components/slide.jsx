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
    tools,
    onFilterClick = undefined
}) => {

    function handleFilterClick(value) {
        onFilterClick(value)
    }
    return ( 
        <div className="container">
            <div className="main">

                <div className="firstSection">

                    <img
                        src={logo}
                        alt={company}
                    />

                    <div className="information">

                        <div className="companySide">
                            <p className="companyName">{company}</p>
                            <div className="conditional">
                                { news == true ? <div className="new">NEW</div> : null }
                                { featured  == true ? <div className="featured">FEATURED</div> : null}
                            </div>
                        </div>

                        <div className="position">{position}</div>

                        <ul className="minorThings">
                            <li className="listItems">{postedAt}</li>
                            <li className="listItems">{contract}</li>
                            <li className="listItems">{location}</li>
                        </ul>
                    </div>
                </div>

                <hr className="hidden"/>

                <div className="buttonHolder">
                    <button onClick={() => handleFilterClick(role)} className="button">{role}</button>
                    <button onClick={() => handleFilterClick(level)} className="button">{level}</button>
                    {tools.map((tool, index) => (
                        <button key={index} className="button" onClick={() => handleFilterClick(tool)}>{tool}</button>
                    )) }
                    {languages.map((language, index) => (
                        <button key={index} className="button" onClick={() => handleFilterClick(language)}>{language}</button>
                    )) }
                </div>
            </div>
        </div>

     );
}
 
export default Slide;