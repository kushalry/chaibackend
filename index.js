require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "kushalry",
    "id": 55235728,
    "node_id": "MDQ6VXNlcjU1MjM1NzI4",
    "avatar_url": "https://avatars.githubusercontent.com/u/55235728?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kushalry",
    "html_url": "https://github.com/kushalry",
    "followers_url": "https://api.github.com/users/kushalry/followers",
    "following_url": "https://api.github.com/users/kushalry/following{/other_user}",
    "gists_url": "https://api.github.com/users/kushalry/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kushalry/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kushalry/subscriptions",
    "organizations_url": "https://api.github.com/users/kushalry/orgs",
    "repos_url": "https://api.github.com/users/kushalry/repos",
    "events_url": "https://api.github.com/users/kushalry/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kushalry/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2019-09-12T09:56:31Z",
    "updated_at": "2024-09-02T19:28:14Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur codes,</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Chai aur Codes</h2>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Chai aur Codes</h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})