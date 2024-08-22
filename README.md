# Bloody Clouds
A cloud storage solution with a friendly and intuitive UI. Key features include:<br>
- Registration and authentication. Or you can just play Tetris if you don't feel like registering<br>
- Ability to create folders and upload files, both individually and in batches, including drag-and-drop functionality<br>
- Ability to download previously uploaded files<br>
- Sorting and deleting folders and files<br>
- Option to switch between list and tile views<br>
- Search functionality for folders and files within your cloud<br>
- Ability to set and remove an avatar<br><p>
Both client-side and server-side implementations are provided.</p>

## Application Setup Instructions
Before launching the application, you need to configure the database (replace the login and password for the Mongo cloud database with your own) and adjust the paths to your local machine.<br>
The configuration file for the database and paths is located here:
> server/config/default.json<br>

In this file, you need to change the save paths in the `filePath` and `staticPath` properties to your own.
Add your Mongo cloud account's login and password to the `dbUrl` property.<br>
With correct settings, files uploaded to the application will be saved to the path specified in `filePath` on your local machine.

1. After cloning the application, navigate to the 'client' folder<br>
``` JS
cd client
```

2. Install the packages<br>
``` JS
npm i
```

3. Exit the 'client' folder<br>
``` JS
cd ..
```

4. Navigate to the 'server' folder<br>
``` JS
cd server
```

5. Install the packages<br>
``` JS
npm i
```

6. Start the server<br>
``` JS
npm run dev
```

7. Exit the 'server' folder<br>
``` JS
cd ..
```

8. Navigate to the 'client' folder<br>
``` JS
cd client
```

9. Start the application<br>
``` JS
npm start
```

### Application Stack

Frontend: React, Redux, Redux-thunk, Bootstrap, Axios<br>
Backend: Node.JS, Express, MongoDB, Mongoose, JWT.

### Screenshots
###### Login Page
[![2022-05-26-18-53-1.png](https://i.postimg.cc/nLBjpqnM/2022-05-26-18-53-1.png)](https://postimg.cc/zLDXkbb1)
###### Application Overview
[![2022-05-26-18-47.png](https://i.postimg.cc/2yMr1XwY/2022-05-26-18-47.png)](https://postimg.cc/bSxKMgWV)
###### Folder Creation
[![2022-05-26-18-48.png](https://i.postimg.cc/52qWJtZb/2022-05-26-18-48.png)](https://postimg.cc/MnTFbz6F)
###### Tile View
[![2.png](https://i.postimg.cc/63RdbTjx/2.png)](https://postimg.cc/3484drQt)
###### Cloud Search
[![1-cut-photo-ru.png](https://i.postimg.cc/XY8N8xNf/1-cut-photo-ru.png)](https://postimg.cc/yDDz6mZx)
###### Avatar Change
[![2022-05-26-18-53.png](https://i.postimg.cc/bvwyFbdK/2022-05-26-18-53.png)](https://postimg.cc/K1Ch11PN)
###### Tetris
[![2022-05-27-18-24.png](https://i.postimg.cc/N0KH9StC/2022-05-27-18-24.png)](https://postimg.cc/06qQhtb7)
