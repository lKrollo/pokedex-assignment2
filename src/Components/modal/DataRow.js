import React from 'react';

const Datarow = ({ catergory, value, max }) => {
    return (
        <tr>
            <td className='category'>{ catergory }</td>
            <td className="stats-number">{ value }</td>

            {
                max &&
                <td className="range-slide">
                    <div className="range-slide-fill" style={{ "--precentage": (value / max) * 100 + '%'}}></div>
                </td>
            }
        </tr>
    );
};

export default Datarow;