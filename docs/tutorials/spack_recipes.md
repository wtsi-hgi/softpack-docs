---
sidebar_position: 2
---

# Adding Spack Recipes

SoftPack relies on Spack recipes for installation of software, but when a recipe
does not already exist, it will need to be created.

## Overview

These instructions are intended as a guide towards adding custom Spack
installation recipes to the SoftPack recipe repo.

It is recommended that those following these instructions have some familiarity
with a unix-like terminal interface, and, preferably, experience building
software in multiple languages.

## Setup

The first step is to clone and register the existing [SoftPack Spack
Repo](https://github.com/wtsi-hgi/spack-repo/).

Log in to the SoftPack Builder VM where you wish to add the package and run the
following command:

```
git clone https://github.com/wtsi-hgi/spack-repo/
```

NB: A custom repo can be used, but the
`/opt/softpack/templates/container/singularity_build.def` template file will
need to be modified to either add a new custom repo, or replace the existing
one.

Spack is not installed in a PATH directory, so you will need to modify the PATH
variable to locate the `spack` executable:

```
export PATH="$PATH:/opt/spack/bin"
```

Lastly, you need to register the repo with Spack:

```
spack repo add ~/spack-repo/
```

NB: This command assumes that you cloned the repo into your home directory.

## Creating a Recipe

The Spack [Package Creation
Tutorial](https://spack-tutorial.readthedocs.io/en/latest/tutorial_packaging.html)
provides a good walkthrough of how to create package recipes.

## Adding the New Recipe to the Repository

Once the package recipe has been created and you're able to build it with
`spack`, you can make your recipe available to SoftPack by committing it to the
repo.

First, enter the repos directory (`cd ~/spack-repo`) and create a new branch,
named after the package you've created:

```
git checkout -b PACKAGE_NAME-recipe
```

If it has not been done already, git will require being set-up with your email
address and name.

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

The email address will need to match the one on your GitHub account.

Next, add, commit, and push your recipe files to the repo:

```
git add packages/PACKAGE_NAME
git commit -m "Add PACKAGE_NAME recipe."
git push --set-upstream origin PACKAGE_NAME-recipe
```

Lastly, open up the [SoftPack Spack
Repo](https://github.com/wtsi-hgi/spack-repo/) and create a Pull Request for
your packages recipe branch, requesting a review from a Reviewer.

Once the Pull Request has been accepted, SoftPack will be able to download and
install your recipe without any further action.

## Cleanup

If this is a shared SoftPack VM, you may wish to remove the ~/.gitconfig file
created with your name and email address.

Also, unless you plan on creating multiple packages, and know your way around
`git`, it is recommended to remove the cloned spack-repo:

```
cd ~
rm -rf ~/spack-repo
```