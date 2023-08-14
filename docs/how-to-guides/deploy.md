---
sidebar_position: 1
---

# Deployment

As Softpack is currently under active development, these instructions are likely
to change over time to match the current state of the project.

## Overview

These instructions are intended as a step-by-step guide to get the latest
development version of SoftPack up-and-running so that it can be used to build
images.

It is recommended that those following these instructions are comfortable with
using a unix-like terminal interface, and have some experience administering a
linux environment.

## The Steps

### Clone Infrastructure

The first step is to clone the
[Infrastructure](https://gitlab.internal.sanger.ac.uk/hgi-projects/softpack/infrastructure/)
repo:

```git clone https://gitlab.internal.sanger.ac.uk/hgi-projects/softpack/infrastructure/```

…then after entering the newly creating directory (```cd infrastructure```),
checkout the development branch:

```git checkout develop```

### Terraform Configuration

The next step is to modify several of the configuration files in order to create
a personal instance:

In `terraform/terraform.tfvars`, add the following lines to the end of the file:

```
ARTIFACTS_ROOT = "./"
ANSIBLE_INVENTORY = "/path/to/softpack/infrastructure/terraform/ansible/hosts.yml"
ENVIRONMENT = "development"
SSH_KEY = "~/.ssh/id_rsa"
SSH_PUBLIC_KEY = "~/.ssh/id_rsa.pub"
```

You may need to replace the values of SSH_KEY and SSH_PUBLIC with the paths to
your own keys, and make sure the `ANSIBLE_INVENTORY` accurately reflects where
you cloned the repo (the hosts.yml file will not currently exist).

NB: If you do not already have SSH keys created, you can do so with the
`ssh-keygen` command.

In `terraform/backend.tf`, replace the `"http"` value with `"local"`.

In `terraform/builder.tf`, in the `openstack_compute_instance_v2` resource,
you'll need to replace the key_pair line with the following:

```
key_pair    = openstack_compute_keypair_v2.keypair.name
```

…and add the following section at the end:

```
resource "openstack_compute_keypair_v2" "keypair" {
  name       = "mercury-USERNAME-keypair"
  public_key = file(var.SSH_PUBLIC_KEY)
}
```

The name needs to be unique, so you may need to change this if it conflicts with
an existing keypair setup.

In `terraform/frontend.tf`, we need to make a similar change to the last, in the
`openstack_compute_instance_v2` resource, you'll need to replace the key_pair
line with the following:

```
key_pair    = openstack_compute_keypair_v2.keypair.name
```

In `terraform/openstack.tf`, you'll need to remove the following key_pair line:

```
  keypair                = join("-", [var.name, var.ENVIRONMENT])
```

Lastly, in the `terraform/variables.tf` file, you'll need to make sure that the
subdomain default value is unique, and will need to add the following lines to
the end of the file:

```
variable "SSH_PUBLIC_KEY" {
  type = string
}
```

## Building the VM

For this stage, you'll need to have both [Terraform](https://www.terraform.io/)
and [Ansible](https://www.ansible.com/) installed. It is recommended to install
`ansible` using `pip`:

```
pip install ansible
```

With the tools installed, you'll need to export some environmental variables
that terraform requires:

```
export VAULT_ADDR="https://vault.internal.sanger.ac.uk"
export VAULT_TOKEN="TOKEN_HERE"
```

…replacing the `VAULT_TOKEN` value with your own.

NB: You can find your token by logging in to [The
Vault](https://vault.internal.sanger.ac.uk/) and selecting `Copy token` from the
top-right menu. If you have not previously generated a token, you will need to
do so now.

Once done, make sure that you're in the `infrastructure/terraform` directory,
and run the following two commands to provision the VM for SoftPack:

```
terraform init
terraform apply
```

…following the onscreen instructions to confirm the actions that will take
place.

## Installing the Software

While still in the `infrastructure/terraform` directory, you can run the
following command to set-up the newly provisioned VM with the necessary software
and configuration:

```
ansible-playbook --inventory ansible/hosts.yml --limit builder ansible/main.yml
```

NB: This will most likely take a few minutes

## After Installation Modification

Once the initial software configuration is done, you'll need to log in to the
machine to make some changes:

```
ssh ubuntu@IP_ADDRESS
```

The IP Address can either be found in the `terraform` output, or in the
`terraform/ansible/hosts.yml` file, in the `builder` section.

Once logged in, you'll need to modify two files. The first in the softpack
builder configuration file, located at
`/opt/softpack/builder/softpack_builder/config/conf/config.yml` and requires the
following changes:

In the `vault` section, You'll need to fill in the details for the URL, Path,
and Token for the vault, either with real values, or dummy ones such as the
following:

```
vault:
  url: https://something.com
  path: /something
  token: something
```

In the `spack->manifest->spack->container->images` section, remove the following
two lines:

```
          build: spack/ubuntu-focal:v0.20.1
          final: ubuntu:20.04
```

Lastly, in the `/opt/softpack/builder/softpack_builder/singularity.py` file,
find and delete the following line:

```
				file.writelines(commands)
```

## Restart the SoftPack Service

With the changes made, you should now be able to start the SoftPack Builder
Service, with the following command:

```
sudo systemctl restart softpack-builder
```

## Building Software

You should now be able to build software.

First, you need to activate the correct environment, which you can do with the
following command:

```
cd /opt/softpack/builder/ && source .venv/bin/activate
```

Once run, you should be able to install software with the following command:

```
softpack-builder environment build --name NAME_OF_INSTALL /path/to/softpack/file.yaml
```

NB: You must execute that command from the `/opt/softpack/builder/` directory.


The progress of the build can be viewed by accessing the IP address of your VM
in a browser, which will bring up the Prefect Flow interface, which also allows
you to view the logs.

If you previously entered dummy vault information in the softpack configuration file, the
image will be built, but will not be uploaded anywhere; the location of the
image will be in the log.
