
import {battle, fetchPopularRepos} from './GitHubApi';
import React, { Component } from 'react';


const lang = 'JavaScript';
fetchPopularRepos(lang).then( (repos) => {
   console.log ("repos:", repos);
  this.setState(function () {
    return {
      repos: repos
    }
  });
});

battle([
   "ivanseidel", // https://github.com/ivanseidel
   "honcheng"]  // https://github.com/honcheng
 ).then((results) => {
   if (results === null){
      console.log ('Looks like there was an error!\nCheck that both users exist on github.');
   }
   console.log ("battle result:", results[0], results[1]);
});

class testapi extends Component
{
  render()
  {
    return(
    <div>sdfsdfa</div>
    )
  };
}

export default testapi;