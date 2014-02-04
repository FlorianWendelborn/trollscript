if (!process.argv[2]){console.log('no input file');process.exit(1)};
if (!process.argv[3]){console.log('no output file');process.exit(1)};

var file = require('fs').readFileSync(process.argv[2])+'';

var o = 'Tro',i=-1;
while (i++ < file.length) {
	switch (file[i]) {
		case '>':o+='ooo';break;
		case '<':o+='ool';break;
		case '+':o+='olo';break;
		case '-':o+='oll';break;
		case '.':o+='loo';break;
		case ',':o+='lol';break;
		case '[':o+='llo';break;
		case ']':o+='lll';break;
	}
}
o+='ll.';

require('fs').writeFileSync(process.argv[3],o);