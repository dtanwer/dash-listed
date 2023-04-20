import React from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './Meeting.scss';
export default function Meeting() {
    const data = [
        {
            title: 'Meeting with suppliers from Kuta Bali',
            time: '14.00-15.00',
            location: 'at Sunset Road, Kuta, Bali'
        },
        {
            title: 'Check operation at Giga Factory 1',
            time: '18.00-20.00',
            location: 'at Central Jakarta '
        }
    ]
    return (
        <div className="widget" style={{ minHeight: "240px", minWidth: "350px" }} >
            <div className="main">
                <h1>Today’s schedule</h1>
                {
                    data.map(item => (
                        <div id='m1' className="meet">
                            <h2>{item.title}</h2>
                            <p>{item.time}</p>
                            <p>{item.location}</p>
                        </div>
                    ))
                }
            </div>
            <div className="right">
                <p>See All <ArrowForwardIosOutlinedIcon style={{ width: "20px" }} /></p>
            </div>
        </div>
    )
}
