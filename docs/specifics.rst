Info About Specific Data
========================

Summoners
---------

* See the :ref:`ids` section for information about summoner IDs, account IDs, and PUUIDs.


Tournaments
-----------

---


Match
-----

* Matches are kept for 3 years, timelines for 1 year.

* The creation date timestamps in milliseconds (not seconds).

* The pick order of participants is 1-5-2-6-3-7-4-8-5-9.

* The :code:`totalGame` fields is incorrect in most cases. It's best practice to just ignore it.

* Season ID's should only be used if you're looking for data that's over a year old, as it can take months for the ID's to be updated for the current season. Because of this, it's best to use timestamps instead. You can find the approximate start time for each season `here <https://github.com/CommunityDragon/Data/blob/master/patches.json>`_.

* You can find seed data for matches at these urls: https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches1.json ... https://s3-us-west-1.amazonaws.com/riot-developer-portal/seed-data/matches10.json

.. * ACS


Custom Data
...........

* Currently, custom game data (excluding the tournament system), is not retrievable from the API due to privacy policies. Riot is slowly but surely working towards an external RSO (Riot Sign-On) solution that will allow individual players to "Okay" websites to use their custom game data.


Verification
------------

RSO is Riot Sign-On, the login logic you see whenever you access anything that requires your Riot account. RSO is not yet ready for the public to use, but Riot has implemented a work-around for websites to verify users.

Websites should generate a random string for the user to input into their client. See `this gif <https://i.imgur.com/xCRNiQF.gifv>`_ for an illustration. The verification endpoint is notorious for having issues. The user may need to restart their client a few times to get it working, or try again later.


Current Game
------------

* Spectator time is not accurate and inconsistent. See `this issue <https://github.com/RiotGames/developer-relations/issues/81#issuecomment-467551170>`_ for more details.


Replay Files
------------

* Reverse engineering spectator (.rolf) files is not possible and against the Terms of Service. The encryption of the .rofl files changes each patch. This is to prevent cheating.
