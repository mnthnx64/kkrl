import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Website';
  details = [
    "UI/UX Design",
    "Web & App",
    "Brand Identity",
    "Icon & Illustration",
    "Digital & Print",
    "24x7 Support"
  ]
  imageMap = {
    "UI/UX Design":"ui",
    "Web & App":"app-development",
    "Brand Identity":"expand",
    "Icon & Illustration":"nature",
    "Digital & Print":"graphic-design",
    "24x7 Support":"customer-service"
  }
  detailDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";
  nav: {
    home: boolean,
    ourProcesses: boolean,
    bestFit: boolean,
    contact: boolean
  } = {
    home: true,
    ourProcesses: false,
    bestFit: false,
    contact: false
  }

  processes = [
    {name:"Requirement\n Gathering", desc:"Our requirement Analysis team works with our client to get overall understanding about the scope of the work"},
    {name:"Use Case &\n Project Planning", desc:"Our PM’s take the requirement scope document and create use case documents for different flows. This also becomes document for UAT."},
    {name:"UI/UX\n Design", desc:"Once the Use case Document is Flow Fidelity Mockup are created with interactions and shared with the client for approval."},
    {name:"UI/UX\n Design", desc:"Once the Low Fidelity is approved. High Fidelity Mockup are created with interactions and shared with the client for approval"},
    {name:"Tech Design\n & Development", desc:"After the Approval For High Fidelity mocks are approved, Our Engineering teams takes up the taks and starts engineering the product. We follow TDD. We prefer API first development."},
    {name:"Testing &\n Deployment", desc:"TDD principle ensures high test coverage for each service written (Unit Tests). Automated Functional Testing of both UI and Backend is done."}
  ];

  onboardSteps = [
    {}
  ]

  change(idx: number){
    console.log(idx);
    switch(idx){
      case(1):{
        this.nav = {
          home: true,
          ourProcesses: false,
          bestFit: false,
          contact: false
        }
        break;
      }
      case(2):{
        this.nav = {
          home: false,
          ourProcesses: true,
          bestFit: false,
          contact: false
        }
        break;
      }
      case(3):{
        this.nav = {
          home: false,
          ourProcesses: false,
          bestFit: true,
          contact: false
        }
        break;
      }
      case(4):{
        this.nav = {
          home: false,
          ourProcesses: false,
          bestFit: false,
          contact: true
        }
        break;
      }
      default:{
        this.nav = {
          home: true,
          ourProcesses: false,
          bestFit: false,
          contact: false
        }
        break;
      }
    }
  }
}
