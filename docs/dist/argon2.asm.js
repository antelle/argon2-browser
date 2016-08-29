Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = global.NaN, s = global.Infinity;
 var t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0.0;
 var C = 0;
 var D = 0;
 var E = 0;
 var F = 0;
 var G = 0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = 0;
 var M = global.Math.floor;
 var N = global.Math.abs;
 var O = global.Math.sqrt;
 var P = global.Math.pow;
 var Q = global.Math.cos;
 var R = global.Math.sin;
 var S = global.Math.tan;
 var T = global.Math.acos;
 var U = global.Math.asin;
 var V = global.Math.atan;
 var W = global.Math.atan2;
 var X = global.Math.exp;
 var Y = global.Math.log;
 var Z = global.Math.ceil;
 var _ = global.Math.imul;
 var $ = global.Math.min;
 var aa = global.Math.clz32;
 var ba = env.abort;
 var ca = env.assert;
 var da = env._sbrk;
 var ea = env._pthread_join;
 var fa = env._emscripten_memcpy_big;
 var ga = env._abort;
 var ha = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function Xa(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[721] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 2924 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[721] = k & ~(1 << b); else {
    if (h >>> 0 < (c[725] | 0) >>> 0) ga();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else ga();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[723] | 0;
  if (q >>> 0 > h >>> 0) {
   if (b | 0) {
    d = 2 << a;
    d = b << a & (d | 0 - d);
    d = (d & 0 - d) + -1 | 0;
    j = d >>> 12 & 16;
    d = d >>> j;
    f = d >>> 5 & 8;
    d = d >>> f;
    g = d >>> 2 & 4;
    d = d >>> g;
    e = d >>> 1 & 2;
    d = d >>> e;
    b = d >>> 1 & 1;
    b = (f | j | g | e | b) + (d >>> b) | 0;
    d = 2924 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[721] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[725] | 0) >>> 0) ga();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[723] | 0;
      break;
     } else ga();
    } while (0);
    h = (b << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    e = g + q | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[726] | 0;
     b = l >>> 3;
     d = 2924 + (b << 1 << 2) | 0;
     a = c[721] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[721] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[723] = h;
    c[726] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[722] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    B = d >>> 12 & 16;
    d = d >>> B;
    A = d >>> 5 & 8;
    d = d >>> A;
    C = d >>> 2 & 4;
    d = d >>> C;
    b = d >>> 1 & 2;
    d = d >>> b;
    e = d >>> 1 & 1;
    e = c[3188 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - q | 0;
    b = e;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) {
       k = e;
       break;
      }
     }
     b = (c[a + 4 >> 2] & -8) - q | 0;
     C = b >>> 0 < d >>> 0;
     d = C ? b : d;
     b = a;
     e = C ? a : e;
    }
    g = c[725] | 0;
    if (k >>> 0 < g >>> 0) ga();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) ga();
    h = c[k + 24 >> 2] | 0;
    e = c[k + 12 >> 2] | 0;
    do if ((e | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       o = 0;
       break;
      }
     }
     while (1) {
      e = a + 20 | 0;
      f = c[e >> 2] | 0;
      if (f | 0) {
       a = f;
       b = e;
       continue;
      }
      e = a + 16 | 0;
      f = c[e >> 2] | 0;
      if (!f) break; else {
       a = f;
       b = e;
      }
     }
     if (b >>> 0 < g >>> 0) ga(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) ga();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ga();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else ga();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 3188 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[722] = c[722] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[725] | 0) >>> 0) ga();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[725] | 0;
     if (o >>> 0 < b >>> 0) ga();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ga(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[725] | 0) >>> 0) ga(); else {
      c[o + 20 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     }
    } while (0);
    if (d >>> 0 < 16) {
     C = d + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = d | 1;
     c[j + d >> 2] = d;
     a = c[723] | 0;
     if (a | 0) {
      f = c[726] | 0;
      b = a >>> 3;
      e = 2924 + (b << 1 << 2) | 0;
      a = c[721] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[721] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[723] = d;
     c[726] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[722] | 0;
  if (k) {
   d = 0 - q | 0;
   a = a >>> 8;
   if (!a) j = 0; else if (q >>> 0 > 16777215) j = 31; else {
    s = (a + 1048320 | 0) >>> 16 & 8;
    w = a << s;
    r = (w + 520192 | 0) >>> 16 & 4;
    w = w << r;
    j = (w + 245760 | 0) >>> 16 & 2;
    j = 14 - (r | s | j) + (w << j >>> 15) | 0;
    j = q >>> (j + 7 | 0) & 1 | j << 1;
   }
   b = c[3188 + (j << 2) >> 2] | 0;
   a : do if (!b) {
    a = 0;
    b = 0;
    w = 86;
   } else {
    f = d;
    a = 0;
    g = q << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
    h = b;
    b = 0;
    while (1) {
     e = c[h + 4 >> 2] & -8;
     d = e - q | 0;
     if (d >>> 0 < f >>> 0) if ((e | 0) == (q | 0)) {
      a = h;
      b = h;
      w = 90;
      break a;
     } else b = h; else d = f;
     e = c[h + 20 >> 2] | 0;
     h = c[h + 16 + (g >>> 31 << 2) >> 2] | 0;
     a = (e | 0) == 0 | (e | 0) == (h | 0) ? a : e;
     e = (h | 0) == 0;
     if (e) {
      w = 86;
      break;
     } else {
      f = d;
      g = g << (e & 1 ^ 1);
     }
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << j;
     a = k & (a | 0 - a);
     if (!a) break;
     s = (a & 0 - a) + -1 | 0;
     n = s >>> 12 & 16;
     s = s >>> n;
     m = s >>> 5 & 8;
     s = s >>> m;
     o = s >>> 2 & 4;
     s = s >>> o;
     r = s >>> 1 & 2;
     s = s >>> r;
     a = s >>> 1 & 1;
     a = c[3188 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
    }
    if (!a) {
     h = d;
     k = b;
    } else w = 90;
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    s = (c[a + 4 >> 2] & -8) - q | 0;
    e = s >>> 0 < d >>> 0;
    d = e ? s : d;
    b = e ? a : b;
    e = c[a + 16 >> 2] | 0;
    if (e | 0) {
     a = e;
     w = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     h = d;
     k = b;
     break;
    } else w = 90;
   }
   if (k) if (h >>> 0 < ((c[723] | 0) - q | 0) >>> 0) {
    f = c[725] | 0;
    if (k >>> 0 < f >>> 0) ga();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) ga();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       t = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) ga(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) ga();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ga();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else ga();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 3188 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[722] = c[722] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[725] | 0) >>> 0) ga();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[725] | 0;
     if (t >>> 0 < b >>> 0) ga();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ga(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[725] | 0) >>> 0) ga(); else {
      c[t + 20 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     C = h + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = h | 1;
     c[j + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 2924 + (a << 1 << 2) | 0;
      b = c[721] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[721] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
        u = a;
        v = b;
       }
      }
      c[u >> 2] = j;
      c[v + 12 >> 2] = j;
      c[j + 8 >> 2] = v;
      c[j + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = h >>> (d + 7 | 0) & 1 | d << 1;
     }
     e = 3188 + (d << 2) | 0;
     c[j + 28 >> 2] = d;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[722] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[722] = a | b;
      c[e >> 2] = j;
      c[j + 24 >> 2] = e;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     }
     f = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
       d = a;
       w = 148;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 145;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 145) if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
      c[b >> 2] = j;
      c[j + 24 >> 2] = a;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[725] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = j;
       c[a >> 2] = j;
       c[j + 8 >> 2] = b;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else ga();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[723] | 0;
 if (d >>> 0 >= q >>> 0) {
  a = d - q | 0;
  b = c[726] | 0;
  if (a >>> 0 > 15) {
   C = b + q | 0;
   c[726] = C;
   c[723] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = q | 3;
  } else {
   c[723] = 0;
   c[726] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[724] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[724] = A;
  C = c[727] | 0;
  B = C + q | 0;
  c[727] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[839] | 0)) {
  c[841] = 4096;
  c[840] = 4096;
  c[842] = -1;
  c[843] = -1;
  c[844] = 0;
  c[832] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[839] = v;
 }
 h = q + 48 | 0;
 g = c[841] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[831] | 0;
 if (a | 0) {
  u = c[829] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[832] & 4)) {
  a = c[727] | 0;
  c : do if (!a) w = 171; else {
   e = 3332;
   while (1) {
    b = c[e >> 2] | 0;
    if (b >>> 0 <= a >>> 0) {
     d = e + 4 | 0;
     if ((b + (c[d >> 2] | 0) | 0) >>> 0 > a >>> 0) break;
    }
    e = c[e + 8 >> 2] | 0;
    if (!e) {
     w = 171;
     break c;
    }
   }
   a = f - (c[724] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = da(a | 0) | 0;
    if ((b | 0) == ((c[e >> 2] | 0) + (c[d >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      f = b;
      h = a;
      w = 191;
      break b;
     }
    } else {
     e = b;
     w = 181;
    }
   }
  } while (0);
  do if ((w | 0) == 171) {
   f = da(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[840] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[829] | 0;
    d = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     e = c[831] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = da(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      w = 191;
      break b;
     } else {
      e = b;
      w = 181;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 181) {
   d = 0 - a | 0;
   do if (h >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[841] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((da(b | 0) | 0) == (-1 | 0)) {
     da(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    f = e;
    h = a;
    w = 191;
    break b;
   }
  } while (0);
  c[832] = c[832] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = da(k | 0) | 0;
  a = da(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (q + 40 | 0) >>> 0) {
    f = b;
    h = a;
    w = 191;
   }
  }
 }
 if ((w | 0) == 191) {
  a = (c[829] | 0) + h | 0;
  c[829] = a;
  if (a >>> 0 > (c[830] | 0) >>> 0) c[830] = a;
  j = c[727] | 0;
  do if (!j) {
   C = c[725] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[725] = f;
   c[833] = f;
   c[834] = h;
   c[836] = 0;
   c[730] = c[839];
   c[729] = -1;
   a = 0;
   do {
    C = 2924 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[727] = B;
   c[724] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[728] = c[843];
  } else {
   b = 3332;
   do {
    a = c[b >> 2] | 0;
    e = b + 4 | 0;
    d = c[e >> 2] | 0;
    if ((f | 0) == (a + d | 0)) {
     w = 201;
     break;
    }
    b = c[b + 8 >> 2] | 0;
   } while ((b | 0) != 0);
   if ((w | 0) == 201) if (!(c[b + 12 >> 2] & 8)) if (j >>> 0 < f >>> 0 & j >>> 0 >= a >>> 0) {
    c[e >> 2] = d + h;
    C = j + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = j + C | 0;
    C = h - C + (c[724] | 0) | 0;
    c[727] = B;
    c[724] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[728] = c[843];
    break;
   }
   a = c[725] | 0;
   if (f >>> 0 < a >>> 0) {
    c[725] = f;
    k = f;
   } else k = a;
   d = f + h | 0;
   a = 3332;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 3332;
     break;
    }
   }
   if ((w | 0) == 209) if (!(c[a + 12 >> 2] & 8)) {
    c[b >> 2] = f;
    m = a + 4 | 0;
    c[m >> 2] = (c[m >> 2] | 0) + h;
    m = f + 8 | 0;
    m = f + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;
    a = d + 8 | 0;
    a = d + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    l = m + q | 0;
    g = a - m - q | 0;
    c[m + 4 >> 2] = q | 3;
    do if ((a | 0) == (j | 0)) {
     C = (c[724] | 0) + g | 0;
     c[724] = C;
     c[727] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[726] | 0)) {
      C = (c[723] | 0) + g | 0;
      c[723] = C;
      c[726] = l;
      c[l + 4 >> 2] = C | 1;
      c[l + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      j = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 2924 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < k >>> 0) ga();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        ga();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[721] = c[721] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < k >>> 0) ga();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        ga();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       h = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        d = a + 16 | 0;
        e = d + 4 | 0;
        b = c[e >> 2] | 0;
        if (!b) {
         b = c[d >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         }
        } else d = e;
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < k >>> 0) ga(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < k >>> 0) ga();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) ga();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else ga();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 3188 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[722] = c[722] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[725] | 0) >>> 0) ga();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[725] | 0;
       if (A >>> 0 < e >>> 0) ga();
       c[A + 24 >> 2] = h;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) ga(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + j | 0;
      g = j + g | 0;
     }
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[l + 4 >> 2] = g | 1;
     c[l + g >> 2] = g;
     a = g >>> 3;
     if (g >>> 0 < 256) {
      d = 2924 + (a << 1 << 2) | 0;
      b = c[721] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[721] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[725] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       ga();
      } while (0);
      c[B >> 2] = l;
      c[C + 12 >> 2] = l;
      c[l + 8 >> 2] = C;
      c[l + 12 >> 2] = d;
      break;
     }
     a = g >>> 8;
     do if (!a) d = 0; else {
      if (g >>> 0 > 16777215) {
       d = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = g >>> (d + 7 | 0) & 1 | d << 1;
     } while (0);
     e = 3188 + (d << 2) | 0;
     c[l + 28 >> 2] = d;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[722] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[722] = a | b;
      c[e >> 2] = l;
      c[l + 24 >> 2] = e;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     }
     f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
       d = a;
       w = 279;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 276;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 276) if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
      c[b >> 2] = l;
      c[l + 24 >> 2] = a;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[725] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = l;
       c[a >> 2] = l;
       c[l + 8 >> 2] = b;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else ga();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 3332;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= j >>> 0) {
     a = a + (c[b + 4 >> 2] | 0) | 0;
     if (a >>> 0 > j >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   g = a + -47 | 0;
   d = g + 8 | 0;
   d = g + ((d & 7 | 0) == 0 ? 0 : 0 - d & 7) | 0;
   g = j + 16 | 0;
   d = d >>> 0 < g >>> 0 ? j : d;
   b = d + 8 | 0;
   e = f + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = f + e | 0;
   e = h + -40 - e | 0;
   c[727] = C;
   c[724] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[728] = c[843];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[833];
   c[b + 4 >> 2] = c[834];
   c[b + 8 >> 2] = c[835];
   c[b + 12 >> 2] = c[836];
   c[833] = f;
   c[834] = h;
   c[836] = 0;
   c[835] = b;
   b = d + 24 | 0;
   do {
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((b + 4 | 0) >>> 0 < a >>> 0);
   if ((d | 0) != (j | 0)) {
    h = d - j | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[j + 4 >> 2] = h | 1;
    c[d >> 2] = h;
    a = h >>> 3;
    if (h >>> 0 < 256) {
     d = 2924 + (a << 1 << 2) | 0;
     b = c[721] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[721] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
       y = a;
       z = b;
      }
     }
     c[y >> 2] = j;
     c[z + 12 >> 2] = j;
     c[j + 8 >> 2] = z;
     c[j + 12 >> 2] = d;
     break;
    }
    a = h >>> 8;
    if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = h >>> (d + 7 | 0) & 1 | d << 1;
    }
    f = 3188 + (d << 2) | 0;
    c[j + 28 >> 2] = d;
    c[j + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[722] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[722] = a | b;
     c[f >> 2] = j;
     c[j + 24 >> 2] = f;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    }
    e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    a = c[f >> 2] | 0;
    while (1) {
     if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
      d = a;
      w = 305;
      break;
     }
     b = a + 16 + (e >>> 31 << 2) | 0;
     d = c[b >> 2] | 0;
     if (!d) {
      w = 302;
      break;
     } else {
      e = e << 1;
      a = d;
     }
    }
    if ((w | 0) == 302) if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
     c[b >> 2] = j;
     c[j + 24 >> 2] = a;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    } else if ((w | 0) == 305) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[725] | 0;
     if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = j;
      c[a >> 2] = j;
      c[j + 8 >> 2] = b;
      c[j + 12 >> 2] = d;
      c[j + 24 >> 2] = 0;
      break;
     } else ga();
    }
   }
  } while (0);
  a = c[724] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[724] = A;
   C = c[727] | 0;
   B = C + q | 0;
   c[727] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(Va() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function Ra(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 g = i;
 i = i + 2048 | 0;
 e = g + 1024 | 0;
 f = g;
 Ca(e, b);
 Da(e, a);
 Ca(f, e);
 Da(f, d);
 a = 0;
 do {
  p = a << 4;
  H = e + (p << 3) | 0;
  q = H;
  s = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  b = e + ((p | 4) << 3) | 0;
  A = b;
  y = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  j = ab(y | 0, A | 0, s | 0, q | 0) | 0;
  w = C;
  q = db(s | 0, q | 0, 1) | 0;
  q = lb(q & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  q = ab(j | 0, w | 0, q | 0, C | 0) | 0;
  w = C;
  j = e + ((p | 12) << 3) | 0;
  s = j;
  k = q ^ c[s >> 2];
  s = w ^ c[s + 4 >> 2];
  n = e + ((p | 8) << 3) | 0;
  h = n;
  E = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  m = ab(s | 0, k | 0, E | 0, h | 0) | 0;
  K = C;
  h = db(E | 0, h | 0, 1) | 0;
  h = lb(h & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  h = ab(m | 0, K | 0, h | 0, C | 0) | 0;
  K = C;
  y = h ^ y;
  A = K ^ A;
  m = cb(y | 0, A | 0, 24) | 0;
  E = C;
  A = db(y | 0, A | 0, 40) | 0;
  A = A | m;
  E = C | E;
  y = ab(A | 0, E | 0, q | 0, w | 0) | 0;
  t = C;
  w = db(q | 0, w | 0, 1) | 0;
  w = lb(m | 0, 0, w & -2 | 0, C & 1 | 0) | 0;
  w = ab(y | 0, t | 0, w | 0, C | 0) | 0;
  t = C;
  y = H;
  c[y >> 2] = w;
  c[y + 4 >> 2] = t;
  s = w ^ s;
  k = t ^ k;
  t = cb(s | 0, k | 0, 16) | 0;
  w = C;
  k = db(s | 0, k | 0, 48) | 0;
  k = k | t;
  w = C | w;
  s = j;
  c[s >> 2] = k;
  c[s + 4 >> 2] = w;
  w = ab(k | 0, w | 0, h | 0, K | 0) | 0;
  k = C;
  K = db(h | 0, K | 0, 1) | 0;
  K = lb(t | 0, 0, K & -2 | 0, C & 1 | 0) | 0;
  K = ab(w | 0, k | 0, K | 0, C | 0) | 0;
  k = C;
  w = n;
  c[w >> 2] = K;
  c[w + 4 >> 2] = k;
  A = K ^ A;
  E = k ^ E;
  k = cb(A | 0, E | 0, 63) | 0;
  K = C;
  E = db(A | 0, E | 0, 1) | 0;
  A = b;
  c[A >> 2] = E | k;
  c[A + 4 >> 2] = C | K;
  A = e + ((p | 1) << 3) | 0;
  K = A;
  k = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  E = e + ((p | 5) << 3) | 0;
  w = E;
  t = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  h = ab(t | 0, w | 0, k | 0, K | 0) | 0;
  s = C;
  K = db(k | 0, K | 0, 1) | 0;
  K = lb(K & -2 | 0, C & 1 | 0, t | 0, 0) | 0;
  K = ab(h | 0, s | 0, K | 0, C | 0) | 0;
  s = C;
  h = e + ((p | 13) << 3) | 0;
  k = h;
  y = K ^ c[k >> 2];
  k = s ^ c[k + 4 >> 2];
  m = e + ((p | 9) << 3) | 0;
  q = m;
  z = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  u = ab(k | 0, y | 0, z | 0, q | 0) | 0;
  o = C;
  q = db(z | 0, q | 0, 1) | 0;
  q = lb(q & -2 | 0, C & 1 | 0, k | 0, 0) | 0;
  q = ab(u | 0, o | 0, q | 0, C | 0) | 0;
  o = C;
  t = q ^ t;
  w = o ^ w;
  u = cb(t | 0, w | 0, 24) | 0;
  z = C;
  w = db(t | 0, w | 0, 40) | 0;
  w = w | u;
  z = C | z;
  t = ab(w | 0, z | 0, K | 0, s | 0) | 0;
  F = C;
  s = db(K | 0, s | 0, 1) | 0;
  s = lb(u | 0, 0, s & -2 | 0, C & 1 | 0) | 0;
  s = ab(t | 0, F | 0, s | 0, C | 0) | 0;
  F = C;
  t = A;
  c[t >> 2] = s;
  c[t + 4 >> 2] = F;
  k = s ^ k;
  y = F ^ y;
  F = cb(k | 0, y | 0, 16) | 0;
  s = C;
  y = db(k | 0, y | 0, 48) | 0;
  y = y | F;
  s = C | s;
  k = h;
  c[k >> 2] = y;
  c[k + 4 >> 2] = s;
  s = ab(y | 0, s | 0, q | 0, o | 0) | 0;
  y = C;
  o = db(q | 0, o | 0, 1) | 0;
  o = lb(F | 0, 0, o & -2 | 0, C & 1 | 0) | 0;
  o = ab(s | 0, y | 0, o | 0, C | 0) | 0;
  y = C;
  s = m;
  c[s >> 2] = o;
  c[s + 4 >> 2] = y;
  w = o ^ w;
  z = y ^ z;
  y = cb(w | 0, z | 0, 63) | 0;
  o = C;
  z = db(w | 0, z | 0, 1) | 0;
  w = E;
  c[w >> 2] = z | y;
  c[w + 4 >> 2] = C | o;
  w = e + ((p | 2) << 3) | 0;
  o = w;
  y = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  z = e + ((p | 6) << 3) | 0;
  s = z;
  F = c[s >> 2] | 0;
  s = c[s + 4 >> 2] | 0;
  q = ab(F | 0, s | 0, y | 0, o | 0) | 0;
  k = C;
  o = db(y | 0, o | 0, 1) | 0;
  o = lb(o & -2 | 0, C & 1 | 0, F | 0, 0) | 0;
  o = ab(q | 0, k | 0, o | 0, C | 0) | 0;
  k = C;
  q = e + ((p | 14) << 3) | 0;
  y = q;
  t = o ^ c[y >> 2];
  y = k ^ c[y + 4 >> 2];
  u = e + ((p | 10) << 3) | 0;
  K = u;
  v = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  G = ab(y | 0, t | 0, v | 0, K | 0) | 0;
  B = C;
  K = db(v | 0, K | 0, 1) | 0;
  K = lb(K & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  K = ab(G | 0, B | 0, K | 0, C | 0) | 0;
  B = C;
  F = K ^ F;
  s = B ^ s;
  G = cb(F | 0, s | 0, 24) | 0;
  v = C;
  s = db(F | 0, s | 0, 40) | 0;
  s = s | G;
  v = C | v;
  F = ab(s | 0, v | 0, o | 0, k | 0) | 0;
  l = C;
  k = db(o | 0, k | 0, 1) | 0;
  k = lb(G | 0, 0, k & -2 | 0, C & 1 | 0) | 0;
  k = ab(F | 0, l | 0, k | 0, C | 0) | 0;
  l = C;
  F = w;
  c[F >> 2] = k;
  c[F + 4 >> 2] = l;
  y = k ^ y;
  t = l ^ t;
  l = cb(y | 0, t | 0, 16) | 0;
  k = C;
  t = db(y | 0, t | 0, 48) | 0;
  t = t | l;
  k = C | k;
  y = q;
  c[y >> 2] = t;
  c[y + 4 >> 2] = k;
  k = ab(t | 0, k | 0, K | 0, B | 0) | 0;
  t = C;
  B = db(K | 0, B | 0, 1) | 0;
  B = lb(l | 0, 0, B & -2 | 0, C & 1 | 0) | 0;
  B = ab(k | 0, t | 0, B | 0, C | 0) | 0;
  t = C;
  s = B ^ s;
  v = t ^ v;
  k = cb(s | 0, v | 0, 63) | 0;
  l = C;
  v = db(s | 0, v | 0, 1) | 0;
  s = z;
  c[s >> 2] = v | k;
  c[s + 4 >> 2] = C | l;
  s = e + ((p | 3) << 3) | 0;
  l = s;
  k = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  v = e + ((p | 7) << 3) | 0;
  K = v;
  y = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  F = ab(y | 0, K | 0, k | 0, l | 0) | 0;
  G = C;
  l = db(k | 0, l | 0, 1) | 0;
  l = lb(l & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  l = ab(F | 0, G | 0, l | 0, C | 0) | 0;
  G = C;
  F = e + ((p | 15) << 3) | 0;
  k = F;
  o = l ^ c[k >> 2];
  k = G ^ c[k + 4 >> 2];
  p = e + ((p | 11) << 3) | 0;
  J = p;
  I = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  D = ab(k | 0, o | 0, I | 0, J | 0) | 0;
  x = C;
  J = db(I | 0, J | 0, 1) | 0;
  J = lb(J & -2 | 0, C & 1 | 0, k | 0, 0) | 0;
  J = ab(D | 0, x | 0, J | 0, C | 0) | 0;
  x = C;
  y = J ^ y;
  K = x ^ K;
  D = cb(y | 0, K | 0, 24) | 0;
  I = C;
  K = db(y | 0, K | 0, 40) | 0;
  K = K | D;
  I = C | I;
  y = ab(K | 0, I | 0, l | 0, G | 0) | 0;
  r = C;
  G = db(l | 0, G | 0, 1) | 0;
  G = lb(D | 0, 0, G & -2 | 0, C & 1 | 0) | 0;
  G = ab(y | 0, r | 0, G | 0, C | 0) | 0;
  r = C;
  y = s;
  c[y >> 2] = G;
  c[y + 4 >> 2] = r;
  k = G ^ k;
  o = r ^ o;
  r = cb(k | 0, o | 0, 16) | 0;
  G = C;
  o = db(k | 0, o | 0, 48) | 0;
  o = o | r;
  G = C | G;
  k = ab(o | 0, G | 0, J | 0, x | 0) | 0;
  y = C;
  x = db(J | 0, x | 0, 1) | 0;
  x = lb(r | 0, 0, x & -2 | 0, C & 1 | 0) | 0;
  x = ab(k | 0, y | 0, x | 0, C | 0) | 0;
  y = C;
  K = x ^ K;
  I = y ^ I;
  k = cb(K | 0, I | 0, 63) | 0;
  r = C;
  I = db(K | 0, I | 0, 1) | 0;
  K = v;
  c[K >> 2] = I | k;
  c[K + 4 >> 2] = C | r;
  K = H;
  r = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  k = E;
  I = c[k >> 2] | 0;
  k = c[k + 4 >> 2] | 0;
  J = ab(I | 0, k | 0, r | 0, K | 0) | 0;
  D = C;
  K = db(r | 0, K | 0, 1) | 0;
  K = lb(K & -2 | 0, C & 1 | 0, I | 0, 0) | 0;
  K = ab(J | 0, D | 0, K | 0, C | 0) | 0;
  D = C;
  o = K ^ o;
  G = D ^ G;
  J = ab(G | 0, o | 0, B | 0, t | 0) | 0;
  r = C;
  t = db(B | 0, t | 0, 1) | 0;
  t = lb(t & -2 | 0, C & 1 | 0, G | 0, 0) | 0;
  t = ab(J | 0, r | 0, t | 0, C | 0) | 0;
  r = C;
  I = t ^ I;
  k = r ^ k;
  J = cb(I | 0, k | 0, 24) | 0;
  B = C;
  k = db(I | 0, k | 0, 40) | 0;
  k = k | J;
  B = C | B;
  I = ab(k | 0, B | 0, K | 0, D | 0) | 0;
  l = C;
  D = db(K | 0, D | 0, 1) | 0;
  D = lb(J | 0, 0, D & -2 | 0, C & 1 | 0) | 0;
  D = ab(I | 0, l | 0, D | 0, C | 0) | 0;
  l = C;
  c[H >> 2] = D;
  c[H + 4 >> 2] = l;
  G = D ^ G;
  o = l ^ o;
  l = cb(G | 0, o | 0, 16) | 0;
  D = C;
  o = db(G | 0, o | 0, 48) | 0;
  o = o | l;
  D = C | D;
  c[F >> 2] = o;
  c[F + 4 >> 2] = D;
  D = ab(o | 0, D | 0, t | 0, r | 0) | 0;
  o = C;
  r = db(t | 0, r | 0, 1) | 0;
  r = lb(l | 0, 0, r & -2 | 0, C & 1 | 0) | 0;
  r = ab(D | 0, o | 0, r | 0, C | 0) | 0;
  o = C;
  c[u >> 2] = r;
  c[u + 4 >> 2] = o;
  k = r ^ k;
  B = o ^ B;
  o = cb(k | 0, B | 0, 63) | 0;
  r = C;
  B = db(k | 0, B | 0, 1) | 0;
  c[E >> 2] = B | o;
  c[E + 4 >> 2] = C | r;
  E = A;
  r = c[E >> 2] | 0;
  E = c[E + 4 >> 2] | 0;
  o = z;
  B = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  k = ab(B | 0, o | 0, r | 0, E | 0) | 0;
  u = C;
  E = db(r | 0, E | 0, 1) | 0;
  E = lb(E & -2 | 0, C & 1 | 0, B | 0, 0) | 0;
  E = ab(k | 0, u | 0, E | 0, C | 0) | 0;
  u = C;
  k = j;
  r = E ^ c[k >> 2];
  k = u ^ c[k + 4 >> 2];
  D = ab(k | 0, r | 0, x | 0, y | 0) | 0;
  l = C;
  y = db(x | 0, y | 0, 1) | 0;
  y = lb(y & -2 | 0, C & 1 | 0, k | 0, 0) | 0;
  y = ab(D | 0, l | 0, y | 0, C | 0) | 0;
  l = C;
  B = y ^ B;
  o = l ^ o;
  D = cb(B | 0, o | 0, 24) | 0;
  x = C;
  o = db(B | 0, o | 0, 40) | 0;
  o = o | D;
  x = C | x;
  B = ab(o | 0, x | 0, E | 0, u | 0) | 0;
  t = C;
  u = db(E | 0, u | 0, 1) | 0;
  u = lb(D | 0, 0, u & -2 | 0, C & 1 | 0) | 0;
  u = ab(B | 0, t | 0, u | 0, C | 0) | 0;
  t = C;
  c[A >> 2] = u;
  c[A + 4 >> 2] = t;
  k = u ^ k;
  r = t ^ r;
  t = cb(k | 0, r | 0, 16) | 0;
  u = C;
  r = db(k | 0, r | 0, 48) | 0;
  r = r | t;
  u = C | u;
  c[j >> 2] = r;
  c[j + 4 >> 2] = u;
  u = ab(r | 0, u | 0, y | 0, l | 0) | 0;
  r = C;
  l = db(y | 0, l | 0, 1) | 0;
  l = lb(t | 0, 0, l & -2 | 0, C & 1 | 0) | 0;
  l = ab(u | 0, r | 0, l | 0, C | 0) | 0;
  r = C;
  c[p >> 2] = l;
  c[p + 4 >> 2] = r;
  o = l ^ o;
  x = r ^ x;
  r = cb(o | 0, x | 0, 63) | 0;
  l = C;
  x = db(o | 0, x | 0, 1) | 0;
  c[z >> 2] = x | r;
  c[z + 4 >> 2] = C | l;
  z = w;
  l = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  r = v;
  x = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  o = ab(x | 0, r | 0, l | 0, z | 0) | 0;
  p = C;
  z = db(l | 0, z | 0, 1) | 0;
  z = lb(z & -2 | 0, C & 1 | 0, x | 0, 0) | 0;
  z = ab(o | 0, p | 0, z | 0, C | 0) | 0;
  p = C;
  o = h;
  l = z ^ c[o >> 2];
  o = p ^ c[o + 4 >> 2];
  u = n;
  t = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  y = ab(o | 0, l | 0, t | 0, u | 0) | 0;
  j = C;
  u = db(t | 0, u | 0, 1) | 0;
  u = lb(u & -2 | 0, C & 1 | 0, o | 0, 0) | 0;
  u = ab(y | 0, j | 0, u | 0, C | 0) | 0;
  j = C;
  x = u ^ x;
  r = j ^ r;
  y = cb(x | 0, r | 0, 24) | 0;
  t = C;
  r = db(x | 0, r | 0, 40) | 0;
  r = r | y;
  t = C | t;
  x = ab(r | 0, t | 0, z | 0, p | 0) | 0;
  k = C;
  p = db(z | 0, p | 0, 1) | 0;
  p = lb(y | 0, 0, p & -2 | 0, C & 1 | 0) | 0;
  p = ab(x | 0, k | 0, p | 0, C | 0) | 0;
  k = C;
  c[w >> 2] = p;
  c[w + 4 >> 2] = k;
  o = p ^ o;
  l = k ^ l;
  k = cb(o | 0, l | 0, 16) | 0;
  p = C;
  l = db(o | 0, l | 0, 48) | 0;
  l = l | k;
  p = C | p;
  c[h >> 2] = l;
  c[h + 4 >> 2] = p;
  p = ab(l | 0, p | 0, u | 0, j | 0) | 0;
  l = C;
  j = db(u | 0, j | 0, 1) | 0;
  j = lb(k | 0, 0, j & -2 | 0, C & 1 | 0) | 0;
  j = ab(p | 0, l | 0, j | 0, C | 0) | 0;
  l = C;
  c[n >> 2] = j;
  c[n + 4 >> 2] = l;
  r = j ^ r;
  t = l ^ t;
  l = cb(r | 0, t | 0, 63) | 0;
  j = C;
  t = db(r | 0, t | 0, 1) | 0;
  c[v >> 2] = t | l;
  c[v + 4 >> 2] = C | j;
  v = s;
  j = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  l = b;
  t = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  r = ab(t | 0, l | 0, j | 0, v | 0) | 0;
  n = C;
  v = db(j | 0, v | 0, 1) | 0;
  v = lb(v & -2 | 0, C & 1 | 0, t | 0, 0) | 0;
  v = ab(r | 0, n | 0, v | 0, C | 0) | 0;
  n = C;
  r = q;
  j = v ^ c[r >> 2];
  r = n ^ c[r + 4 >> 2];
  p = m;
  k = c[p >> 2] | 0;
  p = c[p + 4 >> 2] | 0;
  u = ab(r | 0, j | 0, k | 0, p | 0) | 0;
  h = C;
  p = db(k | 0, p | 0, 1) | 0;
  p = lb(p & -2 | 0, C & 1 | 0, r | 0, 0) | 0;
  p = ab(u | 0, h | 0, p | 0, C | 0) | 0;
  h = C;
  t = p ^ t;
  l = h ^ l;
  u = cb(t | 0, l | 0, 24) | 0;
  k = C;
  l = db(t | 0, l | 0, 40) | 0;
  l = l | u;
  k = C | k;
  t = ab(l | 0, k | 0, v | 0, n | 0) | 0;
  o = C;
  n = db(v | 0, n | 0, 1) | 0;
  n = lb(u | 0, 0, n & -2 | 0, C & 1 | 0) | 0;
  n = ab(t | 0, o | 0, n | 0, C | 0) | 0;
  o = C;
  c[s >> 2] = n;
  c[s + 4 >> 2] = o;
  r = n ^ r;
  j = o ^ j;
  o = cb(r | 0, j | 0, 16) | 0;
  n = C;
  j = db(r | 0, j | 0, 48) | 0;
  j = j | o;
  n = C | n;
  c[q >> 2] = j;
  c[q + 4 >> 2] = n;
  n = ab(j | 0, n | 0, p | 0, h | 0) | 0;
  j = C;
  h = db(p | 0, h | 0, 1) | 0;
  h = lb(o | 0, 0, h & -2 | 0, C & 1 | 0) | 0;
  h = ab(n | 0, j | 0, h | 0, C | 0) | 0;
  j = C;
  c[m >> 2] = h;
  c[m + 4 >> 2] = j;
  l = h ^ l;
  k = j ^ k;
  j = cb(l | 0, k | 0, 63) | 0;
  h = C;
  k = db(l | 0, k | 0, 1) | 0;
  c[b >> 2] = k | j;
  c[b + 4 >> 2] = C | h;
  a = a + 1 | 0;
 } while ((a | 0) != 8);
 a = 0;
 do {
  B = a << 1;
  k = e + (B << 3) | 0;
  A = k;
  y = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  K = e + (B + 32 << 3) | 0;
  q = K;
  s = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  I = ab(s | 0, q | 0, y | 0, A | 0) | 0;
  u = C;
  A = db(y | 0, A | 0, 1) | 0;
  A = lb(A & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  A = ab(I | 0, u | 0, A | 0, C | 0) | 0;
  u = C;
  I = e + (B + 96 << 3) | 0;
  y = I;
  H = A ^ c[y >> 2];
  y = u ^ c[y + 4 >> 2];
  E = e + (B + 64 << 3) | 0;
  J = E;
  n = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  F = ab(y | 0, H | 0, n | 0, J | 0) | 0;
  b = C;
  J = db(n | 0, J | 0, 1) | 0;
  J = lb(J & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  J = ab(F | 0, b | 0, J | 0, C | 0) | 0;
  b = C;
  s = J ^ s;
  q = b ^ q;
  F = cb(s | 0, q | 0, 24) | 0;
  n = C;
  q = db(s | 0, q | 0, 40) | 0;
  q = q | F;
  n = C | n;
  s = ab(q | 0, n | 0, A | 0, u | 0) | 0;
  x = C;
  u = db(A | 0, u | 0, 1) | 0;
  u = lb(F | 0, 0, u & -2 | 0, C & 1 | 0) | 0;
  u = ab(s | 0, x | 0, u | 0, C | 0) | 0;
  x = C;
  s = k;
  c[s >> 2] = u;
  c[s + 4 >> 2] = x;
  y = u ^ y;
  H = x ^ H;
  x = cb(y | 0, H | 0, 16) | 0;
  u = C;
  H = db(y | 0, H | 0, 48) | 0;
  H = H | x;
  u = C | u;
  y = I;
  c[y >> 2] = H;
  c[y + 4 >> 2] = u;
  u = ab(H | 0, u | 0, J | 0, b | 0) | 0;
  H = C;
  b = db(J | 0, b | 0, 1) | 0;
  b = lb(x | 0, 0, b & -2 | 0, C & 1 | 0) | 0;
  b = ab(u | 0, H | 0, b | 0, C | 0) | 0;
  H = C;
  u = E;
  c[u >> 2] = b;
  c[u + 4 >> 2] = H;
  q = b ^ q;
  n = H ^ n;
  H = cb(q | 0, n | 0, 63) | 0;
  b = C;
  n = db(q | 0, n | 0, 1) | 0;
  q = K;
  c[q >> 2] = n | H;
  c[q + 4 >> 2] = C | b;
  q = e + ((B | 1) << 3) | 0;
  b = q;
  H = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  n = e + (B + 33 << 3) | 0;
  u = n;
  x = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  J = ab(x | 0, u | 0, H | 0, b | 0) | 0;
  y = C;
  b = db(H | 0, b | 0, 1) | 0;
  b = lb(b & -2 | 0, C & 1 | 0, x | 0, 0) | 0;
  b = ab(J | 0, y | 0, b | 0, C | 0) | 0;
  y = C;
  J = e + (B + 97 << 3) | 0;
  H = J;
  s = b ^ c[H >> 2];
  H = y ^ c[H + 4 >> 2];
  F = e + (B + 65 << 3) | 0;
  A = F;
  r = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  w = ab(H | 0, s | 0, r | 0, A | 0) | 0;
  D = C;
  A = db(r | 0, A | 0, 1) | 0;
  A = lb(A & -2 | 0, C & 1 | 0, H | 0, 0) | 0;
  A = ab(w | 0, D | 0, A | 0, C | 0) | 0;
  D = C;
  x = A ^ x;
  u = D ^ u;
  w = cb(x | 0, u | 0, 24) | 0;
  r = C;
  u = db(x | 0, u | 0, 40) | 0;
  u = u | w;
  r = C | r;
  x = ab(u | 0, r | 0, b | 0, y | 0) | 0;
  m = C;
  y = db(b | 0, y | 0, 1) | 0;
  y = lb(w | 0, 0, y & -2 | 0, C & 1 | 0) | 0;
  y = ab(x | 0, m | 0, y | 0, C | 0) | 0;
  m = C;
  x = q;
  c[x >> 2] = y;
  c[x + 4 >> 2] = m;
  H = y ^ H;
  s = m ^ s;
  m = cb(H | 0, s | 0, 16) | 0;
  y = C;
  s = db(H | 0, s | 0, 48) | 0;
  s = s | m;
  y = C | y;
  H = J;
  c[H >> 2] = s;
  c[H + 4 >> 2] = y;
  y = ab(s | 0, y | 0, A | 0, D | 0) | 0;
  s = C;
  D = db(A | 0, D | 0, 1) | 0;
  D = lb(m | 0, 0, D & -2 | 0, C & 1 | 0) | 0;
  D = ab(y | 0, s | 0, D | 0, C | 0) | 0;
  s = C;
  y = F;
  c[y >> 2] = D;
  c[y + 4 >> 2] = s;
  u = D ^ u;
  r = s ^ r;
  s = cb(u | 0, r | 0, 63) | 0;
  D = C;
  r = db(u | 0, r | 0, 1) | 0;
  u = n;
  c[u >> 2] = r | s;
  c[u + 4 >> 2] = C | D;
  u = e + (B + 16 << 3) | 0;
  D = u;
  s = c[D >> 2] | 0;
  D = c[D + 4 >> 2] | 0;
  r = e + (B + 48 << 3) | 0;
  y = r;
  m = c[y >> 2] | 0;
  y = c[y + 4 >> 2] | 0;
  A = ab(m | 0, y | 0, s | 0, D | 0) | 0;
  H = C;
  D = db(s | 0, D | 0, 1) | 0;
  D = lb(D & -2 | 0, C & 1 | 0, m | 0, 0) | 0;
  D = ab(A | 0, H | 0, D | 0, C | 0) | 0;
  H = C;
  A = e + (B + 112 << 3) | 0;
  s = A;
  x = D ^ c[s >> 2];
  s = H ^ c[s + 4 >> 2];
  w = e + (B + 80 << 3) | 0;
  b = w;
  v = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  l = ab(s | 0, x | 0, v | 0, b | 0) | 0;
  p = C;
  b = db(v | 0, b | 0, 1) | 0;
  b = lb(b & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  b = ab(l | 0, p | 0, b | 0, C | 0) | 0;
  p = C;
  m = b ^ m;
  y = p ^ y;
  l = cb(m | 0, y | 0, 24) | 0;
  v = C;
  y = db(m | 0, y | 0, 40) | 0;
  y = y | l;
  v = C | v;
  m = ab(y | 0, v | 0, D | 0, H | 0) | 0;
  G = C;
  H = db(D | 0, H | 0, 1) | 0;
  H = lb(l | 0, 0, H & -2 | 0, C & 1 | 0) | 0;
  H = ab(m | 0, G | 0, H | 0, C | 0) | 0;
  G = C;
  m = u;
  c[m >> 2] = H;
  c[m + 4 >> 2] = G;
  s = H ^ s;
  x = G ^ x;
  G = cb(s | 0, x | 0, 16) | 0;
  H = C;
  x = db(s | 0, x | 0, 48) | 0;
  x = x | G;
  H = C | H;
  s = A;
  c[s >> 2] = x;
  c[s + 4 >> 2] = H;
  H = ab(x | 0, H | 0, b | 0, p | 0) | 0;
  x = C;
  p = db(b | 0, p | 0, 1) | 0;
  p = lb(G | 0, 0, p & -2 | 0, C & 1 | 0) | 0;
  p = ab(H | 0, x | 0, p | 0, C | 0) | 0;
  x = C;
  y = p ^ y;
  v = x ^ v;
  H = cb(y | 0, v | 0, 63) | 0;
  G = C;
  v = db(y | 0, v | 0, 1) | 0;
  y = r;
  c[y >> 2] = v | H;
  c[y + 4 >> 2] = C | G;
  y = e + (B + 17 << 3) | 0;
  G = y;
  H = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  v = e + (B + 49 << 3) | 0;
  b = v;
  s = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  m = ab(s | 0, b | 0, H | 0, G | 0) | 0;
  l = C;
  G = db(H | 0, G | 0, 1) | 0;
  G = lb(G & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  G = ab(m | 0, l | 0, G | 0, C | 0) | 0;
  l = C;
  m = e + (B + 113 << 3) | 0;
  H = m;
  D = G ^ c[H >> 2];
  H = l ^ c[H + 4 >> 2];
  B = e + (B + 81 << 3) | 0;
  h = B;
  j = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  o = ab(H | 0, D | 0, j | 0, h | 0) | 0;
  t = C;
  h = db(j | 0, h | 0, 1) | 0;
  h = lb(h & -2 | 0, C & 1 | 0, H | 0, 0) | 0;
  h = ab(o | 0, t | 0, h | 0, C | 0) | 0;
  t = C;
  s = h ^ s;
  b = t ^ b;
  o = cb(s | 0, b | 0, 24) | 0;
  j = C;
  b = db(s | 0, b | 0, 40) | 0;
  b = b | o;
  j = C | j;
  s = ab(b | 0, j | 0, G | 0, l | 0) | 0;
  z = C;
  l = db(G | 0, l | 0, 1) | 0;
  l = lb(o | 0, 0, l & -2 | 0, C & 1 | 0) | 0;
  l = ab(s | 0, z | 0, l | 0, C | 0) | 0;
  z = C;
  s = y;
  c[s >> 2] = l;
  c[s + 4 >> 2] = z;
  H = l ^ H;
  D = z ^ D;
  z = cb(H | 0, D | 0, 16) | 0;
  l = C;
  D = db(H | 0, D | 0, 48) | 0;
  D = D | z;
  l = C | l;
  H = ab(D | 0, l | 0, h | 0, t | 0) | 0;
  s = C;
  t = db(h | 0, t | 0, 1) | 0;
  t = lb(z | 0, 0, t & -2 | 0, C & 1 | 0) | 0;
  t = ab(H | 0, s | 0, t | 0, C | 0) | 0;
  s = C;
  b = t ^ b;
  j = s ^ j;
  H = cb(b | 0, j | 0, 63) | 0;
  z = C;
  j = db(b | 0, j | 0, 1) | 0;
  b = v;
  c[b >> 2] = j | H;
  c[b + 4 >> 2] = C | z;
  b = k;
  z = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  H = n;
  j = c[H >> 2] | 0;
  H = c[H + 4 >> 2] | 0;
  h = ab(j | 0, H | 0, z | 0, b | 0) | 0;
  o = C;
  b = db(z | 0, b | 0, 1) | 0;
  b = lb(b & -2 | 0, C & 1 | 0, j | 0, 0) | 0;
  b = ab(h | 0, o | 0, b | 0, C | 0) | 0;
  o = C;
  D = b ^ D;
  l = o ^ l;
  h = ab(l | 0, D | 0, p | 0, x | 0) | 0;
  z = C;
  x = db(p | 0, x | 0, 1) | 0;
  x = lb(x & -2 | 0, C & 1 | 0, l | 0, 0) | 0;
  x = ab(h | 0, z | 0, x | 0, C | 0) | 0;
  z = C;
  j = x ^ j;
  H = z ^ H;
  h = cb(j | 0, H | 0, 24) | 0;
  p = C;
  H = db(j | 0, H | 0, 40) | 0;
  H = H | h;
  p = C | p;
  j = ab(H | 0, p | 0, b | 0, o | 0) | 0;
  G = C;
  o = db(b | 0, o | 0, 1) | 0;
  o = lb(h | 0, 0, o & -2 | 0, C & 1 | 0) | 0;
  o = ab(j | 0, G | 0, o | 0, C | 0) | 0;
  G = C;
  c[k >> 2] = o;
  c[k + 4 >> 2] = G;
  l = o ^ l;
  D = G ^ D;
  G = cb(l | 0, D | 0, 16) | 0;
  o = C;
  D = db(l | 0, D | 0, 48) | 0;
  D = D | G;
  o = C | o;
  c[m >> 2] = D;
  c[m + 4 >> 2] = o;
  o = ab(D | 0, o | 0, x | 0, z | 0) | 0;
  D = C;
  z = db(x | 0, z | 0, 1) | 0;
  z = lb(G | 0, 0, z & -2 | 0, C & 1 | 0) | 0;
  z = ab(o | 0, D | 0, z | 0, C | 0) | 0;
  D = C;
  c[w >> 2] = z;
  c[w + 4 >> 2] = D;
  H = z ^ H;
  p = D ^ p;
  D = cb(H | 0, p | 0, 63) | 0;
  z = C;
  p = db(H | 0, p | 0, 1) | 0;
  c[n >> 2] = p | D;
  c[n + 4 >> 2] = C | z;
  n = q;
  z = c[n >> 2] | 0;
  n = c[n + 4 >> 2] | 0;
  D = r;
  p = c[D >> 2] | 0;
  D = c[D + 4 >> 2] | 0;
  H = ab(p | 0, D | 0, z | 0, n | 0) | 0;
  w = C;
  n = db(z | 0, n | 0, 1) | 0;
  n = lb(n & -2 | 0, C & 1 | 0, p | 0, 0) | 0;
  n = ab(H | 0, w | 0, n | 0, C | 0) | 0;
  w = C;
  H = I;
  z = n ^ c[H >> 2];
  H = w ^ c[H + 4 >> 2];
  o = ab(H | 0, z | 0, t | 0, s | 0) | 0;
  G = C;
  s = db(t | 0, s | 0, 1) | 0;
  s = lb(s & -2 | 0, C & 1 | 0, H | 0, 0) | 0;
  s = ab(o | 0, G | 0, s | 0, C | 0) | 0;
  G = C;
  p = s ^ p;
  D = G ^ D;
  o = cb(p | 0, D | 0, 24) | 0;
  t = C;
  D = db(p | 0, D | 0, 40) | 0;
  D = D | o;
  t = C | t;
  p = ab(D | 0, t | 0, n | 0, w | 0) | 0;
  x = C;
  w = db(n | 0, w | 0, 1) | 0;
  w = lb(o | 0, 0, w & -2 | 0, C & 1 | 0) | 0;
  w = ab(p | 0, x | 0, w | 0, C | 0) | 0;
  x = C;
  c[q >> 2] = w;
  c[q + 4 >> 2] = x;
  H = w ^ H;
  z = x ^ z;
  x = cb(H | 0, z | 0, 16) | 0;
  w = C;
  z = db(H | 0, z | 0, 48) | 0;
  z = z | x;
  w = C | w;
  c[I >> 2] = z;
  c[I + 4 >> 2] = w;
  w = ab(z | 0, w | 0, s | 0, G | 0) | 0;
  z = C;
  G = db(s | 0, G | 0, 1) | 0;
  G = lb(x | 0, 0, G & -2 | 0, C & 1 | 0) | 0;
  G = ab(w | 0, z | 0, G | 0, C | 0) | 0;
  z = C;
  c[B >> 2] = G;
  c[B + 4 >> 2] = z;
  D = G ^ D;
  t = z ^ t;
  z = cb(D | 0, t | 0, 63) | 0;
  G = C;
  t = db(D | 0, t | 0, 1) | 0;
  c[r >> 2] = t | z;
  c[r + 4 >> 2] = C | G;
  r = u;
  G = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  z = v;
  t = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  D = ab(t | 0, z | 0, G | 0, r | 0) | 0;
  B = C;
  r = db(G | 0, r | 0, 1) | 0;
  r = lb(r & -2 | 0, C & 1 | 0, t | 0, 0) | 0;
  r = ab(D | 0, B | 0, r | 0, C | 0) | 0;
  B = C;
  D = J;
  G = r ^ c[D >> 2];
  D = B ^ c[D + 4 >> 2];
  w = E;
  x = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  s = ab(D | 0, G | 0, x | 0, w | 0) | 0;
  I = C;
  w = db(x | 0, w | 0, 1) | 0;
  w = lb(w & -2 | 0, C & 1 | 0, D | 0, 0) | 0;
  w = ab(s | 0, I | 0, w | 0, C | 0) | 0;
  I = C;
  t = w ^ t;
  z = I ^ z;
  s = cb(t | 0, z | 0, 24) | 0;
  x = C;
  z = db(t | 0, z | 0, 40) | 0;
  z = z | s;
  x = C | x;
  t = ab(z | 0, x | 0, r | 0, B | 0) | 0;
  H = C;
  B = db(r | 0, B | 0, 1) | 0;
  B = lb(s | 0, 0, B & -2 | 0, C & 1 | 0) | 0;
  B = ab(t | 0, H | 0, B | 0, C | 0) | 0;
  H = C;
  c[u >> 2] = B;
  c[u + 4 >> 2] = H;
  D = B ^ D;
  G = H ^ G;
  H = cb(D | 0, G | 0, 16) | 0;
  B = C;
  G = db(D | 0, G | 0, 48) | 0;
  G = G | H;
  B = C | B;
  c[J >> 2] = G;
  c[J + 4 >> 2] = B;
  B = ab(G | 0, B | 0, w | 0, I | 0) | 0;
  G = C;
  I = db(w | 0, I | 0, 1) | 0;
  I = lb(H | 0, 0, I & -2 | 0, C & 1 | 0) | 0;
  I = ab(B | 0, G | 0, I | 0, C | 0) | 0;
  G = C;
  c[E >> 2] = I;
  c[E + 4 >> 2] = G;
  z = I ^ z;
  x = G ^ x;
  G = cb(z | 0, x | 0, 63) | 0;
  I = C;
  x = db(z | 0, x | 0, 1) | 0;
  c[v >> 2] = x | G;
  c[v + 4 >> 2] = C | I;
  v = y;
  I = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  G = K;
  x = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  z = ab(x | 0, G | 0, I | 0, v | 0) | 0;
  E = C;
  v = db(I | 0, v | 0, 1) | 0;
  v = lb(v & -2 | 0, C & 1 | 0, x | 0, 0) | 0;
  v = ab(z | 0, E | 0, v | 0, C | 0) | 0;
  E = C;
  z = A;
  I = v ^ c[z >> 2];
  z = E ^ c[z + 4 >> 2];
  B = F;
  H = c[B >> 2] | 0;
  B = c[B + 4 >> 2] | 0;
  w = ab(z | 0, I | 0, H | 0, B | 0) | 0;
  J = C;
  B = db(H | 0, B | 0, 1) | 0;
  B = lb(B & -2 | 0, C & 1 | 0, z | 0, 0) | 0;
  B = ab(w | 0, J | 0, B | 0, C | 0) | 0;
  J = C;
  x = B ^ x;
  G = J ^ G;
  w = cb(x | 0, G | 0, 24) | 0;
  H = C;
  G = db(x | 0, G | 0, 40) | 0;
  G = G | w;
  H = C | H;
  x = ab(G | 0, H | 0, v | 0, E | 0) | 0;
  D = C;
  E = db(v | 0, E | 0, 1) | 0;
  E = lb(w | 0, 0, E & -2 | 0, C & 1 | 0) | 0;
  E = ab(x | 0, D | 0, E | 0, C | 0) | 0;
  D = C;
  c[y >> 2] = E;
  c[y + 4 >> 2] = D;
  z = E ^ z;
  I = D ^ I;
  D = cb(z | 0, I | 0, 16) | 0;
  E = C;
  I = db(z | 0, I | 0, 48) | 0;
  I = I | D;
  E = C | E;
  c[A >> 2] = I;
  c[A + 4 >> 2] = E;
  E = ab(I | 0, E | 0, B | 0, J | 0) | 0;
  I = C;
  J = db(B | 0, J | 0, 1) | 0;
  J = lb(D | 0, 0, J & -2 | 0, C & 1 | 0) | 0;
  J = ab(E | 0, I | 0, J | 0, C | 0) | 0;
  I = C;
  c[F >> 2] = J;
  c[F + 4 >> 2] = I;
  G = J ^ G;
  H = I ^ H;
  I = cb(G | 0, H | 0, 63) | 0;
  J = C;
  H = db(G | 0, H | 0, 1) | 0;
  c[K >> 2] = H | I;
  c[K + 4 >> 2] = C | J;
  a = a + 1 | 0;
 } while ((a | 0) != 8);
 Ca(d, f);
 Da(d, e);
 i = g;
 return;
}

function Qa(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 g = i;
 i = i + 2048 | 0;
 e = g + 1024 | 0;
 f = g;
 Ca(e, b);
 Da(e, a);
 Ca(f, e);
 a = 0;
 do {
  p = a << 4;
  H = e + (p << 3) | 0;
  q = H;
  s = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  b = e + ((p | 4) << 3) | 0;
  A = b;
  y = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  j = ab(y | 0, A | 0, s | 0, q | 0) | 0;
  w = C;
  q = db(s | 0, q | 0, 1) | 0;
  q = lb(q & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  q = ab(j | 0, w | 0, q | 0, C | 0) | 0;
  w = C;
  j = e + ((p | 12) << 3) | 0;
  s = j;
  k = q ^ c[s >> 2];
  s = w ^ c[s + 4 >> 2];
  n = e + ((p | 8) << 3) | 0;
  h = n;
  E = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  m = ab(s | 0, k | 0, E | 0, h | 0) | 0;
  K = C;
  h = db(E | 0, h | 0, 1) | 0;
  h = lb(h & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  h = ab(m | 0, K | 0, h | 0, C | 0) | 0;
  K = C;
  y = h ^ y;
  A = K ^ A;
  m = cb(y | 0, A | 0, 24) | 0;
  E = C;
  A = db(y | 0, A | 0, 40) | 0;
  A = A | m;
  E = C | E;
  y = ab(A | 0, E | 0, q | 0, w | 0) | 0;
  t = C;
  w = db(q | 0, w | 0, 1) | 0;
  w = lb(m | 0, 0, w & -2 | 0, C & 1 | 0) | 0;
  w = ab(y | 0, t | 0, w | 0, C | 0) | 0;
  t = C;
  y = H;
  c[y >> 2] = w;
  c[y + 4 >> 2] = t;
  s = w ^ s;
  k = t ^ k;
  t = cb(s | 0, k | 0, 16) | 0;
  w = C;
  k = db(s | 0, k | 0, 48) | 0;
  k = k | t;
  w = C | w;
  s = j;
  c[s >> 2] = k;
  c[s + 4 >> 2] = w;
  w = ab(k | 0, w | 0, h | 0, K | 0) | 0;
  k = C;
  K = db(h | 0, K | 0, 1) | 0;
  K = lb(t | 0, 0, K & -2 | 0, C & 1 | 0) | 0;
  K = ab(w | 0, k | 0, K | 0, C | 0) | 0;
  k = C;
  w = n;
  c[w >> 2] = K;
  c[w + 4 >> 2] = k;
  A = K ^ A;
  E = k ^ E;
  k = cb(A | 0, E | 0, 63) | 0;
  K = C;
  E = db(A | 0, E | 0, 1) | 0;
  A = b;
  c[A >> 2] = E | k;
  c[A + 4 >> 2] = C | K;
  A = e + ((p | 1) << 3) | 0;
  K = A;
  k = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  E = e + ((p | 5) << 3) | 0;
  w = E;
  t = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  h = ab(t | 0, w | 0, k | 0, K | 0) | 0;
  s = C;
  K = db(k | 0, K | 0, 1) | 0;
  K = lb(K & -2 | 0, C & 1 | 0, t | 0, 0) | 0;
  K = ab(h | 0, s | 0, K | 0, C | 0) | 0;
  s = C;
  h = e + ((p | 13) << 3) | 0;
  k = h;
  y = K ^ c[k >> 2];
  k = s ^ c[k + 4 >> 2];
  m = e + ((p | 9) << 3) | 0;
  q = m;
  z = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  u = ab(k | 0, y | 0, z | 0, q | 0) | 0;
  o = C;
  q = db(z | 0, q | 0, 1) | 0;
  q = lb(q & -2 | 0, C & 1 | 0, k | 0, 0) | 0;
  q = ab(u | 0, o | 0, q | 0, C | 0) | 0;
  o = C;
  t = q ^ t;
  w = o ^ w;
  u = cb(t | 0, w | 0, 24) | 0;
  z = C;
  w = db(t | 0, w | 0, 40) | 0;
  w = w | u;
  z = C | z;
  t = ab(w | 0, z | 0, K | 0, s | 0) | 0;
  F = C;
  s = db(K | 0, s | 0, 1) | 0;
  s = lb(u | 0, 0, s & -2 | 0, C & 1 | 0) | 0;
  s = ab(t | 0, F | 0, s | 0, C | 0) | 0;
  F = C;
  t = A;
  c[t >> 2] = s;
  c[t + 4 >> 2] = F;
  k = s ^ k;
  y = F ^ y;
  F = cb(k | 0, y | 0, 16) | 0;
  s = C;
  y = db(k | 0, y | 0, 48) | 0;
  y = y | F;
  s = C | s;
  k = h;
  c[k >> 2] = y;
  c[k + 4 >> 2] = s;
  s = ab(y | 0, s | 0, q | 0, o | 0) | 0;
  y = C;
  o = db(q | 0, o | 0, 1) | 0;
  o = lb(F | 0, 0, o & -2 | 0, C & 1 | 0) | 0;
  o = ab(s | 0, y | 0, o | 0, C | 0) | 0;
  y = C;
  s = m;
  c[s >> 2] = o;
  c[s + 4 >> 2] = y;
  w = o ^ w;
  z = y ^ z;
  y = cb(w | 0, z | 0, 63) | 0;
  o = C;
  z = db(w | 0, z | 0, 1) | 0;
  w = E;
  c[w >> 2] = z | y;
  c[w + 4 >> 2] = C | o;
  w = e + ((p | 2) << 3) | 0;
  o = w;
  y = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  z = e + ((p | 6) << 3) | 0;
  s = z;
  F = c[s >> 2] | 0;
  s = c[s + 4 >> 2] | 0;
  q = ab(F | 0, s | 0, y | 0, o | 0) | 0;
  k = C;
  o = db(y | 0, o | 0, 1) | 0;
  o = lb(o & -2 | 0, C & 1 | 0, F | 0, 0) | 0;
  o = ab(q | 0, k | 0, o | 0, C | 0) | 0;
  k = C;
  q = e + ((p | 14) << 3) | 0;
  y = q;
  t = o ^ c[y >> 2];
  y = k ^ c[y + 4 >> 2];
  u = e + ((p | 10) << 3) | 0;
  K = u;
  v = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  G = ab(y | 0, t | 0, v | 0, K | 0) | 0;
  B = C;
  K = db(v | 0, K | 0, 1) | 0;
  K = lb(K & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  K = ab(G | 0, B | 0, K | 0, C | 0) | 0;
  B = C;
  F = K ^ F;
  s = B ^ s;
  G = cb(F | 0, s | 0, 24) | 0;
  v = C;
  s = db(F | 0, s | 0, 40) | 0;
  s = s | G;
  v = C | v;
  F = ab(s | 0, v | 0, o | 0, k | 0) | 0;
  l = C;
  k = db(o | 0, k | 0, 1) | 0;
  k = lb(G | 0, 0, k & -2 | 0, C & 1 | 0) | 0;
  k = ab(F | 0, l | 0, k | 0, C | 0) | 0;
  l = C;
  F = w;
  c[F >> 2] = k;
  c[F + 4 >> 2] = l;
  y = k ^ y;
  t = l ^ t;
  l = cb(y | 0, t | 0, 16) | 0;
  k = C;
  t = db(y | 0, t | 0, 48) | 0;
  t = t | l;
  k = C | k;
  y = q;
  c[y >> 2] = t;
  c[y + 4 >> 2] = k;
  k = ab(t | 0, k | 0, K | 0, B | 0) | 0;
  t = C;
  B = db(K | 0, B | 0, 1) | 0;
  B = lb(l | 0, 0, B & -2 | 0, C & 1 | 0) | 0;
  B = ab(k | 0, t | 0, B | 0, C | 0) | 0;
  t = C;
  s = B ^ s;
  v = t ^ v;
  k = cb(s | 0, v | 0, 63) | 0;
  l = C;
  v = db(s | 0, v | 0, 1) | 0;
  s = z;
  c[s >> 2] = v | k;
  c[s + 4 >> 2] = C | l;
  s = e + ((p | 3) << 3) | 0;
  l = s;
  k = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  v = e + ((p | 7) << 3) | 0;
  K = v;
  y = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  F = ab(y | 0, K | 0, k | 0, l | 0) | 0;
  G = C;
  l = db(k | 0, l | 0, 1) | 0;
  l = lb(l & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  l = ab(F | 0, G | 0, l | 0, C | 0) | 0;
  G = C;
  F = e + ((p | 15) << 3) | 0;
  k = F;
  o = l ^ c[k >> 2];
  k = G ^ c[k + 4 >> 2];
  p = e + ((p | 11) << 3) | 0;
  J = p;
  I = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  D = ab(k | 0, o | 0, I | 0, J | 0) | 0;
  x = C;
  J = db(I | 0, J | 0, 1) | 0;
  J = lb(J & -2 | 0, C & 1 | 0, k | 0, 0) | 0;
  J = ab(D | 0, x | 0, J | 0, C | 0) | 0;
  x = C;
  y = J ^ y;
  K = x ^ K;
  D = cb(y | 0, K | 0, 24) | 0;
  I = C;
  K = db(y | 0, K | 0, 40) | 0;
  K = K | D;
  I = C | I;
  y = ab(K | 0, I | 0, l | 0, G | 0) | 0;
  r = C;
  G = db(l | 0, G | 0, 1) | 0;
  G = lb(D | 0, 0, G & -2 | 0, C & 1 | 0) | 0;
  G = ab(y | 0, r | 0, G | 0, C | 0) | 0;
  r = C;
  y = s;
  c[y >> 2] = G;
  c[y + 4 >> 2] = r;
  k = G ^ k;
  o = r ^ o;
  r = cb(k | 0, o | 0, 16) | 0;
  G = C;
  o = db(k | 0, o | 0, 48) | 0;
  o = o | r;
  G = C | G;
  k = ab(o | 0, G | 0, J | 0, x | 0) | 0;
  y = C;
  x = db(J | 0, x | 0, 1) | 0;
  x = lb(r | 0, 0, x & -2 | 0, C & 1 | 0) | 0;
  x = ab(k | 0, y | 0, x | 0, C | 0) | 0;
  y = C;
  K = x ^ K;
  I = y ^ I;
  k = cb(K | 0, I | 0, 63) | 0;
  r = C;
  I = db(K | 0, I | 0, 1) | 0;
  K = v;
  c[K >> 2] = I | k;
  c[K + 4 >> 2] = C | r;
  K = H;
  r = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  k = E;
  I = c[k >> 2] | 0;
  k = c[k + 4 >> 2] | 0;
  J = ab(I | 0, k | 0, r | 0, K | 0) | 0;
  D = C;
  K = db(r | 0, K | 0, 1) | 0;
  K = lb(K & -2 | 0, C & 1 | 0, I | 0, 0) | 0;
  K = ab(J | 0, D | 0, K | 0, C | 0) | 0;
  D = C;
  o = K ^ o;
  G = D ^ G;
  J = ab(G | 0, o | 0, B | 0, t | 0) | 0;
  r = C;
  t = db(B | 0, t | 0, 1) | 0;
  t = lb(t & -2 | 0, C & 1 | 0, G | 0, 0) | 0;
  t = ab(J | 0, r | 0, t | 0, C | 0) | 0;
  r = C;
  I = t ^ I;
  k = r ^ k;
  J = cb(I | 0, k | 0, 24) | 0;
  B = C;
  k = db(I | 0, k | 0, 40) | 0;
  k = k | J;
  B = C | B;
  I = ab(k | 0, B | 0, K | 0, D | 0) | 0;
  l = C;
  D = db(K | 0, D | 0, 1) | 0;
  D = lb(J | 0, 0, D & -2 | 0, C & 1 | 0) | 0;
  D = ab(I | 0, l | 0, D | 0, C | 0) | 0;
  l = C;
  c[H >> 2] = D;
  c[H + 4 >> 2] = l;
  G = D ^ G;
  o = l ^ o;
  l = cb(G | 0, o | 0, 16) | 0;
  D = C;
  o = db(G | 0, o | 0, 48) | 0;
  o = o | l;
  D = C | D;
  c[F >> 2] = o;
  c[F + 4 >> 2] = D;
  D = ab(o | 0, D | 0, t | 0, r | 0) | 0;
  o = C;
  r = db(t | 0, r | 0, 1) | 0;
  r = lb(l | 0, 0, r & -2 | 0, C & 1 | 0) | 0;
  r = ab(D | 0, o | 0, r | 0, C | 0) | 0;
  o = C;
  c[u >> 2] = r;
  c[u + 4 >> 2] = o;
  k = r ^ k;
  B = o ^ B;
  o = cb(k | 0, B | 0, 63) | 0;
  r = C;
  B = db(k | 0, B | 0, 1) | 0;
  c[E >> 2] = B | o;
  c[E + 4 >> 2] = C | r;
  E = A;
  r = c[E >> 2] | 0;
  E = c[E + 4 >> 2] | 0;
  o = z;
  B = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  k = ab(B | 0, o | 0, r | 0, E | 0) | 0;
  u = C;
  E = db(r | 0, E | 0, 1) | 0;
  E = lb(E & -2 | 0, C & 1 | 0, B | 0, 0) | 0;
  E = ab(k | 0, u | 0, E | 0, C | 0) | 0;
  u = C;
  k = j;
  r = E ^ c[k >> 2];
  k = u ^ c[k + 4 >> 2];
  D = ab(k | 0, r | 0, x | 0, y | 0) | 0;
  l = C;
  y = db(x | 0, y | 0, 1) | 0;
  y = lb(y & -2 | 0, C & 1 | 0, k | 0, 0) | 0;
  y = ab(D | 0, l | 0, y | 0, C | 0) | 0;
  l = C;
  B = y ^ B;
  o = l ^ o;
  D = cb(B | 0, o | 0, 24) | 0;
  x = C;
  o = db(B | 0, o | 0, 40) | 0;
  o = o | D;
  x = C | x;
  B = ab(o | 0, x | 0, E | 0, u | 0) | 0;
  t = C;
  u = db(E | 0, u | 0, 1) | 0;
  u = lb(D | 0, 0, u & -2 | 0, C & 1 | 0) | 0;
  u = ab(B | 0, t | 0, u | 0, C | 0) | 0;
  t = C;
  c[A >> 2] = u;
  c[A + 4 >> 2] = t;
  k = u ^ k;
  r = t ^ r;
  t = cb(k | 0, r | 0, 16) | 0;
  u = C;
  r = db(k | 0, r | 0, 48) | 0;
  r = r | t;
  u = C | u;
  c[j >> 2] = r;
  c[j + 4 >> 2] = u;
  u = ab(r | 0, u | 0, y | 0, l | 0) | 0;
  r = C;
  l = db(y | 0, l | 0, 1) | 0;
  l = lb(t | 0, 0, l & -2 | 0, C & 1 | 0) | 0;
  l = ab(u | 0, r | 0, l | 0, C | 0) | 0;
  r = C;
  c[p >> 2] = l;
  c[p + 4 >> 2] = r;
  o = l ^ o;
  x = r ^ x;
  r = cb(o | 0, x | 0, 63) | 0;
  l = C;
  x = db(o | 0, x | 0, 1) | 0;
  c[z >> 2] = x | r;
  c[z + 4 >> 2] = C | l;
  z = w;
  l = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  r = v;
  x = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  o = ab(x | 0, r | 0, l | 0, z | 0) | 0;
  p = C;
  z = db(l | 0, z | 0, 1) | 0;
  z = lb(z & -2 | 0, C & 1 | 0, x | 0, 0) | 0;
  z = ab(o | 0, p | 0, z | 0, C | 0) | 0;
  p = C;
  o = h;
  l = z ^ c[o >> 2];
  o = p ^ c[o + 4 >> 2];
  u = n;
  t = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  y = ab(o | 0, l | 0, t | 0, u | 0) | 0;
  j = C;
  u = db(t | 0, u | 0, 1) | 0;
  u = lb(u & -2 | 0, C & 1 | 0, o | 0, 0) | 0;
  u = ab(y | 0, j | 0, u | 0, C | 0) | 0;
  j = C;
  x = u ^ x;
  r = j ^ r;
  y = cb(x | 0, r | 0, 24) | 0;
  t = C;
  r = db(x | 0, r | 0, 40) | 0;
  r = r | y;
  t = C | t;
  x = ab(r | 0, t | 0, z | 0, p | 0) | 0;
  k = C;
  p = db(z | 0, p | 0, 1) | 0;
  p = lb(y | 0, 0, p & -2 | 0, C & 1 | 0) | 0;
  p = ab(x | 0, k | 0, p | 0, C | 0) | 0;
  k = C;
  c[w >> 2] = p;
  c[w + 4 >> 2] = k;
  o = p ^ o;
  l = k ^ l;
  k = cb(o | 0, l | 0, 16) | 0;
  p = C;
  l = db(o | 0, l | 0, 48) | 0;
  l = l | k;
  p = C | p;
  c[h >> 2] = l;
  c[h + 4 >> 2] = p;
  p = ab(l | 0, p | 0, u | 0, j | 0) | 0;
  l = C;
  j = db(u | 0, j | 0, 1) | 0;
  j = lb(k | 0, 0, j & -2 | 0, C & 1 | 0) | 0;
  j = ab(p | 0, l | 0, j | 0, C | 0) | 0;
  l = C;
  c[n >> 2] = j;
  c[n + 4 >> 2] = l;
  r = j ^ r;
  t = l ^ t;
  l = cb(r | 0, t | 0, 63) | 0;
  j = C;
  t = db(r | 0, t | 0, 1) | 0;
  c[v >> 2] = t | l;
  c[v + 4 >> 2] = C | j;
  v = s;
  j = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  l = b;
  t = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  r = ab(t | 0, l | 0, j | 0, v | 0) | 0;
  n = C;
  v = db(j | 0, v | 0, 1) | 0;
  v = lb(v & -2 | 0, C & 1 | 0, t | 0, 0) | 0;
  v = ab(r | 0, n | 0, v | 0, C | 0) | 0;
  n = C;
  r = q;
  j = v ^ c[r >> 2];
  r = n ^ c[r + 4 >> 2];
  p = m;
  k = c[p >> 2] | 0;
  p = c[p + 4 >> 2] | 0;
  u = ab(r | 0, j | 0, k | 0, p | 0) | 0;
  h = C;
  p = db(k | 0, p | 0, 1) | 0;
  p = lb(p & -2 | 0, C & 1 | 0, r | 0, 0) | 0;
  p = ab(u | 0, h | 0, p | 0, C | 0) | 0;
  h = C;
  t = p ^ t;
  l = h ^ l;
  u = cb(t | 0, l | 0, 24) | 0;
  k = C;
  l = db(t | 0, l | 0, 40) | 0;
  l = l | u;
  k = C | k;
  t = ab(l | 0, k | 0, v | 0, n | 0) | 0;
  o = C;
  n = db(v | 0, n | 0, 1) | 0;
  n = lb(u | 0, 0, n & -2 | 0, C & 1 | 0) | 0;
  n = ab(t | 0, o | 0, n | 0, C | 0) | 0;
  o = C;
  c[s >> 2] = n;
  c[s + 4 >> 2] = o;
  r = n ^ r;
  j = o ^ j;
  o = cb(r | 0, j | 0, 16) | 0;
  n = C;
  j = db(r | 0, j | 0, 48) | 0;
  j = j | o;
  n = C | n;
  c[q >> 2] = j;
  c[q + 4 >> 2] = n;
  n = ab(j | 0, n | 0, p | 0, h | 0) | 0;
  j = C;
  h = db(p | 0, h | 0, 1) | 0;
  h = lb(o | 0, 0, h & -2 | 0, C & 1 | 0) | 0;
  h = ab(n | 0, j | 0, h | 0, C | 0) | 0;
  j = C;
  c[m >> 2] = h;
  c[m + 4 >> 2] = j;
  l = h ^ l;
  k = j ^ k;
  j = cb(l | 0, k | 0, 63) | 0;
  h = C;
  k = db(l | 0, k | 0, 1) | 0;
  c[b >> 2] = k | j;
  c[b + 4 >> 2] = C | h;
  a = a + 1 | 0;
 } while ((a | 0) != 8);
 a = 0;
 do {
  B = a << 1;
  k = e + (B << 3) | 0;
  A = k;
  y = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  K = e + (B + 32 << 3) | 0;
  q = K;
  s = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  I = ab(s | 0, q | 0, y | 0, A | 0) | 0;
  u = C;
  A = db(y | 0, A | 0, 1) | 0;
  A = lb(A & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  A = ab(I | 0, u | 0, A | 0, C | 0) | 0;
  u = C;
  I = e + (B + 96 << 3) | 0;
  y = I;
  H = A ^ c[y >> 2];
  y = u ^ c[y + 4 >> 2];
  E = e + (B + 64 << 3) | 0;
  J = E;
  n = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  F = ab(y | 0, H | 0, n | 0, J | 0) | 0;
  b = C;
  J = db(n | 0, J | 0, 1) | 0;
  J = lb(J & -2 | 0, C & 1 | 0, y | 0, 0) | 0;
  J = ab(F | 0, b | 0, J | 0, C | 0) | 0;
  b = C;
  s = J ^ s;
  q = b ^ q;
  F = cb(s | 0, q | 0, 24) | 0;
  n = C;
  q = db(s | 0, q | 0, 40) | 0;
  q = q | F;
  n = C | n;
  s = ab(q | 0, n | 0, A | 0, u | 0) | 0;
  x = C;
  u = db(A | 0, u | 0, 1) | 0;
  u = lb(F | 0, 0, u & -2 | 0, C & 1 | 0) | 0;
  u = ab(s | 0, x | 0, u | 0, C | 0) | 0;
  x = C;
  s = k;
  c[s >> 2] = u;
  c[s + 4 >> 2] = x;
  y = u ^ y;
  H = x ^ H;
  x = cb(y | 0, H | 0, 16) | 0;
  u = C;
  H = db(y | 0, H | 0, 48) | 0;
  H = H | x;
  u = C | u;
  y = I;
  c[y >> 2] = H;
  c[y + 4 >> 2] = u;
  u = ab(H | 0, u | 0, J | 0, b | 0) | 0;
  H = C;
  b = db(J | 0, b | 0, 1) | 0;
  b = lb(x | 0, 0, b & -2 | 0, C & 1 | 0) | 0;
  b = ab(u | 0, H | 0, b | 0, C | 0) | 0;
  H = C;
  u = E;
  c[u >> 2] = b;
  c[u + 4 >> 2] = H;
  q = b ^ q;
  n = H ^ n;
  H = cb(q | 0, n | 0, 63) | 0;
  b = C;
  n = db(q | 0, n | 0, 1) | 0;
  q = K;
  c[q >> 2] = n | H;
  c[q + 4 >> 2] = C | b;
  q = e + ((B | 1) << 3) | 0;
  b = q;
  H = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  n = e + (B + 33 << 3) | 0;
  u = n;
  x = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  J = ab(x | 0, u | 0, H | 0, b | 0) | 0;
  y = C;
  b = db(H | 0, b | 0, 1) | 0;
  b = lb(b & -2 | 0, C & 1 | 0, x | 0, 0) | 0;
  b = ab(J | 0, y | 0, b | 0, C | 0) | 0;
  y = C;
  J = e + (B + 97 << 3) | 0;
  H = J;
  s = b ^ c[H >> 2];
  H = y ^ c[H + 4 >> 2];
  F = e + (B + 65 << 3) | 0;
  A = F;
  r = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  w = ab(H | 0, s | 0, r | 0, A | 0) | 0;
  D = C;
  A = db(r | 0, A | 0, 1) | 0;
  A = lb(A & -2 | 0, C & 1 | 0, H | 0, 0) | 0;
  A = ab(w | 0, D | 0, A | 0, C | 0) | 0;
  D = C;
  x = A ^ x;
  u = D ^ u;
  w = cb(x | 0, u | 0, 24) | 0;
  r = C;
  u = db(x | 0, u | 0, 40) | 0;
  u = u | w;
  r = C | r;
  x = ab(u | 0, r | 0, b | 0, y | 0) | 0;
  m = C;
  y = db(b | 0, y | 0, 1) | 0;
  y = lb(w | 0, 0, y & -2 | 0, C & 1 | 0) | 0;
  y = ab(x | 0, m | 0, y | 0, C | 0) | 0;
  m = C;
  x = q;
  c[x >> 2] = y;
  c[x + 4 >> 2] = m;
  H = y ^ H;
  s = m ^ s;
  m = cb(H | 0, s | 0, 16) | 0;
  y = C;
  s = db(H | 0, s | 0, 48) | 0;
  s = s | m;
  y = C | y;
  H = J;
  c[H >> 2] = s;
  c[H + 4 >> 2] = y;
  y = ab(s | 0, y | 0, A | 0, D | 0) | 0;
  s = C;
  D = db(A | 0, D | 0, 1) | 0;
  D = lb(m | 0, 0, D & -2 | 0, C & 1 | 0) | 0;
  D = ab(y | 0, s | 0, D | 0, C | 0) | 0;
  s = C;
  y = F;
  c[y >> 2] = D;
  c[y + 4 >> 2] = s;
  u = D ^ u;
  r = s ^ r;
  s = cb(u | 0, r | 0, 63) | 0;
  D = C;
  r = db(u | 0, r | 0, 1) | 0;
  u = n;
  c[u >> 2] = r | s;
  c[u + 4 >> 2] = C | D;
  u = e + (B + 16 << 3) | 0;
  D = u;
  s = c[D >> 2] | 0;
  D = c[D + 4 >> 2] | 0;
  r = e + (B + 48 << 3) | 0;
  y = r;
  m = c[y >> 2] | 0;
  y = c[y + 4 >> 2] | 0;
  A = ab(m | 0, y | 0, s | 0, D | 0) | 0;
  H = C;
  D = db(s | 0, D | 0, 1) | 0;
  D = lb(D & -2 | 0, C & 1 | 0, m | 0, 0) | 0;
  D = ab(A | 0, H | 0, D | 0, C | 0) | 0;
  H = C;
  A = e + (B + 112 << 3) | 0;
  s = A;
  x = D ^ c[s >> 2];
  s = H ^ c[s + 4 >> 2];
  w = e + (B + 80 << 3) | 0;
  b = w;
  v = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  l = ab(s | 0, x | 0, v | 0, b | 0) | 0;
  p = C;
  b = db(v | 0, b | 0, 1) | 0;
  b = lb(b & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  b = ab(l | 0, p | 0, b | 0, C | 0) | 0;
  p = C;
  m = b ^ m;
  y = p ^ y;
  l = cb(m | 0, y | 0, 24) | 0;
  v = C;
  y = db(m | 0, y | 0, 40) | 0;
  y = y | l;
  v = C | v;
  m = ab(y | 0, v | 0, D | 0, H | 0) | 0;
  G = C;
  H = db(D | 0, H | 0, 1) | 0;
  H = lb(l | 0, 0, H & -2 | 0, C & 1 | 0) | 0;
  H = ab(m | 0, G | 0, H | 0, C | 0) | 0;
  G = C;
  m = u;
  c[m >> 2] = H;
  c[m + 4 >> 2] = G;
  s = H ^ s;
  x = G ^ x;
  G = cb(s | 0, x | 0, 16) | 0;
  H = C;
  x = db(s | 0, x | 0, 48) | 0;
  x = x | G;
  H = C | H;
  s = A;
  c[s >> 2] = x;
  c[s + 4 >> 2] = H;
  H = ab(x | 0, H | 0, b | 0, p | 0) | 0;
  x = C;
  p = db(b | 0, p | 0, 1) | 0;
  p = lb(G | 0, 0, p & -2 | 0, C & 1 | 0) | 0;
  p = ab(H | 0, x | 0, p | 0, C | 0) | 0;
  x = C;
  y = p ^ y;
  v = x ^ v;
  H = cb(y | 0, v | 0, 63) | 0;
  G = C;
  v = db(y | 0, v | 0, 1) | 0;
  y = r;
  c[y >> 2] = v | H;
  c[y + 4 >> 2] = C | G;
  y = e + (B + 17 << 3) | 0;
  G = y;
  H = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  v = e + (B + 49 << 3) | 0;
  b = v;
  s = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  m = ab(s | 0, b | 0, H | 0, G | 0) | 0;
  l = C;
  G = db(H | 0, G | 0, 1) | 0;
  G = lb(G & -2 | 0, C & 1 | 0, s | 0, 0) | 0;
  G = ab(m | 0, l | 0, G | 0, C | 0) | 0;
  l = C;
  m = e + (B + 113 << 3) | 0;
  H = m;
  D = G ^ c[H >> 2];
  H = l ^ c[H + 4 >> 2];
  B = e + (B + 81 << 3) | 0;
  h = B;
  j = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  o = ab(H | 0, D | 0, j | 0, h | 0) | 0;
  t = C;
  h = db(j | 0, h | 0, 1) | 0;
  h = lb(h & -2 | 0, C & 1 | 0, H | 0, 0) | 0;
  h = ab(o | 0, t | 0, h | 0, C | 0) | 0;
  t = C;
  s = h ^ s;
  b = t ^ b;
  o = cb(s | 0, b | 0, 24) | 0;
  j = C;
  b = db(s | 0, b | 0, 40) | 0;
  b = b | o;
  j = C | j;
  s = ab(b | 0, j | 0, G | 0, l | 0) | 0;
  z = C;
  l = db(G | 0, l | 0, 1) | 0;
  l = lb(o | 0, 0, l & -2 | 0, C & 1 | 0) | 0;
  l = ab(s | 0, z | 0, l | 0, C | 0) | 0;
  z = C;
  s = y;
  c[s >> 2] = l;
  c[s + 4 >> 2] = z;
  H = l ^ H;
  D = z ^ D;
  z = cb(H | 0, D | 0, 16) | 0;
  l = C;
  D = db(H | 0, D | 0, 48) | 0;
  D = D | z;
  l = C | l;
  H = ab(D | 0, l | 0, h | 0, t | 0) | 0;
  s = C;
  t = db(h | 0, t | 0, 1) | 0;
  t = lb(z | 0, 0, t & -2 | 0, C & 1 | 0) | 0;
  t = ab(H | 0, s | 0, t | 0, C | 0) | 0;
  s = C;
  b = t ^ b;
  j = s ^ j;
  H = cb(b | 0, j | 0, 63) | 0;
  z = C;
  j = db(b | 0, j | 0, 1) | 0;
  b = v;
  c[b >> 2] = j | H;
  c[b + 4 >> 2] = C | z;
  b = k;
  z = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  H = n;
  j = c[H >> 2] | 0;
  H = c[H + 4 >> 2] | 0;
  h = ab(j | 0, H | 0, z | 0, b | 0) | 0;
  o = C;
  b = db(z | 0, b | 0, 1) | 0;
  b = lb(b & -2 | 0, C & 1 | 0, j | 0, 0) | 0;
  b = ab(h | 0, o | 0, b | 0, C | 0) | 0;
  o = C;
  D = b ^ D;
  l = o ^ l;
  h = ab(l | 0, D | 0, p | 0, x | 0) | 0;
  z = C;
  x = db(p | 0, x | 0, 1) | 0;
  x = lb(x & -2 | 0, C & 1 | 0, l | 0, 0) | 0;
  x = ab(h | 0, z | 0, x | 0, C | 0) | 0;
  z = C;
  j = x ^ j;
  H = z ^ H;
  h = cb(j | 0, H | 0, 24) | 0;
  p = C;
  H = db(j | 0, H | 0, 40) | 0;
  H = H | h;
  p = C | p;
  j = ab(H | 0, p | 0, b | 0, o | 0) | 0;
  G = C;
  o = db(b | 0, o | 0, 1) | 0;
  o = lb(h | 0, 0, o & -2 | 0, C & 1 | 0) | 0;
  o = ab(j | 0, G | 0, o | 0, C | 0) | 0;
  G = C;
  c[k >> 2] = o;
  c[k + 4 >> 2] = G;
  l = o ^ l;
  D = G ^ D;
  G = cb(l | 0, D | 0, 16) | 0;
  o = C;
  D = db(l | 0, D | 0, 48) | 0;
  D = D | G;
  o = C | o;
  c[m >> 2] = D;
  c[m + 4 >> 2] = o;
  o = ab(D | 0, o | 0, x | 0, z | 0) | 0;
  D = C;
  z = db(x | 0, z | 0, 1) | 0;
  z = lb(G | 0, 0, z & -2 | 0, C & 1 | 0) | 0;
  z = ab(o | 0, D | 0, z | 0, C | 0) | 0;
  D = C;
  c[w >> 2] = z;
  c[w + 4 >> 2] = D;
  H = z ^ H;
  p = D ^ p;
  D = cb(H | 0, p | 0, 63) | 0;
  z = C;
  p = db(H | 0, p | 0, 1) | 0;
  c[n >> 2] = p | D;
  c[n + 4 >> 2] = C | z;
  n = q;
  z = c[n >> 2] | 0;
  n = c[n + 4 >> 2] | 0;
  D = r;
  p = c[D >> 2] | 0;
  D = c[D + 4 >> 2] | 0;
  H = ab(p | 0, D | 0, z | 0, n | 0) | 0;
  w = C;
  n = db(z | 0, n | 0, 1) | 0;
  n = lb(n & -2 | 0, C & 1 | 0, p | 0, 0) | 0;
  n = ab(H | 0, w | 0, n | 0, C | 0) | 0;
  w = C;
  H = I;
  z = n ^ c[H >> 2];
  H = w ^ c[H + 4 >> 2];
  o = ab(H | 0, z | 0, t | 0, s | 0) | 0;
  G = C;
  s = db(t | 0, s | 0, 1) | 0;
  s = lb(s & -2 | 0, C & 1 | 0, H | 0, 0) | 0;
  s = ab(o | 0, G | 0, s | 0, C | 0) | 0;
  G = C;
  p = s ^ p;
  D = G ^ D;
  o = cb(p | 0, D | 0, 24) | 0;
  t = C;
  D = db(p | 0, D | 0, 40) | 0;
  D = D | o;
  t = C | t;
  p = ab(D | 0, t | 0, n | 0, w | 0) | 0;
  x = C;
  w = db(n | 0, w | 0, 1) | 0;
  w = lb(o | 0, 0, w & -2 | 0, C & 1 | 0) | 0;
  w = ab(p | 0, x | 0, w | 0, C | 0) | 0;
  x = C;
  c[q >> 2] = w;
  c[q + 4 >> 2] = x;
  H = w ^ H;
  z = x ^ z;
  x = cb(H | 0, z | 0, 16) | 0;
  w = C;
  z = db(H | 0, z | 0, 48) | 0;
  z = z | x;
  w = C | w;
  c[I >> 2] = z;
  c[I + 4 >> 2] = w;
  w = ab(z | 0, w | 0, s | 0, G | 0) | 0;
  z = C;
  G = db(s | 0, G | 0, 1) | 0;
  G = lb(x | 0, 0, G & -2 | 0, C & 1 | 0) | 0;
  G = ab(w | 0, z | 0, G | 0, C | 0) | 0;
  z = C;
  c[B >> 2] = G;
  c[B + 4 >> 2] = z;
  D = G ^ D;
  t = z ^ t;
  z = cb(D | 0, t | 0, 63) | 0;
  G = C;
  t = db(D | 0, t | 0, 1) | 0;
  c[r >> 2] = t | z;
  c[r + 4 >> 2] = C | G;
  r = u;
  G = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  z = v;
  t = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  D = ab(t | 0, z | 0, G | 0, r | 0) | 0;
  B = C;
  r = db(G | 0, r | 0, 1) | 0;
  r = lb(r & -2 | 0, C & 1 | 0, t | 0, 0) | 0;
  r = ab(D | 0, B | 0, r | 0, C | 0) | 0;
  B = C;
  D = J;
  G = r ^ c[D >> 2];
  D = B ^ c[D + 4 >> 2];
  w = E;
  x = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  s = ab(D | 0, G | 0, x | 0, w | 0) | 0;
  I = C;
  w = db(x | 0, w | 0, 1) | 0;
  w = lb(w & -2 | 0, C & 1 | 0, D | 0, 0) | 0;
  w = ab(s | 0, I | 0, w | 0, C | 0) | 0;
  I = C;
  t = w ^ t;
  z = I ^ z;
  s = cb(t | 0, z | 0, 24) | 0;
  x = C;
  z = db(t | 0, z | 0, 40) | 0;
  z = z | s;
  x = C | x;
  t = ab(z | 0, x | 0, r | 0, B | 0) | 0;
  H = C;
  B = db(r | 0, B | 0, 1) | 0;
  B = lb(s | 0, 0, B & -2 | 0, C & 1 | 0) | 0;
  B = ab(t | 0, H | 0, B | 0, C | 0) | 0;
  H = C;
  c[u >> 2] = B;
  c[u + 4 >> 2] = H;
  D = B ^ D;
  G = H ^ G;
  H = cb(D | 0, G | 0, 16) | 0;
  B = C;
  G = db(D | 0, G | 0, 48) | 0;
  G = G | H;
  B = C | B;
  c[J >> 2] = G;
  c[J + 4 >> 2] = B;
  B = ab(G | 0, B | 0, w | 0, I | 0) | 0;
  G = C;
  I = db(w | 0, I | 0, 1) | 0;
  I = lb(H | 0, 0, I & -2 | 0, C & 1 | 0) | 0;
  I = ab(B | 0, G | 0, I | 0, C | 0) | 0;
  G = C;
  c[E >> 2] = I;
  c[E + 4 >> 2] = G;
  z = I ^ z;
  x = G ^ x;
  G = cb(z | 0, x | 0, 63) | 0;
  I = C;
  x = db(z | 0, x | 0, 1) | 0;
  c[v >> 2] = x | G;
  c[v + 4 >> 2] = C | I;
  v = y;
  I = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  G = K;
  x = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  z = ab(x | 0, G | 0, I | 0, v | 0) | 0;
  E = C;
  v = db(I | 0, v | 0, 1) | 0;
  v = lb(v & -2 | 0, C & 1 | 0, x | 0, 0) | 0;
  v = ab(z | 0, E | 0, v | 0, C | 0) | 0;
  E = C;
  z = A;
  I = v ^ c[z >> 2];
  z = E ^ c[z + 4 >> 2];
  B = F;
  H = c[B >> 2] | 0;
  B = c[B + 4 >> 2] | 0;
  w = ab(z | 0, I | 0, H | 0, B | 0) | 0;
  J = C;
  B = db(H | 0, B | 0, 1) | 0;
  B = lb(B & -2 | 0, C & 1 | 0, z | 0, 0) | 0;
  B = ab(w | 0, J | 0, B | 0, C | 0) | 0;
  J = C;
  x = B ^ x;
  G = J ^ G;
  w = cb(x | 0, G | 0, 24) | 0;
  H = C;
  G = db(x | 0, G | 0, 40) | 0;
  G = G | w;
  H = C | H;
  x = ab(G | 0, H | 0, v | 0, E | 0) | 0;
  D = C;
  E = db(v | 0, E | 0, 1) | 0;
  E = lb(w | 0, 0, E & -2 | 0, C & 1 | 0) | 0;
  E = ab(x | 0, D | 0, E | 0, C | 0) | 0;
  D = C;
  c[y >> 2] = E;
  c[y + 4 >> 2] = D;
  z = E ^ z;
  I = D ^ I;
  D = cb(z | 0, I | 0, 16) | 0;
  E = C;
  I = db(z | 0, I | 0, 48) | 0;
  I = I | D;
  E = C | E;
  c[A >> 2] = I;
  c[A + 4 >> 2] = E;
  E = ab(I | 0, E | 0, B | 0, J | 0) | 0;
  I = C;
  J = db(B | 0, J | 0, 1) | 0;
  J = lb(D | 0, 0, J & -2 | 0, C & 1 | 0) | 0;
  J = ab(E | 0, I | 0, J | 0, C | 0) | 0;
  I = C;
  c[F >> 2] = J;
  c[F + 4 >> 2] = I;
  G = J ^ G;
  H = I ^ H;
  I = cb(G | 0, H | 0, 63) | 0;
  J = C;
  H = db(G | 0, H | 0, 1) | 0;
  c[K >> 2] = H | I;
  c[K + 4 >> 2] = C | J;
  a = a + 1 | 0;
 } while ((a | 0) != 8);
 Ca(d, f);
 Da(d, e);
 i = g;
 return;
}

function ua(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0;
 ba = i;
 i = i + 256 | 0;
 M = ba + 128 | 0;
 aa = ba;
 f = M;
 e = f + 128 | 0;
 do {
  a[f >> 0] = a[d >> 0] | 0;
  f = f + 1 | 0;
  d = d + 1 | 0;
 } while ((f | 0) < (e | 0));
 f = aa;
 d = b;
 e = f + 64 | 0;
 do {
  c[f >> 2] = c[d >> 2];
  f = f + 4 | 0;
  d = d + 4 | 0;
 } while ((f | 0) < (e | 0));
 N = aa + 64 | 0;
 S = N;
 c[S >> 2] = -205731576;
 c[S + 4 >> 2] = 1779033703;
 S = aa + 72 | 0;
 O = S;
 c[O >> 2] = -2067093701;
 c[O + 4 >> 2] = -1150833019;
 O = aa + 80 | 0;
 P = O;
 c[P >> 2] = -23791573;
 c[P + 4 >> 2] = 1013904242;
 P = aa + 88 | 0;
 w = P;
 c[w >> 2] = 1595750129;
 c[w + 4 >> 2] = -1521486534;
 w = b + 64 | 0;
 t = c[w >> 2] ^ -1377402159;
 w = c[w + 4 >> 2] ^ 1359893119;
 Q = aa + 96 | 0;
 F = Q;
 c[F >> 2] = t;
 c[F + 4 >> 2] = w;
 F = b + 72 | 0;
 G = c[F >> 2] ^ 725511199;
 F = c[F + 4 >> 2] ^ -1694144372;
 R = aa + 104 | 0;
 s = R;
 c[s >> 2] = G;
 c[s + 4 >> 2] = F;
 s = b + 80 | 0;
 u = c[s >> 2] ^ -79577749;
 s = c[s + 4 >> 2] ^ 528734635;
 T = aa + 112 | 0;
 f = T;
 c[f >> 2] = u;
 c[f + 4 >> 2] = s;
 f = b + 88 | 0;
 g = c[f >> 2] ^ 327033209;
 f = c[f + 4 >> 2] ^ 1541459225;
 U = aa + 120 | 0;
 V = U;
 c[V >> 2] = g;
 c[V + 4 >> 2] = f;
 V = aa + 32 | 0;
 W = aa + 8 | 0;
 X = aa + 40 | 0;
 Y = aa + 16 | 0;
 Z = aa + 48 | 0;
 _ = aa + 24 | 0;
 $ = aa + 56 | 0;
 n = aa;
 o = V;
 K = W;
 H = X;
 y = Y;
 v = Z;
 m = _;
 h = $;
 k = c[o >> 2] | 0;
 o = c[o + 4 >> 2] | 0;
 j = c[n >> 2] | 0;
 n = c[n + 4 >> 2] | 0;
 z = -205731576;
 D = 1779033703;
 I = c[H >> 2] | 0;
 H = c[H + 4 >> 2] | 0;
 J = c[K >> 2] | 0;
 K = c[K + 4 >> 2] | 0;
 E = -2067093701;
 B = -1150833019;
 x = c[v >> 2] | 0;
 v = c[v + 4 >> 2] | 0;
 A = c[y >> 2] | 0;
 y = c[y + 4 >> 2] | 0;
 r = -23791573;
 q = 1013904242;
 l = c[h >> 2] | 0;
 h = c[h + 4 >> 2] | 0;
 p = c[m >> 2] | 0;
 m = c[m + 4 >> 2] | 0;
 e = 1595750129;
 d = -1521486534;
 L = 0;
 do {
  n = ab(k | 0, o | 0, j | 0, n | 0) | 0;
  j = M + (c[1088 + (L << 6) >> 2] << 3) | 0;
  j = ab(n | 0, C | 0, c[j >> 2] | 0, c[j + 4 >> 2] | 0) | 0;
  n = C;
  ca = t ^ j;
  da = w ^ n;
  D = ab(da | 0, ca | 0, z | 0, D | 0) | 0;
  z = C;
  ga = k ^ D;
  ha = o ^ z;
  ia = cb(ga | 0, ha | 0, 24) | 0;
  ja = C;
  ha = db(ga | 0, ha | 0, 40) | 0;
  ia = ha | ia;
  ja = C | ja;
  n = ab(ia | 0, ja | 0, j | 0, n | 0) | 0;
  j = M + (c[1088 + (L << 6) + 4 >> 2] << 3) | 0;
  j = ab(n | 0, C | 0, c[j >> 2] | 0, c[j + 4 >> 2] | 0) | 0;
  n = C;
  da = da ^ j;
  ca = ca ^ n;
  ha = cb(da | 0, ca | 0, 16) | 0;
  ga = C;
  ca = db(da | 0, ca | 0, 48) | 0;
  ha = ca | ha;
  ga = C | ga;
  z = ab(ha | 0, ga | 0, D | 0, z | 0) | 0;
  D = C;
  ia = ia ^ z;
  ja = ja ^ D;
  ca = cb(ia | 0, ja | 0, 63) | 0;
  da = C;
  ja = db(ia | 0, ja | 0, 1) | 0;
  ca = ja | ca;
  da = C | da;
  K = ab(I | 0, H | 0, J | 0, K | 0) | 0;
  J = M + (c[1088 + (L << 6) + 8 >> 2] << 3) | 0;
  J = ab(K | 0, C | 0, c[J >> 2] | 0, c[J + 4 >> 2] | 0) | 0;
  K = C;
  ja = G ^ J;
  ia = F ^ K;
  B = ab(ia | 0, ja | 0, E | 0, B | 0) | 0;
  E = C;
  ea = I ^ B;
  fa = H ^ E;
  t = cb(ea | 0, fa | 0, 24) | 0;
  w = C;
  fa = db(ea | 0, fa | 0, 40) | 0;
  t = fa | t;
  w = C | w;
  K = ab(t | 0, w | 0, J | 0, K | 0) | 0;
  J = M + (c[1088 + (L << 6) + 12 >> 2] << 3) | 0;
  J = ab(K | 0, C | 0, c[J >> 2] | 0, c[J + 4 >> 2] | 0) | 0;
  K = C;
  ia = ia ^ J;
  ja = ja ^ K;
  fa = cb(ia | 0, ja | 0, 16) | 0;
  ea = C;
  ja = db(ia | 0, ja | 0, 48) | 0;
  fa = ja | fa;
  ea = C | ea;
  E = ab(fa | 0, ea | 0, B | 0, E | 0) | 0;
  B = C;
  t = t ^ E;
  w = w ^ B;
  ja = cb(t | 0, w | 0, 63) | 0;
  ia = C;
  w = db(t | 0, w | 0, 1) | 0;
  ja = w | ja;
  ia = C | ia;
  y = ab(x | 0, v | 0, A | 0, y | 0) | 0;
  A = M + (c[1088 + (L << 6) + 16 >> 2] << 3) | 0;
  A = ab(y | 0, C | 0, c[A >> 2] | 0, c[A + 4 >> 2] | 0) | 0;
  y = C;
  w = u ^ A;
  t = s ^ y;
  q = ab(t | 0, w | 0, r | 0, q | 0) | 0;
  r = C;
  o = x ^ q;
  k = v ^ r;
  G = cb(o | 0, k | 0, 24) | 0;
  F = C;
  k = db(o | 0, k | 0, 40) | 0;
  G = k | G;
  F = C | F;
  y = ab(G | 0, F | 0, A | 0, y | 0) | 0;
  A = M + (c[1088 + (L << 6) + 20 >> 2] << 3) | 0;
  A = ab(y | 0, C | 0, c[A >> 2] | 0, c[A + 4 >> 2] | 0) | 0;
  y = C;
  t = t ^ A;
  w = w ^ y;
  k = cb(t | 0, w | 0, 16) | 0;
  o = C;
  w = db(t | 0, w | 0, 48) | 0;
  k = w | k;
  o = C | o;
  r = ab(k | 0, o | 0, q | 0, r | 0) | 0;
  q = C;
  G = G ^ r;
  F = F ^ q;
  w = cb(G | 0, F | 0, 63) | 0;
  t = C;
  F = db(G | 0, F | 0, 1) | 0;
  w = F | w;
  t = C | t;
  m = ab(l | 0, h | 0, p | 0, m | 0) | 0;
  p = M + (c[1088 + (L << 6) + 24 >> 2] << 3) | 0;
  p = ab(m | 0, C | 0, c[p >> 2] | 0, c[p + 4 >> 2] | 0) | 0;
  m = C;
  F = g ^ p;
  G = f ^ m;
  d = ab(G | 0, F | 0, e | 0, d | 0) | 0;
  e = C;
  H = l ^ d;
  I = h ^ e;
  g = cb(H | 0, I | 0, 24) | 0;
  f = C;
  I = db(H | 0, I | 0, 40) | 0;
  g = I | g;
  f = C | f;
  m = ab(g | 0, f | 0, p | 0, m | 0) | 0;
  p = M + (c[1088 + (L << 6) + 28 >> 2] << 3) | 0;
  p = ab(m | 0, C | 0, c[p >> 2] | 0, c[p + 4 >> 2] | 0) | 0;
  m = C;
  G = G ^ p;
  F = F ^ m;
  I = cb(G | 0, F | 0, 16) | 0;
  H = C;
  F = db(G | 0, F | 0, 48) | 0;
  I = F | I;
  H = C | H;
  e = ab(I | 0, H | 0, d | 0, e | 0) | 0;
  d = C;
  g = g ^ e;
  f = f ^ d;
  F = cb(g | 0, f | 0, 63) | 0;
  G = C;
  f = db(g | 0, f | 0, 1) | 0;
  F = f | F;
  G = C | G;
  n = ab(ja | 0, ia | 0, j | 0, n | 0) | 0;
  j = M + (c[1088 + (L << 6) + 32 >> 2] << 3) | 0;
  j = ab(n | 0, C | 0, c[j >> 2] | 0, c[j + 4 >> 2] | 0) | 0;
  n = C;
  I = I ^ j;
  H = H ^ n;
  q = ab(H | 0, I | 0, r | 0, q | 0) | 0;
  r = C;
  f = ja ^ q;
  g = ia ^ r;
  v = cb(f | 0, g | 0, 24) | 0;
  x = C;
  g = db(f | 0, g | 0, 40) | 0;
  v = g | v;
  x = C | x;
  n = ab(v | 0, x | 0, j | 0, n | 0) | 0;
  j = M + (c[1088 + (L << 6) + 36 >> 2] << 3) | 0;
  j = ab(n | 0, C | 0, c[j >> 2] | 0, c[j + 4 >> 2] | 0) | 0;
  n = C;
  H = H ^ j;
  I = I ^ n;
  g = cb(H | 0, I | 0, 16) | 0;
  f = C;
  I = db(H | 0, I | 0, 48) | 0;
  g = I | g;
  f = C | f;
  r = ab(g | 0, f | 0, q | 0, r | 0) | 0;
  q = C;
  v = v ^ r;
  x = x ^ q;
  I = cb(v | 0, x | 0, 63) | 0;
  H = C;
  x = db(v | 0, x | 0, 1) | 0;
  I = x | I;
  H = C | H;
  K = ab(w | 0, t | 0, J | 0, K | 0) | 0;
  J = M + (c[1088 + (L << 6) + 40 >> 2] << 3) | 0;
  J = ab(K | 0, C | 0, c[J >> 2] | 0, c[J + 4 >> 2] | 0) | 0;
  K = C;
  x = ha ^ J;
  v = ga ^ K;
  d = ab(v | 0, x | 0, e | 0, d | 0) | 0;
  e = C;
  w = w ^ d;
  t = t ^ e;
  h = cb(w | 0, t | 0, 24) | 0;
  l = C;
  t = db(w | 0, t | 0, 40) | 0;
  h = t | h;
  l = C | l;
  K = ab(h | 0, l | 0, J | 0, K | 0) | 0;
  J = M + (c[1088 + (L << 6) + 44 >> 2] << 3) | 0;
  J = ab(K | 0, C | 0, c[J >> 2] | 0, c[J + 4 >> 2] | 0) | 0;
  K = C;
  v = v ^ J;
  x = x ^ K;
  t = cb(v | 0, x | 0, 16) | 0;
  w = C;
  x = db(v | 0, x | 0, 48) | 0;
  t = x | t;
  w = C | w;
  e = ab(t | 0, w | 0, d | 0, e | 0) | 0;
  d = C;
  h = h ^ e;
  l = l ^ d;
  x = cb(h | 0, l | 0, 63) | 0;
  v = C;
  l = db(h | 0, l | 0, 1) | 0;
  x = l | x;
  v = C | v;
  y = ab(F | 0, G | 0, A | 0, y | 0) | 0;
  A = M + (c[1088 + (L << 6) + 48 >> 2] << 3) | 0;
  A = ab(y | 0, C | 0, c[A >> 2] | 0, c[A + 4 >> 2] | 0) | 0;
  y = C;
  l = fa ^ A;
  h = ea ^ y;
  D = ab(h | 0, l | 0, z | 0, D | 0) | 0;
  z = C;
  F = F ^ D;
  G = G ^ z;
  u = cb(F | 0, G | 0, 24) | 0;
  s = C;
  G = db(F | 0, G | 0, 40) | 0;
  u = G | u;
  s = C | s;
  y = ab(u | 0, s | 0, A | 0, y | 0) | 0;
  A = M + (c[1088 + (L << 6) + 52 >> 2] << 3) | 0;
  A = ab(y | 0, C | 0, c[A >> 2] | 0, c[A + 4 >> 2] | 0) | 0;
  y = C;
  h = h ^ A;
  l = l ^ y;
  G = cb(h | 0, l | 0, 16) | 0;
  F = C;
  l = db(h | 0, l | 0, 48) | 0;
  G = l | G;
  F = C | F;
  z = ab(G | 0, F | 0, D | 0, z | 0) | 0;
  D = C;
  u = u ^ z;
  s = s ^ D;
  l = cb(u | 0, s | 0, 63) | 0;
  h = C;
  s = db(u | 0, s | 0, 1) | 0;
  l = s | l;
  h = C | h;
  m = ab(ca | 0, da | 0, p | 0, m | 0) | 0;
  p = M + (c[1088 + (L << 6) + 56 >> 2] << 3) | 0;
  p = ab(m | 0, C | 0, c[p >> 2] | 0, c[p + 4 >> 2] | 0) | 0;
  m = C;
  k = k ^ p;
  o = o ^ m;
  B = ab(o | 0, k | 0, E | 0, B | 0) | 0;
  E = C;
  s = ca ^ B;
  u = da ^ E;
  da = cb(s | 0, u | 0, 24) | 0;
  ca = C;
  u = db(s | 0, u | 0, 40) | 0;
  da = u | da;
  ca = C | ca;
  m = ab(da | 0, ca | 0, p | 0, m | 0) | 0;
  p = M + (c[1088 + (L << 6) + 60 >> 2] << 3) | 0;
  p = ab(m | 0, C | 0, c[p >> 2] | 0, c[p + 4 >> 2] | 0) | 0;
  m = C;
  o = o ^ p;
  k = k ^ m;
  u = cb(o | 0, k | 0, 16) | 0;
  s = C;
  k = db(o | 0, k | 0, 48) | 0;
  u = k | u;
  s = C | s;
  E = ab(u | 0, s | 0, B | 0, E | 0) | 0;
  B = C;
  da = da ^ E;
  ca = ca ^ B;
  k = cb(da | 0, ca | 0, 63) | 0;
  o = C;
  ca = db(da | 0, ca | 0, 1) | 0;
  k = ca | k;
  o = C | o;
  L = L + 1 | 0;
 } while ((L | 0) != 12);
 ha = aa;
 c[ha >> 2] = j;
 c[ha + 4 >> 2] = n;
 ha = V;
 c[ha >> 2] = k;
 c[ha + 4 >> 2] = o;
 ha = Q;
 c[ha >> 2] = t;
 c[ha + 4 >> 2] = w;
 ha = N;
 c[ha >> 2] = z;
 c[ha + 4 >> 2] = D;
 ha = W;
 c[ha >> 2] = J;
 c[ha + 4 >> 2] = K;
 ha = X;
 c[ha >> 2] = I;
 c[ha + 4 >> 2] = H;
 ha = R;
 c[ha >> 2] = G;
 c[ha + 4 >> 2] = F;
 ha = S;
 c[ha >> 2] = E;
 c[ha + 4 >> 2] = B;
 ha = Y;
 c[ha >> 2] = A;
 c[ha + 4 >> 2] = y;
 ha = Z;
 c[ha >> 2] = x;
 c[ha + 4 >> 2] = v;
 ha = T;
 c[ha >> 2] = u;
 c[ha + 4 >> 2] = s;
 ha = O;
 c[ha >> 2] = r;
 c[ha + 4 >> 2] = q;
 ha = _;
 c[ha >> 2] = p;
 c[ha + 4 >> 2] = m;
 ha = $;
 c[ha >> 2] = l;
 c[ha + 4 >> 2] = h;
 ha = U;
 c[ha >> 2] = g;
 c[ha + 4 >> 2] = f;
 ha = P;
 c[ha >> 2] = e;
 c[ha + 4 >> 2] = d;
 ha = b;
 ia = aa + 64 | 0;
 ja = n ^ c[ha + 4 >> 2] ^ c[ia + 4 >> 2];
 d = b;
 c[d >> 2] = j ^ c[ha >> 2] ^ c[ia >> 2];
 c[d + 4 >> 2] = ja;
 d = 1;
 do {
  fa = aa + (d << 3) | 0;
  ja = b + (d << 3) | 0;
  ga = ja;
  ha = aa + (d + 8 << 3) | 0;
  ia = c[fa + 4 >> 2] ^ c[ga + 4 >> 2] ^ c[ha + 4 >> 2];
  c[ja >> 2] = c[fa >> 2] ^ c[ga >> 2] ^ c[ha >> 2];
  c[ja + 4 >> 2] = ia;
  d = d + 1 | 0;
 } while ((d | 0) != 8);
 i = ba;
 return;
}

function Ya(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[725] | 0;
 if (d >>> 0 < h >>> 0) ga();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) ga();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) ga();
  if ((k | 0) == (c[726] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[723] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 2924 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) ga();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) ga();
   }
   if ((d | 0) == (b | 0)) {
    c[721] = c[721] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) ga();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else ga();
   }
   c[b + 12 >> 2] = d;
   c[f >> 2] = b;
   q = k;
   g = j;
   break;
  }
  f = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   b = k + 16 | 0;
   d = b + 4 | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = c[b >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    }
   } else b = d;
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
    }
   }
   if (b >>> 0 < h >>> 0) ga(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) ga();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) ga();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else ga();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 3188 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[722] = c[722] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[725] | 0) >>> 0) ga();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[725] | 0;
   if (i >>> 0 < d >>> 0) ga();
   c[i + 24 >> 2] = f;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) ga(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[725] | 0) >>> 0) ga(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    g = j;
    break;
   }
  }
 } else {
  q = d;
  g = e;
 } while (0);
 if (q >>> 0 >= m >>> 0) ga();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) ga();
 if (!(b & 2)) {
  if ((m | 0) == (c[727] | 0)) {
   p = (c[724] | 0) + g | 0;
   c[724] = p;
   c[727] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[726] | 0)) return;
   c[726] = 0;
   c[723] = 0;
   return;
  }
  if ((m | 0) == (c[726] | 0)) {
   p = (c[723] | 0) + g | 0;
   c[723] = p;
   c[726] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 2924 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[725] | 0) >>> 0) ga();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) ga();
   }
   if ((d | 0) == (b | 0)) {
    c[721] = c[721] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[725] | 0) >>> 0) ga();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else ga();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   f = c[m + 24 >> 2] | 0;
   a = c[m + 12 >> 2] | 0;
   do if ((a | 0) == (m | 0)) {
    b = m + 16 | 0;
    d = b + 4 | 0;
    a = c[d >> 2] | 0;
    if (!a) {
     a = c[b >> 2] | 0;
     if (!a) {
      n = 0;
      break;
     }
    } else b = d;
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[725] | 0) >>> 0) ga();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) ga();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else ga();
   } while (0);
   if (f | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 3188 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[722] = c[722] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[725] | 0) >>> 0) ga();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[725] | 0;
    if (n >>> 0 < d >>> 0) ga();
    c[n + 24 >> 2] = f;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) ga(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[725] | 0) >>> 0) ga(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[726] | 0)) {
   c[723] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 2924 + (a << 1 << 2) | 0;
  b = c[721] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[721] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
    o = a;
    p = b;
   }
  }
  c[o >> 2] = q;
  c[p + 12 >> 2] = q;
  c[q + 8 >> 2] = p;
  c[q + 12 >> 2] = d;
  return;
 }
 a = g >>> 8;
 if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  d = (p + 245760 | 0) >>> 16 & 2;
  d = 14 - (n | o | d) + (p << d >>> 15) | 0;
  d = g >>> (d + 7 | 0) & 1 | d << 1;
 }
 e = 3188 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[722] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[722] = a | b;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
  a = c[e >> 2] | 0;
  while (1) {
   if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
    d = a;
    e = 130;
    break;
   }
   b = a + 16 + (f >>> 31 << 2) | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    e = 127;
    break;
   } else {
    f = f << 1;
    a = d;
   }
  }
  if ((e | 0) == 127) if (b >>> 0 < (c[725] | 0) >>> 0) ga(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[725] | 0;
   if (b >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else ga();
  }
 } while (0);
 q = (c[729] | 0) + -1 | 0;
 c[729] = q;
 if (!q) a = 3340; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[729] = -1;
 return;
}

function Na(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 32 | 0;
 j = k;
 switch (f | 0) {
 case 1:
  {
   if (d >>> 0 < 12) f = -31; else {
    f = b;
    g = 2853;
    h = f + 12 | 0;
    do {
     a[f >> 0] = a[g >> 0] | 0;
     f = f + 1 | 0;
     g = g + 1 | 0;
    } while ((f | 0) < (h | 0));
    g = 6;
   }
   break;
  }
 case 0:
  {
   if (d >>> 0 < 12) f = -31; else {
    f = b;
    g = 2865;
    h = f + 12 | 0;
    do {
     a[f >> 0] = a[g >> 0] | 0;
     f = f + 1 | 0;
     g = g + 1 | 0;
    } while ((f | 0) < (h | 0));
    g = 6;
   }
   break;
  }
 default:
  f = -31;
 }
 do if ((g | 0) == 6) {
  b = b + 11 | 0;
  d = d + -11 | 0;
  if (Ja(e) | 0) {
   f = Ja(e) | 0;
   break;
  }
  f = c[e + 56 >> 2] | 0;
  if ((f | 0) < 0) {
   a[j >> 0] = 45;
   f = 0 - f | 0;
   g = j + 1 | 0;
  } else g = j;
  h = f;
  while (1) {
   g = g + 1 | 0;
   if ((h + 9 | 0) >>> 0 > 18) h = (h | 0) / 10 | 0; else break;
  }
  a[g >> 0] = 0;
  while (1) {
   g = g + -1 | 0;
   a[g >> 0] = a[2842 + ((f | 0) % 10 | 0) >> 0] | 0;
   if ((f + 9 | 0) >>> 0 <= 18) break; else f = (f | 0) / 10 | 0;
  }
  f = Wa(j) | 0;
  if (d >>> 0 <= f >>> 0) {
   f = -31;
   break;
  }
  fb(b | 0, j | 0, f + 1 | 0) | 0;
  g = b + f | 0;
  f = d - f | 0;
  if (f >>> 0 < 4) f = -31; else {
   a[g >> 0] = 36;
   a[g + 1 >> 0] = 109;
   a[g + 2 >> 0] = 61;
   a[g + 3 >> 0] = 0;
   b = g + 3 | 0;
   d = f + -3 | 0;
   f = c[e + 44 >> 2] | 0;
   if ((f | 0) < 0) {
    a[j >> 0] = 45;
    f = 0 - f | 0;
    g = j + 1 | 0;
   } else g = j;
   h = f;
   while (1) {
    g = g + 1 | 0;
    if ((h + 9 | 0) >>> 0 > 18) h = (h | 0) / 10 | 0; else break;
   }
   a[g >> 0] = 0;
   while (1) {
    g = g + -1 | 0;
    a[g >> 0] = a[2842 + ((f | 0) % 10 | 0) >> 0] | 0;
    if ((f + 9 | 0) >>> 0 <= 18) break; else f = (f | 0) / 10 | 0;
   }
   f = Wa(j) | 0;
   if (d >>> 0 <= f >>> 0) {
    f = -31;
    break;
   }
   fb(b | 0, j | 0, f + 1 | 0) | 0;
   g = b + f | 0;
   f = d - f | 0;
   if (f >>> 0 < 4) f = -31; else {
    a[g >> 0] = 44;
    a[g + 1 >> 0] = 116;
    a[g + 2 >> 0] = 61;
    a[g + 3 >> 0] = 0;
    b = g + 3 | 0;
    d = f + -3 | 0;
    f = c[e + 40 >> 2] | 0;
    if ((f | 0) < 0) {
     a[j >> 0] = 45;
     f = 0 - f | 0;
     g = j + 1 | 0;
    } else g = j;
    h = f;
    while (1) {
     g = g + 1 | 0;
     if ((h + 9 | 0) >>> 0 > 18) h = (h | 0) / 10 | 0; else break;
    }
    a[g >> 0] = 0;
    while (1) {
     g = g + -1 | 0;
     a[g >> 0] = a[2842 + ((f | 0) % 10 | 0) >> 0] | 0;
     if ((f + 9 | 0) >>> 0 <= 18) break; else f = (f | 0) / 10 | 0;
    }
    f = Wa(j) | 0;
    if (d >>> 0 <= f >>> 0) {
     f = -31;
     break;
    }
    fb(b | 0, j | 0, f + 1 | 0) | 0;
    g = b + f | 0;
    f = d - f | 0;
    if (f >>> 0 < 4) f = -31; else {
     a[g >> 0] = 44;
     a[g + 1 >> 0] = 112;
     a[g + 2 >> 0] = 61;
     a[g + 3 >> 0] = 0;
     b = g + 3 | 0;
     d = f + -3 | 0;
     f = c[e + 48 >> 2] | 0;
     if ((f | 0) < 0) {
      a[j >> 0] = 45;
      f = 0 - f | 0;
      g = j + 1 | 0;
     } else g = j;
     h = f;
     while (1) {
      g = g + 1 | 0;
      if ((h + 9 | 0) >>> 0 > 18) h = (h | 0) / 10 | 0; else break;
     }
     a[g >> 0] = 0;
     while (1) {
      g = g + -1 | 0;
      a[g >> 0] = a[2842 + ((f | 0) % 10 | 0) >> 0] | 0;
      if ((f + 9 | 0) >>> 0 <= 18) break; else f = (f | 0) / 10 | 0;
     }
     f = Wa(j) | 0;
     if (d >>> 0 <= f >>> 0) {
      f = -31;
      break;
     }
     fb(b | 0, j | 0, f + 1 | 0) | 0;
     g = b + f | 0;
     f = d - f | 0;
     h = e + 36 | 0;
     if (!(c[h >> 2] | 0)) h = g; else {
      if (f >>> 0 < 7) {
       f = -31;
       break;
      };
      a[g >> 0] = a[2835] | 0;
      a[g + 1 >> 0] = a[2836] | 0;
      a[g + 2 >> 0] = a[2837] | 0;
      a[g + 3 >> 0] = a[2838] | 0;
      a[g + 4 >> 0] = a[2839] | 0;
      a[g + 5 >> 0] = a[2840] | 0;
      a[g + 6 >> 0] = a[2841] | 0;
      b = g + 6 | 0;
      d = f + -6 | 0;
      f = Oa(b, d, c[e + 32 >> 2] | 0, c[h >> 2] | 0) | 0;
      g = (f | 0) == -1;
      if (g) {
       f = -31;
       break;
      } else {
       h = b + f | 0;
       f = d - (g ? 0 : f) | 0;
      }
     }
     g = e + 20 | 0;
     if (!(c[g >> 2] | 0)) f = 0; else if (f >>> 0 < 2) f = -31; else {
      a[h >> 0] = 36;
      a[h + 1 >> 0] = 0;
      d = h + 1 | 0;
      b = f + -1 | 0;
      f = Oa(d, b, c[e + 16 >> 2] | 0, c[g >> 2] | 0) | 0;
      j = (f | 0) == -1;
      g = b - (j ? 0 : f) | 0;
      f = j ? d : d + f | 0;
      if (j) f = -31; else {
       h = e + 4 | 0;
       if (!(c[h >> 2] | 0)) f = 0; else if (g >>> 0 < 2) f = -31; else {
        a[f >> 0] = 36;
        a[f + 1 >> 0] = 0;
        e = (Oa(f + 1 | 0, g + -1 | 0, c[e >> 2] | 0, c[h >> 2] | 0) | 0) != -1;
        i = k;
        return (e ? 0 : -31) | 0;
       }
      }
     }
    }
   }
  }
 } while (0);
 i = k;
 return f | 0;
}

function ob(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (!h) {
  if (g) {
   if (f | 0) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (k >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((hb(i | 0) | 0) >>> 0);
   return (C = n, f) | 0;
  }
  g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (C = n, f) | 0;
 } else {
  if (!g) {
   g = (aa(i | 0) | 0) - (aa(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (aa(h | 0) | 0) + 33 - (aa(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f | 0) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (C = o, p) | 0;
  } else {
   p = hb(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (C = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = ab(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   $a(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = $a(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = C;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f | 0) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (C = o, p) | 0;
}

function Ta(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 if (b | 0) {
  o = (c[b + 32 >> 2] | 0) == 1;
  q = b + 16 | 0;
  r = Xa(c[q >> 2] << 3) | 0;
  if (r | 0) {
   if (o) Sa(b, d, r);
   j = d + 8 | 0;
   g = a[j >> 0] | 0;
   e = (c[d >> 2] | 0) == 0 & g << 24 >> 24 == 0 ? 2 : 0;
   k = d + 4 | 0;
   l = b + 20 | 0;
   f = c[l >> 2] | 0;
   p = _(f, c[k >> 2] | 0) | 0;
   s = c[q >> 2] | 0;
   g = p + e + (_(g & 255, s) | 0) | 0;
   a : do if (e >>> 0 < s >>> 0) {
    m = b + 24 | 0;
    n = d + 12 | 0;
    p = b + 4 | 0;
    h = f;
    s = g;
    f = (((g >>> 0) % (f >>> 0) | 0 | 0) == 0 ? f + -1 | 0 : -1) + g | 0;
    while (1) {
     i = ((s >>> 0) % (h >>> 0) | 0 | 0) == 1 ? s + -1 | 0 : f;
     if (o) f = r + (e << 3) | 0; else f = (c[b >> 2] | 0) + (i << 10) | 0;
     t = f;
     f = c[t >> 2] | 0;
     t = nb(c[t + 4 >> 2] | 0, 0, c[m >> 2] | 0, 0) | 0;
     h = (c[d >> 2] | 0) == 0 & (a[j >> 0] | 0) == 0;
     g = c[k >> 2] | 0;
     t = h ? g : t;
     h = h ? 0 : C;
     c[n >> 2] = e;
     g = Ha(b, d, f, (t | 0) == (g | 0) & (h | 0) == 0 & 1) | 0;
     f = c[b >> 2] | 0;
     h = lb(c[l >> 2] | 0, 0, t | 0, h | 0) | 0;
     g = f + (h << 10) + (g << 10) | 0;
     h = f + (s << 10) | 0;
     do if ((c[p >> 2] | 0) == 16) Qa(f + (i << 10) | 0, g, h); else {
      f = f + (i << 10) | 0;
      if (!(c[d >> 2] | 0)) {
       Qa(f, g, h);
       break;
      } else {
       Ra(f, g, h);
       break;
      }
     } while (0);
     e = e + 1 | 0;
     if (e >>> 0 >= (c[q >> 2] | 0) >>> 0) break a;
     h = c[l >> 2] | 0;
     s = s + 1 | 0;
     f = i + 1 | 0;
    }
   } while (0);
   Ya(r);
  }
 }
 return;
}

function xa(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 384 | 0;
 j = n;
 h = n + 240 | 0;
 m = n + 312 | 0;
 l = n + 248 | 0;
 c[h >> 2] = d;
 if (d >>> 0 < 65) {
  g = ra(j, d) | 0;
  if ((g | 0) >= 0) {
   g = ta(j, h, 4) | 0;
   if ((g | 0) >= 0) {
    g = ta(j, e, f) | 0;
    if ((g | 0) >= 0) g = va(j, b, d) | 0;
   }
  }
 } else {
  g = ra(j, 64) | 0;
  a : do if ((g | 0) >= 0) {
   g = ta(j, h, 4) | 0;
   if ((g | 0) >= 0) {
    g = ta(j, e, f) | 0;
    if ((g | 0) >= 0) {
     g = va(j, m, 64) | 0;
     if ((g | 0) >= 0) {
      f = b;
      j = m;
      k = f + 32 | 0;
      do {
       a[f >> 0] = a[j >> 0] | 0;
       f = f + 1 | 0;
       j = j + 1 | 0;
      } while ((f | 0) < (k | 0));
      h = d + -32 | 0;
      e = b + 32 | 0;
      g = h >>> 0 > 64;
      f = l;
      j = m;
      k = f + 64 | 0;
      do {
       a[f >> 0] = a[j >> 0] | 0;
       f = f + 1 | 0;
       j = j + 1 | 0;
      } while ((f | 0) < (k | 0));
      if (g) do {
       g = wa(m, 64, l, 64, 0, 0) | 0;
       if ((g | 0) < 0) break a;
       f = e;
       j = m;
       k = f + 32 | 0;
       do {
        a[f >> 0] = a[j >> 0] | 0;
        f = f + 1 | 0;
        j = j + 1 | 0;
       } while ((f | 0) < (k | 0));
       h = h + -32 | 0;
       e = e + 32 | 0;
       g = h >>> 0 > 64;
       f = l;
       j = m;
       k = f + 64 | 0;
       do {
        a[f >> 0] = a[j >> 0] | 0;
        f = f + 1 | 0;
        j = j + 1 | 0;
       } while ((f | 0) < (k | 0));
      } while (g);
      g = wa(m, h, l, 64, 0, 0) | 0;
      if ((g | 0) >= 0) fb(e | 0, m | 0, h | 0) | 0;
     }
    }
   }
  } while (0);
 }
 i = n;
 return g | 0;
}

function ta(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 if (!d) d = 0; else if ((a | 0) == 0 | (b | 0) == 0) d = -1; else {
  l = a + 80 | 0;
  if ((c[l >> 2] | 0) == 0 & (c[l + 4 >> 2] | 0) == 0) {
   l = a + 224 | 0;
   e = c[l >> 2] | 0;
   g = e + d | 0;
   if (g >>> 0 > 128) {
    k = 128 - e | 0;
    fb(a + 96 + e | 0, b | 0, k | 0) | 0;
    i = a + 64 | 0;
    m = i;
    f = c[m >> 2] | 0;
    m = c[m + 4 >> 2] | 0;
    h = ab(f | 0, m | 0, 128, 0) | 0;
    j = i;
    c[j >> 2] = h;
    c[j + 4 >> 2] = C;
    j = a + 72 | 0;
    h = j;
    h = ab((m >>> 0 > 4294967295 | (m | 0) == -1 & f >>> 0 > 4294967167) & 1 | 0, 0, c[h >> 2] | 0, c[h + 4 >> 2] | 0) | 0;
    f = j;
    c[f >> 2] = h;
    c[f + 4 >> 2] = C;
    ua(a, a + 96 | 0);
    c[l >> 2] = 0;
    f = d - k | 0;
    d = b + k | 0;
    if (f >>> 0 > 128) {
     h = g + -257 & -128;
     k = h + 256 - e | 0;
     e = g + -256 | 0;
     while (1) {
      n = i;
      m = c[n >> 2] | 0;
      n = c[n + 4 >> 2] | 0;
      o = ab(m | 0, n | 0, 128, 0) | 0;
      g = i;
      c[g >> 2] = o;
      c[g + 4 >> 2] = C;
      g = j;
      g = ab((n >>> 0 > 4294967295 | (n | 0) == -1 & m >>> 0 > 4294967167) & 1 | 0, 0, c[g >> 2] | 0, c[g + 4 >> 2] | 0) | 0;
      m = j;
      c[m >> 2] = g;
      c[m + 4 >> 2] = C;
      ua(a, d);
      f = f + -128 | 0;
      if (f >>> 0 <= 128) break; else d = d + 128 | 0;
     }
     f = e - h | 0;
     e = c[l >> 2] | 0;
     d = b + k | 0;
    } else e = 0;
   } else {
    f = d;
    d = b;
   }
   fb(a + 96 + e | 0, d | 0, f | 0) | 0;
   c[l >> 2] = (c[l >> 2] | 0) + f;
   d = 0;
  } else d = -1;
 }
 return d | 0;
}

function va(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = i;
 i = i + 64 | 0;
 k = l;
 g = k;
 h = g + 64 | 0;
 do {
  a[g >> 0] = 0;
  g = g + 1 | 0;
 } while ((g | 0) < (h | 0));
 if ((b | 0) == 0 | (d | 0) == 0) e = -1; else {
  j = b + 228 | 0;
  if ((c[j >> 2] | 0) >>> 0 > e >>> 0) e = -1; else {
   f = b + 80 | 0;
   h = f;
   if ((c[h >> 2] | 0) == 0 & (c[h + 4 >> 2] | 0) == 0) {
    e = c[b + 224 >> 2] | 0;
    h = b + 64 | 0;
    m = h;
    m = ab(c[m >> 2] | 0, c[m + 4 >> 2] | 0, e | 0, 0) | 0;
    n = C;
    c[h >> 2] = m;
    c[h + 4 >> 2] = n;
    h = b + 72 | 0;
    g = h;
    g = ab((n >>> 0 < 0 | (n | 0) == 0 & m >>> 0 < e >>> 0) & 1 | 0, 0, c[g >> 2] | 0, c[g + 4 >> 2] | 0) | 0;
    c[h >> 2] = g;
    c[h + 4 >> 2] = C;
    if (a[b + 232 >> 0] | 0) {
     n = b + 88 | 0;
     c[n >> 2] = -1;
     c[n + 4 >> 2] = -1;
    }
    g = f;
    c[g >> 2] = -1;
    c[g + 4 >> 2] = -1;
    bb(b + 96 + e | 0, 0, 128 - e | 0) | 0;
    e = b + 96 | 0;
    ua(b, e);
    g = k;
    f = b;
    h = g + 64 | 0;
    do {
     a[g >> 0] = a[f >> 0] | 0;
     g = g + 1 | 0;
     f = f + 1 | 0;
    } while ((g | 0) < (h | 0));
    fb(d | 0, k | 0, c[j >> 2] | 0) | 0;
    g = k;
    h = g + 64 | 0;
    do {
     a[g >> 0] = 0;
     g = g + 1 | 0;
    } while ((g | 0) < (h | 0));
    g = e;
    h = g + 128 | 0;
    do {
     a[g >> 0] = 0;
     g = g + 1 | 0;
    } while ((g | 0) < (h | 0));
    g = b;
    h = g + 64 | 0;
    do {
     a[g >> 0] = 0;
     g = g + 1 | 0;
    } while ((g | 0) < (h | 0));
    e = 0;
   } else e = -1;
  }
 }
 i = l;
 return e | 0;
}

function Aa(a) {
 a = a | 0;
 do switch (a | 0) {
 case 0:
  {
   a = 2832;
   break;
  }
 case -1:
  {
   a = 2809;
   break;
  }
 case -2:
  {
   a = 2789;
   break;
  }
 case -3:
  {
   a = 2770;
   break;
  }
 case -4:
  {
   a = 2748;
   break;
  }
 case -5:
  {
   a = 2727;
   break;
  }
 case -6:
  {
   a = 2709;
   break;
  }
 case -7:
  {
   a = 2692;
   break;
  }
 case -8:
  {
   a = 2663;
   break;
  }
 case -9:
  {
   a = 2635;
   break;
  }
 case -10:
  {
   a = 2615;
   break;
  }
 case -11:
  {
   a = 2596;
   break;
  }
 case -12:
  {
   a = 2573;
   break;
  }
 case -13:
  {
   a = 2550;
   break;
  }
 case -14:
  {
   a = 2525;
   break;
  }
 case -15:
  {
   a = 2500;
   break;
  }
 case -16:
  {
   a = 2486;
   break;
  }
 case -17:
  {
   a = 2471;
   break;
  }
 case -18:
  {
   a = 2416;
   break;
  }
 case -19:
  {
   a = 2369;
   break;
  }
 case -20:
  {
   a = 2318;
   break;
  }
 case -21:
  {
   a = 2262;
   break;
  }
 case -22:
  {
   a = 2238;
   break;
  }
 case -23:
  {
   a = 2205;
   break;
  }
 case -24:
  {
   a = 2168;
   break;
  }
 case -25:
  {
   a = 2137;
   break;
  }
 case -26:
  {
   a = 2102;
   break;
  }
 case -27:
  {
   a = 2078;
   break;
  }
 case -28:
  {
   a = 2059;
   break;
  }
 case -29:
  {
   a = 2042;
   break;
  }
 case -30:
  {
   a = 2024;
   break;
  }
 case -31:
  {
   a = 2008;
   break;
  }
 case -32:
  {
   a = 1992;
   break;
  }
 case -33:
  {
   a = 1974;
   break;
  }
 case -34:
  {
   a = 1921;
   break;
  }
 case -35:
  {
   a = 1875;
   break;
  }
 default:
  a = 1856;
 } while (0);
 return a | 0;
}

function Ia(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 32 | 0;
 r = s + 16 | 0;
 q = s;
 a : do if (!b) d = -33; else {
  j = b + 24 | 0;
  d = c[j >> 2] | 0;
  if (!d) d = -33; else {
   n = Za(d, 4) | 0;
   if (!n) d = -22; else {
    o = b + 8 | 0;
    b : do if (c[o >> 2] | 0) {
     p = b + 28 | 0;
     k = q + 4 | 0;
     l = q + 8 | 0;
     m = q + 12 | 0;
     e = 0;
     c : while (1) {
      h = 0;
      do {
       if (!d) d = 0; else {
        f = h & 255;
        g = 0;
        do {
         d = c[p >> 2] | 0;
         if (g >>> 0 >= d >>> 0) if (Ua(c[n + (g - d << 2) >> 2] | 0) | 0) break c;
         c[q >> 2] = e;
         c[k >> 2] = g;
         a[l >> 0] = f;
         c[m >> 2] = 0;
         c[r >> 2] = c[q >> 2];
         c[r + 4 >> 2] = c[q + 4 >> 2];
         c[r + 8 >> 2] = c[q + 8 >> 2];
         c[r + 12 >> 2] = c[q + 12 >> 2];
         Ta(b, r);
         g = g + 1 | 0;
         d = c[j >> 2] | 0;
        } while (g >>> 0 < d >>> 0);
       }
       f = d - (c[p >> 2] | 0) | 0;
       if (f >>> 0 < d >>> 0) do {
        if (Ua(c[n + (f << 2) >> 2] | 0) | 0) {
         d = -33;
         break a;
        }
        f = f + 1 | 0;
        d = c[j >> 2] | 0;
       } while (f >>> 0 < d >>> 0);
       h = h + 1 | 0;
      } while (h >>> 0 < 4);
      e = e + 1 | 0;
      if (e >>> 0 >= (c[o >> 2] | 0) >>> 0) break b;
     }
     Ya(n);
     d = -33;
     break a;
    } while (0);
    Ya(n);
    d = 0;
   }
  }
 } while (0);
 i = s;
 return d | 0;
}

function Ka(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 p = i;
 i = i + 1024 | 0;
 n = p;
 j = e + 24 | 0;
 if (c[j >> 2] | 0) {
  k = b + 64 | 0;
  l = b + 68 | 0;
  m = e + 20 | 0;
  o = 0;
  do {
   a[k >> 0] = 0;
   a[k + 1 >> 0] = 0;
   a[k + 2 >> 0] = 0;
   a[k + 3 >> 0] = 0;
   a[l >> 0] = o;
   a[l + 1 >> 0] = o >> 8;
   a[l + 2 >> 0] = o >> 16;
   a[l + 3 >> 0] = o >> 24;
   xa(n, 1024, b, 72) | 0;
   f = _(c[m >> 2] | 0, o) | 0;
   g = c[e >> 2] | 0;
   h = 0;
   do {
    r = n + (h << 3) | 0;
    s = r;
    r = r + 4 | 0;
    r = d[r >> 0] | d[r + 1 >> 0] << 8 | d[r + 2 >> 0] << 16 | d[r + 3 >> 0] << 24;
    q = g + (f << 10) + (h << 3) | 0;
    c[q >> 2] = d[s >> 0] | d[s + 1 >> 0] << 8 | d[s + 2 >> 0] << 16 | d[s + 3 >> 0] << 24;
    c[q + 4 >> 2] = r;
    h = h + 1 | 0;
   } while ((h | 0) != 128);
   a[k >> 0] = 1;
   a[k + 1 >> 0] = 0;
   a[k + 2 >> 0] = 0;
   a[k + 3 >> 0] = 0;
   xa(n, 1024, b, 72) | 0;
   f = (_(c[m >> 2] | 0, o) | 0) + 1 | 0;
   g = c[e >> 2] | 0;
   h = 0;
   do {
    r = n + (h << 3) | 0;
    q = r;
    r = r + 4 | 0;
    r = d[r >> 0] | d[r + 1 >> 0] << 8 | d[r + 2 >> 0] << 16 | d[r + 3 >> 0] << 24;
    s = g + (f << 10) + (h << 3) | 0;
    c[s >> 2] = d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24;
    c[s + 4 >> 2] = r;
    h = h + 1 | 0;
   } while ((h | 0) != 128);
   o = o + 1 | 0;
  } while (o >>> 0 < (c[j >> 2] | 0) >>> 0);
 }
 Fa(n, 1024);
 i = p;
 return;
}

function sa(b, e, f, g) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 n = i;
 i = i + 192 | 0;
 l = n + 128 | 0;
 m = n;
 do if (!b) h = -1; else {
  if ((e + -1 | 0) >>> 0 > 63) {
   bb(b | 0, 0, 240) | 0;
   h = b + 80 | 0;
   c[h >> 2] = -1;
   c[h + 4 >> 2] = -1;
   h = -1;
   break;
  }
  if ((f | 0) == 0 | (g + -1 | 0) >>> 0 > 63) {
   bb(b | 0, 0, 240) | 0;
   h = b + 80 | 0;
   c[h >> 2] = -1;
   c[h + 4 >> 2] = -1;
   h = -1;
   break;
  }
  a[l >> 0] = e;
  a[l + 1 >> 0] = g;
  a[l + 2 >> 0] = 1;
  a[l + 3 >> 0] = 1;
  h = b + 64 | 0;
  j = l + 4 | 0;
  k = j + 60 | 0;
  do {
   a[j >> 0] = 0;
   j = j + 1 | 0;
  } while ((j | 0) < (k | 0));
  bb(h | 0, 0, 176) | 0;
  j = b;
  h = 1024;
  k = j + 64 | 0;
  do {
   c[j >> 2] = c[h >> 2];
   j = j + 4 | 0;
   h = h + 4 | 0;
  } while ((j | 0) < (k | 0));
  h = 0;
  do {
   j = l + (h << 3) | 0;
   o = j;
   j = j + 4 | 0;
   k = b + (h << 3) | 0;
   p = k;
   j = c[p + 4 >> 2] ^ (d[j >> 0] | d[j + 1 >> 0] << 8 | d[j + 2 >> 0] << 16 | d[j + 3 >> 0] << 24);
   c[k >> 2] = c[p >> 2] ^ (d[o >> 0] | d[o + 1 >> 0] << 8 | d[o + 2 >> 0] << 16 | d[o + 3 >> 0] << 24);
   c[k + 4 >> 2] = j;
   h = h + 1 | 0;
  } while ((h | 0) != 8);
  c[b + 228 >> 2] = e & 255;
  bb(m + g | 0, 0, (g >>> 0 > 127 ? 0 : 128 - g | 0) | 0) | 0;
  fb(m | 0, f | 0, g | 0) | 0;
  ta(b, m, 128) | 0;
  h = 0;
 } while (0);
 i = n;
 return h | 0;
}

function La(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 g = j + 240 | 0;
 if (!((a | 0) == 0 | (b | 0) == 0)) {
  ra(h, 64) | 0;
  c[g >> 2] = c[b + 48 >> 2];
  ta(h, g, 4) | 0;
  c[g >> 2] = c[b + 4 >> 2];
  ta(h, g, 4) | 0;
  c[g >> 2] = c[b + 44 >> 2];
  ta(h, g, 4) | 0;
  c[g >> 2] = c[b + 40 >> 2];
  ta(h, g, 4) | 0;
  c[g >> 2] = c[b + 56 >> 2];
  ta(h, g, 4) | 0;
  c[g >> 2] = d;
  ta(h, g, 4) | 0;
  d = b + 12 | 0;
  c[g >> 2] = c[d >> 2];
  ta(h, g, 4) | 0;
  e = b + 8 | 0;
  f = c[e >> 2] | 0;
  if (f | 0) {
   ta(h, f, c[d >> 2] | 0) | 0;
   if (c[b + 68 >> 2] & 1 | 0) {
    Fa(c[e >> 2] | 0, c[d >> 2] | 0);
    c[d >> 2] = 0;
   }
  }
  d = b + 20 | 0;
  c[g >> 2] = c[d >> 2];
  ta(h, g, 4) | 0;
  e = c[b + 16 >> 2] | 0;
  if (e | 0) ta(h, e, c[d >> 2] | 0) | 0;
  d = b + 28 | 0;
  c[g >> 2] = c[d >> 2];
  ta(h, g, 4) | 0;
  e = b + 24 | 0;
  f = c[e >> 2] | 0;
  if (f | 0) {
   ta(h, f, c[d >> 2] | 0) | 0;
   if (c[b + 68 >> 2] & 2 | 0) {
    Fa(c[e >> 2] | 0, c[d >> 2] | 0);
    c[d >> 2] = 0;
   }
  }
  e = b + 36 | 0;
  c[g >> 2] = c[e >> 2];
  ta(h, g, 4) | 0;
  d = c[b + 32 >> 2] | 0;
  if (d | 0) ta(h, d, c[e >> 2] | 0) | 0;
  va(h, a, 64) | 0;
 }
 i = j;
 return;
}

function Sa(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 n = i;
 i = i + 4096 | 0;
 m = n + 3072 | 0;
 k = n + 2048 | 0;
 j = n + 1024 | 0;
 l = n;
 Ba(m, 0);
 Ba(k, 0);
 if ((a | 0) != 0 & (b | 0) != 0) {
  g = k;
  c[g >> 2] = c[b >> 2];
  c[g + 4 >> 2] = 0;
  g = k + 8 | 0;
  c[g >> 2] = c[b + 4 >> 2];
  c[g + 4 >> 2] = 0;
  g = k + 16 | 0;
  c[g >> 2] = d[b + 8 >> 0];
  c[g + 4 >> 2] = 0;
  g = k + 24 | 0;
  c[g >> 2] = c[a + 12 >> 2];
  c[g + 4 >> 2] = 0;
  g = k + 32 | 0;
  c[g >> 2] = c[a + 8 >> 2];
  c[g + 4 >> 2] = 0;
  g = k + 40 | 0;
  c[g >> 2] = c[a + 32 >> 2];
  c[g + 4 >> 2] = 0;
  g = a + 16 | 0;
  a = c[g >> 2] | 0;
  if (a | 0) {
   h = k + 48 | 0;
   f = 0;
   do {
    b = f & 127;
    if (!b) {
     o = h;
     o = ab(c[o >> 2] | 0, c[o + 4 >> 2] | 0, 1, 0) | 0;
     a = h;
     c[a >> 2] = o;
     c[a + 4 >> 2] = C;
     Ba(l, 0);
     Ba(j, 0);
     Ra(m, k, l);
     Ra(m, l, j);
     a = c[g >> 2] | 0;
    }
    p = j + (b << 3) | 0;
    b = c[p + 4 >> 2] | 0;
    o = e + (f << 3) | 0;
    c[o >> 2] = c[p >> 2];
    c[o + 4 >> 2] = b;
    f = f + 1 | 0;
   } while (f >>> 0 < a >>> 0);
  }
 }
 i = n;
 return;
}

function Ja(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (!a) b = -25; else if (!(c[a >> 2] | 0)) b = -1; else if ((c[a + 4 >> 2] | 0) >>> 0 < 4) b = -2; else {
  if (!(c[a + 8 >> 2] | 0)) if (c[a + 12 >> 2] | 0) {
   b = -18;
   break;
  }
  b = c[a + 20 >> 2] | 0;
  if (!(c[a + 16 >> 2] | 0)) {
   if (b | 0) {
    b = -19;
    break;
   }
  } else if (b >>> 0 < 8) {
   b = -6;
   break;
  }
  if (!(c[a + 24 >> 2] | 0)) if (c[a + 28 >> 2] | 0) {
   b = -20;
   break;
  }
  if (!(c[a + 32 >> 2] | 0)) if (c[a + 36 >> 2] | 0) {
   b = -21;
   break;
  }
  b = c[a + 44 >> 2] | 0;
  if (b >>> 0 < 8) b = -14; else if (b >>> 0 > 2097152) b = -15; else {
   d = c[a + 48 >> 2] | 0;
   if (b >>> 0 < d << 3 >>> 0) b = -14; else if (!(c[a + 40 >> 2] | 0)) b = -12; else if (!d) b = -16; else if (d >>> 0 > 16777215) b = -17; else {
    b = c[a + 52 >> 2] | 0;
    if (!b) b = -28; else if (b >>> 0 > 16777215) b = -29; else {
     b = (c[a + 64 >> 2] | 0) == 0;
     if (!(c[a + 60 >> 2] | 0)) {
      if (!b) {
       b = -24;
       break;
      }
     } else if (b) {
      b = -23;
      break;
     }
     b = 0;
    }
   }
  }
 } while (0);
 return b | 0;
}

function ra(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 64 | 0;
 j = k;
 do if (!b) f = -1; else {
  if ((e + -1 | 0) >>> 0 > 63) {
   bb(b | 0, 0, 240) | 0;
   f = b + 80 | 0;
   c[f >> 2] = -1;
   c[f + 4 >> 2] = -1;
   f = -1;
   break;
  }
  a[j >> 0] = e;
  a[j + 1 >> 0] = 0;
  a[j + 2 >> 0] = 1;
  a[j + 3 >> 0] = 1;
  f = b + 64 | 0;
  g = j + 4 | 0;
  h = g + 60 | 0;
  do {
   a[g >> 0] = 0;
   g = g + 1 | 0;
  } while ((g | 0) < (h | 0));
  bb(f | 0, 0, 176) | 0;
  g = b;
  f = 1024;
  h = g + 64 | 0;
  do {
   c[g >> 2] = c[f >> 2];
   g = g + 4 | 0;
   f = f + 4 | 0;
  } while ((g | 0) < (h | 0));
  f = 0;
  do {
   g = j + (f << 3) | 0;
   l = g;
   g = g + 4 | 0;
   h = b + (f << 3) | 0;
   m = h;
   g = c[m + 4 >> 2] ^ (d[g >> 0] | d[g + 1 >> 0] << 8 | d[g + 2 >> 0] << 16 | d[g + 3 >> 0] << 24);
   c[h >> 2] = c[m >> 2] ^ (d[l >> 0] | d[l + 1 >> 0] << 8 | d[l + 2 >> 0] << 16 | d[l + 3 >> 0] << 24);
   c[h + 4 >> 2] = g;
   f = f + 1 | 0;
  } while ((f | 0) != 8);
  c[b + 228 >> 2] = e & 255;
  f = 0;
 } while (0);
 i = k;
 return f | 0;
}

function za(a, b, d, e, f, g, h, j, k, l, m, n, o) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 k = k | 0;
 l = l | 0;
 m = m | 0;
 n = n | 0;
 o = o | 0;
 var p = 0, q = 0, r = 0;
 r = i;
 i = i + 80 | 0;
 q = r;
 do if (k >>> 0 < 4) b = -2; else {
  p = Xa(k) | 0;
  if (!p) b = -22; else {
   c[q >> 2] = p;
   c[q + 4 >> 2] = k;
   c[q + 8 >> 2] = e;
   c[q + 12 >> 2] = f;
   c[q + 16 >> 2] = g;
   c[q + 20 >> 2] = h;
   h = q + 24 | 0;
   c[h >> 2] = 0;
   c[h + 4 >> 2] = 0;
   c[h + 8 >> 2] = 0;
   c[h + 12 >> 2] = 0;
   c[q + 40 >> 2] = a;
   c[q + 44 >> 2] = b;
   c[q + 48 >> 2] = d;
   c[q + 52 >> 2] = d;
   c[q + 60 >> 2] = 0;
   c[q + 64 >> 2] = 0;
   c[q + 68 >> 2] = 4;
   c[q + 56 >> 2] = o;
   b = ya(q, n) | 0;
   if (b | 0) {
    Fa(p, k);
    Ya(p);
    break;
   }
   if (j | 0) fb(j | 0, p | 0, k | 0) | 0;
   if ((l | 0) != 0 & (m | 0) != 0) if (Na(l, m, q, n) | 0) {
    Fa(p, k);
    Fa(l, m);
    Ya(p);
    b = -31;
    break;
   }
   Fa(p, k);
   Ya(p);
   b = 0;
  }
 } while (0);
 i = r;
 return b | 0;
}

function Ha(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 i = (c[d >> 2] | 0) == 0;
 do if (i) {
  g = a[d + 8 >> 0] | 0;
  if (!(g << 24 >> 24)) {
   g = (c[d + 12 >> 2] | 0) + -1 | 0;
   break;
  }
  g = _(c[b + 16 >> 2] | 0, g & 255) | 0;
  h = c[d + 12 >> 2] | 0;
  if (!f) {
   g = (((h | 0) == 0) << 31 >> 31) + g | 0;
   break;
  } else {
   g = h + -1 + g | 0;
   break;
  }
 } else {
  g = (c[b + 20 >> 2] | 0) - (c[b + 16 >> 2] | 0) | 0;
  h = c[d + 12 >> 2] | 0;
  if (!f) {
   g = (((h | 0) == 0) << 31 >> 31) + g | 0;
   break;
  } else {
   g = h + -1 + g | 0;
   break;
  }
 } while (0);
 lb(e | 0, 0, e | 0, 0) | 0;
 lb(g | 0, 0, C | 0, 0) | 0;
 f = $a(g + -1 | 0, 0, C | 0, 0) | 0;
 e = C;
 if (i) {
  g = 0;
  h = 0;
 } else {
  g = a[d + 8 >> 0] | 0;
  if (g << 24 >> 24 == 3) {
   g = 0;
   h = 0;
  } else {
   g = _(c[b + 16 >> 2] | 0, (g & 255) + 1 | 0) | 0;
   h = 0;
  }
 }
 d = ab(f | 0, e | 0, g | 0, h | 0) | 0;
 b = nb(d | 0, C | 0, c[b + 20 >> 2] | 0, 0) | 0;
 return b | 0;
}

function Ga(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 n = i;
 i = i + 2048 | 0;
 j = n;
 k = n + 1024 | 0;
 if ((a | 0) != 0 & (b | 0) != 0) {
  f = c[b >> 2] | 0;
  g = c[b + 20 >> 2] | 0;
  fb(j | 0, f + (g << 10) + -1024 | 0, 1024) | 0;
  h = c[b + 24 >> 2] | 0;
  if (h >>> 0 > 1) {
   d = g + -1 | 0;
   m = 1;
   do {
    e = d + (_(g, m) | 0) | 0;
    l = 0;
    do {
     q = f + (e << 10) + (l << 3) | 0;
     o = j + (l << 3) | 0;
     r = o;
     p = c[r + 4 >> 2] ^ c[q + 4 >> 2];
     c[o >> 2] = c[r >> 2] ^ c[q >> 2];
     c[o + 4 >> 2] = p;
     l = l + 1 | 0;
    } while ((l | 0) != 128);
    m = m + 1 | 0;
   } while (m >>> 0 < h >>> 0);
  }
  fb(k | 0, j | 0, 1024) | 0;
  xa(c[a >> 2] | 0, c[a + 4 >> 2] | 0, k, 1024) | 0;
  Fa(j, 1024);
  Fa(k, 1024);
  d = c[b >> 2] | 0;
  if (d | 0 ? (c[a + 68 >> 2] & 1 | 0) != 0 : 0) {
   Fa(d, c[b + 12 >> 2] << 10);
   d = c[b >> 2] | 0;
  }
  Ya(d);
 }
 i = n;
 return;
}

function Oa(b, c, e, f) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 g = ((f >>> 0) / 3 | 0) << 2;
 switch ((f >>> 0) % 3 | 0 | 0) {
 case 2:
  {
   g = g | 1;
   h = 3;
   break;
  }
 case 1:
  {
   h = 3;
   break;
  }
 default:
  {}
 }
 if ((h | 0) == 3) g = g + 2 | 0;
 if (g >>> 0 < c >>> 0) {
  if (f) {
   i = f;
   h = 0;
   c = 0;
   do {
    i = i + -1 | 0;
    h = d[e >> 0] | 0 | h << 8;
    e = e + 1 | 0;
    c = c + 8 | 0;
    if (c >>> 0 > 5) while (1) {
     c = c + -6 | 0;
     f = b + 1 | 0;
     a[b >> 0] = Pa(h >>> c & 63) | 0;
     if (c >>> 0 > 5) b = f; else {
      b = f;
      break;
     }
    }
   } while ((i | 0) != 0);
   if (c) {
    a[b >> 0] = Pa(h << 6 - c & 63) | 0;
    b = b + 1 | 0;
   }
  }
  a[b >> 0] = 0;
 } else g = -1;
 return g | 0;
}

function ya(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 f = i;
 i = i + 48 | 0;
 e = f;
 d = Ja(a) | 0;
 if (!d) if (b >>> 0 > 1) d = -26; else {
  g = c[a + 44 >> 2] | 0;
  d = c[a + 48 >> 2] | 0;
  j = d << 3;
  h = d << 2;
  g = ((g >>> 0 < j >>> 0 ? j : g) >>> 0) / (h >>> 0) | 0;
  h = _(g, h) | 0;
  c[e + 4 >> 2] = c[a + 56 >> 2];
  c[e >> 2] = 0;
  c[e + 8 >> 2] = c[a + 40 >> 2];
  c[e + 12 >> 2] = h;
  c[e + 16 >> 2] = g;
  c[e + 20 >> 2] = g << 2;
  c[e + 24 >> 2] = d;
  c[e + 28 >> 2] = c[a + 52 >> 2];
  c[e + 32 >> 2] = b;
  d = Ma(e, a) | 0;
  if (!d) {
   d = Ia(e) | 0;
   if (!d) {
    Ga(a, e);
    d = 0;
   }
  }
 }
 i = f;
 return d | 0;
}

function kb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 f = i;
 i = i + 16 | 0;
 j = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 l = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 k = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 a = $a(h ^ a | 0, g ^ b | 0, h | 0, g | 0) | 0;
 b = C;
 ob(a, b, $a(l ^ d | 0, k ^ e | 0, l | 0, k | 0) | 0, C, j) | 0;
 e = $a(c[j >> 2] ^ h | 0, c[j + 4 >> 2] ^ g | 0, h | 0, g | 0) | 0;
 d = C;
 i = f;
 return (C = d, e) | 0;
}

function wa(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 j = i;
 i = i + 240 | 0;
 h = j;
 do if ((c | 0) == 0 & (d | 0) != 0) g = -1; else if ((a | 0) == 0 | (b + -1 | 0) >>> 0 > 63) g = -1; else {
  g = (f | 0) != 0;
  if (f >>> 0 > 64 | (e | 0) == 0 & g) g = -1; else {
   if (g) {
    if ((sa(h, b, e, f) | 0) < 0) {
     g = -1;
     break;
    }
   } else if ((ra(h, b) | 0) < 0) {
    g = -1;
    break;
   }
   if ((ta(h, c, d) | 0) < 0) g = -1; else g = va(h, a, b) | 0;
  }
 } while (0);
 i = j;
 return g | 0;
}

function jb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 j = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 i = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 e = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = $a(j ^ a | 0, i ^ b | 0, j | 0, i | 0) | 0;
 g = C;
 a = f ^ j;
 b = e ^ i;
 return $a((ob(h, g, $a(f ^ c | 0, e ^ d | 0, f | 0, e | 0) | 0, C, 0) | 0) ^ a | 0, C ^ b | 0, a | 0, b | 0) | 0;
}

function fb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return fa(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Wa(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function bb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function ib(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = _(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + (_(e, d) | 0) | 0;
 e = b >>> 16;
 b = _(e, f) | 0;
 return (C = (a >>> 16) + (_(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function Ma(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = i;
 i = i + 80 | 0;
 e = f;
 if ((a | 0) == 0 | (b | 0) == 0) d = -25; else {
  d = Ea(a, c[a + 12 >> 2] | 0) | 0;
  if (!d) {
   La(e, b, c[a + 32 >> 2] | 0);
   Fa(e + 64 | 0, 8);
   Ka(e, a);
   Fa(e, 72);
   d = 0;
  }
 }
 i = f;
 return d | 0;
}

function Za(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (!a) d = 0; else {
  d = _(b, a) | 0;
  if ((b | a) >>> 0 > 65535) d = ((d >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? d : -1;
 }
 b = Xa(d) | 0;
 if (!b) return b | 0;
 if (!(c[b + -4 >> 2] & 3)) return b | 0;
 bb(b | 0, 0, d | 0) | 0;
 return b | 0;
}

function Da(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = 0;
 do {
  g = b + (d << 3) | 0;
  e = a + (d << 3) | 0;
  h = e;
  f = c[h + 4 >> 2] ^ c[g + 4 >> 2];
  c[e >> 2] = c[h >> 2] ^ c[g >> 2];
  c[e + 4 >> 2] = f;
  d = d + 1 | 0;
 } while ((d | 0) != 128);
 return;
}

function hb(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) >> 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) >> 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) >> 0] | 0) + 24 | 0;
}

function Pa(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = (a + 65510 | 0) >>> 8 & 255;
 b = (a + 65484 | 0) >>> 8;
 return (0 - (a ^ 62) | 0) >>> 8 & 43 ^ 43 | c & a + 65 | (0 - (a ^ 63) | 0) >>> 8 & 47 ^ 47 | b & a + 71 & (c ^ 255) | (a + 65474 | 0) >>> 8 & a + 252 & (b & 255 ^ 255) | 0;
}

function Ea(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 do if (!a) d = -22; else {
  d = b << 10;
  if (b | 0) if (((d >>> 0) / (b >>> 0) | 0 | 0) != 1024) {
   d = -22;
   break;
  }
  d = Xa(d) | 0;
  c[a >> 2] = d;
  d = (d | 0) == 0 ? -22 : 0;
 } while (0);
 return d | 0;
}

function oa(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
 a[k + 4 >> 0] = a[b + 4 >> 0];
 a[k + 5 >> 0] = a[b + 5 >> 0];
 a[k + 6 >> 0] = a[b + 6 >> 0];
 a[k + 7 >> 0] = a[b + 7 >> 0];
}

function nb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 ob(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Fa(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 f = d + 4 | 0;
 e = d;
 c[f >> 2] = a;
 c[e >> 2] = b;
 bb(c[f >> 2] | 0, 0, c[e >> 2] | 0) | 0;
 i = d;
 return;
}

function lb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = ib(e, f) | 0;
 a = C;
 return (C = (_(b, f) | 0) + (_(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function gb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}

function db(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 C = a << c - 32;
 return 0;
}

function cb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = 0;
 return b >>> c - 32 | 0;
}

function _a() {}
function $a(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function ab(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function na(b) {
 b = b | 0;
 a[k >> 0] = a[b >> 0];
 a[k + 1 >> 0] = a[b + 1 >> 0];
 a[k + 2 >> 0] = a[b + 2 >> 0];
 a[k + 3 >> 0] = a[b + 3 >> 0];
}

function mb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return ob(a, b, c, d, 0) | 0;
}

function Va() {
 var a = 0;
 if (!0) a = 2880; else a = c[(eb() | 0) + 64 >> 2] | 0;
 return a | 0;
}
function ia(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Ca(a, b) {
 a = a | 0;
 b = b | 0;
 fb(a | 0, b | 0, 1024) | 0;
 return;
}

function Ba(a, b) {
 a = a | 0;
 b = b | 0;
 bb(a | 0, b | 0, 1024) | 0;
 return;
}

function ma(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function la(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Ua(a) {
 a = a | 0;
 return ea(a | 0, 0) | 0;
}

function pa(a) {
 a = a | 0;
 C = a;
}

function ka(a) {
 a = a | 0;
 i = a;
}

function qa() {
 return C | 0;
}

function ja() {
 return i | 0;
}

function eb() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 return {
  _i64Subtract: $a,
  _free: Ya,
  _i64Add: ab,
  _pthread_self: eb,
  _memset: bb,
  _malloc: Xa,
  _memcpy: fb,
  _argon2_hash: za,
  _bitshift64Lshr: cb,
  _argon2_error_message: Aa,
  _bitshift64Shl: db,
  runPostSets: _a,
  stackAlloc: ia,
  stackSave: ja,
  stackRestore: ka,
  establishStackSpace: la,
  setThrew: ma,
  setTempRet0: pa,
  getTempRet0: qa
 };
})


;