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
const done = [];
for (let i = 0; i < subDomains.length; i++) {
  fs.writeFile(
    `${subDomains[i].name}.${mainDomain}.conf`,
    `<VirtualHost *:80>
    ServerName ${subDomains[i].name}.${mainDomain}
    DocumentRoot /var/www/${subDomains[i].name}.${mainDomain}

    ProxyPreserveHost On

    ProxyPass / http://127.0.0.1:${subDomains[i].port}/
    ProxyPassReverse / http://127.0.0.1:${subDomains[i].port}/

    ErrorLog ${APACHE_LOG_DIR}/${subDomains[i].name}.${mainDomain}_error.log
    CustomLog ${APACHE_LOG_DIR}/${subDomains[i].name}.${mainDomain}_access.log combined

    RewriteEngine On
    RewriteCond %{SERVER_NAME} =${subDomains[i].name}.${mainDomain}
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>



`,
    (error) => {
      // console.log(error);
    },
  );

  done.push(`${subDomains[i].name}.${mainDomain}`);
}
let certbotCreate = `sudo certbot --apache -d `;
done.forEach((domain, index) => {
  certbotCreate += `${domain}.${mainDomain}${done.length - 1 === index ? "" : ","}`;
});

console.log("RUN THIS TO CREATE A SSL CERTIFICATE");
console.log(
  "==================================================================",
);
console.log(certbotCreate);
console.log(
  "==================================================================",
);
