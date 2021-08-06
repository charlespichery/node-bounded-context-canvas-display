import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import ModelTraitIcon from "@material-ui/icons/Streetview";
import React from "react";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    value: {
        color: "lightgrey",
    },
});

const ModelTraits = ({domain}) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {domain.modelTraits.map(trait => (
                <ModelTrait trait={trait} key={trait} />
            ))}
        </List>
    );
};

const ModelTrait = ({trait}) => {
    const classes = useStyles();

    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            <ModelTraitIcon />
                        </Grid>
                        <Grid item xs={9} className={classes.value}>
                            <div>{trait}</div>
                        </Grid>
                    </Grid>
                }
            />
        </ListItem>
    );
};

export default ModelTraits;
