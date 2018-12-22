'use strict';

var encryptor = require('file-encryptor');
var fs = require('fs');
var tmp = require('tmp');

const readline = require('readline');

var files = fs.readdirSync('./FilesToEncrypt/');
var key = '53c82eba31f6d416f331de9162ebe997';
var options = { algorithm: 'aes256' };

var _path = require('path');
var path = '/Decrypted/';

var tmpobj = tmp.dirSync({unsafeCleanup: true});

console.log("\nDirectory: ", tmpobj.name);

(async function(){

	(function(){

		for(let i in files) {	
			if(files[i].includes('.dat')) {
				const extension = getExtension(files[i]);

				const filepath = './FilesToEncrypt/' + files[i];
				const newpath = tmpobj.name + '\\' + getName(files[i])+'.' + extension;

				console.log('Base path of decrypted file:', tmpobj.name); 

				new Promise((resolve,reject)=>{
					encryptor.decryptFile(filepath, newpath, key, options, function(err) {
						if(err) {
							reject(err);
						}
						else {
							// Decryption complete.
							console.log('\n\n'+ filepath + ' has been decrypted!');
							resolve();
						}
					});
				});		
			}	
		}	

	})();

const ans = askQuestion("");
/* Make sure the command line is closed by pressing Enter key inside command line until it closes itself
   Do not close the command line any other way else the UNENCRYPTED files will remain inside the tmp folder */

})();

async function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

	return new Promise(resolve => {
		rl.question(query, ans => {
			rl.close();	
        	resolve(ans);
		})
	})
	.then(() => {
		tmpobj.removeCallback();      
		console.log('\nDone!');
	});
}

function getExtension(filename) {
	for(let i=0; i<filename.length; i++){
		if(filename[i] === '_'){ 
			return filename.substring(0,i); 
		}
	}
}

function getName(filename) {
	let k = 0;

	for(let i=0; i<filename.length; i++) {
		if(filename[i] === '_') { k++; }
		if(k>=2) {
			const extensionpos = filename.indexOf('.');
			return filename.substring(i+1,extensionpos);
		}
	}
}

