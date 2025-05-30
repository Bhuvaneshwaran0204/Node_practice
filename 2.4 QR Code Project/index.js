// * text=auto eol=lf

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Please enter the URL you want to convert to a QR code:',
    },
  ])
  .then((answers) => {
    console.log(`You entered: ${answers.url}`);

    var qr_svg = qr.image(answers.url);
    qr_svg.pipe(fs.createWriteStream('qr-img.png'));


    fs.writeFile("url.txt", answers.url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
      // Here you can use the qr-image package to generate a QR code
    });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
