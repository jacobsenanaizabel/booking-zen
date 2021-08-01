## Booking zen ![Vercel](http://therealsujitk-vercel-badge.vercel.app/?app=therealsujitk-vercel-badge)


![image](https://img.freepik.com/free-vector/woman-meditating-nature-leaves_113065-27.jpg?size=626&ext=jpg)

### Architecture and technologies used 

![image](https://i.imgur.com/L9qvoev.png)


####Client 
Client was made in NextJS, for his perfomance in React projects and for easy, faster and simple deploy and CI in [Vercel](https://vercel.com/).

The methodology choose for creation component was [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)

The responsiveness was done with CSS Grid, CSS flexbox and media querys

####Api

Api was made with [Apollo server](https://www.apollographql.com/docs/), to simplify the interaction with graphql. GraphQL was chosen for been multiple platforms and simplifying integration with api and complex states

####Deploy
For deploy was choose [Vercel](https://vercel.com) because he works well with NextJS, in addition to simplified deploy and ci, it has good cache performance management with Nextjs


####Instructions
The first step, you must log into vercel account to run the project with the commands below
```bash
npx vercel login
```
Depois da confirmação de e-mail , podemos rodar 
```bash
npx vercel --prod
```

After there you can run local with 
```bash
start:dev
```

Open [http://localhost:3000](http://localhost:3000)  🎉