'use client';

import React, { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import { useAppContext } from '@src/app/AppContext';
import Header from '../Header';

const HeroName: FC = () => {
  const { setShow } = useAppContext();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleValidatePassword = (password: string) => {
    if (password === 'secret') {
      setOpen(false);
      setShow(true);
    } else {
      alert('Invalid password. Please try again.');
    }
  };

  return (
    <>
      <div className="rpgui-container framed-golden flex justify-between mb-2">
        <div className="flex">
          <Avatar
            sx={{ height: '70px', width: '70px' }}
            className="my-auto"
            alt="Smol Brain"
            src="/img/Smol.jpg"
          />
          <div className="flex-col ml-2 my-auto">
            <Header title="Dicey" />
            <p>The Hero of Ages</p>
          </div>
        </div>

        <div className="flex-row my-auto">
          <Button variant="text" href="https://twitter.com/_Dicey__">
            <XIcon />
          </Button>
          <Button
            className="rpgui-button w-96 pt-2"
            sx={{
              color: '#fff',
            }}
            onClick={() => setOpen(true)}
          >
            Unlock Web2 Attribute
          </Button>
        </div>

        <PasswordModal open={open} onClose={handleClose} onValidate={handleValidatePassword} />
      </div>
    </>
  );
};

interface PasswordModalProps {
  open: boolean;
  onClose: () => void;
  onValidate: (password: string) => void;
}

const PasswordModal: FC<PasswordModalProps> = ({ open, onClose, onValidate }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          p: 4,
        }}
      >
        <div className="rpgui-container framed-golden">
          <div className="rpgui-content">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter Password
            </Typography>
            <TextField
            className='rpgui'
              id="password-input"
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              autoFocus
              sx={{ mt: 2 }}
            />
            <Button
              className="rpgui-button w-80"
              variant="contained"
              color="primary"
              onClick={() => onValidate(password)}
              sx={{ mt: 2 }}
            >
              Validate Password
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default HeroName;
