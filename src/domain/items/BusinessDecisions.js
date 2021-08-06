import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DecisionIcon from "@material-ui/icons/CallSplit";
import React from "react";


const BusinessDecisions = ({domain}) => {
    return (
        <List style={{width: "100%"}}>
            {domain.businessDecisions.map(decision => (
                <Decision decision={decision} key={decision} />
            ))}
        </List>
    );
};

const Decision = ({decision}) => {

    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <DecisionIcon />
                        </Grid>
                        <Grid item xs={11} style={{color: "lightgrey"}}>
                            {decision}
                        </Grid>
                    </Grid>
                }
            />
        </ListItem>
    );
};

export default BusinessDecisions;
