.. Riot API Libraries documentation master file, created by
   sphinx-quickstart on Wed Feb 20 17:30:31 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Riot Games API Unofficial Community Documentation!
==============================================

You Should Know...
------------------

There are a few crucial things to know about the Riot API.

* Your API key expires every 24 hours unless you `applied for <https://riot-api-libraries.readthedocs.io/en/latest/applications.html>`_ and received a key for a personal or production application. If you're getting a 403 response from the Riot API, you probably just need to refresh your key.

* Applications take ~ two weeks (10 business days, barring holidays) to process. Make sure it's verified (riot.txt). If it's been longer than two weeks and you didn't change your application during that time period, ask a Guru on Discord for help.

* You should use a `library <https://riot-api-libraries.readthedocs.io/en/latest/index.html>`_! All libraries are developed by the community and will make using the Riot API *much* easier. Nearly all of them take care of rate limiting, for example.

* If you have questions, you can ask on the `Discord <https://discordapp.com/invite/012zEL33LUQLlYIHn>`_, but check here first. We try to collect common questions and put them in this documentation.

* To convert champion IDs to names, use `Data Dragon <https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html>`_.

* These docs are written by the community. Riot's official docs can be found `here <https://developer.riotgames.com/>`_.


.. toctree::
   :maxdepth: 2
   :caption: Contents:

   libraries
   ddragon
   applications
   ..specifics
   lcu
   ..replayapi
   ..mobile
   ..collectingdata
   roleid
   ..esports

Riot Games API Unofficial Community Documentation isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
