Info About Specific Data
========================

Summoners
---------

* 3 different kinds of IDs
  - They are all encrypted
  - The encryption is per-app not per-key
  - https://www.riotgames.com/en/DevRel/player-universally-unique-identifiers-and-a-new-security-layer
  The API uses 3 types of IDs for players: summoner IDs, account IDs, and PUUIDs. Different APIs use different ID types, and you should use whichever type is required by the API you are using. Summoner and account IDs are only unique per region, and PUUIDs are unique globally. As of API v4, all IDs are encrypted using encryption keys unique to each project. An ID obtained with your dev key will not work with your production key (and vice versa).


Tournaments
-----------

...


Match
-----

* Matches are kept for 3 years, timelines for 1 year.

* ACS

* Timestamps in ms

* Pick order: 1-5-2-6-3-7-4-8-5-9

* Season ID's should only be used if you're looking for data that's over a year old, as it can take months for the ID's to be updated for the current season. Because of this, it's best to use timestamps instead. You can find the approximate start time for each season here: https://github.com/CommunityDragon/Data/blob/master/patches.json

* You can find seed data for matches at these urls; https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches1.json … https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches10.json

Custom Data
...........

Currently, custom game data (excluding the tournament system), is not retrievable from the API due to privacy policies.

A lot of these private things, like custom modes, champion mastery grade, etc that developers would like, are all things that one of the users in each game may not want to be publicly pull-able. Whereas, all users agree to it being pull-able in all other official games. While a normal game isn't try-hard like ranked, the user is still probably playing with the goal to win or compete in the game as intended. This may not always be the case in a custom mode.

The tournament system also takes into account a user's agreement, as the user is choosing to participate in an official game (the tournament system) and therefore giving some consent on data pulling for those specific games by using the tournament API.

The shining light to this, is that Riot is slowly but surely working towards an external RSO (Riot Sign-On) solution. Meaning, we as developers, can have users authenticate into Riot (officially) via the API. Which if all goes all, means a user could potentially give us their consent to go view their custom game data or champion mastery grades, etc.. but you would probably need consent per user to do these special calls, versus a blanket policy of letting developers go retrieve more private information.

Verification
------------

* How to use it (website makes code, user inputs it into client). Show/link gif.

* Restart the client if not working


Current Game
------------

* Spectator time is not accurate and inconsistent

Replay Files
------------

* Reverse engineering spectator (.rolf) files is not possible and illegal
