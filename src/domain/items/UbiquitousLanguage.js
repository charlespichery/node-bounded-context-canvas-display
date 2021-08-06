import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LanguageElementIcon from "@material-ui/icons/Translate";
import React from "react";

const UbiquitousLanguage = ({domain}) => {
    return (
        <List style={{width: "100%"}}>
            <LanguageElementTitle/>
            {domain.ubiquitousLanguage.map(e => (
                <LanguageElement
                    domainTerm={e.domainTerm}
                    definition={e.definition}
                    key={e.domainTerm}
                />
            ))}
        </List>
    );
};

const LanguageElement = ({domainTerm, definition}) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <Grid container spacing={0}>
                        <Grid item xs={1}>
                            <LanguageElementIcon/>
                        </Grid>
                        <Grid item xs={3} style={{color: "white"}}>
                            {domainTerm}
                        </Grid>
                        <Grid item xs={8} style={{color: "lightgrey"}}>
                            {definition}
                        </Grid>
                    </Grid>
                }
            />
        </ListItem>
    );
};

const LanguageElementTitle = () => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={
                    <Grid container spacing={0}>
                        <Grid item xs={1}/>
                        <Grid item xs={2} style={{color: "white", fontWeight: "bold"}}>
                            Language element
                        </Grid>
                        <Grid item xs={7} style={{color: "white", fontWeight: "bold"}}>
                            Definition
                        </Grid>
                    </Grid>
                }
            />
        </ListItem>
    );
};

export default UbiquitousLanguage;
