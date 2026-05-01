/** @format */

import fs from "fs";

const mainDomain = "example.com";

const subDomains = [
  { name: "mohamed-akram", port: 5000 },
  { name: "hello", port: 5003 },
  { name: "some", port: 5002 },
  { name: "test", port: 5001 },
];
const done = [];
for (let i = 0; i < subDomains.length; i++) {
  fs.writeFile(
    `${subDomains[i].name}.${mainDomain}.conf`,
    `${subDomains[i].port} mohamed akram mahmoud`,
    (error) => {
      // console.log(error);
    },
  );

  done.push(`${subDomains[i].name}.${mainDomain}`);
}
let certbotCreate = `sudo certbot --apache -d `;
done.forEach((domain, index) => {
  certbotCreate += `${domain}${done.length - 1 === index ? "" : ","}`;
});

console.log("RUN THIS TO CREATE A SSL CERTIFICATE");
console.log(
  "==================================================================",
);
console.log(certbotCreate);
console.log(
  "==================================================================",
);
