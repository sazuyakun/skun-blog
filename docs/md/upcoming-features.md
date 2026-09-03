# Upcoming Features

The following discussion with an agent describes the planned serverless API approach for creating blog posts:

````text
Think of a **serverless API** as:

> “A tiny piece of backend code that only wakes up when someone calls it.”

Normally, with a traditional server, you have a machine/process running all the time:

```text
Your phone
   ↓
Your server running 24/7
   ↓
GitHub API
```

With serverless:

```text
Your phone
   ↓
/api/create-post
   ↓
Cloud runs one function
   ↓
Function talks to GitHub
   ↓
Function stops
```

You don't manage the server itself. Platforms like **Vercel, Netlify, Cloudflare, AWS Lambda** handle that part.

For your blog example, imagine your PWA sends this:

```json
{
  "title": "Thoughts from the metro",
  "content": "Today I was thinking..."
}
```

to:

```text
POST /api/create-post
```

Your serverless function might conceptually do:

```js
createPost(request) {
  get title and content

  create markdown file

  use secret GitHub token

  commit file to repo

  return "done"
}
```

The key reason you need it is **secrets**.

If your phone/browser directly talks to GitHub like this:

```text
PWA
 ├── your code
 └── GitHub secret token ❌
```

anyone could potentially inspect the website and steal that token.

Instead:

```text
PWA
   ↓
Serverless API
   ├── SECRET_GITHUB_TOKEN ✅
   ↓
GitHub
```

The browser never sees the secret.

A useful mental model is:

**Frontend = receptionist**
It takes your input.

**Serverless API = employee in the back room**
It has access to private keys and performs the actual work.

**GitHub = filing cabinet**
The employee puts your new `.md` file into it.

And "serverless" is slightly misleading: **there are still servers. You just don't manage them.** The hosting provider handles starting them, scaling them, and shutting them down.

For your blog, one serverless function could genuinely be almost the entire backend:

```text
POST /api/post
```

It receives your Markdown → authenticates you → commits it into `/blog/` → finished.
````
