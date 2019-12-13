---
layout: post
title:  "Setup react-native environment on Ubuntu for Android"
date:   2019-12-11 23:45:27 +0600
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

<br/>
<h3><i class="fas fa-angle-right"></i> Install react-native-cli</h3>

```bash
$ sudo npm install -g react-native-cli
$ react-native --version
react-native-cli: 2.0.1
```

<br/>
<h3><i class="fab fa-android"></i> Setup Android development environment</h3>

**[Download android studio](https://developer.android.com/studio/index.html)**. In my case downloaded file's name was `android-studio-ide-191.6010548-linux.tar.gz` and I kept it into my home directory. Then follow these steps

```bash
$ cd ~
$ tar xvzf android-studio-ide-191.6010548-linux.tar.gz
$ cd android-studio/bin/
$ ./studio.sh
```
