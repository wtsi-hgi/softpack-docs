---
sidebar_position: 6
---

# Deployment

As Softpack is currently under active development, these instructions are likely
to change over time to match the current state of the project.

## Overview

These instructions are intended as a step-by-step guide to get SoftPack
up-and-running so that it can be used to build images.

The current automated build process is not intended to be used to create an
individual instance, and as such will require some modification.

## The Steps

### Generate Application Credentials

To build and set-up OpenStack VMs you'll need to generate some credentials:

https://theta.internal.sanger.ac.uk/identity/application_credentials/

Select `Create Application Credential`, give it a name, and click `Create
Application Credential`.

Make note of the ID and Secret values, as you will need them later.

NB: The site will not be able to retrieve the secret for you if you lose it. If
that happens you'll need to generate a new one.

### Keypair creation

If you do not already have an OpenStack keypair created, you will need to do so
now.

https://theta.internal.sanger.ac.uk/project/key_pairs

Go to the above URL and click `Create Key Pair`, fill in a unique `Key Pair
Name` and select the `SSH Key` Key Type.

This will generate a public/private keypair and download the private key to your
local machine.

You will need to move the downloaded key to your SSH directory (usually ~/.ssh)
and set the correct permissions on it (0600).

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

# TODO: Change to reflect recent changes.
# TF_VAR_OPENSTACK_APPLICATION_ID
# TF_VAR_OPENSTACK_APPLICATION_SECRET
# TF_VAR_OPENSTACK_AUTH_URL
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

An optional change would be in `terraform/terraform.tfvars`, in which you may
wish to replace the builder flavour (`m4.medium`) with `m2.medium` as there are
generally more available.

```
name = "USERNAME-softpack"
subdomain = "USERNAME-softpack"
ANSIBLE_INVENTORY = "./ansible/hosts.yml"
SSH_KEY = "~/path/to/downloaded/private.pem"
ENVIRONMENT = "development"
```

Where `USERNAME` is your username.

# TODO: Add instruction about setting up unique DNS zone. `Ask service desk to create user specific zone in infoblox`

# TODO: Create GPG key and set SPACK_KEY env var to the path of the key.

## Building the VM

For this stage, you'll need to have both [Terraform](https://www.terraform.io/)
and [Ansible](https://www.ansible.com/) installed. It is recommended to install
`ansible` using `pip`:

```
pip install ansible
```

# TODO: Modify to get read-only token

Next, you'll need to set up the environmental variables for your vault token.
Login to the [vault](https://vault.internal.sanger.ac.uk/) and you can copy your
vault token from the top-right drop-down menu. Then, in your terminal, run the
following:


```
export VAULT_ADDR="https://vault.internal.sanger.ac.uk"
export VAULT_TOKEN="YOUR_TOKEN_HERE"
```

Once done, make sure that you're in the `terraform` sub-directory,
and run the following two commands to provision the VM for SoftPack:

```
terraform init
terraform plan
```

# TODO: Expand
Check that the planned tasks make sense.

Then run:

```
terraform apply
```

…following the onscreen instructions to confirm the actions that will take
place.

## Installing the Software

While still in the `terraform` sub-directory, you can run the
following command to set-up the newly provisioned VMs with the necessary
software and configuration:

```
ansible-playbook --private-key ~/path/to/downloaded/private.pem --inventory ansible/hosts.yml ansible/main.yml 
```

You will need to response 'yes' to each of the three SSH authenticity checks,
but should otherwise not be required to interact with the process.

NB: This will most likely take a few minutes.

## Building Software

Once Ansible is done, you'll need to log in to the builder:

```
ssh -i ~/path/to/downloaded/private.pem ubuntu@builder.$USER-softpack.hgi-dev.sanger.ac.uk
```

# TODO: Confirm dummy inforation is required/still works.

You should now be able to build software. If you previously entered dummy
information for the vault configuration, then you are safe to test and build
without affecting anything outside of your instance. This means that the
Singularity images built will not be pushed to a container registry (the
location of the built image can be found at the end of the log, look for the
line containing the text `Build complete`).

First, you need to activate the correct environment, which you can do with the
following commands:

```
cd /opt/softpack/builder/
source .venv/bin/activate
```

Try a test build with the following command.

```
softpack-builder environment build --name test_run test/data/specs/test-env.yml
```

# TODO: Add example output, and note flow ID and /op/softpack/envs/ID/ artifacts dir.

NB: You must execute that command from the `/opt/softpack/builder/` directory.

The progress of the build can be viewed by accessing
`http://builder.USERNAME-softpack.hgi-dev.sanger.ac.uk` in a browser, which will
bring up the Prefect Flow interface, which also allows you to view the logs.