const baseURL = 'https://elastic.pushshift.io'
const submissionURL = baseURL + '/rs/submissions/_search?source='
const commentURL = baseURL + '/rc/comments/_search?source='
const commentIDsURL = 'https://api.pushshift.io/reddit/submission/comment_ids/'

import { json, toBase10, toBase36 } from 'utils'

export const getCommentIDs = threadID => {
	return fetch(commentIDsURL + threadID)
	.then(json)
	.then(results => {
		return results.data
	})
}

export const test = threadID => {
	const elasticQuery = {
		query: {
			term: {
				link_id: toBase10(threadID)
			}
		},
		size: 10000,
	}

	return fetch(commentURL + JSON.stringify(elasticQuery))
	.then(json)
	.then(results => {
		results.hits.hits.map(result => {
			result._source.link_id = toBase36(result._source.link_id ) 
			result._source.parent_id = toBase36(result._source.parent_id)
			result._source.id = toBase36(result._id)

			return result._source
		})
	})
}