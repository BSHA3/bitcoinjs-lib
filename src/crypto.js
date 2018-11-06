const createHash = require('create-hash')
const sha3 = require('js-sha3').sha3_256

function ripemd160 (buffer) {
  return createHash('rmd160').update(buffer).digest()
}

function sha1 (buffer) {
  return createHash('sha1').update(buffer).digest()
}

function sha256 (buffer) {
  return createHash('sha256').update(buffer).digest()
}

function sha3 (buffer) {
  return sha3.create().update(buffer).digest()
}

function hash160 (buffer) {
  return ripemd160(sha256(buffer))
}

// TODO plug in
function hash360 (buffer) {
  return ripemd160(sha3(buffer))
}

function hash256 (buffer) {
  return sha256(sha256(buffer))
}

function hash3 (buffer) {
  return sha3(sha3(buffer))
}

module.exports = {
  hash160: hash160,
  hash360: hash360,
  hash256: hash256,
  hash3: hash3,
  ripemd160: ripemd160,
  sha1: sha1,
  sha256: sha256,
  sha3: sha3
}
