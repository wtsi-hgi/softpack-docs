---
sidebar_position: 1
---

# Getting Started

:::caution
This documentation is under development and may be incomplete.
:::


This is a sneak-preview of the getting started guide. A detailed guide will be 
available in [Milestone 1](/docs/reference/development_roadmap/#milestone-1)

### Using a SoftPack environment

Let's consider the scenario that you've somehow acquired a SoftPack environment
that you'd like to use for running some analysis in R.

The first step is to see what environments are available to you. 

:::info
The exact mechanics of how modules appear in your shell are not covered in this
guide yet.
:::

### The module command

The `module` command is the only command you need to learn in order to use an 
existing SoftPack environment.

To get a list of all available modules, type `module avail`

```bash
$ module avail
-------------------------- /opt/softpack/modules ---------------------------
aa27/cairo/1  aa27/cairo/2  
```

In the example above, there are two versions of the `aa27/cairo` environment 
available. The version number is automatically incremented when changes are 
made to an environment. This ensures that users can rely on a stable 
environment when using a specific version number.

Having SoftPack environments version controlled the same way you use Git for
version controlling your code, allows the environments to be updated without 
running the risk of breaking any existing analysis that relies on a previous 
working version of the environment.

Once you've identified the environment to use, you can load it with 
`module load` command.

```bash
$ module load aa27/cairo/2 
```

Although not necessary, you can show a list of all modules currently loaded
using the `module list` command.

```bash
$ module list
Currently Loaded Modulefiles:
1) aa27/cairo/2
```

Now that the module is loaded, you can run R and everyone's happy.

```R
$ R

R version 4.2.2 (2022-10-31) -- "Innocent and Trusting"
Copyright (C) 2022 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)

R is free software and comes with ABSOLUTELY NO WARRANTY.
You are welcome to redistribute it under certain conditions.
Type 'license()' or 'licence()' for distribution details.

R is a collaborative project with many contributors.
Type 'contributors()' for more information and
'citation()' on how to cite R or R packages in publications.

Type 'demo()' for some demos, 'help()' for on-line help, or
'help.start()' for an HTML browser interface to help.
Type 'q()' to quit R.

>
```