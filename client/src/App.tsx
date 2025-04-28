import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import LandingPageSimple from "@/pages/landing-page-simple";
import LoginPageSimple from "@/pages/login-page-simple";
import RegisterPageSimple from "@/pages/register-page-simple";
import HomePageSimple from "@/pages/home-page-simple";
import ProductDetailSimple from "@/pages/product-detail-simple";
import CartPageSimple from "@/pages/cart-page-simple";
import CheckoutPageSimple from "@/pages/checkout-page-simple";
import MomoPaymentPageSimple from "@/pages/momo-payment-page-simple";
import PaymentConfirmationPageSimple from "@/pages/payment-confirmation-page-simple";
import AccountPageSimple from "@/pages/account-page-simple";
import CardsPage from "@/pages/cards-page";
import HomePageExact from "@/pages/home-page-exact";
import CardsViewPage from "@/pages/cards-view-page";

// Simple version without auth for testing initial functionality
function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPageSimple} />
      <Route path="/login" component={LoginPageSimple} />
      <Route path="/register" component={RegisterPageSimple} />
      <Route path="/home" component={HomePageSimple} />
      <Route path="/product/:id" component={ProductDetailSimple} />
      <Route path="/cart" component={CartPageSimple} />
      <Route path="/checkout" component={CheckoutPageSimple} />
      <Route path="/payment/momo" component={MomoPaymentPageSimple} />
      <Route path="/payment/confirmation" component={PaymentConfirmationPageSimple} />
      <Route path="/account" component={AccountPageSimple} />
      <Route path="/cards" component={CardsPage} />
      <Route path="/cards-view" component={CardsViewPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;