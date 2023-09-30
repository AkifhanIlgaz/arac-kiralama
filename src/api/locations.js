const locations = new Map([
	[
		'1',
		{
			title: 'Avcılar İdo İspark P + R',
			info: 'Sahilde Beltur Kafe Yanındaki İspark',
			full: 'Ambarlı, Deniz Otobüsü İskelesi, 34524 Avcılar/İstanbul',
			map: 'https://www.google.com/maps?ll=40.970567,28.720108&z=15&t=m&hl=tr-TR&gl=US&mapclient=embed&q=40%C2%B058%2714.0%22N+28%C2%B043%2712.4%22E+40.970567,+28.720108@40.9705667,28.7201076'
		}
	],
	[
		'2',
		{
			title: '2 Plan Terminal - Balçova',
			info: 'İstinye Park - Balçova Yanı',
			full: 'BAHÇELERARASI MH. DENİZFENERİ Sk. NO: 2/C',
			map: 'https://www.google.com/maps?ll=38.39828,27.06684&z=15&t=m&hl=tr-TR&gl=US&mapclient=embed&q=38%C2%B023%2753.8%22N+27%C2%B004%2700.6%22E+38.398280,+27.066840@38.39828,27.06684'
		}
	],
	[
		'3',
		{
			title: 'Acıbadem Akasya AVM',
			info: 'AVM içi Kırmızı Otopark -2. Kat',
			full: ' Acıbadem Mahallesi Çeçen Sokak, Akasya Avm No:25',
			map: 'https://www.google.com/maps?ll=41.000627,29.055266&z=15&t=m&hl=tr-TR&gl=US&mapclient=embed&q=41%C2%B000%2702.3%22N+29%C2%B003%2719.0%22E+41.000627,+29.055266@41.0006269,29.055266'
		}
	],
	[
		'4',
		{
			title: 'Bostancı Açık İspark',
			info: 'BOSTANCI MAHALLESİ BAĞDAT CADDESİ BOSTANCI İSKELESİ YANI iSPARK',
			full: 'BOSTANCI MAHALLESİ BAĞDAT CADDESİ BOSTANCI İSKELESİ YANI',
			map: 'https://www.google.com/maps?ll=40.952321,29.090668&z=15&t=m&hl=tr-TR&gl=US&mapclient=embed&q=40%C2%B057%2708.4%22N+29%C2%B005%2726.4%22E+40.952321,+29.090668@40.952321,29.090668'
		}
	]
])

export const getLocation = id => {
	const loc = locations.get(id)
	console.log(loc)
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(loc), 2000)
	})
}

export default locations
