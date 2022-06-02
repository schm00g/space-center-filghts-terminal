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

### Some Details
This project has been scaffolded using `create-react-app`. 

For the GraphQL service `apollo-grapql` has been imported. 

For styling and layout `styled-components` has been used. This allows the use of CSS in javascript files. 

For some added transitions and effects `framer-motion` to smoothen the UI was used. 

Light weight icon set `react-icons`.

### Future Steps
Get some user testing and feedback - to focus further iterations.

Fix side panel toggle logic.

Refine GraphQL query choices and structure - to better performance and reduce repeated refetching.

Add test coverage: unit (Jest), integration, end-to-end (Cypress). Make design and layout responsive for different device sizes. 

Consider adding state management like Redux to manage increased complexity of state. Alternatively use caching that is built in to `apollo-client` V3 as a state management solution. The benefit of this is that it is ready to go once `apollo-client` is in use. Apollo client under-the-hood normalises and stores the results of each GraphQL queries in-memory locally, using `InMemoryCache` flat lookup. Currently I am using `useState` and passing as props to components. As applications scale more robust state management is required as a single "source-of-truth" thus avoiding managing multiple versions of state in different locations. 

Refine transitions and layout styling (currently a little bit jarring).


### Play with Demo on Vercel

[Here](https://space-center-filghts-terminal.vercel.app/)
