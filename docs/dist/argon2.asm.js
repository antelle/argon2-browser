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
 var k = env.DYNAMICTOP_PTR | 0;
 var l = env.tempDoublePtr | 0;
 var m = env.ABORT | 0;
 var n = env.cttz_i8 | 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = 0;
 var s = global.NaN, t = global.Infinity;
 var u = 0, v = 0, w = 0, x = 0, y = 0.0, z = 0, A = 0, B = 0, C = 0.0;
 var D = 0;
 var E = global.Math.floor;
 var F = global.Math.abs;
 var G = global.Math.sqrt;
 var H = global.Math.pow;
 var I = global.Math.cos;
 var J = global.Math.sin;
 var K = global.Math.tan;
 var L = global.Math.acos;
 var M = global.Math.asin;
 var N = global.Math.atan;
 var O = global.Math.atan2;
 var P = global.Math.exp;
 var Q = global.Math.log;
 var R = global.Math.ceil;
 var S = global.Math.imul;
 var T = global.Math.min;
 var U = global.Math.max;
 var V = global.Math.clz32;
 var W = env.abort;
 var X = env.assert;
 var Y = env.enlargeMemory;
 var Z = env.getTotalMemory;
 var _ = env.abortOnCannotGrowMemory;
 var $ = env._llvm_cttz_i32;
 var aa = env._emscripten_memcpy_big;
 var ba = env._pthread_join;
 var ca = env.___setErrNo;
 var da = env._abort;
 var ea = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function Sa(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = o >>> 3;
  t = c[721] | 0;
  b = t >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 2924 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[721] = t & ~(1 << b); else {
    if (h >>> 0 < (c[725] | 0) >>> 0) da();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else da();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  s = c[723] | 0;
  if (o >>> 0 > s >>> 0) {
   if (b | 0) {
    j = 2 << a;
    b = b << a & (j | 0 - j);
    b = (b & 0 - b) + -1 | 0;
    j = b >>> 12 & 16;
    b = b >>> j;
    e = b >>> 5 & 8;
    b = b >>> e;
    g = b >>> 2 & 4;
    b = b >>> g;
    d = b >>> 1 & 2;
    b = b >>> d;
    a = b >>> 1 & 1;
    a = (e | j | g | d | a) + (b >>> a) | 0;
    b = 2924 + (a << 1 << 2) | 0;
    d = b + 8 | 0;
    g = c[d >> 2] | 0;
    j = g + 8 | 0;
    e = c[j >> 2] | 0;
    do if ((b | 0) == (e | 0)) {
     k = t & ~(1 << a);
     c[721] = k;
    } else {
     if (e >>> 0 < (c[725] | 0) >>> 0) da();
     f = e + 12 | 0;
     if ((c[f >> 2] | 0) == (g | 0)) {
      c[f >> 2] = b;
      c[d >> 2] = e;
      k = t;
      break;
     } else da();
    } while (0);
    h = (a << 3) - o | 0;
    c[g + 4 >> 2] = o | 3;
    e = g + o | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (s | 0) {
     f = c[726] | 0;
     a = s >>> 3;
     d = 2924 + (a << 1 << 2) | 0;
     a = 1 << a;
     if (!(k & a)) {
      c[721] = k | a;
      l = d;
      m = d + 8 | 0;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[725] | 0) >>> 0) da(); else {
       l = b;
       m = a;
      }
     }
     c[m >> 2] = f;
     c[l + 12 >> 2] = f;
     c[f + 8 >> 2] = l;
     c[f + 12 >> 2] = d;
    }
    c[723] = h;
    c[726] = e;
    C = j;
    i = D;
    return C | 0;
   }
   j = c[722] | 0;
   if (j) {
    b = (j & 0 - j) + -1 | 0;
    B = b >>> 12 & 16;
    b = b >>> B;
    A = b >>> 5 & 8;
    b = b >>> A;
    C = b >>> 2 & 4;
    b = b >>> C;
    k = b >>> 1 & 2;
    b = b >>> k;
    l = b >>> 1 & 1;
    l = c[3188 + ((A | B | C | k | l) + (b >>> l) << 2) >> 2] | 0;
    b = l;
    k = l;
    l = (c[l + 4 >> 2] & -8) - o | 0;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) break;
     }
     C = (c[a + 4 >> 2] & -8) - o | 0;
     B = C >>> 0 < l >>> 0;
     b = a;
     k = B ? a : k;
     l = B ? C : l;
    }
    f = c[725] | 0;
    if (k >>> 0 < f >>> 0) da();
    h = k + o | 0;
    if (k >>> 0 >= h >>> 0) da();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       n = 0;
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
     if (b >>> 0 < f >>> 0) da(); else {
      c[b >> 2] = 0;
      n = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) da();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) da();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      n = d;
      break;
     } else da();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 3188 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = n;
      if (!n) {
       c[722] = j & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[725] | 0) >>> 0) da();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
      if (!n) break;
     }
     b = c[725] | 0;
     if (n >>> 0 < b >>> 0) da();
     c[n + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) da(); else {
      c[n + 16 >> 2] = a;
      c[a + 24 >> 2] = n;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[725] | 0) >>> 0) da(); else {
      c[n + 20 >> 2] = a;
      c[a + 24 >> 2] = n;
      break;
     }
    } while (0);
    if (l >>> 0 < 16) {
     C = l + o | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = o | 3;
     c[h + 4 >> 2] = l | 1;
     c[h + l >> 2] = l;
     if (s | 0) {
      e = c[726] | 0;
      a = s >>> 3;
      d = 2924 + (a << 1 << 2) | 0;
      a = 1 << a;
      if (!(t & a)) {
       c[721] = t | a;
       q = d;
       r = d + 8 | 0;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[725] | 0) >>> 0) da(); else {
        q = b;
        r = a;
       }
      }
      c[r >> 2] = e;
      c[q + 12 >> 2] = e;
      c[e + 8 >> 2] = q;
      c[e + 12 >> 2] = d;
     }
     c[723] = l;
     c[726] = h;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) o = -1; else {
  a = a + 11 | 0;
  o = a & -8;
  l = c[722] | 0;
  if (l) {
   d = 0 - o | 0;
   a = a >>> 8;
   if (!a) h = 0; else if (o >>> 0 > 16777215) h = 31; else {
    r = (a + 1048320 | 0) >>> 16 & 8;
    w = a << r;
    q = (w + 520192 | 0) >>> 16 & 4;
    w = w << q;
    h = (w + 245760 | 0) >>> 16 & 2;
    h = 14 - (q | r | h) + (w << h >>> 15) | 0;
    h = o >>> (h + 7 | 0) & 1 | h << 1;
   }
   a = c[3188 + (h << 2) >> 2] | 0;
   a : do if (!a) {
    b = 0;
    e = 0;
    w = 86;
   } else {
    e = 0;
    g = a;
    f = o << ((h | 0) == 31 ? 0 : 25 - (h >>> 1) | 0);
    b = 0;
    while (1) {
     a = (c[g + 4 >> 2] & -8) - o | 0;
     if (a >>> 0 < d >>> 0) if (!a) {
      a = g;
      d = 0;
      b = g;
      w = 90;
      break a;
     } else {
      e = g;
      d = a;
     }
     a = c[g + 20 >> 2] | 0;
     g = c[g + 16 + (f >>> 31 << 2) >> 2] | 0;
     b = (a | 0) == 0 | (a | 0) == (g | 0) ? b : a;
     a = (g | 0) == 0;
     if (a) {
      w = 86;
      break;
     } else f = f << (a & 1 ^ 1);
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((b | 0) == 0 & (e | 0) == 0) {
     a = 2 << h;
     a = l & (a | 0 - a);
     if (!a) break;
     r = (a & 0 - a) + -1 | 0;
     m = r >>> 12 & 16;
     r = r >>> m;
     k = r >>> 5 & 8;
     r = r >>> k;
     n = r >>> 2 & 4;
     r = r >>> n;
     q = r >>> 1 & 2;
     r = r >>> q;
     b = r >>> 1 & 1;
     b = c[3188 + ((k | m | n | q | b) + (r >>> b) << 2) >> 2] | 0;
    }
    if (!b) {
     k = e;
     h = d;
    } else {
     a = e;
     w = 90;
    }
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    r = (c[b + 4 >> 2] & -8) - o | 0;
    e = r >>> 0 < d >>> 0;
    d = e ? r : d;
    a = e ? b : a;
    e = c[b + 16 >> 2] | 0;
    if (e | 0) {
     b = e;
     w = 90;
     continue;
    }
    b = c[b + 20 >> 2] | 0;
    if (!b) {
     k = a;
     h = d;
     break;
    } else w = 90;
   }
   if (k) if (h >>> 0 < ((c[723] | 0) - o | 0) >>> 0) {
    f = c[725] | 0;
    if (k >>> 0 < f >>> 0) da();
    j = k + o | 0;
    if (k >>> 0 >= j >>> 0) da();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       s = 0;
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
     if (b >>> 0 < f >>> 0) da(); else {
      c[b >> 2] = 0;
      s = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) da();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) da();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      s = d;
      break;
     } else da();
    } while (0);
    do if (!g) t = l; else {
     a = c[k + 28 >> 2] | 0;
     b = 3188 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = s;
      if (!s) {
       t = l & ~(1 << a);
       c[722] = t;
       break;
      }
     } else {
      if (g >>> 0 < (c[725] | 0) >>> 0) da();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = s; else c[g + 20 >> 2] = s;
      if (!s) {
       t = l;
       break;
      }
     }
     b = c[725] | 0;
     if (s >>> 0 < b >>> 0) da();
     c[s + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) da(); else {
      c[s + 16 >> 2] = a;
      c[a + 24 >> 2] = s;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (!a) t = l; else if (a >>> 0 < (c[725] | 0) >>> 0) da(); else {
      c[s + 20 >> 2] = a;
      c[a + 24 >> 2] = s;
      t = l;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     C = h + o | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = o | 3;
     c[j + 4 >> 2] = h | 1;
     c[j + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 2924 + (a << 1 << 2) | 0;
      b = c[721] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[721] = b | a;
       u = d;
       v = d + 8 | 0;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[725] | 0) >>> 0) da(); else {
        u = b;
        v = a;
       }
      }
      c[v >> 2] = j;
      c[u + 12 >> 2] = j;
      c[j + 8 >> 2] = u;
      c[j + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) a = 0; else if (h >>> 0 > 16777215) a = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      a = (C + 245760 | 0) >>> 16 & 2;
      a = 14 - (A | B | a) + (C << a >>> 15) | 0;
      a = h >>> (a + 7 | 0) & 1 | a << 1;
     }
     d = 3188 + (a << 2) | 0;
     c[j + 28 >> 2] = a;
     b = j + 16 | 0;
     c[b + 4 >> 2] = 0;
     c[b >> 2] = 0;
     b = 1 << a;
     if (!(t & b)) {
      c[722] = t | b;
      c[d >> 2] = j;
      c[j + 24 >> 2] = d;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     }
     b = h << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
     e = c[d >> 2] | 0;
     while (1) {
      if ((c[e + 4 >> 2] & -8 | 0) == (h | 0)) {
       w = 148;
       break;
      }
      d = e + 16 + (b >>> 31 << 2) | 0;
      a = c[d >> 2] | 0;
      if (!a) {
       w = 145;
       break;
      } else {
       b = b << 1;
       e = a;
      }
     }
     if ((w | 0) == 145) if (d >>> 0 < (c[725] | 0) >>> 0) da(); else {
      c[d >> 2] = j;
      c[j + 24 >> 2] = e;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[725] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = j;
       c[a >> 2] = j;
       c[j + 8 >> 2] = b;
       c[j + 12 >> 2] = e;
       c[j + 24 >> 2] = 0;
       break;
      } else da();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[723] | 0;
 if (d >>> 0 >= o >>> 0) {
  a = d - o | 0;
  b = c[726] | 0;
  if (a >>> 0 > 15) {
   C = b + o | 0;
   c[726] = C;
   c[723] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = o | 3;
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
 h = c[724] | 0;
 if (h >>> 0 > o >>> 0) {
  A = h - o | 0;
  c[724] = A;
  C = c[727] | 0;
  B = C + o | 0;
  c[727] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = o | 3;
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
  a = p & -16 ^ 1431655768;
  c[p >> 2] = a;
  c[839] = a;
  a = 4096;
 } else a = c[841] | 0;
 j = o + 48 | 0;
 k = o + 47 | 0;
 g = a + k | 0;
 e = 0 - a | 0;
 l = g & e;
 if (l >>> 0 <= o >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[831] | 0;
 if (a | 0) {
  u = c[829] | 0;
  v = u + l | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[832] & 4)) {
  b = c[727] | 0;
  c : do if (!b) w = 172; else {
   d = 3332;
   while (1) {
    a = c[d >> 2] | 0;
    if (a >>> 0 <= b >>> 0) {
     f = d + 4 | 0;
     if ((a + (c[f >> 2] | 0) | 0) >>> 0 > b >>> 0) break;
    }
    a = c[d + 8 >> 2] | 0;
    if (!a) {
     w = 172;
     break c;
    } else d = a;
   }
   a = g - h & e;
   if (a >>> 0 < 2147483647) {
    b = Xa(a | 0) | 0;
    if ((b | 0) == ((c[d >> 2] | 0) + (c[f >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      h = a;
      g = b;
      w = 190;
      break b;
     }
    } else {
     e = b;
     w = 180;
    }
   }
  } while (0);
  do if ((w | 0) == 172) {
   f = Xa(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[840] | 0;
    d = b + -1 | 0;
    a = ((d & a | 0) == 0 ? 0 : (d + a & 0 - b) - a | 0) + l | 0;
    b = c[829] | 0;
    d = a + b | 0;
    if (a >>> 0 > o >>> 0 & a >>> 0 < 2147483647) {
     e = c[831] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = Xa(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      g = f;
      w = 190;
      break b;
     } else {
      e = b;
      w = 180;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 180) {
   d = 0 - a | 0;
   do if (j >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[841] | 0;
    b = k - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((Xa(b | 0) | 0) == (-1 | 0)) {
     Xa(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    h = a;
    g = e;
    w = 190;
    break b;
   }
  } while (0);
  c[832] = c[832] | 4;
  w = 187;
 } else w = 187; while (0);
 if ((w | 0) == 187) if (l >>> 0 < 2147483647) {
  b = Xa(l | 0) | 0;
  a = Xa(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (o + 40 | 0) >>> 0) {
    h = a;
    g = b;
    w = 190;
   }
  }
 }
 if ((w | 0) == 190) {
  a = (c[829] | 0) + h | 0;
  c[829] = a;
  if (a >>> 0 > (c[830] | 0) >>> 0) c[830] = a;
  l = c[727] | 0;
  do if (!l) {
   C = c[725] | 0;
   if ((C | 0) == 0 | g >>> 0 < C >>> 0) c[725] = g;
   c[833] = g;
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
   C = g + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = g + C | 0;
   C = h + -40 - C | 0;
   c[727] = B;
   c[724] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[728] = c[843];
  } else {
   a = 3332;
   do {
    b = c[a >> 2] | 0;
    d = a + 4 | 0;
    e = c[d >> 2] | 0;
    if ((g | 0) == (b + e | 0)) {
     w = 200;
     break;
    }
    a = c[a + 8 >> 2] | 0;
   } while ((a | 0) != 0);
   if ((w | 0) == 200) if (!(c[a + 12 >> 2] & 8)) if (l >>> 0 < g >>> 0 & l >>> 0 >= b >>> 0) {
    c[d >> 2] = e + h;
    C = l + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = l + C | 0;
    C = h - C + (c[724] | 0) | 0;
    c[727] = B;
    c[724] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[728] = c[843];
    break;
   }
   a = c[725] | 0;
   if (g >>> 0 < a >>> 0) {
    c[725] = g;
    j = g;
   } else j = a;
   b = g + h | 0;
   a = 3332;
   while (1) {
    if ((c[a >> 2] | 0) == (b | 0)) {
     w = 208;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 3332;
     break;
    }
   }
   if ((w | 0) == 208) if (!(c[a + 12 >> 2] & 8)) {
    c[a >> 2] = g;
    n = a + 4 | 0;
    c[n >> 2] = (c[n >> 2] | 0) + h;
    n = g + 8 | 0;
    n = g + ((n & 7 | 0) == 0 ? 0 : 0 - n & 7) | 0;
    a = b + 8 | 0;
    a = b + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    m = n + o | 0;
    k = a - n - o | 0;
    c[n + 4 >> 2] = o | 3;
    do if ((a | 0) == (l | 0)) {
     C = (c[724] | 0) + k | 0;
     c[724] = C;
     c[727] = m;
     c[m + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[726] | 0)) {
      C = (c[723] | 0) + k | 0;
      c[723] = C;
      c[726] = m;
      c[m + 4 >> 2] = C | 1;
      c[m + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      h = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 2924 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) da();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        da();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[721] = c[721] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) da();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        da();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       g = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        e = a + 16 | 0;
        d = e + 4 | 0;
        b = c[d >> 2] | 0;
        if (!b) {
         b = c[e >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         } else d = e;
        }
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
        if (d >>> 0 < j >>> 0) da(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) da();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) da();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else da();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       d = 3188 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[722] = c[722] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[725] | 0) >>> 0) da();
        b = g + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[g + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[725] | 0;
       if (A >>> 0 < e >>> 0) da();
       c[A + 24 >> 2] = g;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) da(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[725] | 0) >>> 0) da(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + h | 0;
      f = h + k | 0;
     } else f = k;
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[m + 4 >> 2] = f | 1;
     c[m + f >> 2] = f;
     a = f >>> 3;
     if (f >>> 0 < 256) {
      d = 2924 + (a << 1 << 2) | 0;
      b = c[721] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[721] = b | a;
       B = d;
       C = d + 8 | 0;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[725] | 0) >>> 0) {
        B = b;
        C = a;
        break;
       }
       da();
      } while (0);
      c[C >> 2] = m;
      c[B + 12 >> 2] = m;
      c[m + 8 >> 2] = B;
      c[m + 12 >> 2] = d;
      break;
     }
     a = f >>> 8;
     do if (!a) a = 0; else {
      if (f >>> 0 > 16777215) {
       a = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      a = (C + 245760 | 0) >>> 16 & 2;
      a = 14 - (A | B | a) + (C << a >>> 15) | 0;
      a = f >>> (a + 7 | 0) & 1 | a << 1;
     } while (0);
     e = 3188 + (a << 2) | 0;
     c[m + 28 >> 2] = a;
     b = m + 16 | 0;
     c[b + 4 >> 2] = 0;
     c[b >> 2] = 0;
     b = c[722] | 0;
     d = 1 << a;
     if (!(b & d)) {
      c[722] = b | d;
      c[e >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     }
     b = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
     e = c[e >> 2] | 0;
     while (1) {
      if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
       w = 278;
       break;
      }
      d = e + 16 + (b >>> 31 << 2) | 0;
      a = c[d >> 2] | 0;
      if (!a) {
       w = 275;
       break;
      } else {
       b = b << 1;
       e = a;
      }
     }
     if ((w | 0) == 275) if (d >>> 0 < (c[725] | 0) >>> 0) da(); else {
      c[d >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((w | 0) == 278) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[725] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = m;
       c[a >> 2] = m;
       c[m + 8 >> 2] = b;
       c[m + 12 >> 2] = e;
       c[m + 24 >> 2] = 0;
       break;
      } else da();
     }
    } while (0);
    C = n + 8 | 0;
    i = D;
    return C | 0;
   } else b = 3332;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= l >>> 0) {
     d = a + (c[b + 4 >> 2] | 0) | 0;
     if (d >>> 0 > l >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   f = d + -47 | 0;
   b = f + 8 | 0;
   b = f + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7) | 0;
   f = l + 16 | 0;
   b = b >>> 0 < f >>> 0 ? l : b;
   a = b + 8 | 0;
   e = g + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = g + e | 0;
   e = h + -40 - e | 0;
   c[727] = C;
   c[724] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[728] = c[843];
   e = b + 4 | 0;
   c[e >> 2] = 27;
   c[a >> 2] = c[833];
   c[a + 4 >> 2] = c[834];
   c[a + 8 >> 2] = c[835];
   c[a + 12 >> 2] = c[836];
   c[833] = g;
   c[834] = h;
   c[836] = 0;
   c[835] = a;
   a = b + 24 | 0;
   do {
    a = a + 4 | 0;
    c[a >> 2] = 7;
   } while ((a + 4 | 0) >>> 0 < d >>> 0);
   if ((b | 0) != (l | 0)) {
    g = b - l | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[l + 4 >> 2] = g | 1;
    c[b >> 2] = g;
    a = g >>> 3;
    if (g >>> 0 < 256) {
     d = 2924 + (a << 1 << 2) | 0;
     b = c[721] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[721] = b | a;
      y = d;
      z = d + 8 | 0;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[725] | 0) >>> 0) da(); else {
       y = b;
       z = a;
      }
     }
     c[z >> 2] = l;
     c[y + 12 >> 2] = l;
     c[l + 8 >> 2] = y;
     c[l + 12 >> 2] = d;
     break;
    }
    a = g >>> 8;
    if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = g >>> (d + 7 | 0) & 1 | d << 1;
    }
    e = 3188 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[f >> 2] = 0;
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
    b = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    e = c[e >> 2] | 0;
    while (1) {
     if ((c[e + 4 >> 2] & -8 | 0) == (g | 0)) {
      w = 304;
      break;
     }
     d = e + 16 + (b >>> 31 << 2) | 0;
     a = c[d >> 2] | 0;
     if (!a) {
      w = 301;
      break;
     } else {
      b = b << 1;
      e = a;
     }
    }
    if ((w | 0) == 301) if (d >>> 0 < (c[725] | 0) >>> 0) da(); else {
     c[d >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((w | 0) == 304) {
     a = e + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[725] | 0;
     if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = l;
      c[a >> 2] = l;
      c[l + 8 >> 2] = b;
      c[l + 12 >> 2] = e;
      c[l + 24 >> 2] = 0;
      break;
     } else da();
    }
   }
  } while (0);
  a = c[724] | 0;
  if (a >>> 0 > o >>> 0) {
   A = a - o | 0;
   c[724] = A;
   C = c[727] | 0;
   B = C + o | 0;
   c[727] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = o | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(Qa() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function Ma(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 g = i;
 i = i + 2048 | 0;
 e = g + 1024 | 0;
 f = g;
 xa(e, b);
 ya(e, a);
 xa(f, e);
 ya(f, d);
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
  j = Ya(y | 0, A | 0, s | 0, q | 0) | 0;
  w = D;
  q = ab(s | 0, q | 0, 1) | 0;
  q = eb(q & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  q = Ya(j | 0, w | 0, q | 0, D | 0) | 0;
  w = D;
  j = e + ((p | 12) << 3) | 0;
  s = j;
  k = q ^ c[s >> 2];
  s = w ^ c[s + 4 >> 2];
  n = e + ((p | 8) << 3) | 0;
  h = n;
  E = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  m = Ya(s | 0, k | 0, E | 0, h | 0) | 0;
  K = D;
  h = ab(E | 0, h | 0, 1) | 0;
  h = eb(h & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  h = Ya(m | 0, K | 0, h | 0, D | 0) | 0;
  K = D;
  y = h ^ y;
  A = K ^ A;
  m = $a(y | 0, A | 0, 24) | 0;
  E = D;
  A = ab(y | 0, A | 0, 40) | 0;
  A = A | m;
  E = D | E;
  y = Ya(A | 0, E | 0, q | 0, w | 0) | 0;
  t = D;
  w = ab(q | 0, w | 0, 1) | 0;
  w = eb(m | 0, 0, w & -2 | 0, D & 1 | 0) | 0;
  w = Ya(y | 0, t | 0, w | 0, D | 0) | 0;
  t = D;
  y = H;
  c[y >> 2] = w;
  c[y + 4 >> 2] = t;
  s = w ^ s;
  k = t ^ k;
  t = $a(s | 0, k | 0, 16) | 0;
  w = D;
  k = ab(s | 0, k | 0, 48) | 0;
  k = k | t;
  w = D | w;
  s = j;
  c[s >> 2] = k;
  c[s + 4 >> 2] = w;
  w = Ya(k | 0, w | 0, h | 0, K | 0) | 0;
  k = D;
  K = ab(h | 0, K | 0, 1) | 0;
  K = eb(t | 0, 0, K & -2 | 0, D & 1 | 0) | 0;
  K = Ya(w | 0, k | 0, K | 0, D | 0) | 0;
  k = D;
  w = n;
  c[w >> 2] = K;
  c[w + 4 >> 2] = k;
  A = K ^ A;
  E = k ^ E;
  k = $a(A | 0, E | 0, 63) | 0;
  K = D;
  E = ab(A | 0, E | 0, 1) | 0;
  A = b;
  c[A >> 2] = E | k;
  c[A + 4 >> 2] = D | K;
  A = e + ((p | 1) << 3) | 0;
  K = A;
  k = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  E = e + ((p | 5) << 3) | 0;
  w = E;
  t = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  h = Ya(t | 0, w | 0, k | 0, K | 0) | 0;
  s = D;
  K = ab(k | 0, K | 0, 1) | 0;
  K = eb(K & -2 | 0, D & 1 | 0, t | 0, 0) | 0;
  K = Ya(h | 0, s | 0, K | 0, D | 0) | 0;
  s = D;
  h = e + ((p | 13) << 3) | 0;
  k = h;
  y = K ^ c[k >> 2];
  k = s ^ c[k + 4 >> 2];
  m = e + ((p | 9) << 3) | 0;
  q = m;
  z = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  u = Ya(k | 0, y | 0, z | 0, q | 0) | 0;
  o = D;
  q = ab(z | 0, q | 0, 1) | 0;
  q = eb(q & -2 | 0, D & 1 | 0, k | 0, 0) | 0;
  q = Ya(u | 0, o | 0, q | 0, D | 0) | 0;
  o = D;
  t = q ^ t;
  w = o ^ w;
  u = $a(t | 0, w | 0, 24) | 0;
  z = D;
  w = ab(t | 0, w | 0, 40) | 0;
  w = w | u;
  z = D | z;
  t = Ya(w | 0, z | 0, K | 0, s | 0) | 0;
  F = D;
  s = ab(K | 0, s | 0, 1) | 0;
  s = eb(u | 0, 0, s & -2 | 0, D & 1 | 0) | 0;
  s = Ya(t | 0, F | 0, s | 0, D | 0) | 0;
  F = D;
  t = A;
  c[t >> 2] = s;
  c[t + 4 >> 2] = F;
  k = s ^ k;
  y = F ^ y;
  F = $a(k | 0, y | 0, 16) | 0;
  s = D;
  y = ab(k | 0, y | 0, 48) | 0;
  y = y | F;
  s = D | s;
  k = h;
  c[k >> 2] = y;
  c[k + 4 >> 2] = s;
  s = Ya(y | 0, s | 0, q | 0, o | 0) | 0;
  y = D;
  o = ab(q | 0, o | 0, 1) | 0;
  o = eb(F | 0, 0, o & -2 | 0, D & 1 | 0) | 0;
  o = Ya(s | 0, y | 0, o | 0, D | 0) | 0;
  y = D;
  s = m;
  c[s >> 2] = o;
  c[s + 4 >> 2] = y;
  w = o ^ w;
  z = y ^ z;
  y = $a(w | 0, z | 0, 63) | 0;
  o = D;
  z = ab(w | 0, z | 0, 1) | 0;
  w = E;
  c[w >> 2] = z | y;
  c[w + 4 >> 2] = D | o;
  w = e + ((p | 2) << 3) | 0;
  o = w;
  y = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  z = e + ((p | 6) << 3) | 0;
  s = z;
  F = c[s >> 2] | 0;
  s = c[s + 4 >> 2] | 0;
  q = Ya(F | 0, s | 0, y | 0, o | 0) | 0;
  k = D;
  o = ab(y | 0, o | 0, 1) | 0;
  o = eb(o & -2 | 0, D & 1 | 0, F | 0, 0) | 0;
  o = Ya(q | 0, k | 0, o | 0, D | 0) | 0;
  k = D;
  q = e + ((p | 14) << 3) | 0;
  y = q;
  t = o ^ c[y >> 2];
  y = k ^ c[y + 4 >> 2];
  u = e + ((p | 10) << 3) | 0;
  K = u;
  v = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  G = Ya(y | 0, t | 0, v | 0, K | 0) | 0;
  B = D;
  K = ab(v | 0, K | 0, 1) | 0;
  K = eb(K & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  K = Ya(G | 0, B | 0, K | 0, D | 0) | 0;
  B = D;
  F = K ^ F;
  s = B ^ s;
  G = $a(F | 0, s | 0, 24) | 0;
  v = D;
  s = ab(F | 0, s | 0, 40) | 0;
  s = s | G;
  v = D | v;
  F = Ya(s | 0, v | 0, o | 0, k | 0) | 0;
  l = D;
  k = ab(o | 0, k | 0, 1) | 0;
  k = eb(G | 0, 0, k & -2 | 0, D & 1 | 0) | 0;
  k = Ya(F | 0, l | 0, k | 0, D | 0) | 0;
  l = D;
  F = w;
  c[F >> 2] = k;
  c[F + 4 >> 2] = l;
  y = k ^ y;
  t = l ^ t;
  l = $a(y | 0, t | 0, 16) | 0;
  k = D;
  t = ab(y | 0, t | 0, 48) | 0;
  t = t | l;
  k = D | k;
  y = q;
  c[y >> 2] = t;
  c[y + 4 >> 2] = k;
  k = Ya(t | 0, k | 0, K | 0, B | 0) | 0;
  t = D;
  B = ab(K | 0, B | 0, 1) | 0;
  B = eb(l | 0, 0, B & -2 | 0, D & 1 | 0) | 0;
  B = Ya(k | 0, t | 0, B | 0, D | 0) | 0;
  t = D;
  s = B ^ s;
  v = t ^ v;
  k = $a(s | 0, v | 0, 63) | 0;
  l = D;
  v = ab(s | 0, v | 0, 1) | 0;
  s = z;
  c[s >> 2] = v | k;
  c[s + 4 >> 2] = D | l;
  s = e + ((p | 3) << 3) | 0;
  l = s;
  k = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  v = e + ((p | 7) << 3) | 0;
  K = v;
  y = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  F = Ya(y | 0, K | 0, k | 0, l | 0) | 0;
  G = D;
  l = ab(k | 0, l | 0, 1) | 0;
  l = eb(l & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  l = Ya(F | 0, G | 0, l | 0, D | 0) | 0;
  G = D;
  F = e + ((p | 15) << 3) | 0;
  k = F;
  o = l ^ c[k >> 2];
  k = G ^ c[k + 4 >> 2];
  p = e + ((p | 11) << 3) | 0;
  J = p;
  I = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  C = Ya(k | 0, o | 0, I | 0, J | 0) | 0;
  x = D;
  J = ab(I | 0, J | 0, 1) | 0;
  J = eb(J & -2 | 0, D & 1 | 0, k | 0, 0) | 0;
  J = Ya(C | 0, x | 0, J | 0, D | 0) | 0;
  x = D;
  y = J ^ y;
  K = x ^ K;
  C = $a(y | 0, K | 0, 24) | 0;
  I = D;
  K = ab(y | 0, K | 0, 40) | 0;
  K = K | C;
  I = D | I;
  y = Ya(K | 0, I | 0, l | 0, G | 0) | 0;
  r = D;
  G = ab(l | 0, G | 0, 1) | 0;
  G = eb(C | 0, 0, G & -2 | 0, D & 1 | 0) | 0;
  G = Ya(y | 0, r | 0, G | 0, D | 0) | 0;
  r = D;
  y = s;
  c[y >> 2] = G;
  c[y + 4 >> 2] = r;
  k = G ^ k;
  o = r ^ o;
  r = $a(k | 0, o | 0, 16) | 0;
  G = D;
  o = ab(k | 0, o | 0, 48) | 0;
  o = o | r;
  G = D | G;
  k = Ya(o | 0, G | 0, J | 0, x | 0) | 0;
  y = D;
  x = ab(J | 0, x | 0, 1) | 0;
  x = eb(r | 0, 0, x & -2 | 0, D & 1 | 0) | 0;
  x = Ya(k | 0, y | 0, x | 0, D | 0) | 0;
  y = D;
  K = x ^ K;
  I = y ^ I;
  k = $a(K | 0, I | 0, 63) | 0;
  r = D;
  I = ab(K | 0, I | 0, 1) | 0;
  K = v;
  c[K >> 2] = I | k;
  c[K + 4 >> 2] = D | r;
  K = H;
  r = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  k = E;
  I = c[k >> 2] | 0;
  k = c[k + 4 >> 2] | 0;
  J = Ya(I | 0, k | 0, r | 0, K | 0) | 0;
  C = D;
  K = ab(r | 0, K | 0, 1) | 0;
  K = eb(K & -2 | 0, D & 1 | 0, I | 0, 0) | 0;
  K = Ya(J | 0, C | 0, K | 0, D | 0) | 0;
  C = D;
  o = K ^ o;
  G = C ^ G;
  J = Ya(G | 0, o | 0, B | 0, t | 0) | 0;
  r = D;
  t = ab(B | 0, t | 0, 1) | 0;
  t = eb(t & -2 | 0, D & 1 | 0, G | 0, 0) | 0;
  t = Ya(J | 0, r | 0, t | 0, D | 0) | 0;
  r = D;
  I = t ^ I;
  k = r ^ k;
  J = $a(I | 0, k | 0, 24) | 0;
  B = D;
  k = ab(I | 0, k | 0, 40) | 0;
  k = k | J;
  B = D | B;
  I = Ya(k | 0, B | 0, K | 0, C | 0) | 0;
  l = D;
  C = ab(K | 0, C | 0, 1) | 0;
  C = eb(J | 0, 0, C & -2 | 0, D & 1 | 0) | 0;
  C = Ya(I | 0, l | 0, C | 0, D | 0) | 0;
  l = D;
  c[H >> 2] = C;
  c[H + 4 >> 2] = l;
  G = C ^ G;
  o = l ^ o;
  l = $a(G | 0, o | 0, 16) | 0;
  C = D;
  o = ab(G | 0, o | 0, 48) | 0;
  o = o | l;
  C = D | C;
  c[F >> 2] = o;
  c[F + 4 >> 2] = C;
  C = Ya(o | 0, C | 0, t | 0, r | 0) | 0;
  o = D;
  r = ab(t | 0, r | 0, 1) | 0;
  r = eb(l | 0, 0, r & -2 | 0, D & 1 | 0) | 0;
  r = Ya(C | 0, o | 0, r | 0, D | 0) | 0;
  o = D;
  c[u >> 2] = r;
  c[u + 4 >> 2] = o;
  k = r ^ k;
  B = o ^ B;
  o = $a(k | 0, B | 0, 63) | 0;
  r = D;
  B = ab(k | 0, B | 0, 1) | 0;
  c[E >> 2] = B | o;
  c[E + 4 >> 2] = D | r;
  E = A;
  r = c[E >> 2] | 0;
  E = c[E + 4 >> 2] | 0;
  o = z;
  B = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  k = Ya(B | 0, o | 0, r | 0, E | 0) | 0;
  u = D;
  E = ab(r | 0, E | 0, 1) | 0;
  E = eb(E & -2 | 0, D & 1 | 0, B | 0, 0) | 0;
  E = Ya(k | 0, u | 0, E | 0, D | 0) | 0;
  u = D;
  k = j;
  r = E ^ c[k >> 2];
  k = u ^ c[k + 4 >> 2];
  C = Ya(k | 0, r | 0, x | 0, y | 0) | 0;
  l = D;
  y = ab(x | 0, y | 0, 1) | 0;
  y = eb(y & -2 | 0, D & 1 | 0, k | 0, 0) | 0;
  y = Ya(C | 0, l | 0, y | 0, D | 0) | 0;
  l = D;
  B = y ^ B;
  o = l ^ o;
  C = $a(B | 0, o | 0, 24) | 0;
  x = D;
  o = ab(B | 0, o | 0, 40) | 0;
  o = o | C;
  x = D | x;
  B = Ya(o | 0, x | 0, E | 0, u | 0) | 0;
  t = D;
  u = ab(E | 0, u | 0, 1) | 0;
  u = eb(C | 0, 0, u & -2 | 0, D & 1 | 0) | 0;
  u = Ya(B | 0, t | 0, u | 0, D | 0) | 0;
  t = D;
  c[A >> 2] = u;
  c[A + 4 >> 2] = t;
  k = u ^ k;
  r = t ^ r;
  t = $a(k | 0, r | 0, 16) | 0;
  u = D;
  r = ab(k | 0, r | 0, 48) | 0;
  r = r | t;
  u = D | u;
  c[j >> 2] = r;
  c[j + 4 >> 2] = u;
  u = Ya(r | 0, u | 0, y | 0, l | 0) | 0;
  r = D;
  l = ab(y | 0, l | 0, 1) | 0;
  l = eb(t | 0, 0, l & -2 | 0, D & 1 | 0) | 0;
  l = Ya(u | 0, r | 0, l | 0, D | 0) | 0;
  r = D;
  c[p >> 2] = l;
  c[p + 4 >> 2] = r;
  o = l ^ o;
  x = r ^ x;
  r = $a(o | 0, x | 0, 63) | 0;
  l = D;
  x = ab(o | 0, x | 0, 1) | 0;
  c[z >> 2] = x | r;
  c[z + 4 >> 2] = D | l;
  z = w;
  l = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  r = v;
  x = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  o = Ya(x | 0, r | 0, l | 0, z | 0) | 0;
  p = D;
  z = ab(l | 0, z | 0, 1) | 0;
  z = eb(z & -2 | 0, D & 1 | 0, x | 0, 0) | 0;
  z = Ya(o | 0, p | 0, z | 0, D | 0) | 0;
  p = D;
  o = h;
  l = z ^ c[o >> 2];
  o = p ^ c[o + 4 >> 2];
  u = n;
  t = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  y = Ya(o | 0, l | 0, t | 0, u | 0) | 0;
  j = D;
  u = ab(t | 0, u | 0, 1) | 0;
  u = eb(u & -2 | 0, D & 1 | 0, o | 0, 0) | 0;
  u = Ya(y | 0, j | 0, u | 0, D | 0) | 0;
  j = D;
  x = u ^ x;
  r = j ^ r;
  y = $a(x | 0, r | 0, 24) | 0;
  t = D;
  r = ab(x | 0, r | 0, 40) | 0;
  r = r | y;
  t = D | t;
  x = Ya(r | 0, t | 0, z | 0, p | 0) | 0;
  k = D;
  p = ab(z | 0, p | 0, 1) | 0;
  p = eb(y | 0, 0, p & -2 | 0, D & 1 | 0) | 0;
  p = Ya(x | 0, k | 0, p | 0, D | 0) | 0;
  k = D;
  c[w >> 2] = p;
  c[w + 4 >> 2] = k;
  o = p ^ o;
  l = k ^ l;
  k = $a(o | 0, l | 0, 16) | 0;
  p = D;
  l = ab(o | 0, l | 0, 48) | 0;
  l = l | k;
  p = D | p;
  c[h >> 2] = l;
  c[h + 4 >> 2] = p;
  p = Ya(l | 0, p | 0, u | 0, j | 0) | 0;
  l = D;
  j = ab(u | 0, j | 0, 1) | 0;
  j = eb(k | 0, 0, j & -2 | 0, D & 1 | 0) | 0;
  j = Ya(p | 0, l | 0, j | 0, D | 0) | 0;
  l = D;
  c[n >> 2] = j;
  c[n + 4 >> 2] = l;
  r = j ^ r;
  t = l ^ t;
  l = $a(r | 0, t | 0, 63) | 0;
  j = D;
  t = ab(r | 0, t | 0, 1) | 0;
  c[v >> 2] = t | l;
  c[v + 4 >> 2] = D | j;
  v = s;
  j = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  l = b;
  t = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  r = Ya(t | 0, l | 0, j | 0, v | 0) | 0;
  n = D;
  v = ab(j | 0, v | 0, 1) | 0;
  v = eb(v & -2 | 0, D & 1 | 0, t | 0, 0) | 0;
  v = Ya(r | 0, n | 0, v | 0, D | 0) | 0;
  n = D;
  r = q;
  j = v ^ c[r >> 2];
  r = n ^ c[r + 4 >> 2];
  p = m;
  k = c[p >> 2] | 0;
  p = c[p + 4 >> 2] | 0;
  u = Ya(r | 0, j | 0, k | 0, p | 0) | 0;
  h = D;
  p = ab(k | 0, p | 0, 1) | 0;
  p = eb(p & -2 | 0, D & 1 | 0, r | 0, 0) | 0;
  p = Ya(u | 0, h | 0, p | 0, D | 0) | 0;
  h = D;
  t = p ^ t;
  l = h ^ l;
  u = $a(t | 0, l | 0, 24) | 0;
  k = D;
  l = ab(t | 0, l | 0, 40) | 0;
  l = l | u;
  k = D | k;
  t = Ya(l | 0, k | 0, v | 0, n | 0) | 0;
  o = D;
  n = ab(v | 0, n | 0, 1) | 0;
  n = eb(u | 0, 0, n & -2 | 0, D & 1 | 0) | 0;
  n = Ya(t | 0, o | 0, n | 0, D | 0) | 0;
  o = D;
  c[s >> 2] = n;
  c[s + 4 >> 2] = o;
  r = n ^ r;
  j = o ^ j;
  o = $a(r | 0, j | 0, 16) | 0;
  n = D;
  j = ab(r | 0, j | 0, 48) | 0;
  j = j | o;
  n = D | n;
  c[q >> 2] = j;
  c[q + 4 >> 2] = n;
  n = Ya(j | 0, n | 0, p | 0, h | 0) | 0;
  j = D;
  h = ab(p | 0, h | 0, 1) | 0;
  h = eb(o | 0, 0, h & -2 | 0, D & 1 | 0) | 0;
  h = Ya(n | 0, j | 0, h | 0, D | 0) | 0;
  j = D;
  c[m >> 2] = h;
  c[m + 4 >> 2] = j;
  l = h ^ l;
  k = j ^ k;
  j = $a(l | 0, k | 0, 63) | 0;
  h = D;
  k = ab(l | 0, k | 0, 1) | 0;
  c[b >> 2] = k | j;
  c[b + 4 >> 2] = D | h;
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
  I = Ya(s | 0, q | 0, y | 0, A | 0) | 0;
  u = D;
  A = ab(y | 0, A | 0, 1) | 0;
  A = eb(A & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  A = Ya(I | 0, u | 0, A | 0, D | 0) | 0;
  u = D;
  I = e + (B + 96 << 3) | 0;
  y = I;
  H = A ^ c[y >> 2];
  y = u ^ c[y + 4 >> 2];
  E = e + (B + 64 << 3) | 0;
  J = E;
  n = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  F = Ya(y | 0, H | 0, n | 0, J | 0) | 0;
  b = D;
  J = ab(n | 0, J | 0, 1) | 0;
  J = eb(J & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  J = Ya(F | 0, b | 0, J | 0, D | 0) | 0;
  b = D;
  s = J ^ s;
  q = b ^ q;
  F = $a(s | 0, q | 0, 24) | 0;
  n = D;
  q = ab(s | 0, q | 0, 40) | 0;
  q = q | F;
  n = D | n;
  s = Ya(q | 0, n | 0, A | 0, u | 0) | 0;
  x = D;
  u = ab(A | 0, u | 0, 1) | 0;
  u = eb(F | 0, 0, u & -2 | 0, D & 1 | 0) | 0;
  u = Ya(s | 0, x | 0, u | 0, D | 0) | 0;
  x = D;
  s = k;
  c[s >> 2] = u;
  c[s + 4 >> 2] = x;
  y = u ^ y;
  H = x ^ H;
  x = $a(y | 0, H | 0, 16) | 0;
  u = D;
  H = ab(y | 0, H | 0, 48) | 0;
  H = H | x;
  u = D | u;
  y = I;
  c[y >> 2] = H;
  c[y + 4 >> 2] = u;
  u = Ya(H | 0, u | 0, J | 0, b | 0) | 0;
  H = D;
  b = ab(J | 0, b | 0, 1) | 0;
  b = eb(x | 0, 0, b & -2 | 0, D & 1 | 0) | 0;
  b = Ya(u | 0, H | 0, b | 0, D | 0) | 0;
  H = D;
  u = E;
  c[u >> 2] = b;
  c[u + 4 >> 2] = H;
  q = b ^ q;
  n = H ^ n;
  H = $a(q | 0, n | 0, 63) | 0;
  b = D;
  n = ab(q | 0, n | 0, 1) | 0;
  q = K;
  c[q >> 2] = n | H;
  c[q + 4 >> 2] = D | b;
  q = e + ((B | 1) << 3) | 0;
  b = q;
  H = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  n = e + (B + 33 << 3) | 0;
  u = n;
  x = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  J = Ya(x | 0, u | 0, H | 0, b | 0) | 0;
  y = D;
  b = ab(H | 0, b | 0, 1) | 0;
  b = eb(b & -2 | 0, D & 1 | 0, x | 0, 0) | 0;
  b = Ya(J | 0, y | 0, b | 0, D | 0) | 0;
  y = D;
  J = e + (B + 97 << 3) | 0;
  H = J;
  s = b ^ c[H >> 2];
  H = y ^ c[H + 4 >> 2];
  F = e + (B + 65 << 3) | 0;
  A = F;
  r = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  w = Ya(H | 0, s | 0, r | 0, A | 0) | 0;
  C = D;
  A = ab(r | 0, A | 0, 1) | 0;
  A = eb(A & -2 | 0, D & 1 | 0, H | 0, 0) | 0;
  A = Ya(w | 0, C | 0, A | 0, D | 0) | 0;
  C = D;
  x = A ^ x;
  u = C ^ u;
  w = $a(x | 0, u | 0, 24) | 0;
  r = D;
  u = ab(x | 0, u | 0, 40) | 0;
  u = u | w;
  r = D | r;
  x = Ya(u | 0, r | 0, b | 0, y | 0) | 0;
  m = D;
  y = ab(b | 0, y | 0, 1) | 0;
  y = eb(w | 0, 0, y & -2 | 0, D & 1 | 0) | 0;
  y = Ya(x | 0, m | 0, y | 0, D | 0) | 0;
  m = D;
  x = q;
  c[x >> 2] = y;
  c[x + 4 >> 2] = m;
  H = y ^ H;
  s = m ^ s;
  m = $a(H | 0, s | 0, 16) | 0;
  y = D;
  s = ab(H | 0, s | 0, 48) | 0;
  s = s | m;
  y = D | y;
  H = J;
  c[H >> 2] = s;
  c[H + 4 >> 2] = y;
  y = Ya(s | 0, y | 0, A | 0, C | 0) | 0;
  s = D;
  C = ab(A | 0, C | 0, 1) | 0;
  C = eb(m | 0, 0, C & -2 | 0, D & 1 | 0) | 0;
  C = Ya(y | 0, s | 0, C | 0, D | 0) | 0;
  s = D;
  y = F;
  c[y >> 2] = C;
  c[y + 4 >> 2] = s;
  u = C ^ u;
  r = s ^ r;
  s = $a(u | 0, r | 0, 63) | 0;
  C = D;
  r = ab(u | 0, r | 0, 1) | 0;
  u = n;
  c[u >> 2] = r | s;
  c[u + 4 >> 2] = D | C;
  u = e + (B + 16 << 3) | 0;
  C = u;
  s = c[C >> 2] | 0;
  C = c[C + 4 >> 2] | 0;
  r = e + (B + 48 << 3) | 0;
  y = r;
  m = c[y >> 2] | 0;
  y = c[y + 4 >> 2] | 0;
  A = Ya(m | 0, y | 0, s | 0, C | 0) | 0;
  H = D;
  C = ab(s | 0, C | 0, 1) | 0;
  C = eb(C & -2 | 0, D & 1 | 0, m | 0, 0) | 0;
  C = Ya(A | 0, H | 0, C | 0, D | 0) | 0;
  H = D;
  A = e + (B + 112 << 3) | 0;
  s = A;
  x = C ^ c[s >> 2];
  s = H ^ c[s + 4 >> 2];
  w = e + (B + 80 << 3) | 0;
  b = w;
  v = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  l = Ya(s | 0, x | 0, v | 0, b | 0) | 0;
  p = D;
  b = ab(v | 0, b | 0, 1) | 0;
  b = eb(b & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  b = Ya(l | 0, p | 0, b | 0, D | 0) | 0;
  p = D;
  m = b ^ m;
  y = p ^ y;
  l = $a(m | 0, y | 0, 24) | 0;
  v = D;
  y = ab(m | 0, y | 0, 40) | 0;
  y = y | l;
  v = D | v;
  m = Ya(y | 0, v | 0, C | 0, H | 0) | 0;
  G = D;
  H = ab(C | 0, H | 0, 1) | 0;
  H = eb(l | 0, 0, H & -2 | 0, D & 1 | 0) | 0;
  H = Ya(m | 0, G | 0, H | 0, D | 0) | 0;
  G = D;
  m = u;
  c[m >> 2] = H;
  c[m + 4 >> 2] = G;
  s = H ^ s;
  x = G ^ x;
  G = $a(s | 0, x | 0, 16) | 0;
  H = D;
  x = ab(s | 0, x | 0, 48) | 0;
  x = x | G;
  H = D | H;
  s = A;
  c[s >> 2] = x;
  c[s + 4 >> 2] = H;
  H = Ya(x | 0, H | 0, b | 0, p | 0) | 0;
  x = D;
  p = ab(b | 0, p | 0, 1) | 0;
  p = eb(G | 0, 0, p & -2 | 0, D & 1 | 0) | 0;
  p = Ya(H | 0, x | 0, p | 0, D | 0) | 0;
  x = D;
  y = p ^ y;
  v = x ^ v;
  H = $a(y | 0, v | 0, 63) | 0;
  G = D;
  v = ab(y | 0, v | 0, 1) | 0;
  y = r;
  c[y >> 2] = v | H;
  c[y + 4 >> 2] = D | G;
  y = e + (B + 17 << 3) | 0;
  G = y;
  H = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  v = e + (B + 49 << 3) | 0;
  b = v;
  s = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  m = Ya(s | 0, b | 0, H | 0, G | 0) | 0;
  l = D;
  G = ab(H | 0, G | 0, 1) | 0;
  G = eb(G & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  G = Ya(m | 0, l | 0, G | 0, D | 0) | 0;
  l = D;
  m = e + (B + 113 << 3) | 0;
  H = m;
  C = G ^ c[H >> 2];
  H = l ^ c[H + 4 >> 2];
  B = e + (B + 81 << 3) | 0;
  h = B;
  j = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  o = Ya(H | 0, C | 0, j | 0, h | 0) | 0;
  t = D;
  h = ab(j | 0, h | 0, 1) | 0;
  h = eb(h & -2 | 0, D & 1 | 0, H | 0, 0) | 0;
  h = Ya(o | 0, t | 0, h | 0, D | 0) | 0;
  t = D;
  s = h ^ s;
  b = t ^ b;
  o = $a(s | 0, b | 0, 24) | 0;
  j = D;
  b = ab(s | 0, b | 0, 40) | 0;
  b = b | o;
  j = D | j;
  s = Ya(b | 0, j | 0, G | 0, l | 0) | 0;
  z = D;
  l = ab(G | 0, l | 0, 1) | 0;
  l = eb(o | 0, 0, l & -2 | 0, D & 1 | 0) | 0;
  l = Ya(s | 0, z | 0, l | 0, D | 0) | 0;
  z = D;
  s = y;
  c[s >> 2] = l;
  c[s + 4 >> 2] = z;
  H = l ^ H;
  C = z ^ C;
  z = $a(H | 0, C | 0, 16) | 0;
  l = D;
  C = ab(H | 0, C | 0, 48) | 0;
  C = C | z;
  l = D | l;
  H = Ya(C | 0, l | 0, h | 0, t | 0) | 0;
  s = D;
  t = ab(h | 0, t | 0, 1) | 0;
  t = eb(z | 0, 0, t & -2 | 0, D & 1 | 0) | 0;
  t = Ya(H | 0, s | 0, t | 0, D | 0) | 0;
  s = D;
  b = t ^ b;
  j = s ^ j;
  H = $a(b | 0, j | 0, 63) | 0;
  z = D;
  j = ab(b | 0, j | 0, 1) | 0;
  b = v;
  c[b >> 2] = j | H;
  c[b + 4 >> 2] = D | z;
  b = k;
  z = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  H = n;
  j = c[H >> 2] | 0;
  H = c[H + 4 >> 2] | 0;
  h = Ya(j | 0, H | 0, z | 0, b | 0) | 0;
  o = D;
  b = ab(z | 0, b | 0, 1) | 0;
  b = eb(b & -2 | 0, D & 1 | 0, j | 0, 0) | 0;
  b = Ya(h | 0, o | 0, b | 0, D | 0) | 0;
  o = D;
  C = b ^ C;
  l = o ^ l;
  h = Ya(l | 0, C | 0, p | 0, x | 0) | 0;
  z = D;
  x = ab(p | 0, x | 0, 1) | 0;
  x = eb(x & -2 | 0, D & 1 | 0, l | 0, 0) | 0;
  x = Ya(h | 0, z | 0, x | 0, D | 0) | 0;
  z = D;
  j = x ^ j;
  H = z ^ H;
  h = $a(j | 0, H | 0, 24) | 0;
  p = D;
  H = ab(j | 0, H | 0, 40) | 0;
  H = H | h;
  p = D | p;
  j = Ya(H | 0, p | 0, b | 0, o | 0) | 0;
  G = D;
  o = ab(b | 0, o | 0, 1) | 0;
  o = eb(h | 0, 0, o & -2 | 0, D & 1 | 0) | 0;
  o = Ya(j | 0, G | 0, o | 0, D | 0) | 0;
  G = D;
  c[k >> 2] = o;
  c[k + 4 >> 2] = G;
  l = o ^ l;
  C = G ^ C;
  G = $a(l | 0, C | 0, 16) | 0;
  o = D;
  C = ab(l | 0, C | 0, 48) | 0;
  C = C | G;
  o = D | o;
  c[m >> 2] = C;
  c[m + 4 >> 2] = o;
  o = Ya(C | 0, o | 0, x | 0, z | 0) | 0;
  C = D;
  z = ab(x | 0, z | 0, 1) | 0;
  z = eb(G | 0, 0, z & -2 | 0, D & 1 | 0) | 0;
  z = Ya(o | 0, C | 0, z | 0, D | 0) | 0;
  C = D;
  c[w >> 2] = z;
  c[w + 4 >> 2] = C;
  H = z ^ H;
  p = C ^ p;
  C = $a(H | 0, p | 0, 63) | 0;
  z = D;
  p = ab(H | 0, p | 0, 1) | 0;
  c[n >> 2] = p | C;
  c[n + 4 >> 2] = D | z;
  n = q;
  z = c[n >> 2] | 0;
  n = c[n + 4 >> 2] | 0;
  C = r;
  p = c[C >> 2] | 0;
  C = c[C + 4 >> 2] | 0;
  H = Ya(p | 0, C | 0, z | 0, n | 0) | 0;
  w = D;
  n = ab(z | 0, n | 0, 1) | 0;
  n = eb(n & -2 | 0, D & 1 | 0, p | 0, 0) | 0;
  n = Ya(H | 0, w | 0, n | 0, D | 0) | 0;
  w = D;
  H = I;
  z = n ^ c[H >> 2];
  H = w ^ c[H + 4 >> 2];
  o = Ya(H | 0, z | 0, t | 0, s | 0) | 0;
  G = D;
  s = ab(t | 0, s | 0, 1) | 0;
  s = eb(s & -2 | 0, D & 1 | 0, H | 0, 0) | 0;
  s = Ya(o | 0, G | 0, s | 0, D | 0) | 0;
  G = D;
  p = s ^ p;
  C = G ^ C;
  o = $a(p | 0, C | 0, 24) | 0;
  t = D;
  C = ab(p | 0, C | 0, 40) | 0;
  C = C | o;
  t = D | t;
  p = Ya(C | 0, t | 0, n | 0, w | 0) | 0;
  x = D;
  w = ab(n | 0, w | 0, 1) | 0;
  w = eb(o | 0, 0, w & -2 | 0, D & 1 | 0) | 0;
  w = Ya(p | 0, x | 0, w | 0, D | 0) | 0;
  x = D;
  c[q >> 2] = w;
  c[q + 4 >> 2] = x;
  H = w ^ H;
  z = x ^ z;
  x = $a(H | 0, z | 0, 16) | 0;
  w = D;
  z = ab(H | 0, z | 0, 48) | 0;
  z = z | x;
  w = D | w;
  c[I >> 2] = z;
  c[I + 4 >> 2] = w;
  w = Ya(z | 0, w | 0, s | 0, G | 0) | 0;
  z = D;
  G = ab(s | 0, G | 0, 1) | 0;
  G = eb(x | 0, 0, G & -2 | 0, D & 1 | 0) | 0;
  G = Ya(w | 0, z | 0, G | 0, D | 0) | 0;
  z = D;
  c[B >> 2] = G;
  c[B + 4 >> 2] = z;
  C = G ^ C;
  t = z ^ t;
  z = $a(C | 0, t | 0, 63) | 0;
  G = D;
  t = ab(C | 0, t | 0, 1) | 0;
  c[r >> 2] = t | z;
  c[r + 4 >> 2] = D | G;
  r = u;
  G = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  z = v;
  t = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  C = Ya(t | 0, z | 0, G | 0, r | 0) | 0;
  B = D;
  r = ab(G | 0, r | 0, 1) | 0;
  r = eb(r & -2 | 0, D & 1 | 0, t | 0, 0) | 0;
  r = Ya(C | 0, B | 0, r | 0, D | 0) | 0;
  B = D;
  C = J;
  G = r ^ c[C >> 2];
  C = B ^ c[C + 4 >> 2];
  w = E;
  x = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  s = Ya(C | 0, G | 0, x | 0, w | 0) | 0;
  I = D;
  w = ab(x | 0, w | 0, 1) | 0;
  w = eb(w & -2 | 0, D & 1 | 0, C | 0, 0) | 0;
  w = Ya(s | 0, I | 0, w | 0, D | 0) | 0;
  I = D;
  t = w ^ t;
  z = I ^ z;
  s = $a(t | 0, z | 0, 24) | 0;
  x = D;
  z = ab(t | 0, z | 0, 40) | 0;
  z = z | s;
  x = D | x;
  t = Ya(z | 0, x | 0, r | 0, B | 0) | 0;
  H = D;
  B = ab(r | 0, B | 0, 1) | 0;
  B = eb(s | 0, 0, B & -2 | 0, D & 1 | 0) | 0;
  B = Ya(t | 0, H | 0, B | 0, D | 0) | 0;
  H = D;
  c[u >> 2] = B;
  c[u + 4 >> 2] = H;
  C = B ^ C;
  G = H ^ G;
  H = $a(C | 0, G | 0, 16) | 0;
  B = D;
  G = ab(C | 0, G | 0, 48) | 0;
  G = G | H;
  B = D | B;
  c[J >> 2] = G;
  c[J + 4 >> 2] = B;
  B = Ya(G | 0, B | 0, w | 0, I | 0) | 0;
  G = D;
  I = ab(w | 0, I | 0, 1) | 0;
  I = eb(H | 0, 0, I & -2 | 0, D & 1 | 0) | 0;
  I = Ya(B | 0, G | 0, I | 0, D | 0) | 0;
  G = D;
  c[E >> 2] = I;
  c[E + 4 >> 2] = G;
  z = I ^ z;
  x = G ^ x;
  G = $a(z | 0, x | 0, 63) | 0;
  I = D;
  x = ab(z | 0, x | 0, 1) | 0;
  c[v >> 2] = x | G;
  c[v + 4 >> 2] = D | I;
  v = y;
  I = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  G = K;
  x = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  z = Ya(x | 0, G | 0, I | 0, v | 0) | 0;
  E = D;
  v = ab(I | 0, v | 0, 1) | 0;
  v = eb(v & -2 | 0, D & 1 | 0, x | 0, 0) | 0;
  v = Ya(z | 0, E | 0, v | 0, D | 0) | 0;
  E = D;
  z = A;
  I = v ^ c[z >> 2];
  z = E ^ c[z + 4 >> 2];
  B = F;
  H = c[B >> 2] | 0;
  B = c[B + 4 >> 2] | 0;
  w = Ya(z | 0, I | 0, H | 0, B | 0) | 0;
  J = D;
  B = ab(H | 0, B | 0, 1) | 0;
  B = eb(B & -2 | 0, D & 1 | 0, z | 0, 0) | 0;
  B = Ya(w | 0, J | 0, B | 0, D | 0) | 0;
  J = D;
  x = B ^ x;
  G = J ^ G;
  w = $a(x | 0, G | 0, 24) | 0;
  H = D;
  G = ab(x | 0, G | 0, 40) | 0;
  G = G | w;
  H = D | H;
  x = Ya(G | 0, H | 0, v | 0, E | 0) | 0;
  C = D;
  E = ab(v | 0, E | 0, 1) | 0;
  E = eb(w | 0, 0, E & -2 | 0, D & 1 | 0) | 0;
  E = Ya(x | 0, C | 0, E | 0, D | 0) | 0;
  C = D;
  c[y >> 2] = E;
  c[y + 4 >> 2] = C;
  z = E ^ z;
  I = C ^ I;
  C = $a(z | 0, I | 0, 16) | 0;
  E = D;
  I = ab(z | 0, I | 0, 48) | 0;
  I = I | C;
  E = D | E;
  c[A >> 2] = I;
  c[A + 4 >> 2] = E;
  E = Ya(I | 0, E | 0, B | 0, J | 0) | 0;
  I = D;
  J = ab(B | 0, J | 0, 1) | 0;
  J = eb(C | 0, 0, J & -2 | 0, D & 1 | 0) | 0;
  J = Ya(E | 0, I | 0, J | 0, D | 0) | 0;
  I = D;
  c[F >> 2] = J;
  c[F + 4 >> 2] = I;
  G = J ^ G;
  H = I ^ H;
  I = $a(G | 0, H | 0, 63) | 0;
  J = D;
  H = ab(G | 0, H | 0, 1) | 0;
  c[K >> 2] = H | I;
  c[K + 4 >> 2] = D | J;
  a = a + 1 | 0;
 } while ((a | 0) != 8);
 xa(d, f);
 ya(d, e);
 i = g;
 return;
}

function La(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0;
 g = i;
 i = i + 2048 | 0;
 e = g + 1024 | 0;
 f = g;
 xa(e, b);
 ya(e, a);
 xa(f, e);
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
  j = Ya(y | 0, A | 0, s | 0, q | 0) | 0;
  w = D;
  q = ab(s | 0, q | 0, 1) | 0;
  q = eb(q & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  q = Ya(j | 0, w | 0, q | 0, D | 0) | 0;
  w = D;
  j = e + ((p | 12) << 3) | 0;
  s = j;
  k = q ^ c[s >> 2];
  s = w ^ c[s + 4 >> 2];
  n = e + ((p | 8) << 3) | 0;
  h = n;
  E = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  m = Ya(s | 0, k | 0, E | 0, h | 0) | 0;
  K = D;
  h = ab(E | 0, h | 0, 1) | 0;
  h = eb(h & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  h = Ya(m | 0, K | 0, h | 0, D | 0) | 0;
  K = D;
  y = h ^ y;
  A = K ^ A;
  m = $a(y | 0, A | 0, 24) | 0;
  E = D;
  A = ab(y | 0, A | 0, 40) | 0;
  A = A | m;
  E = D | E;
  y = Ya(A | 0, E | 0, q | 0, w | 0) | 0;
  t = D;
  w = ab(q | 0, w | 0, 1) | 0;
  w = eb(m | 0, 0, w & -2 | 0, D & 1 | 0) | 0;
  w = Ya(y | 0, t | 0, w | 0, D | 0) | 0;
  t = D;
  y = H;
  c[y >> 2] = w;
  c[y + 4 >> 2] = t;
  s = w ^ s;
  k = t ^ k;
  t = $a(s | 0, k | 0, 16) | 0;
  w = D;
  k = ab(s | 0, k | 0, 48) | 0;
  k = k | t;
  w = D | w;
  s = j;
  c[s >> 2] = k;
  c[s + 4 >> 2] = w;
  w = Ya(k | 0, w | 0, h | 0, K | 0) | 0;
  k = D;
  K = ab(h | 0, K | 0, 1) | 0;
  K = eb(t | 0, 0, K & -2 | 0, D & 1 | 0) | 0;
  K = Ya(w | 0, k | 0, K | 0, D | 0) | 0;
  k = D;
  w = n;
  c[w >> 2] = K;
  c[w + 4 >> 2] = k;
  A = K ^ A;
  E = k ^ E;
  k = $a(A | 0, E | 0, 63) | 0;
  K = D;
  E = ab(A | 0, E | 0, 1) | 0;
  A = b;
  c[A >> 2] = E | k;
  c[A + 4 >> 2] = D | K;
  A = e + ((p | 1) << 3) | 0;
  K = A;
  k = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  E = e + ((p | 5) << 3) | 0;
  w = E;
  t = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  h = Ya(t | 0, w | 0, k | 0, K | 0) | 0;
  s = D;
  K = ab(k | 0, K | 0, 1) | 0;
  K = eb(K & -2 | 0, D & 1 | 0, t | 0, 0) | 0;
  K = Ya(h | 0, s | 0, K | 0, D | 0) | 0;
  s = D;
  h = e + ((p | 13) << 3) | 0;
  k = h;
  y = K ^ c[k >> 2];
  k = s ^ c[k + 4 >> 2];
  m = e + ((p | 9) << 3) | 0;
  q = m;
  z = c[q >> 2] | 0;
  q = c[q + 4 >> 2] | 0;
  u = Ya(k | 0, y | 0, z | 0, q | 0) | 0;
  o = D;
  q = ab(z | 0, q | 0, 1) | 0;
  q = eb(q & -2 | 0, D & 1 | 0, k | 0, 0) | 0;
  q = Ya(u | 0, o | 0, q | 0, D | 0) | 0;
  o = D;
  t = q ^ t;
  w = o ^ w;
  u = $a(t | 0, w | 0, 24) | 0;
  z = D;
  w = ab(t | 0, w | 0, 40) | 0;
  w = w | u;
  z = D | z;
  t = Ya(w | 0, z | 0, K | 0, s | 0) | 0;
  F = D;
  s = ab(K | 0, s | 0, 1) | 0;
  s = eb(u | 0, 0, s & -2 | 0, D & 1 | 0) | 0;
  s = Ya(t | 0, F | 0, s | 0, D | 0) | 0;
  F = D;
  t = A;
  c[t >> 2] = s;
  c[t + 4 >> 2] = F;
  k = s ^ k;
  y = F ^ y;
  F = $a(k | 0, y | 0, 16) | 0;
  s = D;
  y = ab(k | 0, y | 0, 48) | 0;
  y = y | F;
  s = D | s;
  k = h;
  c[k >> 2] = y;
  c[k + 4 >> 2] = s;
  s = Ya(y | 0, s | 0, q | 0, o | 0) | 0;
  y = D;
  o = ab(q | 0, o | 0, 1) | 0;
  o = eb(F | 0, 0, o & -2 | 0, D & 1 | 0) | 0;
  o = Ya(s | 0, y | 0, o | 0, D | 0) | 0;
  y = D;
  s = m;
  c[s >> 2] = o;
  c[s + 4 >> 2] = y;
  w = o ^ w;
  z = y ^ z;
  y = $a(w | 0, z | 0, 63) | 0;
  o = D;
  z = ab(w | 0, z | 0, 1) | 0;
  w = E;
  c[w >> 2] = z | y;
  c[w + 4 >> 2] = D | o;
  w = e + ((p | 2) << 3) | 0;
  o = w;
  y = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  z = e + ((p | 6) << 3) | 0;
  s = z;
  F = c[s >> 2] | 0;
  s = c[s + 4 >> 2] | 0;
  q = Ya(F | 0, s | 0, y | 0, o | 0) | 0;
  k = D;
  o = ab(y | 0, o | 0, 1) | 0;
  o = eb(o & -2 | 0, D & 1 | 0, F | 0, 0) | 0;
  o = Ya(q | 0, k | 0, o | 0, D | 0) | 0;
  k = D;
  q = e + ((p | 14) << 3) | 0;
  y = q;
  t = o ^ c[y >> 2];
  y = k ^ c[y + 4 >> 2];
  u = e + ((p | 10) << 3) | 0;
  K = u;
  v = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  G = Ya(y | 0, t | 0, v | 0, K | 0) | 0;
  B = D;
  K = ab(v | 0, K | 0, 1) | 0;
  K = eb(K & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  K = Ya(G | 0, B | 0, K | 0, D | 0) | 0;
  B = D;
  F = K ^ F;
  s = B ^ s;
  G = $a(F | 0, s | 0, 24) | 0;
  v = D;
  s = ab(F | 0, s | 0, 40) | 0;
  s = s | G;
  v = D | v;
  F = Ya(s | 0, v | 0, o | 0, k | 0) | 0;
  l = D;
  k = ab(o | 0, k | 0, 1) | 0;
  k = eb(G | 0, 0, k & -2 | 0, D & 1 | 0) | 0;
  k = Ya(F | 0, l | 0, k | 0, D | 0) | 0;
  l = D;
  F = w;
  c[F >> 2] = k;
  c[F + 4 >> 2] = l;
  y = k ^ y;
  t = l ^ t;
  l = $a(y | 0, t | 0, 16) | 0;
  k = D;
  t = ab(y | 0, t | 0, 48) | 0;
  t = t | l;
  k = D | k;
  y = q;
  c[y >> 2] = t;
  c[y + 4 >> 2] = k;
  k = Ya(t | 0, k | 0, K | 0, B | 0) | 0;
  t = D;
  B = ab(K | 0, B | 0, 1) | 0;
  B = eb(l | 0, 0, B & -2 | 0, D & 1 | 0) | 0;
  B = Ya(k | 0, t | 0, B | 0, D | 0) | 0;
  t = D;
  s = B ^ s;
  v = t ^ v;
  k = $a(s | 0, v | 0, 63) | 0;
  l = D;
  v = ab(s | 0, v | 0, 1) | 0;
  s = z;
  c[s >> 2] = v | k;
  c[s + 4 >> 2] = D | l;
  s = e + ((p | 3) << 3) | 0;
  l = s;
  k = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  v = e + ((p | 7) << 3) | 0;
  K = v;
  y = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  F = Ya(y | 0, K | 0, k | 0, l | 0) | 0;
  G = D;
  l = ab(k | 0, l | 0, 1) | 0;
  l = eb(l & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  l = Ya(F | 0, G | 0, l | 0, D | 0) | 0;
  G = D;
  F = e + ((p | 15) << 3) | 0;
  k = F;
  o = l ^ c[k >> 2];
  k = G ^ c[k + 4 >> 2];
  p = e + ((p | 11) << 3) | 0;
  J = p;
  I = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  C = Ya(k | 0, o | 0, I | 0, J | 0) | 0;
  x = D;
  J = ab(I | 0, J | 0, 1) | 0;
  J = eb(J & -2 | 0, D & 1 | 0, k | 0, 0) | 0;
  J = Ya(C | 0, x | 0, J | 0, D | 0) | 0;
  x = D;
  y = J ^ y;
  K = x ^ K;
  C = $a(y | 0, K | 0, 24) | 0;
  I = D;
  K = ab(y | 0, K | 0, 40) | 0;
  K = K | C;
  I = D | I;
  y = Ya(K | 0, I | 0, l | 0, G | 0) | 0;
  r = D;
  G = ab(l | 0, G | 0, 1) | 0;
  G = eb(C | 0, 0, G & -2 | 0, D & 1 | 0) | 0;
  G = Ya(y | 0, r | 0, G | 0, D | 0) | 0;
  r = D;
  y = s;
  c[y >> 2] = G;
  c[y + 4 >> 2] = r;
  k = G ^ k;
  o = r ^ o;
  r = $a(k | 0, o | 0, 16) | 0;
  G = D;
  o = ab(k | 0, o | 0, 48) | 0;
  o = o | r;
  G = D | G;
  k = Ya(o | 0, G | 0, J | 0, x | 0) | 0;
  y = D;
  x = ab(J | 0, x | 0, 1) | 0;
  x = eb(r | 0, 0, x & -2 | 0, D & 1 | 0) | 0;
  x = Ya(k | 0, y | 0, x | 0, D | 0) | 0;
  y = D;
  K = x ^ K;
  I = y ^ I;
  k = $a(K | 0, I | 0, 63) | 0;
  r = D;
  I = ab(K | 0, I | 0, 1) | 0;
  K = v;
  c[K >> 2] = I | k;
  c[K + 4 >> 2] = D | r;
  K = H;
  r = c[K >> 2] | 0;
  K = c[K + 4 >> 2] | 0;
  k = E;
  I = c[k >> 2] | 0;
  k = c[k + 4 >> 2] | 0;
  J = Ya(I | 0, k | 0, r | 0, K | 0) | 0;
  C = D;
  K = ab(r | 0, K | 0, 1) | 0;
  K = eb(K & -2 | 0, D & 1 | 0, I | 0, 0) | 0;
  K = Ya(J | 0, C | 0, K | 0, D | 0) | 0;
  C = D;
  o = K ^ o;
  G = C ^ G;
  J = Ya(G | 0, o | 0, B | 0, t | 0) | 0;
  r = D;
  t = ab(B | 0, t | 0, 1) | 0;
  t = eb(t & -2 | 0, D & 1 | 0, G | 0, 0) | 0;
  t = Ya(J | 0, r | 0, t | 0, D | 0) | 0;
  r = D;
  I = t ^ I;
  k = r ^ k;
  J = $a(I | 0, k | 0, 24) | 0;
  B = D;
  k = ab(I | 0, k | 0, 40) | 0;
  k = k | J;
  B = D | B;
  I = Ya(k | 0, B | 0, K | 0, C | 0) | 0;
  l = D;
  C = ab(K | 0, C | 0, 1) | 0;
  C = eb(J | 0, 0, C & -2 | 0, D & 1 | 0) | 0;
  C = Ya(I | 0, l | 0, C | 0, D | 0) | 0;
  l = D;
  c[H >> 2] = C;
  c[H + 4 >> 2] = l;
  G = C ^ G;
  o = l ^ o;
  l = $a(G | 0, o | 0, 16) | 0;
  C = D;
  o = ab(G | 0, o | 0, 48) | 0;
  o = o | l;
  C = D | C;
  c[F >> 2] = o;
  c[F + 4 >> 2] = C;
  C = Ya(o | 0, C | 0, t | 0, r | 0) | 0;
  o = D;
  r = ab(t | 0, r | 0, 1) | 0;
  r = eb(l | 0, 0, r & -2 | 0, D & 1 | 0) | 0;
  r = Ya(C | 0, o | 0, r | 0, D | 0) | 0;
  o = D;
  c[u >> 2] = r;
  c[u + 4 >> 2] = o;
  k = r ^ k;
  B = o ^ B;
  o = $a(k | 0, B | 0, 63) | 0;
  r = D;
  B = ab(k | 0, B | 0, 1) | 0;
  c[E >> 2] = B | o;
  c[E + 4 >> 2] = D | r;
  E = A;
  r = c[E >> 2] | 0;
  E = c[E + 4 >> 2] | 0;
  o = z;
  B = c[o >> 2] | 0;
  o = c[o + 4 >> 2] | 0;
  k = Ya(B | 0, o | 0, r | 0, E | 0) | 0;
  u = D;
  E = ab(r | 0, E | 0, 1) | 0;
  E = eb(E & -2 | 0, D & 1 | 0, B | 0, 0) | 0;
  E = Ya(k | 0, u | 0, E | 0, D | 0) | 0;
  u = D;
  k = j;
  r = E ^ c[k >> 2];
  k = u ^ c[k + 4 >> 2];
  C = Ya(k | 0, r | 0, x | 0, y | 0) | 0;
  l = D;
  y = ab(x | 0, y | 0, 1) | 0;
  y = eb(y & -2 | 0, D & 1 | 0, k | 0, 0) | 0;
  y = Ya(C | 0, l | 0, y | 0, D | 0) | 0;
  l = D;
  B = y ^ B;
  o = l ^ o;
  C = $a(B | 0, o | 0, 24) | 0;
  x = D;
  o = ab(B | 0, o | 0, 40) | 0;
  o = o | C;
  x = D | x;
  B = Ya(o | 0, x | 0, E | 0, u | 0) | 0;
  t = D;
  u = ab(E | 0, u | 0, 1) | 0;
  u = eb(C | 0, 0, u & -2 | 0, D & 1 | 0) | 0;
  u = Ya(B | 0, t | 0, u | 0, D | 0) | 0;
  t = D;
  c[A >> 2] = u;
  c[A + 4 >> 2] = t;
  k = u ^ k;
  r = t ^ r;
  t = $a(k | 0, r | 0, 16) | 0;
  u = D;
  r = ab(k | 0, r | 0, 48) | 0;
  r = r | t;
  u = D | u;
  c[j >> 2] = r;
  c[j + 4 >> 2] = u;
  u = Ya(r | 0, u | 0, y | 0, l | 0) | 0;
  r = D;
  l = ab(y | 0, l | 0, 1) | 0;
  l = eb(t | 0, 0, l & -2 | 0, D & 1 | 0) | 0;
  l = Ya(u | 0, r | 0, l | 0, D | 0) | 0;
  r = D;
  c[p >> 2] = l;
  c[p + 4 >> 2] = r;
  o = l ^ o;
  x = r ^ x;
  r = $a(o | 0, x | 0, 63) | 0;
  l = D;
  x = ab(o | 0, x | 0, 1) | 0;
  c[z >> 2] = x | r;
  c[z + 4 >> 2] = D | l;
  z = w;
  l = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  r = v;
  x = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  o = Ya(x | 0, r | 0, l | 0, z | 0) | 0;
  p = D;
  z = ab(l | 0, z | 0, 1) | 0;
  z = eb(z & -2 | 0, D & 1 | 0, x | 0, 0) | 0;
  z = Ya(o | 0, p | 0, z | 0, D | 0) | 0;
  p = D;
  o = h;
  l = z ^ c[o >> 2];
  o = p ^ c[o + 4 >> 2];
  u = n;
  t = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  y = Ya(o | 0, l | 0, t | 0, u | 0) | 0;
  j = D;
  u = ab(t | 0, u | 0, 1) | 0;
  u = eb(u & -2 | 0, D & 1 | 0, o | 0, 0) | 0;
  u = Ya(y | 0, j | 0, u | 0, D | 0) | 0;
  j = D;
  x = u ^ x;
  r = j ^ r;
  y = $a(x | 0, r | 0, 24) | 0;
  t = D;
  r = ab(x | 0, r | 0, 40) | 0;
  r = r | y;
  t = D | t;
  x = Ya(r | 0, t | 0, z | 0, p | 0) | 0;
  k = D;
  p = ab(z | 0, p | 0, 1) | 0;
  p = eb(y | 0, 0, p & -2 | 0, D & 1 | 0) | 0;
  p = Ya(x | 0, k | 0, p | 0, D | 0) | 0;
  k = D;
  c[w >> 2] = p;
  c[w + 4 >> 2] = k;
  o = p ^ o;
  l = k ^ l;
  k = $a(o | 0, l | 0, 16) | 0;
  p = D;
  l = ab(o | 0, l | 0, 48) | 0;
  l = l | k;
  p = D | p;
  c[h >> 2] = l;
  c[h + 4 >> 2] = p;
  p = Ya(l | 0, p | 0, u | 0, j | 0) | 0;
  l = D;
  j = ab(u | 0, j | 0, 1) | 0;
  j = eb(k | 0, 0, j & -2 | 0, D & 1 | 0) | 0;
  j = Ya(p | 0, l | 0, j | 0, D | 0) | 0;
  l = D;
  c[n >> 2] = j;
  c[n + 4 >> 2] = l;
  r = j ^ r;
  t = l ^ t;
  l = $a(r | 0, t | 0, 63) | 0;
  j = D;
  t = ab(r | 0, t | 0, 1) | 0;
  c[v >> 2] = t | l;
  c[v + 4 >> 2] = D | j;
  v = s;
  j = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  l = b;
  t = c[l >> 2] | 0;
  l = c[l + 4 >> 2] | 0;
  r = Ya(t | 0, l | 0, j | 0, v | 0) | 0;
  n = D;
  v = ab(j | 0, v | 0, 1) | 0;
  v = eb(v & -2 | 0, D & 1 | 0, t | 0, 0) | 0;
  v = Ya(r | 0, n | 0, v | 0, D | 0) | 0;
  n = D;
  r = q;
  j = v ^ c[r >> 2];
  r = n ^ c[r + 4 >> 2];
  p = m;
  k = c[p >> 2] | 0;
  p = c[p + 4 >> 2] | 0;
  u = Ya(r | 0, j | 0, k | 0, p | 0) | 0;
  h = D;
  p = ab(k | 0, p | 0, 1) | 0;
  p = eb(p & -2 | 0, D & 1 | 0, r | 0, 0) | 0;
  p = Ya(u | 0, h | 0, p | 0, D | 0) | 0;
  h = D;
  t = p ^ t;
  l = h ^ l;
  u = $a(t | 0, l | 0, 24) | 0;
  k = D;
  l = ab(t | 0, l | 0, 40) | 0;
  l = l | u;
  k = D | k;
  t = Ya(l | 0, k | 0, v | 0, n | 0) | 0;
  o = D;
  n = ab(v | 0, n | 0, 1) | 0;
  n = eb(u | 0, 0, n & -2 | 0, D & 1 | 0) | 0;
  n = Ya(t | 0, o | 0, n | 0, D | 0) | 0;
  o = D;
  c[s >> 2] = n;
  c[s + 4 >> 2] = o;
  r = n ^ r;
  j = o ^ j;
  o = $a(r | 0, j | 0, 16) | 0;
  n = D;
  j = ab(r | 0, j | 0, 48) | 0;
  j = j | o;
  n = D | n;
  c[q >> 2] = j;
  c[q + 4 >> 2] = n;
  n = Ya(j | 0, n | 0, p | 0, h | 0) | 0;
  j = D;
  h = ab(p | 0, h | 0, 1) | 0;
  h = eb(o | 0, 0, h & -2 | 0, D & 1 | 0) | 0;
  h = Ya(n | 0, j | 0, h | 0, D | 0) | 0;
  j = D;
  c[m >> 2] = h;
  c[m + 4 >> 2] = j;
  l = h ^ l;
  k = j ^ k;
  j = $a(l | 0, k | 0, 63) | 0;
  h = D;
  k = ab(l | 0, k | 0, 1) | 0;
  c[b >> 2] = k | j;
  c[b + 4 >> 2] = D | h;
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
  I = Ya(s | 0, q | 0, y | 0, A | 0) | 0;
  u = D;
  A = ab(y | 0, A | 0, 1) | 0;
  A = eb(A & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  A = Ya(I | 0, u | 0, A | 0, D | 0) | 0;
  u = D;
  I = e + (B + 96 << 3) | 0;
  y = I;
  H = A ^ c[y >> 2];
  y = u ^ c[y + 4 >> 2];
  E = e + (B + 64 << 3) | 0;
  J = E;
  n = c[J >> 2] | 0;
  J = c[J + 4 >> 2] | 0;
  F = Ya(y | 0, H | 0, n | 0, J | 0) | 0;
  b = D;
  J = ab(n | 0, J | 0, 1) | 0;
  J = eb(J & -2 | 0, D & 1 | 0, y | 0, 0) | 0;
  J = Ya(F | 0, b | 0, J | 0, D | 0) | 0;
  b = D;
  s = J ^ s;
  q = b ^ q;
  F = $a(s | 0, q | 0, 24) | 0;
  n = D;
  q = ab(s | 0, q | 0, 40) | 0;
  q = q | F;
  n = D | n;
  s = Ya(q | 0, n | 0, A | 0, u | 0) | 0;
  x = D;
  u = ab(A | 0, u | 0, 1) | 0;
  u = eb(F | 0, 0, u & -2 | 0, D & 1 | 0) | 0;
  u = Ya(s | 0, x | 0, u | 0, D | 0) | 0;
  x = D;
  s = k;
  c[s >> 2] = u;
  c[s + 4 >> 2] = x;
  y = u ^ y;
  H = x ^ H;
  x = $a(y | 0, H | 0, 16) | 0;
  u = D;
  H = ab(y | 0, H | 0, 48) | 0;
  H = H | x;
  u = D | u;
  y = I;
  c[y >> 2] = H;
  c[y + 4 >> 2] = u;
  u = Ya(H | 0, u | 0, J | 0, b | 0) | 0;
  H = D;
  b = ab(J | 0, b | 0, 1) | 0;
  b = eb(x | 0, 0, b & -2 | 0, D & 1 | 0) | 0;
  b = Ya(u | 0, H | 0, b | 0, D | 0) | 0;
  H = D;
  u = E;
  c[u >> 2] = b;
  c[u + 4 >> 2] = H;
  q = b ^ q;
  n = H ^ n;
  H = $a(q | 0, n | 0, 63) | 0;
  b = D;
  n = ab(q | 0, n | 0, 1) | 0;
  q = K;
  c[q >> 2] = n | H;
  c[q + 4 >> 2] = D | b;
  q = e + ((B | 1) << 3) | 0;
  b = q;
  H = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  n = e + (B + 33 << 3) | 0;
  u = n;
  x = c[u >> 2] | 0;
  u = c[u + 4 >> 2] | 0;
  J = Ya(x | 0, u | 0, H | 0, b | 0) | 0;
  y = D;
  b = ab(H | 0, b | 0, 1) | 0;
  b = eb(b & -2 | 0, D & 1 | 0, x | 0, 0) | 0;
  b = Ya(J | 0, y | 0, b | 0, D | 0) | 0;
  y = D;
  J = e + (B + 97 << 3) | 0;
  H = J;
  s = b ^ c[H >> 2];
  H = y ^ c[H + 4 >> 2];
  F = e + (B + 65 << 3) | 0;
  A = F;
  r = c[A >> 2] | 0;
  A = c[A + 4 >> 2] | 0;
  w = Ya(H | 0, s | 0, r | 0, A | 0) | 0;
  C = D;
  A = ab(r | 0, A | 0, 1) | 0;
  A = eb(A & -2 | 0, D & 1 | 0, H | 0, 0) | 0;
  A = Ya(w | 0, C | 0, A | 0, D | 0) | 0;
  C = D;
  x = A ^ x;
  u = C ^ u;
  w = $a(x | 0, u | 0, 24) | 0;
  r = D;
  u = ab(x | 0, u | 0, 40) | 0;
  u = u | w;
  r = D | r;
  x = Ya(u | 0, r | 0, b | 0, y | 0) | 0;
  m = D;
  y = ab(b | 0, y | 0, 1) | 0;
  y = eb(w | 0, 0, y & -2 | 0, D & 1 | 0) | 0;
  y = Ya(x | 0, m | 0, y | 0, D | 0) | 0;
  m = D;
  x = q;
  c[x >> 2] = y;
  c[x + 4 >> 2] = m;
  H = y ^ H;
  s = m ^ s;
  m = $a(H | 0, s | 0, 16) | 0;
  y = D;
  s = ab(H | 0, s | 0, 48) | 0;
  s = s | m;
  y = D | y;
  H = J;
  c[H >> 2] = s;
  c[H + 4 >> 2] = y;
  y = Ya(s | 0, y | 0, A | 0, C | 0) | 0;
  s = D;
  C = ab(A | 0, C | 0, 1) | 0;
  C = eb(m | 0, 0, C & -2 | 0, D & 1 | 0) | 0;
  C = Ya(y | 0, s | 0, C | 0, D | 0) | 0;
  s = D;
  y = F;
  c[y >> 2] = C;
  c[y + 4 >> 2] = s;
  u = C ^ u;
  r = s ^ r;
  s = $a(u | 0, r | 0, 63) | 0;
  C = D;
  r = ab(u | 0, r | 0, 1) | 0;
  u = n;
  c[u >> 2] = r | s;
  c[u + 4 >> 2] = D | C;
  u = e + (B + 16 << 3) | 0;
  C = u;
  s = c[C >> 2] | 0;
  C = c[C + 4 >> 2] | 0;
  r = e + (B + 48 << 3) | 0;
  y = r;
  m = c[y >> 2] | 0;
  y = c[y + 4 >> 2] | 0;
  A = Ya(m | 0, y | 0, s | 0, C | 0) | 0;
  H = D;
  C = ab(s | 0, C | 0, 1) | 0;
  C = eb(C & -2 | 0, D & 1 | 0, m | 0, 0) | 0;
  C = Ya(A | 0, H | 0, C | 0, D | 0) | 0;
  H = D;
  A = e + (B + 112 << 3) | 0;
  s = A;
  x = C ^ c[s >> 2];
  s = H ^ c[s + 4 >> 2];
  w = e + (B + 80 << 3) | 0;
  b = w;
  v = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  l = Ya(s | 0, x | 0, v | 0, b | 0) | 0;
  p = D;
  b = ab(v | 0, b | 0, 1) | 0;
  b = eb(b & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  b = Ya(l | 0, p | 0, b | 0, D | 0) | 0;
  p = D;
  m = b ^ m;
  y = p ^ y;
  l = $a(m | 0, y | 0, 24) | 0;
  v = D;
  y = ab(m | 0, y | 0, 40) | 0;
  y = y | l;
  v = D | v;
  m = Ya(y | 0, v | 0, C | 0, H | 0) | 0;
  G = D;
  H = ab(C | 0, H | 0, 1) | 0;
  H = eb(l | 0, 0, H & -2 | 0, D & 1 | 0) | 0;
  H = Ya(m | 0, G | 0, H | 0, D | 0) | 0;
  G = D;
  m = u;
  c[m >> 2] = H;
  c[m + 4 >> 2] = G;
  s = H ^ s;
  x = G ^ x;
  G = $a(s | 0, x | 0, 16) | 0;
  H = D;
  x = ab(s | 0, x | 0, 48) | 0;
  x = x | G;
  H = D | H;
  s = A;
  c[s >> 2] = x;
  c[s + 4 >> 2] = H;
  H = Ya(x | 0, H | 0, b | 0, p | 0) | 0;
  x = D;
  p = ab(b | 0, p | 0, 1) | 0;
  p = eb(G | 0, 0, p & -2 | 0, D & 1 | 0) | 0;
  p = Ya(H | 0, x | 0, p | 0, D | 0) | 0;
  x = D;
  y = p ^ y;
  v = x ^ v;
  H = $a(y | 0, v | 0, 63) | 0;
  G = D;
  v = ab(y | 0, v | 0, 1) | 0;
  y = r;
  c[y >> 2] = v | H;
  c[y + 4 >> 2] = D | G;
  y = e + (B + 17 << 3) | 0;
  G = y;
  H = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  v = e + (B + 49 << 3) | 0;
  b = v;
  s = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  m = Ya(s | 0, b | 0, H | 0, G | 0) | 0;
  l = D;
  G = ab(H | 0, G | 0, 1) | 0;
  G = eb(G & -2 | 0, D & 1 | 0, s | 0, 0) | 0;
  G = Ya(m | 0, l | 0, G | 0, D | 0) | 0;
  l = D;
  m = e + (B + 113 << 3) | 0;
  H = m;
  C = G ^ c[H >> 2];
  H = l ^ c[H + 4 >> 2];
  B = e + (B + 81 << 3) | 0;
  h = B;
  j = c[h >> 2] | 0;
  h = c[h + 4 >> 2] | 0;
  o = Ya(H | 0, C | 0, j | 0, h | 0) | 0;
  t = D;
  h = ab(j | 0, h | 0, 1) | 0;
  h = eb(h & -2 | 0, D & 1 | 0, H | 0, 0) | 0;
  h = Ya(o | 0, t | 0, h | 0, D | 0) | 0;
  t = D;
  s = h ^ s;
  b = t ^ b;
  o = $a(s | 0, b | 0, 24) | 0;
  j = D;
  b = ab(s | 0, b | 0, 40) | 0;
  b = b | o;
  j = D | j;
  s = Ya(b | 0, j | 0, G | 0, l | 0) | 0;
  z = D;
  l = ab(G | 0, l | 0, 1) | 0;
  l = eb(o | 0, 0, l & -2 | 0, D & 1 | 0) | 0;
  l = Ya(s | 0, z | 0, l | 0, D | 0) | 0;
  z = D;
  s = y;
  c[s >> 2] = l;
  c[s + 4 >> 2] = z;
  H = l ^ H;
  C = z ^ C;
  z = $a(H | 0, C | 0, 16) | 0;
  l = D;
  C = ab(H | 0, C | 0, 48) | 0;
  C = C | z;
  l = D | l;
  H = Ya(C | 0, l | 0, h | 0, t | 0) | 0;
  s = D;
  t = ab(h | 0, t | 0, 1) | 0;
  t = eb(z | 0, 0, t & -2 | 0, D & 1 | 0) | 0;
  t = Ya(H | 0, s | 0, t | 0, D | 0) | 0;
  s = D;
  b = t ^ b;
  j = s ^ j;
  H = $a(b | 0, j | 0, 63) | 0;
  z = D;
  j = ab(b | 0, j | 0, 1) | 0;
  b = v;
  c[b >> 2] = j | H;
  c[b + 4 >> 2] = D | z;
  b = k;
  z = c[b >> 2] | 0;
  b = c[b + 4 >> 2] | 0;
  H = n;
  j = c[H >> 2] | 0;
  H = c[H + 4 >> 2] | 0;
  h = Ya(j | 0, H | 0, z | 0, b | 0) | 0;
  o = D;
  b = ab(z | 0, b | 0, 1) | 0;
  b = eb(b & -2 | 0, D & 1 | 0, j | 0, 0) | 0;
  b = Ya(h | 0, o | 0, b | 0, D | 0) | 0;
  o = D;
  C = b ^ C;
  l = o ^ l;
  h = Ya(l | 0, C | 0, p | 0, x | 0) | 0;
  z = D;
  x = ab(p | 0, x | 0, 1) | 0;
  x = eb(x & -2 | 0, D & 1 | 0, l | 0, 0) | 0;
  x = Ya(h | 0, z | 0, x | 0, D | 0) | 0;
  z = D;
  j = x ^ j;
  H = z ^ H;
  h = $a(j | 0, H | 0, 24) | 0;
  p = D;
  H = ab(j | 0, H | 0, 40) | 0;
  H = H | h;
  p = D | p;
  j = Ya(H | 0, p | 0, b | 0, o | 0) | 0;
  G = D;
  o = ab(b | 0, o | 0, 1) | 0;
  o = eb(h | 0, 0, o & -2 | 0, D & 1 | 0) | 0;
  o = Ya(j | 0, G | 0, o | 0, D | 0) | 0;
  G = D;
  c[k >> 2] = o;
  c[k + 4 >> 2] = G;
  l = o ^ l;
  C = G ^ C;
  G = $a(l | 0, C | 0, 16) | 0;
  o = D;
  C = ab(l | 0, C | 0, 48) | 0;
  C = C | G;
  o = D | o;
  c[m >> 2] = C;
  c[m + 4 >> 2] = o;
  o = Ya(C | 0, o | 0, x | 0, z | 0) | 0;
  C = D;
  z = ab(x | 0, z | 0, 1) | 0;
  z = eb(G | 0, 0, z & -2 | 0, D & 1 | 0) | 0;
  z = Ya(o | 0, C | 0, z | 0, D | 0) | 0;
  C = D;
  c[w >> 2] = z;
  c[w + 4 >> 2] = C;
  H = z ^ H;
  p = C ^ p;
  C = $a(H | 0, p | 0, 63) | 0;
  z = D;
  p = ab(H | 0, p | 0, 1) | 0;
  c[n >> 2] = p | C;
  c[n + 4 >> 2] = D | z;
  n = q;
  z = c[n >> 2] | 0;
  n = c[n + 4 >> 2] | 0;
  C = r;
  p = c[C >> 2] | 0;
  C = c[C + 4 >> 2] | 0;
  H = Ya(p | 0, C | 0, z | 0, n | 0) | 0;
  w = D;
  n = ab(z | 0, n | 0, 1) | 0;
  n = eb(n & -2 | 0, D & 1 | 0, p | 0, 0) | 0;
  n = Ya(H | 0, w | 0, n | 0, D | 0) | 0;
  w = D;
  H = I;
  z = n ^ c[H >> 2];
  H = w ^ c[H + 4 >> 2];
  o = Ya(H | 0, z | 0, t | 0, s | 0) | 0;
  G = D;
  s = ab(t | 0, s | 0, 1) | 0;
  s = eb(s & -2 | 0, D & 1 | 0, H | 0, 0) | 0;
  s = Ya(o | 0, G | 0, s | 0, D | 0) | 0;
  G = D;
  p = s ^ p;
  C = G ^ C;
  o = $a(p | 0, C | 0, 24) | 0;
  t = D;
  C = ab(p | 0, C | 0, 40) | 0;
  C = C | o;
  t = D | t;
  p = Ya(C | 0, t | 0, n | 0, w | 0) | 0;
  x = D;
  w = ab(n | 0, w | 0, 1) | 0;
  w = eb(o | 0, 0, w & -2 | 0, D & 1 | 0) | 0;
  w = Ya(p | 0, x | 0, w | 0, D | 0) | 0;
  x = D;
  c[q >> 2] = w;
  c[q + 4 >> 2] = x;
  H = w ^ H;
  z = x ^ z;
  x = $a(H | 0, z | 0, 16) | 0;
  w = D;
  z = ab(H | 0, z | 0, 48) | 0;
  z = z | x;
  w = D | w;
  c[I >> 2] = z;
  c[I + 4 >> 2] = w;
  w = Ya(z | 0, w | 0, s | 0, G | 0) | 0;
  z = D;
  G = ab(s | 0, G | 0, 1) | 0;
  G = eb(x | 0, 0, G & -2 | 0, D & 1 | 0) | 0;
  G = Ya(w | 0, z | 0, G | 0, D | 0) | 0;
  z = D;
  c[B >> 2] = G;
  c[B + 4 >> 2] = z;
  C = G ^ C;
  t = z ^ t;
  z = $a(C | 0, t | 0, 63) | 0;
  G = D;
  t = ab(C | 0, t | 0, 1) | 0;
  c[r >> 2] = t | z;
  c[r + 4 >> 2] = D | G;
  r = u;
  G = c[r >> 2] | 0;
  r = c[r + 4 >> 2] | 0;
  z = v;
  t = c[z >> 2] | 0;
  z = c[z + 4 >> 2] | 0;
  C = Ya(t | 0, z | 0, G | 0, r | 0) | 0;
  B = D;
  r = ab(G | 0, r | 0, 1) | 0;
  r = eb(r & -2 | 0, D & 1 | 0, t | 0, 0) | 0;
  r = Ya(C | 0, B | 0, r | 0, D | 0) | 0;
  B = D;
  C = J;
  G = r ^ c[C >> 2];
  C = B ^ c[C + 4 >> 2];
  w = E;
  x = c[w >> 2] | 0;
  w = c[w + 4 >> 2] | 0;
  s = Ya(C | 0, G | 0, x | 0, w | 0) | 0;
  I = D;
  w = ab(x | 0, w | 0, 1) | 0;
  w = eb(w & -2 | 0, D & 1 | 0, C | 0, 0) | 0;
  w = Ya(s | 0, I | 0, w | 0, D | 0) | 0;
  I = D;
  t = w ^ t;
  z = I ^ z;
  s = $a(t | 0, z | 0, 24) | 0;
  x = D;
  z = ab(t | 0, z | 0, 40) | 0;
  z = z | s;
  x = D | x;
  t = Ya(z | 0, x | 0, r | 0, B | 0) | 0;
  H = D;
  B = ab(r | 0, B | 0, 1) | 0;
  B = eb(s | 0, 0, B & -2 | 0, D & 1 | 0) | 0;
  B = Ya(t | 0, H | 0, B | 0, D | 0) | 0;
  H = D;
  c[u >> 2] = B;
  c[u + 4 >> 2] = H;
  C = B ^ C;
  G = H ^ G;
  H = $a(C | 0, G | 0, 16) | 0;
  B = D;
  G = ab(C | 0, G | 0, 48) | 0;
  G = G | H;
  B = D | B;
  c[J >> 2] = G;
  c[J + 4 >> 2] = B;
  B = Ya(G | 0, B | 0, w | 0, I | 0) | 0;
  G = D;
  I = ab(w | 0, I | 0, 1) | 0;
  I = eb(H | 0, 0, I & -2 | 0, D & 1 | 0) | 0;
  I = Ya(B | 0, G | 0, I | 0, D | 0) | 0;
  G = D;
  c[E >> 2] = I;
  c[E + 4 >> 2] = G;
  z = I ^ z;
  x = G ^ x;
  G = $a(z | 0, x | 0, 63) | 0;
  I = D;
  x = ab(z | 0, x | 0, 1) | 0;
  c[v >> 2] = x | G;
  c[v + 4 >> 2] = D | I;
  v = y;
  I = c[v >> 2] | 0;
  v = c[v + 4 >> 2] | 0;
  G = K;
  x = c[G >> 2] | 0;
  G = c[G + 4 >> 2] | 0;
  z = Ya(x | 0, G | 0, I | 0, v | 0) | 0;
  E = D;
  v = ab(I | 0, v | 0, 1) | 0;
  v = eb(v & -2 | 0, D & 1 | 0, x | 0, 0) | 0;
  v = Ya(z | 0, E | 0, v | 0, D | 0) | 0;
  E = D;
  z = A;
  I = v ^ c[z >> 2];
  z = E ^ c[z + 4 >> 2];
  B = F;
  H = c[B >> 2] | 0;
  B = c[B + 4 >> 2] | 0;
  w = Ya(z | 0, I | 0, H | 0, B | 0) | 0;
  J = D;
  B = ab(H | 0, B | 0, 1) | 0;
  B = eb(B & -2 | 0, D & 1 | 0, z | 0, 0) | 0;
  B = Ya(w | 0, J | 0, B | 0, D | 0) | 0;
  J = D;
  x = B ^ x;
  G = J ^ G;
  w = $a(x | 0, G | 0, 24) | 0;
  H = D;
  G = ab(x | 0, G | 0, 40) | 0;
  G = G | w;
  H = D | H;
  x = Ya(G | 0, H | 0, v | 0, E | 0) | 0;
  C = D;
  E = ab(v | 0, E | 0, 1) | 0;
  E = eb(w | 0, 0, E & -2 | 0, D & 1 | 0) | 0;
  E = Ya(x | 0, C | 0, E | 0, D | 0) | 0;
  C = D;
  c[y >> 2] = E;
  c[y + 4 >> 2] = C;
  z = E ^ z;
  I = C ^ I;
  C = $a(z | 0, I | 0, 16) | 0;
  E = D;
  I = ab(z | 0, I | 0, 48) | 0;
  I = I | C;
  E = D | E;
  c[A >> 2] = I;
  c[A + 4 >> 2] = E;
  E = Ya(I | 0, E | 0, B | 0, J | 0) | 0;
  I = D;
  J = ab(B | 0, J | 0, 1) | 0;
  J = eb(C | 0, 0, J & -2 | 0, D & 1 | 0) | 0;
  J = Ya(E | 0, I | 0, J | 0, D | 0) | 0;
  I = D;
  c[F >> 2] = J;
  c[F + 4 >> 2] = I;
  G = J ^ G;
  H = I ^ H;
  I = $a(G | 0, H | 0, 63) | 0;
  J = D;
  H = ab(G | 0, H | 0, 1) | 0;
  c[K >> 2] = H | I;
  c[K + 4 >> 2] = D | J;
  a = a + 1 | 0;
 } while ((a | 0) != 8);
 xa(d, f);
 ya(d, e);
 i = g;
 return;
}

function pa(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0;
 ba = i;
 i = i + 256 | 0;
 $ = ba + 128 | 0;
 aa = ba;
 f = $;
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
 E = aa + 64 | 0;
 _ = E;
 c[_ >> 2] = -205731576;
 c[_ + 4 >> 2] = 1779033703;
 _ = aa + 72 | 0;
 e = _;
 c[e >> 2] = -2067093701;
 c[e + 4 >> 2] = -1150833019;
 e = aa + 80 | 0;
 f = e;
 c[f >> 2] = -23791573;
 c[f + 4 >> 2] = 1013904242;
 f = aa + 88 | 0;
 m = f;
 c[m >> 2] = 1595750129;
 c[m + 4 >> 2] = -1521486534;
 m = b + 64 | 0;
 l = c[m >> 2] ^ -1377402159;
 m = c[m + 4 >> 2] ^ 1359893119;
 t = aa + 96 | 0;
 v = t;
 c[v >> 2] = l;
 c[v + 4 >> 2] = m;
 v = b + 72 | 0;
 u = c[v >> 2] ^ 725511199;
 v = c[v + 4 >> 2] ^ -1694144372;
 Q = aa + 104 | 0;
 F = Q;
 c[F >> 2] = u;
 c[F + 4 >> 2] = v;
 F = b + 80 | 0;
 C = c[F >> 2] ^ -79577749;
 F = c[F + 4 >> 2] ^ 528734635;
 R = aa + 112 | 0;
 N = R;
 c[N >> 2] = C;
 c[N + 4 >> 2] = F;
 N = b + 88 | 0;
 M = c[N >> 2] ^ 327033209;
 N = c[N + 4 >> 2] ^ 1541459225;
 S = aa + 120 | 0;
 T = S;
 c[T >> 2] = M;
 c[T + 4 >> 2] = N;
 T = aa + 32 | 0;
 U = aa + 8 | 0;
 V = aa + 40 | 0;
 W = aa + 16 | 0;
 X = aa + 48 | 0;
 Y = aa + 24 | 0;
 Z = aa + 56 | 0;
 k = aa;
 h = T;
 s = U;
 q = V;
 B = W;
 z = X;
 L = Y;
 J = Z;
 d = 0;
 g = c[h >> 2] | 0;
 h = c[h + 4 >> 2] | 0;
 j = c[k >> 2] | 0;
 k = c[k + 4 >> 2] | 0;
 n = -205731576;
 o = 1779033703;
 p = c[q >> 2] | 0;
 q = c[q + 4 >> 2] | 0;
 r = c[s >> 2] | 0;
 s = c[s + 4 >> 2] | 0;
 w = -2067093701;
 x = -1150833019;
 y = c[z >> 2] | 0;
 z = c[z + 4 >> 2] | 0;
 A = c[B >> 2] | 0;
 B = c[B + 4 >> 2] | 0;
 G = -23791573;
 H = 1013904242;
 I = c[J >> 2] | 0;
 J = c[J + 4 >> 2] | 0;
 K = c[L >> 2] | 0;
 L = c[L + 4 >> 2] | 0;
 O = 1595750129;
 P = -1521486534;
 do {
  Ea = Ya(g | 0, h | 0, j | 0, k | 0) | 0;
  Fa = $ + (c[1088 + (d << 6) >> 2] << 3) | 0;
  Fa = Ya(Ea | 0, D | 0, c[Fa >> 2] | 0, c[Fa + 4 >> 2] | 0) | 0;
  Ea = D;
  la = l ^ Fa;
  ka = m ^ Ea;
  fa = Ya(ka | 0, la | 0, n | 0, o | 0) | 0;
  ea = D;
  za = g ^ fa;
  ya = h ^ ea;
  xa = $a(za | 0, ya | 0, 24) | 0;
  wa = D;
  ya = ab(za | 0, ya | 0, 40) | 0;
  xa = ya | xa;
  wa = D | wa;
  Ea = Ya(xa | 0, wa | 0, Fa | 0, Ea | 0) | 0;
  Fa = $ + (c[1088 + (d << 6) + 4 >> 2] << 3) | 0;
  Fa = Ya(Ea | 0, D | 0, c[Fa >> 2] | 0, c[Fa + 4 >> 2] | 0) | 0;
  Ea = D;
  ka = ka ^ Fa;
  la = la ^ Ea;
  ya = $a(ka | 0, la | 0, 16) | 0;
  za = D;
  la = ab(ka | 0, la | 0, 48) | 0;
  ya = la | ya;
  za = D | za;
  ea = Ya(ya | 0, za | 0, fa | 0, ea | 0) | 0;
  fa = D;
  xa = xa ^ ea;
  wa = wa ^ fa;
  la = $a(xa | 0, wa | 0, 63) | 0;
  ka = D;
  wa = ab(xa | 0, wa | 0, 1) | 0;
  la = wa | la;
  ka = D | ka;
  wa = Ya(p | 0, q | 0, r | 0, s | 0) | 0;
  xa = $ + (c[1088 + (d << 6) + 8 >> 2] << 3) | 0;
  xa = Ya(wa | 0, D | 0, c[xa >> 2] | 0, c[xa + 4 >> 2] | 0) | 0;
  wa = D;
  Ja = u ^ xa;
  Ia = v ^ wa;
  ca = Ya(Ia | 0, Ja | 0, w | 0, x | 0) | 0;
  da = D;
  ra = p ^ ca;
  qa = q ^ da;
  pa = $a(ra | 0, qa | 0, 24) | 0;
  oa = D;
  qa = ab(ra | 0, qa | 0, 40) | 0;
  pa = qa | pa;
  oa = D | oa;
  wa = Ya(pa | 0, oa | 0, xa | 0, wa | 0) | 0;
  xa = $ + (c[1088 + (d << 6) + 12 >> 2] << 3) | 0;
  xa = Ya(wa | 0, D | 0, c[xa >> 2] | 0, c[xa + 4 >> 2] | 0) | 0;
  wa = D;
  Ia = Ia ^ xa;
  Ja = Ja ^ wa;
  qa = $a(Ia | 0, Ja | 0, 16) | 0;
  ra = D;
  Ja = ab(Ia | 0, Ja | 0, 48) | 0;
  qa = Ja | qa;
  ra = D | ra;
  da = Ya(qa | 0, ra | 0, ca | 0, da | 0) | 0;
  ca = D;
  pa = pa ^ da;
  oa = oa ^ ca;
  Ja = $a(pa | 0, oa | 0, 63) | 0;
  Ia = D;
  oa = ab(pa | 0, oa | 0, 1) | 0;
  Ja = oa | Ja;
  Ia = D | Ia;
  oa = Ya(y | 0, z | 0, A | 0, B | 0) | 0;
  pa = $ + (c[1088 + (d << 6) + 16 >> 2] << 3) | 0;
  pa = Ya(oa | 0, D | 0, c[pa >> 2] | 0, c[pa + 4 >> 2] | 0) | 0;
  oa = D;
  Ba = C ^ pa;
  Aa = F ^ oa;
  va = Ya(Aa | 0, Ba | 0, G | 0, H | 0) | 0;
  ua = D;
  ja = y ^ va;
  ia = z ^ ua;
  ha = $a(ja | 0, ia | 0, 24) | 0;
  ga = D;
  ia = ab(ja | 0, ia | 0, 40) | 0;
  ha = ia | ha;
  ga = D | ga;
  oa = Ya(ha | 0, ga | 0, pa | 0, oa | 0) | 0;
  pa = $ + (c[1088 + (d << 6) + 20 >> 2] << 3) | 0;
  pa = Ya(oa | 0, D | 0, c[pa >> 2] | 0, c[pa + 4 >> 2] | 0) | 0;
  oa = D;
  Aa = Aa ^ pa;
  Ba = Ba ^ oa;
  ia = $a(Aa | 0, Ba | 0, 16) | 0;
  ja = D;
  Ba = ab(Aa | 0, Ba | 0, 48) | 0;
  ia = Ba | ia;
  ja = D | ja;
  ua = Ya(ia | 0, ja | 0, va | 0, ua | 0) | 0;
  va = D;
  ha = ha ^ ua;
  ga = ga ^ va;
  Ba = $a(ha | 0, ga | 0, 63) | 0;
  Aa = D;
  ga = ab(ha | 0, ga | 0, 1) | 0;
  Ba = ga | Ba;
  Aa = D | Aa;
  ga = Ya(I | 0, J | 0, K | 0, L | 0) | 0;
  ha = $ + (c[1088 + (d << 6) + 24 >> 2] << 3) | 0;
  ha = Ya(ga | 0, D | 0, c[ha >> 2] | 0, c[ha + 4 >> 2] | 0) | 0;
  ga = D;
  ta = M ^ ha;
  sa = N ^ ga;
  na = Ya(sa | 0, ta | 0, O | 0, P | 0) | 0;
  ma = D;
  Ha = I ^ na;
  Ga = J ^ ma;
  Ca = $a(Ha | 0, Ga | 0, 24) | 0;
  Da = D;
  Ga = ab(Ha | 0, Ga | 0, 40) | 0;
  Ca = Ga | Ca;
  Da = D | Da;
  ga = Ya(Ca | 0, Da | 0, ha | 0, ga | 0) | 0;
  ha = $ + (c[1088 + (d << 6) + 28 >> 2] << 3) | 0;
  ha = Ya(ga | 0, D | 0, c[ha >> 2] | 0, c[ha + 4 >> 2] | 0) | 0;
  ga = D;
  sa = sa ^ ha;
  ta = ta ^ ga;
  Ga = $a(sa | 0, ta | 0, 16) | 0;
  Ha = D;
  ta = ab(sa | 0, ta | 0, 48) | 0;
  Ga = ta | Ga;
  Ha = D | Ha;
  ma = Ya(Ga | 0, Ha | 0, na | 0, ma | 0) | 0;
  na = D;
  Ca = Ca ^ ma;
  Da = Da ^ na;
  ta = $a(Ca | 0, Da | 0, 63) | 0;
  sa = D;
  Da = ab(Ca | 0, Da | 0, 1) | 0;
  ta = Da | ta;
  sa = D | sa;
  Ea = Ya(Ja | 0, Ia | 0, Fa | 0, Ea | 0) | 0;
  Fa = $ + (c[1088 + (d << 6) + 32 >> 2] << 3) | 0;
  Fa = Ya(Ea | 0, D | 0, c[Fa >> 2] | 0, c[Fa + 4 >> 2] | 0) | 0;
  Ea = D;
  Ga = Ga ^ Fa;
  Ha = Ha ^ Ea;
  va = Ya(Ha | 0, Ga | 0, ua | 0, va | 0) | 0;
  ua = D;
  Ja = Ja ^ va;
  Ia = Ia ^ ua;
  Da = $a(Ja | 0, Ia | 0, 24) | 0;
  Ca = D;
  Ia = ab(Ja | 0, Ia | 0, 40) | 0;
  Da = Ia | Da;
  Ca = D | Ca;
  Ea = Ya(Da | 0, Ca | 0, Fa | 0, Ea | 0) | 0;
  Fa = $ + (c[1088 + (d << 6) + 36 >> 2] << 3) | 0;
  j = Ya(Ea | 0, D | 0, c[Fa >> 2] | 0, c[Fa + 4 >> 2] | 0) | 0;
  k = D;
  Ha = Ha ^ j;
  Ga = Ga ^ k;
  Fa = $a(Ha | 0, Ga | 0, 16) | 0;
  Ea = D;
  Ga = ab(Ha | 0, Ga | 0, 48) | 0;
  M = Ga | Fa;
  N = D | Ea;
  G = Ya(M | 0, N | 0, va | 0, ua | 0) | 0;
  H = D;
  Da = Da ^ G;
  Ca = Ca ^ H;
  ua = $a(Da | 0, Ca | 0, 63) | 0;
  va = D;
  Ca = ab(Da | 0, Ca | 0, 1) | 0;
  p = Ca | ua;
  q = D | va;
  wa = Ya(Ba | 0, Aa | 0, xa | 0, wa | 0) | 0;
  xa = $ + (c[1088 + (d << 6) + 40 >> 2] << 3) | 0;
  xa = Ya(wa | 0, D | 0, c[xa >> 2] | 0, c[xa + 4 >> 2] | 0) | 0;
  wa = D;
  ya = ya ^ xa;
  za = za ^ wa;
  na = Ya(za | 0, ya | 0, ma | 0, na | 0) | 0;
  ma = D;
  Ba = Ba ^ na;
  Aa = Aa ^ ma;
  va = $a(Ba | 0, Aa | 0, 24) | 0;
  ua = D;
  Aa = ab(Ba | 0, Aa | 0, 40) | 0;
  va = Aa | va;
  ua = D | ua;
  wa = Ya(va | 0, ua | 0, xa | 0, wa | 0) | 0;
  xa = $ + (c[1088 + (d << 6) + 44 >> 2] << 3) | 0;
  r = Ya(wa | 0, D | 0, c[xa >> 2] | 0, c[xa + 4 >> 2] | 0) | 0;
  s = D;
  za = za ^ r;
  ya = ya ^ s;
  xa = $a(za | 0, ya | 0, 16) | 0;
  wa = D;
  ya = ab(za | 0, ya | 0, 48) | 0;
  l = ya | xa;
  m = D | wa;
  O = Ya(l | 0, m | 0, na | 0, ma | 0) | 0;
  P = D;
  va = va ^ O;
  ua = ua ^ P;
  ma = $a(va | 0, ua | 0, 63) | 0;
  na = D;
  ua = ab(va | 0, ua | 0, 1) | 0;
  y = ua | ma;
  z = D | na;
  oa = Ya(ta | 0, sa | 0, pa | 0, oa | 0) | 0;
  pa = $ + (c[1088 + (d << 6) + 48 >> 2] << 3) | 0;
  pa = Ya(oa | 0, D | 0, c[pa >> 2] | 0, c[pa + 4 >> 2] | 0) | 0;
  oa = D;
  qa = qa ^ pa;
  ra = ra ^ oa;
  fa = Ya(ra | 0, qa | 0, ea | 0, fa | 0) | 0;
  ea = D;
  ta = ta ^ fa;
  sa = sa ^ ea;
  na = $a(ta | 0, sa | 0, 24) | 0;
  ma = D;
  sa = ab(ta | 0, sa | 0, 40) | 0;
  na = sa | na;
  ma = D | ma;
  oa = Ya(na | 0, ma | 0, pa | 0, oa | 0) | 0;
  pa = $ + (c[1088 + (d << 6) + 52 >> 2] << 3) | 0;
  A = Ya(oa | 0, D | 0, c[pa >> 2] | 0, c[pa + 4 >> 2] | 0) | 0;
  B = D;
  ra = ra ^ A;
  qa = qa ^ B;
  pa = $a(ra | 0, qa | 0, 16) | 0;
  oa = D;
  qa = ab(ra | 0, qa | 0, 48) | 0;
  u = qa | pa;
  v = D | oa;
  n = Ya(u | 0, v | 0, fa | 0, ea | 0) | 0;
  o = D;
  na = na ^ n;
  ma = ma ^ o;
  ea = $a(na | 0, ma | 0, 63) | 0;
  fa = D;
  ma = ab(na | 0, ma | 0, 1) | 0;
  I = ma | ea;
  J = D | fa;
  ga = Ya(la | 0, ka | 0, ha | 0, ga | 0) | 0;
  ha = $ + (c[1088 + (d << 6) + 56 >> 2] << 3) | 0;
  ha = Ya(ga | 0, D | 0, c[ha >> 2] | 0, c[ha + 4 >> 2] | 0) | 0;
  ga = D;
  ia = ia ^ ha;
  ja = ja ^ ga;
  ca = Ya(ja | 0, ia | 0, da | 0, ca | 0) | 0;
  da = D;
  la = la ^ ca;
  ka = ka ^ da;
  fa = $a(la | 0, ka | 0, 24) | 0;
  ea = D;
  ka = ab(la | 0, ka | 0, 40) | 0;
  fa = ka | fa;
  ea = D | ea;
  ga = Ya(fa | 0, ea | 0, ha | 0, ga | 0) | 0;
  ha = $ + (c[1088 + (d << 6) + 60 >> 2] << 3) | 0;
  K = Ya(ga | 0, D | 0, c[ha >> 2] | 0, c[ha + 4 >> 2] | 0) | 0;
  L = D;
  ja = ja ^ K;
  ia = ia ^ L;
  ha = $a(ja | 0, ia | 0, 16) | 0;
  ga = D;
  ia = ab(ja | 0, ia | 0, 48) | 0;
  C = ia | ha;
  F = D | ga;
  w = Ya(C | 0, F | 0, ca | 0, da | 0) | 0;
  x = D;
  fa = fa ^ w;
  ea = ea ^ x;
  da = $a(fa | 0, ea | 0, 63) | 0;
  ca = D;
  ea = ab(fa | 0, ea | 0, 1) | 0;
  g = ea | da;
  h = D | ca;
  d = d + 1 | 0;
 } while ((d | 0) != 12);
 Ha = aa;
 c[Ha >> 2] = j;
 c[Ha + 4 >> 2] = k;
 Ha = T;
 c[Ha >> 2] = g;
 c[Ha + 4 >> 2] = h;
 Ha = t;
 c[Ha >> 2] = l;
 c[Ha + 4 >> 2] = m;
 Ha = E;
 c[Ha >> 2] = n;
 c[Ha + 4 >> 2] = o;
 Ha = U;
 c[Ha >> 2] = r;
 c[Ha + 4 >> 2] = s;
 Ha = V;
 c[Ha >> 2] = p;
 c[Ha + 4 >> 2] = q;
 Ha = Q;
 c[Ha >> 2] = u;
 c[Ha + 4 >> 2] = v;
 Ha = _;
 c[Ha >> 2] = w;
 c[Ha + 4 >> 2] = x;
 Ha = W;
 c[Ha >> 2] = A;
 c[Ha + 4 >> 2] = B;
 Ha = X;
 c[Ha >> 2] = y;
 c[Ha + 4 >> 2] = z;
 Ha = R;
 c[Ha >> 2] = C;
 c[Ha + 4 >> 2] = F;
 Ha = e;
 c[Ha >> 2] = G;
 c[Ha + 4 >> 2] = H;
 Ha = Y;
 c[Ha >> 2] = K;
 c[Ha + 4 >> 2] = L;
 Ha = Z;
 c[Ha >> 2] = I;
 c[Ha + 4 >> 2] = J;
 Ha = S;
 c[Ha >> 2] = M;
 c[Ha + 4 >> 2] = N;
 Ha = f;
 c[Ha >> 2] = O;
 c[Ha + 4 >> 2] = P;
 Ha = b;
 Ia = aa + 64 | 0;
 Ja = k ^ c[Ha + 4 >> 2] ^ c[Ia + 4 >> 2];
 d = b;
 c[d >> 2] = j ^ c[Ha >> 2] ^ c[Ia >> 2];
 c[d + 4 >> 2] = Ja;
 d = 1;
 do {
  Fa = aa + (d << 3) | 0;
  Ja = b + (d << 3) | 0;
  Ga = Ja;
  Ha = aa + (d + 8 << 3) | 0;
  Ia = c[Fa + 4 >> 2] ^ c[Ga + 4 >> 2] ^ c[Ha + 4 >> 2];
  c[Ja >> 2] = c[Fa >> 2] ^ c[Ga >> 2] ^ c[Ha >> 2];
  c[Ja + 4 >> 2] = Ia;
  d = d + 1 | 0;
 } while ((d | 0) != 8);
 i = ba;
 return;
}

function Ta(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[725] | 0;
 if (d >>> 0 < h >>> 0) da();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) da();
 e = a & -8;
 n = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) da();
  if ((k | 0) == (c[726] | 0)) {
   a = n + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    f = j;
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
    if (b >>> 0 < h >>> 0) da();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) da();
   }
   if ((d | 0) == (b | 0)) {
    c[721] = c[721] & ~(1 << e);
    q = k;
    f = j;
    break;
   }
   if ((d | 0) == (a | 0)) g = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) da();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) g = a; else da();
   }
   c[b + 12 >> 2] = d;
   c[g >> 2] = b;
   q = k;
   f = j;
   break;
  }
  g = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   d = k + 16 | 0;
   b = d + 4 | 0;
   a = c[b >> 2] | 0;
   if (!a) {
    a = c[d >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    } else b = d;
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
   if (b >>> 0 < h >>> 0) da(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) da();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) da();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else da();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 3188 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[722] = c[722] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[725] | 0) >>> 0) da();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   d = c[725] | 0;
   if (i >>> 0 < d >>> 0) da();
   c[i + 24 >> 2] = g;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) da(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[725] | 0) >>> 0) da(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    f = j;
    break;
   }
  }
 } else {
  q = d;
  f = e;
 } while (0);
 if (q >>> 0 >= n >>> 0) da();
 a = n + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) da();
 if (!(b & 2)) {
  if ((n | 0) == (c[727] | 0)) {
   p = (c[724] | 0) + f | 0;
   c[724] = p;
   c[727] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[726] | 0)) return;
   c[726] = 0;
   c[723] = 0;
   return;
  }
  if ((n | 0) == (c[726] | 0)) {
   p = (c[723] | 0) + f | 0;
   c[723] = p;
   c[726] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (b & -8) + f | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[n + 8 >> 2] | 0;
   d = c[n + 12 >> 2] | 0;
   a = 2924 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[725] | 0) >>> 0) da();
    if ((c[b + 12 >> 2] | 0) != (n | 0)) da();
   }
   if ((d | 0) == (b | 0)) {
    c[721] = c[721] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[725] | 0) >>> 0) da();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (n | 0)) l = a; else da();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   g = c[n + 24 >> 2] | 0;
   a = c[n + 12 >> 2] | 0;
   do if ((a | 0) == (n | 0)) {
    d = n + 16 | 0;
    b = d + 4 | 0;
    a = c[b >> 2] | 0;
    if (!a) {
     a = c[d >> 2] | 0;
     if (!a) {
      m = 0;
      break;
     } else b = d;
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
    if (b >>> 0 < (c[725] | 0) >>> 0) da(); else {
     c[b >> 2] = 0;
     m = a;
     break;
    }
   } else {
    b = c[n + 8 >> 2] | 0;
    if (b >>> 0 < (c[725] | 0) >>> 0) da();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (n | 0)) da();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (n | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     m = a;
     break;
    } else da();
   } while (0);
   if (g | 0) {
    a = c[n + 28 >> 2] | 0;
    b = 3188 + (a << 2) | 0;
    if ((n | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = m;
     if (!m) {
      c[722] = c[722] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[725] | 0) >>> 0) da();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (n | 0)) c[a >> 2] = m; else c[g + 20 >> 2] = m;
     if (!m) break;
    }
    d = c[725] | 0;
    if (m >>> 0 < d >>> 0) da();
    c[m + 24 >> 2] = g;
    a = n + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) da(); else {
     c[m + 16 >> 2] = b;
     c[b + 24 >> 2] = m;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[725] | 0) >>> 0) da(); else {
     c[m + 20 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[726] | 0)) {
   c[723] = f;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  d = 2924 + (a << 1 << 2) | 0;
  b = c[721] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[721] = b | a;
   o = d;
   p = d + 8 | 0;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[725] | 0) >>> 0) da(); else {
    o = b;
    p = a;
   }
  }
  c[p >> 2] = q;
  c[o + 12 >> 2] = q;
  c[q + 8 >> 2] = o;
  c[q + 12 >> 2] = d;
  return;
 }
 a = f >>> 8;
 if (!a) a = 0; else if (f >>> 0 > 16777215) a = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  a = (p + 245760 | 0) >>> 16 & 2;
  a = 14 - (n | o | a) + (p << a >>> 15) | 0;
  a = f >>> (a + 7 | 0) & 1 | a << 1;
 }
 e = 3188 + (a << 2) | 0;
 c[q + 28 >> 2] = a;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 b = c[722] | 0;
 d = 1 << a;
 do if (!(b & d)) {
  c[722] = b | d;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  b = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
  e = c[e >> 2] | 0;
  while (1) {
   if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
    a = 130;
    break;
   }
   d = e + 16 + (b >>> 31 << 2) | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = 127;
    break;
   } else {
    b = b << 1;
    e = a;
   }
  }
  if ((a | 0) == 127) if (d >>> 0 < (c[725] | 0) >>> 0) da(); else {
   c[d >> 2] = q;
   c[q + 24 >> 2] = e;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = e + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[725] | 0;
   if (b >>> 0 >= p >>> 0 & e >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = e;
    c[q + 24 >> 2] = 0;
    break;
   } else da();
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

function Ia(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0;
 l = i;
 i = i + 32 | 0;
 k = l;
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
  j = b + 11 | 0;
  b = d + -11 | 0;
  if (Ea(e) | 0) {
   f = Ea(e) | 0;
   break;
  }
  g = c[e + 56 >> 2] | 0;
  if ((g | 0) < 0) {
   a[k >> 0] = 45;
   f = k + 1 | 0;
   g = 0 - g | 0;
  } else f = k;
  h = g;
  while (1) {
   f = f + 1 | 0;
   if ((h + 9 | 0) >>> 0 <= 18) break; else h = (h | 0) / 10 | 0;
  }
  a[f >> 0] = 0;
  while (1) {
   f = f + -1 | 0;
   a[f >> 0] = a[2842 + ((g | 0) % 10 | 0) >> 0] | 0;
   if ((g + 9 | 0) >>> 0 <= 18) break; else g = (g | 0) / 10 | 0;
  }
  f = Ra(k) | 0;
  g = j + f | 0;
  h = b - f | 0;
  if (b >>> 0 <= f >>> 0) {
   f = -31;
   break;
  }
  fb(j | 0, k | 0, f + 1 | 0) | 0;
  b = g + 3 | 0;
  d = h + -3 | 0;
  if (h >>> 0 < 4) f = -31; else {
   a[g >> 0] = 36;
   a[g + 1 >> 0] = 109;
   a[g + 2 >> 0] = 61;
   a[g + 3 >> 0] = 0;
   g = c[e + 44 >> 2] | 0;
   if ((g | 0) < 0) {
    a[k >> 0] = 45;
    f = k + 1 | 0;
    g = 0 - g | 0;
   } else f = k;
   h = g;
   while (1) {
    f = f + 1 | 0;
    if ((h + 9 | 0) >>> 0 <= 18) break; else h = (h | 0) / 10 | 0;
   }
   a[f >> 0] = 0;
   while (1) {
    f = f + -1 | 0;
    a[f >> 0] = a[2842 + ((g | 0) % 10 | 0) >> 0] | 0;
    if ((g + 9 | 0) >>> 0 <= 18) break; else g = (g | 0) / 10 | 0;
   }
   f = Ra(k) | 0;
   g = b + f | 0;
   h = d - f | 0;
   if (d >>> 0 <= f >>> 0) {
    f = -31;
    break;
   }
   fb(b | 0, k | 0, f + 1 | 0) | 0;
   b = g + 3 | 0;
   d = h + -3 | 0;
   if (h >>> 0 < 4) f = -31; else {
    a[g >> 0] = 44;
    a[g + 1 >> 0] = 116;
    a[g + 2 >> 0] = 61;
    a[g + 3 >> 0] = 0;
    g = c[e + 40 >> 2] | 0;
    if ((g | 0) < 0) {
     a[k >> 0] = 45;
     f = k + 1 | 0;
     g = 0 - g | 0;
    } else f = k;
    h = g;
    while (1) {
     f = f + 1 | 0;
     if ((h + 9 | 0) >>> 0 <= 18) break; else h = (h | 0) / 10 | 0;
    }
    a[f >> 0] = 0;
    while (1) {
     f = f + -1 | 0;
     a[f >> 0] = a[2842 + ((g | 0) % 10 | 0) >> 0] | 0;
     if ((g + 9 | 0) >>> 0 <= 18) break; else g = (g | 0) / 10 | 0;
    }
    f = Ra(k) | 0;
    g = b + f | 0;
    h = d - f | 0;
    if (d >>> 0 <= f >>> 0) {
     f = -31;
     break;
    }
    fb(b | 0, k | 0, f + 1 | 0) | 0;
    b = g + 3 | 0;
    j = h + -3 | 0;
    if (h >>> 0 < 4) f = -31; else {
     a[g >> 0] = 44;
     a[g + 1 >> 0] = 112;
     a[g + 2 >> 0] = 61;
     a[g + 3 >> 0] = 0;
     g = c[e + 48 >> 2] | 0;
     if ((g | 0) < 0) {
      a[k >> 0] = 45;
      f = k + 1 | 0;
      g = 0 - g | 0;
     } else f = k;
     h = g;
     while (1) {
      f = f + 1 | 0;
      if ((h + 9 | 0) >>> 0 <= 18) break; else h = (h | 0) / 10 | 0;
     }
     a[f >> 0] = 0;
     while (1) {
      f = f + -1 | 0;
      a[f >> 0] = a[2842 + ((g | 0) % 10 | 0) >> 0] | 0;
      if ((g + 9 | 0) >>> 0 <= 18) break; else g = (g | 0) / 10 | 0;
     }
     g = Ra(k) | 0;
     d = b + g | 0;
     f = j - g | 0;
     if (j >>> 0 <= g >>> 0) {
      f = -31;
      break;
     }
     fb(b | 0, k | 0, g + 1 | 0) | 0;
     g = e + 36 | 0;
     if (c[g >> 2] | 0) {
      h = d + 6 | 0;
      b = f + -6 | 0;
      if (f >>> 0 < 7) {
       f = -31;
       break;
      };
      a[d >> 0] = a[2835] | 0;
      a[d + 1 >> 0] = a[2836] | 0;
      a[d + 2 >> 0] = a[2837] | 0;
      a[d + 3 >> 0] = a[2838] | 0;
      a[d + 4 >> 0] = a[2839] | 0;
      a[d + 5 >> 0] = a[2840] | 0;
      a[d + 6 >> 0] = a[2841] | 0;
      f = Ja(h, b, c[e + 32 >> 2] | 0, c[g >> 2] | 0) | 0;
      g = (f | 0) == -1;
      if (g) {
       f = -31;
       break;
      } else {
       d = h + f | 0;
       f = b - (g ? 0 : f) | 0;
      }
     }
     g = e + 20 | 0;
     if (!(c[g >> 2] | 0)) f = 0; else {
      b = d + 1 | 0;
      h = f + -1 | 0;
      if (f >>> 0 < 2) f = -31; else {
       a[d >> 0] = 36;
       a[d + 1 >> 0] = 0;
       f = Ja(b, h, c[e + 16 >> 2] | 0, c[g >> 2] | 0) | 0;
       k = (f | 0) == -1;
       h = h - (k ? 0 : f) | 0;
       f = k ? b : b + f | 0;
       if (k) f = -31; else {
        g = e + 4 | 0;
        if (!(c[g >> 2] | 0)) f = 0; else if (h >>> 0 < 2) f = -31; else {
         a[f >> 0] = 36;
         a[f + 1 >> 0] = 0;
         e = (Ja(f + 1 | 0, h + -1 | 0, c[e >> 2] | 0, c[g >> 2] | 0) | 0) != -1;
         i = l;
         return (e ? 0 : -31) | 0;
        }
       }
      }
     }
    }
   }
  }
 } while (0);
 i = l;
 return f | 0;
}

function bb(a, b, d, e, f) {
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
   return (D = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
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
   return (D = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (D = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> (($(i | 0) | 0) >>> 0);
   return (D = n, f) | 0;
  }
  g = (V(i | 0) | 0) - (V(k | 0) | 0) | 0;
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
   return (D = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (D = n, f) | 0;
 } else {
  if (!g) {
   g = (V(i | 0) | 0) - (V(k | 0) | 0) | 0;
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
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (V(h | 0) | 0) + 33 - (V(k | 0) | 0) | 0;
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
   return (D = o, p) | 0;
  } else {
   p = $(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (D = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = Ya(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Wa(k | 0, d | 0, e | 0, n | 0) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Wa(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = D;
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
 return (D = o, p) | 0;
}

function Oa(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 if (b | 0) {
  r = (c[b + 32 >> 2] | 0) == 1;
  s = b + 16 | 0;
  t = Sa(c[s >> 2] << 3) | 0;
  if (t | 0) {
   if (r) Na(b, d, t);
   l = d + 8 | 0;
   g = a[l >> 0] | 0;
   e = (c[d >> 2] | 0) == 0 & g << 24 >> 24 == 0 ? 2 : 0;
   m = d + 4 | 0;
   n = b + 20 | 0;
   f = c[n >> 2] | 0;
   p = S(f, c[m >> 2] | 0) | 0;
   q = c[s >> 2] | 0;
   g = p + e + (S(g & 255, q) | 0) | 0;
   a : do if (e >>> 0 < q >>> 0) {
    o = b + 24 | 0;
    p = d + 12 | 0;
    q = b + 4 | 0;
    k = g;
    g = (((g >>> 0) % (f >>> 0) | 0 | 0) == 0 ? f + -1 | 0 : -1) + g | 0;
    while (1) {
     j = ((k >>> 0) % (f >>> 0) | 0 | 0) == 1 ? k + -1 | 0 : g;
     if (r) f = t + (e << 3) | 0; else f = (c[b >> 2] | 0) + (j << 10) | 0;
     h = c[f >> 2] | 0;
     f = cb(c[f + 4 >> 2] | 0, 0, c[o >> 2] | 0, 0) | 0;
     g = D;
     if (!(c[d >> 2] | 0)) if (!(a[l >> 0] | 0)) {
      f = c[m >> 2] | 0;
      g = 0;
     }
     c[p >> 2] = e;
     h = Ca(b, d, h, ((g | 0) == 0 ? (f | 0) == (c[m >> 2] | 0) : 0) & 1) | 0;
     i = c[b >> 2] | 0;
     g = eb(c[n >> 2] | 0, 0, f | 0, g | 0) | 0;
     g = i + (g << 10) + (h << 10) | 0;
     h = i + (k << 10) | 0;
     do if ((c[q >> 2] | 0) == 16) La(i + (j << 10) | 0, g, h); else {
      f = i + (j << 10) | 0;
      if (!(c[d >> 2] | 0)) {
       La(f, g, h);
       break;
      } else {
       Ma(f, g, h);
       break;
      }
     } while (0);
     e = e + 1 | 0;
     if (e >>> 0 >= (c[s >> 2] | 0) >>> 0) break a;
     k = k + 1 | 0;
     g = j + 1 | 0;
     f = c[n >> 2] | 0;
    }
   } while (0);
   Ta(t);
  }
 }
 return;
}

function sa(b, d, e, f) {
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
  g = ma(j, d) | 0;
  if ((g | 0) >= 0) {
   g = oa(j, h, 4) | 0;
   if ((g | 0) >= 0) {
    g = oa(j, e, f) | 0;
    if ((g | 0) >= 0) g = qa(j, b, d) | 0;
   }
  }
 } else {
  g = ma(j, 64) | 0;
  a : do if ((g | 0) >= 0) {
   g = oa(j, h, 4) | 0;
   if ((g | 0) >= 0) {
    g = oa(j, e, f) | 0;
    if ((g | 0) >= 0) {
     g = qa(j, m, 64) | 0;
     if ((g | 0) >= 0) {
      f = b;
      j = m;
      k = f + 32 | 0;
      do {
       a[f >> 0] = a[j >> 0] | 0;
       f = f + 1 | 0;
       j = j + 1 | 0;
      } while ((f | 0) < (k | 0));
      e = d + -32 | 0;
      h = b + 32 | 0;
      g = e >>> 0 > 64;
      f = l;
      j = m;
      k = f + 64 | 0;
      do {
       a[f >> 0] = a[j >> 0] | 0;
       f = f + 1 | 0;
       j = j + 1 | 0;
      } while ((f | 0) < (k | 0));
      if (g) do {
       g = ra(m, 64, l, 64, 0, 0) | 0;
       if ((g | 0) < 0) break a;
       f = h;
       j = m;
       k = f + 32 | 0;
       do {
        a[f >> 0] = a[j >> 0] | 0;
        f = f + 1 | 0;
        j = j + 1 | 0;
       } while ((f | 0) < (k | 0));
       e = e + -32 | 0;
       h = h + 32 | 0;
       g = e >>> 0 > 64;
       f = l;
       j = m;
       k = f + 64 | 0;
       do {
        a[f >> 0] = a[j >> 0] | 0;
        f = f + 1 | 0;
        j = j + 1 | 0;
       } while ((f | 0) < (k | 0));
      } while (g);
      g = ra(m, e, l, 64, 0, 0) | 0;
      if ((g | 0) >= 0) fb(h | 0, m | 0, e | 0) | 0;
     }
    }
   }
  } while (0);
 }
 i = n;
 return g | 0;
}

function oa(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 if (!d) e = 0; else if ((a | 0) == 0 | (b | 0) == 0) e = -1; else {
  l = a + 80 | 0;
  if ((c[l >> 2] | 0) == 0 & (c[l + 4 >> 2] | 0) == 0) {
   l = a + 224 | 0;
   e = c[l >> 2] | 0;
   i = e + d | 0;
   if (i >>> 0 > 128) {
    f = 128 - e | 0;
    fb(a + 96 + e | 0, b | 0, f | 0) | 0;
    j = a + 64 | 0;
    m = j;
    h = c[m >> 2] | 0;
    m = c[m + 4 >> 2] | 0;
    g = Ya(h | 0, m | 0, 128, 0) | 0;
    k = j;
    c[k >> 2] = g;
    c[k + 4 >> 2] = D;
    k = a + 72 | 0;
    g = k;
    g = Ya((m >>> 0 > 4294967295 | (m | 0) == -1 & h >>> 0 > 4294967167) & 1 | 0, 0, c[g >> 2] | 0, c[g + 4 >> 2] | 0) | 0;
    h = k;
    c[h >> 2] = g;
    c[h + 4 >> 2] = D;
    pa(a, a + 96 | 0);
    c[l >> 2] = 0;
    d = d - f | 0;
    f = b + f | 0;
    if (d >>> 0 > 128) {
     g = i + -257 & -128;
     h = g + 256 - e | 0;
     e = f;
     while (1) {
      n = j;
      m = c[n >> 2] | 0;
      n = c[n + 4 >> 2] | 0;
      o = Ya(m | 0, n | 0, 128, 0) | 0;
      f = j;
      c[f >> 2] = o;
      c[f + 4 >> 2] = D;
      f = k;
      f = Ya((n >>> 0 > 4294967295 | (n | 0) == -1 & m >>> 0 > 4294967167) & 1 | 0, 0, c[f >> 2] | 0, c[f + 4 >> 2] | 0) | 0;
      m = k;
      c[m >> 2] = f;
      c[m + 4 >> 2] = D;
      pa(a, e);
      d = d + -128 | 0;
      if (d >>> 0 <= 128) break; else e = e + 128 | 0;
     }
     d = i + -256 - g | 0;
     b = b + h | 0;
     e = c[l >> 2] | 0;
    } else {
     b = f;
     e = 0;
    }
   }
   fb(a + 96 + e | 0, b | 0, d | 0) | 0;
   c[l >> 2] = (c[l >> 2] | 0) + d;
   e = 0;
  } else e = -1;
 }
 return e | 0;
}

function qa(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = i;
 i = i + 64 | 0;
 j = l;
 g = j;
 h = g + 64 | 0;
 do {
  a[g >> 0] = 0;
  g = g + 1 | 0;
 } while ((g | 0) < (h | 0));
 if ((b | 0) == 0 | (d | 0) == 0) e = -1; else {
  k = b + 228 | 0;
  if ((c[k >> 2] | 0) >>> 0 > e >>> 0) e = -1; else {
   f = b + 80 | 0;
   h = f;
   if ((c[h >> 2] | 0) == 0 & (c[h + 4 >> 2] | 0) == 0) {
    e = c[b + 224 >> 2] | 0;
    h = b + 64 | 0;
    m = h;
    m = Ya(c[m >> 2] | 0, c[m + 4 >> 2] | 0, e | 0, 0) | 0;
    n = D;
    c[h >> 2] = m;
    c[h + 4 >> 2] = n;
    h = b + 72 | 0;
    g = h;
    g = Ya((n >>> 0 < 0 | (n | 0) == 0 & m >>> 0 < e >>> 0) & 1 | 0, 0, c[g >> 2] | 0, c[g + 4 >> 2] | 0) | 0;
    c[h >> 2] = g;
    c[h + 4 >> 2] = D;
    if (a[b + 232 >> 0] | 0) {
     n = b + 88 | 0;
     c[n >> 2] = -1;
     c[n + 4 >> 2] = -1;
    }
    g = f;
    c[g >> 2] = -1;
    c[g + 4 >> 2] = -1;
    _a(b + 96 + e | 0, 0, 128 - e | 0) | 0;
    e = b + 96 | 0;
    pa(b, e);
    g = j;
    f = b;
    h = g + 64 | 0;
    do {
     a[g >> 0] = a[f >> 0] | 0;
     g = g + 1 | 0;
     f = f + 1 | 0;
    } while ((g | 0) < (h | 0));
    fb(d | 0, j | 0, c[k >> 2] | 0) | 0;
    g = j;
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

function va(a) {
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

function Da(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 32 | 0;
 j = s + 16 | 0;
 k = s;
 a : do if (!b) d = -33; else {
  p = b + 24 | 0;
  d = c[p >> 2] | 0;
  if (!d) d = -33; else {
   q = Ua(d, 4) | 0;
   if (!q) d = -22; else {
    r = b + 8 | 0;
    b : do if (c[r >> 2] | 0) {
     l = b + 28 | 0;
     m = k + 4 | 0;
     n = k + 8 | 0;
     o = k + 12 | 0;
     h = 0;
     c : while (1) {
      g = 0;
      do {
       if (!d) d = 0; else {
        f = g & 255;
        e = 0;
        do {
         d = c[l >> 2] | 0;
         if (e >>> 0 >= d >>> 0) if (Pa(c[q + (e - d << 2) >> 2] | 0) | 0) break c;
         c[k >> 2] = h;
         c[m >> 2] = e;
         a[n >> 0] = f;
         c[o >> 2] = 0;
         c[j >> 2] = c[k >> 2];
         c[j + 4 >> 2] = c[k + 4 >> 2];
         c[j + 8 >> 2] = c[k + 8 >> 2];
         c[j + 12 >> 2] = c[k + 12 >> 2];
         Oa(b, j);
         e = e + 1 | 0;
         d = c[p >> 2] | 0;
        } while (e >>> 0 < d >>> 0);
       }
       e = d - (c[l >> 2] | 0) | 0;
       if (e >>> 0 < d >>> 0) do {
        if (Pa(c[q + (e << 2) >> 2] | 0) | 0) {
         d = -33;
         break a;
        }
        e = e + 1 | 0;
        d = c[p >> 2] | 0;
       } while (e >>> 0 < d >>> 0);
       g = g + 1 | 0;
      } while (g >>> 0 < 4);
      h = h + 1 | 0;
      if (h >>> 0 >= (c[r >> 2] | 0) >>> 0) break b;
     }
     Ta(q);
     d = -33;
     break a;
    } while (0);
    Ta(q);
    d = 0;
   }
  }
 } while (0);
 i = s;
 return d | 0;
}

function Fa(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 p = i;
 i = i + 1024 | 0;
 k = p;
 l = e + 24 | 0;
 if (c[l >> 2] | 0) {
  m = b + 64 | 0;
  n = b + 68 | 0;
  o = e + 20 | 0;
  j = 0;
  do {
   a[m >> 0] = 0;
   a[m + 1 >> 0] = 0;
   a[m + 2 >> 0] = 0;
   a[m + 3 >> 0] = 0;
   a[n >> 0] = j;
   a[n + 1 >> 0] = j >> 8;
   a[n + 2 >> 0] = j >> 16;
   a[n + 3 >> 0] = j >> 24;
   sa(k, 1024, b, 72) | 0;
   g = S(c[o >> 2] | 0, j) | 0;
   h = c[e >> 2] | 0;
   f = 0;
   do {
    r = k + (f << 3) | 0;
    s = r;
    r = r + 4 | 0;
    r = d[r >> 0] | d[r + 1 >> 0] << 8 | d[r + 2 >> 0] << 16 | d[r + 3 >> 0] << 24;
    q = h + (g << 10) + (f << 3) | 0;
    c[q >> 2] = d[s >> 0] | d[s + 1 >> 0] << 8 | d[s + 2 >> 0] << 16 | d[s + 3 >> 0] << 24;
    c[q + 4 >> 2] = r;
    f = f + 1 | 0;
   } while ((f | 0) != 128);
   a[m >> 0] = 1;
   a[m + 1 >> 0] = 0;
   a[m + 2 >> 0] = 0;
   a[m + 3 >> 0] = 0;
   sa(k, 1024, b, 72) | 0;
   g = (S(c[o >> 2] | 0, j) | 0) + 1 | 0;
   h = c[e >> 2] | 0;
   f = 0;
   do {
    r = k + (f << 3) | 0;
    q = r;
    r = r + 4 | 0;
    r = d[r >> 0] | d[r + 1 >> 0] << 8 | d[r + 2 >> 0] << 16 | d[r + 3 >> 0] << 24;
    s = h + (g << 10) + (f << 3) | 0;
    c[s >> 2] = d[q >> 0] | d[q + 1 >> 0] << 8 | d[q + 2 >> 0] << 16 | d[q + 3 >> 0] << 24;
    c[s + 4 >> 2] = r;
    f = f + 1 | 0;
   } while ((f | 0) != 128);
   j = j + 1 | 0;
  } while (j >>> 0 < (c[l >> 2] | 0) >>> 0);
 }
 Aa(k, 1024);
 i = p;
 return;
}

function na(b, e, f, g) {
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
   _a(b | 0, 0, 240) | 0;
   h = b + 80 | 0;
   c[h >> 2] = -1;
   c[h + 4 >> 2] = -1;
   h = -1;
   break;
  }
  if ((f | 0) == 0 | (g + -1 | 0) >>> 0 > 63) {
   _a(b | 0, 0, 240) | 0;
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
  _a(h | 0, 0, 176) | 0;
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
  _a(m + g | 0, 0, (g >>> 0 > 127 ? 0 : 128 - g | 0) | 0) | 0;
  fb(m | 0, f | 0, g | 0) | 0;
  oa(b, m, 128) | 0;
  h = 0;
 } while (0);
 i = n;
 return h | 0;
}

function Ga(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 g = j + 240 | 0;
 if (!((a | 0) == 0 | (b | 0) == 0)) {
  ma(h, 64) | 0;
  c[g >> 2] = c[b + 48 >> 2];
  oa(h, g, 4) | 0;
  c[g >> 2] = c[b + 4 >> 2];
  oa(h, g, 4) | 0;
  c[g >> 2] = c[b + 44 >> 2];
  oa(h, g, 4) | 0;
  c[g >> 2] = c[b + 40 >> 2];
  oa(h, g, 4) | 0;
  c[g >> 2] = c[b + 56 >> 2];
  oa(h, g, 4) | 0;
  c[g >> 2] = d;
  oa(h, g, 4) | 0;
  d = b + 12 | 0;
  c[g >> 2] = c[d >> 2];
  oa(h, g, 4) | 0;
  e = b + 8 | 0;
  f = c[e >> 2] | 0;
  if (f | 0) {
   oa(h, f, c[d >> 2] | 0) | 0;
   if (c[b + 68 >> 2] & 1 | 0) {
    Aa(c[e >> 2] | 0, c[d >> 2] | 0);
    c[d >> 2] = 0;
   }
  }
  d = b + 20 | 0;
  c[g >> 2] = c[d >> 2];
  oa(h, g, 4) | 0;
  e = c[b + 16 >> 2] | 0;
  if (e | 0) oa(h, e, c[d >> 2] | 0) | 0;
  d = b + 28 | 0;
  c[g >> 2] = c[d >> 2];
  oa(h, g, 4) | 0;
  e = b + 24 | 0;
  f = c[e >> 2] | 0;
  if (f | 0) {
   oa(h, f, c[d >> 2] | 0) | 0;
   if (c[b + 68 >> 2] & 2 | 0) {
    Aa(c[e >> 2] | 0, c[d >> 2] | 0);
    c[d >> 2] = 0;
   }
  }
  e = b + 36 | 0;
  c[g >> 2] = c[e >> 2];
  oa(h, g, 4) | 0;
  d = c[b + 32 >> 2] | 0;
  if (d | 0) oa(h, d, c[e >> 2] | 0) | 0;
  qa(h, a, 64) | 0;
 }
 i = j;
 return;
}

function Na(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 n = i;
 i = i + 4096 | 0;
 j = n + 3072 | 0;
 k = n + 2048 | 0;
 l = n + 1024 | 0;
 m = n;
 wa(j, 0);
 wa(k, 0);
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
     o = Ya(c[o >> 2] | 0, c[o + 4 >> 2] | 0, 1, 0) | 0;
     a = h;
     c[a >> 2] = o;
     c[a + 4 >> 2] = D;
     wa(m, 0);
     wa(l, 0);
     Ma(j, k, m);
     Ma(j, m, l);
     a = c[g >> 2] | 0;
    }
    p = l + (b << 3) | 0;
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

function Ea(a) {
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

function ma(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 k = i;
 i = i + 64 | 0;
 j = k;
 do if (!b) f = -1; else {
  if ((e + -1 | 0) >>> 0 > 63) {
   _a(b | 0, 0, 240) | 0;
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
  _a(f | 0, 0, 176) | 0;
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

function ua(a, b, d, e, f, g, h, j, k, l, m, n, o) {
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
 p = r;
 do if (k >>> 0 < 4) a = -2; else {
  q = Sa(k) | 0;
  if (!q) a = -22; else {
   c[p >> 2] = q;
   c[p + 4 >> 2] = k;
   c[p + 8 >> 2] = e;
   c[p + 12 >> 2] = f;
   c[p + 16 >> 2] = g;
   c[p + 20 >> 2] = h;
   h = p + 24 | 0;
   c[h >> 2] = 0;
   c[h + 4 >> 2] = 0;
   c[h + 8 >> 2] = 0;
   c[h + 12 >> 2] = 0;
   c[p + 40 >> 2] = a;
   c[p + 44 >> 2] = b;
   c[p + 48 >> 2] = d;
   c[p + 52 >> 2] = d;
   c[p + 60 >> 2] = 0;
   c[p + 64 >> 2] = 0;
   c[p + 68 >> 2] = 4;
   c[p + 56 >> 2] = o;
   a = ta(p, n) | 0;
   if (a | 0) {
    Aa(q, k);
    Ta(q);
    break;
   }
   if (j | 0) fb(j | 0, q | 0, k | 0) | 0;
   if ((l | 0) != 0 & (m | 0) != 0) if (Ia(l, m, p, n) | 0) {
    Aa(q, k);
    Aa(l, m);
    Ta(q);
    a = -31;
    break;
   }
   Aa(q, k);
   Ta(q);
   a = 0;
  }
 } while (0);
 i = r;
 return a | 0;
}

function Ca(b, d, e, f) {
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
  g = S(c[b + 16 >> 2] | 0, g & 255) | 0;
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
 eb(e | 0, 0, e | 0, 0) | 0;
 eb(g | 0, 0, D | 0, 0) | 0;
 f = Wa(g + -1 | 0, 0, D | 0, 0) | 0;
 e = D;
 if (i) {
  g = 0;
  h = 0;
 } else {
  g = a[d + 8 >> 0] | 0;
  if (g << 24 >> 24 == 3) {
   g = 0;
   h = 0;
  } else {
   g = S(c[b + 16 >> 2] | 0, (g & 255) + 1 | 0) | 0;
   h = 0;
  }
 }
 i = Ya(f | 0, e | 0, g | 0, h | 0) | 0;
 b = cb(i | 0, D | 0, c[b + 20 >> 2] | 0, 0) | 0;
 return b | 0;
}

function Ba(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 n = i;
 i = i + 2048 | 0;
 j = n;
 k = n + 1024 | 0;
 if ((a | 0) != 0 & (b | 0) != 0) {
  l = c[b >> 2] | 0;
  m = c[b + 20 >> 2] | 0;
  fb(j | 0, l + (m << 10) + -1024 | 0, 1024) | 0;
  f = c[b + 24 >> 2] | 0;
  if (f >>> 0 > 1) {
   g = m + -1 | 0;
   d = 1;
   do {
    h = g + (S(m, d) | 0) | 0;
    e = 0;
    do {
     q = l + (h << 10) + (e << 3) | 0;
     o = j + (e << 3) | 0;
     r = o;
     p = c[r + 4 >> 2] ^ c[q + 4 >> 2];
     c[o >> 2] = c[r >> 2] ^ c[q >> 2];
     c[o + 4 >> 2] = p;
     e = e + 1 | 0;
    } while ((e | 0) != 128);
    d = d + 1 | 0;
   } while (d >>> 0 < f >>> 0);
  }
  fb(k | 0, j | 0, 1024) | 0;
  sa(c[a >> 2] | 0, c[a + 4 >> 2] | 0, k, 1024) | 0;
  Aa(j, 1024);
  Aa(k, 1024);
  d = c[b >> 2] | 0;
  if (d | 0 ? (c[a + 68 >> 2] & 1 | 0) != 0 : 0) {
   Aa(d, c[b + 12 >> 2] << 10);
   d = c[b >> 2] | 0;
  }
  Ta(d);
 }
 i = n;
 return;
}

function Ja(b, c, e, f) {
 b = b | 0;
 c = c | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 g = ((f >>> 0) / 3 | 0) << 2;
 switch (((f >>> 0) % 3 | 0) & 3) {
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
   i = 0;
   c = 0;
   do {
    f = f + -1 | 0;
    h = e;
    e = e + 1 | 0;
    i = d[h >> 0] | 0 | i << 8;
    c = c + 8 | 0;
    if (c >>> 0 > 5) while (1) {
     c = c + -6 | 0;
     h = b + 1 | 0;
     a[b >> 0] = Ka(i >>> c & 63) | 0;
     if (c >>> 0 > 5) b = h; else {
      b = h;
      break;
     }
    }
   } while ((f | 0) != 0);
   if (c) {
    a[b >> 0] = Ka(i << 6 - c & 63) | 0;
    b = b + 1 | 0;
   }
  }
  a[b >> 0] = 0;
 } else g = -1;
 return g | 0;
}

function ta(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0;
 f = i;
 i = i + 48 | 0;
 e = f;
 d = Ea(a) | 0;
 if (!d) if (b >>> 0 > 1) d = -26; else {
  g = c[a + 44 >> 2] | 0;
  d = c[a + 48 >> 2] | 0;
  j = d << 3;
  h = d << 2;
  g = ((g >>> 0 < j >>> 0 ? j : g) >>> 0) / (h >>> 0) | 0;
  h = S(g, h) | 0;
  c[e + 4 >> 2] = c[a + 56 >> 2];
  c[e >> 2] = 0;
  c[e + 8 >> 2] = c[a + 40 >> 2];
  c[e + 12 >> 2] = h;
  c[e + 16 >> 2] = g;
  c[e + 20 >> 2] = g << 2;
  c[e + 24 >> 2] = d;
  c[e + 28 >> 2] = c[a + 52 >> 2];
  c[e + 32 >> 2] = b;
  d = Ha(e, a) | 0;
  if (!d) {
   d = Da(e) | 0;
   if (!d) {
    Ba(a, e);
    d = 0;
   }
  }
 }
 i = f;
 return d | 0;
}

function ra(a, b, c, d, e, f) {
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
 do if ((c | 0) == 0 & (d | 0) != 0) a = -1; else if ((a | 0) == 0 | (b + -1 | 0) >>> 0 > 63) a = -1; else {
  g = (f | 0) != 0;
  if (f >>> 0 > 64 | (e | 0) == 0 & g) a = -1; else {
   if (g) {
    if ((na(h, b, e, f) | 0) < 0) {
     a = -1;
     break;
    }
   } else if ((ma(h, b) | 0) < 0) {
    a = -1;
    break;
   }
   if ((oa(h, c, d) | 0) < 0) a = -1; else a = qa(h, a, b) | 0;
  }
 } while (0);
 i = j;
 return a | 0;
}

function fb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return aa(b | 0, d | 0, e | 0) | 0;
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

function Ra(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = f;
  while (1) {
   if (!(a[b >> 0] | 0)) {
    b = d;
    break a;
   }
   b = b + 1 | 0;
   d = b;
   if (!(d & 3)) {
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

function _a(b, d, e) {
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

function db(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = S(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + (S(e, d) | 0) | 0;
 e = b >>> 16;
 b = S(e, f) | 0;
 return (D = (a >>> 16) + (S(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function Ha(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = i;
 i = i + 80 | 0;
 e = f;
 if ((a | 0) == 0 | (b | 0) == 0) d = -25; else {
  d = za(a, c[a + 12 >> 2] | 0) | 0;
  if (!d) {
   Ga(e, b, c[a + 32 >> 2] | 0);
   Aa(e + 64 | 0, 8);
   Fa(e, a);
   Aa(e, 72);
   d = 0;
  }
 }
 i = f;
 return d | 0;
}

function Xa(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = a + 15 & -16 | 0;
 b = c[k >> 2] | 0;
 a = b + d | 0;
 if ((d | 0) > 0 & (a | 0) < (b | 0) | (a | 0) < 0) {
  _() | 0;
  ca(12);
  return -1;
 }
 c[k >> 2] = a;
 if ((a | 0) > (Z() | 0)) if (!(Y() | 0)) {
  ca(12);
  c[k >> 2] = b;
  return -1;
 }
 return b | 0;
}

function Ua(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 if (!a) d = 0; else {
  d = S(b, a) | 0;
  if ((b | a) >>> 0 > 65535) d = ((d >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? d : -1;
 }
 a = Sa(d) | 0;
 if (!a) return a | 0;
 if (!(c[a + -4 >> 2] & 3)) return a | 0;
 _a(a | 0, 0, d | 0) | 0;
 return a | 0;
}

function ya(a, b) {
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

function Ka(a) {
 a = a | 0;
 var b = 0, c = 0;
 c = (a + 65510 | 0) >>> 8 & 255;
 b = (a + 65484 | 0) >>> 8;
 return (0 - (a ^ 62) | 0) >>> 8 & 43 ^ 43 | c & a + 65 | (0 - (a ^ 63) | 0) >>> 8 & 47 ^ 47 | b & a + 71 & (c ^ 255) | (a + 65474 | 0) >>> 8 & a + 252 & (b & 255 ^ 255) | 0;
}

function za(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 do if (!a) a = -22; else {
  d = b << 10;
  if (b | 0) if (((d >>> 0) / (b >>> 0) | 0 | 0) != 1024) {
   a = -22;
   break;
  }
  d = Sa(d) | 0;
  c[a >> 2] = d;
  a = (d | 0) == 0 ? -22 : 0;
 } while (0);
 return a | 0;
}

function cb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 bb(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Aa(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 f = d + 4 | 0;
 e = d;
 c[f >> 2] = a;
 c[e >> 2] = b;
 _a(c[f >> 2] | 0, 0, c[e >> 2] | 0) | 0;
 i = d;
 return;
}

function eb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = db(e, f) | 0;
 a = D;
 return (D = (S(b, f) | 0) + (S(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function ab(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 D = a << c - 32;
 return 0;
}

function $a(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = 0;
 return b >>> c - 32 | 0;
}

function Va() {}
function Wa(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function Ya(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function Qa() {
 var a = 0;
 if (!0) a = 2880; else a = c[(Za() | 0) + 64 >> 2] | 0;
 return a | 0;
}
function fa(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function xa(a, b) {
 a = a | 0;
 b = b | 0;
 fb(a | 0, b | 0, 1024) | 0;
 return;
}

function wa(a, b) {
 a = a | 0;
 b = b | 0;
 _a(a | 0, b | 0, 1024) | 0;
 return;
}

function ja(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function ia(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Pa(a) {
 a = a | 0;
 return ba(a | 0, 0) | 0;
}

function ka(a) {
 a = a | 0;
 D = a;
}

function ha(a) {
 a = a | 0;
 i = a;
}

function la() {
 return D | 0;
}

function ga() {
 return i | 0;
}

function Za() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 return {
  ___muldsi3: db,
  _sbrk: Xa,
  _i64Subtract: Wa,
  _free: Ta,
  ___udivmoddi4: bb,
  _i64Add: Ya,
  _pthread_self: Za,
  _memset: _a,
  _malloc: Sa,
  _memcpy: fb,
  ___muldi3: eb,
  _argon2_hash: ua,
  _bitshift64Lshr: $a,
  ___uremdi3: cb,
  _argon2_error_message: va,
  _bitshift64Shl: ab,
  runPostSets: Va,
  stackAlloc: fa,
  stackSave: ga,
  stackRestore: ha,
  establishStackSpace: ia,
  setThrew: ja,
  setTempRet0: ka,
  getTempRet0: la
 };
})


;