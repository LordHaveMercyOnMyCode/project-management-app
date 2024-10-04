## Project Management Application

A application to manage your project using next.js , tailwind-css, redux toolkit in the front end and node.js, express.js
prima and postgresql database at the backend.

`packages`

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid lucide-react numeral date-fns axios recharts react-dnd react-dnd-html5-backend gantt-task-react
```

-   `@mui/material @emotion/react @emotion/styled @mui/x-data-grid` : For ui components
-   `lucide-react` : For icons
-   `numeral` : For format numbers
-   `date-fns` : For format dates
-   `axios` : For api calls
-   `recharts` : For charts
-   `react-dnd react-dnd-html5-backend` : For complex drag and drop
-   `gantt-task-react` : Interactive gantt charts

`dev dependencies`

```bash
npm i -D @types/node @types/uuid @types/numeral
```

`server`

```bash
npm i express body-parser cors dotenv helmet morgan prisma @prisma/client
```

```bash
npm i -D ts-node typescript @types/node
```

```bash
npm i -D rimraf concurrently nodemon @types/cors @types/express @types/morgan
```

// command to fix the autoincrement in postgresql

```sql
SELECT setval(pg_get_serial_sequence('"[DATA_MODEL_NAME_HERE]"', 'id'), coalesce(max(id)+1, 1), false) FROM "[DATA_MODEL_NAME_HERE]";


SELECT setval(pg_get_serial_sequence('"Project"', 'id'), coalesce(max(id)+1, 1), false) FROM "Project";
```