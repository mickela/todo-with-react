import React, { Component } from 'react';

export class Time extends Component {
  constructor(){
    super();
    this.state = {
      time : '12:00 am',
      greeting: 'Good morning 😊🍝',
      date: 'Tuesday · 19 · November · 2019'
    }
  }
  render() {
    const greeting = new Date(), 
    time = greeting.getHours(), 
    daye = greeting.getDay(0), 
    year = greeting.getFullYear(), 
    num = greeting.getDate();
    let monthe = greeting.getMonth();
    monthe++;

    setInterval(()=>{
      // logic for time
      // decide time
      let hh = new Date().getHours(), mm = new Date().getMinutes(), ss = new Date().getSeconds();
      // disable 24-hour time system
      let hour;
      switch(hh){case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:hour = hh;break;case 13:hour = 1;break;case 14:hour = 2;break;case 15:hour = 3;break;case 16:hour = 4;break;case 17:hour = 5;break;case 18:hour = 6;break;case 19:hour = 7;break;case 20:hour = 8;break;case 21:hour = 9;break;case 22:hour = 10;break;case 23:hour = 11;break;default:hour = 12;break;}
      let prime = hh>11 ? 'pm' : 'am';
      // display time
      let whatTime = `${hour} : ${mm} : ${ss} ${prime}`;

    // logic to greet user

      let greetUser;
      if(time >= 0 && time < 12){greetUser = "Good morning 😊🍝"}
      else if(time === 12){greetUser = "Hey, it's noon 🍔"}
      else if(time > 12 && time < 17){greetUser = "Hey it's afternoon 😉"}
      else if(time >= 17 && time < 21){greetUser = "Good evening 🚙"}
      else if(time >= 21){greetUser = "Good night 😴🛌"; document.querySelector("body").classList.add("bg-secondary")}
      
    // logic for day of week
    let day;
    switch(daye){case 1: day = "Monday";break;case 2: day = "Tuesday";break;case 3: day = "Wednesday";break;case 4: day = "Thursday";break;case 5: day = "Friday";break;case 6: day = "Saturday";break;default : day = "Sunday"}
    // logic for month of year
    let month;
    switch(monthe){case 1: month = "January";break;case 2: month = "Febuary";break;case 3: month = "March";break;case 4: month = "April";break;case 5: month = "May";break;case 6: month = "June";break;case 7: month = "July";break;case 8: month = "August";break;case 9: month = "September";break;case 10: month = "October";break;case 11: month = "November";break;default: month = "December";}

      let today =  `${day} ${num} ${month} ${year}`;
      this.setState(()=>({
        time: whatTime,
        greeting: greetUser,
        date: today
      }))

    }, 1000);
    return (
      <React.Fragment>
        {this.state.greeting} <span style={{float:"right"}}>{this.state.time}</span> <br/> {this.state.date}
      </React.Fragment>
    )
  }
}

export default Time;
