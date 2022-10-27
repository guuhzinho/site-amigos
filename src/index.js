//gu
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/852961510933266452"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("gu").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("gu");
  document.getElementById("username");
});
//matheus
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/758322763819253800"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("matheus").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("matheus");
  document.getElementById("username");
});
//why
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/996360706272264283"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("why").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("why");
  document.getElementById("username");
});
//kyoto
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/1004687249146916954"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("kyoto").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("kyoto");
  document.getElementById("username");
});
//flp
'use strict';
fetch(("https://discord-web-api.glitch.me/discord/user/730578963503644692"), {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  console.log(fieldDescribe.username);
  document.getElementById("flp").src = fieldDescribe.url;
  document.getElementById("username").src = fieldDescribe.username;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("flp");
  document.getElementById("username");
});