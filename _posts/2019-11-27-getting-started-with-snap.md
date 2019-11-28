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

### More Features
