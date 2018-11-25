import React, { Fragment } from 'react';

import ListIcon from './HomeListIcon'; 
import ModalConductor from '../elements/ModalConductor';

const HomeOutageLinks = props => {
    const currentModal = 'OUTAGE_LINKS';

    return (
        <Fragment>
            <li className="flex-item category-items" id={props.categoryID}>
                <button className='category-link-button' onClick={props.showModal}> 
                    <ListIcon iconName={props.iconName}/>
                    <h2>{props.category}</h2>
                    <hr />
                    <h3>{props.categoryDescription}</h3>
                </button>
            </li>
            {props.displayModal 
                ? 
                    <ModalConductor 
                        currentModal={currentModal} 
                        hideModal={props.hideModal} /> 
                : 
                    ''}
        </Fragment>
    );
}


export default HomeOutageLinks;
