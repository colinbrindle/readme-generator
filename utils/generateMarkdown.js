// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const testFunction = (x, y) => {
  return x + y;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(`function was called correctly. This is the title ${data.title}`);

  return `# ${data.title}
  
  ## **Description**
  ${data.description}
  
  ## Testing a function
  ${testFunction(1, 2)}`;
}

module.exports = generateMarkdown;
