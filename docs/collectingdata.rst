Collecting Data
===============

Match Data
----------

The best way to collect a large set of matches is not straightforward. Typically you need code that does this:

1. Collect a few summoners by hand. Just your own summoner is likely enough, or you could use all challenger players.

2. Get the account IDs of those summoners.

3. Get their match history on the queue type you want (paginate as far as you want to go, or filter by patch).

4. Success! You have a ton of match IDs, from there, you can fetch their timelines or parse the matches however you want.

Alternatively, Canisback on the Discord currently `hosts <http://canisback.com/matchId/>`_ a list of matches IDs that you can use to pull summoners from the `matches/{matchId}` endpoints. These lists are provided for free to the community for use, and may go down or stop being updated at any time.

Summoner Data
-------------

You can collect summoner data similar to how you collect match data (see above).

You can also use the League endpoints to get lists of ranked summoners. The positional league endpoints provide a paginated list of all summoners in a Tier + Division + Position (e.g. all ranked Diamond II Top laners). Alternatively, Canisback on the Discord currently `hosts <http://canisback.com/leagueId/>`_ a list of league IDs that you can use to pull summoners from the `leagues/{leagueId}` endpoints. These lists are provided for free to the community for use, and may go down or stop being updated at any time.
