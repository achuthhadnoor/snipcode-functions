import {db} from '../../lib/firebase'

export default(req,res)=>{ 
    
    if(!req.body.uid){
        return res.status(404).json({
            error:"User acnnot be empty"
        });
    }
    const ref = db.ref(`users/${req.body.uid}`)
    return ref.set({...req.body}).then(snapshot=>{ 
        res.status(200).json({
            // user:snapshot.val()
            ...req.body
        })
    }).catch((e)=>{
        console.log(e)
        res.status(400).json({
            error:e
        })
    })

}