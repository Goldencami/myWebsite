function PositionDescription({ year, company, position, desc }) {
    return(
        <>
        <div className='container-fluid job-position'>
            <div className='row'>
                <div className='col'>{year}</div>
                <div className='col company-name'>{company}</div>
            </div>
            <div>
                <h3>{position}</h3>
            </div>
            <ul>
                {desc.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default PositionDescription