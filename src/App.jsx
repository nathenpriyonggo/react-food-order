import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContextProvider } from "./components/store/CartContext";
import { UserProgressContextProvider } from "./components/store/UserProgressContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </UserProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;
