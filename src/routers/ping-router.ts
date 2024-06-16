import {Request, Response, Router} from 'express'; 

export const router = Router();

// middleware that is specific to this router
const timeLog = (req: Request, res: Response, next: ()=>void) => {
  console.log('Time: ', Date.now())
  next()
}

router.use(timeLog);

// define the home page route
router.get('/', (req: Request, res:Response) => {
  res.send('Birds home page')
});

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
});
