import React from 'react'
import './Cardset.css'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
// import addToBasket from '../Redux/Store'
// import { BasketState } from '../Redux/ReduxComponent'
// import { Action } from '../Redux/action'
// import { Store } from '@reduxjs/toolkit'

interface Props {
    Image: String,
    author: String,
    name: String,
    Id: number,
    price: number,
    ind: number,
    // addToBasket: Store<BasketState, Action>
    // OnAddToBasket(Image: String,
    //     author: String,
    //     name: String,
    //     id: number,
    //     price: number):void
}

const Cardset: React.FC<Props> = ({ Image, name, author, Id, price, ind }): JSX.Element => {
    console.log(Id)
    const dispatch = useDispatch();
    // let addToBasket: Store<BasketState, Action>

    const OnAddToBasket = (Image: String,
        author: String,
        name: String,
        Id: number,
        price: number,
        ind: number,) => {
        dispatch({
            Image: String,
            author: String,
            name: String,
            id: Number,
            price: Number,
        })
    }


    return (
        <div className="card__container">
            <Card key={Id} className="books_list" style={{ width: '18rem' }}>
                <Card.Img className="card__img" variant="top" src={Image?.toString()} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div className="author__price__container">
                            <strong>By: </strong>{author}
                            <span className="book__price"><small>Rs</small><strong> {price}</strong></span>
                        </div>
                    </Card.Text>
                    <Button onClick={() => OnAddToBasket} className="add__to__cart__button" variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cardset