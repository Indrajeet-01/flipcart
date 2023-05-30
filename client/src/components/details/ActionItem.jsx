import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { Button, Box, styled } from '@mui/material';


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px',
});

const StyledButton = styled(Button)`
    width: 48%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;


const ActionItem = ({product}) => {
    return(
        <LeftContainer>
            <Box style={{    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '90%'}}>
            <Image src={product?.detailUrl} alt="" />
            </Box>
            <StyledButton variant='contained' 
                style={{marginRight: 10, background: '#ff9f00'}} 
            >  <Cart /> Add to Cart</StyledButton>
            <StyledButton variant='contained'
                style={{background: '#fb641b'}}
            ><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem