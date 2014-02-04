var code = require('fs').readFileSync(process.argv[2])+"",
	input = process.argv[3]||'',
	ii = 0,
	pptr = [0],
	ptr = 0,
	i = -1,
	c = '';

while (i++*3 < code.length) {
	switch ([code[i*3],code[i*3+1],code[i*3+2]].join('')) {
		case 'Tro':break;
		case 'ooo':c+='ptr++;pptr[ptr]=(!pptr[ptr])?0:pptr[ptr];';break;
		case 'ool':c+='ptr--;';break;
		case 'olo':c+='++pptr[ptr];';break;
		case 'oll':c+='--pptr[ptr];';break;
		case 'loo':c+='process.stdout.write(String.fromCharCode(pptr[ptr]));';break;
		case 'lol':c+='pptr[ptr]=input.charCodeAt(ii++)||0;';break;
		case 'llo':c+='while(pptr[ptr] > 0){';break;
		case 'lll':c+='}';
		case 'll.':break;
	}
}

eval(c);