const makeSchema = () => {
	let data = {
		colors: [
			"red",
			"green",
			"blue",
			"yellow",
			"cyan",
			"magenta",
			"white",
			"gray",
			"black"
		],
		faIcons: [
			[
				"",
				""
			],
			[
				"500px",
				"fab fa-500px"
			],
			[
				"accessible-icon",
				"fab fa-accessible-icon"
			],
			[
				"accusoft",
				"fab fa-accusoft"
			],
			[
				"acquisitions-incorporated",
				"fab fa-acquisitions-incorporated"
			],
			[
				"ad",
				"fas fa-ad"
			],
			[
				"address-book",
				"fas fa-address-book"
			],
			[
				"address-book",
				"far fa-address-book"
			],
			[
				"address-card",
				"fas fa-address-card"
			],
			[
				"address-card",
				"far fa-address-card"
			],
			[
				"adjust",
				"fas fa-adjust"
			],
			[
				"adn",
				"fab fa-adn"
			],
			[
				"adobe",
				"fab fa-adobe"
			],
			[
				"adversal",
				"fab fa-adversal"
			],
			[
				"affiliatetheme",
				"fab fa-affiliatetheme"
			],
			[
				"air-freshener",
				"fas fa-air-freshener"
			],
			[
				"airbnb",
				"fab fa-airbnb"
			],
			[
				"algolia",
				"fab fa-algolia"
			],
			[
				"align-center",
				"fas fa-align-center"
			],
			[
				"align-justify",
				"fas fa-align-justify"
			],
			[
				"align-left",
				"fas fa-align-left"
			],
			[
				"align-right",
				"fas fa-align-right"
			],
			[
				"alipay",
				"fab fa-alipay"
			],
			[
				"allergies",
				"fas fa-allergies"
			],
			[
				"amazon",
				"fab fa-amazon"
			],
			[
				"amazon-pay",
				"fab fa-amazon-pay"
			],
			[
				"ambulance",
				"fas fa-ambulance"
			],
			[
				"american-sign-language-interpreting",
				"fas fa-american-sign-language-interpreting"
			],
			[
				"amilia",
				"fab fa-amilia"
			],
			[
				"anchor",
				"fas fa-anchor"
			],
			[
				"android",
				"fab fa-android"
			],
			[
				"angellist",
				"fab fa-angellist"
			],
			[
				"angle-double-down",
				"fas fa-angle-double-down"
			],
			[
				"angle-double-left",
				"fas fa-angle-double-left"
			],
			[
				"angle-double-right",
				"fas fa-angle-double-right"
			],
			[
				"angle-double-up",
				"fas fa-angle-double-up"
			],
			[
				"angle-down",
				"fas fa-angle-down"
			],
			[
				"angle-left",
				"fas fa-angle-left"
			],
			[
				"angle-right",
				"fas fa-angle-right"
			],
			[
				"angle-up",
				"fas fa-angle-up"
			],
			[
				"angry",
				"fas fa-angry"
			],
			[
				"angry",
				"far fa-angry"
			],
			[
				"angrycreative",
				"fab fa-angrycreative"
			],
			[
				"angular",
				"fab fa-angular"
			],
			[
				"ankh",
				"fas fa-ankh"
			],
			[
				"app-store",
				"fab fa-app-store"
			],
			[
				"app-store-ios",
				"fab fa-app-store-ios"
			],
			[
				"apper",
				"fab fa-apper"
			],
			[
				"apple",
				"fab fa-apple"
			],
			[
				"apple-alt",
				"fas fa-apple-alt"
			],
			[
				"apple-pay",
				"fab fa-apple-pay"
			],
			[
				"archive",
				"fas fa-archive"
			],
			[
				"archway",
				"fas fa-archway"
			],
			[
				"arrow-alt-circle-down",
				"fas fa-arrow-alt-circle-down"
			],
			[
				"arrow-alt-circle-down",
				"far fa-arrow-alt-circle-down"
			],
			[
				"arrow-alt-circle-left",
				"fas fa-arrow-alt-circle-left"
			],
			[
				"arrow-alt-circle-left",
				"far fa-arrow-alt-circle-left"
			],
			[
				"arrow-alt-circle-right",
				"fas fa-arrow-alt-circle-right"
			],
			[
				"arrow-alt-circle-right",
				"far fa-arrow-alt-circle-right"
			],
			[
				"arrow-alt-circle-up",
				"fas fa-arrow-alt-circle-up"
			],
			[
				"arrow-alt-circle-up",
				"far fa-arrow-alt-circle-up"
			],
			[
				"arrow-circle-down",
				"fas fa-arrow-circle-down"
			],
			[
				"arrow-circle-left",
				"fas fa-arrow-circle-left"
			],
			[
				"arrow-circle-right",
				"fas fa-arrow-circle-right"
			],
			[
				"arrow-circle-up",
				"fas fa-arrow-circle-up"
			],
			[
				"arrow-down",
				"fas fa-arrow-down"
			],
			[
				"arrow-left",
				"fas fa-arrow-left"
			],
			[
				"arrow-right",
				"fas fa-arrow-right"
			],
			[
				"arrow-up",
				"fas fa-arrow-up"
			],
			[
				"arrows-alt",
				"fas fa-arrows-alt"
			],
			[
				"arrows-alt-h",
				"fas fa-arrows-alt-h"
			],
			[
				"arrows-alt-v",
				"fas fa-arrows-alt-v"
			],
			[
				"artstation",
				"fab fa-artstation"
			],
			[
				"assistive-listening-systems",
				"fas fa-assistive-listening-systems"
			],
			[
				"asterisk",
				"fas fa-asterisk"
			],
			[
				"asymmetrik",
				"fab fa-asymmetrik"
			],
			[
				"at",
				"fas fa-at"
			],
			[
				"atlas",
				"fas fa-atlas"
			],
			[
				"atlassian",
				"fab fa-atlassian"
			],
			[
				"atom",
				"fas fa-atom"
			],
			[
				"audible",
				"fab fa-audible"
			],
			[
				"audio-description",
				"fas fa-audio-description"
			],
			[
				"autoprefixer",
				"fab fa-autoprefixer"
			],
			[
				"avianex",
				"fab fa-avianex"
			],
			[
				"aviato",
				"fab fa-aviato"
			],
			[
				"award",
				"fas fa-award"
			],
			[
				"aws",
				"fab fa-aws"
			],
			[
				"baby",
				"fas fa-baby"
			],
			[
				"baby-carriage",
				"fas fa-baby-carriage"
			],
			[
				"backspace",
				"fas fa-backspace"
			],
			[
				"backward",
				"fas fa-backward"
			],
			[
				"bacon",
				"fas fa-bacon"
			],
			[
				"bacteria",
				"fas fa-bacteria"
			],
			[
				"bacterium",
				"fas fa-bacterium"
			],
			[
				"bahai",
				"fas fa-bahai"
			],
			[
				"balance-scale",
				"fas fa-balance-scale"
			],
			[
				"balance-scale-left",
				"fas fa-balance-scale-left"
			],
			[
				"balance-scale-right",
				"fas fa-balance-scale-right"
			],
			[
				"ban",
				"fas fa-ban"
			],
			[
				"band-aid",
				"fas fa-band-aid"
			],
			[
				"bandcamp",
				"fab fa-bandcamp"
			],
			[
				"barcode",
				"fas fa-barcode"
			],
			[
				"bars",
				"fas fa-bars"
			],
			[
				"baseball-ball",
				"fas fa-baseball-ball"
			],
			[
				"basketball-ball",
				"fas fa-basketball-ball"
			],
			[
				"bath",
				"fas fa-bath"
			],
			[
				"battery-empty",
				"fas fa-battery-empty"
			],
			[
				"battery-full",
				"fas fa-battery-full"
			],
			[
				"battery-half",
				"fas fa-battery-half"
			],
			[
				"battery-quarter",
				"fas fa-battery-quarter"
			],
			[
				"battery-three-quarters",
				"fas fa-battery-three-quarters"
			],
			[
				"battle-net",
				"fab fa-battle-net"
			],
			[
				"bed",
				"fas fa-bed"
			],
			[
				"beer",
				"fas fa-beer"
			],
			[
				"behance",
				"fab fa-behance"
			],
			[
				"behance-square",
				"fab fa-behance-square"
			],
			[
				"bell",
				"fas fa-bell"
			],
			[
				"bell",
				"far fa-bell"
			],
			[
				"bell-slash",
				"fas fa-bell-slash"
			],
			[
				"bell-slash",
				"far fa-bell-slash"
			],
			[
				"bezier-curve",
				"fas fa-bezier-curve"
			],
			[
				"bible",
				"fas fa-bible"
			],
			[
				"bicycle",
				"fas fa-bicycle"
			],
			[
				"biking",
				"fas fa-biking"
			],
			[
				"bimobject",
				"fab fa-bimobject"
			],
			[
				"binoculars",
				"fas fa-binoculars"
			],
			[
				"biohazard",
				"fas fa-biohazard"
			],
			[
				"birthday-cake",
				"fas fa-birthday-cake"
			],
			[
				"bitbucket",
				"fab fa-bitbucket"
			],
			[
				"bitcoin",
				"fab fa-bitcoin"
			],
			[
				"bity",
				"fab fa-bity"
			],
			[
				"black-tie",
				"fab fa-black-tie"
			],
			[
				"blackberry",
				"fab fa-blackberry"
			],
			[
				"blender",
				"fas fa-blender"
			],
			[
				"blender-phone",
				"fas fa-blender-phone"
			],
			[
				"blind",
				"fas fa-blind"
			],
			[
				"blog",
				"fas fa-blog"
			],
			[
				"blogger",
				"fab fa-blogger"
			],
			[
				"blogger-b",
				"fab fa-blogger-b"
			],
			[
				"bluetooth",
				"fab fa-bluetooth"
			],
			[
				"bluetooth-b",
				"fab fa-bluetooth-b"
			],
			[
				"bold",
				"fas fa-bold"
			],
			[
				"bolt",
				"fas fa-bolt"
			],
			[
				"bomb",
				"fas fa-bomb"
			],
			[
				"bone",
				"fas fa-bone"
			],
			[
				"bong",
				"fas fa-bong"
			],
			[
				"book",
				"fas fa-book"
			],
			[
				"book-dead",
				"fas fa-book-dead"
			],
			[
				"book-medical",
				"fas fa-book-medical"
			],
			[
				"book-open",
				"fas fa-book-open"
			],
			[
				"book-reader",
				"fas fa-book-reader"
			],
			[
				"bookmark",
				"fas fa-bookmark"
			],
			[
				"bookmark",
				"far fa-bookmark"
			],
			[
				"bootstrap",
				"fab fa-bootstrap"
			],
			[
				"border-all",
				"fas fa-border-all"
			],
			[
				"border-none",
				"fas fa-border-none"
			],
			[
				"border-style",
				"fas fa-border-style"
			],
			[
				"bowling-ball",
				"fas fa-bowling-ball"
			],
			[
				"box",
				"fas fa-box"
			],
			[
				"box-open",
				"fas fa-box-open"
			],
			[
				"box-tissue",
				"fas fa-box-tissue"
			],
			[
				"boxes",
				"fas fa-boxes"
			],
			[
				"braille",
				"fas fa-braille"
			],
			[
				"brain",
				"fas fa-brain"
			],
			[
				"bread-slice",
				"fas fa-bread-slice"
			],
			[
				"briefcase",
				"fas fa-briefcase"
			],
			[
				"briefcase-medical",
				"fas fa-briefcase-medical"
			],
			[
				"broadcast-tower",
				"fas fa-broadcast-tower"
			],
			[
				"broom",
				"fas fa-broom"
			],
			[
				"brush",
				"fas fa-brush"
			],
			[
				"btc",
				"fab fa-btc"
			],
			[
				"buffer",
				"fab fa-buffer"
			],
			[
				"bug",
				"fas fa-bug"
			],
			[
				"building",
				"fas fa-building"
			],
			[
				"building",
				"far fa-building"
			],
			[
				"bullhorn",
				"fas fa-bullhorn"
			],
			[
				"bullseye",
				"fas fa-bullseye"
			],
			[
				"burn",
				"fas fa-burn"
			],
			[
				"buromobelexperte",
				"fab fa-buromobelexperte"
			],
			[
				"bus",
				"fas fa-bus"
			],
			[
				"bus-alt",
				"fas fa-bus-alt"
			],
			[
				"business-time",
				"fas fa-business-time"
			],
			[
				"buy-n-large",
				"fab fa-buy-n-large"
			],
			[
				"buysellads",
				"fab fa-buysellads"
			],
			[
				"calculator",
				"fas fa-calculator"
			],
			[
				"calendar",
				"fas fa-calendar"
			],
			[
				"calendar",
				"far fa-calendar"
			],
			[
				"calendar-alt",
				"fas fa-calendar-alt"
			],
			[
				"calendar-alt",
				"far fa-calendar-alt"
			],
			[
				"calendar-check",
				"fas fa-calendar-check"
			],
			[
				"calendar-check",
				"far fa-calendar-check"
			],
			[
				"calendar-day",
				"fas fa-calendar-day"
			],
			[
				"calendar-minus",
				"fas fa-calendar-minus"
			],
			[
				"calendar-minus",
				"far fa-calendar-minus"
			],
			[
				"calendar-plus",
				"fas fa-calendar-plus"
			],
			[
				"calendar-plus",
				"far fa-calendar-plus"
			],
			[
				"calendar-times",
				"fas fa-calendar-times"
			],
			[
				"calendar-times",
				"far fa-calendar-times"
			],
			[
				"calendar-week",
				"fas fa-calendar-week"
			],
			[
				"camera",
				"fas fa-camera"
			],
			[
				"camera-retro",
				"fas fa-camera-retro"
			],
			[
				"campground",
				"fas fa-campground"
			],
			[
				"canadian-maple-leaf",
				"fab fa-canadian-maple-leaf"
			],
			[
				"candy-cane",
				"fas fa-candy-cane"
			],
			[
				"cannabis",
				"fas fa-cannabis"
			],
			[
				"capsules",
				"fas fa-capsules"
			],
			[
				"car",
				"fas fa-car"
			],
			[
				"car-alt",
				"fas fa-car-alt"
			],
			[
				"car-battery",
				"fas fa-car-battery"
			],
			[
				"car-crash",
				"fas fa-car-crash"
			],
			[
				"car-side",
				"fas fa-car-side"
			],
			[
				"caravan",
				"fas fa-caravan"
			],
			[
				"caret-down",
				"fas fa-caret-down"
			],
			[
				"caret-left",
				"fas fa-caret-left"
			],
			[
				"caret-right",
				"fas fa-caret-right"
			],
			[
				"caret-square-down",
				"fas fa-caret-square-down"
			],
			[
				"caret-square-down",
				"far fa-caret-square-down"
			],
			[
				"caret-square-left",
				"fas fa-caret-square-left"
			],
			[
				"caret-square-left",
				"far fa-caret-square-left"
			],
			[
				"caret-square-right",
				"fas fa-caret-square-right"
			],
			[
				"caret-square-right",
				"far fa-caret-square-right"
			],
			[
				"caret-square-up",
				"fas fa-caret-square-up"
			],
			[
				"caret-square-up",
				"far fa-caret-square-up"
			],
			[
				"caret-up",
				"fas fa-caret-up"
			],
			[
				"carrot",
				"fas fa-carrot"
			],
			[
				"cart-arrow-down",
				"fas fa-cart-arrow-down"
			],
			[
				"cart-plus",
				"fas fa-cart-plus"
			],
			[
				"cash-register",
				"fas fa-cash-register"
			],
			[
				"cat",
				"fas fa-cat"
			],
			[
				"cc-amazon-pay",
				"fab fa-cc-amazon-pay"
			],
			[
				"cc-amex",
				"fab fa-cc-amex"
			],
			[
				"cc-apple-pay",
				"fab fa-cc-apple-pay"
			],
			[
				"cc-diners-club",
				"fab fa-cc-diners-club"
			],
			[
				"cc-discover",
				"fab fa-cc-discover"
			],
			[
				"cc-jcb",
				"fab fa-cc-jcb"
			],
			[
				"cc-mastercard",
				"fab fa-cc-mastercard"
			],
			[
				"cc-paypal",
				"fab fa-cc-paypal"
			],
			[
				"cc-stripe",
				"fab fa-cc-stripe"
			],
			[
				"cc-visa",
				"fab fa-cc-visa"
			],
			[
				"centercode",
				"fab fa-centercode"
			],
			[
				"centos",
				"fab fa-centos"
			],
			[
				"certificate",
				"fas fa-certificate"
			],
			[
				"chair",
				"fas fa-chair"
			],
			[
				"chalkboard",
				"fas fa-chalkboard"
			],
			[
				"chalkboard-teacher",
				"fas fa-chalkboard-teacher"
			],
			[
				"charging-station",
				"fas fa-charging-station"
			],
			[
				"chart-area",
				"fas fa-chart-area"
			],
			[
				"chart-bar",
				"fas fa-chart-bar"
			],
			[
				"chart-bar",
				"far fa-chart-bar"
			],
			[
				"chart-line",
				"fas fa-chart-line"
			],
			[
				"chart-pie",
				"fas fa-chart-pie"
			],
			[
				"check",
				"fas fa-check"
			],
			[
				"check-circle",
				"fas fa-check-circle"
			],
			[
				"check-circle",
				"far fa-check-circle"
			],
			[
				"check-double",
				"fas fa-check-double"
			],
			[
				"check-square",
				"fas fa-check-square"
			],
			[
				"check-square",
				"far fa-check-square"
			],
			[
				"cheese",
				"fas fa-cheese"
			],
			[
				"chess",
				"fas fa-chess"
			],
			[
				"chess-bishop",
				"fas fa-chess-bishop"
			],
			[
				"chess-board",
				"fas fa-chess-board"
			],
			[
				"chess-king",
				"fas fa-chess-king"
			],
			[
				"chess-knight",
				"fas fa-chess-knight"
			],
			[
				"chess-pawn",
				"fas fa-chess-pawn"
			],
			[
				"chess-queen",
				"fas fa-chess-queen"
			],
			[
				"chess-rook",
				"fas fa-chess-rook"
			],
			[
				"chevron-circle-down",
				"fas fa-chevron-circle-down"
			],
			[
				"chevron-circle-left",
				"fas fa-chevron-circle-left"
			],
			[
				"chevron-circle-right",
				"fas fa-chevron-circle-right"
			],
			[
				"chevron-circle-up",
				"fas fa-chevron-circle-up"
			],
			[
				"chevron-down",
				"fas fa-chevron-down"
			],
			[
				"chevron-left",
				"fas fa-chevron-left"
			],
			[
				"chevron-right",
				"fas fa-chevron-right"
			],
			[
				"chevron-up",
				"fas fa-chevron-up"
			],
			[
				"child",
				"fas fa-child"
			],
			[
				"chrome",
				"fab fa-chrome"
			],
			[
				"chromecast",
				"fab fa-chromecast"
			],
			[
				"church",
				"fas fa-church"
			],
			[
				"circle",
				"fas fa-circle"
			],
			[
				"circle",
				"far fa-circle"
			],
			[
				"circle-notch",
				"fas fa-circle-notch"
			],
			[
				"city",
				"fas fa-city"
			],
			[
				"clinic-medical",
				"fas fa-clinic-medical"
			],
			[
				"clipboard",
				"fas fa-clipboard"
			],
			[
				"clipboard",
				"far fa-clipboard"
			],
			[
				"clipboard-check",
				"fas fa-clipboard-check"
			],
			[
				"clipboard-list",
				"fas fa-clipboard-list"
			],
			[
				"clock",
				"fas fa-clock"
			],
			[
				"clock",
				"far fa-clock"
			],
			[
				"clone",
				"fas fa-clone"
			],
			[
				"clone",
				"far fa-clone"
			],
			[
				"closed-captioning",
				"fas fa-closed-captioning"
			],
			[
				"closed-captioning",
				"far fa-closed-captioning"
			],
			[
				"cloud",
				"fas fa-cloud"
			],
			[
				"cloud-download-alt",
				"fas fa-cloud-download-alt"
			],
			[
				"cloud-meatball",
				"fas fa-cloud-meatball"
			],
			[
				"cloud-moon",
				"fas fa-cloud-moon"
			],
			[
				"cloud-moon-rain",
				"fas fa-cloud-moon-rain"
			],
			[
				"cloud-rain",
				"fas fa-cloud-rain"
			],
			[
				"cloud-showers-heavy",
				"fas fa-cloud-showers-heavy"
			],
			[
				"cloud-sun",
				"fas fa-cloud-sun"
			],
			[
				"cloud-sun-rain",
				"fas fa-cloud-sun-rain"
			],
			[
				"cloud-upload-alt",
				"fas fa-cloud-upload-alt"
			],
			[
				"cloudscale",
				"fab fa-cloudscale"
			],
			[
				"cloudsmith",
				"fab fa-cloudsmith"
			],
			[
				"cloudversify",
				"fab fa-cloudversify"
			],
			[
				"cocktail",
				"fas fa-cocktail"
			],
			[
				"code",
				"fas fa-code"
			],
			[
				"code-branch",
				"fas fa-code-branch"
			],
			[
				"codepen",
				"fab fa-codepen"
			],
			[
				"codiepie",
				"fab fa-codiepie"
			],
			[
				"coffee",
				"fas fa-coffee"
			],
			[
				"cog",
				"fas fa-cog"
			],
			[
				"cogs",
				"fas fa-cogs"
			],
			[
				"coins",
				"fas fa-coins"
			],
			[
				"columns",
				"fas fa-columns"
			],
			[
				"comment",
				"fas fa-comment"
			],
			[
				"comment",
				"far fa-comment"
			],
			[
				"comment-alt",
				"fas fa-comment-alt"
			],
			[
				"comment-alt",
				"far fa-comment-alt"
			],
			[
				"comment-dollar",
				"fas fa-comment-dollar"
			],
			[
				"comment-dots",
				"fas fa-comment-dots"
			],
			[
				"comment-dots",
				"far fa-comment-dots"
			],
			[
				"comment-medical",
				"fas fa-comment-medical"
			],
			[
				"comment-slash",
				"fas fa-comment-slash"
			],
			[
				"comments",
				"fas fa-comments"
			],
			[
				"comments",
				"far fa-comments"
			],
			[
				"comments-dollar",
				"fas fa-comments-dollar"
			],
			[
				"compact-disc",
				"fas fa-compact-disc"
			],
			[
				"compass",
				"fas fa-compass"
			],
			[
				"compass",
				"far fa-compass"
			],
			[
				"compress",
				"fas fa-compress"
			],
			[
				"compress-alt",
				"fas fa-compress-alt"
			],
			[
				"compress-arrows-alt",
				"fas fa-compress-arrows-alt"
			],
			[
				"concierge-bell",
				"fas fa-concierge-bell"
			],
			[
				"confluence",
				"fab fa-confluence"
			],
			[
				"connectdevelop",
				"fab fa-connectdevelop"
			],
			[
				"contao",
				"fab fa-contao"
			],
			[
				"cookie",
				"fas fa-cookie"
			],
			[
				"cookie-bite",
				"fas fa-cookie-bite"
			],
			[
				"copy",
				"fas fa-copy"
			],
			[
				"copy",
				"far fa-copy"
			],
			[
				"copyright",
				"fas fa-copyright"
			],
			[
				"copyright",
				"far fa-copyright"
			],
			[
				"cotton-bureau",
				"fab fa-cotton-bureau"
			],
			[
				"couch",
				"fas fa-couch"
			],
			[
				"cpanel",
				"fab fa-cpanel"
			],
			[
				"creative-commons",
				"fab fa-creative-commons"
			],
			[
				"creative-commons-by",
				"fab fa-creative-commons-by"
			],
			[
				"creative-commons-nc",
				"fab fa-creative-commons-nc"
			],
			[
				"creative-commons-nc-eu",
				"fab fa-creative-commons-nc-eu"
			],
			[
				"creative-commons-nc-jp",
				"fab fa-creative-commons-nc-jp"
			],
			[
				"creative-commons-nd",
				"fab fa-creative-commons-nd"
			],
			[
				"creative-commons-pd",
				"fab fa-creative-commons-pd"
			],
			[
				"creative-commons-pd-alt",
				"fab fa-creative-commons-pd-alt"
			],
			[
				"creative-commons-remix",
				"fab fa-creative-commons-remix"
			],
			[
				"creative-commons-sa",
				"fab fa-creative-commons-sa"
			],
			[
				"creative-commons-sampling",
				"fab fa-creative-commons-sampling"
			],
			[
				"creative-commons-sampling-plus",
				"fab fa-creative-commons-sampling-plus"
			],
			[
				"creative-commons-share",
				"fab fa-creative-commons-share"
			],
			[
				"creative-commons-zero",
				"fab fa-creative-commons-zero"
			],
			[
				"credit-card",
				"fas fa-credit-card"
			],
			[
				"credit-card",
				"far fa-credit-card"
			],
			[
				"critical-role",
				"fab fa-critical-role"
			],
			[
				"crop",
				"fas fa-crop"
			],
			[
				"crop-alt",
				"fas fa-crop-alt"
			],
			[
				"cross",
				"fas fa-cross"
			],
			[
				"crosshairs",
				"fas fa-crosshairs"
			],
			[
				"crow",
				"fas fa-crow"
			],
			[
				"crown",
				"fas fa-crown"
			],
			[
				"crutch",
				"fas fa-crutch"
			],
			[
				"css3",
				"fab fa-css3"
			],
			[
				"css3-alt",
				"fab fa-css3-alt"
			],
			[
				"cube",
				"fas fa-cube"
			],
			[
				"cubes",
				"fas fa-cubes"
			],
			[
				"cut",
				"fas fa-cut"
			],
			[
				"cuttlefish",
				"fab fa-cuttlefish"
			],
			[
				"d-and-d",
				"fab fa-d-and-d"
			],
			[
				"d-and-d-beyond",
				"fab fa-d-and-d-beyond"
			],
			[
				"dailymotion",
				"fab fa-dailymotion"
			],
			[
				"dashcube",
				"fab fa-dashcube"
			],
			[
				"database",
				"fas fa-database"
			],
			[
				"deaf",
				"fas fa-deaf"
			],
			[
				"deezer",
				"fab fa-deezer"
			],
			[
				"delicious",
				"fab fa-delicious"
			],
			[
				"democrat",
				"fas fa-democrat"
			],
			[
				"deploydog",
				"fab fa-deploydog"
			],
			[
				"deskpro",
				"fab fa-deskpro"
			],
			[
				"desktop",
				"fas fa-desktop"
			],
			[
				"dev",
				"fab fa-dev"
			],
			[
				"deviantart",
				"fab fa-deviantart"
			],
			[
				"dharmachakra",
				"fas fa-dharmachakra"
			],
			[
				"dhl",
				"fab fa-dhl"
			],
			[
				"diagnoses",
				"fas fa-diagnoses"
			],
			[
				"diaspora",
				"fab fa-diaspora"
			],
			[
				"dice",
				"fas fa-dice"
			],
			[
				"dice-d20",
				"fas fa-dice-d20"
			],
			[
				"dice-d6",
				"fas fa-dice-d6"
			],
			[
				"dice-five",
				"fas fa-dice-five"
			],
			[
				"dice-four",
				"fas fa-dice-four"
			],
			[
				"dice-one",
				"fas fa-dice-one"
			],
			[
				"dice-six",
				"fas fa-dice-six"
			],
			[
				"dice-three",
				"fas fa-dice-three"
			],
			[
				"dice-two",
				"fas fa-dice-two"
			],
			[
				"digg",
				"fab fa-digg"
			],
			[
				"digital-ocean",
				"fab fa-digital-ocean"
			],
			[
				"digital-tachograph",
				"fas fa-digital-tachograph"
			],
			[
				"directions",
				"fas fa-directions"
			],
			[
				"discord",
				"fab fa-discord"
			],
			[
				"discourse",
				"fab fa-discourse"
			],
			[
				"disease",
				"fas fa-disease"
			],
			[
				"divide",
				"fas fa-divide"
			],
			[
				"dizzy",
				"fas fa-dizzy"
			],
			[
				"dizzy",
				"far fa-dizzy"
			],
			[
				"dna",
				"fas fa-dna"
			],
			[
				"dochub",
				"fab fa-dochub"
			],
			[
				"docker",
				"fab fa-docker"
			],
			[
				"dog",
				"fas fa-dog"
			],
			[
				"dollar-sign",
				"fas fa-dollar-sign"
			],
			[
				"dolly",
				"fas fa-dolly"
			],
			[
				"dolly-flatbed",
				"fas fa-dolly-flatbed"
			],
			[
				"donate",
				"fas fa-donate"
			],
			[
				"door-closed",
				"fas fa-door-closed"
			],
			[
				"door-open",
				"fas fa-door-open"
			],
			[
				"dot-circle",
				"fas fa-dot-circle"
			],
			[
				"dot-circle",
				"far fa-dot-circle"
			],
			[
				"dove",
				"fas fa-dove"
			],
			[
				"download",
				"fas fa-download"
			],
			[
				"draft2digital",
				"fab fa-draft2digital"
			],
			[
				"drafting-compass",
				"fas fa-drafting-compass"
			],
			[
				"dragon",
				"fas fa-dragon"
			],
			[
				"draw-polygon",
				"fas fa-draw-polygon"
			],
			[
				"dribbble",
				"fab fa-dribbble"
			],
			[
				"dribbble-square",
				"fab fa-dribbble-square"
			],
			[
				"dropbox",
				"fab fa-dropbox"
			],
			[
				"drum",
				"fas fa-drum"
			],
			[
				"drum-steelpan",
				"fas fa-drum-steelpan"
			],
			[
				"drumstick-bite",
				"fas fa-drumstick-bite"
			],
			[
				"drupal",
				"fab fa-drupal"
			],
			[
				"dumbbell",
				"fas fa-dumbbell"
			],
			[
				"dumpster",
				"fas fa-dumpster"
			],
			[
				"dumpster-fire",
				"fas fa-dumpster-fire"
			],
			[
				"dungeon",
				"fas fa-dungeon"
			],
			[
				"dyalog",
				"fab fa-dyalog"
			],
			[
				"earlybirds",
				"fab fa-earlybirds"
			],
			[
				"ebay",
				"fab fa-ebay"
			],
			[
				"edge",
				"fab fa-edge"
			],
			[
				"edge-legacy",
				"fab fa-edge-legacy"
			],
			[
				"edit",
				"fas fa-edit"
			],
			[
				"edit",
				"far fa-edit"
			],
			[
				"egg",
				"fas fa-egg"
			],
			[
				"eject",
				"fas fa-eject"
			],
			[
				"elementor",
				"fab fa-elementor"
			],
			[
				"ellipsis-h",
				"fas fa-ellipsis-h"
			],
			[
				"ellipsis-v",
				"fas fa-ellipsis-v"
			],
			[
				"ello",
				"fab fa-ello"
			],
			[
				"ember",
				"fab fa-ember"
			],
			[
				"empire",
				"fab fa-empire"
			],
			[
				"envelope",
				"fas fa-envelope"
			],
			[
				"envelope",
				"far fa-envelope"
			],
			[
				"envelope-open",
				"fas fa-envelope-open"
			],
			[
				"envelope-open",
				"far fa-envelope-open"
			],
			[
				"envelope-open-text",
				"fas fa-envelope-open-text"
			],
			[
				"envelope-square",
				"fas fa-envelope-square"
			],
			[
				"envira",
				"fab fa-envira"
			],
			[
				"equals",
				"fas fa-equals"
			],
			[
				"eraser",
				"fas fa-eraser"
			],
			[
				"erlang",
				"fab fa-erlang"
			],
			[
				"ethereum",
				"fab fa-ethereum"
			],
			[
				"ethernet",
				"fas fa-ethernet"
			],
			[
				"etsy",
				"fab fa-etsy"
			],
			[
				"euro-sign",
				"fas fa-euro-sign"
			],
			[
				"evernote",
				"fab fa-evernote"
			],
			[
				"exchange-alt",
				"fas fa-exchange-alt"
			],
			[
				"exclamation",
				"fas fa-exclamation"
			],
			[
				"exclamation-circle",
				"fas fa-exclamation-circle"
			],
			[
				"exclamation-triangle",
				"fas fa-exclamation-triangle"
			],
			[
				"expand",
				"fas fa-expand"
			],
			[
				"expand-alt",
				"fas fa-expand-alt"
			],
			[
				"expand-arrows-alt",
				"fas fa-expand-arrows-alt"
			],
			[
				"expeditedssl",
				"fab fa-expeditedssl"
			],
			[
				"external-link-alt",
				"fas fa-external-link-alt"
			],
			[
				"external-link-square-alt",
				"fas fa-external-link-square-alt"
			],
			[
				"eye",
				"fas fa-eye"
			],
			[
				"eye",
				"far fa-eye"
			],
			[
				"eye-dropper",
				"fas fa-eye-dropper"
			],
			[
				"eye-slash",
				"fas fa-eye-slash"
			],
			[
				"eye-slash",
				"far fa-eye-slash"
			],
			[
				"facebook",
				"fab fa-facebook"
			],
			[
				"facebook-f",
				"fab fa-facebook-f"
			],
			[
				"facebook-messenger",
				"fab fa-facebook-messenger"
			],
			[
				"facebook-square",
				"fab fa-facebook-square"
			],
			[
				"fan",
				"fas fa-fan"
			],
			[
				"fantasy-flight-games",
				"fab fa-fantasy-flight-games"
			],
			[
				"fast-backward",
				"fas fa-fast-backward"
			],
			[
				"fast-forward",
				"fas fa-fast-forward"
			],
			[
				"faucet",
				"fas fa-faucet"
			],
			[
				"fax",
				"fas fa-fax"
			],
			[
				"feather",
				"fas fa-feather"
			],
			[
				"feather-alt",
				"fas fa-feather-alt"
			],
			[
				"fedex",
				"fab fa-fedex"
			],
			[
				"fedora",
				"fab fa-fedora"
			],
			[
				"female",
				"fas fa-female"
			],
			[
				"fighter-jet",
				"fas fa-fighter-jet"
			],
			[
				"figma",
				"fab fa-figma"
			],
			[
				"file",
				"fas fa-file"
			],
			[
				"file",
				"far fa-file"
			],
			[
				"file-alt",
				"fas fa-file-alt"
			],
			[
				"file-alt",
				"far fa-file-alt"
			],
			[
				"file-archive",
				"fas fa-file-archive"
			],
			[
				"file-archive",
				"far fa-file-archive"
			],
			[
				"file-audio",
				"fas fa-file-audio"
			],
			[
				"file-audio",
				"far fa-file-audio"
			],
			[
				"file-code",
				"fas fa-file-code"
			],
			[
				"file-code",
				"far fa-file-code"
			],
			[
				"file-contract",
				"fas fa-file-contract"
			],
			[
				"file-csv",
				"fas fa-file-csv"
			],
			[
				"file-download",
				"fas fa-file-download"
			],
			[
				"file-excel",
				"fas fa-file-excel"
			],
			[
				"file-excel",
				"far fa-file-excel"
			],
			[
				"file-export",
				"fas fa-file-export"
			],
			[
				"file-image",
				"fas fa-file-image"
			],
			[
				"file-image",
				"far fa-file-image"
			],
			[
				"file-import",
				"fas fa-file-import"
			],
			[
				"file-invoice",
				"fas fa-file-invoice"
			],
			[
				"file-invoice-dollar",
				"fas fa-file-invoice-dollar"
			],
			[
				"file-medical",
				"fas fa-file-medical"
			],
			[
				"file-medical-alt",
				"fas fa-file-medical-alt"
			],
			[
				"file-pdf",
				"fas fa-file-pdf"
			],
			[
				"file-pdf",
				"far fa-file-pdf"
			],
			[
				"file-powerpoint",
				"fas fa-file-powerpoint"
			],
			[
				"file-powerpoint",
				"far fa-file-powerpoint"
			],
			[
				"file-prescription",
				"fas fa-file-prescription"
			],
			[
				"file-signature",
				"fas fa-file-signature"
			],
			[
				"file-upload",
				"fas fa-file-upload"
			],
			[
				"file-video",
				"fas fa-file-video"
			],
			[
				"file-video",
				"far fa-file-video"
			],
			[
				"file-word",
				"fas fa-file-word"
			],
			[
				"file-word",
				"far fa-file-word"
			],
			[
				"fill",
				"fas fa-fill"
			],
			[
				"fill-drip",
				"fas fa-fill-drip"
			],
			[
				"film",
				"fas fa-film"
			],
			[
				"filter",
				"fas fa-filter"
			],
			[
				"fingerprint",
				"fas fa-fingerprint"
			],
			[
				"fire",
				"fas fa-fire"
			],
			[
				"fire-alt",
				"fas fa-fire-alt"
			],
			[
				"fire-extinguisher",
				"fas fa-fire-extinguisher"
			],
			[
				"firefox",
				"fab fa-firefox"
			],
			[
				"firefox-browser",
				"fab fa-firefox-browser"
			],
			[
				"first-aid",
				"fas fa-first-aid"
			],
			[
				"first-order",
				"fab fa-first-order"
			],
			[
				"first-order-alt",
				"fab fa-first-order-alt"
			],
			[
				"firstdraft",
				"fab fa-firstdraft"
			],
			[
				"fish",
				"fas fa-fish"
			],
			[
				"fist-raised",
				"fas fa-fist-raised"
			],
			[
				"flag",
				"fas fa-flag"
			],
			[
				"flag",
				"far fa-flag"
			],
			[
				"flag-checkered",
				"fas fa-flag-checkered"
			],
			[
				"flag-usa",
				"fas fa-flag-usa"
			],
			[
				"flask",
				"fas fa-flask"
			],
			[
				"flickr",
				"fab fa-flickr"
			],
			[
				"flipboard",
				"fab fa-flipboard"
			],
			[
				"flushed",
				"fas fa-flushed"
			],
			[
				"flushed",
				"far fa-flushed"
			],
			[
				"fly",
				"fab fa-fly"
			],
			[
				"folder",
				"fas fa-folder"
			],
			[
				"folder",
				"far fa-folder"
			],
			[
				"folder-minus",
				"fas fa-folder-minus"
			],
			[
				"folder-open",
				"fas fa-folder-open"
			],
			[
				"folder-open",
				"far fa-folder-open"
			],
			[
				"folder-plus",
				"fas fa-folder-plus"
			],
			[
				"font",
				"fas fa-font"
			],
			[
				"font-awesome",
				"fab fa-font-awesome"
			],
			[
				"font-awesome-alt",
				"fab fa-font-awesome-alt"
			],
			[
				"font-awesome-flag",
				"fab fa-font-awesome-flag"
			],
			[
				"fonticons",
				"fab fa-fonticons"
			],
			[
				"fonticons-fi",
				"fab fa-fonticons-fi"
			],
			[
				"football-ball",
				"fas fa-football-ball"
			],
			[
				"fort-awesome",
				"fab fa-fort-awesome"
			],
			[
				"fort-awesome-alt",
				"fab fa-fort-awesome-alt"
			],
			[
				"forumbee",
				"fab fa-forumbee"
			],
			[
				"forward",
				"fas fa-forward"
			],
			[
				"foursquare",
				"fab fa-foursquare"
			],
			[
				"free-code-camp",
				"fab fa-free-code-camp"
			],
			[
				"freebsd",
				"fab fa-freebsd"
			],
			[
				"frog",
				"fas fa-frog"
			],
			[
				"frown",
				"fas fa-frown"
			],
			[
				"frown",
				"far fa-frown"
			],
			[
				"frown-open",
				"fas fa-frown-open"
			],
			[
				"frown-open",
				"far fa-frown-open"
			],
			[
				"fulcrum",
				"fab fa-fulcrum"
			],
			[
				"funnel-dollar",
				"fas fa-funnel-dollar"
			],
			[
				"futbol",
				"fas fa-futbol"
			],
			[
				"futbol",
				"far fa-futbol"
			],
			[
				"galactic-republic",
				"fab fa-galactic-republic"
			],
			[
				"galactic-senate",
				"fab fa-galactic-senate"
			],
			[
				"gamepad",
				"fas fa-gamepad"
			],
			[
				"gas-pump",
				"fas fa-gas-pump"
			],
			[
				"gavel",
				"fas fa-gavel"
			],
			[
				"gem",
				"fas fa-gem"
			],
			[
				"gem",
				"far fa-gem"
			],
			[
				"genderless",
				"fas fa-genderless"
			],
			[
				"get-pocket",
				"fab fa-get-pocket"
			],
			[
				"gg",
				"fab fa-gg"
			],
			[
				"gg-circle",
				"fab fa-gg-circle"
			],
			[
				"ghost",
				"fas fa-ghost"
			],
			[
				"gift",
				"fas fa-gift"
			],
			[
				"gifts",
				"fas fa-gifts"
			],
			[
				"git",
				"fab fa-git"
			],
			[
				"git-alt",
				"fab fa-git-alt"
			],
			[
				"git-square",
				"fab fa-git-square"
			],
			[
				"github",
				"fab fa-github"
			],
			[
				"github-alt",
				"fab fa-github-alt"
			],
			[
				"github-square",
				"fab fa-github-square"
			],
			[
				"gitkraken",
				"fab fa-gitkraken"
			],
			[
				"gitlab",
				"fab fa-gitlab"
			],
			[
				"gitter",
				"fab fa-gitter"
			],
			[
				"glass-cheers",
				"fas fa-glass-cheers"
			],
			[
				"glass-martini",
				"fas fa-glass-martini"
			],
			[
				"glass-martini-alt",
				"fas fa-glass-martini-alt"
			],
			[
				"glass-whiskey",
				"fas fa-glass-whiskey"
			],
			[
				"glasses",
				"fas fa-glasses"
			],
			[
				"glide",
				"fab fa-glide"
			],
			[
				"glide-g",
				"fab fa-glide-g"
			],
			[
				"globe",
				"fas fa-globe"
			],
			[
				"globe-africa",
				"fas fa-globe-africa"
			],
			[
				"globe-americas",
				"fas fa-globe-americas"
			],
			[
				"globe-asia",
				"fas fa-globe-asia"
			],
			[
				"globe-europe",
				"fas fa-globe-europe"
			],
			[
				"gofore",
				"fab fa-gofore"
			],
			[
				"golf-ball",
				"fas fa-golf-ball"
			],
			[
				"goodreads",
				"fab fa-goodreads"
			],
			[
				"goodreads-g",
				"fab fa-goodreads-g"
			],
			[
				"google",
				"fab fa-google"
			],
			[
				"google-drive",
				"fab fa-google-drive"
			],
			[
				"google-pay",
				"fab fa-google-pay"
			],
			[
				"google-play",
				"fab fa-google-play"
			],
			[
				"google-plus",
				"fab fa-google-plus"
			],
			[
				"google-plus-g",
				"fab fa-google-plus-g"
			],
			[
				"google-plus-square",
				"fab fa-google-plus-square"
			],
			[
				"google-wallet",
				"fab fa-google-wallet"
			],
			[
				"gopuram",
				"fas fa-gopuram"
			],
			[
				"graduation-cap",
				"fas fa-graduation-cap"
			],
			[
				"gratipay",
				"fab fa-gratipay"
			],
			[
				"grav",
				"fab fa-grav"
			],
			[
				"greater-than",
				"fas fa-greater-than"
			],
			[
				"greater-than-equal",
				"fas fa-greater-than-equal"
			],
			[
				"grimace",
				"fas fa-grimace"
			],
			[
				"grimace",
				"far fa-grimace"
			],
			[
				"grin",
				"fas fa-grin"
			],
			[
				"grin",
				"far fa-grin"
			],
			[
				"grin-alt",
				"fas fa-grin-alt"
			],
			[
				"grin-alt",
				"far fa-grin-alt"
			],
			[
				"grin-beam",
				"fas fa-grin-beam"
			],
			[
				"grin-beam",
				"far fa-grin-beam"
			],
			[
				"grin-beam-sweat",
				"fas fa-grin-beam-sweat"
			],
			[
				"grin-beam-sweat",
				"far fa-grin-beam-sweat"
			],
			[
				"grin-hearts",
				"fas fa-grin-hearts"
			],
			[
				"grin-hearts",
				"far fa-grin-hearts"
			],
			[
				"grin-squint",
				"fas fa-grin-squint"
			],
			[
				"grin-squint",
				"far fa-grin-squint"
			],
			[
				"grin-squint-tears",
				"fas fa-grin-squint-tears"
			],
			[
				"grin-squint-tears",
				"far fa-grin-squint-tears"
			],
			[
				"grin-stars",
				"fas fa-grin-stars"
			],
			[
				"grin-stars",
				"far fa-grin-stars"
			],
			[
				"grin-tears",
				"fas fa-grin-tears"
			],
			[
				"grin-tears",
				"far fa-grin-tears"
			],
			[
				"grin-tongue",
				"fas fa-grin-tongue"
			],
			[
				"grin-tongue",
				"far fa-grin-tongue"
			],
			[
				"grin-tongue-squint",
				"fas fa-grin-tongue-squint"
			],
			[
				"grin-tongue-squint",
				"far fa-grin-tongue-squint"
			],
			[
				"grin-tongue-wink",
				"fas fa-grin-tongue-wink"
			],
			[
				"grin-tongue-wink",
				"far fa-grin-tongue-wink"
			],
			[
				"grin-wink",
				"fas fa-grin-wink"
			],
			[
				"grin-wink",
				"far fa-grin-wink"
			],
			[
				"grip-horizontal",
				"fas fa-grip-horizontal"
			],
			[
				"grip-lines",
				"fas fa-grip-lines"
			],
			[
				"grip-lines-vertical",
				"fas fa-grip-lines-vertical"
			],
			[
				"grip-vertical",
				"fas fa-grip-vertical"
			],
			[
				"gripfire",
				"fab fa-gripfire"
			],
			[
				"grunt",
				"fab fa-grunt"
			],
			[
				"guitar",
				"fas fa-guitar"
			],
			[
				"gulp",
				"fab fa-gulp"
			],
			[
				"h-square",
				"fas fa-h-square"
			],
			[
				"hacker-news",
				"fab fa-hacker-news"
			],
			[
				"hacker-news-square",
				"fab fa-hacker-news-square"
			],
			[
				"hackerrank",
				"fab fa-hackerrank"
			],
			[
				"hamburger",
				"fas fa-hamburger"
			],
			[
				"hammer",
				"fas fa-hammer"
			],
			[
				"hamsa",
				"fas fa-hamsa"
			],
			[
				"hand-holding",
				"fas fa-hand-holding"
			],
			[
				"hand-holding-heart",
				"fas fa-hand-holding-heart"
			],
			[
				"hand-holding-medical",
				"fas fa-hand-holding-medical"
			],
			[
				"hand-holding-usd",
				"fas fa-hand-holding-usd"
			],
			[
				"hand-holding-water",
				"fas fa-hand-holding-water"
			],
			[
				"hand-lizard",
				"fas fa-hand-lizard"
			],
			[
				"hand-lizard",
				"far fa-hand-lizard"
			],
			[
				"hand-middle-finger",
				"fas fa-hand-middle-finger"
			],
			[
				"hand-paper",
				"fas fa-hand-paper"
			],
			[
				"hand-paper",
				"far fa-hand-paper"
			],
			[
				"hand-peace",
				"fas fa-hand-peace"
			],
			[
				"hand-peace",
				"far fa-hand-peace"
			],
			[
				"hand-point-down",
				"fas fa-hand-point-down"
			],
			[
				"hand-point-down",
				"far fa-hand-point-down"
			],
			[
				"hand-point-left",
				"fas fa-hand-point-left"
			],
			[
				"hand-point-left",
				"far fa-hand-point-left"
			],
			[
				"hand-point-right",
				"fas fa-hand-point-right"
			],
			[
				"hand-point-right",
				"far fa-hand-point-right"
			],
			[
				"hand-point-up",
				"fas fa-hand-point-up"
			],
			[
				"hand-point-up",
				"far fa-hand-point-up"
			],
			[
				"hand-pointer",
				"fas fa-hand-pointer"
			],
			[
				"hand-pointer",
				"far fa-hand-pointer"
			],
			[
				"hand-rock",
				"fas fa-hand-rock"
			],
			[
				"hand-rock",
				"far fa-hand-rock"
			],
			[
				"hand-scissors",
				"fas fa-hand-scissors"
			],
			[
				"hand-scissors",
				"far fa-hand-scissors"
			],
			[
				"hand-sparkles",
				"fas fa-hand-sparkles"
			],
			[
				"hand-spock",
				"fas fa-hand-spock"
			],
			[
				"hand-spock",
				"far fa-hand-spock"
			],
			[
				"hands",
				"fas fa-hands"
			],
			[
				"hands-helping",
				"fas fa-hands-helping"
			],
			[
				"hands-wash",
				"fas fa-hands-wash"
			],
			[
				"handshake",
				"fas fa-handshake"
			],
			[
				"handshake",
				"far fa-handshake"
			],
			[
				"handshake-alt-slash",
				"fas fa-handshake-alt-slash"
			],
			[
				"handshake-slash",
				"fas fa-handshake-slash"
			],
			[
				"hanukiah",
				"fas fa-hanukiah"
			],
			[
				"hard-hat",
				"fas fa-hard-hat"
			],
			[
				"hashtag",
				"fas fa-hashtag"
			],
			[
				"hat-cowboy",
				"fas fa-hat-cowboy"
			],
			[
				"hat-cowboy-side",
				"fas fa-hat-cowboy-side"
			],
			[
				"hat-wizard",
				"fas fa-hat-wizard"
			],
			[
				"hdd",
				"fas fa-hdd"
			],
			[
				"hdd",
				"far fa-hdd"
			],
			[
				"head-side-cough",
				"fas fa-head-side-cough"
			],
			[
				"head-side-cough-slash",
				"fas fa-head-side-cough-slash"
			],
			[
				"head-side-mask",
				"fas fa-head-side-mask"
			],
			[
				"head-side-virus",
				"fas fa-head-side-virus"
			],
			[
				"heading",
				"fas fa-heading"
			],
			[
				"headphones",
				"fas fa-headphones"
			],
			[
				"headphones-alt",
				"fas fa-headphones-alt"
			],
			[
				"headset",
				"fas fa-headset"
			],
			[
				"heart",
				"fas fa-heart"
			],
			[
				"heart",
				"far fa-heart"
			],
			[
				"heart-broken",
				"fas fa-heart-broken"
			],
			[
				"heartbeat",
				"fas fa-heartbeat"
			],
			[
				"helicopter",
				"fas fa-helicopter"
			],
			[
				"highlighter",
				"fas fa-highlighter"
			],
			[
				"hiking",
				"fas fa-hiking"
			],
			[
				"hippo",
				"fas fa-hippo"
			],
			[
				"hips",
				"fab fa-hips"
			],
			[
				"hire-a-helper",
				"fab fa-hire-a-helper"
			],
			[
				"history",
				"fas fa-history"
			],
			[
				"hockey-puck",
				"fas fa-hockey-puck"
			],
			[
				"holly-berry",
				"fas fa-holly-berry"
			],
			[
				"home",
				"fas fa-home"
			],
			[
				"hooli",
				"fab fa-hooli"
			],
			[
				"hornbill",
				"fab fa-hornbill"
			],
			[
				"horse",
				"fas fa-horse"
			],
			[
				"horse-head",
				"fas fa-horse-head"
			],
			[
				"hospital",
				"fas fa-hospital"
			],
			[
				"hospital",
				"far fa-hospital"
			],
			[
				"hospital-alt",
				"fas fa-hospital-alt"
			],
			[
				"hospital-symbol",
				"fas fa-hospital-symbol"
			],
			[
				"hospital-user",
				"fas fa-hospital-user"
			],
			[
				"hot-tub",
				"fas fa-hot-tub"
			],
			[
				"hotdog",
				"fas fa-hotdog"
			],
			[
				"hotel",
				"fas fa-hotel"
			],
			[
				"hotjar",
				"fab fa-hotjar"
			],
			[
				"hourglass",
				"fas fa-hourglass"
			],
			[
				"hourglass",
				"far fa-hourglass"
			],
			[
				"hourglass-end",
				"fas fa-hourglass-end"
			],
			[
				"hourglass-half",
				"fas fa-hourglass-half"
			],
			[
				"hourglass-start",
				"fas fa-hourglass-start"
			],
			[
				"house-damage",
				"fas fa-house-damage"
			],
			[
				"house-user",
				"fas fa-house-user"
			],
			[
				"houzz",
				"fab fa-houzz"
			],
			[
				"hryvnia",
				"fas fa-hryvnia"
			],
			[
				"html5",
				"fab fa-html5"
			],
			[
				"hubspot",
				"fab fa-hubspot"
			],
			[
				"i-cursor",
				"fas fa-i-cursor"
			],
			[
				"ice-cream",
				"fas fa-ice-cream"
			],
			[
				"icicles",
				"fas fa-icicles"
			],
			[
				"icons",
				"fas fa-icons"
			],
			[
				"id-badge",
				"fas fa-id-badge"
			],
			[
				"id-badge",
				"far fa-id-badge"
			],
			[
				"id-card",
				"fas fa-id-card"
			],
			[
				"id-card",
				"far fa-id-card"
			],
			[
				"id-card-alt",
				"fas fa-id-card-alt"
			],
			[
				"ideal",
				"fab fa-ideal"
			],
			[
				"igloo",
				"fas fa-igloo"
			],
			[
				"image",
				"fas fa-image"
			],
			[
				"image",
				"far fa-image"
			],
			[
				"images",
				"fas fa-images"
			],
			[
				"images",
				"far fa-images"
			],
			[
				"imdb",
				"fab fa-imdb"
			],
			[
				"inbox",
				"fas fa-inbox"
			],
			[
				"indent",
				"fas fa-indent"
			],
			[
				"industry",
				"fas fa-industry"
			],
			[
				"infinity",
				"fas fa-infinity"
			],
			[
				"info",
				"fas fa-info"
			],
			[
				"info-circle",
				"fas fa-info-circle"
			],
			[
				"instagram",
				"fab fa-instagram"
			],
			[
				"instagram-square",
				"fab fa-instagram-square"
			],
			[
				"intercom",
				"fab fa-intercom"
			],
			[
				"internet-explorer",
				"fab fa-internet-explorer"
			],
			[
				"invision",
				"fab fa-invision"
			],
			[
				"ioxhost",
				"fab fa-ioxhost"
			],
			[
				"italic",
				"fas fa-italic"
			],
			[
				"itch-io",
				"fab fa-itch-io"
			],
			[
				"itunes",
				"fab fa-itunes"
			],
			[
				"itunes-note",
				"fab fa-itunes-note"
			],
			[
				"java",
				"fab fa-java"
			],
			[
				"jedi",
				"fas fa-jedi"
			],
			[
				"jedi-order",
				"fab fa-jedi-order"
			],
			[
				"jenkins",
				"fab fa-jenkins"
			],
			[
				"jira",
				"fab fa-jira"
			],
			[
				"joget",
				"fab fa-joget"
			],
			[
				"joint",
				"fas fa-joint"
			],
			[
				"joomla",
				"fab fa-joomla"
			],
			[
				"journal-whills",
				"fas fa-journal-whills"
			],
			[
				"js",
				"fab fa-js"
			],
			[
				"js-square",
				"fab fa-js-square"
			],
			[
				"jsfiddle",
				"fab fa-jsfiddle"
			],
			[
				"kaaba",
				"fas fa-kaaba"
			],
			[
				"kaggle",
				"fab fa-kaggle"
			],
			[
				"key",
				"fas fa-key"
			],
			[
				"keybase",
				"fab fa-keybase"
			],
			[
				"keyboard",
				"fas fa-keyboard"
			],
			[
				"keyboard",
				"far fa-keyboard"
			],
			[
				"keycdn",
				"fab fa-keycdn"
			],
			[
				"khanda",
				"fas fa-khanda"
			],
			[
				"kickstarter",
				"fab fa-kickstarter"
			],
			[
				"kickstarter-k",
				"fab fa-kickstarter-k"
			],
			[
				"kiss",
				"fas fa-kiss"
			],
			[
				"kiss",
				"far fa-kiss"
			],
			[
				"kiss-beam",
				"fas fa-kiss-beam"
			],
			[
				"kiss-beam",
				"far fa-kiss-beam"
			],
			[
				"kiss-wink-heart",
				"fas fa-kiss-wink-heart"
			],
			[
				"kiss-wink-heart",
				"far fa-kiss-wink-heart"
			],
			[
				"kiwi-bird",
				"fas fa-kiwi-bird"
			],
			[
				"korvue",
				"fab fa-korvue"
			],
			[
				"landmark",
				"fas fa-landmark"
			],
			[
				"language",
				"fas fa-language"
			],
			[
				"laptop",
				"fas fa-laptop"
			],
			[
				"laptop-code",
				"fas fa-laptop-code"
			],
			[
				"laptop-house",
				"fas fa-laptop-house"
			],
			[
				"laptop-medical",
				"fas fa-laptop-medical"
			],
			[
				"laravel",
				"fab fa-laravel"
			],
			[
				"lastfm",
				"fab fa-lastfm"
			],
			[
				"lastfm-square",
				"fab fa-lastfm-square"
			],
			[
				"laugh",
				"fas fa-laugh"
			],
			[
				"laugh",
				"far fa-laugh"
			],
			[
				"laugh-beam",
				"fas fa-laugh-beam"
			],
			[
				"laugh-beam",
				"far fa-laugh-beam"
			],
			[
				"laugh-squint",
				"fas fa-laugh-squint"
			],
			[
				"laugh-squint",
				"far fa-laugh-squint"
			],
			[
				"laugh-wink",
				"fas fa-laugh-wink"
			],
			[
				"laugh-wink",
				"far fa-laugh-wink"
			],
			[
				"layer-group",
				"fas fa-layer-group"
			],
			[
				"leaf",
				"fas fa-leaf"
			],
			[
				"leanpub",
				"fab fa-leanpub"
			],
			[
				"lemon",
				"fas fa-lemon"
			],
			[
				"lemon",
				"far fa-lemon"
			],
			[
				"less",
				"fab fa-less"
			],
			[
				"less-than",
				"fas fa-less-than"
			],
			[
				"less-than-equal",
				"fas fa-less-than-equal"
			],
			[
				"level-down-alt",
				"fas fa-level-down-alt"
			],
			[
				"level-up-alt",
				"fas fa-level-up-alt"
			],
			[
				"life-ring",
				"fas fa-life-ring"
			],
			[
				"life-ring",
				"far fa-life-ring"
			],
			[
				"lightbulb",
				"fas fa-lightbulb"
			],
			[
				"lightbulb",
				"far fa-lightbulb"
			],
			[
				"line",
				"fab fa-line"
			],
			[
				"link",
				"fas fa-link"
			],
			[
				"linkedin",
				"fab fa-linkedin"
			],
			[
				"linkedin-in",
				"fab fa-linkedin-in"
			],
			[
				"linode",
				"fab fa-linode"
			],
			[
				"linux",
				"fab fa-linux"
			],
			[
				"lira-sign",
				"fas fa-lira-sign"
			],
			[
				"list",
				"fas fa-list"
			],
			[
				"list-alt",
				"fas fa-list-alt"
			],
			[
				"list-alt",
				"far fa-list-alt"
			],
			[
				"list-ol",
				"fas fa-list-ol"
			],
			[
				"list-ul",
				"fas fa-list-ul"
			],
			[
				"location-arrow",
				"fas fa-location-arrow"
			],
			[
				"lock",
				"fas fa-lock"
			],
			[
				"lock-open",
				"fas fa-lock-open"
			],
			[
				"long-arrow-alt-down",
				"fas fa-long-arrow-alt-down"
			],
			[
				"long-arrow-alt-left",
				"fas fa-long-arrow-alt-left"
			],
			[
				"long-arrow-alt-right",
				"fas fa-long-arrow-alt-right"
			],
			[
				"long-arrow-alt-up",
				"fas fa-long-arrow-alt-up"
			],
			[
				"low-vision",
				"fas fa-low-vision"
			],
			[
				"luggage-cart",
				"fas fa-luggage-cart"
			],
			[
				"lungs",
				"fas fa-lungs"
			],
			[
				"lungs-virus",
				"fas fa-lungs-virus"
			],
			[
				"lyft",
				"fab fa-lyft"
			],
			[
				"magento",
				"fab fa-magento"
			],
			[
				"magic",
				"fas fa-magic"
			],
			[
				"magnet",
				"fas fa-magnet"
			],
			[
				"mail-bulk",
				"fas fa-mail-bulk"
			],
			[
				"mailchimp",
				"fab fa-mailchimp"
			],
			[
				"male",
				"fas fa-male"
			],
			[
				"mandalorian",
				"fab fa-mandalorian"
			],
			[
				"map",
				"fas fa-map"
			],
			[
				"map",
				"far fa-map"
			],
			[
				"map-marked",
				"fas fa-map-marked"
			],
			[
				"map-marked-alt",
				"fas fa-map-marked-alt"
			],
			[
				"map-marker",
				"fas fa-map-marker"
			],
			[
				"map-marker-alt",
				"fas fa-map-marker-alt"
			],
			[
				"map-pin",
				"fas fa-map-pin"
			],
			[
				"map-signs",
				"fas fa-map-signs"
			],
			[
				"markdown",
				"fab fa-markdown"
			],
			[
				"marker",
				"fas fa-marker"
			],
			[
				"mars",
				"fas fa-mars"
			],
			[
				"mars-double",
				"fas fa-mars-double"
			],
			[
				"mars-stroke",
				"fas fa-mars-stroke"
			],
			[
				"mars-stroke-h",
				"fas fa-mars-stroke-h"
			],
			[
				"mars-stroke-v",
				"fas fa-mars-stroke-v"
			],
			[
				"mask",
				"fas fa-mask"
			],
			[
				"mastodon",
				"fab fa-mastodon"
			],
			[
				"maxcdn",
				"fab fa-maxcdn"
			],
			[
				"mdb",
				"fab fa-mdb"
			],
			[
				"medal",
				"fas fa-medal"
			],
			[
				"medapps",
				"fab fa-medapps"
			],
			[
				"medium",
				"fab fa-medium"
			],
			[
				"medium-m",
				"fab fa-medium-m"
			],
			[
				"medkit",
				"fas fa-medkit"
			],
			[
				"medrt",
				"fab fa-medrt"
			],
			[
				"meetup",
				"fab fa-meetup"
			],
			[
				"megaport",
				"fab fa-megaport"
			],
			[
				"meh",
				"fas fa-meh"
			],
			[
				"meh",
				"far fa-meh"
			],
			[
				"meh-blank",
				"fas fa-meh-blank"
			],
			[
				"meh-blank",
				"far fa-meh-blank"
			],
			[
				"meh-rolling-eyes",
				"fas fa-meh-rolling-eyes"
			],
			[
				"meh-rolling-eyes",
				"far fa-meh-rolling-eyes"
			],
			[
				"memory",
				"fas fa-memory"
			],
			[
				"mendeley",
				"fab fa-mendeley"
			],
			[
				"menorah",
				"fas fa-menorah"
			],
			[
				"mercury",
				"fas fa-mercury"
			],
			[
				"meteor",
				"fas fa-meteor"
			],
			[
				"microblog",
				"fab fa-microblog"
			],
			[
				"microchip",
				"fas fa-microchip"
			],
			[
				"microphone",
				"fas fa-microphone"
			],
			[
				"microphone-alt",
				"fas fa-microphone-alt"
			],
			[
				"microphone-alt-slash",
				"fas fa-microphone-alt-slash"
			],
			[
				"microphone-slash",
				"fas fa-microphone-slash"
			],
			[
				"microscope",
				"fas fa-microscope"
			],
			[
				"microsoft",
				"fab fa-microsoft"
			],
			[
				"minus",
				"fas fa-minus"
			],
			[
				"minus-circle",
				"fas fa-minus-circle"
			],
			[
				"minus-square",
				"fas fa-minus-square"
			],
			[
				"minus-square",
				"far fa-minus-square"
			],
			[
				"mitten",
				"fas fa-mitten"
			],
			[
				"mix",
				"fab fa-mix"
			],
			[
				"mixcloud",
				"fab fa-mixcloud"
			],
			[
				"mixer",
				"fab fa-mixer"
			],
			[
				"mizuni",
				"fab fa-mizuni"
			],
			[
				"mobile",
				"fas fa-mobile"
			],
			[
				"mobile-alt",
				"fas fa-mobile-alt"
			],
			[
				"modx",
				"fab fa-modx"
			],
			[
				"monero",
				"fab fa-monero"
			],
			[
				"money-bill",
				"fas fa-money-bill"
			],
			[
				"money-bill-alt",
				"fas fa-money-bill-alt"
			],
			[
				"money-bill-alt",
				"far fa-money-bill-alt"
			],
			[
				"money-bill-wave",
				"fas fa-money-bill-wave"
			],
			[
				"money-bill-wave-alt",
				"fas fa-money-bill-wave-alt"
			],
			[
				"money-check",
				"fas fa-money-check"
			],
			[
				"money-check-alt",
				"fas fa-money-check-alt"
			],
			[
				"monument",
				"fas fa-monument"
			],
			[
				"moon",
				"fas fa-moon"
			],
			[
				"moon",
				"far fa-moon"
			],
			[
				"mortar-pestle",
				"fas fa-mortar-pestle"
			],
			[
				"mosque",
				"fas fa-mosque"
			],
			[
				"motorcycle",
				"fas fa-motorcycle"
			],
			[
				"mountain",
				"fas fa-mountain"
			],
			[
				"mouse",
				"fas fa-mouse"
			],
			[
				"mouse-pointer",
				"fas fa-mouse-pointer"
			],
			[
				"mug-hot",
				"fas fa-mug-hot"
			],
			[
				"music",
				"fas fa-music"
			],
			[
				"napster",
				"fab fa-napster"
			],
			[
				"neos",
				"fab fa-neos"
			],
			[
				"network-wired",
				"fas fa-network-wired"
			],
			[
				"neuter",
				"fas fa-neuter"
			],
			[
				"newspaper",
				"fas fa-newspaper"
			],
			[
				"newspaper",
				"far fa-newspaper"
			],
			[
				"nimblr",
				"fab fa-nimblr"
			],
			[
				"node",
				"fab fa-node"
			],
			[
				"node-js",
				"fab fa-node-js"
			],
			[
				"not-equal",
				"fas fa-not-equal"
			],
			[
				"notes-medical",
				"fas fa-notes-medical"
			],
			[
				"npm",
				"fab fa-npm"
			],
			[
				"ns8",
				"fab fa-ns8"
			],
			[
				"nutritionix",
				"fab fa-nutritionix"
			],
			[
				"object-group",
				"fas fa-object-group"
			],
			[
				"object-group",
				"far fa-object-group"
			],
			[
				"object-ungroup",
				"fas fa-object-ungroup"
			],
			[
				"object-ungroup",
				"far fa-object-ungroup"
			],
			[
				"odnoklassniki",
				"fab fa-odnoklassniki"
			],
			[
				"odnoklassniki-square",
				"fab fa-odnoklassniki-square"
			],
			[
				"oil-can",
				"fas fa-oil-can"
			],
			[
				"old-republic",
				"fab fa-old-republic"
			],
			[
				"om",
				"fas fa-om"
			],
			[
				"opencart",
				"fab fa-opencart"
			],
			[
				"openid",
				"fab fa-openid"
			],
			[
				"opera",
				"fab fa-opera"
			],
			[
				"optin-monster",
				"fab fa-optin-monster"
			],
			[
				"orcid",
				"fab fa-orcid"
			],
			[
				"osi",
				"fab fa-osi"
			],
			[
				"otter",
				"fas fa-otter"
			],
			[
				"outdent",
				"fas fa-outdent"
			],
			[
				"page4",
				"fab fa-page4"
			],
			[
				"pagelines",
				"fab fa-pagelines"
			],
			[
				"pager",
				"fas fa-pager"
			],
			[
				"paint-brush",
				"fas fa-paint-brush"
			],
			[
				"paint-roller",
				"fas fa-paint-roller"
			],
			[
				"palette",
				"fas fa-palette"
			],
			[
				"palfed",
				"fab fa-palfed"
			],
			[
				"pallet",
				"fas fa-pallet"
			],
			[
				"paper-plane",
				"fas fa-paper-plane"
			],
			[
				"paper-plane",
				"far fa-paper-plane"
			],
			[
				"paperclip",
				"fas fa-paperclip"
			],
			[
				"parachute-box",
				"fas fa-parachute-box"
			],
			[
				"paragraph",
				"fas fa-paragraph"
			],
			[
				"parking",
				"fas fa-parking"
			],
			[
				"passport",
				"fas fa-passport"
			],
			[
				"pastafarianism",
				"fas fa-pastafarianism"
			],
			[
				"paste",
				"fas fa-paste"
			],
			[
				"patreon",
				"fab fa-patreon"
			],
			[
				"pause",
				"fas fa-pause"
			],
			[
				"pause-circle",
				"fas fa-pause-circle"
			],
			[
				"pause-circle",
				"far fa-pause-circle"
			],
			[
				"paw",
				"fas fa-paw"
			],
			[
				"paypal",
				"fab fa-paypal"
			],
			[
				"peace",
				"fas fa-peace"
			],
			[
				"pen",
				"fas fa-pen"
			],
			[
				"pen-alt",
				"fas fa-pen-alt"
			],
			[
				"pen-fancy",
				"fas fa-pen-fancy"
			],
			[
				"pen-nib",
				"fas fa-pen-nib"
			],
			[
				"pen-square",
				"fas fa-pen-square"
			],
			[
				"pencil-alt",
				"fas fa-pencil-alt"
			],
			[
				"pencil-ruler",
				"fas fa-pencil-ruler"
			],
			[
				"penny-arcade",
				"fab fa-penny-arcade"
			],
			[
				"people-arrows",
				"fas fa-people-arrows"
			],
			[
				"people-carry",
				"fas fa-people-carry"
			],
			[
				"pepper-hot",
				"fas fa-pepper-hot"
			],
			[
				"percent",
				"fas fa-percent"
			],
			[
				"percentage",
				"fas fa-percentage"
			],
			[
				"periscope",
				"fab fa-periscope"
			],
			[
				"person-booth",
				"fas fa-person-booth"
			],
			[
				"phabricator",
				"fab fa-phabricator"
			],
			[
				"phoenix-framework",
				"fab fa-phoenix-framework"
			],
			[
				"phoenix-squadron",
				"fab fa-phoenix-squadron"
			],
			[
				"phone",
				"fas fa-phone"
			],
			[
				"phone-alt",
				"fas fa-phone-alt"
			],
			[
				"phone-slash",
				"fas fa-phone-slash"
			],
			[
				"phone-square",
				"fas fa-phone-square"
			],
			[
				"phone-square-alt",
				"fas fa-phone-square-alt"
			],
			[
				"phone-volume",
				"fas fa-phone-volume"
			],
			[
				"photo-video",
				"fas fa-photo-video"
			],
			[
				"php",
				"fab fa-php"
			],
			[
				"pied-piper",
				"fab fa-pied-piper"
			],
			[
				"pied-piper-alt",
				"fab fa-pied-piper-alt"
			],
			[
				"pied-piper-hat",
				"fab fa-pied-piper-hat"
			],
			[
				"pied-piper-pp",
				"fab fa-pied-piper-pp"
			],
			[
				"pied-piper-square",
				"fab fa-pied-piper-square"
			],
			[
				"piggy-bank",
				"fas fa-piggy-bank"
			],
			[
				"pills",
				"fas fa-pills"
			],
			[
				"pinterest",
				"fab fa-pinterest"
			],
			[
				"pinterest-p",
				"fab fa-pinterest-p"
			],
			[
				"pinterest-square",
				"fab fa-pinterest-square"
			],
			[
				"pizza-slice",
				"fas fa-pizza-slice"
			],
			[
				"place-of-worship",
				"fas fa-place-of-worship"
			],
			[
				"plane",
				"fas fa-plane"
			],
			[
				"plane-arrival",
				"fas fa-plane-arrival"
			],
			[
				"plane-departure",
				"fas fa-plane-departure"
			],
			[
				"plane-slash",
				"fas fa-plane-slash"
			],
			[
				"play",
				"fas fa-play"
			],
			[
				"play-circle",
				"fas fa-play-circle"
			],
			[
				"play-circle",
				"far fa-play-circle"
			],
			[
				"playstation",
				"fab fa-playstation"
			],
			[
				"plug",
				"fas fa-plug"
			],
			[
				"plus",
				"fas fa-plus"
			],
			[
				"plus-circle",
				"fas fa-plus-circle"
			],
			[
				"plus-square",
				"fas fa-plus-square"
			],
			[
				"plus-square",
				"far fa-plus-square"
			],
			[
				"podcast",
				"fas fa-podcast"
			],
			[
				"poll",
				"fas fa-poll"
			],
			[
				"poll-h",
				"fas fa-poll-h"
			],
			[
				"poo",
				"fas fa-poo"
			],
			[
				"poo-storm",
				"fas fa-poo-storm"
			],
			[
				"poop",
				"fas fa-poop"
			],
			[
				"portrait",
				"fas fa-portrait"
			],
			[
				"pound-sign",
				"fas fa-pound-sign"
			],
			[
				"power-off",
				"fas fa-power-off"
			],
			[
				"pray",
				"fas fa-pray"
			],
			[
				"praying-hands",
				"fas fa-praying-hands"
			],
			[
				"prescription",
				"fas fa-prescription"
			],
			[
				"prescription-bottle",
				"fas fa-prescription-bottle"
			],
			[
				"prescription-bottle-alt",
				"fas fa-prescription-bottle-alt"
			],
			[
				"print",
				"fas fa-print"
			],
			[
				"procedures",
				"fas fa-procedures"
			],
			[
				"product-hunt",
				"fab fa-product-hunt"
			],
			[
				"project-diagram",
				"fas fa-project-diagram"
			],
			[
				"pump-medical",
				"fas fa-pump-medical"
			],
			[
				"pump-soap",
				"fas fa-pump-soap"
			],
			[
				"pushed",
				"fab fa-pushed"
			],
			[
				"puzzle-piece",
				"fas fa-puzzle-piece"
			],
			[
				"python",
				"fab fa-python"
			],
			[
				"qq",
				"fab fa-qq"
			],
			[
				"qrcode",
				"fas fa-qrcode"
			],
			[
				"question",
				"fas fa-question"
			],
			[
				"question-circle",
				"fas fa-question-circle"
			],
			[
				"question-circle",
				"far fa-question-circle"
			],
			[
				"quidditch",
				"fas fa-quidditch"
			],
			[
				"quinscape",
				"fab fa-quinscape"
			],
			[
				"quora",
				"fab fa-quora"
			],
			[
				"quote-left",
				"fas fa-quote-left"
			],
			[
				"quote-right",
				"fas fa-quote-right"
			],
			[
				"quran",
				"fas fa-quran"
			],
			[
				"r-project",
				"fab fa-r-project"
			],
			[
				"radiation",
				"fas fa-radiation"
			],
			[
				"radiation-alt",
				"fas fa-radiation-alt"
			],
			[
				"rainbow",
				"fas fa-rainbow"
			],
			[
				"random",
				"fas fa-random"
			],
			[
				"raspberry-pi",
				"fab fa-raspberry-pi"
			],
			[
				"ravelry",
				"fab fa-ravelry"
			],
			[
				"react",
				"fab fa-react"
			],
			[
				"reacteurope",
				"fab fa-reacteurope"
			],
			[
				"readme",
				"fab fa-readme"
			],
			[
				"rebel",
				"fab fa-rebel"
			],
			[
				"receipt",
				"fas fa-receipt"
			],
			[
				"record-vinyl",
				"fas fa-record-vinyl"
			],
			[
				"recycle",
				"fas fa-recycle"
			],
			[
				"red-river",
				"fab fa-red-river"
			],
			[
				"reddit",
				"fab fa-reddit"
			],
			[
				"reddit-alien",
				"fab fa-reddit-alien"
			],
			[
				"reddit-square",
				"fab fa-reddit-square"
			],
			[
				"redhat",
				"fab fa-redhat"
			],
			[
				"redo",
				"fas fa-redo"
			],
			[
				"redo-alt",
				"fas fa-redo-alt"
			],
			[
				"registered",
				"fas fa-registered"
			],
			[
				"registered",
				"far fa-registered"
			],
			[
				"remove-format",
				"fas fa-remove-format"
			],
			[
				"renren",
				"fab fa-renren"
			],
			[
				"reply",
				"fas fa-reply"
			],
			[
				"reply-all",
				"fas fa-reply-all"
			],
			[
				"replyd",
				"fab fa-replyd"
			],
			[
				"republican",
				"fas fa-republican"
			],
			[
				"researchgate",
				"fab fa-researchgate"
			],
			[
				"resolving",
				"fab fa-resolving"
			],
			[
				"restroom",
				"fas fa-restroom"
			],
			[
				"retweet",
				"fas fa-retweet"
			],
			[
				"rev",
				"fab fa-rev"
			],
			[
				"ribbon",
				"fas fa-ribbon"
			],
			[
				"ring",
				"fas fa-ring"
			],
			[
				"road",
				"fas fa-road"
			],
			[
				"robot",
				"fas fa-robot"
			],
			[
				"rocket",
				"fas fa-rocket"
			],
			[
				"rocketchat",
				"fab fa-rocketchat"
			],
			[
				"rockrms",
				"fab fa-rockrms"
			],
			[
				"route",
				"fas fa-route"
			],
			[
				"rss",
				"fas fa-rss"
			],
			[
				"rss-square",
				"fas fa-rss-square"
			],
			[
				"ruble-sign",
				"fas fa-ruble-sign"
			],
			[
				"ruler",
				"fas fa-ruler"
			],
			[
				"ruler-combined",
				"fas fa-ruler-combined"
			],
			[
				"ruler-horizontal",
				"fas fa-ruler-horizontal"
			],
			[
				"ruler-vertical",
				"fas fa-ruler-vertical"
			],
			[
				"running",
				"fas fa-running"
			],
			[
				"rupee-sign",
				"fas fa-rupee-sign"
			],
			[
				"rust",
				"fab fa-rust"
			],
			[
				"sad-cry",
				"fas fa-sad-cry"
			],
			[
				"sad-cry",
				"far fa-sad-cry"
			],
			[
				"sad-tear",
				"fas fa-sad-tear"
			],
			[
				"sad-tear",
				"far fa-sad-tear"
			],
			[
				"safari",
				"fab fa-safari"
			],
			[
				"salesforce",
				"fab fa-salesforce"
			],
			[
				"sass",
				"fab fa-sass"
			],
			[
				"satellite",
				"fas fa-satellite"
			],
			[
				"satellite-dish",
				"fas fa-satellite-dish"
			],
			[
				"save",
				"fas fa-save"
			],
			[
				"save",
				"far fa-save"
			],
			[
				"schlix",
				"fab fa-schlix"
			],
			[
				"school",
				"fas fa-school"
			],
			[
				"screwdriver",
				"fas fa-screwdriver"
			],
			[
				"scribd",
				"fab fa-scribd"
			],
			[
				"scroll",
				"fas fa-scroll"
			],
			[
				"sd-card",
				"fas fa-sd-card"
			],
			[
				"search",
				"fas fa-search"
			],
			[
				"search-dollar",
				"fas fa-search-dollar"
			],
			[
				"search-location",
				"fas fa-search-location"
			],
			[
				"search-minus",
				"fas fa-search-minus"
			],
			[
				"search-plus",
				"fas fa-search-plus"
			],
			[
				"searchengin",
				"fab fa-searchengin"
			],
			[
				"seedling",
				"fas fa-seedling"
			],
			[
				"sellcast",
				"fab fa-sellcast"
			],
			[
				"sellsy",
				"fab fa-sellsy"
			],
			[
				"server",
				"fas fa-server"
			],
			[
				"servicestack",
				"fab fa-servicestack"
			],
			[
				"shapes",
				"fas fa-shapes"
			],
			[
				"share",
				"fas fa-share"
			],
			[
				"share-alt",
				"fas fa-share-alt"
			],
			[
				"share-alt-square",
				"fas fa-share-alt-square"
			],
			[
				"share-square",
				"fas fa-share-square"
			],
			[
				"share-square",
				"far fa-share-square"
			],
			[
				"shekel-sign",
				"fas fa-shekel-sign"
			],
			[
				"shield-alt",
				"fas fa-shield-alt"
			],
			[
				"shield-virus",
				"fas fa-shield-virus"
			],
			[
				"ship",
				"fas fa-ship"
			],
			[
				"shipping-fast",
				"fas fa-shipping-fast"
			],
			[
				"shirtsinbulk",
				"fab fa-shirtsinbulk"
			],
			[
				"shoe-prints",
				"fas fa-shoe-prints"
			],
			[
				"shopify",
				"fab fa-shopify"
			],
			[
				"shopping-bag",
				"fas fa-shopping-bag"
			],
			[
				"shopping-basket",
				"fas fa-shopping-basket"
			],
			[
				"shopping-cart",
				"fas fa-shopping-cart"
			],
			[
				"shopware",
				"fab fa-shopware"
			],
			[
				"shower",
				"fas fa-shower"
			],
			[
				"shuttle-van",
				"fas fa-shuttle-van"
			],
			[
				"sign",
				"fas fa-sign"
			],
			[
				"sign-in-alt",
				"fas fa-sign-in-alt"
			],
			[
				"sign-language",
				"fas fa-sign-language"
			],
			[
				"sign-out-alt",
				"fas fa-sign-out-alt"
			],
			[
				"signal",
				"fas fa-signal"
			],
			[
				"signature",
				"fas fa-signature"
			],
			[
				"sim-card",
				"fas fa-sim-card"
			],
			[
				"simplybuilt",
				"fab fa-simplybuilt"
			],
			[
				"sink",
				"fas fa-sink"
			],
			[
				"sistrix",
				"fab fa-sistrix"
			],
			[
				"sitemap",
				"fas fa-sitemap"
			],
			[
				"sith",
				"fab fa-sith"
			],
			[
				"skating",
				"fas fa-skating"
			],
			[
				"sketch",
				"fab fa-sketch"
			],
			[
				"skiing",
				"fas fa-skiing"
			],
			[
				"skiing-nordic",
				"fas fa-skiing-nordic"
			],
			[
				"skull",
				"fas fa-skull"
			],
			[
				"skull-crossbones",
				"fas fa-skull-crossbones"
			],
			[
				"skyatlas",
				"fab fa-skyatlas"
			],
			[
				"skype",
				"fab fa-skype"
			],
			[
				"slack",
				"fab fa-slack"
			],
			[
				"slack-hash",
				"fab fa-slack-hash"
			],
			[
				"slash",
				"fas fa-slash"
			],
			[
				"sleigh",
				"fas fa-sleigh"
			],
			[
				"sliders-h",
				"fas fa-sliders-h"
			],
			[
				"slideshare",
				"fab fa-slideshare"
			],
			[
				"smile",
				"fas fa-smile"
			],
			[
				"smile",
				"far fa-smile"
			],
			[
				"smile-beam",
				"fas fa-smile-beam"
			],
			[
				"smile-beam",
				"far fa-smile-beam"
			],
			[
				"smile-wink",
				"fas fa-smile-wink"
			],
			[
				"smile-wink",
				"far fa-smile-wink"
			],
			[
				"smog",
				"fas fa-smog"
			],
			[
				"smoking",
				"fas fa-smoking"
			],
			[
				"smoking-ban",
				"fas fa-smoking-ban"
			],
			[
				"sms",
				"fas fa-sms"
			],
			[
				"snapchat",
				"fab fa-snapchat"
			],
			[
				"snapchat-ghost",
				"fab fa-snapchat-ghost"
			],
			[
				"snapchat-square",
				"fab fa-snapchat-square"
			],
			[
				"snowboarding",
				"fas fa-snowboarding"
			],
			[
				"snowflake",
				"fas fa-snowflake"
			],
			[
				"snowflake",
				"far fa-snowflake"
			],
			[
				"snowman",
				"fas fa-snowman"
			],
			[
				"snowplow",
				"fas fa-snowplow"
			],
			[
				"soap",
				"fas fa-soap"
			],
			[
				"socks",
				"fas fa-socks"
			],
			[
				"solar-panel",
				"fas fa-solar-panel"
			],
			[
				"sort",
				"fas fa-sort"
			],
			[
				"sort-alpha-down",
				"fas fa-sort-alpha-down"
			],
			[
				"sort-alpha-down-alt",
				"fas fa-sort-alpha-down-alt"
			],
			[
				"sort-alpha-up",
				"fas fa-sort-alpha-up"
			],
			[
				"sort-alpha-up-alt",
				"fas fa-sort-alpha-up-alt"
			],
			[
				"sort-amount-down",
				"fas fa-sort-amount-down"
			],
			[
				"sort-amount-down-alt",
				"fas fa-sort-amount-down-alt"
			],
			[
				"sort-amount-up",
				"fas fa-sort-amount-up"
			],
			[
				"sort-amount-up-alt",
				"fas fa-sort-amount-up-alt"
			],
			[
				"sort-down",
				"fas fa-sort-down"
			],
			[
				"sort-numeric-down",
				"fas fa-sort-numeric-down"
			],
			[
				"sort-numeric-down-alt",
				"fas fa-sort-numeric-down-alt"
			],
			[
				"sort-numeric-up",
				"fas fa-sort-numeric-up"
			],
			[
				"sort-numeric-up-alt",
				"fas fa-sort-numeric-up-alt"
			],
			[
				"sort-up",
				"fas fa-sort-up"
			],
			[
				"soundcloud",
				"fab fa-soundcloud"
			],
			[
				"sourcetree",
				"fab fa-sourcetree"
			],
			[
				"spa",
				"fas fa-spa"
			],
			[
				"space-shuttle",
				"fas fa-space-shuttle"
			],
			[
				"speakap",
				"fab fa-speakap"
			],
			[
				"speaker-deck",
				"fab fa-speaker-deck"
			],
			[
				"spell-check",
				"fas fa-spell-check"
			],
			[
				"spider",
				"fas fa-spider"
			],
			[
				"spinner",
				"fas fa-spinner"
			],
			[
				"splotch",
				"fas fa-splotch"
			],
			[
				"spotify",
				"fab fa-spotify"
			],
			[
				"spray-can",
				"fas fa-spray-can"
			],
			[
				"square",
				"fas fa-square"
			],
			[
				"square",
				"far fa-square"
			],
			[
				"square-full",
				"fas fa-square-full"
			],
			[
				"square-root-alt",
				"fas fa-square-root-alt"
			],
			[
				"squarespace",
				"fab fa-squarespace"
			],
			[
				"stack-exchange",
				"fab fa-stack-exchange"
			],
			[
				"stack-overflow",
				"fab fa-stack-overflow"
			],
			[
				"stackpath",
				"fab fa-stackpath"
			],
			[
				"stamp",
				"fas fa-stamp"
			],
			[
				"star",
				"fas fa-star"
			],
			[
				"star",
				"far fa-star"
			],
			[
				"star-and-crescent",
				"fas fa-star-and-crescent"
			],
			[
				"star-half",
				"fas fa-star-half"
			],
			[
				"star-half",
				"far fa-star-half"
			],
			[
				"star-half-alt",
				"fas fa-star-half-alt"
			],
			[
				"star-of-david",
				"fas fa-star-of-david"
			],
			[
				"star-of-life",
				"fas fa-star-of-life"
			],
			[
				"staylinked",
				"fab fa-staylinked"
			],
			[
				"steam",
				"fab fa-steam"
			],
			[
				"steam-square",
				"fab fa-steam-square"
			],
			[
				"steam-symbol",
				"fab fa-steam-symbol"
			],
			[
				"step-backward",
				"fas fa-step-backward"
			],
			[
				"step-forward",
				"fas fa-step-forward"
			],
			[
				"stethoscope",
				"fas fa-stethoscope"
			],
			[
				"sticker-mule",
				"fab fa-sticker-mule"
			],
			[
				"sticky-note",
				"fas fa-sticky-note"
			],
			[
				"sticky-note",
				"far fa-sticky-note"
			],
			[
				"stop",
				"fas fa-stop"
			],
			[
				"stop-circle",
				"fas fa-stop-circle"
			],
			[
				"stop-circle",
				"far fa-stop-circle"
			],
			[
				"stopwatch",
				"fas fa-stopwatch"
			],
			[
				"stopwatch-20",
				"fas fa-stopwatch-20"
			],
			[
				"store",
				"fas fa-store"
			],
			[
				"store-alt",
				"fas fa-store-alt"
			],
			[
				"store-alt-slash",
				"fas fa-store-alt-slash"
			],
			[
				"store-slash",
				"fas fa-store-slash"
			],
			[
				"strava",
				"fab fa-strava"
			],
			[
				"stream",
				"fas fa-stream"
			],
			[
				"street-view",
				"fas fa-street-view"
			],
			[
				"strikethrough",
				"fas fa-strikethrough"
			],
			[
				"stripe",
				"fab fa-stripe"
			],
			[
				"stripe-s",
				"fab fa-stripe-s"
			],
			[
				"stroopwafel",
				"fas fa-stroopwafel"
			],
			[
				"studiovinari",
				"fab fa-studiovinari"
			],
			[
				"stumbleupon",
				"fab fa-stumbleupon"
			],
			[
				"stumbleupon-circle",
				"fab fa-stumbleupon-circle"
			],
			[
				"subscript",
				"fas fa-subscript"
			],
			[
				"subway",
				"fas fa-subway"
			],
			[
				"suitcase",
				"fas fa-suitcase"
			],
			[
				"suitcase-rolling",
				"fas fa-suitcase-rolling"
			],
			[
				"sun",
				"fas fa-sun"
			],
			[
				"sun",
				"far fa-sun"
			],
			[
				"superpowers",
				"fab fa-superpowers"
			],
			[
				"superscript",
				"fas fa-superscript"
			],
			[
				"supple",
				"fab fa-supple"
			],
			[
				"surprise",
				"fas fa-surprise"
			],
			[
				"surprise",
				"far fa-surprise"
			],
			[
				"suse",
				"fab fa-suse"
			],
			[
				"swatchbook",
				"fas fa-swatchbook"
			],
			[
				"swift",
				"fab fa-swift"
			],
			[
				"swimmer",
				"fas fa-swimmer"
			],
			[
				"swimming-pool",
				"fas fa-swimming-pool"
			],
			[
				"symfony",
				"fab fa-symfony"
			],
			[
				"synagogue",
				"fas fa-synagogue"
			],
			[
				"sync",
				"fas fa-sync"
			],
			[
				"sync-alt",
				"fas fa-sync-alt"
			],
			[
				"syringe",
				"fas fa-syringe"
			],
			[
				"table",
				"fas fa-table"
			],
			[
				"table-tennis",
				"fas fa-table-tennis"
			],
			[
				"tablet",
				"fas fa-tablet"
			],
			[
				"tablet-alt",
				"fas fa-tablet-alt"
			],
			[
				"tablets",
				"fas fa-tablets"
			],
			[
				"tachometer-alt",
				"fas fa-tachometer-alt"
			],
			[
				"tag",
				"fas fa-tag"
			],
			[
				"tags",
				"fas fa-tags"
			],
			[
				"tape",
				"fas fa-tape"
			],
			[
				"tasks",
				"fas fa-tasks"
			],
			[
				"taxi",
				"fas fa-taxi"
			],
			[
				"teamspeak",
				"fab fa-teamspeak"
			],
			[
				"teeth",
				"fas fa-teeth"
			],
			[
				"teeth-open",
				"fas fa-teeth-open"
			],
			[
				"telegram",
				"fab fa-telegram"
			],
			[
				"telegram-plane",
				"fab fa-telegram-plane"
			],
			[
				"temperature-high",
				"fas fa-temperature-high"
			],
			[
				"temperature-low",
				"fas fa-temperature-low"
			],
			[
				"tencent-weibo",
				"fab fa-tencent-weibo"
			],
			[
				"tenge",
				"fas fa-tenge"
			],
			[
				"terminal",
				"fas fa-terminal"
			],
			[
				"text-height",
				"fas fa-text-height"
			],
			[
				"text-width",
				"fas fa-text-width"
			],
			[
				"th",
				"fas fa-th"
			],
			[
				"th-large",
				"fas fa-th-large"
			],
			[
				"th-list",
				"fas fa-th-list"
			],
			[
				"the-red-yeti",
				"fab fa-the-red-yeti"
			],
			[
				"theater-masks",
				"fas fa-theater-masks"
			],
			[
				"themeco",
				"fab fa-themeco"
			],
			[
				"themeisle",
				"fab fa-themeisle"
			],
			[
				"thermometer",
				"fas fa-thermometer"
			],
			[
				"thermometer-empty",
				"fas fa-thermometer-empty"
			],
			[
				"thermometer-full",
				"fas fa-thermometer-full"
			],
			[
				"thermometer-half",
				"fas fa-thermometer-half"
			],
			[
				"thermometer-quarter",
				"fas fa-thermometer-quarter"
			],
			[
				"thermometer-three-quarters",
				"fas fa-thermometer-three-quarters"
			],
			[
				"think-peaks",
				"fab fa-think-peaks"
			],
			[
				"thumbs-down",
				"fas fa-thumbs-down"
			],
			[
				"thumbs-down",
				"far fa-thumbs-down"
			],
			[
				"thumbs-up",
				"fas fa-thumbs-up"
			],
			[
				"thumbs-up",
				"far fa-thumbs-up"
			],
			[
				"thumbtack",
				"fas fa-thumbtack"
			],
			[
				"ticket-alt",
				"fas fa-ticket-alt"
			],
			[
				"tiktok",
				"fab fa-tiktok"
			],
			[
				"times",
				"fas fa-times"
			],
			[
				"times-circle",
				"fas fa-times-circle"
			],
			[
				"times-circle",
				"far fa-times-circle"
			],
			[
				"tint",
				"fas fa-tint"
			],
			[
				"tint-slash",
				"fas fa-tint-slash"
			],
			[
				"tired",
				"fas fa-tired"
			],
			[
				"tired",
				"far fa-tired"
			],
			[
				"toggle-off",
				"fas fa-toggle-off"
			],
			[
				"toggle-on",
				"fas fa-toggle-on"
			],
			[
				"toilet",
				"fas fa-toilet"
			],
			[
				"toilet-paper",
				"fas fa-toilet-paper"
			],
			[
				"toilet-paper-slash",
				"fas fa-toilet-paper-slash"
			],
			[
				"toolbox",
				"fas fa-toolbox"
			],
			[
				"tools",
				"fas fa-tools"
			],
			[
				"tooth",
				"fas fa-tooth"
			],
			[
				"torah",
				"fas fa-torah"
			],
			[
				"torii-gate",
				"fas fa-torii-gate"
			],
			[
				"tractor",
				"fas fa-tractor"
			],
			[
				"trade-federation",
				"fab fa-trade-federation"
			],
			[
				"trademark",
				"fas fa-trademark"
			],
			[
				"traffic-light",
				"fas fa-traffic-light"
			],
			[
				"trailer",
				"fas fa-trailer"
			],
			[
				"train",
				"fas fa-train"
			],
			[
				"tram",
				"fas fa-tram"
			],
			[
				"transgender",
				"fas fa-transgender"
			],
			[
				"transgender-alt",
				"fas fa-transgender-alt"
			],
			[
				"trash",
				"fas fa-trash"
			],
			[
				"trash-alt",
				"fas fa-trash-alt"
			],
			[
				"trash-alt",
				"far fa-trash-alt"
			],
			[
				"trash-restore",
				"fas fa-trash-restore"
			],
			[
				"trash-restore-alt",
				"fas fa-trash-restore-alt"
			],
			[
				"tree",
				"fas fa-tree"
			],
			[
				"trello",
				"fab fa-trello"
			],
			[
				"tripadvisor",
				"fab fa-tripadvisor"
			],
			[
				"trophy",
				"fas fa-trophy"
			],
			[
				"truck",
				"fas fa-truck"
			],
			[
				"truck-loading",
				"fas fa-truck-loading"
			],
			[
				"truck-monster",
				"fas fa-truck-monster"
			],
			[
				"truck-moving",
				"fas fa-truck-moving"
			],
			[
				"truck-pickup",
				"fas fa-truck-pickup"
			],
			[
				"tshirt",
				"fas fa-tshirt"
			],
			[
				"tty",
				"fas fa-tty"
			],
			[
				"tumblr",
				"fab fa-tumblr"
			],
			[
				"tumblr-square",
				"fab fa-tumblr-square"
			],
			[
				"tv",
				"fas fa-tv"
			],
			[
				"twitch",
				"fab fa-twitch"
			],
			[
				"twitter",
				"fab fa-twitter"
			],
			[
				"twitter-square",
				"fab fa-twitter-square"
			],
			[
				"typo3",
				"fab fa-typo3"
			],
			[
				"uber",
				"fab fa-uber"
			],
			[
				"ubuntu",
				"fab fa-ubuntu"
			],
			[
				"uikit",
				"fab fa-uikit"
			],
			[
				"umbraco",
				"fab fa-umbraco"
			],
			[
				"umbrella",
				"fas fa-umbrella"
			],
			[
				"umbrella-beach",
				"fas fa-umbrella-beach"
			],
			[
				"underline",
				"fas fa-underline"
			],
			[
				"undo",
				"fas fa-undo"
			],
			[
				"undo-alt",
				"fas fa-undo-alt"
			],
			[
				"uniregistry",
				"fab fa-uniregistry"
			],
			[
				"unity",
				"fab fa-unity"
			],
			[
				"universal-access",
				"fas fa-universal-access"
			],
			[
				"university",
				"fas fa-university"
			],
			[
				"unlink",
				"fas fa-unlink"
			],
			[
				"unlock",
				"fas fa-unlock"
			],
			[
				"unlock-alt",
				"fas fa-unlock-alt"
			],
			[
				"unsplash",
				"fab fa-unsplash"
			],
			[
				"untappd",
				"fab fa-untappd"
			],
			[
				"upload",
				"fas fa-upload"
			],
			[
				"ups",
				"fab fa-ups"
			],
			[
				"usb",
				"fab fa-usb"
			],
			[
				"user",
				"fas fa-user"
			],
			[
				"user",
				"far fa-user"
			],
			[
				"user-alt",
				"fas fa-user-alt"
			],
			[
				"user-alt-slash",
				"fas fa-user-alt-slash"
			],
			[
				"user-astronaut",
				"fas fa-user-astronaut"
			],
			[
				"user-check",
				"fas fa-user-check"
			],
			[
				"user-circle",
				"fas fa-user-circle"
			],
			[
				"user-circle",
				"far fa-user-circle"
			],
			[
				"user-clock",
				"fas fa-user-clock"
			],
			[
				"user-cog",
				"fas fa-user-cog"
			],
			[
				"user-edit",
				"fas fa-user-edit"
			],
			[
				"user-friends",
				"fas fa-user-friends"
			],
			[
				"user-graduate",
				"fas fa-user-graduate"
			],
			[
				"user-injured",
				"fas fa-user-injured"
			],
			[
				"user-lock",
				"fas fa-user-lock"
			],
			[
				"user-md",
				"fas fa-user-md"
			],
			[
				"user-minus",
				"fas fa-user-minus"
			],
			[
				"user-ninja",
				"fas fa-user-ninja"
			],
			[
				"user-nurse",
				"fas fa-user-nurse"
			],
			[
				"user-plus",
				"fas fa-user-plus"
			],
			[
				"user-secret",
				"fas fa-user-secret"
			],
			[
				"user-shield",
				"fas fa-user-shield"
			],
			[
				"user-slash",
				"fas fa-user-slash"
			],
			[
				"user-tag",
				"fas fa-user-tag"
			],
			[
				"user-tie",
				"fas fa-user-tie"
			],
			[
				"user-times",
				"fas fa-user-times"
			],
			[
				"users",
				"fas fa-users"
			],
			[
				"users-cog",
				"fas fa-users-cog"
			],
			[
				"users-slash",
				"fas fa-users-slash"
			],
			[
				"usps",
				"fab fa-usps"
			],
			[
				"ussunnah",
				"fab fa-ussunnah"
			],
			[
				"utensil-spoon",
				"fas fa-utensil-spoon"
			],
			[
				"utensils",
				"fas fa-utensils"
			],
			[
				"vaadin",
				"fab fa-vaadin"
			],
			[
				"vector-square",
				"fas fa-vector-square"
			],
			[
				"venus",
				"fas fa-venus"
			],
			[
				"venus-double",
				"fas fa-venus-double"
			],
			[
				"venus-mars",
				"fas fa-venus-mars"
			],
			[
				"viacoin",
				"fab fa-viacoin"
			],
			[
				"viadeo",
				"fab fa-viadeo"
			],
			[
				"viadeo-square",
				"fab fa-viadeo-square"
			],
			[
				"vial",
				"fas fa-vial"
			],
			[
				"vials",
				"fas fa-vials"
			],
			[
				"viber",
				"fab fa-viber"
			],
			[
				"video",
				"fas fa-video"
			],
			[
				"video-slash",
				"fas fa-video-slash"
			],
			[
				"vihara",
				"fas fa-vihara"
			],
			[
				"vimeo",
				"fab fa-vimeo"
			],
			[
				"vimeo-square",
				"fab fa-vimeo-square"
			],
			[
				"vimeo-v",
				"fab fa-vimeo-v"
			],
			[
				"vine",
				"fab fa-vine"
			],
			[
				"virus",
				"fas fa-virus"
			],
			[
				"virus-slash",
				"fas fa-virus-slash"
			],
			[
				"viruses",
				"fas fa-viruses"
			],
			[
				"vk",
				"fab fa-vk"
			],
			[
				"vnv",
				"fab fa-vnv"
			],
			[
				"voicemail",
				"fas fa-voicemail"
			],
			[
				"volleyball-ball",
				"fas fa-volleyball-ball"
			],
			[
				"volume-down",
				"fas fa-volume-down"
			],
			[
				"volume-mute",
				"fas fa-volume-mute"
			],
			[
				"volume-off",
				"fas fa-volume-off"
			],
			[
				"volume-up",
				"fas fa-volume-up"
			],
			[
				"vote-yea",
				"fas fa-vote-yea"
			],
			[
				"vr-cardboard",
				"fas fa-vr-cardboard"
			],
			[
				"vuejs",
				"fab fa-vuejs"
			],
			[
				"walking",
				"fas fa-walking"
			],
			[
				"wallet",
				"fas fa-wallet"
			],
			[
				"warehouse",
				"fas fa-warehouse"
			],
			[
				"water",
				"fas fa-water"
			],
			[
				"wave-square",
				"fas fa-wave-square"
			],
			[
				"waze",
				"fab fa-waze"
			],
			[
				"weebly",
				"fab fa-weebly"
			],
			[
				"weibo",
				"fab fa-weibo"
			],
			[
				"weight",
				"fas fa-weight"
			],
			[
				"weight-hanging",
				"fas fa-weight-hanging"
			],
			[
				"weixin",
				"fab fa-weixin"
			],
			[
				"whatsapp",
				"fab fa-whatsapp"
			],
			[
				"whatsapp-square",
				"fab fa-whatsapp-square"
			],
			[
				"wheelchair",
				"fas fa-wheelchair"
			],
			[
				"whmcs",
				"fab fa-whmcs"
			],
			[
				"wifi",
				"fas fa-wifi"
			],
			[
				"wikipedia-w",
				"fab fa-wikipedia-w"
			],
			[
				"wind",
				"fas fa-wind"
			],
			[
				"window-close",
				"fas fa-window-close"
			],
			[
				"window-close",
				"far fa-window-close"
			],
			[
				"window-maximize",
				"fas fa-window-maximize"
			],
			[
				"window-maximize",
				"far fa-window-maximize"
			],
			[
				"window-minimize",
				"fas fa-window-minimize"
			],
			[
				"window-minimize",
				"far fa-window-minimize"
			],
			[
				"window-restore",
				"fas fa-window-restore"
			],
			[
				"window-restore",
				"far fa-window-restore"
			],
			[
				"windows",
				"fab fa-windows"
			],
			[
				"wine-bottle",
				"fas fa-wine-bottle"
			],
			[
				"wine-glass",
				"fas fa-wine-glass"
			],
			[
				"wine-glass-alt",
				"fas fa-wine-glass-alt"
			],
			[
				"wix",
				"fab fa-wix"
			],
			[
				"wizards-of-the-coast",
				"fab fa-wizards-of-the-coast"
			],
			[
				"wolf-pack-battalion",
				"fab fa-wolf-pack-battalion"
			],
			[
				"won-sign",
				"fas fa-won-sign"
			],
			[
				"wordpress",
				"fab fa-wordpress"
			],
			[
				"wordpress-simple",
				"fab fa-wordpress-simple"
			],
			[
				"wpbeginner",
				"fab fa-wpbeginner"
			],
			[
				"wpexplorer",
				"fab fa-wpexplorer"
			],
			[
				"wpforms",
				"fab fa-wpforms"
			],
			[
				"wpressr",
				"fab fa-wpressr"
			],
			[
				"wrench",
				"fas fa-wrench"
			],
			[
				"x-ray",
				"fas fa-x-ray"
			],
			[
				"xbox",
				"fab fa-xbox"
			],
			[
				"xing",
				"fab fa-xing"
			],
			[
				"xing-square",
				"fab fa-xing-square"
			],
			[
				"y-combinator",
				"fab fa-y-combinator"
			],
			[
				"yahoo",
				"fab fa-yahoo"
			],
			[
				"yammer",
				"fab fa-yammer"
			],
			[
				"yandex",
				"fab fa-yandex"
			],
			[
				"yandex-international",
				"fab fa-yandex-international"
			],
			[
				"yarn",
				"fab fa-yarn"
			],
			[
				"yelp",
				"fab fa-yelp"
			],
			[
				"yen-sign",
				"fas fa-yen-sign"
			],
			[
				"yin-yang",
				"fas fa-yin-yang"
			],
			[
				"yoast",
				"fab fa-yoast"
			],
			[
				"youtube",
				"fab fa-youtube"
			],
			[
				"youtube-square",
				"fab fa-youtube-square"
			],
			[
				"zhihu",
				"fab fa-zhihu"
			]
		]
	};

	let allWiSchema = [];

	for (const key in W) {
		if (key == 'instances') continue;

		let sc = typeof W[key].settings == 'undefined' ? {} : W[key].settings;
		
		sc.type = 'object';
		if(typeof sc.properties == 'undefined') sc.properties = {};
		if(typeof sc.required == 'undefined') sc.required = [];
		sc.properties.type = { type: 'string' };
		sc.properties.title = { type: 'string' };
		sc.properties.color = { type: 'string', enum: data.colors };
		sc.properties.icon = { type: 'string', enum: data.faIcons.map(c=>c[1]) };
		if(!sc.required.includes('type')) sc.required.push('type');
		sc.additionalProperties = false;
		allWiSchema.push(sc);
	}

	let schema = {
		type: 'object',
		propertyNames: {
			pattern: '^[a-zA-Z0-9]+$'
		},
		patternProperties: {
			'^[a-zA-Z0-9]+$': {
				type: 'array',
				items: {
					anyOf: allWiSchema
				}
			}
		}
	};
	
	return schema;
};