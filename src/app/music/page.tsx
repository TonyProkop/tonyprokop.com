"use client"

import { useEffect, useRef } from "react";
import { Vex, Flow, Factory, Stave, EasyScore } from "vexflow";
import { ChordBox } from 'vexchords';

const Music = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;

    console.log("VexFlow Build:", Vex.Flow.BUILD);

    const { Renderer, Stave } = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element with id="output".
    const renderer = new Renderer(ref.current, Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 500);
    const context = renderer.getContext();
    context.setFont('Arial', 10);
    context.setFillStyle('var(--clr-text)');

    // Create a stave of width 400 at position 10, 40.
    const stave = new Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef('treble').addTimeSignature('4/4');

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();





    const chord = new ChordBox('#chord', {
      width: 500,
      height: 600,
      // circleRadius: 5,
      numStrings: 6,
      numFrets: 7,
      showTuning: true,
      defaultColor: 'var(--clr-text)',
      bgColor: 'var(--clr-surface)',
      strokeColor: 'var(--clr-text)',
      textColor: 'var(--clr-text)',
      stringColor: 'var(--clr-subtle)',
      fretColor: 'var(--clr-subtle)',
      labelColor: 'var(--clr-subtle)',
      fretWidth: 1,
      stringWidth: 1,
    });

    chord.draw({
      // array of [string, fret, label (optional)]
      chord: [
        [6, 3, 'G'],
        [6, 5],
        [5, 2],
        [5, 3],
        [5, 5],
        [4, 2],
        [4, 4],
        [4, 5, 'G'],
        [3, 2],
        [3, 4],
        [3, 5],
        [2, 3],
        [2, 5],
        [1, 2],
        [1, 3, 'G'],
        [1, 5],
      ],

      // optional: position marker
      position: 1, // start render at fret 3

      // optional: barres for barre chords
      // barres: [
      //   { fromString: 6, toString: 1, fret: 1 },
      //   { fromString: 5, toString: 3, fret: 3 }
      // ],

      // optional: tuning keys
      tuning: ['E', 'A', 'D', 'G', 'B', 'E']
    });
  }, []);

  return (
    <div >
      <h1>Music</h1>
      <div ref={ref} />
      <div id="chord" />
    </div>
  )
}

export default Music;



