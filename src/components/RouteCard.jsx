import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Checkbox, Modal, styled } from '@mui/material';
import { hello, verifyAWB } from '../api/api';


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

export default function RouteCard(props) {

    const [submitted, setSubmitted] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const Example = ({data}) => <img src={`data:image/jpeg;base64,${data}`} width='100%' />

    const handleOnChange = (event) => {
        // console.log(event.currentTarget.files[0])
        // Submit, wait for API
        setOpen(true)
        setSubmitted(true)
        verifyAWB(event.currentTarget.files[0])
        .then(res => res.json())
        .then(data => {
            data['img'] = <Example data={data['img']} />
            setResults(data)
        })
    }

    const [results, setResults] = React.useState(null)

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ paddingBottom: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        TO DELIVER
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.details.timeslot}
                    </Typography>
                </Box>
                <Typography variant="body2" textAlign={'left'}>
                    {props.details.address}
                </Typography>
                <Typography variant="body2" textAlign={'left'}>
                    {props.details.name}
                </Typography>
                <Typography variant="body2" textAlign={'left'}>
                    {props.details.id}
                </Typography>
            </CardContent>
            <CardActions>
            <label htmlFor="contained-button-file">
                <Input formMethod='POST' formEncType='multipart/form-data' accept="image/*" id="contained-button-file" type="file" name='image' onChange={handleOnChange}/>
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
                {results != null && <Typography id="modal-modal-title" variant="h6" component="h2">
                    {`POD is ${results['isValid'] ? 'Valid' : 'Invalid'}`}
                </Typography>}
                {results!= null && results['img']}
                </Box>
            </Modal>
        </Card>
    );
}