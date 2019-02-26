Data Dragon
===========

.. raw:: html

    <style> .red {color:red} </style>

.. role:: red


Data Dragon, or ddragon for short, is a set of static data files that provides images and info about champions, runes, and items. This includes info to translate champion IDs to names.

You can download the entire set of data and images by downloading this tarball (make sure to change the * `version <https://ddragon.leagueoflegends.com/api/versions.json>`_ * to the latest patch): https://ddragon.leagueoflegends.com/cdn/dragontail-9.3.1.tgz. The file is about 0.5 GB.

You can also access individual files by going to specific URLs, for example: http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json.

To see what files are in ddragon, PykeGithub on Discord has created a website that lets you `explore <https://ddragonexplorer.com/cdn/>`_ ddragon. Do not download files from ddragonexplorer.com. Instead, replace :code:`ddragonexplorer.com` with :code:`ddragon.leagueoflegends.com` and download the file directly from Riot's servers.


Caching
-------

Because the data in ddragon only changes when new patches come out, you can cache the data by saving it to your computer. Your app can then load the data from disk rather than requesting it over the www. This will speed up your app and reduce the load on Riot's servers, which ensures the servers don't go down due to abnormally high usage.

In general, it's a good idea to cache data that you will use often and that doesn't change often.


Community Dragon
----------------

`Community Dragon <http://raw.communitydragon.org/>`_, or cdragon for short, is a massive collection of community-generated files to augment the data in ddragon.

If you can't find what you're looking for in ddragon, look in cdragon. `This <http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/>`_ is a useful link to start at. If you can't find what you're looking for because there's so many files and folders to go through, ask on Discord for help.

One commonly sought-after set of images are the rune stat images, which can be found `here <http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/>`_.


Common Issues
-------------

* If You can't find something in ddragon, Look in cdragon or ask on Discord.

* Monkeyking. Yes, Wukong's internal name is :code:`monkeyking`. You can identify the correct internal name for every champion by looking at the :code:`key` attribute in the `champion.json <http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json>`_ file.

* The data in ddragon is inaccurate, especially champion spell data and item stats. This is an unfortunate situation that is surprisingly difficult to solve. If you want to know why, you can ask on Discord. There is no perfect or even close to perfect source for champion spell data, despite significant effort. The `League Wikia <https://leagueoflegends.fandom.com/wiki/League_of_Legends_Wiki>`_ is your best resource.

* If a new patch came out but ddragon hasn't updated, wait a little while. Sometimes it takes two days after a patch for the new version of ddragon to be released. Other times ddragon is two days ahead of the patch.

* Data from Data Dragon is encoded using UTF-8. To ensure you receive a properly encoded response include the Accept-Charset header specifying UTF-8 as the desired response encoding.

* Other issues: You may be able to find some information by searching the `github issues <https://github.com/RiotGames/developer-relations/issues>`_, otherwise ask on Discord.


Most Recent Version
-------------------

You can get the latest version of ddragon from the `version.json <https://ddragon.leagueoflegends.com/api/versions.json>`_ file.

Because patches get released on different regions at different times, one region may be on the new version of ddragon while another region may be be on an old version. You can check which patch a region is on by looking at the realms files for each region. The one for North America can be found at https://ddragon.leagueoflegends.com/realms/na.json. The exact time the patch gets released on a region may not correspond to exactly when the corresponding realm file is updated to the new patch.


Patch Data
----------

ddragon does not provide data for when patches were released. Instead, you can find this data on cdragon's `github <https://github.com/CommunityDragon/Data/blob/master/patches.json>`_. See the readme on github for information about how to use the file.


Languages
---------

The languages supported by ddragon can be found `here <https://ddragon.leagueoflegends.com/cdn/languages.json>`_.

+-------+---------------------------------------+
| CODE	| LANGUAGE                              |
+=======+=======================================+
| cs_CZ	| Czech (Czech Republic)                |
+-------+---------------------------------------+
| el_GR	| Greek (Greece)                        |
+-------+---------------------------------------+
| pl_PL	| Polish (Poland)                       |
+-------+---------------------------------------+
| ro_RO	| Romanian (Romania)                    |
+-------+---------------------------------------+
| hu_HU	| Hungarian (Hungary)                   |
+-------+---------------------------------------+
| en_GB	| English (United Kingdom)              |
+-------+---------------------------------------+
| de_DE	| German (Germany)                      |
+-------+---------------------------------------+
| es_ES	| Spanish (Spain)                       |
+-------+---------------------------------------+
| it_IT	| Italian (Italy)                       |
+-------+---------------------------------------+
| fr_FR	| French (France)                       |
+-------+---------------------------------------+
| ja_JP	| Japanese (Japan)                      |
+-------+---------------------------------------+
| ko_KR	| Korean (Korea)                        |
+-------+---------------------------------------+
| es_MX	| Spanish (Mexico)                      |
+-------+---------------------------------------+
| es_AR	| Spanish (Argentina)                   |
+-------+---------------------------------------+
| pt_BR	| Portuguese (Brazil)                   |
+-------+---------------------------------------+
| en_US	| English (United States)               |
+-------+---------------------------------------+
| en_AU	| English (Australia)                   |
+-------+---------------------------------------+
| ru_RU	| Russian (Russia)                      |
+-------+---------------------------------------+
| tr_TR	| Turkish (Turkey)                      |
+-------+---------------------------------------+
| ms_MY	| Malay (Malaysia)                      |
+-------+---------------------------------------+
| en_PH	| English (Republic of the Philippines) |
+-------+---------------------------------------+
| en_SG	| English (Singapore)                   |
+-------+---------------------------------------+
| th_TH	| Thai (Thailand)                       |
+-------+---------------------------------------+
| vn_VN	| Vietnamese (Viet Nam)                 |
+-------+---------------------------------------+
| id_ID	| Indonesian (Indonesia)                |
+-------+---------------------------------------+
| zh_MY	| Chinese (Malaysia)                    |
+-------+---------------------------------------+
| zh_CN	| Chinese (China)                       |
+-------+---------------------------------------+
| zh_TW	| Chinese (Taiwan)                      |
+-------+---------------------------------------+
