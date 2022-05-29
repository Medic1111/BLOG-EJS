# PROJECT: PERSONAL BLOG

# TECHNOLOGIES/TOOLS:

- NodeJS
- Express
- Body-Parser
- CSS
- EJS
- Lodash
- Mongoose
- MongoDB
- Git Ignore
- Heroku
- Nodemon

# APPROACH:

- Challenge based instead of user story
- One step at a time

# STARTING:

# CHALLENGE ONE:

- Visiting Localhost 3000 will have an h1 that says home

# CHALLENGE TWO:

- Deliver Lorem Content in the home page

# CHALLENGE THREE:

- Create header and footer partials

# CHALLENGE FOUR:

- Store partials inside a partials folder location inside views

# CHALLENGE FIVE:

- Create two routes: about and contact
- Both will render the header and footer

# CHALLENGE SIX:

- Create Navbar with links to home, about and contact, and make it functional

# CHALLENGE SEVEN:

- Create a Route to Compose that renders the header and the footer
- It also render an input type text and a submit button

# CHALLENGE EIGHT:

- Log the input on the compose page

# CHALLENGE NINE:

- Add a text area to the compose page
- Log the info added to the text area

# CHALLENGE TEN:

- Create an object and store both the title and the content in it.
- Log the obj.

# CHALLENGE ELEVEN:

- Add the obj inside an array as a global variable
- Redirect compose post to root

# CHALLENGE TWELVE:

- Log the global array IN the root

# CHALLENGE THIRTEEN:

- Go to compose and create 3 tests. Log all (each) title inside the array.

# CHALLENGE FOURTEEN:

- If for loop was used, use forEach

# CHALLENGE FIFTEEN:

- Instead of logging...render all content to the root page

# CHALLENGE SIXTEEN:

- Use params to create a dynamic page that will render each individual post as requested
- Do not create separate pages...create a single page that will adapt to each post dynamically
- Log the params

# CHALLENGE SEVENTEEN:

- Restart the server
- Compose a test with title Test
- If we travel to /Test, we get a log saying match found

# CHALLENGE EIGHTEEN:

- Use lodash to make the params case insensitive
- Also implement kabob case. (- between mult words)

# CHALLENGE NINETEEN:

- Instead of logging... render the ACTUAL dynamic page.
- Page will render ONLY that particular page

# CHALLENGE TWENTY:

- Substring Truncate the home posts to 100 chars for the paragraph

# CHALLENGE TWENTY ONE:

- Add a read more to each content on the home page and redirects that to the dynamic page

# CHALLENGE TWENTY TWO:

- Connect Mongo and mongoose while creating DATABASE

# CHALLENGE TWENTY THREE:

- Create a Schema
- Create a Model

# CHALLENGE TWENTY FOUR:

- Make new posts a new instance of the model

# CHALLENGE TWENTY FIVE:

- Read the new docs and render them

# CHALLENGE TWENTY SIX:

- Change href for read more to catch by id
- Change the params in the dynamic page to access id

# CHALLENGE TWENTY SEVEN:

- MongoAtlas: Create an account
- Create a cluster
- Connect with the mongo Shell
- Once connected, Connect to the app by replacing the mongoose.connect(local host) with the link generated.
- Test

# CHALLENGE TWENTY EIGHT:

- Deploy with heroku
- Procfile
- Dynamic port
- Add:
  "engines": {
  "node": "17.4.0"
  },

  under License

Proceed with the normal way of deploying on heroku
without forgetting the gitignore and the git commit
