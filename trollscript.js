var code = require('fs').readFileSync(process.argv[2])+"",
	input = process.argv[3]||'',
	ii = 0,
	pptr = [0],
	ptr = 0,
	i = -1,
	c = '';

while (i++ < code.length) {
	switch (code[i]) {
		case '>':c+='ptr++;pptr[ptr]=(!pptr[ptr])?0:pptr[ptr];';break;
		case '<':c+='ptr--;';break;
		case '+':c+='++pptr[ptr];';break;
		case '-':c+='--pptr[ptr];';break;
		case '.':c+='process.stdout.write(String.fromCharCode(pptr[ptr]));';break;
		case ',':c+='pptr[ptr]=input.charCodeAt(ii++)||0;';break;
		case '[':c+='while(pptr[ptr] > 0){';break;
		case ']':c+='}';
	}
}

eval(c);