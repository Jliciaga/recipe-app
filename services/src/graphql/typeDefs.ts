//Type Definitions (Project Schema)
import { gql } from "apollo-server";

//Specifies the actual structure of our graphql api.
const typeDefs = gql`    
    type Chef {
        id: ID!
        name: String!
        restaurants: [Restaurant!]!
    }
    
    type Restaurant {
        id: ID!
        name: String!
    }
    
    type Query {
        chefs: [Chef!]
    }
`;

export default typeDefs;
