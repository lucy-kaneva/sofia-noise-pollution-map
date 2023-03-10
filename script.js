function initMap() {
	var openedWindow;
	const template = '<h3>$name</h3>' +
		'<div><span><b>Min:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</b><sapn></sapn><span>$min</span><span>&nbsp;dB</sapn></div>' +
		'<div><b>Avarage:&nbsp</b><span>$avg</span><span>&nbsp;dB</sapn></div>' +
		'<div><b>Max:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</b><span>$max</span><span>&nbsp;dB</sapn></div>';
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 42.684264,
			lng: 23.329075,
		},
		zoom: 14,
		mapId: '7def07987995d84c',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

	const noiseCoordinates = [
		{ lat: 42.68763515164483, lng: 23.328116660076063 },
		{ lat: 42.69236872292052, lng: 23.334122825999287 },
		{ lat: 42.69639074868087, lng: 23.335223956419412 },
	];

	const massermants = [
		{
			x: 42.676274,
			y: 23.333681,
			name: "blvd James Bourchier and blvd Sveti Naum",
			min: 49,
			max: 84,
			avg: 76,
			marker: 'sound.svg',
		},
		{
			x: 42.674365,
			y: 23.328250,
			name: "blvd James Bourchier",
			min: 63,
			max: 103,
			avg: 76,
			marker: 'sound.svg',
		},
		{
			name: "blvd Cherni vrah and blvd James Bourchier",
			x: 42.671253,
			y: 23.320825,
			min: 59,
			max: 95,
			avg: 80,
			marker: 'sound.svg',
		},
		{
			name: "blvd Cherni vrah",
			x: 42.674818,
			y: 23.322219,
			min: 61,
			max: 109,
			avg: 87,
			marker: 'sound.svg',
		},
		{
			name: "Park Center Sofia",
			x: 42.678429,
			y: 23.321754,
			min: 64,
			avg: 80,
			max: 109,
			marker: 'sound.svg',
		},
		{
			name: "blvd Cherni vrah",
			x: 42.680488,
			y: 23.321191,
			min: 60,
			avg: 80,
			max: 102,
			marker: 'sound.svg',
		},
		{
			name: "blvd Cherni vrah",
			x: 42.681844,
			y: 23.320868,
			min: 65,
			avg: 83,
			max: 103,
			marker: 'sound.svg',
		},
		{
			name: "blvd Bulgaria",
			x: 42.681885,
			y: 23.318489,
			min: 66,
			avg: 77,
			max: 91,
			marker: 'sound.svg',
		},
		{
			name: "blvd Bulgaria and blvd Cherni vryh",
			x: 42.682609,
			y: 23.320614,
			min: 63,
			avg: 78,
			max: 95,
			marker: 'sound.svg',
		},
		{
			name: "str Vitosha",
			x: 42.684627,
			y: 23.316209,
			min: 57,
			avg: 77,
			max: 95,
			marker: 'sound.svg',
		},
		{
			name: "blvd Pencho Slaveykov",
			x: 42.683327,
			y: 23.314987,
			min: 67,
			avg: 85,
			max: 102,
			marker: 'sound.svg',
		},
		{
			name: "blvd General Skobelev",
			x: 42.687347,
			y: 23.316575,
			min: 60,
			avg: 77,
			max: 103,
			marker: 'sound.svg',
		},
		{
			name: "blvd Vasil Levski",
			x: 42.686210,
			y: 23.331268,
			min: 62,
			avg: 81,
			max: 96,
			marker: 'sound.svg',
		},
		{
			name: "str Graf Ignatiev",
			x: 42.688093,
			y: 23.328794,
			min: 63,
			avg: 82,
			max: 102,
			marker: 'sound.svg',
		},
		{
			name: "Ploshtad Slaveykov",
			x: 42.691449,
			y: 23.325054,
			min: 65,
			avg: 79,
			max: 103,
			marker: 'sound.svg',
		},
		{
			name: "blvd Rakovski",
			x: 42.690684,
			y: 23.323493,
			min: 62,
			avg: 76,
			max: 84,
			marker: 'sound.svg',
		},
		{
			name: "blvd Rakovski",
			x: 42.692648,
			y: 23.326739,
			min: 64,
			avg: 80,
			max: 102,
			marker: 'sound.svg',
		},
		{
			name: "str Solunska",
			x: 42.692463,
			y: 23.323712,
			min: 59,
			avg: 80,
			max: 102,
			marker: 'sound.svg',
		},
		{
			name: "blvd General Gurko",
			x: 42.695805,
			y: 23.327755,
			min: 59,
			avg: 82,
			max: 93,
			marker: 'sound.svg',
		},
		{
			name: "blvd Tsar Osvoboditel",
			x: 42.695155,
			y: 23.329350,
			min: 63,
			avg: 82,
			max: 109,
			marker: 'sound.svg',
		},
		{
			name: "blvd Tsar Osvoboditel",
			x: 42.694362,
			y: 23.331392,
			min: 67,
			avg: 83,
			max: 110,
			marker: 'sound.svg',
		},
		{
			name: "str Oborishte",
			x: 42.695697,
			y: 23.333761,
			min: 62,
			avg: 73,
			max: 103,
			marker: 'sound.svg',
		},
		{
			name: "str 15ti Noemvri",
			x: 42.694926,
			y: 23.332602,
			min: 59,
			avg: 70,
			max: 94,
			marker: 'sound.svg',
		},
		{
			name: "blvd General Gurko",
			x: 42.691088,
			y: 23.329471,
			min: 56,
			avg: 78,
			max: 91,
			marker: 'sound.svg',
		},
		{
			name: "blvd General Gurko",
			x: 42.689264,
			y: 23.332780,
			min: 59,
			avg: 73,
			max: 102,
			marker: 'sound.svg',
		},
		{
			name: "Vasil Levski Stadium",
			x: 42.688488,
			y: 23.334108,
			min: 56,
			avg: 82,
			max: 109,
			marker: 'sound.svg',
		},
		{
			name: "blvd Vasil Levski",
			x: 42.689263,
			y: 23.335840,
			min: 56,
			avg: 78,
			max: 91,
			marker: 'sound.svg',
		},
		{
			name: "Orlov most",
			x: 42.690360,
			y: 23.337579,
			min: 63,
			avg: 83,
			max: 102,
			marker: 'sound.svg',
		},
		{
			name: "blvd Evlogi and Hristo Georgievi",
			x: 42.690292,
			y: 23.336449,
			min: 59,
			avg: 83,
			max: 96,
			marker: 'sound.svg',
		},
		{
			name: "blvd Tsarigratsko shose",
			x: 42.686591,
			y: 23.343169,
			min: 64,
			avg: 85,
			max: 109,
			marker: 'sound.svg',
		}
		,
		{
			name: "Telivizionna kula",
			x: 42.677542,
			y: 23.341799,
			min: 59,
			avg: 81,
			max: 103,
			marker: 'sound.svg',
		}
		,
		{
			name: "blvd Dragan Tsankov",
			x: 42.682410,
			y: 23.335726,
			min: 62,
			avg: 78,
			max: 93,
			marker: 'sound.svg',
		}
		,
		{
			name: "blvd Bulgaria",
			x: 42.681559,
			y: 23.313194,
			min: 63,
			avg: 81,
			max: 109,
			marker: 'sound.svg',
		}
		,
		{
			name: "blvd Pencho Slaveykov",
			x: 42.685436,
			y: 23.312417,
			min: 65,
			avg: 76,
			max: 84,
			marker: 'sound.svg',
		}
		,
		{
			name: "blvd General Skobelev",
			x: 42.690486,
			y: 23.312647,
			min: 63,
			avg: 79,
			max: 84,
			marker: 'sound.svg',
		}
		,
		{
			name: "Ruski pametnik",
			x: 42.692071,
			y: 23.310688,
			min: 75,
			avg: 86,
			max: 107,
			marker: 'sound.svg',
		}
		,
		{
			name: "Ploshtad Macedonia",
			x: 42.694622,
			y: 23.315225,
			min: 56,
			avg: 78,
			max: 93,
			marker: 'sound.svg',
		}
		,
		{
			name: "Serdika",
			x: 42.697726,
			y: 23.321546,
			min: 57,
			avg: 82,
			max: 102,
			marker: 'sound.svg',
		}
		,
		{
			name: "str Alabin",
			x: 42.695105,
			y: 23.318957,
			min: 55,
			avg: 78,
			max: 93,
			marker: 'sound.svg',
		}
		,
		{
			name: "blvd Patriarch Evtimiy",
			x: 42.688734,
			y: 23.321827,
			min: 56,
			avg: 78,
			max: 93,
			marker: 'sound.svg',
		}
		,
		{
			name: "blvd Rakovski",
			x: 42.687614,
			y: 23.323040,
			min: 57,
			avg: 69,
			max: 84,
			marker: 'sound.svg',
		}
		,
		{
			name: "blvd Sveti Naum",
			x: 42.677963,
			y: 23.329053,
			min: 64,
			avg: 80,
			max: 96,
			marker: 'sound.svg',
		}
	];


	for (let i = 0; i < massermants.length; i++) {
		const currMarker = massermants[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker.x, lng: currMarker.y },
			map,
			title: '',
			icon: {
				url: getMarker(currMarker.avg),
				scaledSize: new google.maps.Size(24, 24),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: template.replace('$name', currMarker.name).replace('$max', currMarker.max).replace('$min', currMarker.min).replace('$avg', currMarker.avg),
		});

		marker.addListener('click', () => {
			//noisePath.setMap(null);
			if (openedWindow) {
				openedWindow.close();
			}
			openedWindow = infowindow;
			infowindow.open(map, marker);
		});

	}


	const icons = {
		parking: {
			name: "< 70 dB",
			icon: "sound5.svg",
		},
		library: {
			name: "> 70 dB and < 75 dB",
			icon: "sound4.svg",
		},
		info1: {
			name: "> 75 dB and < 80 dB",
			icon: "sound3.svg",
		},
		info2: {
			name: "> 80 dB and < 85 dB",
			icon: "sound2.svg",
		},
		info3: {
			name: "> 85 dB",
			icon: "sound1.svg",
		}
	};
	const legend = document.getElementById("legend");
    console.log(legend);
	for (const key in icons) {
		const type = icons[key];
		const name = type.name;
		const icon = type.icon;
		const div = document.createElement("div");

		div.innerHTML = '<img src="' + icon + '" style="height:24px;padding-bottom:5px"></img>' +
		'<span style="margin-left: 5px;">' + name + '</span>';
		legend.appendChild(div);
	}
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
	

	window.initMap = initMap;

}


function getMarker(avg) {
	if (avg <= 70) {
		return 'sound5.svg';
	}
	if (avg <= 75 && avg > 70) {
		return 'sound4.svg';
	}
	if (avg < 80 && avg > 75) {
		return 'sound3.svg';
	}
	if (avg < 85 && avg >= 80) {
		return 'sound2.svg';
	}
	if (avg >= 85) {
		return 'sound1.svg';
	}
}

