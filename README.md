# Image Search Abstraction Layer


## Usage:

<i> https://<i></i>murmuring-castle-47824.herokuapp.com/<search-query> </i>
<br/>
<b> Returns array of 10 json objects containing search results for images </b>

<i> https://<i></i>murmuring-castle-47824.herokuapp.com/<search-query>?offset=x </i>
<br/>
<b> Use ?offset=x as pagination, the page numbers start at 0 </b>

<i> https://<i></i>murmuring-castle-47824.herokuapp.com/imagesearch </i>
<br/>
<b> Returns array of 10 json objects containing the most recent queries </b>


## Examples:
<i> Examples will cease to work by Aug 24, 2017 due to bing search key expiration </i>

<b> Query for images relating to fish </b> 
<br/>
https://murmuring-castle-47824.herokuapp.com/fish

<b> Page 2 of images relating to fish </b> 
<br/>
https://murmuring-castle-47824.herokuapp.com/fish?offset=1

<b> Recent search history </b> 
<br/>
https://murmuring-castle-47824.herokuapp.com/imagesearch
