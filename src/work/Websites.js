import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { websites } from "./lists/websites";
import { Grid } from "../components/Grid/Grid";
import Browse from "../components/Browse/Browse.js";
import { motion } from "framer-motion";

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

function Websites(props) {
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
      <Browse component="Websites" pos="top" />
      <motion.div
        className="panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Grid className="grid-websites">
          <Grid.Row>
            <Grid.Col>
              <div className="textbox">
                <h3>WordPress Themes</h3>
                <p>
                  The following websites were custom designed and coded to fit
                  the needs of each customer. Most were made in collaboration
                  with a local marketing agency. As a freelancer, it was
                  important for me to be involved in every step of the project,
                  from early client meetings, internal strategy sessions,
                  project management, to post-launch maintenance.
                </p>
                <p>
                  A system of modular panels were developed to be used across
                  multiple projects. The panels were built around user editable
                  fields which were carefully constrained to make the process as
                  fool proof as possible while still giving flexibilty to users
                  to customer their website. A set of default panels could be
                  easily included with every project, in addition to custom
                  panels made for each separate website.
                </p>
              </div>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>
              <Gallery
                photos={websites}
                onClick={openLightbox}
                direction="column"
                columns={columns}
              />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={websites.map((x) => ({
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
      </motion.div>
      <Browse component="Websites" pos="bottom" />
    </>
  );
}

export default Websites;
