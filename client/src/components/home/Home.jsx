import { Box, styled } from "@mui/material"
import Banner from "./Banner"
import NavBar from "./NavBar"
import { useEffect } from "react"
import { getProducts } from "../../redux/actions/productAction"
import { useDispatch ,useSelector} from "react-redux"
import Slide from "./Slide"
import MidSlide from "./MidSlide"
import { getProducts as listProducts } from "../../redux/actions/productAction"
import MidSection from "./MidSection"


const Component = styled(Box)`
    padding: 10px;
    background-color: #f2f2f2;
`

const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <MidSlide products={products} />
                <MidSection/>
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
            
        </>

    )
}

export default Home