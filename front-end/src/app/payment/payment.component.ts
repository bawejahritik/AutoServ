import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentHandler:any = null;

  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Payment Successful!');
      }
    });

    paymentHandler.open({
      name: 'Client',
      description: 'Request Pickup/Drop',
      amount: amount * 100
    });
  }

    invokeStripe() {
      if(!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement("script");
        script.id = "stripe-script";
        script.type = "text/javascript";
        script.src = "https://checkout.stripe.com/checkout.js";
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51KjrZNIAcXoUOtmQrw3c9izQzKpepcpDjkEEwzmLEmAyE2W4qpIsjnOD7GisoVWzsdZHL1gHfmOUli02wPn2pr9c00vWs07zLo',
            locale: 'auto',
            token: function (stripeToken: any) {
              console.log(stripeToken)
              alert('Payment was successfull!');
            }
          });
        }
        window.document.body.appendChild(script);
      }
    }

}
