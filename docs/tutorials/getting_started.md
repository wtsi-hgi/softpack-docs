---
sidebar_position: 1
---

# Getting Started

:::caution
This documentation is under development and may be incomplete.
:::

### Using a SoftPack environment

This tutorial describes how to use a previously created SoftPack environment
for running Python, R or RStudio.

SoftPack environments are made available through the `module` command. It's the 
only command you need to learn in order to use a SoftPack environment. 
Documentation for the `module` command is available at the [Environment Modules](https://modules.sourceforge.net) 
site if you're new to modules.


The first step is to tell the `module` command where to look for your 
environments. The following `module use` command adds the directory where 
your modules are installed. It's generally a good idea to add this command to 
you shell startup file (`.bashrc` or equivalent) so you don't have to do this
manually each time you start a new shell.

```console
$ module use --append /software/hgi/softpack/users/$USER
```

The `module use` command can also be used to verify that `module` knows about 
all the directories where your modules are installed.

```console
$ module use
Search path for module files (in search order):
  /etc/environment-modules/modules
  /usr/share/modules/versions
  /usr/share/modules/modulefiles
  /software/hgi/softpack/modules/users/aa27
```

You can now run `module avail` to get a list of all environments available to 
you.

```console
$ module avail
--------------------- /usr/share/modules/modulefiles --------------------- 
dot  module-git  module-info  modules  null  use.own

---------------- /software/hgi/softpack/modules/users/aa27 ----------------
seurat5/1.0
```

There are two additional `module` subcommands worth noting here.

- `module whatis` gives you a brief synopsis of what the module is about.
- `module help` describes the module in more detail.

#### module whatis

```console
$ module whatis seurat5
---------------- /software/hgi/softpack/modules/users/aa27 ----------------
         seurat5/1.0: Softpack pilot with seurat 5, bpcells and monocle3
```

#### module help

```console
$ module help seurat5
-------------------------------------------------------------------
Module Specific Help for /software/hgi/softpack/modules/users/aa27/seurat5/1.0:

description: Softpack pilot with seurat 5, bpcells and monocle3
build:
  id: 6cb0fb19-19c2-4cc6-8e4a-9587cca739a0
  image: /software/hgi/softpack/images/6cb0fb19-19c2-4cc6-8e4a-9587cca739a0.sif
  created: 2023-04-28 16:34:42
  updated: 2023-04-28 22:15:44
packages:
  - r-afex
  - r-affy
  - r-affyio
  - r-annotationfilter
:  
```

#### Loading a module

To load a module, simply run `module load` with the name of an available module.

```console
$ module load seurat5
Loading seurat5/1.0
  Loading requirement: /software/modules/ISG/singularity/3.10.0
```

You can get a list of all loaded modules using the `module list` command.

```console
$ module list
Currently Loaded Modulefiles:
 1) /software/modules/ISG/singularity/3.10.0   2) seurat5/1.0

```

Now that the module is loaded, you can run Python, R or RStudio.

### Running RStudio

SoftPack environments that include RStudio will include a new `rstudio` command
that starts a batch job on your high performance cluster.

```console
$ rstudio
Usage: rstudio [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  list   List running RStudio servers.
  start  Start RStudio server.
  stop   Stop RStudio server.
```

To start a new RStudio session, use the `rstudio start` command. The 
`rstudio start` command supports the following optional arguments.

```console
$ rstudio start --help
Usage: rstudio start [OPTIONS]

  Start RStudio server.

Options:
  --home PATH            home directory inside the container.  [default:
                         /nfs/users/nfs_a/aa27]
  -M MB                  sets the memory limit for the job (in MB).  [default:
                         15000]
  -n MIN[,MAX]           submits a parallel job and specifies the number of
                         tasks in the job.  [default: 2]
  -o, --output FILENAME  output filename.  [default: rstudio_session.log]
  --pwd PATH             initial working directory inside the container.
                         [default: /nfs/users/nfs_a/aa27]
  -q, --queue QUEUE      submits the job to the specified queue.
  --r-libs-user PATH     specifies additional directories for R packages.
  --help                 Show this message and exit.
```

:::info
You can change the home directory used inside RStudio using `--home` argument
or by changing you current directory before starting the RStudio session.
:::

Running `rstudio start` submits a batch job, starts RStudio server and provides 
you with instructions on how to connect to your RStudio session as shown below.

```console
$ rstudio start
LSF job options:

io:
  errorAppendFile: rstudio_session.log
  outputAppendFile: rstudio_session.log
limit:
  memLimit: 15000
properties:
  jobName: aa27/rstudio-server
resource:
  numTasks: '2'
  resReq: select[model==Intel_Platinum && mem>15000] rusage[tmp=5000, mem=15000] span[hosts=1]

Job <22845162> is submitted to default queue <normal>.

Waiting for RStudio server to start ...

To access the server, open one of these URLs in a browser and login with the credentials below:

	http://node-10-3-4.internal.sanger.ac.uk:33025
	http://172.27.224.27:33025

	username: aa27
	password: iJX7MCV1w+6IPyXcYs9H
```

Once you're finished with RStudio, use the `rstudio stop` command to terminate
the session.

```console
$ rstudio stop
Job <22845162> is being terminated
```

You can also use the `rstudio list` command to get a list of all running 
sessions.

```console
$ rstudio list
JOBID   USER    STAT  QUEUE      FROM_HOST   EXEC_HOST   JOB_NAME   SUBMIT_TIME
22845162 aa27    RUN   normal     hgi-farm5   node-10-3-4:node-10-3-4 aa27/rstudio-server May  2 11:21
```
