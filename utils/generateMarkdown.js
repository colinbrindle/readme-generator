// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to return array of communication methods as a string with comma separators
function listCommunication(array){
  // if the array only has one element, return that element without commas, otherwise return a string of elements with comma separators
  if(array.length === 1){
    return array[0];
  }
  
  return `${array.join(", ")}`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## **Description**
  ${data.description}
  
  ## **Table of Contents**
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Licenses](#licenses)
  - [Tests](#tests)
  - [Contact](#contact)

  ## **Installation**
  ${data.installation}

  ## **Usage**
  ${data.usage}

  ## **Contributions**
  ${data.contribution}

  ## **Licenses**
  ${data.licenses}

  ## **Tests**
  ${data.tests}

  ## **Contact**
  Feel free to contact me through the following methods if you like what you see and/or have any questions regarding this application: ${listCommunication(data.communication)}.

  - My GitHub username is: [${data.github}](https://github.com/${data.github})
  - My email is: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;