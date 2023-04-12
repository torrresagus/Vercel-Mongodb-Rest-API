# Vercel MongoDB REST API

This project is a REST API implemented using Vercel as a Function as a Service (FaaS) platform and MongoDB for data storage.

## Features

- Serverless deployment with Vercel
- MongoDB database
- REST API with CRUD (Create, Read, Update, Delete) operations

## Requirements

- Node.js
- Vercel CLI
- MongoDB Atlas account or access to a MongoDB instance

## Installation

1. Clone the repository:
```sh
  gh repo clone torrresagus/Vercel-Mongodb-Rest-API
```

2. Navigate to the project folder and install dependencies:
```sh
cd Vercel-Mongodb-Rest-API
npm install
```
3. Set up environment variables in a **`.env`** file in the project root (replace **`your_mongo_user`** and **`your_mongo_password`** with your MongoDB user and password):
```sh
MONGO_USER="your_mongo_user"
MONGO_PASSWORD="your_mongo_password"
```
In **`index.js`**, make sure you are using the MongoDB URI with the correct cluster name, database name, and environment variables for the user and password:
```sh
const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@your_cluster.mongodb.net/your_database_name?retryWrites=true&w=majority`;
```
Replace **`your_cluster_name`** and **`your_database_name`** with your MongoDB cluster and database information accordingly

## Running Locally

To run the project locally, use the Vercel CLI:
```sh
vercel dev
```

This will start the development server, and you can access the API at `http://localhost:3000/api/your_endpoint`.

## Deployment

To deploy the project to Vercel, follow these steps:

1. Log in to your Vercel account using the CLI:
```sh
vercel login
```

2. Deploy your project to Vercel:
```sh
vercel
```

Vercel will automatically detect the configuration and deploy your project. You'll receive a deployment URL like this: `https://your-project-name-your-username.vercel.app`.

## Learning Exercise

This API is part of a learning exercise from a course taught by Nicolás Schürmann, a software engineer and instructor known as "Hola Mundo." The project aims to reinforce the concepts and techniques taught in the course and to provide hands-on experience in building serverless applications with Vercel and MongoDB.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.




