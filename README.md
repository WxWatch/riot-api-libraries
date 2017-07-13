# Public Libraries for the Riot Games API

## Table of Contents
1. [Introduction](#introduction)
2. [How It Works](#how-it-works)
2. [I Want to Include My Library!](#i-want-to-include-my-library)
3. [My Library's Information is Wrong/Outdated](#my-librarys-information-is-wrongoutdated)
4. [Troubleshooting](#troubleshooting)
5. [Future Work](#future-improvementssuggestions)

## Introduction
This repository is the home of the configuration files that power the [Public Libraries for the Riot Games API](https://discussion.developer.riotgames.com/articles/61/public-libraries-for-the-riot-games-api.html) article on the [Riot Games API Discussion Boards](https://discussion.developer.riotgames.com/index.html). 

The aim of this repository is to provide a semi-automated, centralized way for 3rd Party Library Creators to manage the exposure of their libraries on the [Riot Games API Discussion Boards](https://discussion.developer.riotgames.com/index.html).

## How It Works
### Directory Structure
The `libraries` directory contains language-specific subdirectories. Within these sub-directories are JSON files that contain library configurations. 

The filename is the name of the repository, **lowercased and with all non-alphanumeric characters removed.**. If the filename already exists (aka there's another library with the same name), simply add a number to the end of your filename (e.g. `lolfakejavalib1.json`).

#### Example
For a Java library called `LoL-Fake-Java-Lib`, it's configuration would live at `libraries/java/lolfakejavalib.json`

### File Structure
Each JSON file should consist of a single `RepoObject` JSON object with the following properties:

#### RepoObject
- `owner` [**string**] - The GitHub account that owns the repository
- `repo` [**string**] - The name of the repository
- `description` [**string**] _(Optional)_ -  A description of the library. If omitted, the repository description will be used instead
- `language` [**string**] - The programming language of the library
- `links` [**array**] - An array of `RepoLink` objects
- `metadata` [**object**] - An object containing metadata on the library. This object can contain any data, but the following fields are reserved:
  - `v3-supported` [**boolean**] - Set to `true` if the library supports `v3` of the Riot Games API
  - `rate-limiting` [**boolean**] - Set to `true` if the library natively handles rate limiting headers from the Riot Games API

#### RepoLink
- `name` [**string**] - The display name of the link
- `url` [**string**] - The URL of the link

#### Example
lolfakejavalib.json
```
{
    "owner": "WxWatch",
    "repo": "LoL-Fake-Java-Lib",
    "description": "This is a fake Java library for the Riot Games API",
    "language": "Java",
    "links": [
        {
            "name": "Documentation",
            "url": "https://github.com/WxWatch"
        }
    ],
    "metadata": {
        "v3-supported": true,
        "rate-limiting": true
    }
}
```

## I Want to Include My Library!
Awesome! Simply create a Pull Request that adds a file with your library's configuration to the appropriate folder (if your language's folder isn't there, feel free to create it!). Once we verify that everything is correct, we'll merge it in and you're all set!

## My Library's Information is Wrong/Outdated
It's simple to fix! Simply create a Pull Request that updates the configuration file for your library. Once we verify that everything is correct, we'll merge it in and you're all set!

## Troubleshooting
For any specific issues / feature requests, you can create a Github Issue or reach out to WxWatch on the [Riot API Community Discord](https://discord.gg/uYW7qhP)

## Future Improvements/Suggestions
- ~~With the upcoming deprecation of `pre-v3` APIs, a way for libraries to be marked as `supporting v3 `.~~ Done!
- Remove the `language` property and have the updater rely on the directory name to know the language.
- A more robust way to show what APIs a library supports
- A way for libraries to show any additional features it may have (rate limiter, etc.)
- Support for libraries not hosted on Github
