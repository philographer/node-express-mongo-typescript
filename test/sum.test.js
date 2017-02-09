/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/
"use strict";
const sum_1 = require("./sum");
test('adds 1 + 2 to equal 3', () => {
    expect(sum_1.default(1, 2)).toBe(3);
});
