import { Socket } from "socket.io";

export default io => {

    var line_history = [];
    io.on('connection', socket => {
        console.log('new User connected');

        Socket.on('draw_line', data => {
            console.log(data);
;        })
    });

}