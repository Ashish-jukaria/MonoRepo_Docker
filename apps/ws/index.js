import { prisma } from '../../packages/db/index.js';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        console.log(`Received: ${message}`);

        try {
            const user = await prisma.user.create({
                data: {
                    username: Math.random().toString(),
                    password: Math.random().toString()
                }
            });
            console.log("User inserted:", user);
            ws.send("User inserted successfully");
        } catch (error) {
            console.error("Error inserting user:", error);
            ws.send("Error inserting user");
        }
    });
});
