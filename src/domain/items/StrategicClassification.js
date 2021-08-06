import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import BusinessModelIcon from "@material-ui/icons/AccountBalance";
import ClassificationIcon from "@material-ui/icons/Public";
import EvolutionIcon from "@material-ui/icons/Telegram";
import React from "react";

const StrategicClassification = ({domain}) => {
    const classes = useStyles();

    return (
        <List style={{width: "100%"}}>
            <Attribute name="Domaine" icon={<ClassificationIcon/>} value={domain.classification}/>
            <Attribute name="Modèle métier" icon={<BusinessModelIcon/>} value={domain.businessModel}/>
            <Attribute name="Evolution" icon={<EvolutionIcon/>} value={domain.evolution}/>
        </List>
    );
};

const Attribute = ({name, icon, value}) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            {icon}
                        </Grid>
                        <Grid item xs={4} style={{color: "white"}}>
                            {name}
                        </Grid>
                        <Grid item xs={7} style={{color: "lightgray"}}>
                            {value}
                        </Grid>
                    </Grid>
                }
            />
        </ListItem>
    );
};

export default StrategicClassification;
