const products = [
    {
    "marca": "Motorola",
    "modelo": "E40",
    "precio": 41999,
    "stock": 0,
    "img": "https://medias.musimundo.com/medias/00456010-144653-144653-01-144653-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2OTQyMnxpbWFnZS9qcGVnfGg5OS9oM2MvMTAzODEwOTk0OTk1NTAvMDA0NTYwMTAtMTQ0NjUzLTE0NDY1M18wMS0xNDQ2NTNfMDEuanBnX3NpemU1MTV8NTFlMTEyYjM0YzZkOWJmOTY2YWExNDdlMjY3OTgyZmJjZjkzZjU5NDkzMzQ3MTU1ZDRkZTU4N2JlZmFkOTBjMQ",
    "descripcion": "Celular de 6.5 pulgadas IPS. Resolucion 720 x 1600, HD+, 269ppi, HiD, 90Hz. Sistema operativo Android 11. Procesador Unisoc T700, Octa core (1.8GHz), Camara principal 48 + 2 + 2mp. Camara frontal 8 Mp. Capacidad 64Gb / RAM 4GB LPDDR4x eMMC. Lector de tarjeta Micro SD. Permite unificar memorias. Sensores: acelerometro, sensor de proximidad, huella dactilar, desbloqueo facial. Wi Fi bandas 2.4GHz. Bluetooth 5.0. GPS. USB C 2.0. Navegador: Chrome.Entrada de auricular 3.5mm. Bateria de 5000 mAh.",
    "categoria": "celulares",
    "id": "0"
    },
    {
    "marca": "Samsung",
    "modelo": "S20 FE",
    "precio": 134999,
    "stock": 5,
    "img": "https://medias.musimundo.com/medias/00367049-142840-142840-01-142840-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NzIxNHxpbWFnZS9qcGVnfGgzNi9oZDgvMTAzODA0NzA1MTc3OTAvMDAzNjcwNDktMTQyODQwLTE0Mjg0MF8wMS0xNDI4NDBfMDEuanBnX3NpemU1MTV8N2ZhYzc3NDBiYmM0NjNjNWNmNWIxYmFkN2IwYmE0NGQ1YWY1ZTNiYWE5MTY2NjY4YjZhYmMxZTBhNDQ1MzY0ZQ",
    "descripcion": "Celular S20 FE pantalla de 6.5 pulgadas full rectangulo con tecnologia super amoled. Resolucion 1080 x 2400 FHD. Capacidad 128Gb / RAM 6 Gb. Octa core. CPU speed 2.8, 2.4 y 1.8 GHz. Camara trasera 12+12+8MP. Camara trasera 32MP. Reproduccion de video en UHD 4K (3840 x 2160) a 60 fps. Lector de tarjetas Micro SD expandible hasta 1Tb. USB type C. USB 3.2 Gen 1. GPS. Wi Fi 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Bluetooth 5.0. NFC. Sistema operativo Android. Sensor de huella digital.",
    "categoria": "celulares",
    "id": "1"
    },
    {
    "marca": "Samsung",
    "modelo": "S21 FE",
    "precio": 174999,
    "stock": 5,
    "img": "https://medias.musimundo.com/medias/00490005-145096-145096-01-145096-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NjU3NnxpbWFnZS9qcGVnfGgzNC9oM2EvMTAzODEzMDUwODU5ODIvMDA0OTAwMDUtMTQ1MDk2LTE0NTA5Nl8wMS0xNDUwOTZfMDEuanBnX3NpemU1MTV8M2ZkZjI3MDAzY2Y2ZWIyNWY1ZWY1YjZiOGQ2ZTI1MGViM2Q3YWNjMTdkYjQxOGUxNTgwYzQ0YzVmMDBkNjFkMA",
    "descripcion": "Celular de 6.4 pulgadas Ifinity-O display Dynamic Amoled 2X. Procesador Exynos 2100 / Octa Core 2.9 GHz, 2.8 GHz, 2.2GHz. Resolucion 2340 x 1080 (FHD+). Almacenamiento 128 Gb / RAM 6 Gb. Camara posterior 12 + 12 + 8 mp, F1.8 , F2.2 , F2.4 / trasera 32 mp, F2.2. Resolucion de video UHD 8K (7680 x 4320) 60fps. Slow motion 960fps HD,240fps FHD. 5G. USB 3.2 gen 1 Type C. GPS,Glonass,Beidou,Galileo,QZSS. Wi Fi 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Bluetooth v5.0. NFC, IP68. Sistema operativo Android. Navegador: Chrome. Sensores: Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Light Sensor, Proximity Sensor. Bateria de 4500 mAh. Samsung DeX support.",
    "categoria": "celulares",
    "id": "2"
    },
    {
    "marca": "Apple",
    "modelo": "Iphone 13 mini",
    "precio": 527000,
    "stock": 1,
    "img": "https://medias.musimundo.com/medias/00538049-145944-145944-01-145944-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0NjgxNXxpbWFnZS9qcGVnfGhlNS9oNGMvMTAzODE3ODEwNzM5NTAvMDA1MzgwNDktMTQ1OTQ0LTE0NTk0NF8wMS0xNDU5NDRfMDEuanBnX3NpemU1MTV8OTFiZWJhZjY2ZjcyNWFjN2E2MTA5YmVlNGE0MzkxNmRjNWYxOGFhYjA0MTE1MjRlZmYyNDAxNmE0YTlmMzc5NQ",
    "descripcion": "Celular de 5.4 pulgadas OLED. Procesador Chip A15 Bionic. Almacenamiento 128Gb / RAM 4 Gb. Camara frontal 12Mp / trasera 12Mp. NFC. USB-C. Bluetooth 5.0. Sistema operativo iOS 15. WiFi 802.11ax (6tagen.) con MIMO2x2. Radio. Graba y reproduce video. GPS. Navegador Safari. Un gran salto en la duracion de la bateria. Pantalla Super Retina XDR. Diseno resistente con ceramic shield. Mejores fotos y videos con poca luz. Modo cine con baja profundidad de campo y cambios de enfoque automaticos.",
    "categoria": "celulares",
    "id": "3"
    },
    {
    "marca": "Alcatel",
    "modelo": "1 plus",
    "precio": 22779,
    "stock": 10,
    "img": "https://medias.musimundo.com/medias/00493000-145117-145117-01-145117-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MTI2NHxpbWFnZS9qcGVnfGhmMy9oMDMvMTAzODEzMTc5NjM4MDYvMDA0OTMwMDAtMTQ1MTE3LTE0NTExN18wMS0xNDUxMTdfMDEuanBnX3NpemU1MTV8YjQyZTNmZWExNDZjMDMzMWNiZWU0Y2M4MmUyNjM2ZTY4OTY2NDMxYmZkYjAwNzMxMTBiYTZiMjE5YTQ5YzJmYw",
    "descripcion": "Celular de 5 pulgadas FWVGA+ (480*960). Procesador MT6739 Quadcore 1.28GHz. Capacidad 16 Gb / RAM 1 Gb. Camara trasera 5 mp / frontal 2 mp. Bateria de 2000 mAh. Bluetooth 4.2. Slot para tarjetas. Sistema operativo android 11 (edicion go). WI Fi. HDMI. Editor de documentos. Graba y reproduce videos. GPS. Navegador Chrome. Conector de 3.5mm. SIM card: Dual SIM (2 nano SIM + 1 TF card)",
    "categoria": "celulares",
    "id": "4"
    },
    {
    "marca": "Patrick",
    "modelo": "HPK151M11S",
    "precio": 158999,
    "stock": 10,
    "img": "https://medias.musimundo.com/medias/00170002-177118-177118-01.png-177118-01.png-size515?context=bWFzdGVyfGltYWdlc3wyNzE4NDd8aW1hZ2UvcG5nfGhkNC9oZjMvMTAzODA2NjEzMjU4NTQvMDAxNzAwMDItMTc3MTE4LTE3NzExOF8wMS5wbmctMTc3MTE4XzAxLnBuZ19zaXplNTE1fGNiZTNjMmEyMGQwYjI5OWY0MWNiOTQ0NjgzNmNmOWYwYTI2MDMyYzNlMGU4NDVkYjEyNjEzNDllNDUwN2Y0MWM",
    "descripcion": "Eficiencia energética A. Heladera con freezer Cycle Defrost. Dispenser de agua con 2 litros de capacidad. Capacidad bruta de 394 L. Estantes regulables en altura en freezer y refrigerador. Anaqueles en contrapuerta para botellas y alimentos regulables en altura. Luz interior LED.",
    "categoria": "heladeras",
    "id": "5"
    },
    {
    "marca": "Gafa",
    "modelo": "HGF357AFB",
    "precio": 99999,
    "stock": 73,
    "img": "https://medias.musimundo.com/medias/00173000-174258-174258-01.png-174258-01.png-size515?context=bWFzdGVyfGltYWdlc3wyNDExNjN8aW1hZ2UvcG5nfGg2Ni9oZDYvMTAzNzg4NjU2Mzk0NTQvMDAxNzMwMDAtMTc0MjU4LTE3NDI1OF8wMS5wbmctMTc0MjU4XzAxLnBuZ19zaXplNTE1fDBjYzQzNTQ3NGFlYmE3NThkZDE3MWY1Yzc4YzhiMzhjZGE5MGM2MjFlNzkxYTcxZmU0YTEwY2ExMGVlNmI1NWQ",
    "descripcion": "Heladera con freezer. capacidad de almacenamiento de 282lts. Puertas con manija embutida. Estantes de altura regulable. Anaqueles desmontables. Sistema descongelamiento automático. Temperatura regula ble. EE: A.",
    "categoria": "heladeras",
    "id": "6"
    },
    {
    "marca": "BGH",
    "modelo": "B3219K5",
    "precio": 39999,
    "stock": 12,
    "img": "https://medias.musimundo.com/medias/00242038-138228-138228-01-138228-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2MDQ2OXxpbWFnZS9qcGVnfGg0ZC9oNjYvMTA0MzQwMTU1OTI0NzgvMDAyNDIwMzgtMTM4MjI4LTEzODIyOF8wMS0xMzgyMjhfMDEuanBnX3NpemU1MTV8MjM4MDA2ZDI4YThhYTEzZjRlMjYxMmZmOWZmN2Q3MTM1YzE5Y2E4ODNkMmY3NDE1YmE1NzA4NmMwOTdlNTc1ZQ",
    "descripcion": "TV Smart. 32 HD. Resolucion 1366 x 768. Procesador Quad Core. HDMI. WI Fi. USB. Sintonizador TDA. Entradas posteriores de video compuesto y audio analogico. Salida de auriculares. Salida de audio optica. Cuenta con Netflix, YouTube.",
    "categoria": "televisores",
    "id": "7"
    },
    {
    "marca": "Motorola",
    "modelo": " MT32Y001A1B",
    "precio": 53999,
    "stock": 2,
    "img": "https://medias.musimundo.com/medias/00557002-146374-146374-01-146374-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w4NzE4MHxpbWFnZS9qcGVnfGgwNS9oNTIvMTAzODY4NzE3MTM4MjIvMDA1NTcwMDItMTQ2Mzc0LTE0NjM3NF8wMS0xNDYzNzRfMDEuanBnX3NpemU1MTV8MmQ3MDAzOTYyM2ViMmVkMDY0ZjQ2NzdiZjc5MzIwZjVkMjUwZTc2YzY2YjNjYjQ2OTA3YWJkZjQ4NDYyODFmMQ",
    "descripcion": "TV led smart de 32 .Resolucion 1366x768. Cuenta con dos puertos USB y dos puertos HDMI. Sintonizador TDA. Frecuencia de barrido 50HZ/60HZ. Potencia de parlantes 8w RMS (x2). WiFi . Medidas con base 45,6x72,07x16,54 cm",
    "categoria": "televisores",
    "id": "8"
    },
    {
    "marca": "Samsung",
    "modelo": " RT32K5070S8",
    "precio": 189999,
    "stock": 20,
    "img": "https://medias.musimundo.com/medias/00230124-177724-177724-01.png-177724-01.png-size515?context=bWFzdGVyfGltYWdlc3wxMDEzOTR8aW1hZ2UvcG5nfGg1ZC9oOWMvMTA0MzM5NjY3MDI2MjIvMDAyMzAxMjQtMTc3NzI0LTE3NzcyNF8wMS5wbmctMTc3NzI0XzAxLnBuZ19zaXplNTE1fGRmMzFlZjYyNTRlZjM2ZTgzZGMzOTYxMDBiNmNkMmU0NGM2ZWQ1ODY2M2JmNzc0MjRmYmI0YzNkYWU0ZDQxOWE",
    "descripcion": "No Frost. Capacidad 321 lts. Freezer superior. Tecnologia Twin Cooling Plus. Tecnologia Digital Inverter. Power Freeze y Power Cool. Iluminacion interna LED. Estante de vidrio templado.EE: A+",
    "categoria": "heladeras",
    "id": "9"
    }
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
}
export default products