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

```jsx
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

- #### Paso 1: Inicia sesión con Chromatic 

[inicia sesión en Chromatic](https://www.chromatic.com/start?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook) utilizando las credenciales proporcionadas.

- #### Paso 2: Buscar el proyecto deseado

Una vez que hayas iniciado sesión, busca el proyecto deseado en la lista de proyectos creados en Chromatic.

- #### Paso 3: Explorar builds y componentes

Dentro del proyecto seleccionado, encontrarás una lista de builds creados a partir de diferentes ramas del repositorio. Cada build representa una versión del proyecto en un estado específico.

Selecciona el build deseado para ver los componentes disponibles en esa versión. Dentro de cada build, encontrarás una lista de componentes con la opción de verlos en Storybook.

Haz clic en el botón correspondiente para acceder a Storybook y explorar los componentes en el contexto del build seleccionado.

## ¿Necesitas más información sobre el despliegue?

Si necesitas más detalles sobre cómo desplegar tu proyecto te recomendamos visitar la [documentación de Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react/es/deploy/) para obtener instrucciones detalladas sobre cómo hacerlo.

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
