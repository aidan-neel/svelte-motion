var isMotionValue = function (value) {
    return value !== null && typeof value === "object" && value.getVelocity;
};

export { isMotionValue };
