import * as React from 'react';
import { Button } from '@material-ui/core';
import { FaTwitter } from 'react-icons/fa';

interface IButton {
    onClick: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
const TwitterButton: React.FunctionComponent<IButton> = ({ onClick, ...props }) => {
    return (
        <Button
            variant="contained"
            style={{ backgroundColor: '#00acee', color: 'white' }}
            startIcon={<FaTwitter />}
        >
            Login With Twitter
        </Button>
    )
}
export default TwitterButton;
