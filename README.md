![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s)

# Marvel App Next

Una aplicación desarrollada con Next.js para explorar el universo Marvel.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Nota importante](#nota-importante)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Autor](#autores)

## Descripción

Marvel App Next es una aplicación web construida con Next.js que permite a los usuarios explorar y descubrir personajes del universo Marvel, consultar los cómics en los que aparecen y gestionar una lista personalizada de personajes favoritos.

### Nota importante

La API de Marvel puede experimentar tiempos de respuesta lentos para las solicitudes no almacenadas en caché por lo que es posible que haya retrasos en la obtención de datos, especialmente durante la obtención inicial de los mismos. Esto debe tenerse en cuenta al considerar el rendimiento de la aplicación.

## Requisitos Previos

- **Node.js** v14 o superior
- **npm** o **yarn**
- Acceso a la API de Marvel (necesitarás una clave de API)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/marvel-app-next.git
   cd marvel-app-next
   ```
2. Instala las dependencias:
   ```bash
   npm install
   # o si prefieres yarn
   yarn install
   ```
3. Configura las variables de entorno con las claves. Crea un archivo `.env` en la raíz del proyecto y añade tus claves de API de Marvel:

   ```bash
   MARVEL_API_KEY=tu_clave_de_api
   MARVEL_PRIVATE_KEY=tu_clave_privada
   TIME_STAMP=tu_time_stamp
   HASH_MD5=tu_hash_MD5 (crear con las claves de la API)
   ```

4. Generar el hash MD5 - [Enlace a generador de MD5](https://www.md5hashgenerator.com)

   ```bash
   Si tus claves son:

   ts:1000
   privateKey: abcdef
   publicKey: 123456

   Genera el hash con esta estructura: 1000abcdef123456
   ```

5. Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm run dev
# o
yarn dev
```

## Estructura del proyecto

```
marvel-app-next/
├── app/                 # Rutas de la aplicación y páginas principales de Next.js
│   ├── api/             # Rutas API y servicios para obtener datos de la API de Marvel
│   │   ├── characters/  # Funciones API relacionadas con los datos de personajes
│   │   └── comics/      # Funciones API relacionadas con los datos de cómics
│   ├── character/       # Página de detalle del personaje, mostrando información individual del personaje y sus cómics
│   └── favorites/       # Página de favoritos, mostrando una lista de personajes y cómics marcados como favoritos por el usuario
├── components/          # Componentes reutilizables
├── context/             # Configuración del estado global
├── styles/              # Estilos globales
├── types/               # Definiciones de tipos e interfaces de TypeScript
└── tests/               # Pruebas unitarias y de integración
```

## Autores

- [@elisagc](https://github.com/elisagc)
