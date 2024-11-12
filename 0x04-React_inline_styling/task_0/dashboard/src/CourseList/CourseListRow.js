import React from 'react';
import PropTypes from 'prop-types';

// Define style constants outside the component for better performance
const headerRowStyle = {
  backgroundColor: '#deb5b545'
};

const regularRowStyle = {
  backgroundColor: '#f5f5f5ab'
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Select style based on isHeader prop
  const rowStyle = isHeader ? headerRowStyle : regularRowStyle;

  return (
    <tr style={rowStyle}>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2">{textFirstCell}</th>
        :
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
      :
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;