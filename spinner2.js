//process.stdout.write('hello from spinner2.js... \rheyyy\n');

let num =100;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for(let i = 0; i < spinner.length; i++) {
for(const r of spinner) {
    setTimeout(() => {
        process.stdout.write(spinner[i] + 'hello from spinner2.js... \rheyyy\n');
    }, num)
    i = i + 1;
    num = num + 200;
}}

// setTimeout(() => {
//     process.stdout.write('\r|hello from spinner1.js... \rheyyy\n');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/hello from spinner1.js... \rheyyy\n');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-hello from spinner1.js... \rheyyy\n');
//   }, 500);
  
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\ hello from spinner1.js... \rheyyy\n'); 
//   }, 700);
  