
class Cache{
	constructor(name){
		this.name = name;
		this.checkUpdateCounter = {};
	}

	readStorage(){
		let s = localStorage.getItem(this.name);
		if(!s){
			localStorage.setItem(this.name, JSON.stringify({}));
			return {};
		}else{
			return JSON.parse(s);
		}
	}

	get(url, interval, force = false){
		console.log("cache get(" + interval + "): " + url);
		let s = this.readStorage();
		return new Promise((resolve, reject) => {
			if(typeof s[url] != 'undefined'){
				if(!force && s[url] == 'updating'){
					if(typeof this.checkUpdateCounter[url] == 'undefined') this.checkUpdateCounter[url] = 0;
					this.checkUpdateCounter[url]++;
					console.log({url, c: this.checkUpdateCounter[url]});
					if(this.checkUpdateCounter[url] >= 10){
						resolve(this.get(url, interval, true));
					}else{
						setTimeout(()=>{
							resolve(this.get(url, interval));
						}, 1000);
					}
					return;
				}
				if(!force && ( ( new Date().getTime() - s[url].update_time ) < ( interval ) ) ){
					resolve(s[url].v);
					return;
				}
			}
			s[url] = 'updating';
			localStorage.setItem(this.name, JSON.stringify(s));
			$.get(url).done( (data) => {
				s[url] = {
					v: data,
					update_time: new Date().getTime()
				};
				localStorage.setItem(this.name, JSON.stringify(s));
				resolve(data);
			}).fail(() => {
				reject();
			});
		});
	}
}
