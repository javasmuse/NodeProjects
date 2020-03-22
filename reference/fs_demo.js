const fs = require("fs");
const path = require("path");

// create folder
// optional - function(error)  OR error =>

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

// create and write to a file
// fs.writeFile(
//   path.join(__dirname, '/test', 'helloBlog.txt'),
//   'Yoda fly the falcon',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');
//   }
// );

// // append to already written file
// fs.writeFile(
//   path.join(__dirname, "/test", "helloBlogTwo.txt"),
//   "Chewy baby very hairy.",
//   err => {
//     if (err) throw err;
//     console.log("File written to...");

//     fs.appendFile(
//       path.join(__dirname, "/test", "helloBlogTwo.txt"),
//       "His friend Yoda baby is only fuzzy.",
//       err => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

// // read file
// fs.readFile(path.join(__dirname, "/test", "helloBlogTwo.txt"), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//rename file
fs.rename(
  path.join(__dirname, "/test", "BlogTwo.txt"),
  path.join(__dirname, "/test", "BlogTwoAgain.txt"),
  err => {if (err) throw err; 
console.log('File renamed...')}
);
