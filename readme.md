![Electron Installer for Linux (Debian / Redhat)](logo.png)

> Create a Linux (Debian / Redhat Package) for your Electron app using Easy CLI!

## Requirements

For Redhat Builds, you require `rpmbuild` to build the `.rpm` package. On Fedora you can do something like this:

```
$ sudo dnf install rpm-build
```

While on Ubuntu you'll need to do this instead:

```
$ sudo apt-get install rpm
```

For Debian builds, you require `fakeroot` and `dpkg` to build the `.deb` package.

On Mac You can do it Via:

```
$ brew install fakeroot dpkg
```

On Fedora You can do it Via:
```
$ sudo dnf install dpkg fakeroot
```

## Installation

CLI can be Installed Via:
```
$ npm install --global electron-linux-installer
```

## Usage

First, you need to build the Package using Electron Packager:

```
$ electron-packager . app --platform linux --arch x64 --out dist/
```

Now you'd have to Use the CLI:

```
   $ electron-linux-installer
    | |   (_)_ __  _   ___  __    | __ ) _   _(_) | __| | ___ _ __ 
    | |   | | '_ \| | | \ \/ /____|  _ \| | | | | |/ _` |/ _ \ '__|
    | |___| | | | | |_| |>  <_____| |_) | |_| | | | (_| |  __/ |   
    |_____|_|_| |_|\__,_/_/\_\    |____/ \__,_|_|_|\__,_|\___|_|   
                                                                    
    ? Do you want to Make the Installer for Both Debian and Redhat yes
    ? Enter the Path of Source Code dist/app-linux-x64/
    ? Enter the Path of the Destination for your Installer dist/installers/
    ? Enter the Name of the Architecture you are building for x86_64

    Starting to Build for Debian

    // Processing

    Starting to Build for Redhat

    // Processing

    Build for Both Complete, you can find the Installer at dist/installers/
```

