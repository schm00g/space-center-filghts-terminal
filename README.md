# Space Center Flights Terminal
This application makes it easy to see how to go from Planet Earth to another planet. From there all available flights will be visible on each destination planet. Travel safely earthling 🚀

### Server
In order to start the containers, run the following in a terminal:

```sh
$ docker-compose up -d
```

### Front-end

Install the dependencies with 

```sh
$ npm install
```

Then run 
```sh
$ npm run start
```

Runs the app in the local development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Details
This project has been scaffolded using `create-react-app`. 

For the GraphQL service `apollo-grapql` has been imported. 

For styling and layout `styled-components` has been used. This allows the use of CSS in javascript files. For some added transitions and effects `framer-motion` to smoothen the UI was used. 

Future work. Add greater test coverage: unit, integration, end-to-end. Make design and layout responsive for different device sizes. 


### Play with Demo on Vercel

[Here](https://space-center-filghts-terminal.vercel.app/)
