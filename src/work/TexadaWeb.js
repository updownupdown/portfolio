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
      <motion.div
        className="panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Grid>
          <Grid.Row className="middle-xs">
            <Grid.Col>
              <img
                className="spaced shadowed"
                src="/images/texada_web/ticket_scheduling.png"
                alt="Ticket Scheduling"
              />
              <img
                className="spaced"
                src="/images/texada_web/nav.png"
                alt="Texada Navigation Menu"
              />
              <img
                className="spaced shadowed"
                src="/images/texada_web/tickets_list.png"
                alt="Tickets List"
              />
            </Grid.Col>
          </Grid.Row>
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
      </motion.div>
      <Browse component="TexadaWeb" pos="bottom" />
    </>
  );
}

export default TexadaWeb;
