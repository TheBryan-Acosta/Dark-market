export const typeDefs = `#graphql

 type Item {
    id: String,
    icon: String,
    rarity: String
 }

 type SoldItem {
    id: ID!,
    item: String!,
    quantity: Int!,
    price_per_unit: Float!,
    price: Int!,
    created_at: String!,
    sold_at: String!
 }
 
 type Query {
    solditem: [SoldItem],
    items: [Item]

 }

`

// int, float, string, boolean, ID