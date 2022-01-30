//Importation des librairies

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import Sanitizer from 'sanitizer';

/**
 * @param  {} import.meta.url
 * @param  {} constdirname=path.dirname(filename
 */

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const port = 8070
const host = '127.0.0.1'

/**
 * @param  {true}} app.use(express.urlencoded({extended
 */

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static(path.join(dirname, 'public')))
app.use('/favicon.ico', express.static(path.join(dirname, 'public', 'images', 'favicon.png')))

/**
 * @param  {} '/'
 * @param  {} (req
 * @param  {} res
 * @param  {} =>{res.sendFile('index.html'
 * @param  {path.join(dirname} {root
 */

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(dirname) }, err => {
    if (err) throw new Error(err)
  })
})

/**
 * @param  {} '/comment'
 * @param  {} (req
 * @param  {} res
 * @param  {} =>{constcomment=Sanitizer.sanitize(req.body.message
 * @param  {} ;commentif(comment
 * @param  {} {returnres.status(200
 * @param  {} .send(comment
 * @param  {} }res.status(401
 * @param  {} .send('Accèsinterdit!'
 * @param  {} }
 */

app.post('/comment', (req, res) => {
 const comment = Sanitizer.sanitize(req.body.message);
 comment 
 if(comment){
   return res.status(200).send(comment) 
 }
 res.status(401).send('Accès interdit !')
});

app.listen(port, host, () => { console.info(`Server started @ http://${host}:${port}.`) })
