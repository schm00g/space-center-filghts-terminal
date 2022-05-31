import { gql } from '@apollo/client';

export const GET_ALL_SPACE_CENTERS = gql`
    query GetFirstPageSpaceCenters {
        spaceCenters(page: 1, pageSize: 9) {
            nodes {
                id
                name
            }
        }
    }
`;

// TODO: rename
export const GET_DEPARTURE_DETAILS_FROM_PLANET = gql`
    query GetDestinationsFromPlanet($from: ID!) {
        flights(from: $from) {
            nodes {
                departureAt
                landingSite {
                    planet {
                        name
                    }
                }
            }
        }
    }
`;