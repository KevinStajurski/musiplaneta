import '../App.css'
import ItemList from './ItemList'
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
    }]
const ItemListContainer = () => {
    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer