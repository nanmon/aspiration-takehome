# aspiration-takehome

Displays GitHub Topics related to term "react". The term searched can be changed by typing
in the search bar or clicking a related term name.

# Install

```
npm install
```

Set up your GitHub API Token and create a `.env.local` file as described in `.env.example` file

# Run

```
npm start
```

# Testing

```
npm test
```

# Dev Notes

Quick review of libs used

## Apollo

GraphQL client

## React Router

Client-side routing

## styled-components

CSS-in-JS

## Typescript

Just for preference, to avoid type errors

# Future Improvements

Here's a few improvements that can be made regarding code structuring, refactoring and additional features

## Code Structuring

- a directory for page components

## Refactoring

- move `<RelatedTopic>` into its own component file
- `<Search/>` component in a `<header>` tag

## Additional Features

- see related repositories
- login with GitHub
  - star a topic as logged user
  - star a repository as logged user
  - see if logged user has stared a topic/repository
