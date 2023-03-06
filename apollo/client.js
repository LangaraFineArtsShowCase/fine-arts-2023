import { ApolloClient,InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}graphql`,
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: "no-cache",
        },
    }
});


// console.log(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL)
export default client