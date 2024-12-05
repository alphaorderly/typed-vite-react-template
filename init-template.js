import fs from 'fs';
import inquirer from 'inquirer';
import chalk from 'chalk';
import boxen from 'boxen';

const packageJsonPath = './package.json';
const initFlagPath = './.initialized';

// 이미 초기화된 경우 종료
if (fs.existsSync(initFlagPath)) {
    console.log(
        boxen(chalk.green('Template already initialized. Skipping setup.'), {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
        })
    );
    process.exit(0);
}

// 환영 메시지 출력
console.log(
    boxen(
        chalk.blue.bold('Welcome to your new project template!') +
            "\nLet's set up your project details.",
        { padding: 1, margin: 1, borderStyle: 'double' }
    )
);

// CLI 질문
inquirer
    .prompt([
        // 1. 패키지 이름
        {
            type: 'input',
            name: 'name',
            message: 'What is your project name?',
            default: 'my-project',
            validate: (input) =>
                input.trim() ? true : 'Project name cannot be empty!',
        },
        // 2. 프로젝트 설명
        {
            type: 'input',
            name: 'description',
            message: 'What is your project description?',
            default: 'A new awesome project',
        },
        // 3. 라이선스 선택
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: [
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
                {
                    name: 'None - No license (not recommended for public projects).',
                    value: 'None',
                },
            ],
            default: 'MIT',
        },
    ])
    .then((answers) => {
        const { name, description, license } = answers;

        // package.json 업데이트
        fs.readFile(packageJsonPath, 'utf8', (err, data) => {
            if (err) {
                console.error(chalk.red('Error reading package.json:', err));
                process.exit(1);
            }

            const packageData = JSON.parse(data);
            packageData.name = name;
            packageData.description = description;
            packageData.license = license;

            fs.writeFile(
                packageJsonPath,
                JSON.stringify(packageData, null, 2),
                (err) => {
                    if (err) {
                        console.error(
                            chalk.red('Error writing package.json:', err)
                        );
                        process.exit(1);
                    }

                    // 초기화 완료 상태 기록
                    fs.writeFile(initFlagPath, '', (err) => {
                        if (err) {
                            console.error(
                                chalk.red(
                                    'Error writing initialization flag:',
                                    err
                                )
                            );
                            process.exit(1);
                        }

                        console.log(
                            boxen(
                                chalk.green(
                                    'Project successfully initialized!'
                                ) +
                                    `\nName: ${name}` +
                                    `\nDescription: ${description}` +
                                    `\nLicense: ${license}`,
                                { padding: 1, margin: 1, borderStyle: 'round' }
                            )
                        );
                    });
                }
            );
        });
    })
    .catch((error) => {
        console.error(chalk.red('An error occurred:', error));
        process.exit(1);
    });
