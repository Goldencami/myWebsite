function CareerBlock({ title, year, description }) {
    return(
        <table>
            <thead>
                <tr>
                    <th id='title' width='70%'>
                        <h5>{title}</h5>
                    </th>
                    <th id='year' style={{ textAlign: 'right' }}>
                        <h5>{year}</h5>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td colspan='2'>
                        <p>{description}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CareerBlock