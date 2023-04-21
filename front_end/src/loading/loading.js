import React from 'react'
import './loading.css'
import image from '../image/loading.gif'
function Loading(){
    return(
<div >
    <img className='img' src={image} alt=""/>
</div>
    );
}
export default Loading