
import { InputBase, styled, List,ListItem, Box} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productAction";
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    border-radius: 2px;
    margin-left: 20px;
    width: 38%;
    background-color: #fff;
    display: flex;
`;
const InputSearchBase = styled(InputBase)`
    font-size: unset;
    width: 100%;
    padding-left: 20px;
    
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
const SearchIconWrapper = styled(Box)`
    margin-left: auto;
    padding: 5px;
    display: flex;
    color: blue;
`;
const Search = () => {
    const [text, setText] = useState('')
    const [open, setOpen] = useState(true)
    const getText = (text) => {
        setText(text)
        setOpen(false)
    }
    const getProducts = useSelector(state => state.getProducts)
    const {products} = getProducts
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
    return (
        <SearchContainer>
        <InputSearchBase
            placeholder="Search for products, brands and more"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => getText(e.target.value)}
        />
        <SearchIconWrapper>
        <SearchIcon/>
        </SearchIconWrapper>
        {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search