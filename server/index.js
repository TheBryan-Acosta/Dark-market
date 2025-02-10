import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './schema.js';

async function getSoldItem(item_id) {
    const url = "https://api.darkerdb.com/v1/market?has_sold=1"; //&id=" + item_id;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      return json;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getItems() {
    const url = "https://api.darkerdb.com/v1/search";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      return json;
    } catch (error) {
      console.error(error.message);
    }
  }


const resolvers = {
    Query: {
        async solditem(){
            const data = await getSoldItem('');
            return data.body;
        },
        async items(){
            const data = await getItems();
            console.log(data.body.length)
            return data.body;
        }
    }
}
// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers

})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000);