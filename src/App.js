import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Home from './components/Home';
import Contact from './components/Contact';

let data =  {
  "works":[
    {
      "name":"Work title",
      "src":"subnautica.png",
      "id":0
  },
  {
      "name":"Work title",
      "src":"subnautica.png",
      "id":1
  },
  {
      "name":"Work title",
      "src":"subnautica.png",
      "id":2
  },
  {
      "name":"Work title",
      "src":"subnautica.png",
      "id":3
  }
  ],
  "about":{
    "experience":[
      {
        "status":"Actively doing",
        "title":"Freelancing for over 3 years",
        "details":""
      },
      {
        "status":"February 2021 - Present",
        "title":"Graphics Designer",
        "details":"Totto Learning, Kochi"
      },
      {
        "status":"May 2021 Onwards",
        "title":"NSS CEV UNIT Design Lead",
        "details":"CE Vadakara"
      },
      {
        "status":"May 2021 Onwards",
        "title":"IEEE SB Design Team",
        "details":"CE Vadakara"
      },
      {
        "status":"Novemeber 2010 - January 2021",
        "title":"Graphics Design Intern",
        "details":"ABN Junction, Chennai"
      },
      {
        "status":"",
        "title":"Graphics Designer & Co-Founder",
        "details":"Lucidpxi Designs"
      },
    ],
    "education":[
      {
        "status":"2019 - Present",
        "title":"B.Tech Computer Science & Engineering",
        "details":"College of Engineering Vadakara"
      },
      {
        "status":"2016 - 2019",
        "title":"Higher Secondary Education in Computer Science",
        "details":"Lucidpxi Designs"
      },
      {
        "status":"2005 - 2015",
        "title":"Highschool Education",
        "details":"I.A.E.H.S.S Vadakara"
      },
    ]
  }
}

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="bg-blue-50">
          <Switch>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/work">
              <Work data={data.works}/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About data={data.about}/>
            </Route>
          </Switch>
        </div>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
