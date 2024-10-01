const {Router} = require('express');

const router = new Router();

router.get('/',(req,res)=>{
    res.json({generation:res.app.locals.engine.generation});
});

module.exports = router;

