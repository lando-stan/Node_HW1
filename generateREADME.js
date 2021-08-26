function generateReadme(answers) {
  return `
# Node_HW1 - ${answers.projectName}

## [Table of Contents]

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Description](#description)
- [Built With](#built-with)
- [Station](#station)
- [Usage](#usage)
- [License](#license)
- [Acknowlesgements](#acknowledgements)
- [Installation](#installation)

- [Preview](#preview)

### [About The Project]
* Using Node.js, generate a template README.md file with users input to generate the README.


### [Description]
* ${answers.homeworkInfo}
        
### [Station]
* ${answers.stationName}

### [Usage]
* ${answers.usageName}

### [Built With]
* [VScode](https://code.visualstudio.com/) - The editor of choice
* [Terminal](https://www.apple.com/) - What would we do without our bash 🤧?

       
        
### [License ]

[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)


*this has been licensed by ${answers.licenseName}!
</br> 

### [Acknowledgments]
* ${answers.ackName}

### [Installation]
* 1. Clone the repo

- sh
- git clone //:git@github.com:lando-stan/Node_HW1.git
- cd EDIT


* 2. Install dependencies

- inquirer


### [GitHub Username]
* ${answers.email}

### [Preview]
![demo](./Assets/demo1.gif)

Copyright lans! 2021 
`;
}

module.exports = generateReadme;
