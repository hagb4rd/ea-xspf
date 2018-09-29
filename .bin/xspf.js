#!/usr/bin/env node

var es=require('event-stream');
var $=require('ea-lib');
var xspf=require('../templates/playlist');

process.openStdin()
	.pipe(es.split(/\r?\n/))
	.pipe(es.writeArray((err, data)=>{
		try {
			if(process.argv.includes("-s",2)) {
				var data=$.shuffle(data);
			}
			console.log(xspf(data));
		} catch(err) {
			console.log(err);
			process.exit(1);
		}
	}));