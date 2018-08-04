#  Installation
* Install [Node.js](https://nodejs.org/).
* Install [Git](https://git-scm.com/).
* Install [Yarn](https://yarnpkg.com/en/docs/install#debian-stable).
* Download this project or run the following command in terminal or bash
```git clone https://github.com/sergey0602/Generate-Environment.git```.
* To create an environment open terminal or bash and run the following
command ```node <path to index.js file>```. You can specify the path where you want to generate the environment and the name of the project. To do this, you need to pass the flags ```--project-name``` and ```--path```, respectively. For example ```node index.js --project-name app
--path /home/user/```. In the absence of these flags, the environment will be generated in the current directory with name ```myProject```.
* Navigate to the folder with the generated environment and open terminal or
bash in this folder and run the following command ```yarn install``` to
install the project dependencies.
* After install the project dependencies, run the project in development mode with the command ```yarn run dev``` or in production mode with the command ```yarn run prod```.

