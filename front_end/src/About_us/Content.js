import * as React from 'react';
import './About us'
class Content extends React.Component{
    render(){
        const ContentComponent = this.props.contentvalue.map((content) => (
            <div className='ContentHolder'>
                <div className='title'>{content.title}</div>
                <p className='text'>{content.text}</p>
            </div>
        ));
        return(
           <dev className='MainContentHolder'>
                {ContentComponent}
           </dev>
        );
    }
}
export default Content;