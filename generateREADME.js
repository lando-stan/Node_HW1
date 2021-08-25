function generateReadme(answers) {
  return `
# Node_HW1 - ${answers.projectName}
Using Node.js, generate a template README.md file with users input to generate the README.

        
## Description    
${answers.homeworkName}
        
### Station
${answers.stationName}

### Usage
${answers.usageName}

### Built With
* [VScode](https://code.visualstudio.com/) - The editor of choice
* [Terminal](https://www.apple.com/) - What would we do without our bash 🤧?

       
        
### License 

[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)


this has been licensed by ${answers.licenseName}!
</br> 

### Acknowledgments
${answers.ackName}
        
### GitHub Username
${answers.email}

Copyright lans! 2021 
`;
}

module.exports = generateReadme;
