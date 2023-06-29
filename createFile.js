import fs from "fs";

fs.writeFile("./src/file.txt", "ciao ragazzi", (e, a) => {
  if (a) console.log(a);
  else {
    console.log("il file è stato creato!");
  }
});
