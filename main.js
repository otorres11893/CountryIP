import fetch from 'node-fetch';
import * as XLSX from 'xlsx';

const wb = XLSX.read(
	'./Prueba de capacidades técnicas - Listado de participantes - reto No. 1.xlsx',
	{ type: 'file' }
);

const wsname = wb.SheetNames[0];
const ws = wb.Sheets[wsname];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

rows.forEach(async (row) => {
	const response = await fetch(`http://www.geoplugin.net/json.gp?ip=${row[1]}`);
	const data = await response.json();
	console.log(row[0], row[1], data.geoplugin_countryName);
});
