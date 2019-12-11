---
layout: post
title:  "Setup react-native environment on Ubuntu for Android"
date:   2019-12-12 00:45:27 +0600
featured-image: 'react-native.png'
categories: React-Native
tags: [react-native]
---

<h3><i class="fab fa-node"></i> Install node and npm</h3>

**Using Ubuntu**

```bash
$ sudo apt install curl
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ node -v
v10.17.0
$ npm -v
6.11.3
```

**Using Debian, as root**

```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | bash -
$ sudo apt-get install -y nodejs
```
