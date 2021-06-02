# Sick-Fits-UI
An online clothing store with a focus on modern JavaScript and start-to-finish way of Full Stack Advanced React, Apollo, Next.js, GraphQL, Node.js.
Part of a premium traning course [FullStack Advanced React & GraphQL](https://advancedreact.com/) from [Wes Bos](https://github.com/wesbos)

## Setup
 
### Prerequisites
  - [Node.js](https://nodejs.org/en/)
  - [yarn](https://classic.yarnpkg.com/en/docs/install/)
 
### Installation
  - clone the report 
  - `yarn` for dependencies installation
  - Open http://localhost:7777

### Configuration
  - `touch .env.local` and set a variable NEXT_PUBLIC_STRIPE_KEY value to your own [stripe key](https://dashboard.stripe.com/test/developers)

## Development

### Commands
  - `yarn run dev` running locally
  - `yarn build` build for production

### Code Quality
  - eslint
  - Prettier
  - Install VSCode extensions recommendations

```
Structure

|   README.md
|   package.json
|   ...
|
|___ pages
|   | _document.js
|   | _app.js
|   | _index.js
|   | ...
|
|___ components
|   |
|   |___ styles
|       | ...
|
|___ lib
|    | ...
|    
|___ node_modules
|    | ...  
|
|___ .next
     | ...

```
