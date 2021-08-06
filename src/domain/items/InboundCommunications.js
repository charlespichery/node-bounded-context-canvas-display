import BLUE from "@material-ui/core/colors/blue";
import LIME from "@material-ui/core/colors/lime";
import PURPLE from "@material-ui/core/colors/purple";
import TEAL from "@material-ui/core/colors/teal";
import Grid from "@material-ui/core/Grid";
import CommandIcon from "@material-ui/icons/Create";
import FrontendIcon from "@material-ui/icons/DesktopWindows";
import BoundedContextIcon from "@material-ui/icons/FavoriteBorder";
import InfoIcon from "@material-ui/icons/Info";
import EventIcon from "@material-ui/icons/LabelImportant";
import ExternalSystemIcon from "@material-ui/icons/Settings";
import QueryIcon from "@material-ui/icons/Visibility";
import React from "react";
import Box from "./Box";

const InboundCommunications = ({domain}) => (
    <Grid container spacing={2}>
        <Grid item xs={11}>
            {domain.collaborators.map(collaborator => (
                <SwimLane collaborator={collaborator} key={collaborator.name}/>
            ))}
        </Grid>
    </Grid>
);

const getCollaborationTypeShortcut = type =>
    ({
        "Open / Host Service": "OHS",
        Conformist: "CF",
        "Anti-corruption layer": "ACL",
        "Shared kernel": "SK",
        "Published language": "PL",
        "Open / Host Service with published language": "OHS + PL",
        "Separated ways": "SW",
    }[type]);

const SwimLane = ({collaborator}) => {
    const typeShortcut = getCollaborationTypeShortcut(collaborator.collaborationType);
    const messages = [
        ...collaborator.commands.map(({id, description}) => ({id, description, type: "command"})),
        ...collaborator.queries.map(({id, description}) => ({id, description, type: "query"})),
        ...collaborator.events.map(({id, description}) => ({id, description, type: "event"})),
    ];

    return (
        <>
            <br/>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Collaborator collaborator={collaborator}/>
                </Grid>
                <Grid item xs={1}>
                    <Box
                        first={typeShortcut}
                        color={BLUE["A100"]}
                        icon={collaborator.collaborationType && <InfoIcon/>}
                        iconTooltip={collaborator.collaborationType}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Messages messages={messages}/>
                </Grid>
            </Grid>
        </>
    );
};
const Collaborator = ({collaborator}) => {
    const {name, type} = collaborator;
    const color = {
        "Bounded Context": TEAL["100"],
        Frontend: PURPLE["100"],
        "External System": LIME["100"],
    }[type];
    const icon = {
        "Bounded Context": <BoundedContextIcon/>,
        Frontend: <FrontendIcon/>,
        "External System": <ExternalSystemIcon/>,
    }[type];

    return <Box first={name} icon={icon} iconTooltip={type} color={color}/>;
};

const Messages = ({messages}) => (
    <Grid container spacing={2}>
        {messages.map(m => (
            <Message message={m} key={m.id + m.description}/>
        ))}
    </Grid>
);

const Message = ({message}) => {
    const {id, description, type} = message;
    const color = {
        command: "red",
        query: "lightgreen",
        event: "orange",
    }[type];
    const icon = {
        command: <CommandIcon/>,
        query: <QueryIcon/>,
        event: <EventIcon/>,
    }[type];

    return (
        <Grid item xs={6}>
            <Box first={id} second={description} color={color} icon={icon} iconTooltip={type} key={id}/>
        </Grid>
    );
};

export default InboundCommunications;
