## Booking zen ![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge)

<p align="center">
  <img src="https://t.ctcdn.com.br/9ZGcxXfkcroU6zyHl6ydiMJF2Yo=/55x0:966x513/911x512/smart/i393535.png"/>
</p>

### Architecture and technologies used 

<p align="center">
  <img src="https://i.imgur.com/L9qvoev.png"/>
</p>

#### Client 
Client was made in NextJS, for his perfomance in React projects and for easy, faster and simple deploy and CI in [Vercel](https://vercel.com/).

The methodology choose for creation component was [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)

The responsiveness was done with CSS Grid, CSS flexbox and media querys

#### Api

Api was made with [Apollo server](https://www.apollographql.com/docs/), to simplify the interaction with graphql. GraphQL was chosen for been multiple platforms and simplifying integration with api and complex states

#### Deploy
For deploy was choose [Vercel](https://vercel.com) because he works well with NextJS, in addition to simplified deploy and ci, it has good cache performance management with Nextjs


#### Instructions
The first step, you must log into vercel account to run the project with the commands below
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

Open [http://localhost:3000](http://localhost:3000)  🎉
