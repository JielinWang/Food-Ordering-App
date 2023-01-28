# Food-Ordering-App

## Description

This web application consists on a Food Ordering application where the admin can signIn  add product to the home page and track orders and products on the orderDetail page. Any custome can chosse their items to add to the cart, then make the payment by cash or Paypal.


furthermore for adding more featrues to this project I will create a user signUp and signIn page. so users can not only sign up as a regular users, but also track the food status on their own page and make a review of the food.

## Functionalities

- Admin Sign In
- Add dishes to your cart by selecting a quantity, size and extras
- Price and quantity shown in cart updates automatically
- Check out with cash or Paypal
- Create products by signing in as a restaurant admin
- Upload edit or delete your restaurant products
- Create, Edit and Delete Dishes. Including pictures, prices, size and extras

## How to Run

Fork this repository and follow the next steps

```
git clone git@github.com:JielinWang/Food-Ordering-App.git

cd Food-Ordering-APP

npm install
```

Before running `npm run dev`, you will need the following environment variables:

```
MONGO_URL = <This is your MongoDb URI>
ADMIN_USERNAME = <This is your ADMIN_USERNAME>
ADMIN_PASSWORD = <This is your ADMIN_PASSWORD>
TOKEN = <This is your TOKEN>
Paypal: client-id =  <This is your Paypal client-id>
```

Once you have set up the environment variables, you can safely run the application in your computer by running `npm run dev`. Then open [localhost:3000](http//localhost:3000) in your browser.

## Tech Specifications

- Framework: [NextJS](https://nextjs.org/)
- Hosting Service: [Vercel](https://vercel.com/)
- Database: [MongoDB](https://www.mongodb.com/)
- Secondary Storage: [cloudinary](https://imagekit.io/cloudinary-alternative/?utm_source=google&utm_medium=cpc&utm_campaign=cloudinary-alternative&gclid=Cj0KCQiAic6eBhCoARIsANlox86kTNO1sArCY3wVliofqjaKRWohCyZtsSzpvsMj2l2xeUYZDUF9nnkaAv-2EALw_wcB)
- Payment Getaway: [Stripe](https://stripe.com/)
- Authorization and Authentication: [cookies](https://auth0.com/docs/manage-users/cookies)

## Images

## Author
[Jielin Wang](https://www.linkedin.com/in/jielinwang-/)

## License

MIT License

## Images Sauce

[Robert's Pizza.com](https://www.robertspizzacompany.com)
