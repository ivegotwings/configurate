import {
    createServer
} from 'http'
import app from './server'

const server = createServer(app)
let currentApp = app

server.listen(3000, () => {
    // console.log('server listening on port 3000')
})

if (module.hot) {
    module.hot.accept(['./server'], () => {
        server.removeListener('request', currentApp)
        server.on('request', app)
        currentApp = app
    })
}