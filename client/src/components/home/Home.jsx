import { Box, styled } from "@mui/material"
import Banner from "./Banner"
import NavBar from "./NavBar"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/productAction"
import { useDispatch ,useSelector} from "react-redux"

const Component = styled(Box)`
    padding: 10px;
    background-color: #f2f2f2;
`

const Home = () => {
    useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
            </Component>
            
        </>

    )
}

export default Home