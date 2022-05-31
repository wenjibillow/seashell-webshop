import Button from '@material-ui/core/Button'
import CartItem from "../CartItem/CartItem"
//styles
import { Wrapper } from "./Cart.styles"
//types
import { CartItemType } from "../App"

type Props = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0)
  return (
    <Wrapper>
      <h2>My Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total Pay: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <Button className='checkout' size='large' fullWidth>
        Checkout
      </Button>
    </Wrapper>
  )
}

export default Cart