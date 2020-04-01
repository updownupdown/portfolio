import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";

function Components(props) {
  return (
    <>
      <Browse component="Components" pos="top" />
      <div className="panel">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="textbox white">
                <h3>Buttons</h3>
                <p>
                  Buttons are used extensively across two apps, one of which
                  uses a dedicated "shop" colour variant (in yellow). The
                  component was designed so that it could be developed with
                  optional properties for variants, text, icon, and icon
                  placement, to make it easier and foolproof to implement in the
                  code.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col xs={12}>
              <img src="/components/buttons.png" alt="Button styles" />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>

      <div className="panel panel-grey">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <img src="/components/aggrid.png" alt="ag-Grid Table" />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <div className="panel">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="textbox white">
                <h3>Toggle, Alerts and Tooltips</h3>
              </div>
            </Grid.Col>
            <Grid.Col xs={12}>
              <img
                src="/components/toggles.png"
                alt="Toggles, radio buttons, checkboxes, alerts and tooltips"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <div className="panel panel-grey">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="textbox">
                <h3>Pagination</h3>
                <p>
                  The pagination component is used extensively, as it is
                  included within several other components, from large tables to
                  search result dropdowns. The component was optimized to reduce
                  clutter and emphasize the most commonly used actions, while
                  also providing useful functionality at higher screen widths.
                </p>
                <p>
                  The first and last page numbers are always shown, and act as
                  "First" and "Last" shortcuts. Elipses are used to truncate the
                  page list, but also as a way to "go to" specific pages in the
                  list (that functionality is seldom used, so it was not
                  provided separately, but still remains available for power
                  users). The component gracefully shrinks at lower resolution,
                  progressively hiding advanced components, while keeping the
                  key buttons available.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col xs={12}>
              <img
                className="align-center"
                src="/components/pagination.png"
                alt="Pagination component"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <div className="panel">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="textbox white">
                <h3>Inputs</h3>
                <p>
                  While inputs are standard fare across any app, great care was
                  made to standarize various input types so as to provide
                  consistency for both developers and users.
                </p>
                <p>
                  The input components in Figma were designed to be extremely
                  easy to use. Labels have "required" and "info" objects that
                  can be quickly toggled on or off. Inputs can be used on their
                  own, or with a label component attached. Toggling between
                  different input types (e.g. text, dropdown, password, etc.) or
                  input states (default, placeholder, readonly, etc.) makes full
                  use of Figma's compononent instances, and only takes a couple
                  clicks.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col xs={12}>
              <img src="/components/inputs.png" alt="Inputs" />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>

      <div className="panel panel-grey">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <img
                src="/components/panels.png"
                alt="Panels, tabs, accordions, and modals"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <div className="panel">
        <Grid>
          <Grid.Row>
            <Grid.Col xs={12}>
              <div className="textbox white">
                <h3>Search Inputs</h3>
                <p>
                  In addition to traditional search boxes, dropdowns, or
                  autocomplete inputs, some parts of the app really benefit from
                  custom designed and developed components.
                </p>
                <p>
                  An advanced multi-select component allows users to select one
                  or multiple items in a list. A search bar is necessary when
                  the list contains more than 20 items. Small "cards" allow
                  users to quickly deselect the first few items (or deselect
                  all) without opening the drop down.
                </p>
                <p>
                  A search table dropdown is used when a plain autocomplete
                  search result may not provide enough information to make an
                  informed selection.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col xs={12}>
              <img src="/components/search.png" alt="Search input types" />
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <Browse component="Components" pos="bottom" />
    </>
  );
}

export default Components;
