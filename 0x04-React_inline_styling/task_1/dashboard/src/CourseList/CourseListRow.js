import React from 'react'



const rowStyle = {
    backgroundColor: "#f5f5f5ab",
};
const headerStyle = {
    backgroundColor: "#deb5b545",
};

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    return (
        <tr style={rowStyle}>
            {
                isHeader ? (
                    <>
                        {
                            textSecondCell ? (
                                <>
                                    <th style={headerStyle}>{textFirstCell}</th>
                                    <th style={headerStyle}>{textSecondCell}</th>
                                </>
                            ) : (
                                <th colSpan="2" style={headerStyle}>{textFirstCell}</th>
                            )
                        }
                    </>
                ) : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>
                )
            }
        </tr>
    )
}



export default CourseListRow