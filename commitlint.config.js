// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// config: Represents modifications to configuration files or settings
// docs: Documentation only changes
// env: Represents modifications to environment-specific settings or variables
// feat: A new feature
// fix: A bug fix
// lint: Denotes changes or fixes related to code linting or static analysis rules
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// release: Indicates changes related to versioning, tagging, or release management
// revert: A commit that reverts a previous commit
// security: Represents security-related changes or fixes
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// upgrade: Denotes upgrades or updates to dependencies, libraries, or frameworks
// wip: Indicates a "work in progress" commit, often used for temporary or incomplete changes

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'ci',
                'config',
                'docs',
                'env',
                'feat',
                'fix',
                'lint',
                'perf',
                'refactor',
                'release',
                'revert',
                'security',
                'style',
                'test',
                'upgrade',
                'wip',
            ],
        ],
    },
};
