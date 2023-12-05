import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function regionCard({ region, action}){
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={region.name}
                subheader={region.iso_3166_1}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {region.english_name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {action(region)}
            </CardActions>
        </Card>
    );
}