# ui-seed
Repositorio de semilla de micro front end con single spa.

##Como utilizar la semila
1. Clonar el repositorio
2. Copiar el contenido de la semilla en el nuevo proyecto
3. Remplazar la palabra seed en todos los archivos de la carpeta k8s
4. Remplazar la palabra seed en el archivo Jenkinsfile de la carpeta ci
5. Cambiar el nombre del archivo prisma-seed.js a *-seed donde * es el nombre del micro frontend
6. Cambiar la palabra seed de set-public-path.js por la del nombre del micro front end por ejemplo:
    * setPublicPath("@prisma/seed") a setPublicPath("@prisma/microfront")
7. Remplazar en webpack.config.json el nombre seed por el nombre del micro fornt end

##Como Probar tu micro front end
1. Agregar el micro front end en el container (ver md de ui-container)
2. Levantar el container
3. Levantar el micro front end con npm start
4. Verificar que el js se esta cargando correctamente de la siguiente manera:
    * http://localhost:8080/prisma-seed.js o http://localhost:8080/nombre-microfront.js
5. Ir a la pantalle del container y hacer click en la barra de navegacion donde aparece tu micro front end
   

