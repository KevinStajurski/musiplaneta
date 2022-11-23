const products = [
    {
    "marca": "Motorola",
    "modelo": "E40",
    "precio": 41999,
    "stock": 0,
    "img": "https://medias.musimundo.com/medias/00456010-144653-144653-01-144653-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2OTQyMnxpbWFnZS9qcGVnfGg5OS9oM2MvMTAzODEwOTk0OTk1NTAvMDA0NTYwMTAtMTQ0NjUzLTE0NDY1M18wMS0xNDQ2NTNfMDEuanBnX3NpemU1MTV8NTFlMTEyYjM0YzZkOWJmOTY2YWExNDdlMjY3OTgyZmJjZjkzZjU5NDkzMzQ3MTU1ZDRkZTU4N2JlZmFkOTBjMQ",
    "descripcion": "Celular de 6.5 pulgadas IPS. Resolucion 720 x 1600, HD+, 269ppi, HiD, 90Hz. Sistema operativo Android 11. Procesador Unisoc T700, Octa core (1.8GHz), Camara principal 48 + 2 + 2mp. Camara frontal 8 Mp. Capacidad 64Gb / RAM 4GB LPDDR4x eMMC. Lector de tarjeta Micro SD. Permite unificar memorias. Sensores: acelerometro, sensor de proximidad, huella dactilar, desbloqueo facial. Wi Fi bandas 2.4GHz. Bluetooth 5.0. GPS. USB C 2.0. Navegador: Chrome.Entrada de auricular 3.5mm. Bateria de 5000 mAh.",
    "categoria": "Celulares",
    "id": "0"
    },
    {
    "marca": "Samsung",
    "modelo": "S20 FE",
    "precio": 134999,
    "stock": 5,
    "img": "https://medias.musimundo.com/medias/00367049-142840-142840-01-142840-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NzIxNHxpbWFnZS9qcGVnfGgzNi9oZDgvMTAzODA0NzA1MTc3OTAvMDAzNjcwNDktMTQyODQwLTE0Mjg0MF8wMS0xNDI4NDBfMDEuanBnX3NpemU1MTV8N2ZhYzc3NDBiYmM0NjNjNWNmNWIxYmFkN2IwYmE0NGQ1YWY1ZTNiYWE5MTY2NjY4YjZhYmMxZTBhNDQ1MzY0ZQ",
    "descripcion": "Celular S20 FE pantalla de 6.5 pulgadas full rectangulo con tecnologia super amoled. Resolucion 1080 x 2400 FHD. Capacidad 128Gb / RAM 6 Gb. Octa core. CPU speed 2.8, 2.4 y 1.8 GHz. Camara trasera 12+12+8MP. Camara trasera 32MP. Reproduccion de video en UHD 4K (3840 x 2160) a 60 fps. Lector de tarjetas Micro SD expandible hasta 1Tb. USB type C. USB 3.2 Gen 1. GPS. Wi Fi 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Bluetooth 5.0. NFC. Sistema operativo Android. Sensor de huella digital.",
    "categoria": "Celulares",
    "id": "1"
    },
    {
    "marca": "Samsung",
    "modelo": "S21 FE",
    "precio": 174999,
    "stock": 5,
    "img": "https://medias.musimundo.com/medias/00490005-145096-145096-01-145096-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NjU3NnxpbWFnZS9qcGVnfGgzNC9oM2EvMTAzODEzMDUwODU5ODIvMDA0OTAwMDUtMTQ1MDk2LTE0NTA5Nl8wMS0xNDUwOTZfMDEuanBnX3NpemU1MTV8M2ZkZjI3MDAzY2Y2ZWIyNWY1ZWY1YjZiOGQ2ZTI1MGViM2Q3YWNjMTdkYjQxOGUxNTgwYzQ0YzVmMDBkNjFkMA",
    "descripcion": "Celular de 6.4 pulgadas Ifinity-O display Dynamic Amoled 2X. Procesador Exynos 2100 / Octa Core 2.9 GHz, 2.8 GHz, 2.2GHz. Resolucion 2340 x 1080 (FHD+). Almacenamiento 128 Gb / RAM 6 Gb. Camara posterior 12 + 12 + 8 mp, F1.8 , F2.2 , F2.4 / trasera 32 mp, F2.2. Resolucion de video UHD 8K (7680 x 4320) 60fps. Slow motion 960fps HD,240fps FHD. 5G. USB 3.2 gen 1 Type C. GPS,Glonass,Beidou,Galileo,QZSS. Wi Fi 802.11 a/b/g/n/ac/ax 2.4G+5GHz, HE80, MIMO, 1024-QAM. Bluetooth v5.0. NFC, IP68. Sistema operativo Android. Navegador: Chrome. Sensores: Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Light Sensor, Proximity Sensor. Bateria de 4500 mAh. Samsung DeX support.",
    "categoria": "Celulares",
    "id": "2"
    },
    {
    "marca": "Apple",
    "modelo": "Iphone 13 mini",
    "precio": 527000,
    "stock": 1,
    "img": "https://medias.musimundo.com/medias/00538049-145944-145944-01-145944-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w0NjgxNXxpbWFnZS9qcGVnfGhlNS9oNGMvMTAzODE3ODEwNzM5NTAvMDA1MzgwNDktMTQ1OTQ0LTE0NTk0NF8wMS0xNDU5NDRfMDEuanBnX3NpemU1MTV8OTFiZWJhZjY2ZjcyNWFjN2E2MTA5YmVlNGE0MzkxNmRjNWYxOGFhYjA0MTE1MjRlZmYyNDAxNmE0YTlmMzc5NQ",
    "descripcion": "Celular de 5.4 pulgadas OLED. Procesador Chip A15 Bionic. Almacenamiento 128Gb / RAM 4 Gb. Camara frontal 12Mp / trasera 12Mp. NFC. USB-C. Bluetooth 5.0. Sistema operativo iOS 15. WiFi 802.11ax (6tagen.) con MIMO2x2. Radio. Graba y reproduce video. GPS. Navegador Safari. Un gran salto en la duracion de la bateria. Pantalla Super Retina XDR. Diseno resistente con ceramic shield. Mejores fotos y videos con poca luz. Modo cine con baja profundidad de campo y cambios de enfoque automaticos.",
    "categoria": "Celulares",
    "id": "3"
    },
    {
    "marca": "Alcatel",
    "modelo": "1 plus",
    "precio": 22779,
    "stock": 10,
    "img": "https://medias.musimundo.com/medias/00493000-145117-145117-01-145117-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3MTI2NHxpbWFnZS9qcGVnfGhmMy9oMDMvMTAzODEzMTc5NjM4MDYvMDA0OTMwMDAtMTQ1MTE3LTE0NTExN18wMS0xNDUxMTdfMDEuanBnX3NpemU1MTV8YjQyZTNmZWExNDZjMDMzMWNiZWU0Y2M4MmUyNjM2ZTY4OTY2NDMxYmZkYjAwNzMxMTBiYTZiMjE5YTQ5YzJmYw",
    "descripcion": "Celular de 5 pulgadas FWVGA+ (480*960). Procesador MT6739 Quadcore 1.28GHz. Capacidad 16 Gb / RAM 1 Gb. Camara trasera 5 mp / frontal 2 mp. Bateria de 2000 mAh. Bluetooth 4.2. Slot para tarjetas. Sistema operativo android 11 (edicion go). WI Fi. HDMI. Editor de documentos. Graba y reproduce videos. GPS. Navegador Chrome. Conector de 3.5mm. SIM card: Dual SIM (2 nano SIM + 1 TF card)",
    "categoria": "Celulares",
    "id": "4"
    },
    {
    "marca": "Exer",
    "modelo": "C 292",
    "precio": 44000,
    "stock": 61,
    "img": "https://medias.musimundo.com/medias/00005781-110135-110135-01-110135-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1NDgzMnxpbWFnZS9qcGVnfGhiMC9oNDEvMTAzNzgyNTc4OTEzNTgvMDAwMDU3ODEtMTEwMTM1LTExMDEzNV8wMS0xMTAxMzVfMDEuanBnX3NpemU1MTV8NTQxYmZjN2RiNDc1OTg3YTczNjAzOTE0ZmNmMDIyMDlkNjYxYTVmODhhYzQ4NzFmM2NhZWVmNzk1NjJmMjlkOA",
    "descripcion": "Bici MTB rodado 26. Suspension delantera. 21 Velocidades. Palancas con cubre engranaje. Llantas y cuadro reforzados. Cuadro de Acero Ojos de gato reglamentarios. Colores varios.",
    "categoria": "Bicicletas",
    "id": "8"
    },
    {
    "marca": "Siambretta",
    "modelo": "MTB 5 PRO",
    "precio": 60400,
    "stock": 73,
    "img": "https://medias.musimundo.com/medias/00307124-139630-139630-01-139630-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2MTc5NXxpbWFnZS9qcGVnfGg1Ny9oNGEvMTAzNzk0NjAwMTgyMDYvMDAzMDcxMjQtMTM5NjMwLTEzOTYzMF8wMS0xMzk2MzBfMDEuanBnX3NpemU1MTV8ZTBkNWE4MTIyNzBjNWE2ZGE1MWZlZGVlYjFlOTY0ODBjZTM4OWY2MzA0ODlmYjFjOTdlY2MyM2I1ZjY4MjI3ZQ",
    "descripcion": "Bicicleta Rodado 29. Talle 18. Transmision 21 velocidades. Cuadro MTB SIAMBRETTA 5 PRO. Frenos a disco SLP mecanico. Ruedas MTB SIAMBRETTA 5 PRO. Pie de aluminio regulable. Horquilla suspension SIAMBRETTA. Cambios Shimano tourney tz.",
    "categoria": "Bicicletas",
    "id": "9"
    }
]

// creamos la función
export const getProducts = () => {
    // retornamos una nueva promesa con los productos, simulando una demora de 2 segundos
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    });
}