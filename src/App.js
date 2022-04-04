import Question from './components/question'
import Answer from './components/answer'
import React, { useLayoutEffect, useState } from 'react';
import Apply from './components/apply'

var A = 'How did you feel before you went to sleep?'
var B = 'What did you do before you fell asleep?'
var C = 'How did you feel upon waking?'
var D = 'Have you had this dream before?'
var E = 'Did you enjoy this dream?'
var F = 'Did you experience any of these in your dream?'
var G = 'Results'

var A1 = 'Happy'
var A2 = 'Sad'
var A3 = 'Loved'
var A4 = 'Afraid'
var A5 = 'Stressed'
var A6 = 'Angry'
var A7 = 'None of the above'

//B
var B1 = 'Watched TV/Read'
var B2 = 'Ate a snack or meal'
var B3 = 'Alcohol/drugs'
var B4 = 'Took melatonin/ sleep remedy'
var B5 = 'Prayed/meditated'
var B6 = 'Hanky panky'

var B7 = 'None of the above'
//C
var C1 = 'Happy '
var C2 = 'Sad '
var C3 = 'Loved '
var C4 = 'Afraid '
var C5 = 'Stressed '
var C6 = 'Angry '
var C7 = 'None of the above '
//D
var D1 = 'Yes'
var D2 = 'No'
//E
var E1 = 'Yes '
var E2 = 'No '
var E3 = 'Neither'
//F
var F1 = 'Flying'
var F2 = 'Being chased/fighting'
var F3 = 'Falling'
var F4 = 'Lost'
var F5 = 'Death'
var F6 = 'Birth'
//A.
var a1 = 'Honor the happiness you felt before drifting off to dream land, no matter the outcome. You deserve to be happy.'
var a2 = 'Honor the sadness you felt before drifting off to dream land, no matter the outcome. Sadness is a beautiful way to be human. Allow yourself to feel it.'
var a3 = 'Honor the love you felt before drifting off to dream land, no matter the outcome. Love is a feeling to hold onto and return to, regardless of your dreams and circumstances.'
var a4 = 'Honor the fear you felt before drifting off to dream land, no matter the outcome. Life is scary. Look to your dreams as a place to practice being brave. Consider a bedtime routine that calms you. What can you change to make you feel safe?'
var a5 = 'Honor the stress you felt before drifting off to dream land, no matter the outcome. Find the clues in your dream that guide you in what needs to change, for you to live life with ease.'
var a6 = 'Honor the anger you felt before drifting off to dream land, no matter the outcome. If you let the sun go down on your anger, be prepared for a bumpy dream ride. Don’t hold your anger in. Perhaps, your dream will be the release you need.'
var a7 = 'Honor the feelings—vague, unknown or clear—that you felt before drifting off to dream land, no matter the outcome. Reflect a moment on what you felt and how that energy impacted your dream.'
//B.
var b1 = 'Your bedtime activities can influence your sleep and dreams. Think about what you watched or read before sleep and if your dreams reflected some version of that.'
var b2 = 'Food can impact sleep and dreams. Look for patterns. Make choices that nurture your sleep and dreams.'
var b3 = 'Adult substances can impact sleep and dreams. Look for patterns. Make choices that nurture your sleep and dreams.'
var b4 = 'If you use melatonin or other sleep remedies, you probably have identified a sleep disturbance. Insomnia might be your middle name. Read about segmented sleep throughout history and cultures. Maybe some ancestral wisdom can help you access what you need to sleep more peacefully.'
var b5 = 'Your quiet time before bed is grounding and setting the tone for insightful dreams.'
var b6 = 'If a pre-bed workout reduces your stress and tires you out, enjoy the benefits of a little pre-dream bop. Pay attention to how it impacts your dream life. Maybe you’ll discover something fun.'
var b7 = 'Your bedtime activities can influence your sleep and dreams. Think about what you did before sleep and if your dreams reflected some version of that.'
//C. 
var c1 = 'Even if you don’t recall every detail of your dream, notice how you feel as you wake up. Think of the feeling the dream gave you, not the situation you are waking up to. That waking-up-feeling means more than any symbol. What made you happy about this dream? It’s OK if you don’t know. Just know that some experience in the dream called on you to reflect on your happiness.'
var c2 = 'Even if you don’t recall every detail of your dream, notice how you feel as you wake up. Think of the feeling the dream gave you, not the situation you are waking up to. That waking-up-feeling means more than any symbol. What made you sad about this dream? It’s OK if you don’t know. Just know that some experience in the dream called on you to reflect on your sadness.'
var c3 = 'if you don’t recall every detail of your dream, notice how you feel as you wake up. Think of the feeling the dream gave you, not the situation you are waking up to. That waking-up-feeling means more than any symbol. What made you feel loved in this dream? It’s OK if you don’t know. Just know that some experience in the dream called on you to reflect on love.'
var c4 = 'if you don’t recall every detail of your dream, notice how you feel as you wake up. Think of the feeling the dream gave you, not the situation you are waking up to. That waking-up-feeling means more than any symbol. What made you feel fear about this dream? It’s OK if you don’t know. Just know that some experience in the dream called on you to reflect on your fears.'
var c5 = 'if you don’t recall every detail of your dream, notice how you feel as you wake up. Think of the feeling the dream gave you, not the situation you are waking up to. That waking-up-feeling means more than any symbol. What made you stressed about this dream? It’s OK if you don’t know. Just know that some experience in the dream called on you to reflect on your stress.'
var c6 = 'if you don’t recall every detail of your dream, notice how you feel as you wake up. Think of the feeling the dream gave you, not the situation you are waking up to. That waking-up-feeling means more than any symbol. What made you angry about this dream? It’s OK if you don’t know. Just know that some experience in the dream called on you to reflect on your anger.'
var c7 = 'if you don’t recall every detail of your dream, notice how you feel as you wake up. Think of the feeling the dream gave you, not the situation you are waking up to. That waking-up-feeling means more than any symbol. What made you feel this self-described way about this dream? It’s OK if you don’t know. Just know that some experience in the dream called on you to reflect on this feeling.'
//D. 
var d1 = 'Recurring dreams can be like a favorite song or movie, or they can haunt us for life. At its best, this dream tells a story that is a guide, a teacher, a dear old friend. Let it be a reminder of who you are and what brings you joy. On the flip side, this dream could offer healing through it’s nightmarish or uncomfortable nature. The problem in the dream could mirror a problem in your life. I have found that when we deal with our issues in waking life, the bulk of the bad dreams go away.'
var d2 = ''
//23. [Skip to next question]
var e1 = 'This dream is here to support you and speak to the things you want in life. How can you bring the essence of this experience into your life? You may not be able to fully recreate it. Just find a small way to honor the dream.'
var e2 = 'Dreams are gifts, even when we don’t enjoy them. They let us get out our anger, prepare for danger, face our fears, etc. What a relief to wake up and know it was just a dream. This is a great time to show some gratitude for all that is good in your world.'
var e3 = 'landed in that mysterious space where a dream is not one you love or hate. It just IS. It is likely to have some complexity, maybe a dream that is disjointed in some way, a lot wrapped up in one experience. Life is like this. It is an opportunity to take what you need from any situation and let go of what doesn’t serve you.' 
//F.
var f1 = 'I once read that flying dreams mean you want to escape. That’s only true if it’s true for you. Sometimes, a girl just wants to fly. It feels good and is empowering. Dig deep. What does that experience represent to you?'
var f2 = 'In dreams, my feet are stuck. I can never get away. Practice being brave in dreams. In your waking life, vow to confront the aggressors the next time they chase you. The dream landscape is your playground to test your strength.'
var f3 = 'In dreams, my feet are stuck. I can never get away. Practice being brave in dreams. In your waking life, vow to confront the aggressors the next time they chase you. The dream landscape is your playground to test your strength.'
var f4 = 'In elementary school, kids used to say that if you had a falling dream and hit the ground, you would die. How would anyone know? I wondered. What is falling to you? A fun release? Being out of control? A theme in a movie you watched before bed? Choose your own adventure.'
var f5 = 'In dreams, the living may die, and the dead may return to life. Many fear their death dreams are premonitions. But everyone will leave this earth eventually. See the death dream as a reminder to love the living and feel the love and redemption of those who have departed.'
var f6 = 'If you are not expecting the arrival of new life in some form, look at the metaphor. What are you trying to birth or create in life? Reflect on the things you have already created that you are proud of.' 
alert(Date.now())
var urlBeg = 'https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004955/frames/730x730_1x1_30p/moon.'
var urlMid = '0960'
//for(i=0;i<1000;)
var urlEnd = '.jpg'
var url = urlBeg+urlMid+urlEnd
var feedback = [];
let date = new Date("2022-01-01");
alert(date);
let now = new Date();
alert( now ); // shows current date/time
var hours = Math.abs(date - now) / 36e5;
alert(hours)
function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [fun, setFun] = useState(A)
 
  const [events, setEvents] = useState(A1)
  const [events2, setEvents2] = useState(A2)
  const [events3, setEvents3] = useState(A3)
  const [events4, setEvents4] = useState(A4)
  const [events5, setEvents5] = useState(A5)
  const [events6, setEvents6] = useState(A6)
  const [events7, setEvents7] = useState(A7)
  const [next1, setnext1] = useState('Next')
   //setWidth = width-(d)
  //makeFun takes in a string variable and checks which corresponding function to call 

var Width = (79-(.05*(1280-width)))
var Width2 = (70-(.05*(1280-width)))
var moon = (48-(.05*(1350-width)))
var fontS = (60-(.05*(1280-width)))
  const makeFun = (a) => {
      if( a === 'Happy'){
        return(Happy)
      }
      if( a === 'Sad'){
        return(Sad)
      }
      if( a === 'Loved'){
        return(Loved)
      }
      if( a === 'Afraid'){
        return(Afraid)
      }
      if( a === 'Stressed'){
        return(Stressed)
      }
      if( a === 'Angry'){
        return(Angry)
      }
      if( a === 'None of the above'){
        return(NOTA)
      }
      if( a === 'Watched TV/Read') {
        return(Watched_TV)
      }
      if( a === 'Ate a snack or meal') {
        return(Ate)
      }
      if( a === 'Took melatonin/ sleep remedy') {
        return(Remedy)
      }
      if( a ===  'Alcohol/drugs') {
        return(Drugs)
      }
      if( a === 'Prayed/meditated') {
        return(Prayed)
      }
      if( a === 'Hanky panky') {
        return(Hanky)
      }
      if( a === 'None of the above ') {
        return(NOTA2)
      }
      if( a === 'Happy '){
        return(Happy2)
      }
      if( a === 'Sad '){
        return(Sad2)
      }
      if( a === 'Loved '){
        return(Loved2)
      }
      if( a === 'Afraid '){
        return(Afraid2)
      }
      if( a === 'Stressed '){
        return(Stressed2)
      }
      if( a === 'Angry '){
        return(Angry2)
      }
      if( a === 'NOTA3'){
        return(NOTA3)
      }
      if( a === 'Yes'){
        return(Yes1)
      }
      if( a === 'No'){
        return(No1)
      }
      if( a === 'Yes '){
        return(Yes2)
      }
      if( a === 'No '){
        return(No2)
      }
      if( a === 'Neither'){
        return(Neither)
      }
      if( a === 'Flying'){
        return(Flying)
      }
      if( a === 'Being chased/fighting'){
        return(Chased)
      }
      if( a === 'Falling'){
        return(Falling)
      }
      if( a === 'Lost'){
        return(Lost)
      }
      if( a === 'Death'){
        return(Death)
      } 
      if( a === 'Birth'){
        return(Birth)
      }  
      if(a === 'Next'){
        return(Next)
      }
  }
  //function that builds the feedback list and turns selected button white
  
  const Happy = () =>{
    feedback.push(a1)
    const btn1 = document.querySelector("button1");
    btn1.style.color = "white"
  }
  const Sad = () => {
    feedback.push(a2)
    const btn2 = document.querySelector("button2");
    btn2.style.color = "white"
  }
  const Loved = () => {
    feedback.push(a3)
    const btn3 = document.querySelector("button3");
    btn3.style.color = "white"
  }
  const Afraid = () => {
    feedback.push(a4)
    const btn4 = document.querySelector("button4");
    btn4.style.color = "white"
  }
  const Stressed = () => {
    feedback.push(a5)
    const btn5 = document.querySelector("button5");
    btn5.style.color = "white"
  }
  const Angry = () => {
    feedback.push(a6)
    const btn6 = document.querySelector("button6");
    btn6.style.color = "white"
  }
  const NOTA = () => {
    feedback.push(a7)
    const btn7 = document.querySelector("button7");
    btn7.style.color = "white"
  }
  const NOTA2 = () => {
    feedback.push(b7)
    const btnb7 = document.querySelector("buttonb7");
    btnb7.style.color = "white"
  }
  const Watched_TV = () => {
    feedback.push(b1)
    const btnb1 = document.querySelector("buttonb1");
    btnb1.style.color = "white"
  }
  const Ate = () => {
    feedback.push(b2) 
    const btnb2 = document.querySelector("buttonb2");
    btnb2.style.color = "white"
  }
  const Drugs = () => {
    feedback.push(b3)
    const btnb3 = document.querySelector("buttonb3");
    btnb3.style.color = "white" 
  }
  const Remedy = () => {
    feedback.push(b4)
    const btnb4 = document.querySelector("buttonb4");
    btnb4.style.color = "white"
  }
  const Prayed = () => {
    feedback.push(b5)
    const btnb5 = document.querySelector("buttonb5");
    btnb5.style.color = "white"
  }
  const Hanky = () => {
    feedback.push(b6)
    const btnb6 = document.querySelector("buttonb6");
    btnb6.style.color = "white"
  }
  const Happy2 = () =>{
    feedback.push(c1)
 
    const btnc1 = document.querySelector("buttonc1");
    btnc1.style.color = "white"
  }
  const Sad2 = () => {
    feedback.push(c2)
    const btnc2 = document.querySelector("buttonc2");
    btnc2.style.color = "white"
  }
  const Loved2 = () => {
    feedback.push(c3)
    const btnc3 = document.querySelector("buttonc3");
    btnc3.style.color = "white"
  }
  const Afraid2 = () => {
    feedback.push(c4)
    const btnc4 = document.querySelector("buttonc4");
    btnc4.style.color = "white"
  }
  const Stressed2 = () => {
    feedback.push(c5)
    const btnc5 = document.querySelector("buttonc5");
    btnc5.style.color = "white"
  }
  const Angry2 = () => {
    feedback.push(c6)
    const btnc6 = document.querySelector("buttonc6");
    btnc6.style.color = "white"
  }
  const NOTA3 = () => {
    feedback.push(c7)
    const btnc7 = document.querySelector("buttonc7");
    btnc7.style.color = "white"
  }
  const Yes1 = () => {
    feedback.push(d1)
    const btnd1 = document.querySelector("buttond1");
    btnd1.style.color = "white"
  }
  const No1 = () => {
    feedback.push(d2) 
    const btnd2 = document.querySelector("buttond2");
    btnd2.style.color = "white"
  }
  const Yes2 = () => {
    feedback.push(e1)
    const btne1 = document.querySelector("buttone1");
    btne1.style.color = "white"
  }
  const No2 = () => {
    feedback.push(e2)
    const btne2 = document.querySelector("buttone2");
    btne2.style.color = "white"
  }
  const Neither = () => {
    feedback.push(e3)
    const btne3 = document.querySelector("buttone3");
    btne3.style.color = "white"
  }
  const Flying = () => {
    feedback.push(f1)
    const btnf1 = document.querySelector("buttonf1");
    btnf1.style.color = "white"
  }
  const Chased = () => {
    feedback.push(f2)
    const btnf2 = document.querySelector("buttonf2");
    btnf2.style.color = "white"
  }
  const Falling = () => {
    feedback.push(f3)
    const btnf3 = document.querySelector("buttonf3");
    btnf3.style.color = "white"
  }
  const Lost = () => {
    feedback.push(f4)
    const btnf4 = document.querySelector("buttonf4");
    btnf4.style.color = "white"
  }
  const Death = () => {
    feedback.push(f5)
    const btnf5 = document.querySelector("buttonf5");
    btnf5.style.color = "white"
  }
  const Birth = () => {
    feedback.push(f6)
    const btnf6 = document.querySelector("buttonf6");
    btnf6.style.color = "white"
  }
 
  //decides which components to display based on the question being asked
  if(width<600){
    var width1 = 22-((1280-width)*0.01)
    var left = 230-((1280-width)*0.017)
    var height1 =10
    var fontS = 18-((1280-width)*0.01)
    var nextL = 230-((1280-width)*0.017)
   }
  if((width<700)&&(width>599)){
    var width1 = 20.5-((1280-width)*0.017)
    var left = 280-((1280-width)*0.017)
    var height1 =10
    var fontS = 19-((1280-width)*0.01)
    var nextL = 280-((1280-width)*0.017)
}
if((width<800)&&(width>699)){
  var width1 = 20.5-((1280-width)*0.017)
  var left = 330-((1280-width)*0.017)
  var height1 =10
  var fontS = 19-((1280-width)*0.01)
  var nextL = 330-((1280-width)*0.017)
}
if((width<900)&&(width>799)){
    var width1 = 19.5-((1280-width)*0.01)
    var left = 320-((1280-width)*0.017)
    var height1 =10
    var fontS = 20-((1280-width)*0.01)
    var nextL = 320-((1280-width)*0.017)
}
if((width<1000)&&(width>899)){
    var width1 = 18.5-((1280-width)*0.01)
    var left = 330-((1280-width)*0.017)
    var height1 =10
    var fontS = 21-((1280-width)*0.01)
    var nextL = 333-((1280-width)*0.017)
}
if((width<1100)&&(width>999)){
  var width1 = 18.5-((1280-width)*0.01)
  var left = 330-((1280-width)*0.017)
  var height1 =10
  var fontS = 21-((1280-width)*0.01)
  var nextL = 333-((1280-width)*0.017)
}
if((width<1200)&&(width>1099)){
  var width1 = 18.5-((1280-width)*0.01)
  var left = 330-((1280-width)*0.017)
  var height1 =10
  var fontS = 21-((1280-width)*0.01)
  var nextL = 333-((1280-width)*0.017)
}
 
if(width>1199){
var width1 = 20.5-((1280-width)*0.01)
var left = 340-((1280-width)*0.017)
var height1 =10
var fontS = 21-((1280-width)*0.01)
var nextL = 345-((1280-width)*0.017)
}
 alert(width)   


  const Next = () => {
    if(fun === A) {
      setFun(B)
      setEvents(B1)
      setEvents2(B2)
      setEvents3(B3)
      setEvents4(B4)
      setEvents5(B5)
      setEvents6(B6)
      setEvents7(B7)
      
    }
    if(fun === B) {
      setFun(C)
      setEvents(C1)
      setEvents2(C2)
      setEvents3(C3)
      setEvents4(C4)
      setEvents5(C5)
      setEvents6(C6)
      setEvents7(C7)
    }
    if(fun === C) {
      setFun(D)
      setEvents(D1)
      setEvents2(D2)
    }  
    if(fun === D) {
      setFun(E)
      setEvents(E1)
      setEvents2(E2)
      setEvents3(E3)
    }
    if(fun === E) {
      setFun(F)
      setEvents(F1)
      setEvents2(F2)
      setEvents3(F3)
      setEvents4(F4)
      setEvents5(F5)
      setEvents6(F6)
    }  
    if(fun ===(F)) {
      setFun(G)
      setEvents(feedback)
    }
  }

	return(
    
	<html lang="en">
    
  	<head>
    	<title>Tanessa Dreams</title>
    	<meta charset="utf-8"/>
    	<meta name="viewport" content="width=device-width, initial-scale=1"/> 
    	<link rel="icon" href="tanessadreams.ico"/>
   		<link rel="stylesheet" href="https://use.typekit.net/qop2twf.css"/>  
  	</head>
    <div>
    <nav className="index">
  		<div class="wrapper"></div>
  		<div id="table-container"></div>
    	<h1>T <p1>A N E S S A    </p1><p1> </p1> D <p1>R E A M S</p1></h1>		

    </nav>
        <p> 
        <Question question = {fun} width = {width} height = {height} A = {A} />
        </p>
        <p>
        <Apply width = {width} apply = {fun} F = {F} D = {D} E = {E} G = {G} A = {A} B = {B} C = {C}/>
        </p>
        <p3><Answer next1 = {next1} t = {fun} width = {width} height = {height} makeFun = {makeFun} events = {events} Next = {Next} events2 = {events2} events3 = {events3} events4 = {events4} events5 = {events5} events6 = {events6} events7 = {events7}/></p3>
       
      <img src = {url} width= '170' height='170' border='120'></img>
    </div>
   
 
    
    
    
    <style global jsx>{`
      h1 {
      color:grey; 
      background-color: white;
      text-align: center;
      font-family: brother-1816-printed, sans-serif;
      font-weight: 20;
      font-style: italic;
      font-size: ${Width}px;
      font-color: white;
      border-radius: 225px 15px 225px 15px/15px 225px 15px 255px;
      position: relative;
    }
   div1 {
     position: absolute;
   }
    p3 {
       
      color:grey; 
      background-color:black;
      font-family:Verdana;
      display:inline-block;
      white-space: nowrap;
      margin: 2em;
      padding:1em;
      left: -13%;
      line-height:-.5em;
      text-align:center;
      position: absolute;
      font-size:4px; 
    }
    p1 {
      color:grey; 
      background-color: white;
      text-align: center;
      font-family: brother-1816-printed, sans-serif;
      font-weight: 100;
      font-style: normal;
      font-size: ${Width2}px;
      font-color: white;
      padding: 1px 7px;
      border-radius: 225px 15px 225px 15px/15px 225px 15px 255px;
      
    }
    p {
      font-size:30px; 
      color:grey; 
      background-color:black;
      font-family:Verdana;
      display:inline-block;
      white-space: nowrap;
      margin: auto;
      padding:0em;
      line-height:0.5em;
      text-align:center;
      position: absolute;
    }
    
  b {
    color: grey
    text-align:center;
    white-space: nowrap;
    margin: -145px;
    line-height:0.5em;
    position: absolute;
  }
  

  button1{ 
    min-width: 10ch;
    max-width: 20ch;
    max-height: 9.7ch;
    border: none;
    margin: 0px;
    left: ${left}%;
    padding: 0em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${height1};
    display: grid;
    align-items: center;
    position: relative;
    
  }
  button2{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  
  button3{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  button4{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  button5{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  button6{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  button7{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${width1}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
 
  buttonb1{
    min-width: 10ch;
    max-width: 20ch;
    max-height: 9.7ch;
    border: none;
    margin: 6px;
    left: ${left-152}%;
    padding: 0em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${height1};
    display: grid;
    align-items: center;
    position: relative;
    
    
  }
  buttonb2{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left-157.5}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
   
  }
  buttonb3{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left-158.5}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonb4{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left-166}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonb5{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left-158}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonb6{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left-159}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonb7{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left-202}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonc1{
    min-width: 10ch;
    max-width: 20ch;
    max-height: 9.7ch;
    border: none;
    margin: 0px;
    left: ${left}%;
    padding: 0em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${height1};
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonc2{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonc3{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonc4{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonc5{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonc6{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonc7{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    left: ${left}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttond1{ 
    min-width: 10ch;
    max-width: 20ch;
    max-height: 9.7ch;
    border: none;
    margin: 0px;
    left: ${left+14}%;
    padding: 0em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${height1};
    display: grid;
    align-items: center;
    position: relative;
    
  }
  buttond2{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left+14}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttone1{
   
    min-width: 10ch;
    max-width: 20ch;
    max-height: 9.7ch;
    border: none;
    margin: 0px;
    left: ${left+14}%;
    padding: 0em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${height1};
    display: grid;
    align-items: center;
    position: relative;
  }
  buttone2{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left+14}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttone3{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left+14}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonf1{ 
    min-width: 10ch;
    max-width: 20ch;
    max-height: 9.7ch;
    border: none;
    margin: 0px;
    left: ${left-116}%;
    padding: 0em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${height1};
    display: grid;
    align-items: center;
    position: relative;
    
  }
  buttonf2{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left-116}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonf3{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left-116}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonf4{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left-116}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonf5{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left-116}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  buttonf6{
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 6px;
    
    left: ${left-116}%;
    padding: 1em;
    font-size: ${fontS}px;
    text-align: center;
    line-height: ${10}px;
    display: grid;
    align-items: center;
    position: relative;
  }
  button{
    
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 26px;
    left: ${nextL}%;
    font-size: ${fontS}px;
    line-height: ${height1-10}px;
    display: grid;
    align-items: center;
    position: relative;
    text-color: grey;
    color:grey;
    background-color: black;
  }
  buttonN2{
    
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 26px;
    left: ${nextL-164}%;
    font-size: ${fontS}px;
    line-height: ${height1}px;
    display: grid;
    align-items: center;
    position: relative;
    text-color: grey;
    color:grey;
    background-color: black;
  }
  buttonN3{
    
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 26px;
    left: ${nextL-5}%;
    font-size: ${fontS}px;
    line-height: ${height1}px;
    display: grid;
    align-items: center;
    position: relative;
    text-color: grey;
    color:grey;
    background-color: black;
  }
  buttonN4{
    
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 26px;
    left: ${nextL+10}%;
    font-size: ${fontS}px;
    line-height: ${height1}px;
    display: grid;
    align-items: center;
    position: relative;
    text-color: grey;
    color:grey;
    background-color: black;
  }
  buttonN5{
    
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 26px;
    left: ${nextL+10}%;
    font-size: ${fontS}px;
    line-height: ${height1}px;
    display: grid;
    align-items: center;
    position: relative;
    text-color: grey;
    color:grey;
    background-color: black;
  }
  buttonN6{
    
    min-width: 10ch;
    max-width: 20ch;
    border: none;
    margin: 26px;
    left: ${nextL-121}%;
    font-size: ${fontS}px;
    line-height: ${height1}px;
    display: grid;
    align-items: center;
    position: relative;
    text-color: grey;
    color:grey;
    background-color: black;
  }
  body {
    background-color: black;
    background-repeat: no-repeat;
    background-attachment: fixed; 
    background-size: cover;
  }
  img{
    position:relative;
    max-width: ${moon}ch;
    max-height: ${moon}ch;
    border: none;
   
  }
  
  a {
    left: 125px;
    min-width: 10ch;
    max-width: 20ch;
    border: 20px solid var(--select-border);
    border-radius: .3em;
    appearance: none;
    color:grey;
    background-color: black;
    border: none;
    margin: 6px;
    width: 40%;
    left: 50%;
    font-family: inherit;
    font-size: 16px;
    text-align: center;
    cursor: inherit;
    line-height: 40px;
    display: grid;
    align-items: center;
    position: relative;
    z-index: 1;
    outline: none;
  }
  box{
    background-color:#02f3e5;
border-radius:4px;
font-size:16px;
padding:15px;
margin:5px;
word-break: break-word; 
  }
  a {
    background-color: black;
    color: white;
    inline-size: 150px;
    overflow-wrap: break-word;
    word-break: break-word; 
  }
  `}</style>	
</html>
);};	
export default App;
