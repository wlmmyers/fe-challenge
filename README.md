# Front-End Challenge

For this challenge, you'll be building a simple page in an app displaying information about a property
using React components.  The page will have several sections, as seen in the rough structural
mock at [/property-page-mock.png](./property-page-mock.png).  The component structure and more detailed UI decisions are
up to you.  Obviously you're not interviewing to be a UI designer, so we won't be overly critical
of your stylistic choices :)

## The app

This app was made with [Create React App](https://github.com/facebook/create-react-app) to provide
a fast, simple bootstrapped app to work in. After cloning the source code from this repo,

Install the dependencies
```
npm i
```

Build/run the app
```
npm start
```

Please see the [Create React App Github page](https://github.com/facebook/create-react-app) for min
requirements if you're having trouble starting the app.  You should have at minimum node 8.16.0 and npm 6.10.1.

## The page sections

Please build:
1. A heading containing the [app logo](./images/site-logo.png), property street address, and property value
2. A photo of the property
3. A 2-column property details section with a label and value for each property detail item
   provided in the data object. On click of the "edit" CTA, form fields should appear inline,
   providing the ability to edit the values in place. "text" or "number" input types can be
   used for all the inputs.
4. A comparable properties section displaying property 'cards' inline, each with a
   photo and abbreviated propety details (the user should be able to scroll to the
   right and view more property cards). An actual mock is provided for this section,
   so please try to make this section match the mock.

As a bonus:
Make the page content size responsively to fit a mobile viewport width.

## The data

To populate the page, mock data has been provided in a JSON object located at [src/data.js](./src/data.js).

## Level of effort and finishing steps

This exercise is designed to take between 2 - 4 hours of time.  You'll submit your work to this repo,
so please commit your code and push it up when you're finished.  Reaching out to the
person who sent you this exercise via email will let us know that your code is ready to review.

