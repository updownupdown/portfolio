import React from "react";

function About(props) {
  return (
    <div class="panel">
      <div class="row">
        <div class="col-xs">
          <h1>About</h1>
          <ul>
            <li>Style guide, across products</li>
            <li>
              Challenges:
              <ul>
                <li>Sole designer, limited time, lots to do</li>
                <li>No existing guide, design to be redone</li>
                <li>No branding, also to be redone</li>
                <li>
                  Learning a complex product, redesign multiple products, design
                  new features
                </li>
                <li>Limited access to users: create ways to address</li>
                <li>
                  Learning react, docker, git, participating in coding and
                  problem solving
                </li>
              </ul>
            </li>
            <li>
              Products redesign
              <ul>
                <li>FleetLogic, GateWay, Android and iOS apps</li>
                <li>Reusable components</li>
              </ul>
            </li>
            <li>
              Major features
              <ul>
                <li>Ticket scheduling</li>
                <li>Asset board</li>
                <li>GW user access</li>
                <li>Sidebar, Quick access</li>
                <li>Footer component</li>
              </ul>
            </li>
            <li>
              Teamwork
              <ul>
                <li>
                  Worked with various teams, roles, in different capacities
                  (freelance vs coop vs agile…)
                </li>
                <li>
                  Work with product team, front-end dev teams across 3 products,
                  QA, marketing
                </li>
                <li>
                  Work with various team members to find ways to improve the
                  products or raise concerns
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
