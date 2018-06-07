import bodyParser from 'body-parser'

const setupMiddleware = (app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json())
}

export default setupMiddleware