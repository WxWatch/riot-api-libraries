# Public Libraries for the Riot Games API

## Table of Contents
1. [Introduction](#introduction)
2. [How It Works](#how-it-works)
2. [I want to include my library!](#i-want-to-include-my-library)
3. [My Library's Information is Wrong/Outdated](#my-librarys-information-is-wrongoutdated)
4. [Troubleshooting](#troubleshooting)

## Introduction
This repository is the home of the configuration files that power the [Public Libraries for the Riot Games API](https://discussion.developer.riotgames.com/articles/61/public-libraries-for-the-riot-games-api.html) article on the [Riot Games API Discussion Boards](https://discussion.developer.riotgames.com/index.html). 

The aim of this repository is to provide a semi-automated, centralized way for 3rd Party Library Creators to manage the exposure of their libraries on the [Riot Games API Discussion Boards](https://discussion.developer.riotgames.com/index.html).

## How It Works
### Directory Structure
The `libraries` directory contains language-specific subdirectories. Within these sub-directories are JSON files that contain library configurations. 

The filename is the name of the repository, **lowercased and with all non-alphanumeric characters removed.**

#### Example
For a Java library called `LoL-Fake-Java-Lib`, it's configuration would live at `libraries/java/lolfakejavalib.json`

### File Structure
Each JSON file should consist of a single `RepoObject` JSON object with the following properties:

#### RepoObject
- `owner` [**string**] - The GitHub account that owns the repository
- `repo` [**string**] - The name of the repository
- `language` [**string**] - The programming language of the library
- `links` [**array**] - An array of `RepoLink` objects
- `metadata` [**object**] - An object containing metadata on the library (*currently unused*)

#### RepoLink
- `name` [**string**] - The display name of the link
- `url` [**string**] - The URL of the link

#### Example
lolfakejavalib.json
```
{
    "owner": "WxWatch",
    "repo": "LoL-Fake-Java-Lib",
    "language": "Java",
    "links": [
        {
            "name": "Documentation"
            "url": "https://github.com/WxWatch"
        }
    ],
    "metadata": {
        "v3-supported": true
    }
}
```

## I want to include my library!
Awesome! Simply create a Pull Request that adds 

## My Library's Information is Wrong/Outdated

## Troubleshooting

## Future Improvements/Suggestions
I'd like to remove the `language` property and have the updater rely on the directory name to know the language.