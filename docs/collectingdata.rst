Collecting Data
===============

Match Data
----------

The best way to collect a large set of matches is not straightforward. Typically you will write code that does this:

1. Collect a few summoners by hand. Just your own summoner is likely enough, or you could use all challenger players.

2. Get the account IDs of those summoners.

3. Get their match history on the queue type you want (paginate as far as you want to go, or filter by patch).

4. Success! You have a ton of match IDs, from there, you can fetch their timelines or parse the matches however you want.
