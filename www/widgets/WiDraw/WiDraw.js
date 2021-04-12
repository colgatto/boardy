class WiDraw extends Widget{
	
	constructor(id, opt){
		super(id, opt);

		this.lastX;
		this.lastY;
		this.mousePressed = false;

		let self = this;

		this.cnv = $('<canvas height="300" width="300"></canvas>');
		this.ctx = this.cnv[0].getContext('2d');

		this.initStore();
		if(typeof this.store.v == 'undefined')
			this.store.v = '';

		if(this.store.v){
			var img = new Image();
			img.onload = () => {
				this.cnv[0].width = img.width;
				this.cnv[0].height = img.height;
				this.ctx.drawImage(img, 0, 0);
			};
		    img.src = this.store.v;
		}

		this.cnv.on('mousedown', function (e) {
			self.mousePressed = true;
			self.draw(
				( 300 / $(this).width() ) * ( e.pageX - $(this).offset().left ),
				( 300 / $(this).height() ) * ( e.pageY - $(this).offset().top ),
				false);
		}).on('mouseup', function (e) {
			self.mousePressed = false;
		}).on('mousemove', function (e) {
			if (self.mousePressed) {
				self.draw(
					( 300 / $(this).width() ) * ( e.pageX - $(this).offset().left ),
					( 300 / $(this).height() ) * ( e.pageY - $(this).offset().top ),
					true);
			}
		}).on('mouseleave', function (e) {
			self.mousePressed = false;
		});

		this.btn_clear = $('<button>X</button>');
		this.btn_clear.on('click', function (e) {
			self.clearArea();
		});
		
		this.sel_size = $('<select>'
			+ '<option value="1">1</option>'
			+ '<option value="3">3</option>'
			+ '<option value="5" selected="selected">5</option>'
			+ '<option value="7">7</option>'
			+ '<option value="9">9</option>'
		+ '</select>');

		this.sel_color = $('<select style="width: 56px;">'
			+ '<option value="black" selected="selected">black</option>'
			+ '<option value="blue">blue</option>'
			+ '<option value="red">red</option>'
			+ '<option value="green">green</option>'
			+ '<option value="yellow">yellow</option>'
			+ '<option value="gray">gray</option>'
		+ '</select>');
		
	}
	
	setup(){
		let cont = $('<div></div>');
		if(this.opt.icon)
			cont.append('<i class="' + this.opt.icon + '"></i>');
		cont.append('<span>' + this.opt.title + '</span>');
		cont.append(this.btn_clear);
		cont.append(this.sel_size);
		cont.append(this.sel_color);

		this.renderHeader(cont);
		this.render(this.cnv);
	}

	clearArea() {
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	draw(x, y, isDown) {
		if (isDown) {
			this.ctx.beginPath();
			this.ctx.strokeStyle = this.sel_color.val();
			this.ctx.lineWidth = this.sel_size.val();
			this.ctx.lineJoin = "round";
			this.ctx.moveTo(this.lastX, this.lastY);
			this.ctx.lineTo(x, y);
			this.ctx.closePath();
			this.ctx.stroke();
		}
		this.lastX = x;
		this.lastY = y;
		this.store.v = this.cnv[0].toDataURL();
		this.saveStore();
	}

	domHeader(){
		
	}
}

W.WiDraw = {
	cls: WiDraw
};