Identifying Champion Positions
==============================


What is the problem?
--------------------

You want to know where each champion played on Summoner's Rift.

The Riot API provides role and lane data, but the values are often inaccurate and make it difficult to identify which position a champion played in. There are many different ways of fixing this data, and how you want to fix the data is likely dependent on your use case.

The definitions of "role", "lane", and "position" are all similar, but for the sake of this explanation we use the Riot API's definition of them. The values Riot provides for Role, Lane, and Position are below:

Role: DUO, DUO_CARRY, DUO_SUPPORT, NONE, and SOLO

Lane: TOP_LANE, MID_LANE, BOT_LANE, and JUNGLE

Position: TOP, MIDDLE, JUNGLE, BOTTOM, UTILITY, APEX, and NONE


Fixing the Role and Lane data
-----------------------------

We almost always want to use the Position data in our projects, but Riot only returns Role and Lane in the post-match data.

Below are three ways to calculate "correct" Position data.

A simple mapping
................

The level of accuracy you need is often dependent on your application. For example, if you're making a website and want to display opponents side by side, it's probably not the end of the world if 1 in 10 games (10%) are incorrect. The easiest (and most inaccurate) way to correct roles is to just use the Role and Lane data and convert to Position based on the below mapping. This yields about 87.5% accuracy.

.. code-block:: json

    {
        (MID_LANE, SOLO): MIDDLE,
        (TOP_LANE, SOLO): TOP,
        (JUNGLE, NONE): JUNGLE,
        (BOT_LANE, DUO_CARRY): BOTTOM,
        (BOT_LANE, DUO_SUPPORT): UTILITY
    }

Use playrates
.............

Alternatively, we can use play rate data (e.g. Lux plays mid 30% of the time and support 70% of the time) to determine where each champion on the team played. This method does not use the Lane or Role data at all, and instead relies purely on playrates. This has the advantage that you can calculate the position of each champion before the game has ended, so it works for apps that use the current-game endpoint. Playrate data can be difficult to calculate by yourself, but the champion.gg API provides this data for the current patch. If you want playrate data for previous patches, you'll have to calculate it yourself by pulling a bunch of matches from the Riot API and calculating the statistics. An implementation of this algorithm can be found here: https://github.com/meraki-analytics/role-identification. This yields accuracies in the ~ 95% range.

Use timeline data
.................

Finally, we can use most-match data in the timeline objects to identify the position on the map of the champions throughout the game. We can also look at items, runes, summoner spells, etc. to help narrow down what position the champion likely played in. This is easiest implemented using a machine learning approach. Training data can be found here: https://github.com/Canisback/roleML/blob/master/data/verification_results.csv. An implementation of an SVM (a machine learning model) to identify lanes and roles can be found here: https://github.com/meraki-analytics/role-identification/blob/timeline/timeline-roleidentification/finished_timeline_roleID.ipynb that you can use as an example for your own model. A decision tree is another good machine learning algorithm for this task.

Other useful data
.................

You may also want to consider the history of the summoner playing the champion. For example, you might look at their recent games and see that they played mid 80% of the time. There's then a good chance that they are playing mid in other games as well. This won't be a perfect predictor, but this information may improve your method.
