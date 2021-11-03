import React from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import { baseUrl } from '../api/posts';
export default function AppbarCustom() {
    return (
        <>
            <AppBar position="static">
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <img src={`${baseUrl}/uploads/facebook.png`} style={{width: "40px", position: "relative", top: "5px", margin: "0 10px" }}/>
                        <Typography display="inline" variant="h4" align="center">faceblog</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography display="inline" variant="h5" align="center">safe blog for humans</Typography>

                    </Grid>

                </Grid>
            </AppBar>
        </>
    );
}
