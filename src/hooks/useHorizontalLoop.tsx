// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
//
// gsap.registerPlugin(useGSAP)
// gsap.registerPlugin(ScrollTrigger)
//
// const useHorizontalLoop = (items: Array<HTMLElement>, config) => {
//   const { context } = useGSAP(() => {
//     items = gsap.utils.toArray(items);
//     config = config || {};
//     const onChange = config.onChange
//     let lastIndex = 0
//     let tl = gsap.timeline({
//       repeat: config.repeat,
//       onUpdate: onChange && function() {
//         let i = tl.closestIndex();
//         if (lastIndex !== i) {
//           lastIndex = i;
//           onChange(items[i], i);
//         }
//       },
//       paused: config.paused,
//       defaults: { ease: "none" },
//       onReverseComplete: () => { tl.totalTime(tl.rawTime() + tl.duration() * 100) }
//     })
//     let length = items.length
//     let startX = items[0].offsetLeft
//     let times: Array<number> = []
//     let widths: Array<number> = []
//     let spaceBefore: Array<number> = []
//     let xPercents: Array<number> = []
//     let curIndex = 0
//     let indexIsDirty = false
//     let center = config.center
//     let pixelsPerSecond = (config.speed || 1) * 100
//     let snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1) // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
//     let timeOffset = 0
//     let container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode
//     let totalWidth: number
//     let getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0)
//     let populateWidths = () => {
//       let b1 = container.getBoundingClientRect(), b2;
//       items.forEach((el, i) => {
//         widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
//         xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
//         b2 = el.getBoundingClientRect();
//         spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
//         b1 = b2;
//       });
//       gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
//         xPercent: i => xPercents[i]
//       });
//       totalWidth = getTotalWidth();
//     }
//     let timeWrap
//
//     let populateOffsets = () => {
//       timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
//       center && times.forEach((t, i) => {
//         times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
//       });
//     }
//
//     let getClosest = (values, value, wrap) => {
//       let i = values.length,
//         closest = 1e10,
//         index = 0, d;
//       while (i--) {
//         d = Math.abs(values[i] - value);
//         if (d > wrap / 2) {
//           d = wrap - d;
//         }
//         if (d < closest) {
//           closest = d;
//           index = i;
//         }
//       }
//       return index;
//     }
//
//     let populateTimeline = () => {
//       let i, item, curX, distanceToStart, distanceToLoop;
//       tl.clear();
//       for (i = 0; i < length; i++) {
//         item = items[i];
//         curX = xPercents[i] / 100 * widths[i];
//         distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
//         distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
//         tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
//           .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
//           .add("label" + i, distanceToStart / pixelsPerSecond);
//         times[i] = distanceToStart / pixelsPerSecond;
//       }
//       timeWrap = gsap.utils.wrap(0, tl.duration());
//     }
//
//     let refresh = (deep) => {
//       let progress = tl.progress();
//       tl.progress(0, true);
//       populateWidths();
//       deep && populateTimeline();
//       populateOffsets();
//       deep && tl.progress(progress, true);
//     }
//
//     let onResize = () => refresh(true)
//
//     let proxy;
//
//     gsap.set(items, { x: 0 });
//     populateWidths();
//     populateTimeline();
//     populateOffsets();
//     window.addEventListener("resize", onResize);
//
//     const toIndex = (index, vars) => {
//       vars = vars || {};
//       (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
//       let newIndex = gsap.utils.wrap(0, length, index),
//         time = times[newIndex];
//       if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
//         time += tl.duration() * (index > curIndex ? 1 : -1);
//       }
//       if (time < 0 || time > tl.duration()) {
//         vars.modifiers = { time: timeWrap };
//       }
//       curIndex = newIndex;
//       vars.overwrite = true;
//       gsap.killTweensOf(proxy);
//       return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
//     }
//
//     tl.toIndex = (index, vars) => toIndex(index, vars);
//     tl.closestIndex = setCurrent => {
//       let index = getClosest(times, tl.time(), tl.duration());
//       if (setCurrent) {
//         curIndex = index;
//         indexIsDirty = false;
//       }
//       return index;
//     };
//     tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
//     tl.next = vars => toIndex(tl.current() + 1, vars);
//     tl.previous = vars => toIndex(tl.current() - 1, vars);
//     tl.times = times;
//     tl.progress(1, true).progress(0, true); // pre-render for performance
//     if (config.reversed) {
//       tl.vars.onReverseComplete();
//       tl.reverse();
//     }
//     tl.closestIndex(true);
//     lastIndex = curIndex;
//     onChange && onChange(items[curIndex], curIndex);
//     return () => window.removeEventListener("resize", onResize); // cleanup
//   }, { dependencies: [items] })
//
//   return context
// }
//
// export default useHorizontalLoop
