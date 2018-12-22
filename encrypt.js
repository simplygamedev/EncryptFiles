'use strict';

/* This script can be used to encrypt any files besides those with .mp4 extension */

const encryptor = require('file-encryptor'),
fs = require('fs'),
files = fs.readdirSync('./FilesToEncrypt/'),
key = '53c82eba31f6d416f331de9162ebe997', //Hash Key, this same key is used to decode encrypted files in decrypt.js
options = { algorithm: 'aes256' };

console.log('\nencrypt.js is executing....');

for(let i in files) {
	//The line below replaces special characters such as '_' inside the file name with an empty string
	const name = files[i].replace(/\.[^/.]+$/, ""); 

	if(!files[i].includes('.dat')) {
		const extend = getExtension(files[i]);
		encryptor.encryptFile( './FilesToEncrypt/' + files[i], //Specifies the file we wish to encrypt
							   './FilesToEncrypt/'+ extend + //This extend variable is required to know the filetype of the encrypted file
							   '_encrypted_' + name + //Name of the file
							   '.dat', 
							   key, 
							   options, 
							   (err) => { 
									if(err){ throw err; }
		  
									fs.unlinkSync('./FilesToEncrypt/'+ files[i]); //Removes the unencrypted file
									console.log('\n File ' + name + ' has been encrypted.');

								});
	}
}

function getExtension(filename){
	/*Searches the last index of '.' to find the filetype */
	return filename.substring( filename.lastIndexOf('.') + 1 );
}

