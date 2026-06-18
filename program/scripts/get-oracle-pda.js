#!/usr/bin/env node
// Run from repo root: node program/scripts/get-oracle-pda.js
// Or from program/: node scripts/get-oracle-pda.js
const anchor = require("@coral-xyz/anchor");
const { PublicKey } = anchor.web3;
const ORACLE_PROGRAM_ID = new PublicKey("29h3DFB1hzbvuNk2ouWo5qzFukCbfPFWH5XKDBCL3bfJ");
const [oraclePda] = PublicKey.findProgramAddressSync(
  [Buffer.from("oracle_state")],
  ORACLE_PROGRAM_ID
);
console.log("ORACLE_STATE_PUBKEY=" + oraclePda.toBase58());
