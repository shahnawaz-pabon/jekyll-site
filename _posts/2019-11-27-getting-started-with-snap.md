---
layout: post
title:  "Getting Started with Snap"
date:   2019-11-27 22:44:27 +0600
featured-image: 'terminal.png'
categories: Ubuntu
tags: [snap, ubuntu]
---

## Table of Contents
* [Getting Started](#getting-started)
* [Setting Up](#setting-up)
* [Install and Run your first Snap](#install-and-run-your-first-snap)
* [More Features](#more-features)

<br/>
### Getting Started
<br/>
1. Snap (or `Snappy` package manager) is one of the best software deployment and package management system which is built by `Canonical`.
2. A `snap` is a bundle of an app and works across many different Linux distributions as well.
3. App packages that are installed through `snap`, called `Snaps`. So `Snaps` are containerized software packages.
4. These are disclosable and installable from the `Snap Store`.
5. `snapd` is the tool for using `snaps`.


The system is actually designed for **IoT, Cloud and Desktop Computing** that are
* Easy to install
* Secured
* Cross-Platform
* Dependency-free

<br/>
### Setting Up
<br/>
#### Installing `snapd` on Ubuntu

```bash
$ sudo apt install snapd
```

It manages the snap environment on local the system and will include the snap tool for interacting with snaps as well. You can check whether snap is installed or not by running `snap version` on the command line:

```bash
$ snap version
snap    2.42.1
snapd   2.42.1
series  16
ubuntu  18.04
kernel  5.0.0-36-generic
```

<br/>
### Install and Run your first Snap
<br/>
#### Finding a `snap`

```bash
$ snap find something
Name                 Version       Publisher       Notes    Summary
paintsupreme-3d      1.0.41        braindistrict   -        PaintSupreme 3D
syncthing            1.3.1         syncthing✓      -        Open Source Continuous File Synchronization
openscad-nightly     0+git.eedfcc4 torsten-paul    -        The Programmers Solid 3D CAD Modeller
step                 19.08.0       kde✓            -        Simulate physics experiments
draftman             1.0.12        jsseidel        classic  A plain-text draft management tool for novelists.
spt                  v0.4.0        popey           -        Spotify TUI
```

`snap find <search keywords>` queries the store and list the results with their details. `✓` indecates that publisher has been verified.

<br/>
#### Learning about a `snap`

```bash
$ snap info hello
name:      hello
summary:   GNU Hello, the "hello world" snap
publisher: Canonical✓
contact:   snaps@canonical.com
license:   GPL-3.0
description: |
  GNU hello prints a friendly greeting. This is part of the snapcraft tour at https://snapcraft.io/
snap-id: mVyGrEwiqSi5PugCwyH7WgpoQLemtTd6
channels:
  stable:    2.10    2019-04-17 (38) 98kB -
  candidate: 2.10    2017-05-17 (20) 65kB -
  beta:      2.10.1  2017-05-17 (29) 65kB -
  edge:      2.10.42 2017-05-17 (34) 65kB -

```

You will know details about a package by running this command.

<br/>
#### Install and execution

```bash
$ sudo snap install hello
hello 2.10 from Canonical✓ installed
```

For running the command simply write `hello` in the command line.

```bash
$ hello
Hello, world!
```

<br/>
### More Features
