---
sidebar_position: 2
---

# Development Roadmap

:::caution
This documentation is under development and may be incomplete.
:::

The development roadmap is designed explicitly with the end-user in mind and
to encourage cooperation with them to solicit feedback during the early 
development phase of this project.

## Milestone 1

Milestone 1 is aimed at delivering a functioning prototype that can be used in 
a controlled environment but with the goal to allow one or more member(s) of 
the scientific research groups to participate in a collaborative effort with 
the development team.


Milestone 1 delivers the following from the list of [features](/docs/overview/features):

1. Allows ~~end-users~~ (administrators on end-users' behalf) to bundle multiple software packages into a single environment.
1. Allows end-users to use an environment with a command line interface interactively
1. Allows end-users to use an environment with a command line interface in a non-interactive script

This approach requires the system to be built from the bottom of the stack
up and thus only needs the following components to be functional:

- SoftPack Builder
- SoftPack Deploy Agent (limited functionality)
- SoftPack Artifacts repository

Since environment creation is only supported by administrators on end-users' 
behalf, a fully functional CLI is not required at Milestone 1.

## Milestone 2

Milestone 2 will be defined as Milestone 1 approaches delivery.
