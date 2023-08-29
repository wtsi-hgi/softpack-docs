---
sidebar_position: 2
---

# Adding Packages

:::caution
This documentation is under development and may be incomplete.
:::

Spack comes with a builtin repository of over 7000 packages. A compltete list 
is available from Spack at [packages.spack.io](https://packages.spack.io).

Spack also allows you to add support for any additional software that's not available
in Spack's builtin repository. For detailed instructions on how to create a new package, 
please refer to the Spack [Packaging Guide](https://spack.readthedocs.io/en/latest/packaging_guide.html).

Once you've created the package, you can add it to a custom repository using `spack repo add` command.

An example repository that adds a number of Python and R packages is avaiable at [github.com/wtsi-hgi/spack-repo](https://github.com/wtsi-hgi/spack-repo).

## Generating Packages with SoftPack

SoftPack offers tools for automatically generating support for R packages hosted on CRAN, Bioconductor, or in a Git repository.

To add an R package to your custom Spack repository, use the `softpack-builder package create` command.

```console
Usage: softpack-builder package create [OPTIONS] PACKAGES...

Create a package.

Arguments:
*    packages     PACKAGES...  [default: None] [required]                                    

Options:
--template        [python|r]  Package template. [default: None]
--cran                        Get package from CRAN.
--pypi                        Get package from PyPI. 
--git             URL         Get package from Git. [default: None]
--branch          TEXT        Git branch. [default: None]
--commit          TEXT        Git commit hash. [default: None]
--tag             TEXT        Git tag. [default: None]
--force                       Overwrite if package already exists.
--help                        Show this message and exit.
```

Before you can use `softpack-builder package create` command, make sure you've defined these defaults for package creation in `~/.softpack/builder/config.yml`.

```console
packages:
  templates:
    path: PATH
  repo:
    namespace: NAMESPACE
```

| Option | Description |
|--------|-------------|
|templates.path | A default collection of templates is provided at [github.com/wtsi-hgi/softpack-templates](https://github.com/wtsi-hgi/softpack-templates). You can clone this repository (or a fork of it), and provide the local path of the cloned repo here. 
|repo.namespace | This is the namespace of your custom repository, for example, the namepsace from [github.com/wtsi-hgi/spack-repo](https://github.com/wtsi-hgi/spack-repo/blob/main/repo.yaml).|


Here's an example of how to add the R package [AUC](https://cran.r-project.org/web/packages/AUC/index.html) with 
`softpack-builder package create` once you've provided configuration for package creation.

```console
softpack-builder package create --cran AUC --template r 
```

A python module named `packages/r-auc/package.py` will be created in your custom repository. It is recommended that you manually inspect the module and verify that it installs the package correctly before commiting it to your custom repository.