import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div class="embla__viewport">
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src="right-side.png"
              className="max-h-full max-w-full min-h-full min-w-full"
            />
          </div>
          <div className="embla__slide">
            <img src="home-page-banner-2.png" />
          </div>
        </div>
      </div>
      <button
        class="embla__prev"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        Prev
      </button>{" "}
      <button
        class="embla__next"
        onClick={scrollNext}
        disabled={!prevBtnEnabled}
      >
        Next
      </button>
    </div>
  );
};
