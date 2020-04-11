import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Grid } from "../components/Grid/Grid.js";
import Browse from "../components/Browse/Browse.js";
import { photos } from "./lists/texadaWeb";
import { motion } from "framer-motion";

function TexadaWeb(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Browse component="TexadaWeb" pos="top" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="panel">
          <Grid>
            <Grid.Row className="middle-xs">
              <Grid.Col xs={12} lg={5}>
                <div className="textbox">
                  <h3>The Redesign</h3>
                  <p>
                    When I came to Texada, the design process lacked credibility
                    and was considered secondary to features and expediency. The
                    existing interface was useable, but often inconsistent and
                    difficult to use, and expectations in terms of visual appeal
                    were low. More complex features were added without careful
                    consideration to user expectations.
                  </p>
                  <p>
                    Early on, the objectives were clear. A clear style guide
                    needed to be established, and the nascent web app had to be
                    redesigned. The component library had to be cleaned up of
                    any duplicate or undeperforming components, and existing
                    components were to be optimized, polished, and made to be
                    shared across apps whenever possible.
                  </p>
                  <p>
                    The importance and usefulness of good design thinking had to
                    be demonstrated. This was helped by establishing an open,
                    honest, and two-way line of communication between not only
                    product owners and designer, but also with developers, QA,
                    product managers, support and services, the end user, and
                    anyone who could provide useful insight and feedback.
                  </p>
                </div>
              </Grid.Col>
              <Grid.Col className="center-xs" xs={12} lg={7}>
                <img
                  src="/images/texada_web/wo-list-ba.png"
                  alt="User interface, before and after"
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
                  <h3>Ticket Scheduling</h3>
                  <p>
                    One of the app's most complex screens involved the
                    assignment of delivery or pickup tickets to drivers. The
                    solution needed to take into account the limited development
                    resources, and would ideally use existing components as much
                    as possible.
                  </p>
                  <p>
                    On-site visits with existing customers gave us a clear
                    picture of what their current process looks like, what the
                    pain points were, and how the app could vastly improve
                    efficiency. User interviews and follow ups also guided the
                    design process through several iterations.
                  </p>
                  <p>
                    The advanced table component was heavily leveraged to group
                    tickets by drivers, and allow users to drag and drop tickets
                    to change their order and assignment. Another component was
                    developed to be used across multiple screens to allow the
                    user to save and load their prefered table column order and
                    filters, as well as to export the table data, many customers
                    use daily. The design was made to be rolled out in phases,
                    with more advanced features to be added over time.
                  </p>
                </div>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row className="middle-xs">
              <Grid.Col>
                <img
                  className="spaced shadowed"
                  src="/images/texada_web/ticket_scheduling.png"
                  alt="Ticket Scheduling"
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
                  <h3>Sidebar Navigation</h3>
                  <p>
                    The existing sidebar navigation had been designed early on
                    without consideration for future expension, and was running
                    into several problems. It used up critical horizontal space
                    without justification. It didn't allow for any hierarchy,
                    necessitating tabs on the main screen to toggle between
                    related pages, adding extra clutter and clicks. It was about
                    to overflow as top-level items were added, and was not
                    mobile responsible. And so, it was universally disliked by
                    developers.
                  </p>
                  <p>
                    A new navigation menu was designed, shamelessly ripping off
                    and improving on the WordPress admin menu, and cloaked in
                    the new company branding.
                  </p>
                  <p>
                    The new sidebar supports a two-tier hierarchy and allows
                    users to navigate to any top or second level page in one
                    click. It's mobile responsive, and on desktop, it can be
                    collapsed to maximize screen real estate, which is
                    especially valuable on table-heavy pages. It was designed to
                    be future-proof by handling height overflow with a
                    scroll/sticky behavior which is in sync with the main screen
                    content.
                  </p>
                </div>
              </Grid.Col>
              <Grid.Col className="center-xs" xs={12} lg={6}>
                <img
                  className="align-center"
                  src="/images/texada_web/sidebar-ba.png"
                  alt="Sidebar menu, before and after"
                />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col>
                <img
                  className="spaced"
                  src="/images/texada_web/nav.png"
                  alt="Sidebar menu redesign"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
        <div className="panel panel-web-app-extras">
          <Grid>
            <Grid.Row>
              <Grid.Col>
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map((x) => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title,
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>
      </motion.div>
      <Browse component="TexadaWeb" pos="bottom" />
    </>
  );
}

export default TexadaWeb;
