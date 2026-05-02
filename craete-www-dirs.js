/** @format */

import fs from "fs";

const mainDomain = "nodeteam.site";

const subDomains = [
  { name: "univolta", port: 5004 },
  { name: "bayet-car", port: 5005 },
  { name: "farah", port: 5006 },
  { name: "jadwa", port: 5007 },
  { name: "tovo-b", port: 5008 }, 
  { name: "stock-ship", port: 5009 },
  { name: "green-back", port: 5010 },
  { name: "akfeek-backend", port: 5011 },
  { name: "epri-b", port: 5012 },
  { name: "shike", port: 5013 },
  { name: "qeema-track", port: 5014 },
  { name: "back-studify", port: 5015 },
  { name: "b-ahlamy", port: 5016 },
  { name: "ahlamy", port: 5017 },
  { name: "123-a1-back", port: 5018 },
];
for (let i = 0; i < subDomains.length; i++) {
  fs.mkdir(
    `/var/www/${subDomains[i].name}.${mainDomain}`,
    (error) => {
      console.log(error);
    }
  );
}
console.log("Directories created successfully");