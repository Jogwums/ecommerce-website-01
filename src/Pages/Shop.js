import React from 'react'
import {Container, Button} from './../globalStyles'
import ItemCards from './../components/index'

const Shop = () => {
    return (
        <Container>
            <h1>Hello from shop</h1>
            <ItemCards />
            <Button primary fontBig >Buy me</Button>
        </Container>
    )
}

export default Shop
