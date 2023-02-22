---
sidebar_position: 1
---

# Development Standards

:::caution
This documentation is under development and may be incomplete.
:::

## Development Process

### Importance of Software Design

Software design is part of the development process and a key ingredient in the
planning phase. It's crucial to take the design step seriously as it dictates 
the architecture, modules, interfaces, data and overall organization of the 
system. 

A good software design:

- Facilitates maintenance and modification of the code
- Improves code readability and reduces complexity
- Enables efficient and effective development and testing of the software
- Supports reusability of components and improves scalability
- Improves overall system quality and performance 
 
Software design plays a crucial role in the success of a software project as it 
lays the foundation for a well-structured, maintainable, and efficient 
software system.

### Code Readability

In most development organizations a large portion of your time will be spent
reading code that either you or others have written. The actual amount of time
spent writing new code is considerably less than what most people realize. Code
readability is therefore paramount and should not be sacrificed in favor of
completing a task quickly.

### Diagrams should reflect reality

Create diagram that convey some meaning to the reader. Simply creating diagrams
with colorful pretty boxes adds little value.  Diagrams should provide a visual 
representation of the software system's structure and organization, which can 
help in communicating the design decisions and technical concepts to other 
members of your team. They also serve as a blueprint for the development of a 
software system, enabling other members of your team to understand the 
relationships between different components and make informed decisions about 
the system's design and future evolution. Additionally, software architecture 
diagrams can aid in identifying potential issues early in the development 
process, improving the quality of the end product and reducing the time and 
cost of making changes later on.

Here's an example of a poorly drawn diagram from [@simonbrown](https://twitter.com/simonbrown):

[If software developers created building architecture diagrams...](https://twitter.com/simonbrown/status/1042487726191337474)

<img src="https://pbs.twimg.com/media/Dneo4hUXoAYGVqZ.jpg" width="600" />


### Twelve-Factor App methodology

This project adheres to the twelve-factor app methodology as defined in [The Twelve-Factor App](https://12factor.net)

1. **Codebase**: [One codebase tracked in revision control, many deploys](https://12factor.net/codebase)
1. **Dependencies**: [Explicitly declare and isolate dependencies](https://12factor.net/dependencies)
1. **Config**: [Store config in the environment](https://12factor.net/config)
1. **Backing services**: [Treat backing services as attached resources](https://12factor.net/backing-services)
1. **Build, release, run**: [Strictly separate build and run stages](https://12factor.net/build-release-run)
1. **Processes**: [Execute the app as one or more stateless processes](https://12factor.net/processes)
1. **Port binding**: [Export services via port binding](https://12factor.net/port-binding)
1. **Concurrency**: [Scale out via the process model](https://12factor.net/concurrency)
1. **Disposability**: [Maximize robustness with fast startup and graceful shutdown](https://12factor.net/disposability)
1. **Dev/prod parity**: [Keep development, staging, and production as similar as possible](https://12factor.net/dev-prod-parity)
1. **Logs**: [Treat logs as event streams](https://12factor.net/logs)
1. **Admin processes**: [Run admin/management tasks as one-off processes](https://12factor.net/admin-processes)

## Pre-commit Hooks

Pre-commit hooks are used to ensure code-formatting and strict type checking is 
enforced prior to changes being committed to the code repository. This 
reduces the time spent in code reviews where the focus should be on logic and 
structure. 

## Code Reviews

All commits to main, release, or hotfix branches require code reviews and 
approval.

## Coding Guidelines

### Issue Tracker

Issue tracker in GitHub exists for a reason. Resist the temptation to push
changes to the repository willy-nilly unless there an issue associated with it.
Each commit should include an issue number to ensure change logs can be 
generated automatically when a new version is released.

### Zen of Python

Follow the [Zen of Python](https://peps.python.org/pep-0020/#the-zen-of-python)
even if you're writing code in another language.

- Beautiful is better than ugly.
- Explicit is better than implicit.
- Simple is better than complex.
- Complex is better than complicated.
- Flat is better than nested.
- Sparse is better than dense.
- Readability counts.
- Special cases aren't special enough to break the rules.
- Although practicality beats purity.
- Errors should never pass silently.
- Unless explicitly silenced.
- In the face of ambiguity, refuse the temptation to guess.
- There should be one-- and preferably only one --obvious way to do it.
- Although that way may not be obvious at first unless you're Dutch.
- Now is better than never.
- Although never is often better than *right* now.
- If the implementation is hard to explain, it's a bad idea.
- If the implementation is easy to explain, it may be a good idea.
- Namespaces are one honking great idea -- let's do more of those!

### Style Guides

#### Python Style Guide

Follow the [PEP 8](https://pep8.org) guidelines and incorporate automatic 
formatting and linting tools as part of your pre-commit checks. 
A poorly formatted code should never be allowed to be committed to the code 
repository.

For creating python packages, use templates that incorporate many code quality 
tools and configure pre-commit hooks. Here's one such example: [altaf-ali/cookiecutter-pypackage](https://altaf-ali.github.io/cookiecutter-pypackage/) 

References:
- [PEP 8](https://www.python.org/dev/peps/pep-0008)
- [Google Python Style Guide](https://google.github.io/styleguide/pyguide.html)


#### R Style Guide

Follow the [tidyverse style guide](https://style.tidyverse.org) unless there's
a valid justification for not doing so.

References:

- [tidyverse style guide](https://style.tidyverse.org)
