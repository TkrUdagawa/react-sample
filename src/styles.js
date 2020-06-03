import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    title: {
        marginRight: theme.spacing(2)
    },
    appBarSpacer: theme.mixins.toolbar,
}));

