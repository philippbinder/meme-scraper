# meme-scraper
Generate memes

Create a cli (Command Line Interface) application that scrapes this website:

https://memegen-link-examples-upleveled.netlify.app/

...and saves the first 10 images into a folder called "memes" within the directory of the new project.

Avoid using an "image scraper" or "image downloader" library that does multiple steps at once for you - try to break the task down into smaller steps and select libraries as necessary for each step.

Make sure that the meme images are "ignored" in Git - they should not show up in your repository.

The program should be able to run multiple times without throwing an error.
TODOs

This is a placeholder for you to enter your todos.

Stretch goals:

Make the application create your own custom meme (eg. node index.js hello karl bender would download an image with the top text of "hello", the bottom text of "karl", with the meme image of Bender)
Add a nice progress indicator (either messages or a progress bar)

Acceptance Criteria

Preflight runs through without errors in your project
Link in your GitHub repo's About section: repl.it demo

Drone bot has been tagged and responded with a passing message

Correct GitHub commit message format (see Writing Commit Messages)

------------------------------------------------------------------------------------------------------------------------------

TODOS

Create a new repository on GitHub /br
Follow all remaining steps in the cheatsheet
Create a folder called memes
Make a .gitignore file with a line in it with the text memes
Access / navigate to the memegen link in our program
Access the HTML string in the response from the server
From the HTML string, get an array of strings, which will contain the URL of the image

Idea 1: Slice the string by certain identifiers
Idea 2: Look for the .jpg in the string

Extract the first 10 image URLs
Loop over the first 10 jpg image URLs

Access / navigate to the image URL
Save the response string in a variable
Make a file with the contents of the string

Maybe: check if any problems arise from rewriting the files
Preflight, commit, deploy, drone (everything in the cheatsheet)
