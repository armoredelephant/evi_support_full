import React from 'react';

import ModalWrapper from '../elements/ModalWrapper';

const OutageLinks = props => {
    return (
        <ModalWrapper {...props} >
            <div className="outage-links-wrapper">
                <h2 className="outage-links-title">Outage Links</h2>
                <hr />
                <ul className="outage-links-list">
                    <li>
                        <a href='https://www.downdetector.com'>Down Detector</a>
                    </li>
                    <li>
                        <a href='http://wired.meraki.com'>Meraki Test</a>
                    </li>
                    <li>
                        <a href='http://www.speedtest.net/'>Speed Test</a>
                    </li>
                </ul>
            </div>
        </ModalWrapper>
    )
}

export default OutageLinks;
