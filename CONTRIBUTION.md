# Contributing

The LoginRadius SSO Conector is [MIT](LICENSE) licensed and accepts contributions via GitHub pull requests. This document outlines some of the conventions on development workflow, commit message formatting, contact points and other resources to make it easier to get your contribution accepted.

## Getting Started

- Fork the repository on GitHub
- Make sure that the code can build via `npm run build`.
- Do not include the built files (the output of `npm run build`), the LoginRadius team will handle building the files and setting the version when the next release is scheduled.

## Contribution Flow

This is a rough outline of what a contributor's workflow looks like:

- Create a separate branch from `dev` branch to base your work.
- Create a new folder for new Connector 
- Make commits of logical units.
- Make sure your commit messages are in the proper format (see below).
- Submit a pull request to the original repository.
- **Please ensure that you raise a PR on `dev` branch instead of `master`.**

#### Commit Messages

Please follow the below format while writing commit messages

```
  Verb: (ie. ADD, UPDATE, FIX)
  description: A description of your changes.
```

Thanks for your contributions!


## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to make participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Responsibilities

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.