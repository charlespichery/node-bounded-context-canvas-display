import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import BusinessDecisions from "./items/BusinessDecisions";
import InboundCommunications from "./items/InboundCommunications";
import UbiquitousLanguage from "./items/UbiquitousLanguage";

const DomainDescription = ({domain}) => (
    <Typography align="left" style={{fontSize: "18px"}} component="div">
        <Grid container spacing={2} justify="center">
            <Grid item xs={11}>
                <Grid container spacing={2}>
                    <Item title="Name" size={8}>
                        <br/>
                        {domain.name}
                    </Item>
                    <Item title="&nbsp;" size={4}>
                        <a
                            href="https://github.com/ddd-crew/bounded-context-canvas"
                            style={{textDecoration: "none"}}
                        >
                            Access dddCrew gitHub
                        </a>
                    </Item>
                    <Item title="Description" size={12}>
                        <br/>
                        {domain.description}
                    </Item>
                    <Item title="Business decisions" size={12}>
                        <BusinessDecisions domain={domain}/>
                    </Item>
                    <Item title="Ubiquitous language" size={12}>
                        <UbiquitousLanguage domain={domain}/>
                    </Item>
                    <Item title="Inbound communications" size={12}>
                        <InboundCommunications domain={domain}/>
                    </Item>
                    <Item title="Outbound communication" size={12}/>
                </Grid>
            </Grid>
        </Grid>
    </Typography>
);

const Item = ({title, size, children}) => (
    <Grid item xs={size}>
        <Paper elevation={0} style={{
            height: "100%",
            padding: "10px",
            backgroundColor: "#4e4e4e",
            color:"white"
        }}>
            <Title>{title}</Title>
            <Content>{children}</Content>
        </Paper>
    </Grid>
);

const Title = ({children}) => (
    <Typography variant="h5" component="h1">
        {children}
    </Typography>
);

const Content = ({children}) => <span style={{color: "lightgrey", marginLeft: "20px"}}>{children}</span>;

export default DomainDescription;
