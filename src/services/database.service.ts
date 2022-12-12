import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { games?: mongoDB.Collection } = {};

export async function connectToDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    await db.command({
        collMod: process.env.GAMES_COLLECTION_NAME,
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["videoUrl", "videoUrlDesc", "question", "yesVal", "noVal", "videoUrlTitle"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    videoUrl: {
                        bsonType: "string",
                        description: "'name' is required and is a string",
                    },
                    videoUrlTitle: {
                        bsonType: "string",
                        description: "'videoUrlTitle' is required and is a string",
                    },
                    question: {
                        bsonType: "string",
                        description: "'optionsQuestion' is required and is a string",
                    },
                    optionsQuestionImg: {
                        bsonType: "string",
                        description: "'optionsQuestionImg' is required and is a string",
                    },
                    yesVal: {
                        bsonType: "number", //vaihda string jos tarvii emt miten meinasit
                        description: "'yesVal' is required and is a number",
                    },
                    noVal: {
                        //vaihda string jos tarvii emt miten meinasit
                        bsonType: "number",
                        description: "'noVal' is required and is a number",
                    },
                    videoUrlStaticPicture: {
                        bsonType: "string",
                        description: "'videoUrlTitle: ' is required and is a string",
                    },
                    videoUrlDesc: {
                        bsonType: "string",
                        description: "'VideoUrlDesc' is required and is a string",
                    },
                },
            },
        },
    });

    const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);

    collections.games = gamesCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`,
    );
}