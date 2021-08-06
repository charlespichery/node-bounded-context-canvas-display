import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Box = ({first, second, color, icon, iconTooltip}) => (
    <Card variant="outlined" style={{borderColor: color, backgroundColor: "#4e4e4e"}}>
        <CardContent>
            <Typography style={{color}}>{first}</Typography>
            <Typography style={{color: "white"}}>{second}</Typography>
        </CardContent>
        <Typography style={{color: "white"}} component="div">
            <div align="right" style={{color}}>
                {icon && <Tooltip title={iconTooltip}>{icon}</Tooltip>}
            </div>
        </Typography>
    </Card>
);

export default Box;
