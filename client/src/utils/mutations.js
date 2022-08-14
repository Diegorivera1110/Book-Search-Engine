const { gql } = require('@apollo/client');

export const LOGIN_USER = gql`
mutation login($email:)
`