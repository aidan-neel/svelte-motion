import { AnimateLayoutContextProvider } from './Animate.js';
import { MeasureContextProvider } from './Measure.js';

var layoutAnimations = {
    measureLayout: MeasureContextProvider,
    layoutAnimation: AnimateLayoutContextProvider
};

export { layoutAnimations };
