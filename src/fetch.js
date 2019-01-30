const host = 'http://0.0.0.0:5001'
const {stringify} = require('query-string')
import fetch from 'node-fetch'

function post(uri, body) {
    return new Promise(resolve => {
        fetch(host + uri, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(json => resolve(json));
    })
}

function get(uri, query) {
    if (query) {
        uri = `${uri}?${stringify(query)}`
    }
    console.log(query);
    return new Promise(resolve => {
        fetch(host + uri)
            .then(res => res.json())
            .then(json => resolve(json));
    })
}

module.exports = {
    post,
    get
}