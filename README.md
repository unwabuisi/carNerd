# carNerd

![card](/public/assets/img/card.png)

Car Nerd is my mock version of a car buying marketplace. I wanted to challenge myself to see if I could put together a web application in two weeks that was analogous to a marketplace online. I was also extremely bored during my COVID-19 quarantine.

I used a [real dataset I found online](https://www.kaggle.com/jingbinxu/sample-of-car-data), it had a list of cars and relevant info a car buyer or auctioneer might need.

This web application uses the following technologies:

- [Handlebars](https://handlebarsjs.com/) (for HTML Server Side templating)
- MySQL Database (JawsDB with Heroku)
- [Sequelize ORM](https://sequelize.org/) / [Sequelize CLI](https://github.com/sequelize/cli) (for db migrations)
- NodeJS and Express Web Server
- [BCrypt](https://www.npmjs.com/package/bcrypt-nodejs) (for hashing and salting user passwords during signup)
- [PassportJS](http://www.passportjs.org/) (for authenticating users who log in)


You can view a live version [here](https://floating-ridge-71764.herokuapp.com/)

If you don't want to create an account, you can use the following credentials:
`
Username: test
Password: user
`

![demo](/public/assets/img/demo.gif)

On the app, you can:
- view all the cars for sale
- view each individual car and all of its info (MPG, RPM, Weight, etc.)
- Purchase a car
- See a list of cars you've purchased (on the homepage)