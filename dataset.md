# Dataset and Analysis

## Amazon App Dataset

We used the “Apps for Android” 5-core Dataset which  contains both product ratings and reviews. The dataset  contains 752,937 entries with 87,271 users and 13,209  products (mobile apps). The data is from Amazon.com  and has been collected by Julian McAuley, UCSD.
Below is the snippet of the data:

<pre><code>{
    "reviewerID": "A1N4O8VOJZTDVB", 
    "asin": "B004A9SDD8", 
    "reviewerName": "Annette Yancey", 
    "helpful": [1, 1], 
    "reviewText": "Loves the song, so he really couldn't wait to play this. A little less interesting for him so he doesn't play long, but he is almost 3 and likes to play the older games, but really cute for a younger child.", 
    "overall": 3.0, 
    "summary": "Really cute", 
    "unixReviewTime": 1383350400, 
    "reviewTime": "11 2, 2013"
}

{
    "reviewerID": "A2HQWU6HUKIEC7", 
    "asin": "B004A9SDD8", 
    "reviewerName": "Audiobook lover \"Kathy\"", 
    "helpful": [0, 0], 
    "reviewText": "Oh, how my little grandson loves this app. He's always asking for \"Monkey.\" Grandma has tired of it long before he has. Finding the items on each page that he can touch and activate is endlessly entertaining for him, at least for now. Well worth the $.99.", "overall": 5.0, "summary": "2-year-old loves it", 
    "unixReviewTime": 1323043200, 
    "reviewTime": "12 5, 2011"
}</code></pre>


## Dataset Analysis:

* About half of the items have ratings of 5.
* Average rating is 3.96. 
* On average, an item has 57 ratings. 
* On an average, a user rates about 9 items. 

<table>
    <tr><td><img src='https://github.com/GetRecced/IR670_Spring2018/blob/master/Images/Data%20Analysis/piechart.png'></td><td>
    <img src='https://github.com/GetRecced/IR670_Spring2018/blob/master/Images/Data%20Analysis/scatter_plot.png'></td></tr>
<tr><td><img src='https://github.com/GetRecced/IR670_Spring2018/blob/master/Images/Data%20Analysis/histogram_%23ratings%20per%20item.png'></td><td>
    <img src='https://github.com/GetRecced/IR670_Spring2018/blob/master/Images/Data%20Analysis/histogram_%23ratings%20per%20user.png'></td></tr>
</table>

***
