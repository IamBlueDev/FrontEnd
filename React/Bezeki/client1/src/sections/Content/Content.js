import './Content.scss'
import React, { Component } from 'react';
import img1 from '../../images/img1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class Content extends Component {
    render() {
        return(
            <div className="Content">
                <div className="Items">
                    <div className="Item">
                       <h2 className="Title">Item Title</h2>
                       <img src={img1}/>
                       <h3 className="price"> £25 - £35 </h3>
                        </div>
                        <div className="Item">
                       <h2 className="Title">Item Title</h2>
                       <img src={img1}/>
                       <h3 className="price"> £25 - £35 </h3>
                        </div>
                        <div className="Item">
                       <h2 className="Title">Item Title</h2>
                       <img src={img1}/>
                       <h3 className="price"> £25 - £35 </h3>
                        </div>
                        <div className="Item">
                       <h2 className="Title">Item Title</h2>
                       <img src={img1}/>
                       <h3 className="price"> £25 - £35 </h3>
                        </div>
                        <div className="Item">
                       <h2 className="Title">Item Title</h2>
                       <img src={img1}/>
                       <h3 className="price"> £25 - £35 </h3>
                        </div>
                        <div className="Item">
                       <h2 className="Title">Item Title</h2>
                       <img src={img1}/>
                       <h3 className="price"> £25 - £35 </h3>
                        </div>
                        <div className="Item">
                       <h2 className="Title">Item Title</h2>
                       <img src={img1}/>
                       <h3 className="price"> £25 - £35 </h3>
                        </div>
                </div>

            </div>

        );
    }

}


export default Content;