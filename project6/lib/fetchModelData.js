var Promise = require('promise');

/**
  * FetchModel - Fetch a model from the web server.
  *     url - string - The URL to issue the GET request.
  * Returns: a Promise that should be filled
  * with the response of the GET request parsed
  * as a JSON object and returned in the property
  * named "data" of an object.
  * If the requests has an error the promise should be
  * rejected with an object contain the properties:
  *    status:  The HTTP response status
  *    statusText:  The statusText from the xhr request
  *
*/
function fetchModel(url) {
  var obj;
  fetch(url)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => console.log(obj));
return obj;
}

export default fetchModel;
