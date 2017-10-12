import {getUserData} from './GitHubApi';

class Model
{
  constructor()
  {
    this.inputPlayer1 = "";
    this.inputPlayer2 = "";
    this.callback = null; 
    this.user = "";   
  }
  getValidationState() 
  {
    const length = this.inputPlayer1.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange1(e) 
  {
      this.inputPlayer1 = e.target.value;
      this.notify();
  }
  handleChange2(e) 
  {
      this.inputPlayer2 = e.target.value;
      this.notify();
  }
  getData(e, player)
  {
      e.preventDefault();
    getUserData(player).then((result) => {
        this.user = result;
        console.log(this.user.profile.login)
        this.notify()
    });
  }
  setUser1(user)
  {
    this.user = user;
    this.notify();
  }
  subscribe(render) 
  {
    this.callback = render;
  }
  notify() 
  {
    this.callback();
  }
}

export default Model;