import fs from 'fs/promises';
import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';

const packageJsonPath = './package.json';
const initFlagPath = './.initialized';
const readmePath = './README.md';

// Function to generate professional README content
function generateReadmeContent(name, description, license) {
    return `# ${name}

${description}

## Overview

This document provides comprehensive information about the ${name} project, including setup instructions, usage guidelines, and contribution procedures.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

These instructions will help you set up a copy of the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

\`\`\`bash
node -v  # Requires v14 or higher
npm -v   # Requires v6 or higher
\`\`\`

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/${name}.git
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd ${name}
\`\`\`

3. Install dependencies:
\`\`\`bash
npm install
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## Usage

Here's how to use this project effectively:

\`\`\`javascript
// Example code and usage instructions will be added here
\`\`\`

## Documentation

For detailed documentation, please refer to the following resources:

- [API Documentation](docs/api.md)
- [Configuration Guide](docs/configuration.md)
- [Troubleshooting Guide](docs/troubleshooting.md)

## Contributing

We welcome contributions to ${name}! Here's how you can help:

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the ${license} License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/yourusername/${name}](https://github.com/yourusername/${name})

## Acknowledgments

* Thanks to all contributors who have helped shape ${name}
* Special thanks to the open source community
* Inspired by best practices in modern software development

---

Made with ❤️ and JavaScript
`;
}

// Update README file function
async function updateReadme(name, description, license) {
    try {
        // Generate and write new README content
        const newContent = generateReadmeContent(name, description, license);
        await fs.writeFile(readmePath, newContent, 'utf8');
        console.log(chalk.green('✓ README.md successfully updated'));
        return true;
    } catch (error) {
        console.error(chalk.red('Error updating README.md:', error));
        return false;
    }
}

// Update package.json function
async function updatePackageJson(name, description, license) {
    try {
        const data = await fs.readFile(packageJsonPath, 'utf8');
        const packageData = JSON.parse(data);
        packageData.name = name;
        packageData.description = description;
        packageData.license = license;
        await fs.writeFile(
            packageJsonPath,
            JSON.stringify(packageData, null, 2)
        );
        console.log(chalk.green('✓ package.json successfully updated'));
        return true;
    } catch (error) {
        console.error(chalk.red('Error updating package.json:', error));
        return false;
    }
}

async function main() {
    try {
        // Check if already initialized
        if (
            await fs
                .access(initFlagPath)
                .then(() => true)
                .catch(() => false)
        ) {
            return;
        }

        // Welcome message
        console.log(
            boxen(
                chalk.blue.bold('Welcome to your new project template!') +
                    "\nLet's set up your project details.",
                { padding: 1, margin: 1, borderStyle: 'double' }
            )
        );

        // Gather project information
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your project name?',
                default: 'my-project',
                validate: (input) =>
                    input.trim() ? true : 'Project name cannot be empty!',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your project description?',
                default: 'A modern JavaScript project',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license for your project:',
                choices: [
                    {
                        name: 'None - No license (All Rights Reserved)',
                        value: 'UNLICENSED',
                    },
                    {
                        name: 'MIT - Permissive license allowing commercial use, modification, and distribution.',
                        value: 'MIT',
                    },
                    {
                        name: 'Apache-2.0 - Similar to MIT but with patent protection.',
                        value: 'Apache-2.0',
                    },
                    {
                        name: 'GPL-3.0 - Strong copyleft license requiring derived works to also be open source.',
                        value: 'GPL-3.0',
                    },
                    {
                        name: 'BSD-2-Clause - Simplified permissive license with attribution.',
                        value: 'BSD-2-Clause',
                    },
                    {
                        name: 'BSD-3-Clause - Similar to BSD-2-Clause but with additional restrictions.',
                        value: 'BSD-3-Clause',
                    },
                    {
                        name: 'MPL-2.0 - Mozilla Public License allowing open and proprietary combinations.',
                        value: 'MPL-2.0',
                    },
                    {
                        name: 'LGPL-3.0 - Lesser GPL for libraries allowing linking with proprietary software.',
                        value: 'LGPL-3.0',
                    },
                    {
                        name: 'Proprietary - A closed-source license for private/commercial use.',
                        value: 'Proprietary',
                    },
                ],
                default: 'MIT',
            },
        ]);

        const { name, description, license } = answers;

        // Update files
        const [readmeUpdated, packageJsonUpdated] = await Promise.all([
            updateReadme(name, description, license),
            updatePackageJson(name, description, license),
        ]);

        if (!readmeUpdated || !packageJsonUpdated) {
            console.error(
                chalk.red(
                    'Failed to update some files. Please check the errors above.'
                )
            );
            return;
        }

        // Create initialization flag
        await fs.writeFile(initFlagPath, '');

        // Success message
        console.log(
            boxen(
                chalk.green('✨ Project successfully initialized!') +
                    `\n📦 Name: ${chalk.blue(name)}` +
                    `\n📝 Description: ${chalk.blue(description)}` +
                    `\n⚖️  License: ${chalk.blue(license)}`,
                { padding: 1, margin: 1, borderStyle: 'round' }
            )
        );
    } catch (error) {
        console.error(chalk.red('An unexpected error occurred:', error));
        process.exit(1);
    }
}

main().catch((error) => {
    console.error(chalk.red('Fatal error:', error));
    process.exit(1);
});
