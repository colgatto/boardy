class WiConvert extends Widget{
	
	constructor(id, opt){
		super(id, opt);

		
		let contFrom = $('<div class="col-md-6"></div>');
		this.selFrom = $('<input type="number" min="0" max="64" class="form-control convFrom" placeholder="From Base">');
		contFrom.append(this.selFrom);

		let contTo = $('<div class="col-md-6"></div>');
		this.selTo = $('<input type="number" min="0" max="64" class="form-control convTo" placeholder="To Base">');
		contTo.append(this.selTo);
		
		let cont = $('<div class="row"></div>');
		cont.append(contFrom);
		cont.append(contTo);

		this.optLi = $('<li></li>');
		this.optLi.append(cont);

		this.text_imp = $('<input class="form-control txtImp" placeholder="Input">');
		this.text_out = $('<input class="form-control txtOut" placeholder="Output">');

		this.optLi.append(this.text_imp);
		this.optLi.append(this.text_out);

		
		$(document).on('input', '.convFrom', () => { this.doConvert(); });
		$(document).on('input', '.convTo', () => { this.doConvert(); });
		$(document).on('input', '.txtImp', () => { this.doConvert(); });

	}

	doConvert(){
		let from = this.selFrom.val();
		let to = this.selTo.val();
		let data = this.text_imp.val();
		this.text_out.val(this.convertBase(data, from, to));
	}

	convertBase(str, fromBase, toBase) {

		const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";
	
		const add = (x, y, base) => {
			let z = [];
			const n = Math.max(x.length, y.length);
			let carry = 0;
			let i = 0;
			while (i < n || carry) {
				const xi = i < x.length ? x[i] : 0;
				const yi = i < y.length ? y[i] : 0;
				const zi = carry + xi + yi;
				z.push(zi % base);
				carry = Math.floor(zi / base);
				i++;
			}
			return z;
		}
	
		const multiplyByNumber = (num, x, base) => {
			if (num < 0) return null;
			if (num == 0) return [];
	
			let result = [];
			let power = x;
			while (true) {
				num & 1 && (result = add(result, power, base));
				num = num >> 1;
				if (num === 0) break;
				power = add(power, power, base);
			}
	
			return result;
		}
	
		const parseToDigitsArray = (str, base) => {
			const digits = str.split('');
			let arr = [];
			for (let i = digits.length - 1; i >= 0; i--) {
				const n = DIGITS.indexOf(digits[i])
				if (n == -1) return null;
				arr.push(n);
			}
			return arr;
		}
	
		const digits = parseToDigitsArray(str, fromBase);
		if (digits === null) return null;
	
		let outArray = [];
		let power = [1];
		for (let i = 0; i < digits.length; i++) {
			digits[i] && (outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase));
			power = multiplyByNumber(fromBase, power, toBase);
		}
	
		let out = '';
		for (let i = outArray.length - 1; i >= 0; i--){
			out +=  DIGITS[outArray[i]];
		}
	
		return out;
	}

	async setup(){
		this.render(this.optLi);
	}
}

W.WiConvert = {
	cls: WiConvert,
	editor: (data) => {
		return {
			title: 'Base Converter',
			type: 'object',
			format: 'grid',
			/*
			properties: {
				example_row: {
					title: 'example_row',
					type: 'string'
				}
			}
			*/
		};
	}
};