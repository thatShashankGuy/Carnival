import React from 'react';
import './ImgLinkForm.css';


const ImgLinkForm = ({onDetect}) => {
    return (
        <div className = 'f3 '>
        <p>
            {`Carnival - Get your Random Beautiful Picture`}
        </p>
        <div className  = 'Centre'>
            <div className = ' form Center pa4 br3 shadow-5'>
            <input className = 'f4 pa2 w-70 center' type = 'text'></input>
            <button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick = {onDetect}>Fetch</button>
            </div>
        </div>
        </div>

    )
}

export default ImgLinkForm