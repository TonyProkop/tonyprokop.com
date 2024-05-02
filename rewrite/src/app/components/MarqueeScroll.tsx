import * as React from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type MarqueeScrollProps = {
  children: React.ReactNode;
};

const MarqueeScroll: React.FC<MarqueeScrollProps> = ({ children }) => {
  const containerRef = React.useRef<HTMLElement>(null);
  const childrenRef = React.useRef<Array<HTMLElement>>([]);
  const [timeline, setTimeline] = React.useState<gsap.core.Timeline | null>(
    null
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        onReverseComplete: () => {
          tl.totalTime(tl.duration() * 100).reverse();
        },
      });

      childrenRef.current.forEach((ref) => {
        tl.to(
          ref,
          {
            duration: 13,
            ease: "linear",
            xPercent: -100,
          },
          0
        );
      });

      setTimeline(tl);
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      childrenRef.current.forEach((ref) => {
        if (!timeline) return;

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            if (self.direction === 1 && timeline.reversed()) {
              timeline.play();
            } else if (self.direction === -1 && !timeline.reversed()) {
              timeline.reverse();
            }
          },
          onEnter: () => timeline.play(),
          onEnterBack: () => timeline.play(),
          onLeave: () => timeline.pause(),
          onLeaveBack: () => timeline.pause(),
        });

        let testTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "0% 100%",
            end: "100% 0%",
            scrub: 0,
          },
        });

        // More speed on scroll
        const speed = (20 * (ref?.offsetWidth || 0)) / window.innerWidth;
        const fromDirectionModifier = timeline.reversed() ? -1 : 1;
        const toDirectionModifier = timeline.reversed() ? 1 : -1;
        testTl.fromTo(
          ref,
          {
            x: speed * fromDirectionModifier + "vw",
          },
          {
            x: speed * toDirectionModifier + "vw",
            ease: "none",
          }
        );
      });
    },
    { dependencies: [timeline], scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: (ref) => (childrenRef.current[index] = ref),
        })
      )}
    </Box>
  );
};

export default MarqueeScroll;
