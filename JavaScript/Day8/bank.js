class PaymentMethos {
  constructor(amount) {
    this.amount = amount;
  }
  pay() {
    console.log("hello");
  }
}
class CreditCard extends PaymentMethos{
    constructor(amount,cardNumber){
        super(amount)
        this.cardNumber=cardNumber
    }
    pay(){
        console.log(
            `Processing credit card payment$${this.amount}for card ending in${this.cardNumber}`
        )
    }
}
class PayPal extends PaymentMethos{
    constructor(amount,email){
        super(amount)
        this.email=email
    }
    pay(){
        console.log(
            `Processing PayPal Payment$${this.amount} for email ${this.email}`
        )
    }
}
class BankTransfer{
    constructor(amount,bankDetails){
        super(amount)
        this.bankDetails=bankDetails;
    }
    pay(){
        console.log(
            `Initiating bank transfer of ${this,amount}to account number ending in${this.bankDetails}`
        )
    }
}
const cardPayment=new CreditCard(150.75,"127612431912")
const payPal=new PayPal(45.0,"admin@email.com")
const transferPayment=new BankTransfer(2000.0,{
    bankName:"Ranjit Bichukale",
    accountNumber:"932577001"
})

console.log("----- Processing Payment")
cardPayment.pay()
payPal.pay()
transferPayment.pay()