//external packs
const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./generateREADME");

// Internal modules
const util = require("util");
// create writeFile function using promisify
const writeFileAsync = util.promisify(fs.writeFileSync);

//questionaire
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project name?",
    },
    {
      type: "input",
      name: "general info",
      message: "What is this homework about?",
    },
    {
      type: "input",
      name: "stationName",
      message: "Where is you development based out of",
    },
    {
      type: "input",
      name: "usageName",
      message: "What system are you on?",
    },
    {
      type: "input",
      name: "licenseName",
      message: "Input licenses",
    },
    {
      type: "input",
      name: "ackName",
      message: "Acknowledgements?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your GitHub Username",
    },
  ]);
};

//const generateContent = () => {

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated");
  });
}

// Main function
async function init() {
  try {
    // Prompt Inquirer questions
    const userResponses = await promptUser();
    console.log("Your responses: ", userResponses);
    console.log(
      "Thank you for your responses! Fetching your GitHub data next..."
    );

    // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
    console.log("Generating your README next...");
    const generateContent = generateREADME(userResponses);
    console.log(generateContent);

    // Write markdown to file
    await writeFileAsync("README.md", generateContent);
  } catch (error) {
    console.log(error);
  }
}

init();
