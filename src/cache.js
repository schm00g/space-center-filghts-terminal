import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                spaceCenters: {
                    read(spaceCenters = "UNKNOWN"){
                        return spaceCenters;
                    }
                }
            }
        }
    }
});

// TODO: https://github.dev/apollographql/fullstack-tutorial/tree/main/final/client/src/componentshttps://github.dev/apollographql/fullstack-tutorial/tree/main/final/client/src/components