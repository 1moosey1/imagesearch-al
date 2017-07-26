# Image Search Abstraction Layer


Usage:

https://<i></i>murmuring-castle-47824.herokuapp.com/<search-query>
Returns array of 10 json objects containing search results for images

https://<i></i>murmuring-castle-47824.herokuapp.com/<search-query>?offset=x
Use ?offset=x as pagination, the page numbers start at 0

https://<i></i>murmuring-castle-47824.herokuapp.com/imagesearch
Returns array of 10 json objects containing the most recent queries


Examples:
Examples will cease to work by Aug 24, 2017 due to bing search key expiration

Query for images relating to fish
https://murmuring-castle-47824.herokuapp.com/fish

Page 2 of images relating to fish
https://murmuring-castle-47824.herokuapp.com/fish?offset=1

Recent search history
https://murmuring-castle-47824.herokuapp.com/imagesearch