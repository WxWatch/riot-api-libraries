LCU - The League Client
=======================

The LCU, which stands for "League Client Update" is the League Client. You use parts of the LCU for your projects.

`This page <https://developer.riotgames.com/league-client-apis.html>`_ contains up-to-date information for which endpoints you are allowed to use.

It's important that you create an `application <https://riot-api-libraries.readthedocs.io/en/latest/applications.html>`_ on the `dev portal <https://developer.riotgames.com/>`_ telling Riot how you are using the LCU in your project. The more information they have about how people are using the LCU, the better feedback they can give to other teams at Riot.

The LCU must be running on your computer, and you must be logged in, in order to use the LCU endpoints.

Rift Explorer
-------------

Pupix on Discord created an excellent app called Rift Explorer to explore the LCU endpoints. You can download it `here <https://github.com/Pupix/rift-explorer>`_.

Vivi on Discord create a `website <http://lcu.vivide.re/>`_ that allows you to view the swagger for the LCU endpoints online.

RIP Korea
---------

Due to Korean laws, players logged into the KR server are not allowed to use applications that leverage the League Client APIs. This may change, but currently this is the policy.

It is your job as a developer to enforce this policy, and you should use :code:`lol-platform-config` to determine if a player has logged into the KR server and disable features that leverage the League Client APIs.


Tips
----

Starting the LCU with the flag :code:`--mode unattended` will allow you to use some of the LCU endpoints without logging in. This is convenient for running the LCU on a headless (no-monitor) server.

You can create a normal game mode lobby by passing the queue ID (:code:`{"queueId":430}`) to the :code:`/lol-lobby/v2/` POST endpoint.

To create a custom game lobby, use the below POST request. Change PRACTICETOOL to CLASSIC if you don't want it to be a practice game.

.. code-block:: json

    POST
    /lol-lobby/v2/lobby
    {
      "customGameLobby": {
        "configuration": {
          "gameMode": "PRACTICETOOL", "gameMutator": "", "gameServerRegion": "", "mapId": 11, "mutators": {"id": 1}, "spectatorPolicy": "AllAllowed", "teamSize": 5
        },
        "lobbyName": "Name",
        "lobbyPassword": null
      },
      "isCustom": true
    }
