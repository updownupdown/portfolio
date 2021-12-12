import React from "react";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";
import { motion } from "framer-motion";

function View() {
  return (
    <>
      <Browse component="View" pos="top" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="panel">
          <Grid>
            <Grid.Row className="middle-xs">
              <Grid.Col xs={12} lg={5}>
                <div className="textbox">
                  <h3>Intellijoint VIEW React App</h3>
                  <p>
                    The VIEW web app is used by surgeons to plan hip replacement
                    surgeries. The chosen implant systems, sizes, and target
                    positions are then used in Intellijoint's HIP product to
                    assist the surgeon intra-operatively.
                  </p>
                </div>
              </Grid.Col>
              <Grid.Col className="center-xs" xs={12} lg={7}>
                <img
                  src="/images/view/welcome-screen.png"
                  className="shadowed"
                  alt="VIEW welcome screen"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
        <div className="panel panel-grey">
          <Grid>
            <Grid.Row>
              <Grid.Col>
                <div className="textbox">
                  <h3>Templating Workflow</h3>
                  <p>
                    The templating screen is used to select the cup and stem
                    implant systems and sizes that will best fit the patient, so
                    that the right hardware can be made available for the
                    surgery. The user uploads a patient x-ray image, uses the
                    scaling tool to properly scale the image, then selects and
                    positions simplified implants drawings on the image.
                    Traditionally, this was done using a set of acetate sheets
                    supplied by the implant manufacturer. A surgeon may also
                    want to preserve or modify the position of the leg relative
                    to the hip; this workflow is also used to predict the length
                    leg and offset that would result if the implants were
                    positioned according to the plan.
                  </p>
                  <p>
                    In practice, cases are planned very quickly, often on the
                    same day as the surgery. Competing apps tend to be feature
                    bloated and have outdated UI. Therefore, making the VIEW
                    interface clean and intuitive was one of our primary goals.
                    This was achieved in part by designing and developing
                    custom, optimized components, conducting user interviews and
                    testing, and iterating through designs based on that
                    feedback.
                  </p>
                </div>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="middle-xs">
              <Grid.Col>
                <img
                  className="spaced shadowed"
                  src="/images/view/layout-templating.png"
                  alt="Templating workflow"
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="middle-xs">
              <Grid.Col>
                <div className="textbox">
                  <h3>Hip-Spine Workflow</h3>
                  <p>
                    The Hip-Spine screen is primarily used to determine the
                    optimal cup (implant) angle, and to identify more at-risk
                    cases that would require specific implant types or
                    positioning. This is achieved by measuring critical
                    anatomical landmarks on x-rays of the same patient in
                    different positions, and recommending an optimized cup
                    position. The recommendation is based on a clinical model
                    that is backed by research.
                  </p>
                  <p>
                    One of the most interesting challenges for this workflow was
                    to figure out how to visually represent the recommended or
                    optimal implant position, and showing this position as a
                    "safe zone" which changes based on the user measurements.
                    The design had to convey a complex clinical model in an
                    intuitive way. "Cones" were overlapped on the cup rotation
                    handles to illustrate the safe zones on the x-ray canvases;
                    this was reinforced with a graph in the sidebar, whose
                    colour-coding would change simultaneously with the cones,
                    giving immediate feedback on whether the cup was inside or
                    outside the recommended safe zone. Colour coding and subtle
                    glow effects were also used on the clinical assessments
                    above the graph to highlight any changes that may affect, or
                    in some cases disable, our recommended safe zone.
                  </p>
                </div>
                <img
                  className="spaced shadowed"
                  src="/images/view/layout-hip-spine.png"
                  alt="Hip-Spine workflow"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
        <div className="panel">
          <Grid>
            <Grid.Row>
              <Grid.Col>
                <div className="textbox">
                  <h3>Wizard</h3>
                  <p>
                    While some surgeons have a deeper understanding of how the
                    hip-spine relationship affects cup positioning, some users,
                    including non-surgeon, may need to be guided through the
                    process. A wizard feature was designed to guide and teach an
                    unfamiliar user through the planning process, in a way that
                    is as foolproof as possible.
                  </p>
                </div>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="middle-xs">
              <Grid.Col>
                <img
                  className="spaced shadowed"
                  src="/images/view/wizard-hip-side.png"
                  alt="Select hip side wizard step"
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="middle-xs">
              <Grid.Col>
                <img
                  className="spaced shadowed"
                  src="/images/view/wizard-scaling.png"
                  alt="Scaling wizard step"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
        <div className="panel panel-grey">
          <Grid>
            <Grid.Row className="middle-xs">
              <Grid.Col>
                <div className="textbox">
                  <h3>Cases Saving/Loading</h3>
                  <p>
                    The design and architecture around saving and loading cases
                    presented many interesting challenges. A thorough, optimal
                    solution was designed to help guide the design as features
                    were progressively added, however a simplified, easier to
                    achieve solution was also designed to accommodate the
                    roadmap timeline.
                  </p>
                  <p>
                    The UI design helped raise and answer several critical
                    questions.
                  </p>
                  <p>
                    For loading cases: Which use cases or user journeys are
                    likely to be most frequently used? How can we surface the
                    most relevant information and make it easy for users to
                    select the relevant workflow for their needs? How can we
                    offer multiple ways of viewing a case list while minimizing
                    the required backend development? Given that we need to save
                    and load images as well as objects, measurements, and user
                    preferences, how do we handle prerequisites and loading
                    order?
                  </p>
                  <p>
                    For saving cases: Given that autosave is now an expected
                    behaviour, are there any drawbacks or clinical
                    considerations that may prevent us from automatically saving
                    cases for a user, or modify how we accomplish it? How
                    prominently should we display the saved status to the user,
                    if at all? What technical considerations need to be taken
                    into account, e.g. how frequently can we afford to save a
                    case, how do we handle network issues, etc.
                  </p>
                </div>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <img
                  className="spaced shadowed"
                  src="/images/view/case-list.png"
                  alt="Case list screen"
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <img
                  className="spaced"
                  src="/images/view/autosave.png"
                  alt="Autosave design UI"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
        <div className="panel">
          <Grid>
            <Grid.Row className="middle-xs">
              <Grid.Col xs={12} lg={6}>
                <div className="textbox">
                  <h3>Case Management</h3>
                  <p>
                    Long term, advanced features are planned, which the existing
                    design would not gracefully accommodate. While images are
                    currently uploaded from a local source, they later may be
                    provided by a picture archiving and communication system
                    (PACS), which the existing "Browse Images" pattern does not
                    account for. The case plan output may also differ based on
                    the user's preferred workflow: they may want to load the
                    case on the Intellijoint HIP workstation during surgery, but
                    they may also want to download, print, or email a QR code or
                    a full PDF report. Data collected during the surgery will
                    also feed back into the case, which we will want to present
                    to the user on the VIEW app. The user who plans a surgery
                    may also not be the same as the one who previews, executes,
                    or reviews it after the fact.
                  </p>
                  <p>
                    A solution was designed to address these issues while also
                    making room for future features and updating the navigation
                    to be more intuitive. The app would progressively go from a
                    single "Plan" screen, to two screens ("Case List" and
                    "Plan"), and later on to multiple screens arranged along
                    four "layers": "Welcome", "Case List", "Manage", and "Plan".
                    Breadcrumb navigation would help the user orient themselves
                    and navigate through those layers. Read and write access
                    could be more easily managed at each successive layer,
                    anticipating an upcoming feature requirement. And on the UI
                    side, having separate layers would allow for much needed
                    "breathing space" in the layout, where existing temporary or
                    awkward solutions could be refactored into more optimized
                    and intuitive screens.
                  </p>
                </div>
              </Grid.Col>
              <Grid.Col className="center-xs" xs={12} lg={6}>
                <img
                  className="shadowed align-center"
                  src="/images/view/manage-images.png"
                  alt="Manage images screen"
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <img
                  className="spaced shadowed"
                  src="/images/view/manage-qr-code.png"
                  alt="Manage QR code screen"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
      </motion.div>
      <Browse component="View" pos="bottom" />
    </>
  );
}

export default View;
