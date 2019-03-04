.. _ids:

PUUIDs and Other IDs
====================


The Riot API uses `three IDs <https://www.riotgames.com/en/DevRel/player-universally-unique-identifiers-and-a-new-security-layer/>`_ for players: summoner IDs, account IDs, and PUUIDs. Different APIs use different IDs, and you should use whichever ID is required by the API you are using.

Summoner and account IDs are only unique per region, and PUUIDs are unique globally.

Because the PUUID is globally unique, when a player transfers regions their PUUID will not change. This allows you to track summoners that have transferred regions. If a player transfers regions, their summoner and account IDs will change.

All IDs are encrypted using encryption keys unique to each project. An ID obtained with your dev key will not work with your production key (and vice versa). When you refresh a key, the encrypted ID will not change.
