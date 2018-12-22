https://www.quora.com/What-is-the-most-convenient-way-to-encrypt-video-files-via-Node-js-AES
https://www.npmjs.com/package/file-encryptor

var encryptor = require('file-encryptor');
 
var key = 'SUPER-SECRET-KEY';
var options = { algorithm: 'aes256' };
 
encryptor.encryptFile('myVideo.mp4', 'encrypted.dat', key, options, function(err) {
    // Decryption complete
});
 
//...
 
encryptor.decryptFile('encrypted.dat', 'outputfile.mp4', key, options, function(err) {
    // Encryption complete
});

//require('child_process').execFile('start ""'+ '"'+tmpobj.name+ '\\' + '"'); 

______________________________________________________________________________________________

https://www.npmjs.com/package/tmp
https://stackoverflow.com/questions/9238953/how-to-empty-recyclebin-through-command-prompt

var tmp = require('tmp');
 
tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;
 
  console.log('File: ', path);
  console.log('Filedescriptor: ', fd);
  
  // If we don't need the file anymore we could manually call the cleanupCallback
  // But that is not necessary if we didn't pass the keep option because the library
  // will clean after itself.
  cleanupCallback();
});

// <!-- Encrypt.js is used to encrypt specified files that are not .dat -->
// <!-- Decrypt.js is used to decrypt specified files that are .dat -->
// <!-- These node scripts encrypt and decrypt w.r.t. the child 'FilesToEncrypt' folder of the node project folder -->
// <!-- Can be changed manually inside the scripts according to preference -->