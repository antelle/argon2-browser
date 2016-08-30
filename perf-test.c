#include <stdint.h>

uint64_t fBlaMka(uint64_t x, uint64_t y) {
    const uint64_t m = UINT64_C(0xFFFFFFFF);
    const uint64_t xy = (x & m) * (y & m);
    return x + y + 2 * xy;
}


int exp_fBlaMka() {
    for (unsigned i = 0; i < 100000000; i++) {
        if (fBlaMka(i, i) == i - 1) {
            return 1;
        }
    }
    return 0;
}

// console.time('fBlaMka');
// Module._exp_fBlaMka();
// console.timeEnd('fBlaMka');

// i32: 1851.5ms
// i64: 414.49ms