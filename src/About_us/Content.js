import * as React from 'react';
import './About us'
function Content (props){

        const ContentComponent = props.contentvalue.map((content) => (
            <div className='AboutusContentHolder'>
                <div className='ContentTitle'>{content.title}</div>
                <p className='text'>{content.text}</p>
            </div>
        ));
        return(
           <dev className='MainContentHolder'>
                {ContentComponent}
           </dev>
        );
}
export default Content;