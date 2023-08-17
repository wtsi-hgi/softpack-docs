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

The current automated build process is not intended to be used to create an
individual instance, and as such will require some modification.

## The Steps

### Generate Application Credentials

To build and set-up OpenStack VMs you'll need to generate some credntials:

https://theta.internal.sanger.ac.uk/identity/application_credentials/

Select `Create Application Credential`, give it a name, and click `Create Application Credential`.

Make note of the ID and Secret values, as you will need them later.

NB: The site will not be able to retrieve the secret for you if you lose it. If
that happens you'll need to generate a new one.

### Clone Infrastructure

The first step is to clone the
[Infrastructure](https://gitlab.internal.sanger.ac.uk/hgi-projects/softpack/infrastructure/)
repo:

```git clone https://gitlab.internal.sanger.ac.uk/hgi-projects/softpack/infrastructure/```

…then after entering the newly creating directory (`cd infrastructure`),
checkout the development branch:

```git checkout develop```

### Terraform Configuration

The next step is to modify several of the configuration files in order to create
a personal instance:

In `terraform/backend.tf`, replace the `"http"` value with `"local"`.

In `terraform/openstack.tf`, replace the locals section with the following:

```
locals {
  openstack = {
    keypair                = join("-", [var.name, var.ENVIRONMENT])
    auth_url               = var.openstack_auth_url
    application_credential = {
        id = var.openstack_application_credential_id
        secret = var.openstack_application_credential_secret
    }
  }
}
```

…and add the following to the bottom of the file:

```
resource "openstack_compute_keypair_v2" "keypair" {
  name       = local.openstack.keypair
  public_key = file(var.SSH_PUBLIC_KEY)
}
```

In `terraform/variables.tf`, you'll want to make the following changes:

Change the default value of the `name` variable from "softpack" to
"softpack-USERNAME" (where USERNAME is your username).

Change the default value of `subdomain` to match that of `name`.

Add a default value for `ANSIBLE_INVENTORY` set to `"./ansible/hosts.yml"`.

Add a default value for `SSH_KEY` set to `"~/.ssh/id_rsa"`.

NB: You may need to replace the default value of SSH_KEY with the path to your
own keys if it is in a different location, or is of a different key type. If you
do not already have SSH keys created, you can do so with the `ssh-keygen`
command.

Add a default value for `ENVIRONMENT` set to `"development"`.

Add the following to the bottom of the file:

```
variable "SSH_PUBLIC_KEY" {
  type = string
  default = "~/.ssh/id_rsa.pub"
}

variable "openstack_auth_url" {
  type = string
  default = "https://theta.internal.sanger.ac.uk:5000"
}

variable "openstack_application_credential_id" {
  type = string
  default = "YOUR_CREDENTIAL_SECRET"
}

variable "openstack_application_credential_secret" {
  type = string
  default = "YOUR_CREDENTIAL_SECRET"
}
```

…filling in your credentials that you generated earlier, and making sure the
`SSH_PUBLIC_KEY` path matches that of the accompanying public key to the
`SSH_KEY` you supplied earlier.

Lastly, in the `terraform/ansible/roles/softpack_builder/tasks/main.yml` file,
**remove** the following lines:

```
- name: Import GPG key
  vars:
    key: /tmp/softpack.pgp
  block:
    - name: Copy GPG key
      ansible.builtin.copy:
        src: "{{ lookup('ansible.builtin.env', 'SPACK_KEY') }}"
        dest: "{{ key }}"
        mode: u=rw,g=-,o=-

    - name: Import GPG key
      ansible.builtin.shell: |
        SPACK_GNUPGHOME={{ builder.gpg }} {{ spack_path }}/bin/spack gpg trust {{ key }}
      args:
        creates: "{{ builder.gpg }}/trustdb.gpg"
```

## Building the VM

For this stage, you'll need to have both [Terraform](https://www.terraform.io/)
and [Ansible](https://www.ansible.com/) installed. It is recommended to install
`ansible` using `pip`:

```
pip install ansible
```

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
following command to set-up the newly provisioned VMs with the necessary
software and configuration:

```
ansible-playbook --inventory ansible/hosts.yml ansible/main.yml
```

You will need to response 'yes' to each of the three SSH authenticity checks,
but should otherwise not be required to interact with the process.

NB: This will most likely take a few minutes.

## After Installation Modification

Once the initial software configuration is done, you'll need to log in to the
machine to make some changes:

```
ssh ubuntu@builder.softpack-USERNAME.hgi-dev.sanger.ac.uk
```

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
