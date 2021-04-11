class WiOpenW extends Widget{
	openWeatherIcon = {
		"01d": "fas fa-sun",
		"02d": "fas fa-cloud-sun",
		"03d": "fas fa-cloud",
		"04d": "fas fa-cloud",
		"09d": "fas fa-cloud-showers-heavy",
		"10d": "fas fa-cloud-sun-rain",
		"11d": "fas fa-bolt",
		"13d": "fas fa-snowflake",
		"50d": "fas fa-smog",
		"01n": "fas fa-moon",
		"02n": "fas fa-cloud-moon",
		"03n": "fas fa-cloud",
		"04n": "fas fa-cloud",
		"09n": "fas fa-cloud-showers-heavy",
		"10n": "fas fa-cloud-moon-rain",
		"11n": "fas fa-bolt",
		"13n": "fas fa-snowflake",
		"50n": "fas fa-smog"
	}
	dayName = [
		'Domenica',
		'Lunedì',
		'Martedì',
		'Mercoledì',
		'Giovedì',
		'Venerdì',
		'Sabato'
	]
	constructor(id, opt){
		super(id, opt);
	}

	async update(){
		return new Promise( (resolve) => {
			boardy_cache.get('https://api.openweathermap.org/data/2.5/forecast?q=' + this.opt.location + '&appid=' + this.opt.apiKey, 3600 * 1000).then((data) => {
				let lis = {};
				for (let i = 0; i < data.list.length; i++) {
					const e = data.list[i];
					let sp_date = e.dt_txt.split(' ');
					let date = sp_date[0];
					let time = sp_date[1];
					if(typeof lis[date] == 'undefined'){
						lis[date] = [];
					}
					lis[date].push({
						time: time,
						desc: e.weather[0].description,
						icon: this.openWeatherIcon[e.weather[0].icon]
					});
				}
				let dates = Object.keys(lis);
				let output = ['<li><table>'];
				output.push('<tr><th class="lbl-day">Time: </th><th>00</th><th>03</th><th>06</th><th>09</th><th>12</th><th>15</th><th>18</th><th>21</th></tr>')
				for (let i = 0; i < dates.length; i++) {
					const d = dates[i];
					const dd = new Date(d);
					let labelDay = this.dayName[dd.getDay()] + ' ' + dd.getDate();
					let trRow = '<tr><td class="lbl-day">' + labelDay + '</td>';
					if(i == 0)
						for (let j = 0, l = 8 - lis[d].length; j < l; j++)
							trRow += '<td></td>';
					for (let j = 0; j < lis[d].length; j++)
						trRow += '<td><i class="' + lis[d][j].icon + '"></i></td>';
					if(i == dates.length-1)
						for (let j = 0, l = 8 - lis[d].length; j < l; j++)
							trRow += '<td></td>';
					trRow += '</div></td></tr>';
					output.push(trRow);
				}
				output.push('</table></li>');
				
				this.render(output.join(''));
				
				resolve();
			});
		});
	}
};

W.WiOpenW = {
	cls: WiOpenW,
	editor: (data) => ({
		title: 'OpenWeather',
		type: 'object',
		format: 'grid',
		properties: {
			location: {
				title: 'Location',
				type: 'string'
			},
			apiKey: {
				title: 'API key',
				type: 'string'
			}
		},
	})
};