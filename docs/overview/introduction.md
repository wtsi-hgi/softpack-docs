---
sidebar_position: 1
---

# Introduction 

:::caution
This documentation is under development and may be incomplete.
:::

**SoftPack** is an open-source software packaging platform for any operating
system where Docker or Singularity are supported.

SoftPack is primarily aimed at scientific research community where running a
stable yet flexible research software environment is a necessity. It is not
uncommon for researchers to require their environments to be shared with other
members of their team, either locally or across organizations.

A number of software packaging solutions already exist and generally work well
when the number of dependencies remains manageable and the research environment
either doesn't change very often or doesn't need to be shared with others,
or both.

- [Conda](https://docs.conda.io/en/latest/) (and its reimplementation
  [Mamba](https://mamba.readthedocs.io/en/latest)) are the de-facto standard for
  python based scientific computing in single user environments.

- [venv](https://docs.python.org/3/library/venv.html) combined with
  [Pip](https://pip.pypa.io/en/stable) or especially [Poetry](https://python-poetry.org)
  offer an excellent option for python package development but are limited elsewhere.

- For R users, [renv](https://rstudio.github.io/renv/articles/renv.html) has
  superceded the now out-dated [packrat](https://rstudio.github.io/packrat/) and
  is a great option for managing different versions of a package or even different
  versions of R, but its utility is limited outside of R.

- Other solutions like [Nix](https://nixos.org), [Guix](https://guix.gnu.org) or
  [Spack](https://spack.io) offer some promise but generally require higher
  levels of maintenance and administration for the end-user to tackle on their
  own.

- [Docker](https://www.docker.com), [Singularity](https://docs.sylabs.io/), and
  [Podman](https://podman.io) offer unmatched stability and reproducibility by 
  using containerization but with the added cost of steeper learning curve.

- A number of home-grown tools have surfaced over the years but no solution
  offers stability, flexibility and ease of use in a multi-user shareable
  environment.

SoftPack attempts to overcome the shortcomings of previous efforts, not by
reinventing the wheel, but by leveraging the strengths of some of the packaging
solutions listed above and offering flexible multi-user environments with the
stability of containers necessary for reproducible research.

SoftPack is more than just a package management tool, as it offers managed
multi-user software environments and administration tools for creating,
managing, and discovering shareable environments. Under the hood, SoftPack uses
[Spack](https://spack.io),
[renv](https://rstudio.github.io/renv/articles/renv.html),
[Docker](https://www.docker.com), and [Singularity](https://docs.sylabs.io/)
but without exposing the complexities of the underlying technology to the
end-user.


## Requirements

SoftPack runs on any POSIX-compliant operating system including any 
distribution of Linux, FreeBSD, and macOS. SoftPack also supports virtual 
machine environments including VirtualBox, Vagrant and VMware, provided the 
operating system running on the virtual machine supports Docker or Singularity.
SoftPack has been tested on OpenStack and will  support Google Cloud 
Platform (GCP) and Amazon Web Services (AWS).


## Documentation

This documentation repository serves a dual-purpose -- it provides the 
specifications needed for the development phase of the project, but it also 
includes user-centric documentation with tutorials and how-to guides. 
Since the project is being developed with close cooperation with the 
researchers in our scientific community, combining the developer's and 
end-user's documentation serves a valuable purpose at this time. However, 
once the project has matured, the end-user documentation will branch off and 
will be hosted elsewhere.

