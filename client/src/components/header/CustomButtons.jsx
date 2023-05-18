import { Box, Button, Typography, styled,Badge } from "@mui/material"
import { ShoppingCart } from '@mui/icons-material'

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '10px 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}))
const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}))


const CustomButtons = () => {
    return (
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Box>
                <Badge color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Box>
        </Wrapper>
    )
}

export default CustomButtons