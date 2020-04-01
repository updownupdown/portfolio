import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./lists/photography";
import { Grid } from "../components/Grid/Grid";
import Browse from "../components/Browse/Browse.js";

function Photography(props) {
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
      <Browse component="Photography" pos="top" />
      <div className="panel">
        <Grid>
          <Grid.Row>
            <Grid.Col>
              <h3>Photos from Japan</h3>
              <p>
                The following photos were taken during a one month solo
                backpacking trip in Japan in 2008, using a Nikon D80.
              </p>
              <p>
                While I am no longer an active photographer, practicing the art
                has greatly helped me in exploring universal design concepts
                like contrast, colour, focus, as well as composition, balance,
                proportion, and the interplay of foreground versus background,
                etc.
              </p>
              <p>
                It has also given me a deep appreciation for a world whose
                beauty can be found anywhere.
              </p>

              <Gallery photos={photos} onClick={openLightbox} />
              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
      <Browse component="Photography" pos="bottom" />
    </>
  );
}

export default Photography;
