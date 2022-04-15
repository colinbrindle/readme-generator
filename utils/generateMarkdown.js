// Function to return a string depending on licenses selected
function displayLicense(array){
  const licenses = array;

  if (licenses === null) {
    return `No licenses available for this application.`;
  } else if (licenses.length === 1){
    return `The following license applies to this application: ${licenses[0]}.`
  }
  else {
    return `The following licenses apply to this application: ${displayArray(licenses)}`
  }
}

// Function to return array of communication methods as a string with comma separators
function displayArray(array){
  // if the array only has one element, return that element without commas, otherwise return a string of elements with comma separators
  if(array.length === 1){
    return array[0];
  }
  
  return `${array.join(", ")}`;
}

// Function to generate markdown with user inputs
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
  ${displayLicense(data.licenses)}

  ## **Tests**
  ${data.tests}

  ## **Contact**
  Feel free to contact me through the following method(s) if you like what you see and/or have any questions regarding this application: ${displayArray(data.communication)}.

  - My GitHub username is: [${data.github}](https://github.com/${data.github})
  - My email is: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;