import emailjs from 'emailjs-com';
import './Contact.css';
import { Box, Button, Grid, TextField, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import React from 'react';

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID!
        )
        .then((result: any) => {
            setSnackbarMessage('Message sent successfully!');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
        }, (error: any) => {
            console.error('Error:', error);
            setSnackbarMessage('Failed to send message. Please email directly.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        });
    };

    return (
        <div ref={ref}>
        <div style={{marginBottom:'70px'}}>
            <div className='contact-header'>What's next ?</div>
            <div className='contact-sub-header'>
            I am currently seeking Spring 2025 co-op positions or full-time software engineering oppportunites starting Summer 2025. 
            </div>
            <div className='contact-form-container'>
                <span className='contact-form-header'> Let's Connect</span>
                
                <span className='contact-form-subheader'>Send me a message! </span> 
                <form onSubmit={sendEmail}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Full Name"
                                name="name"
                                required
                                className="custom-textfield"
                                sx={{ width: '80%' }} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Your Email"
                                name="email"
                                type="email"
                                required
                                className="custom-textfield"
                                sx={{ width: '80%' }} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Type your message"
                                name="message"
                                multiline
                                rows={4}
                                required
                                className="custom-textfield"
                                sx={{ width: '80%' }} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2, width: '80%',mb:4 }}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity={snackbarSeverity} 
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
           </div>
           <Footer/>
        </div>
    );
});

export default Contact;
