/* ============================================================
   png-size.mjs — the dimensions of a PNG, read from the file itself

   Two scripts need this and they need it for opposite reasons, which is
   why it lives on its own rather than in either of them: build_og.mjs
   reports what it has just written, check_ogtags.mjs verifies what got
   committed. If the reader lived inside the generator, the gate would be
   asking the generator whether the generator was right.

   Twenty-four bytes are enough: the eight of the signature, the four of
   the IHDR length, the four of its name, then two big-endian words. We do
   not read the whole file — the answer is in its first line, and these
   files are hundreds of kilobytes.
   ============================================================ */
import { openSync, readSync, closeSync } from "node:fs";

const PODPIS = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

/**
 * Reads the dimensions out of the PNG header.
 *
 * The caller checks that the file exists. A missing or unreadable path
 * throws here rather than returning null, on purpose: "there is no file" and
 * "the file is not a PNG" are different questions with different answers,
 * and folding the first into the second would let a wrong path look like a
 * wrong format.
 *
 * @param {string} sciezka  path to an existing, readable file
 * @returns {{szerokosc:number, wysokosc:number}|null} null when the file is
 *          not a PNG, is truncated, or does not open with an IHDR chunk
 * @throws {Error} when the file cannot be opened at all
 */
export function wymiaryPng(sciezka) {
  const buf = Buffer.alloc(24);
  const fd = openSync(sciezka, "r");
  try {
    if (readSync(fd, buf, 0, 24, 0) < 24) return null;
  } finally {
    closeSync(fd);
  }
  if (!buf.subarray(0, 8).equals(PODPIS)) return null;
  if (buf.subarray(12, 16).toString("ascii") !== "IHDR") return null;
  return { szerokosc: buf.readUInt32BE(16), wysokosc: buf.readUInt32BE(20) };
}
