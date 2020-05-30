import React from 'react';
import { Responsive } from 'semantic-ui-react';

const PCMobileResponsive = ({ as }) => (
    <div>
        <Responsive as={as} mobile={true} {...Responsive.onlyMobile} />
        <Responsive as={as} mobile={false} minWidth={Responsive.onlyTablet.minWidth} />
    </div>
)

export default PCMobileResponsive;