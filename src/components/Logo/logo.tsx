import React, { memo } from 'react';
import { H3, Span } from 'quarks-ui';

import { renderStrictTags } from '../../utils/functions';

const Logo: React.FC = () => (
    <H3 styling="base">
        {renderStrictTags('{')} conquista.
        <Span styling="base" color="secondary.default">
            dev
        </Span>{' '}
        {renderStrictTags('}')};
    </H3>
);

export default memo(Logo);
