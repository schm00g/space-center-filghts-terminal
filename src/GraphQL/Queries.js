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
export const GET_DESTINATIONS_FROM_PLANET = gql`
    query GetDestinationsFromPlanet($from: Int!) {
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