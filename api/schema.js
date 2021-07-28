import { gql } from 'apollo-server-micro';
import db from './db.json';

export const typeDefs = gql`
	type Freelancers {
		id: ID
		name: String
		img: String
		location: String
		profession: String
		price: String
		rating: Int
		ratingNumbers: String
		description: String
	}

	type Query {
		freelancers: [Freelancers]
	}
`
export const resolvers = {
	Query: {
		freelancers: () => db.freelancers,
	}
}