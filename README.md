## Booking zen ![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge)

### Demo 
https://booking-zen.vercel.app/
 [![Demo Doccou alpha](https://i.imgur.com/VMfiF5Q.gif)](https://i.imgur.com/VMfiF5Q.mp4)
 

### Architecture and technologies used 

<p align="center">
  <img src="https://i.imgur.com/L9qvoev.png"/>
</p>

#### Client 
Client was made in NextJS, for it's perfomance in React projects and for easy, faster and simple deploy and CI in [Vercel](https://vercel.com/).

The methodology choosen for the component creation was [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)

The responsive design was made with CSS Grid, CSS flexbox and media querys

#### Api

Api was made with [Apollo server](https://www.apollographql.com/docs/), to simplify the interaction with graphql. GraphQL was chosen for been multiplatform and simplify the integration with api and complex states

#### Deploy
For the deploy, was choosen [Vercel](https://vercel.com) because it works well with NextJS, in addition to simplified deploy and ci, it has a good cache performance management with Nextjs


#### Instructions
The first step the run the application is to log into vercel's account to run the project with the commands below
```bash
npx vercel login
```
you will have to enter the address used to sign up to Vercel, a confirmation email will be sent and once verified it will confirm in the terminal. Once done we upload:
```bash
npx vercel --prod
```
Accept all of the default options and, once uploaded, Vercel will confirm it has built correctly and will provide your application’s URL. 


After there you can run local with 
```bash
yarn install
yarn run start:dev
```

**IMPORTANT:** For booking session you must login with test user oauthtusertest@gmail.com
that is included in the accepted user list of the test Application of Google developers 

Open [http://localhost:3000](http://localhost:3000)  🎉
