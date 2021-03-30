import { axisBox, delta } from '../../utils/geometry/index.js';

var createProjectionState = function () { return ({
    isEnabled: false,
    isTargetLocked: false,
    target: axisBox(),
    targetFinal: axisBox(),
}); };
function createLayoutState() {
    return {
        isHydrated: false,
        layout: axisBox(),
        layoutCorrected: axisBox(),
        treeScale: { x: 1, y: 1 },
        delta: delta(),
        deltaFinal: delta(),
        deltaTransform: "",
    };
}
var zeroLayout = createLayoutState();

export { createLayoutState, createProjectionState, zeroLayout };
