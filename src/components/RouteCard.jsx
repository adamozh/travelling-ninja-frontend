import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function RouteCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        TO DELIVER
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        9AM - 12PM
                    </Typography>
                </Box>
                {/* <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography> */}
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography> */}
                <Typography variant="body2" textAlign={'left'}>
                    177 Orchard Rd - Orchard Central #06-02
                </Typography>
                <Typography variant="body2" textAlign={'left'}>
                    Adam Oh Zhi Hong
                </Typography>
                <Typography variant="body2" textAlign={'left'}>
                    NOEWFJOIEWJFLK84792
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}