import { gql } from '@apollo/client';

// TODO: rename
export const GET_ALL_SPACE_CENTERS = gql`
    query GetFirstPageSpaceCenters {
        spaceCenters(page: 1, pageSize: 9) {
            nodes {
                id
                name
                description
            }
        }
    }
`;

export const GET_DEPARTURE_DETAILS_FROM_PLANET = gql`
    query GetDestinationsFromPlanet($from: ID!) {
        flights(from: $from) {
            nodes {
                id
                departureAt
                launchSite {
                    id
                }
                landingSite {
                    planet {
                        id
                        name
                    }
                }
            }
            pagination {
                total
            }
        }
    }
`;

export const GET_NUMBER_OF_FLIGHTS = gql`
    query GetNumberOfFlightsFromSpaceCenter($from: ID!) {
        flights(from: $from) {
            pagination {
                total
            }
        }
    }
`;
// query GetFirstPageSpaceCenters {
//     flights(from: "2", pageSize: 1000) {
//     		pagination {
//             total
//         }
//     }
// }