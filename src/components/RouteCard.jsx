import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Checkbox, Modal, styled } from '@mui/material';


const Input = styled('input')({
    display: 'none',
  });

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

export default function RouteCard() {

    const [submitted, setSubmitted] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const handleOnChange = (event) => {
        console.log(event.currentTarget.files[0])
         // Submit, wait for API
        setOpen(true)
        setSubmitted(true)
        console.log(submitted)
    }

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
            <CardActions>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" type="file" onChange={handleOnChange}/>
                <Button variant="contained" component="span" size='small'>
                Upload POD
                </Button>
            </label>
            <Checkbox disabled checked={submitted}/>
            </CardActions>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
        </Card>
    );
}