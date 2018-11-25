import React from 'react';

import ImageViewer from '../Modals/ImageViewer';
import OutageLinks from '../Modals/OutageLinks';

const ModalConductor = ( props ) => {
    switch(props.currentModal) {
        case 'IMAGE_LOADER':
            return <ImageViewer {...props} />;

        case 'OUTAGE_LINKS':
            return <OutageLinks {...props} />;

        default:
            return null;
    }
};

export default ModalConductor;