import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { websites } from "./WebsitesList";
import { Grid } from "../components/Grid/Grid";
import Browse from "../components/Browse/Browse.js";

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 4;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 2;
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
      <div className="panel">
        <Grid className="grid-websites">
          <Grid.Row>
            <Grid.Col>
              <Browse component="Websites" />

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
                      views={websites.map(x => ({
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
    </>
  );
}

export default Websites;