# Librería de componentes

## Descripción y contexto

Una poderosa librería de React diseñada para simplificar y mejorar el desarrollo de aplicaciones web modernas. Ofreciendo una amplia gama de componentes, esta librería te ayuda a acelerar tu proceso de desarrollo y crear interfaces de usuario atractivas y funcionales de manera eficiente.

## ¿Cómo iniciar?

> Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [sitio web de Node.js.](https://nodejs.org)

- #### Paso 1: Crear un proyecto de react

Si aún no tienes un proyecto de React, sigue las instrucciones en el enlace de React https://react.dev/learn/start-a-new-react-project, o abre tu terminal y ejecuta el siguiente comando:

```bash
npx create-next-app mi-aplicacion-react
```

Esto creará un nuevo directorio llamado "mi-aplicacion-react" con la estructura básica de un proyecto React.

- #### Paso 2: Instalación de la librería

Dirígete al directorio de tu proyecto:

```bash
cd mi-aplicacion-react
```

Ahora, utiliza npm para instalar `@ogticrd/ui-kit`

```bash
npm install @ogticrd/ui-kit
```

- #### Paso 3: Importar y utilizar la librería en tu aplicación

Abre el archivo donde deseas utilizar la librería. Importa la librería al principio del archivo:

```bash
import Button from '@ogticrd/ui-kit/Button';
```

Luego, puedes utilizar los componentes o funciones proporcionadas por la librería en tu aplicación:

```bash
import Button from '@ogticrd/ui-kit/Button';

function MiComponente() {
    return (
        <div>
            <Button onClick={() => console.log('Genial!')}>
                Clickeame
            </Button>
            {/* Otro código de tu aplicación */}
        </div>
    );
}

export default MiComponente;
```

- #### Paso 4: Ejecutar la aplicación

Guarda tus cambios y ejecuta la aplicación:

```bash
npm run dev
```

Visita `http://localhost:3000` en tu navegador para ver tu aplicación en ejecución.

¡Listo! Has completado la instalación de `@ogticrd/ui-kit` en tu proyecto de React. Ahora puedes comenzar a explorar y aprovechar las características que ofrece la librería en tu aplicación.

## Storybook

> La visualización de componentes está disponible con **storybook**.

Utilizando `pnpm`:

```bash
git clone https://github.com/opticrd/sdd-kit.git
cd sdd-kit
pnpm install
pnpm storybook
```
## Uso de Chromatic

> Chromatic nos permite detectar y corregir problemas visuales en nuestra librería, lo que garantiza una experiencia de usuario consistente y de alta calidad.

### Configuración

- #### Paso 1: Instalación 

Agrega el paquete como una dependencia de desarrollo.

```bash
yarn add -D chromatic
```

- #### Paso 2: Inicia sesión con Chromatic 

Una vez que el paquete esté instalado, [inicia sesión con Chromatic](https://www.chromatic.com/start?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook) con tu cuenta de GitHub (Chromatic solo solicitará permisos muy ligeros), luego crearemos un nuevo proyecto que se llama "uikit" y lo sincronizaremos con el repositorio de GitHub que hemos configurado.

Haz click en `Choose GitHub repo` abajo de colaboradores y selecciona tu repositorio.

- #### Paso 3: Ejecutar Chromatic

Copia el `project-token` único que se generó para tu proyecto. Después ejecútala con el siguiente comando para construir e implementar nuestro Storybook. Asegúrate de reemplazar `project-token` con su token de proyecto.

```bash
yarn chromatic --project-token=<project-token>
```

Cuando termines, vas a recibir un enlace `https://random-uuid.chromatic.com` a tu Storybook publicado.

## Integración con CI/CD

Si deseas integrar Chromatic en tu flujo de integración continua (CI) y despliegue continuo (CD), puedes seguir la [documentación de Chromatic sobre integración con CI/CD](https://storybook.js.org/tutorials/intro-to-storybook/react/es/deploy/) para obtener instrucciones detalladas sobre cómo hacerlo.

## Tecnologías

- Lenguaje: [TypeScript](https://www.typescriptlang.org/)
- Framework: [React](https://react.dev/)
- UI Framework: [MUI](https://mui.com/)

## Autor/es

- **Gustavo Valverde** - _Product Manager_ - [@gustavovalverde](https://github.com/gustavovalverde)
- **Kevin Jimenez** - *Technical Lead* - [@akevinieron](https://github.com/akevinieron)
- **Christian de la Cruz** - *Developer* - [@ChristianDC13](https://github.com/ChristianDC13)
- **José Álvarez** - *Developer* - [@JE1999](https://github.com/JE1999)
- **Tomás Familia** - *Developer* - [@Tomas-Alexander](https://github.com/Tomas-Alexander)

## Información adicional

Información de diseño: [https://uxkit.digital.gob.do/](https://uxkit.digital.gob.do/)
