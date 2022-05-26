import { gql } from '@apollo/client';

export const GET_ALL_SPACE_CENTERS = gql`
    query GetFirstPageSpaceCenters {
        spaceCenters(page: 1) {
            nodes {
                id
                name
            }
        }
    }
`