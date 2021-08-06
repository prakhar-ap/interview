import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';

function Ratings({rating}) {
    return (
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly />
        </Box>
    )
}

export default Ratings;
